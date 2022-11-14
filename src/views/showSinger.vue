<template>
    <div class="showSinger">
        <ul class="top">
            <li @click="showSinger('7')">华语</li>
            <li @click="showSinger('96')">欧美</li>
            <li @click="showSinger('8')">日本</li>
            <li @click="showSinger('16')">韩国</li>
            <li @click="showSinger(1001)">男歌手</li>
            <li @click="showSinger(1001)">女歌手</li>
            <li @click="showSinger(1001)">乐队</li>
        </ul>
        <div class="singer">
            <div v-for="item in singer" :key="item.id" class="singerList" @click="goSingerDetail(item.id)">
                <img v-lazy="item.img1v1Url" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {getSinger} from '@/request/api/singer'
export default{
    data(){
        return{
            singer:[]
        }
    },
    created(){
        this.showSinger('7')
    },
    methods:{
        showSinger:async function(area){
            let res=await getSinger(area);
            this.singer=res.data.artists
            // console.log( res);
        },
        goSingerDetail(id){
            this.$router.push({
                name:'singerdetail',
                params:{
                    id,
                }
            })
        }
    }
}
</script>
<style scoped>
.showSinger{
    width: 90%;
    margin: 0 auto;
}
.top{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.singer{
    margin-bottom: 1rem;
}
.singerList{
    display: flex;
    align-items: center;
    margin: .2rem 0;
    padding: .2rem 0;
    border-bottom: 1px solid rgb(225, 220, 220);
}
.singerList img{
    width: 1rem;
    border-radius: 100%;
    margin-right: .2rem;
}
</style>