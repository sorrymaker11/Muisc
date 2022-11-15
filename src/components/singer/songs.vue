<template>
    <div class="songs">
        <MusicListDetail :itemList="songs" :updateType="'one'"/>
    </div>
</template>
<script>
import MusicListDetail from '@/components/common/MusicListDetail.vue'
export default{
    props:['songs'],
    components:{
        MusicListDetail
    }
}
</script>
<style scoped>
.intro{
    width: 90%;
    margin: 0 auto;
}
h3{
    margin: .2rem 0;
}
.content{
    color: #6d6d6d;
    font-size: .26rem;
}
</style>