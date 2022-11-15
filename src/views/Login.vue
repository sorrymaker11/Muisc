<template>
  <div>
    <TopNav/>
    <div class="login">
      <h2 class="title">欢迎登录</h2>
      <div class="loginContent">
        <div>
          <img src="@/assets/favicon.png" alt="加载失败">
          <h2 >闪星音乐</h2>
        </div>
        <div class="inputmsg">
          <div class="getInput">
            <div>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shouji"></use>
              </svg>
            </div>
            <input type="text" name="phone" placeholder="请输入手机号码" v-model="phone">
          </div>
          <div class="getInput">
            <div>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-mima"></use>
              </svg>
            </div>
            <input type="password" name="password" placeholder="请输入密码" v-model="password">
          </div>
          <button @click="Login">登录</button>
        </div>
        <div class="loginFooter">
          <input type="checkbox" id="remember">
          <label for="remember">记住账号密码</label>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
import {getLoginUser} from '@/request/api/home';
import TopNav from "@/components/common/TopNav.vue"
export default{
  data(){
    return{
      phone:'',
      password:"",
    }
  },
  methods:{
    Login:async function(){
      let res=await this.$store.dispatch('User/getLogin',{phone:this.phone,password:this.password})
      console.log(res);
      if(res.data.code===200){
        this.$store.commit('User/updateIsLogin')
        localStorage.setItem('cookie',res.data.cookie)
        let result=await getLoginUser(res.data.account.id)
        localStorage.setItem('user',JSON.stringify(result.data))
        this.$store.commit('User/updateUser',result.data)
        this.$router.push('/infoUser')
      }else{
        alert(res.data.msg);
        this.password=''
      }
    }
  },
  components:{TopNav}
}
</script>

<style scoped>
  .top{
    position: fixed;
  }
  .login{
    width: 100%;
    height: 100vh;
    background: url(@/assets/loginImg.jpg) no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title{
    margin-bottom: .4rem;
    text-align: center;
  }
  img{
    width: 1.8rem;
  }
  .loginContent{
    height: 60%;
    width: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: .2rem;
  }
  .loginContent h2{
    text-align: center;
  }
  .inputmsg{
    width: 80%;
    display: flex;
    flex-direction: column;

  }
  .icon{
    margin-right: .2rem;
  }
  .getInput{
    height: .8rem;
    border: 1px solid rgb(222,222,223);
    border-radius: .1rem;
    margin-bottom: .4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .inputmsg input{
    border: none;
    flex: 1;
    color: black;
    /* color: rgb(222,222,223); */
  }
  .inputmsg input::placeholder{
    color: rgb(222,222,223);
  }

  .inputmsg button{
    height: .6rem;
    border-radius: .1rem;
    background-color:rgb(254, 209, 81);
    color: white;
    border: none;
  }
  .loginFooter{
    display: flex;
    align-items: center;
    color: black;
  }
  .loginFooter input{
    width: .3rem;
    height: .3rem;
    margin:.05rem .2rem 0 0 ;
  }
</style>