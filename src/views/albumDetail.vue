<template>
    <div>
        <ItemMusicTop :playlist="album"/>
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
            this.songs=res.data.songs;
            this.subscribedCount=album.info.likedCount;
        }
    },
    components:{
        ItemMusicTop,ItemMusicList
    },
}
</script>
<style scoped>

</style>