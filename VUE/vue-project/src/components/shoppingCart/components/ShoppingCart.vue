<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length"><i>Please add some products to cart.</i></p>
        <ul>
            <li
                    v-for="product in products"
                    :key="product.id">
                {{ product.title }} - {{ product.price  }} x {{ product.quantity }}
                <button @click="increasePro(product.id)">increase</button>
                <button @click="decreasePro(product.id)">decrease</button>
            </li>
        </ul>
        <p>Total: {{ total  }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
        <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>

</template>

<script>

    import {mapGetters,mapState,mapActions} from 'vuex'
  export default {
    name: 'ShoppingCart',
    computed:{
      ...mapState({
        // 结账状态
        checkoutStatus:state=>state.cart.checkoutStatus
      }),
      ...mapGetters('cart',{
        products:'cartProducts', // 购物车商品
        total:'cartTotalPrice' // 购物车商品的总价格
      })
    },
    methods:{
      ...mapActions('cart',[
        // 增加商品
        'increasePro',
        'decreasePro'
      ]),
      // 结账
      checkout(products){
        this.$store.dispatch('cart/checkout',products)
      }
    }
  }
</script>

<style scoped>

</style>