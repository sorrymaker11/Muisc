<template>
    <div class="allVideo">
        <TopNav/>
        <videoTop :getMvData="getMvData"/>
        <div v-for="item in data" :key="item.id" class="content" @click="goDetail(item.id,item.name)">
            <div class="bacImg"><img v-lazy="item.cover" alt="图片加载失败"></div>
            <div class="desc">{{item.briefDesc||'暂无描述'}}</div>
            <div class="footer">
                <div class="footerLeft">
                    <img v-lazy="item.cover" alt="">
                    <span class="name">{{item.name}}</span>
                </div>
                <div class="footerRight">
                    <span class="artist">{{item.artistName}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getMv} from '@/request/api/video';
import TopNav from "@/components/common/TopNav.vue"
import videoTop from '@/components/video/videoTop.vue'
export default{
    name:'myvideo',
    data(){
        return{
            data:null
        }
    },
    methods:{
        getMvData:async function(area){
            let res=await getMv(area)
            this.data=res.data.data
            // console.log(res);
            // console.log(this.data);
        },
        goDetail(id,name){
            this.$router.push({
                name:'videodetail',
                params:{
                    id,
                    name
                }
            })
        }
    },
    mounted(){
        this.getMvData('全部')
    },
    components:{videoTop,TopNav}
}
</script>

<style scoped>
.allVideo{
    margin-bottom: 1rem;
    color: #222;
}
.content{
    width: 90%;
    height: 5.4rem;
    background-color: rgb(240,240,240);
    margin: .2rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.bacImg img{
    width: 100%;
    height: 4rem;
}
.desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: .2rem;
}
.footer{
    /* display: flex;
    align-items: center; */
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footerLeft{
    width: 80%;
    display: flex;
    align-items: center;
}
.footer img{
    width:.6rem ;
    height:.6rem;
    border-radius:.6rem;
    margin:0 .2rem 0 0 ;
}
.name{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>