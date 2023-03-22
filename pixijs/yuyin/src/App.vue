<template>
  <div>语音测试</div>
  <div class="con-wrapper" ref="conDom" v-html="testCon"></div>
  <div class="btn" @click="handleRoute('bowen')">波纹</div>
  <div class="btn" @click="handleRoute('game')">游戏</div>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue';
import WXJsBridge from '@xes/wxjsbridge';
import { useRouter } from 'vue-router';
const conDom: Ref<HTMLDivElement | null> = ref(null);
const testCon: Ref<string> = ref('');

const router = useRouter();

const handleRoute = (params: string) => {
  router.push({
    path: `/${params}`
  });
};

onMounted(() => {
  testCon.value = '我是测试数据';
  setTimeout(() => {
    testCon.value = '我<i>是</i>测试<i>数据</i>';
  }, 3000);
});
// WXJsBridge.playVoice(
//   {
//     url: 'https://www.xzmp3.com/down/941e80129a35.mp3' // url 播放语音路径，可以为本地路径也可以为网络资源
//   },
//   (err, res) => {
//     // console.log(res, '=ress', err);
//   }
// );

// WXJsBridge.openRecordPage(
//   {
//     completeMessage: '录音结束', //录音结束时toast提示
//     maxRecordTime: 60, //录音最长时长 ，默认 60s
//     minRecordTime: 1, //录音最短时长，默认1s
//     buryIds: { click_record_start: 'click_01_01' }, //埋点id eg: {'click_record_start':'click_01_01'}
//     buryParams: { stuId: 22 } //埋点公参
//   },
//   (err, res) => {
//     console.log('res', res);
//     /* res以object形式返回
//   {
//      'url':'', //录音资源文件网络地址mp3格式
//   }
//  */
//   }
// );

// WXJsBridge.startRecord(
//   {
//     saveLocation: 1 //是否需要保存本地 0否、1是，保存本地后会在stopRecord中返回回调path
//     // format         音频资源格式 0:pcm(默认) 1:mp3
//   },
//   (err, res) => {
//     console.log(res, '==保存在本地了');
//     /* res以object形式返回
//   {
//     'data':''   // base64数据
//   }
//  */
//   }
// );

// setTimeout(() => {
//   WXJsBridge.pauseVoice();
// }, 10000);
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 40px;
  display: inline-block;
  padding: 5px 10px;
  background-color: beige;
  margin-right: 10px;
  cursor: pointer;
}
div {
  font-size: 20px;
}
</style>

<style lang="scss">
.con-wrapper {
  span,
  i {
    color: red;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
