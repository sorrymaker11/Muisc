<template>
<div>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <showList :playlist="state.musicList" />
        </div>
    </div>
</div>
</template>

<script>
import { getMusicList } from '@/request/api/home';
import {reactive,onMounted} from 'vue';
import showList from '@/components/common/showList.vue';

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
    },
    props:['showList']
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

</style>