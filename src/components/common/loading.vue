<template>
    <!-- <div>
        <van-overlay :show="true">
            <div class="wrapper" >
                <van-loading type="spinner" size="24px" />
            </div>
        </van-overlay>
        <van-loading type="spinner" size="24px" />
    </div> -->
    <div class="wrapper" v-if="$store.state.Loading.isLoading">
        <div id="Loading">
            <div class="loader-inner ball-beat">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>
<style scoped>
.wrapper {
    /* height: 100vh;
    width: 100vw;
    background-color: white; */
    /* z-index: 9999999; */
  }
  #Loading {
      top:50% ;
      left:50%;
      position: fixed;
      -webkit-transform: translateY(-50%) translateX(-50%);
      transform: translateY(-50%) translateX(-50%);
      z-index:100;
        width: 2rem;
        height: 2rem;
        border-radius: .2rem;
        background-color: rgb(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @-webkit-keyframes ball-beat {
      50% {
      opacity: 0.2;
      -webkit-transform: scale(0.75);
      transform: scale(0.75); }

      100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1); } }

      @keyframes ball-beat {
      50% {
      opacity: 0.2;
      -webkit-transform: scale(0.75);
      transform: scale(0.75); }

      100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1); } }

      .ball-beat > div {
      background-color: #4999ff;
      width: 10px;
      height: 10px;
      border-radius: 100% !important;
      margin: 2px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      display: inline-block;
      -webkit-animation: ball-beat 0.7s 0s infinite linear;
      animation: ball-beat 0.7s 0s infinite linear; }
      .ball-beat > div:nth-child(2n-1) {
      -webkit-animation-delay: 0.35s !important;
      animation-delay: 0.35s !important; }
</style>