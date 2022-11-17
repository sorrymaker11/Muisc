<template>
    <div>
        <ItemMusicTop :playlist="album" :creator='album.artist' :type="'2'" >
            <template v-slot:commentCount><span>{{changeCount(info.commentCount)}}</span></template>
            <template v-slot:shareCount><span>{{changeCount(info.shareCount)}}</span></template>
        </ItemMusicTop>
        <ItemMusicList :itemList="songs" :subscribedCount="subscribedCount"/>
    </div>
</template>
<script>
import ItemMusicTop from '@/components/item/ItemMusicTop';
import ItemMusicList from '@/components/item/ItemMusicList';
import {getAlbumDetail} from '@/request/api/singer'
export default{
    data(){
        return{
            album:{},
            songs:[],
            subscribedCount:'',
            info:{}
        }
    },
    created(){
        this.albumDetail()
    },
    methods:{
        albumDetail:async function(){
            let res=await getAlbumDetail(this.$route.params.id)
            this.album=res.data.album;
            this.songs=res.data.songs;
            this.subscribedCount=res.data.album.info.likedCount;
            this.info=res.data.album.info
            // console.log(res);
        },
        
        changeCount(num){
            if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
            else if(num>=10000) return (num/10000).toFixed(1)+'万'
            else return num
        },
    },
    components:{
        ItemMusicTop,ItemMusicList
    },
    beforeUnmount(){
        sessionStorage.setItem('playlist',JSON.stringify(this.album))
    }
}
</script>
<style scoped>

</style>