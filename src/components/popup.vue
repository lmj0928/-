<template>
  <div class="keep" v-show="show">
      <div class="keep_top" @click.self="$emit('close')"></div>
      <transition name="a">
        <div class="keep_bottom">
         <dl @click="$router.push('/commit/overtime')">
            <i class="iconfont icon-pinterest"></i>
            <dd>加班</dd>
         </dl>

          <dl @click="$router.push('/commit/vacation')">
            <i class="iconfont icon-09" style="color:#70bf63"></i>
            <dd>休假</dd>
         </dl>
       </div>
      </transition>
    </div>
</template>
<script>
export default {
  props:{
    show:Boolean

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

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
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.keep{
  width: 100%;
  height: 100%;
  position: fixed;
  left:0;
  top:0;
   @include box-flex;
     @include direction(column);

  .keep_top{
    flex: 1;
    width: 100%;
    background: rgba(0,0,0,0.5);
  }

  .keep_bottom{
    width: 100%;
    height: pxTorem(110px);
    background: white;
     @include box-flex;
      @include align;
  @include justify(space-around);


    dl{
      width: pxTorem(40px);
      height: pxTorem(60px);

      i{
        font-size: pxTorem(35px);
        color: orange;
      }
    }
  }
}

.a-enter,.a-leave-to{
  transform: translateY(100%);
}
.a-enter-active,.a-leave-active{
  transition: transform 1s;
}
.a-leave,.a-enter-to{
  transform: translateY(0);
}
</style>
