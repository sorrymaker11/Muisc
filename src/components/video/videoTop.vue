<template>
    <div class="btnList">
        <button @click="changeType('全部')">全部</button>
        <button @click="changeType('内地')">内地</button>
        <button @click="changeType('港台')">港台</button>
        <button @click="changeType('欧美')">欧美</button>
        <button @click="changeType('日本')">日本</button>
        <button @click="changeType('韩国')">韩国</button>
    </div>
</template>

<script>
export default{
    methods:{
        changeType(type){
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
</style>