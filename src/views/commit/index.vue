<template>
  <div class="wrap">
    <el-header :title="type==='overtime'?'办公室加班申请表':'办公室调休申请表'"></el-header>

          <!-- 中间的绿色部分 -->
        <div class="username">
            <dl>
                <dt>
                    <img :src="userinfo.avatar" alt="">
                </dt>
                <dd>
                    <span>申请人姓名</span>
                    <span>直接主管</span>
                </dd>
                <dd>
                    <!-- <span>{{detailsData.nickname}}</span> -->
                    <span>{{userinfo.nickname}}</span>
                    <!-- <span>{{detailsData.applicationNumber}}</span> -->
                    <span>秦义超</span>
                </dd>
                <dd>
                    <span>&gt;</span>
                </dd>
            </dl>
        </div>
        <!-- {{userinfo}} -->
        <!-- 下边的盒子 -->
        <div class="content">
            <div class="meg">
                <h3>申请信息</h3>
                <p>
                    <span>加班日期<i>*</i></span>
                    <span>
                      <el-date-picker
                      v-model="date"
                      />
                    </span>
                </p>
                <p>
                    <span>加班类型<i>*</i></span>
                    <span>
                      <select v-model="usertype">
                        <option value="-1">默认</option>
                        <option value="val.id" v-for="val in this[type+'Type']" :key="val.id">{{val.title}}</option>
                      </select>
                    </span>
                </p>
                <p>
                    <span>加班起始时间<i>*</i></span>
                    <span>
                       <el-time-picker
                      v-model="startime"
                      :selectableRange="[
                      '21:00:00 - 24:00:00',
                      '07:00:00 - 09:00:00'
                      ]"
                           @change="endtimeSelected"
                      />
                    </span>
                </p>
                <p>
                    <span>加班截止时间<i>*</i></span>
                    <span>
                       <el-time-picker
                      v-model="endtime"
                      :selectableRange="[
                      '21:00:00 - 24:00:00',
                      '07:00:00 - 09:00:00'
                      ]"
                      @change="endtimeSelected"
                      />
                    </span>
                </p>
                <p>
                    <span>共计时数<i>*</i></span>
                    <span>
                        {{num}}
                    </span>
                </p>
            </div>
            <div class="reason">
                <h3>
                  <p>加班事由</p>
                  <textarea name="" id="" cols="30" rows="10" v-model="describe"></textarea>
                </h3>
                <p>
                    <!-- {{detailsData.describes}} -->
                </p>
            </div>
            <div class="reason img">
                <h3 class="get">
                  <p class="appic">+</p>
                  <!-- <p>上传附件</p> -->
                  <input type="file" @change="submitMess">
                </h3>
                <div>
                  <ul class="images">
                    <li v-for="(val,i) in images" :key="i">
                      <span @click="images.splice(i,1)" class="cha">X</span>
                      <img :src="'http://localhost:3000'+val" alt="">
                    </li>
                  </ul>
                    <!-- <img :src="'http://localhost:3000'+item" alt="" v-for="(item,i) in detailsData.annex" :key="i"/> -->
                </div>
            </div>
        </div>
        <!-- 最下边的脚 -->
        <footer class="footer">
            <p class="quit" @click="$router.back()">取消</p>
            <p class="argee" @click="submitTask">提交</p>
        </footer>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import api from "../../api/index"
