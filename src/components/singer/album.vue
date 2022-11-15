<template>
    <div class="album">
        <div class="content" v-for="item in hotAlbums" :key="item.id" @click="goDetail(item.id)">
            <img v-lazy="item.picUrl" alt="">
            <div class="contentRight">
                <div class="albumAlias">
                    <span class="albumName">{{item.name}}</span>
                    <span v-if="item.alias[0]"> ({{item.alias[0]}}) </span>
                </div>
                <div class="albumTime">
                    <span>{{item.publishTime}} </span>
                    <span> {{item.size}}首</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    methods:{
        goDetail(id){
            this.$router.push({
                name:'albumdetail',
                params:{
                    id,
                }
            })
        }
    },
    props:['hotAlbums']
}
</script>
<style scoped>
.content{
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-top: .2rem;
    align-items: center;
}
.content img{
    width: 1.4rem;
    border-radius: 10%;
}
.contentRight{
    display: flex;
    flex-direction: column;
    color: gray;
}
.albumName{
    color: black;
}
.albumAlias{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.albumTime{
    font-size: .24rem;
}
.albumTime span{
    margin-right: .2rem;
}
</style>