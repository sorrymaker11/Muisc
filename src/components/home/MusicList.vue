<template>
<div>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="153" class="my-swipe" :show-indicators="false">
                <van-swipe-item v-for="item in state.musicList" :key="item.id">
                    <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                        <img v-lazy="item.picUrl" alt="">
                        <span class="playCount">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofan"></use>
                            </svg>
                            {{changeCount(item.playCount)}}
                        </span>
                        <span class="name">{{item.name}}</span>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</div>
</template>

<script>
import { getMusicList } from '@/request/api/home';
import {reactive,onMounted} from 'vue';

export default{
    // data(){
    //     return{
    //         musicList:[]
    //     }
    // },
    // methods:{
    //     async getGendan(){
    //         let res=await getMusicList()
    //         console.log(res);
    //         this.musicList=res.data.result
    //     },
    //     changeCount(num){
    //         if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
    //         else if(num>=10000) return (num/10000).toFixed(1)+'万'
    //     }
    // },
    // mounted(){
    //     this.getGendan()
    // }

    // Vue3
    setup(){
        const state=reactive({
            musicList:[],
        });
        function changeCount(num){
            if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
            else if(num>=10000) return (num/10000).toFixed(1)+'万'
            else return num
        }
        onMounted(async()=>{
            let res=await getMusicList()
            // console.log(res);
            state.musicList=res.data.result
        });
        return {state,changeCount}
    }
}
</script>

<style scoped>
.musicList{
    width: 100%;
    height: 5rem;
    padding: 0.2rem;
}
.musicTop{
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
}
.title{
    font-size: 0.4rem;
    font-weight: 900;
}
.van-swipe-item{
    width: 2.2rem;
    margin-right: .1rem;
}
.more{
    border:1px solid #ccc;
    text-align: center;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    border-radius:0.4rem ;
}
.musicContent{
    width: 100%;
    height: 4rem;
    position: relative;
}
.my-swipe{
    height: 100%;
}
img{
    width: 100%;
    height:3rem;
    border-radius: .2rem;
}
.playCount{
    position: absolute;
    top: .1rem;
    right: .3rem;
    line-height: 29px;
}
.name{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.icon{
    width: .3rem;
    height: .3rem;
}
.van-swipe-item{
    width: 3rem !important;
}
</style>