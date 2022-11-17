<template>
    <div>
        <loading v-if="!singer.briefDesc"/>
        <div v-else>
            <div class="bg">
                <img :src="singer.picUrl" alt="">
                <div class="mask"></div>
            </div>
            <div class="top">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhuijiantou"></use>
                </svg>
                <span>{{singer.name}}</span>
            </div>
            <div class="content">
                <div class="nav">
                    <span @click="changType('intro')" :class="{active:showType=='intro'}">简介</span>
                    <span @click="changType('songs')" :class="{active:showType=='songs'}">歌曲</span>
                    <span @click="SingerAlbum('album')" :class="{active:showType=='album'}">专辑</span>
                </div>
                <intro :intro="singer.briefDesc" v-show="showType=='intro'"/>
                <songs :songs="songs" v-show="showType=='songs'"/>
                <album :hotAlbums="hotAlbums" v-show="showType=='album'"/>
                <!-- <div class="intro" v-if="type=='intro'">
                    <h2>歌手简介</h2>
                    <div>{{singer.briefDesc}}</div>
                </div>
                <div class="songs" v-else></div> -->
            </div>
        </div>
</div>
</template>
<script>
import {getSingerDetail,getSingerAlbum} from '@/request/api/singer'   //在为创建vue实例之前先写这个会报错，sfc is undefined
import intro from '@/components/singer/intro.vue'
import songs from '@/components/singer/songs.vue'
import album from '@/components/singer/album.vue'
import loading from '@/components/common/loading.vue';
export default{
    data(){
        return{
            singer:{},
            songs:[],
            hotAlbums:[],
            showType:'intro'
        }
    },
    created(){
        this.singerDetail(this.$route.params.id)
    },
    methods:{
        singerDetail:async function(id){
            let res=await getSingerDetail(id)
            this.singer=res.data.artist
            this.songs=res.data.hotSongs
            // console.log(res.data);
        },
        changType(type){
            this.showType=type
        },
        SingerAlbum:async function(type){
            this.showType=type
            let res=await getSingerAlbum(this.$route.params.id)
            this.hotAlbums=res.data.hotAlbums
            // console.log(this.hotAlbums);
        }
    },
    components:{
        intro,
        songs,
        album,
        loading
    }
}
</script>
<style scoped>
.bg{
    width: 100%;
    position: relative;
    z-index: -1;
    height: 6.2rem;
}
.bg .mask{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(7,17,27,.4);
}
.bg img{
    width: 100%;
    height: 100%;
}
.top{
    width: 100%;
    position: fixed;
    top: .2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.top svg{
    margin-left: .2rem;
}
.top span{
    flex: 1;
    text-align: center;
    color: white;
    font-size: .4rem;
}
.content{
    width: 100%;
    margin-bottom: 1rem;
}
.nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.nav span{
    color: black;
}
.nav .active{
    color: rgb(254, 209, 81);
}
</style>