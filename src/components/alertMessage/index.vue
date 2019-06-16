<template>
  <div class="alertbox" v-show="open">
    {{text}}

  </div>
</template>
<script>
export default {
  props:{
    text:String

  },
  components:{

  },
  data(){
    return {
      open:true,
      timer:null
    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){
    console.log('dislog在页面挂载')
    this.timer=setTimeout(()=>{
      this.open=false
    },2000)
  },
  destroyed(){
    clearTimeout(this.timer)
  }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/_minix.scss';
@import '../../static/scss/common.scss';
.alertbox{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(0,0,0,0.6);
  color: white;
  padding: pxTorem(20px);
  font-size:  pxTorem(14px);
  z-index: 100;

}
</style>
