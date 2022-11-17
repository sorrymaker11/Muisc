<template>
    <div>
        <TopNav/>
        <MusicListDetail :itemList="dailySongs" :updateType="'one'"/>
    </div>
</template>
<script>
import MusicListDetail from '@/components/common/MusicListDetail.vue';
import { getDayMusic } from '@/request/api/home';
import TopNav from "@/components/common/TopNav.vue"
export default{
    data(){
        return{
            dailySongs:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData:async function(){
            // let data=localStorage.getItem('cookie')
            let res=await getDayMusic();
            // console.log(res);
            this.dailySongs=res.data.data.dailySongs
        }
    },
    components:{
        MusicListDetail,TopNav
    }
}
</script>
<style scoped>

</style>