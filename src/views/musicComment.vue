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
        <musicListIntro :playlist='playlist'>
            <template v-slot:backgroundUrl><img :src="creator.picUrl||creator.avatarUrl" alt="" class="bgcimg"></template>
            <template v-slot:nickname><span class="nickname">{{creator.name||creator.nickname}}</span></template>
        </musicListIntro>
        <comment :type='$route.query.type'/>
    </div>
</template>
<script>
import musicListIntro from '@/components/common/musicListIntro'
import comment from '@/components/common/comment'
    export default{
        data(){
            return{
                playlist:{},
                creator:{}
            }
        },
        created(){
            this.playlist=JSON.parse(sessionStorage.getItem('playlist'))
            this.creator=this.playlist.artist||this.playlist.creator
            // console.log(this.playlist);
        },
        components:{
            musicListIntro,comment
        }
    }
</script>
<style scoped>
.bgcimg{
    width: .5rem;
    border-radius:100%;
}
.nickname{
    margin-left: .1rem;
    font-size: .25rem;
}
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

    .itemLeft,.itemRight{
        width:25%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .4rem;
        margin: 0 10px;
        color: rgb(239,179,54);
    }
</style>