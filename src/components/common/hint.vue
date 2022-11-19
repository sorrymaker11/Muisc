<template>
    <div v-if="$store.state.Loading.isShow">
        <div class="hint">
            <div class="hintContent" :class="{warn:$store.state.Loading.msg.showType=='warn'}">
                <span class="iconfont icon-gantanhao-jinggao"></span>
                <span>{{$store.state.Loading.msg.content}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        created(){
            console.log(this.$store.state.Loading);
        }
    }
</script>
<style scoped>
.hint{
    position: fixed;
    margin: auto;
    left: 43%;
    width:210px;
}
.hintContent{
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:-27px;
    width: 210px;
    height: 54px;
    border-radius: 7px;
    color:#67cc86;
    background-color: rgb(231,202,198);
    z-index: 999;
}
.warn{
    color:rgb(176,69,69);
}
.hintContent span:nth-child(1){
    font-size: 24px;
    margin-right:13px;
} 
</style>