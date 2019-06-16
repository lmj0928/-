import request from '../../utils/request';
export default {
  namespaced:true,  //开辟命名空间
  state:{
    userinfo:{}
  },
  mutations:{
    setuserinfo(state,data){
      // console.log(555)
      state.userinfo=data
    }
  },
  actions:{
    getUserInfo(context){
      // console.log(1)
      request.get('/api/user/info').then(res=>{
        // console.log(res)
        context.commit('setuserinfo',res.data);
        // next()
      })
    }
  }
}
