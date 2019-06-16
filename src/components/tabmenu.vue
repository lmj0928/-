<template>
  <div class="nav">
      <dl :class="{
        active:value.index===index
        }"
        @click="change(value.index)"
      v-for="value in menudata"
      :key="value.index">
        <i :class="'iconfont '+value.icon"></i>
        <dd>{{value.title}}</dd>
      </dl>
      <!-- <dl>
        <i class="iconfont icon-07" style="color:#dedede"></i>
        <dd style="color:#dedede">已发起</dd>
      </dl>
      <dl>
        <i class="iconfont icon-yibangding" style="color:#dedede"></i>
        <dd style="color:#dedede">已处理</dd>
      </dl> -->
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      index:0,
      menudata:[
        {
          title:'待处理',
          icon:'icon-05',
          index:0
        },
         {
          title:'已发起',
          icon:'icon-07',
          index:1
        },
         {
          title:'已处理',
          icon:'icon-yibangding',
          index:2
        }
      ]

    }
  },
  computed:{

  },
  methods:{
    change(index){
      this.index=index;
      this.$emit('change',index)
    }

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
.nav {
  width: 100%;
  height: pxTorem(70px);
  @include box-flex;
  box-shadow: 2px 10px 5px #f6f6f6;
  @include align;
  @include justify(space-around);
  dl {
    width: pxTorem(50px);
    height: pxTorem(50px);
    color: #dedede;
    i {
      margin-left: pxTorem(10px);
      font-size: pxTorem(20px);
    }
    dd {
      margin-top: pxTorem(10px);
    }
  }
  .active{
    color: #126245;
  }
}
</style>
