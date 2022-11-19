<template>
    <div class="allSongList">
        <div class="songListTop" @click="$router.go(-1)">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhuijiantou"></use>
            </svg>
            <span>发现</span>
        </div>
        <div class="songListContent">
            <div  class="songListContentTop">
                <span>{{nowCat}}</span>
                <div class="fliter" @click="isShow=true">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shaixuan_o"></use>
                    </svg>
                    <span>筛选</span>
                </div>
            </div>
            <div class="showMusicList">
                <router-link class="musicList" v-for="item in playlists" :key="item.id" :to="{path:'/itemMusic',query:{id:item.id}}">
                    <img v-lazy="item.coverImgUrl" alt="">
                    <div>{{item.name}}</div>
                </router-link>
            </div>
        </div>
        <van-popup v-model:show="isShow" position="bottom" round :style="{ height: '40%' }">
            <h2 class="catTitle">精品歌单</h2>
            <div class="changeCat">
                <div class="all" :class="{active:nowCat=='全部'}" @click="changeCat('全部')">全部</div>
                <div class="allCat">
                    <div v-for="item in catlist" :key="item.id" class="category" :class="{active:nowCat==item.name}" @click="changeCat(item.name)">{{item.name}}</div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { getPlaylistCat,getAllPlaylist } from '@/request/api/allSongList';
export default{
    data(){
        return{
            isShow:false,
            catlist:[],
            nowCat:'全部',
            playlists:[]
        }
    },
    created(){
        this.getPlaylistCatData()
        this.changeCat(this.nowCat)
    },
    methods:{
        getPlaylistCatData:async function(){
            let res=await getPlaylistCat()
            // console.log(res);
            this.catlist=res.data.tags
        },
        changeCat:async function(category){
            let res=await getAllPlaylist(category)
            this.playlists=res.data.playlists
            // console.log(this.playlists);
            this.nowCat=category
        },
    }
}
</script>
<style scoped>
.allSongList{
    width: 95%;
    margin: 0 auto;
}
.songListTop{
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    height: 1rem;
}
.songListContent{
    margin-top: 1rem;
}
.songListContentTop{
    display: flex;
    justify-content: space-between;
}
.fliter{
    display: flex;
    align-items: center;
}
.showMusicList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.musicList{
    width: 2.3rem;
    /* display: flex;
    flex-direction: column; */
    margin-top: .4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.musicList img{
    width: 2.3rem;
    border-radius: .2rem;
}
.catTitle{
    color: #222;
    text-align: center;
}
.changeBgc{
    background-color: rgba(148, 148, 148, 0.3);
}
.changeCat{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.all{
    height: .8rem;
    width:7rem;
    margin: .1rem;
    text-align: center;
    line-height:.8rem ;
    background-color: rgb(239, 237, 237);
    border-radius: .4rem;
    color: #222;
}
.allCat{
    width: 7.2rem;
    display: flex;
    flex-wrap: wrap;
}
.category{
    width: 1.6rem;
    height: .8rem;
    text-align: center;
    line-height:.8rem ;
    margin: .1rem;
    background-color: rgb(239, 237, 237);
    /* padding: .2rem; */
    border-radius: .4rem;
    color: #222;
}
.active{
    background-color: rgb(254,209,81);
    color: white;
}
</style>