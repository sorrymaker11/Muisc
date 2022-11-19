<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true" @click="getData">
                <use xlink:href="#icon-meirituijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href='#icon-yinle'></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true" @click="$router.push('/allSongList')">
                <use xlink:href='#icon-gedan'></use>
            </svg>
            <span>歌单</span>
        </div>
    </div>
</template>
<script>
import { getDayMusic } from '@/request/api/home';
export default{
    methods:{
        getData:async function(){
            this.$router.push('/dailySongs')
            // let data=localStorage.getItem('cookie')
            // let res=await getDayMusic(data);
            // console.log(res);
        }
    }
}
</script>
<style scoped>
    .iconList{
        width: 100%;
        height: 2rem;
        display: flex;
        margin-top: 10px;
        justify-content: space-around;
        align-items: center;
    }
    .iconList .iconItem{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* color: #222; */
    }
    .icon{
        width: 1rem;
        height: 1rem;
    }
</style>