export default {
  props:{
    type:String

  },
  components:{

  },
  data(){
    return {
      date:'',
      startime:'',
      endtime:'',
      num:'',
      images:[],
      describe:'',
      usertype:-1,
      guide:{
        type:['png','gif','jpg','svg','jpeg'],
        size:3
      },
      overtimeType:[
        {
          id:1,
          title:'双休日'
        },
         {
          id:2,
          title:'节假日'
        },
         {
          id:3,
          title:'工作日'
        }
      ],
      vacationType:[
        {
           id:1,
          title:'年假'
        },
        {
            id:2,
          title:'调休'
        }
      ]
    }
  },
  computed:{
    // userinfo(){
    //   return this.$store.state.user.userinfo
    // }
    ...mapState('user',['userinfo']),
    // titletext(){
    //   return type==='overtime'?'加班':'休假'
    // }

  },
  methods:{
    ...mapActions('user',['getUserInfo']),
    endtimeSelected(){
      // console.log(this.endtime,this.startime)
      let startime= new Date(this.startime)*1;
      let endtime= new Date(this.endtime)*1;
      let num=endtime-startime;
      let nums = (num / 1000 / 60 / 60 / 24).toFixed(2);
      if(num<0){
        this.$alert('时间选择错误');
        return;
      }
        this.num=nums;
      // console.log(endtime-startime)
    },
    submitMess(e){
     let userfile=e.target.files[0];
     let {type,size} = userfile;
     let filetype=type.match(/\/(\w+)$/i)[1];
     let error='';
     if(!this.guide.type.includes(filetype)){
       error=`请上传${this.guide.type.join()}类型的文件`
     }
      if(this.guide.size*1024*1024<size){
       error=`请上传小于${this.guide.size}MB大小的文件`
     }
     if(error){
       this.$alert(error)
       return;
     }
     const fromdata=new FormData();
      fromdata.append('file',userfile)
     api.submitFile(fromdata).then(res=>{
       this.images.push(res.url)
     })
    },
    submitTask(){
      let options={
        annex:this.images,
        describe:this.describe,
        endtime:this.endtime,
        startTime:this.startime,
        type:this.usertype
      }
      api['submit'+this.type](options).then(res=>{
        let {msg}=res;
        if(msg==='提交成功'){
          this.$router.back(-1);
          console.log(options)
        }else{
          this.$alert(msg)
        }
      })

    }
  },
  created(){
    // this.$store.dispatch('user/getUserInfo')
    this.getUserInfo()
    // console.log(this)
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
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
.el-header{
  width: 100%;
  height: pxTorem(40px);
}
.username {
    width: 100%;
    color: #fff;
    background: #0B6242;
    height: pxTorem(130px);
    border-radius: 0  0 pxTorem(20px) pxTorem(20px) ;
    box-sizing: border-box;
    overflow: hidden;
    padding: pxTorem(14px) pxTorem(15px) ;
    dl{
        width: 100%;
        height: 100%;
        @include box_flex;
        dt{
            width: pxTorem(42px);
            height: pxTorem(42px);
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        dd{
            &:nth-child(2),&:nth-child(3){
                flex: 1;
                span{
                    font-size: pxTorem(14px);
                    display: block;
                    color:#B1E8D5;
                    padding: 0 0 pxTorem(5px) pxTorem(15px)
                }
            }
            &:nth-child(4){
                 width: pxTorem(30px);
            }
        }
    }
}

//
.content{
    width: 94%;
    margin-left: 3%;
    margin-top: pxTorem(-24px);
    flex: 1;
    overflow: auto;
    .meg{
        width: 100%;
        background: #fff;
        border-radius: pxTorem(8px);

        h3{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
        }
        >p{
            width: 94%;
            height: pxTorem(40px);
            margin-left: 3%;
            display: flex;
            justify-content: space-between;
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            span:nth-child(1){
                color: #A6A6A6;
                i{
                    color: red;
                }
            }
        }
    }
    .reason{
        width: 100%;
        margin-top: pxTorem(16px);
        background: #fff;
        border-radius: pxTorem(8px);
        h3{
            width: 94%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
            margin-left: 3%;
        }
        .get{
           width: 94%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
            margin-left: 3%;
               display: flex;
               p{
                 width:  pxTorem(30px);
                 height:  pxTorem(30px);
                 background: orange;
                 border-radius: 50px;
                 position: relative;
                 margin-top:  pxTorem(5px);
                 line-height:  pxTorem(30px);
                 text-align: center;
                 color: white;
                 font-size:  pxTorem(20px);
                 margin-right:  pxTorem(10px);
               }
              //  .files{
              //    position: absolute;
              //    opacity: 0;
              //    z-index: 10;
              //    width:100%;
              //    height: 100%;
              //    top: 0;
              //    left: 0;
              //  }
        }
              .images{
                  width: 100%;
                  @include box-flex;
                  flex-wrap: wrap;
                  li{
                    width: pxTorem(103px);
                    height:  pxTorem(103px);
                    @include box-flex;
                    justify-content: center;
                    align-items: center;
                    background: #eee;
                    position: relative;
                    .cha{
                    position: absolute;
                    top:pxTorem(2px);
                     right:pxTorem(2px);
                     width:pxTorem(20px);
                      height:pxTorem(20px);
                      text-align: center;
                      line-height: pxTorem(20px);
                      border-radius: 50%;
                      color: white;
                      background: rgba(0, 0, 0,.5);
                       }
                    img{
                      max-height: 100%;
                      max-width: 100%;
                    }
                  }
                }
    }
}
.footer{
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    line-height: pxTorem(50px);
    font-size: pxTorem(14px);
    span{
        width: pxTorem(80px);
        height: 100%;
        text-align: center;

    }
    p{
        flex: 1;
        text-align: center;
    }
    .quit{
        background: #404A53;
        color: #fff
    }
    .argee{
        background: #0b6242;
        color: #fff;
    }
}
</style>
