<template>
    <div class="rankPlayList" @click="goDetail(id)">
        <h3>心选排行榜单</h3>
        <ul :style="{ backgroundImage: `url(${img})`} " class="bgimg">
            <h3>{{title}}</h3>
            <li v-for="item in tracks" :key="item.id" class="musicItem">
                <img v-lazy="item.al.picUrl" alt="">
                <div class="name">
                    <span> {{item.name}} -- {{item.ar[0].name}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {getMusicItemList} from '@/request/api/item'
    export default{
        data(){
            return{
                listID:[19723756,3779629,2884035,3778678,5453912201,991319590,71384707,1978921795,71385702],
                img:'',
                tracks:[],
                id:'',
                title:''
            }
        },
        created(){
            this.getRankData()
        },
        methods:{
            getRankData:async function(){
                let id=this.listID[Math.floor(Math.random()*this.listID.length)]
                let res=await getMusicItemList(id)
                this.img=res.data.playlist.coverImgUrl
                this.tracks=res.data.playlist.tracks.slice(0,3)
                this.id=res.data.playlist.id
                this.title=res.data.playlist.name
                // console.log(res.data.playlist);
            },
            goDetail(id){
                this.$router.push({
                    name:'ItemMusic',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .rankPlayList{
        width: 100%;
    }
    .bgimg{
        width: 100%;
        border-radius: .2rem;
        background-size: cover;
        padding: .2rem;
        margin-top: .2rem;
        color: white;
    }
    .bgimg img{
        width: 1rem;
        border-radius: .2rem;
    }
    .musicItem{
        display: flex;
        align-items: center;
        margin:.2rem 0 ;
    }
    .name{
        margin-left: .2rem;
    }
</style>