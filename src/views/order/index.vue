<template>
  <div>
    我的
    {{userinfo}}
  </div>
</template>
<script>
import request from '../../utils/request';
import {mapState,mapActions} from 'vuex'
export default {
  // beforeRouteEnter (to,from,next) {
  //   console.log(this)
  //    request.get('/api/user/info').then(res=>{
  //      next()
  //    })
  // },
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{
    // userinfo(){
    //   return this.$store.state.user.userinfo;
    // }

    ...mapState('user',['userinfo'])
  },
  methods:{
    ...mapActions('user',['getUserInfo'])

  },
  created(){
    // console.log(this.$store)
    // this.$store.dispatch('user/getUserInfo');
    this.getUserInfo()

  },
  mounted(){

  }
}
</script>
<style scoped lang="">

</style>
