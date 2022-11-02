<template>
    <div class="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import {getBanner} from '@/request/api/home.js'
import axios from 'axios'
import {reactive,onMounted} from 'vue';

export default {
    setup() {
        const state = reactive({
        images:[
        'https://unpkg.com/@vant/assets/apple-1.jpeg',
        'https://unpkg.com/@vant/assets/apple-2.jpeg',
        ]});
        onMounted(async()=>{
            // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
            //     console.log(res);
            //     state.images=res.data.banners
            // })
            let res=await getBanner();
            state.images=res.data.banners
        })
        return { state };
    },
};
</script>


<style>
.swiperTop{
    width: 95%;
    margin: 0 auto;
}
    .swiperTop .van-swipe{
        width: 100%;
        height: 3rem;
    }
    .swiperTop .van-swipe-item{
        padding: 0 0 .2rem;
    }
    .swiperTop .van-swipe-item img{
        width: 100%;
        height: 100%;
        border-radius: .2rem;
    }
    .swiperTop .van-swipe__indicator--active{
        background-color: rgb(254,209,80);
    }
</style>