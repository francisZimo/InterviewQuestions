<template>
  <div id="app">
    <parent-child></parent-child>
   <custom-model></custom-model>
    <next-tick></next-tick>
    <slot-demo></slot-demo>
    <mixin-demo></mixin-demo>
    <life-cycle></life-cycle>
      <hr>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script>
import {add} from '@smart-mini-cli/testdemo'
import {subtract} from '@smart-mini-cli/use'
import ParentChild from './components/transferProps'
import CustomModel from './components/customVModel'
import NextTick from './components/nextTick'
import SlotDemo from './components/slotCmp'
import MixinDemo from './components/mixin/mixinDemo'
import LifeCycle from './components/lifeCycle'
import ShoppingCart from './components/shoppingCart'

export default {
  name: 'App',
  components: {
    ParentChild,
    CustomModel,
    NextTick,
    SlotDemo,
    MixinDemo,
    LifeCycle,
    ShoppingCart

  },
  mounted() {
    // console.log(add(3,7),'==add')
    console.log('1111',add(1,2))
    console.log('222',subtract(10,2))
  },
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
