<template>
    <div class="TopNav">
        <div class="topleft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
        <div class="topContent">
            <router-link active-class="active" to='/infoUser'>我的</router-link>
            <router-link active-class="active" to="/">发现</router-link>
            <router-link active-class="active" to="/showsinger">歌手</router-link>
            <router-link active-class="active" to='/video'>视频</router-link>
        </div>
        <div class="topright">
            <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>
<script>
export default{
    created(){    
        window.addEventListener('scroll',this.getScroll)
    },
    methods:{
        getScroll(){
            var scrollHeight = document.documentElement.scrollTop;
            let topNav=document.querySelector('.TopNav')
            if(scrollHeight>=100){
                topNav.style.position='fixed'
            }
            else{
                topNav.style.position='relative'
            }
        }
    },
    beforeUnmount(){
        window.removeEventListener('scroll',this.getScroll)
    }
}
</script>

<style scoped>
    .TopNav{
        width: 100%;
        height: 1rem;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        top:0;
        z-index: 9999;
    }
    .TopNav .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .3rem;
    }
    .topContent a{
        color: rgb(239,179,54);
    }
    .active{
        font-weight: 700;
    }
</style>