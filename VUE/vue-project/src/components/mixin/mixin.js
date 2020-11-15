export default {
  data(){
    return {
      city:'上海'
    }
  },
  methods:{
    showName(){
      alert('你猜我会说什么：'+this.name)
    }
  },
  mounted () {
    console.log('mounted mixin:',this.name)
  }
}