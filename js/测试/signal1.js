"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    receiveFromCourseware = function () {
        function getUrlParam(e) {
            var o = new RegExp("[?|&]" + e + "=([^&]+)"),
                n = location.search.match(o);
                console.log(n,'==增则匹配',location,location.hash)
            return n && n[1]
        }

        function registerFunction() {
            if ("undefined" == typeof QCefClient && "mac" === platformType) {
                console.log("xesweblog:From signal.js ===> （typeof QCefClient === undefined && platformType === mac） is true");
                var script = document.createElement("script");
                script.src = "qrc:///qtwebchannel/qwebchannel.js", document.getElementsByTagName("head")[0].appendChild(script), script.onload = function () {
                    new QWebChannel(qt.webChannelTransport, function (e) {
                        window.bridges = e.objects.bridges
                    })
                }, script.onerror = function (e) {
                    qwebChannelJsChange()
                }
            } else console.log("xesweblog:From signal.js ===> （typeof QCefClient === undefined && platformType === mac）is false"), QCefClient.addEventListener("invokeJsFunction", function (event) {
                "function" == event.type && eval(event.data)
            })
        }

        function qwebChannelJsChange(e) {
            var e = e || 0,
                o = document.createElement("script");
            o.src = "qrc:///qtwebchannel/qwebchannel.js", document.getElementsByTagName("head")[0].appendChild(o), console.log("xesweblog:From signal.js ===> loading qwebchannel.js " + e), e < maxTry ? (o.onload = function () {
                new QWebChannel(qt.webChannelTransport, function (e) {
                    window.bridges = e.objects.bridges
                })
            }, o.onerror = function (o) {
                qwebChannelJsChange(e + 1)
            }) : console.error("xesweblog:From signal.js ===> qwebChannelJsFaile,reason:maxTry=" + maxTry)
        }

        function onInvokeQtFunction(e, o) {
            if (o = o || "", "undefined" == typeof QCefClient)
                if (void 0 !== window.bridges) window.bridges.invokeMethod(e, o);
                else var n = setInterval(function () {
                    void 0 === window.bridges ? maxTry-- : 0 === maxTry ? (clearInterval(n), console.error("xesweblog:From signal.js ===> onInvokeQtFunction(" + e + ") timeout, failed!")) : (clearInterval(n), window.bridges.invokeMethod(e, o))
                }, 500);
            else QCefClient.invokeMethod(e, o)
        }

        function sendMessageToNative(e) {
            switch (platformType) {
                case platformMap[0]:
                    window.xesApp && window.xesApp.postMessage ? (console.log("xesweblog:From signal.js ===> window.xesApp normal, android send data:--" + e), window.xesApp.postMessage("coursewareToNative", e)) : console.error("xesweblog:From signal.js ===> Android browser window.xesApp OR window.xesApp.postMessage undefined");
                    break;
                case platformMap[1]:
                    if (window.webkit) {
                        var o = {
                            where: "coursewareToNative",
                            message: JSON.parse(e)
                        };
                        console.log("xesweblog:From signal.js ===> window.webkit normal,ios send data:--" + e), window.webkit.messageHandlers.xesApp.postMessage(JSON.stringify(o))
                    } else console.error("xesweblog:From signal.js ===> IOS browser window.webkit undefined");
                    break;
                case platformMap[2]:
                    console.log("xesweblog:From signal.js ===> onInvokeQtFunction normal, mac send data:--" + e), onInvokeQtFunction("coursewareToNative", e);
                    break;
                case platformMap[3]:
                    console.log("xesweblog:From signal.js ===> onInvokeQtFunction normal, windows send data:--" + e), onInvokeQtFunction("coursewareToNative", e);
                    break;
                case platformMap[4]:
                    console.log("xesweblog:From signal.js ===> onInvokeQtFunction normal, postmessage send data:--" + e), window.parent.postMessage(JSON.parse(e), "*");
                    break;
                default:
                    console.log("xesweblog:From signal.js ===> data from courseware--" + e + ", --platformType:" + platformType + " ,--oldClient"), window.parent.postMessage(JSON.parse(e), "*")
            }
        }
        var platformMap = ["android", "ios", "mac", "windows", "postmessage", "browser"],
            platformType = getUrlParam("cw_platform"),
            maxTry = 5,
            signalVersion = "v0.1.4";
            console.log(platformType,'===platformType')
        return console.log("xesweblog:From signal.js ===> preview courseware in " + platformType + " signalVersion: " + signalVersion), "postmessage" !== platformType && null !== platformType || (console.log("xesweblog:From signal.js ===> postMessage"), window.addEventListener("message", function (e) {
                void 0 !== e.data ? transmitToCourseware(e.data) : console.error("xesweblog:From signal.js ===> postMessage receive e.data undefined!e:" + JSON.stringify(e))
            }, !1)), "mac" !== platformType && "windows" !== platformType || registerFunction(),
            function (e) {
                var o = "";
                if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) o = JSON.stringify(e);
                else if ("string" == typeof e) o = e;
                else {
                    var n = "undefined" == typeof e ? "undefined" : _typeof(e);
                    o = String(e) + n
                }
                console.log("xesweblog:From signal.js ===> receiveFromCourseware parameter after format" + o), sendMessageToNative(o)
            }
    }();