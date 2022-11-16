<template>
    <div>
        <div class="itemMusicTop">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhuijiantou"></use>
                </svg>
                <span>评论区</span>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao2"></use>
                </svg>
            </div>
        </div>
        <musicListIntro :playlist='playlist'/>
        <comment :type='$route.query.type'/>
    </div>
</template>
<script>
import musicListIntro from '@/components/common/musicListIntro'
import comment from '@/components/common/comment'
    export default{
        data(){
            return{
                playlist:{}
            }
        },
        created(){
            this.playlist=JSON.parse(sessionStorage.getItem('playlist'))
        },
        components:{
            musicListIntro,comment
        }
    }
</script>
<style scoped>
.itemMusicTop{
        width: 100%;
        height: 1rem;
        border-bottom-right-radius: .4rem;
        border-bottom-left-radius: .4rem;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
         /* padding: .2rem;
        position: relative; */
    }
.itemLeft{
    display: flex;
    align-items: center;
}
</style>