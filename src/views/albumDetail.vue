<template>
    <div>
        <ItemMusicTop :playlist="album" :type='"2"' />
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
            subscribedCount:''
        }
    },
    created(){
        this.albumDetail()
    },
    methods:{
        albumDetail:async function(){
            let res=await getAlbumDetail(this.$route.params.id)
            this.album=res.data.album;
            this.album.creator={};
            this.songs=res.data.songs;
            this.subscribedCount=res.data.album.copyrightId;
            // console.log(res);
        }
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