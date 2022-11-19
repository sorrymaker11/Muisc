<template>
<div>
    <loading v-if="!state.playList.creator" />
    <div v-else>
        <ItemMusicTop :playlist="state.playList" :creator='state.playList.creator' :type="'3'">
            <template v-slot:commentCount><span>{{changeCount(state.playList.commentCount)}}</span></template>
            <template v-slot:shareCount><span>{{changeCount(state.playList.shareCount)}}</span></template>
        </ItemMusicTop>
        <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playList.subscribedCount" :liked="state.playList.subscribed" />
    </div>
</div>
</template>

<script>
import {useRoute} from 'vue-router';
import {reactive,onMounted} from 'vue';
import {getMusicItemList,getItemList} from '@/request/api/item';
import ItemMusicTop from '@/components/item/ItemMusicTop';
import ItemMusicList from '@/components/item/ItemMusicList';
import Loading from '../components/common/loading.vue';
export default{
    setup(){
        const state=reactive({
            playList:{},
            itemList:[],
            liked:false
        });
            
        function changeCount(num){
            if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
            else if(num>=10000) return (num/10000).toFixed(1)+'万'
            else return num
        }
        onMounted(async()=>{
            let id=useRoute().query.id
            let res=await getMusicItemList(id);
            state.playList=res.data.playlist
            state.liked=res.data.playlist.subscribed
            // console.log(res);

            // 获取歌单的歌曲
            let result=await getItemList(id)
            state.itemList=result.data.songs
            // 防止页面刷新导致数据丢失，放到本地存储
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
            // console.log(state.itemList);
        });
        return {state,changeCount}
    },
    components:{
        ItemMusicTop,ItemMusicList,
        Loading,
    },
}
</script>