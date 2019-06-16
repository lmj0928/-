<template>
  <div class="wrap">
  <el-header>
     <span>
        <i class="iconfont icon-riqixuanze"></i>
        <i class="iconfont icon-fangdajing"></i>
      </span>
  </el-header>
  <Tabmenu @change="menuchange"/>
    <div class="top">
      <div></div>
      <Tabtype :type="tabOptions.type" @change="typeChange"/>
      <div class="three">
        <i class="iconfont icon-tian"></i>
        <i class="iconfont icon-gengduo-2"></i>
      </div>
    </div>

    <section>
      <div class="list">
        <List :todolist="todolist"/>
      </div>
    </section>

    <div class="start" @click="show=true">
      <p>
        <i class="iconfont icon-jia"></i>发起任务
      </p>
    </div>

      <Popup :show="show" @close="show=false"/>
  </div>
</template>
<script>
import Tabmenu from '../../components/tabmenu'
import Tabtype from '../../components/tabtype'
import List from '../../components/list'
import Popup from '../../components/popup'
import request from '../../utils/request'
import {mapActions} from 'vuex'
export default {
  // beforeRouteEnter (to,from,next) {
  //    request.get('/api/user/info').then(res=>{
  //      next()
  //    })
  // },
  props: {},
  components: {
    Tabmenu,
    Tabtype,
    List,
    Popup
  },
  data() {
    return {
      // isflag:false
      tabOptions:{
        status:0,
        type:'overtime',
        create_at:0,
        pageSize:3,
        page:1
      },
      todolist:[],
      show:false
    };
  },
  computed: {},
  methods: {
    // Click(){
    //   this.isflag=!this.isflag;
    // }
      ...mapActions('user',['getUserInfo']),
    menuchange(index){
      this.tabOptions.status=index;
      this.tabOptions.type='overtime'
      this.getTaskList();
    },
    getTaskList(){
      request.get('/api/task/list',{
        ...this.tabOptions
      }).then(res=>{
        console.log(res)
       this.todolist=res.data
      })
    },
    typeChange(type){
      this.tabOptions.type=type;
      this.getTaskList();
    }


  },
  created() {
    this.getTaskList()
    this.getUserInfo()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
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
.wrap {
  width: 100%;
  height: 100%;
  @include box-flex;
  @include direction(column);
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

.top {
  width: 100%;
  height: pxTorem(60px);
  // background:blue;
  margin-top: pxTorem(13px);
  @include box-flex;
  @include align;
  @include justify(space-between);
  padding: 0 pxTorem(20px);

  .two {
    width: pxTorem(190px);
    height: pxTorem(30px);
    @include box-flex;

    .work {
      width: pxTorem(95px);
      height: pxTorem(30px);
      border-top-left-radius: pxTorem(30px);
      border-bottom-left-radius: pxTorem(30px);
      background: #066442;
      color: white;
      outline: none;
      border: 0;
      font-size: pxTorem(17px);
    }

    .holiday {
      width: pxTorem(95px);
      height: pxTorem(30px);
      border-top-right-radius: pxTorem(30px);
      border-bottom-right-radius: pxTorem(30px);
      color: #066442;
      outline: none;
      border: pxTorem(1px) solid #066442;
      font-size: pxTorem(17px);
      background: white;
    }
  }

  .three {
    width: pxTorem(55px);
    @include box-flex;

    i {
      font-size: pxTorem(25px);
      margin-right: pxTorem(15px);
      color: #ccc;
    }
  }
}

section {
  flex: 1;
  width: 100%;
  // margin-top: pxTorem(13px);
  overflow: auto;
  background: #f7f7f7;

  .list {
    width: 100%;
    @include box-flex;
    @include direction(column);
  }
}

.start {
  width: pxTorem(130px);
  height: pxTorem(50px);
  position: fixed;
  right: pxTorem(16px);
  bottom: pxTorem(20px);
  background: #066442;
  border-radius: pxTorem(50px);

  p {
    color: white;
    font-size: pxTorem(20px);
    text-align: center;
    line-height: pxTorem(50px);
  }
}


</style>
