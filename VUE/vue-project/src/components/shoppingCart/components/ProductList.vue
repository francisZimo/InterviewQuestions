<template>

    <div>
        <ul>
            <li
                    v-for="product in products"
                    :key="product.id">
                {{ product.title }} - {{ product.price }}

                （inventory: {{product.inventory}}）<!-- 这里可以自己加一下显示库存 -->
                <br>
                <button
                        :disabled="!product.inventory"
                        @click="addProductToCart(product)">
                    Add to cart
                </button>
            </li>
        </ul>
    </div>

</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ProductList',
    computed: mapState({
      // 获取所有商品
      products: state => state.products.all
    }),
    methods: mapActions('cart', [
      // 添加商品到购物车
      'addProductToCart'
    ]),
    created () {
      // 加载所有商品
      this.$store.dispatch('products/getAllProducts')
      // this.$store.dispatch('getAllProducts') 当namespaced 为false时候使用 ，默认false
    },
    mounted () {
      console.log(this.$store,'xx')
    }
  }
</script>

<style scoped>

</style>