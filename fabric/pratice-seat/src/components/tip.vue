<template>
    <div class="tip-box" :style="{top:seatInfo.top+'px',left:seatInfo.left+'px'}">
        <p class="title"> {{seatInfo.title}}</p>
        <img class="img-box" src="https://ts1.cn.mm.bing.net/th/id/R-C.6a00de959b5801108793b344ef2988ad?rik=OlQAB0P4J80yTA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50070%2f5999.jpg_wh860.jpg&ehk=nUrNDlAkDzUbcZyyRIpSCFDeeTPjyJnuR14jdQ%2fbE2w%3d&risl=&pid=ImgRaw&r=0" alt="">
    </div>
</template>

<script setup lang="ts">
import {} from 'vue'


defineProps({
    seatInfo:{
        type:Object,
        default:{
            top:0,
            left:0,
            title:''
        }
    }
})
    
</script>

<style lang="scss" scoped>
    .tip-box{
        width: 50px;
        height: 50px;
        overflow: hidden;
        border: 1px solid red;
        background-color: aqua;
        position: absolute;
        z-index:100;
        transform: translate(-50%, -100%);
        display: flex;
        align-items: center;
        flex-wrap: wrap;

    }
    .title{
        width: 100%;
        height: 20px;
        text-align: center;
        margin:0;
        padding:0;
    }
    .img-box{
        display: block;
        width: 50px;  
        height: 30px; 
    }
</style>