<template>
  <header>
      <i class="iconfont icon-arrow-left" v-if="back" @click="$router.back()"></i>
      <p>{{titletext}}</p>
      <span></span>
      <!-- <span>
        <i class="iconfont icon-riqixuanze"></i>
        <i class="iconfont icon-fangdajing"></i>
      </span> -->
    <div><slot></slot></div>
    </header>
</template>
<script>
export default {
  props:{
    back:{
      default:true,
      type:Boolean
    },
    title:{
      default:'',
      type:String
    }

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{
    titletext(){
      return this.title?this.title:this.$route.meta.title
    }

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
* {
  padding: 0;
  list-style: none;
  text-decoration: none;
  margin: 0;
  @include sizing;
}
body,
html {
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: pxTorem(40px);
  // background: palegoldenrod;
  @include box-flex;
  @include align;
  @include justify(space-between);
  padding: 0 pxTorem(10px);

  span {
    i {
      margin-right: pxTorem(5px);
      font-size: pxTorem(18px);
    }
  }
}
</style>
