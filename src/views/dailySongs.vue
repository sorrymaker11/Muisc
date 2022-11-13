<template>
    <div>
        <MusicListDetail :itemList="dailySongs" :updateType="'one'"/>
    </div>
</template>
<script>
import MusicListDetail from '@/components/common/MusicListDetail.vue';
import { getDayMusic } from '@/request/api/home';
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
            let data=localStorage.getItem('cookie')
            let res=await getDayMusic(data);
            console.log(res);
            this.dailySongs=res.data.data.dailySongs
        }
    },
    components:{
        MusicListDetail
    }
}
</script>
<style scoped>

</style>