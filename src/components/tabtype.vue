<template>
  <div class="two">
        <button :class="{
          active:val.type===type
        }"
        v-for="(val,i) in navdata"
        :key="i"
        @click="$emit('change',val.type)"
        >{{val.title}}</button>
  </div>
</template>
<script>
export default {
  props:{
    type:String

  },
  components:{

  },
  data(){
    return {
      navdata:[
        {
          title:'加班',
          type:'overtime'
        },
         {
          title:'休假',
          type:'vacation'
        }
      ]

    }
  },
  computed:{

  },
  methods:{
    change(type){
        this.$emit('change',type)
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
.two {
    width: pxTorem(190px);
    height: pxTorem(30px);
    @include box-flex;
      border-radius: pxTorem(30px);

    button {
      width: pxTorem(95px);
      height: pxTorem(30px);
      // border-top-left-radius: pxTorem(30px);
      // border-bottom-left-radius: pxTorem(30px);
   background: white;
      color: #066442;
      outline: none;
      border: 0;
      font-size: pxTorem(17px);
    }
    button.active{


       background: #066442;
color: white;

    }

    // .holiday {
    //   width: pxTorem(95px);
    //   height: pxTorem(30px);
    //   // border-top-right-radius: pxTorem(30px);
    //   // border-bottom-right-radius: pxTorem(30px);
    //   color: #066442;
    //   outline: none;
    //   border: pxTorem(1px) solid #066442;
    //   font-size: pxTorem(17px);
    //   background: white;
    // }
  }
</style>
