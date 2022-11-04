<template>
    <div class="allVideo">
        <div v-for="item in data" :key="item.id" class="content" @click="goDetail(item.id)">
            <div class="bacImg"><img :src="item.cover" alt="图片加载失败"></div>
            <div class="desc">{{item.mv.desc}}</div>
            <div class="footer">
                <div class="footerLeft">
                    <img :src="item.cover" alt="">
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
export default{
    data(){
        return{
            data:null
        }
    },
    mounted(){
        this.getMvData()
    },
    methods:{
        getMvData:async function(){
            let res=await getMv()
            this.data=res.data.data
            console.log(res);
            console.log(this.data);
        },
        goDetail(id){
            this.$router.push({
                name:'videodetail',
                params:{
                    id
                }
            })
        }
    }
}
</script>

<style scoped>
.allVideo{
    margin-bottom: 1rem;
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