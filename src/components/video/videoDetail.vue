<template>
    <div>
        <div v-if="!data">加载中</div>
        <div v-else class="videoContent">
            <div class="videoContentTop">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhuijiantou"></use>
                </svg>
                <div class="musicName">
                    <Vue3Marquee>
                        <span>{{name}}</span>
                    </Vue3Marquee>
                </div>
            </div>
            <video :src="data.url" class="video" controls></video>
        </div>
        <videoComment/>
    </div>
</template>

<script>
import {Vue3Marquee} from 'vue3-marquee'
import {getMvPlay} from '@/request/api/video'
import videoComment from './videoComment.vue'
export default{
    data(){
        return{
            data:null,
            name:null,
        }
    },
    created(){
       this.getdata()
    },
    methods:{
        getdata:async function(){
            let id=this.$route.params.id
            this.name=this.$route.params.name
            // let res=await getMvDetail(id)
            // this.data=res.data.data;
            // console.log(this.$route.params.name);
            let play=await getMvPlay(id)
            this.data=play.data.data;
            console.log(this.data);
        }
    },
    components:{
        Vue3Marquee,
        videoComment
    }
}
</script>

<style scoped>
svg{
    width: .7rem;
    height: .7rem;
}
.videoContent{
    position: relative;
}
.videoContentTop{
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    z-index: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.videoContentTop .musicName{
    width: 70%;
    text-align: center;
    line-height: .7rem;
}
.video{
    width: 100%;
}
</style>