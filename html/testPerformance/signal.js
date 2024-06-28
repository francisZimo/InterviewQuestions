/* eslint-disable */
'use strict'
/**
 * 课件与端通信
 * 端发送消息给课件：通过调用课件暴露的全局函数
 * 课件发送消息给端：页面引入本文件，建立通信、兼容新旧三端
 * @name  {Function} receiveFromCourseware 课件发送消息给端
 * @param {Object} data 携带的消息参数
 * @date  {Date} <20200629>
 * @version {String} <v0.1.6>
 * @Content 增加try-catch容错处理/规范课件日志
 * @author {String} <dongkeying@100tal.com>
 */
window.receiveFromCourseware = (function () {

  var platformMap = ['android', 'ios', 'mac', 'windows', 'postmessage', 'browser']
  var platformType = getUrlParam('cw_platform')
  var maxTry = 5
  var signalVersion = 'v0.1.6'
  // if (platformMap.indexOf(platformType) === "browser") { //在浏览器预览
  //     console.log("xesweblog:From signal.js ===> preview courseware in browser,location: " + location.search + " signalVersion: " + signalVersion);
  //     return function receiveFromCourseware() {}
  // }
  function log(content) {
    // console.log('xesweblog: signal.js: ' + content)
  }

  function error(content) {
    // console.error('xesweblog: signal.js: Error: ' + content)
  }
  /**
   * 获取地址栏参数 getUrlParam
   * @param {String} key 根据key值返回对应的value值
   */
  function getUrlParam(key) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
    var parameter = location.search || location.hash
    var match = parameter.match(reg)
    return match && match[1]
  }
  log('platformType: ' + platformType + ' & signalVersion: ' + signalVersion)
  /**
   * 兼容postMessage接收消息
   */
  if (platformType === 'postmessage' || platformType === null) {
    log('Mode : postMessage')
    window.addEventListener('message', function (e) {
      // console.log(e, 'postMessage')
      if (e.data !== undefined) {
        transmitToCourseware(e.data)
      } else {
        error('e.data undefined! e:' + JSON.stringify(e))
      }
    }, false)
  }
  /**
   * mac PC端通信 使用qwebchannel.js建立通信
   */
  if (platformType === 'mac' || platformType === 'windows') registerFunction()

  function registerFunction() {
    if (typeof QCefClient === 'undefined' && platformType === 'mac') {
      log('Mode : Mac')
      var script = document.createElement('script')
      script.src = 'qrc:///qtwebchannel/qwebchannel.js'
      document.getElementsByTagName('head')[0].appendChild(script)
      script.onload = function () {
        new QWebChannel(qt.webChannelTransport, function (channel) {
          window.bridges = channel.objects.bridges
        })
      }
      script.onerror = function (e) { // 如果通信JS加载失败，尝试重新加载
        qwebChannelJsChange()
      }
    } else {
      log('Mode : Windows')
      try {
        QCefClient.addEventListener('invokeJsFunction', function (event) {
          if (event.type == 'function') eval(event.data)
        })
      } catch (e) {
        error('Error : QCefClient : ' + e)
      }
    }
  }
  /**
   * mac PC端通信 qwebchannel.js轮询加载
   */
  function qwebChannelJsChange(index) {
    var index = index || 0
    var script = document.createElement('script')
    script.src = 'qrc:///qtwebchannel/qwebchannel.js'
    document.getElementsByTagName('head')[0].appendChild(script)
    log('loading qwebchannel ' + index)
    if (index < maxTry) {
      script.onload = function () {
        new QWebChannel(qt.webChannelTransport, function (channel) {
          window.bridges = channel.objects.bridges
        })
      }
      script.onerror = function (e) {
        qwebChannelJsChange(index + 1)
      }
    } else {
      error('qwebChannel load failed,maxTry=' + maxTry)
    }
  }
  /**
   * mac PC端通信 建立轮询机制
   */
  function onInvokeQtFunction(method, args) {
    args = args || ''
    // console.log(QCefClient, typeof QCefClient === 'undefined', typeof QCefClient == 'undefined');
    if (typeof QCefClient === 'undefined') {
      if (window.bridges !== undefined) {
        window.bridges.invokeMethod(method, args)
      } else {
        var timer = setInterval(function () {
          if (window.bridges === undefined) {
            maxTry--
          } else if (maxTry === 0) {
            clearInterval(timer)
            error('onInvokeQtFunction(' + method + ') timeout, failed!')
          } else {
            clearInterval(timer)
            window.bridges.invokeMethod(method, args)
          }
        }, 500)
      }
    } else {
      QCefClient.invokeMethod(method, args)
    }
  }
  /*
   * 发送消息到客户端 sendMessageToNative
   */
  function sendMessageToNative(msgInfo) {
    switch (platformType) {
      case platformMap[0]: // ad
        if (window.xesApp && window.xesApp.postMessage) {
          log('Mode : Android, data:' + msgInfo)
          window.xesApp.postMessage('coursewareToNative', msgInfo)
        } else {
          error('Android: xesApp undefined')
        }
        break
      case platformMap[1]: // ios
        if (window.webkit) {
          var sendData = {
            where: 'coursewareToNative',
            message: JSON.parse(msgInfo)
          }
          log('Mode : Ios, data:' + msgInfo)
          window.webkit.messageHandlers.xesApp.postMessage(JSON.stringify(sendData))
        } else {
          error('IOS: webkit undefined')
        }
        break
      case platformMap[2]: // mac
        log('Mac : data:' + msgInfo)
        onInvokeQtFunction('coursewareToNative', msgInfo)
        break
      case platformMap[3]: // windows
        log('Windows : data:' + msgInfo)
        onInvokeQtFunction('coursewareToNative', msgInfo)
        break
      case platformMap[4]: // pc-postMessage-全身直播
        log('PostMessage : data:' + msgInfo)
        window.parent.postMessage(JSON.parse(msgInfo), '*')
        break
      default: // 兼容旧客户端注入JS的情况
        log('data from courseware--' + msgInfo + ', --platformType:' + platformType + ' ,--oldClient')
        window.parent.postMessage(JSON.parse(msgInfo), '*')
    }
  }
  /**
   * 三端通信 根据UA区分，发送消息
   */
  return function receiveFromCourseware(data) {

    // console.log("xesweblog:From signal.js ===> receiveFromCourseware parameter" + data);
    var msgInfo = ''
    if (typeof data === 'object') {
      msgInfo = JSON.stringify(data)
    } else if (typeof data === 'string') {
      msgInfo = data
    } else {
      var msgType = typeof data
      msgInfo = String(data) + msgType
    }
    console.log('receiveFromCourseware: ' + msgInfo)
    sendMessageToNative(msgInfo)
  }
})()
window['registerBridgeFinish'] = true;