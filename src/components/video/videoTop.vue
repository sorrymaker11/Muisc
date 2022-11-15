<template>
    <div class="btnList">
        <button @click="changeType('全部')" :class="{active:type=='全部'}">全部</button>
        <button @click="changeType('内地')" :class="{active:type=='内地'}">内地</button>
        <button @click="changeType('港台')" :class="{active:type=='港台'}">港台</button>
        <button @click="changeType('欧美')" :class="{active:type=='欧美'}">欧美</button>
        <button @click="changeType('日本')" :class="{active:type=='日本'}">日本</button>
        <button @click="changeType('韩国')" :class="{active:type=='韩国'}">韩国</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            type:'全部'
        }
    },
    methods:{
        changeType(type){
            this.type=type
            this.getMvData(type)
        }
    },
    props:['getMvData']
}
</script>

<style scoped>
.btnList{
    display: flex;
    justify-content: space-around;
}
.btnList button{
    flex: 1;
    background-color: rgb(254, 209, 81);
    border: none;
    color: white;
}
.btnList .active{
    color: #222;
}
</style>