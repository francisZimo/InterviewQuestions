<template>
  <div id="app">
    <parent-child></parent-child>
   <custom-model></custom-model>
    <next-tick></next-tick>
    <slot-demo></slot-demo>
    <mixin-demo></mixin-demo>
    <life-cycle></life-cycle>
  </div>
</template>

<script>

import ParentChild from './components/transferProps'
import CustomModel from './components/customVModel'
import NextTick from './components/nextTick'
import SlotDemo from './components/slotCmp'
import MixinDemo from './components/mixin/mixinDemo'
import LifeCycle from './components/lifeCycle'


export default {
  name: 'App',
  components: {
    ParentChild,
    CustomModel,
    NextTick,
    SlotDemo,
    MixinDemo,
    LifeCycle

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
