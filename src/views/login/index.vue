<template>
  <div class="wrap">
    <header>
      <p>欢迎来到星享俱乐部</p>
    </header>
    <div class="login">
       <input type="text" placeholder="手机号" v-model="phone_value">
       <input type="password" placeholder="密码" v-model="pwd_value">
      <button class="btn" @click="handlebtn">登录/注册</button>
    </div>
  </div>
</template>
<script>
import request from '../../utils/request';
const phonereg=/^1[3589]\d{9}$/;
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      phone_value:'',
      pwd_value:''
    }
  },
  computed:{

  },
  methods:{
    handlebtn(){
      if(phonereg.test(this.phone_value)&&this.pwd_value.trim()!==''){
        request.post('/api/login',{
          phone:this.phone_value,
          password:this.pwd_value
        }).then(res=>{
         window.localStorage.setItem('token',res.token);
         this.$router.push('/home')
        }).catch(error=>{
          console.log(error.response.data.message)
        })
      }else{
        alert('请输入正确的用户名或者密码')
      }
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/_minix.scss';
@import '../../static/scss/common.scss';
*{
  padding: 0;
  list-style: none;
  text-decoration: none;
  margin: 0;
  @include sizing;
}
body,html{
  width: 100%;
  height: 100%;
  font-size: pxTorem(16px);
}
.wrap{
   width: 100%;
  height: 100%;
      @include box-flex;
      @include direction(column);

  header{
    width: 100%;
    height: pxTorem(40px);
    @include box-flex;
    @include align;
    margin-left: pxTorem(20px);

    p{
      color:black;
      font-size: pxTorem(22px);
    }
  }

  .login{
  width: 100%;
  flex: 1;
  background: #f8f8f6;
      @include box-flex;
       @include direction(column);
       input{
         width: 100%;
         height: pxTorem(35px);
         border-bottom: 1px solid #ccc;
       }
       button{
         width:pxTorem(265px);
         height: pxTorem(35px);
         margin-left: pxTorem(45px);
         margin-top: pxTorem(35px);
         background: #d4d4d4;
         border-radius: pxTorem(20px);
         outline: none;
         border: 0;
         color: white;
         font-size: pxTorem(20px);
         line-height: pxTorem(35px);
         text-align: center;
       }
    }
}


</style>
