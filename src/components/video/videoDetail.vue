<template>
    <div>
        <div v-if="!data">加载中</div>
        <div v-else class="videoContent">
            <div class="videoContentTop">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhuijiantou"></use>
                </svg>
                <span>{{name}}</span>
            </div>
            <video :src="data.url" class="video" controls></video>
        </div>
        
    </div>
</template>

<script>
import {getMvDetail,getMvPlay} from '@/request/api/video'
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
    }
}
</script>

<style scoped>
.videoContent{
    position: relative;
}
.videoContentTop{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* position: absolute; */
    top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.videoContentTop h2{
    /* text-align: end; */
}
.video{
    width: 100%;
}
</style>