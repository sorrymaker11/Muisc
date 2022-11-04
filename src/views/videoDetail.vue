<template>
    <div>
        <div v-if="!data">加载中</div>
        <video :src="data.url" class="video" controls v-else></video>
    </div>
</template>

<script>
import {getMvDetail,getMvPlay} from '@/request/api/video'
export default{
    data(){
        return{
            data:null
        }
    },
    created(){
       this.getdata()
    },
    methods:{
        getdata:async function(){
            let id=this.$route.params.id
            // let res=await getMvDetail(id)
            // this.data=res.data.data;
            // console.log(this.data);
            let play=await getMvPlay(id)
            this.data=play.data.data;
            console.log(this.data);
        }
    }
}
</script>

<style scoped>
.video{
    width: 100%;
}
</style>