<template>
        <div class="intro">
            <h3>歌手简介</h3>
            <div class="content">{{intro}}</div>
        </div>
</template>
<script>
    export default{
        props:['intro']
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