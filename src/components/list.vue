<template>
  <div class="lists">
      <dl v-for="val in todolist"
      :key="val.applicationNumber"
      @click="$router.push({name:`detail`,
      params:{type:val.list_type,id:val.applicationNumber}})"
      >
       <!-- `/detail/${val.list_type}/${val.applicationNumber}` -->
      <div>
            <p>{{val.applicationNumber}}</p>
            <p>待审批</p>
          </div>
          <div>
            <span>
              <p>申请人</p>
              <p>{{val.nickname}}</p>
            </span>
            <span>
              <p>加班类型</p>
              <p>{{showType(val.type,val.list_type)}}</p>
            </span>
          </div>
          <div>
            <span>
              <p>加班日期</p>
              <p>{{new Date(val.startTime).toLocaleDateString()}}</p>
            </span>
            <span>
              <p>加班时数</p>
              <p>{{reducetime(val.startTime,val.endTime)}}</p>
            </span>
          </div>
        </dl>
  </div>
</template>
<script>
export default {
  props:{
    todolist:Array
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
    showType(type,title){
      // let end=title==='vacation' ? '休假':'加班'
      if(title==='overtime'){
          switch(type){
        case 1:
          return '双休日加班'
            case 2:
          return '节假日加班'
            case 3:
          return '工作日加班'
          default:
            return '加班'
      }
      }else{
          switch(type){
        case 1:
          return '年假'
            case 2:
          return '调休'
          default:
            return '休假'
      }
      }
    },
    reducetime(start,end){
      //获取时间差
      let start_num=new Date(new Date(start).toGMTString())*1;
       let end_num=new Date(new Date(end).toGMTString())*1;
       let num=(end_num-start_num)/1000;
       let day=(num/60/60/24).toFixed(2)
       return day;

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
dl {
      width: 100%;
      height: pxTorem(105px);
      background: white;
      @include box-flex;
      margin-bottom: pxTorem(10px);
      @include direction(column);

      div:nth-child(1) {
        margin-top: pxTorem(10px);
        @include box-flex;
        @include align;
        @include justify(space-between);
        padding: 0 pxTorem(20px);

        p {
          color: grey;
        }
      }

      div:nth-child(2) {
        margin-top: pxTorem(10px);
        @include box-flex;
        @include align;

        span {
          @include box-flex;
          @include align;
          @include justify(space-between);
          padding: 0 pxTorem(10px);
          margin-right: pxTorem(10px);
          p:nth-child(1) {
            color: grey;
            padding: 0 pxTorem(10px);
          }
          p:nth-child(2) {
            color: black;
          }
        }
      }

      div:nth-child(3) {
        margin-top: pxTorem(10px);
        @include box-flex;
        @include align;

        span {
          @include box-flex;
          @include align;
          @include justify(space-between);
          padding: 0 pxTorem(10px);
          margin-right: pxTorem(10px);
          p:nth-child(1) {
            color: grey;
            padding: 0 pxTorem(10px);
          }
          p:nth-child(2) {
            color: black;
          }
        }
      }
    }
</style>
