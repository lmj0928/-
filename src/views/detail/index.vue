<template>
    <div class="wrap">
        <Header :classname="classname">
            <p>{{type==='overtime' ? "办公室加班申请表" :"办公室休假申请表"}}</p>
            <span></span>
        </Header>
        <!-- 中间的绿色部分 -->
        <div class="username">
            <dl>
                <dt>
                    <img :src="details.avatar" alt="">
                </dt>
                <dd>
                    <span>申请人姓名</span>
                    <span>直接主管</span>
                    <span>申请单号</span>
                    <span>发起时间</span>
                </dd>
                <dd>
                    <span>{{details.nickname}}</span>
                    <span>秦义超</span>
                    <span>{{details.applicationNumber}}</span>
                    <span>2019-06-12</span>
                </dd>
                <dd>
                    <span>&gt;</span>
                </dd>
            </dl>
        </div>
        <!-- 下边的盒子 -->
        <div class="content">
            <div class="meg">
                <h3>申请信息</h3>
                <p>
                    <span>加班日期<i>*</i></span>
                    <span>{{toTime(details.startTime)}}</span>
                </p>
                <p>
                    <span>加班类型<i>*</i></span>
                    <span>{{details.list_type==='overtime' ? '工作日加班' : '休假'}}</span>
                </p>
                <p>
                    <span>加班起始时间<i>*</i></span>
                    <span>{{toString(details.startTime)}}</span>
                </p>
                <p>
                    <span>加班截止时间<i>*</i></span>
                    <span>{{toString(details.endTime)}}</span>
                </p>
                <p>
                    <span>共计时数<i>*</i></span>
                    <span>{{times(details.startTime,details.endTime)}}</span>
                </p>
            </div>
            <div class="reason">
                <h3>加班事由</h3>
                <p>
                    {{details.describes}}
                </p>
            </div>
            <div class="reason img">
                <h3>附件</h3>
                <p>
                    <img :src="'http://localhost:3000'+item" alt="" v-for="(item,i) in details.annex" :key="i"/>
                </p>
            </div>
        </div>
        <!-- 最下边的脚 -->
        <footer class="footer">
            <span>审批历史</span>
            <p class="quit" @click="$router.back()">退出</p>
            <p class="argee">同意</p>
        </footer>
    </div>
</template>
<script>
import api from "../../api/index"
export default {
    props:{
        type:String,
        id:String
    },
    data(){
        return {
            classname:'el-header',
            details:{},
            flags:true
        }
    },
    methods:{
        gettype(){
            api[this.type+'detail']({
                applicationNumber:this.id
            }).then(res=>{
                this.details = res.data;
                this.flags = false;
                console.log(this.details)
            })
        },
        toTime(time) {
            return new Date(time).toLocaleDateString();
        },
        toString(time){
            return new Date(time).toLocaleString()
        },
        times(startTime, endTime) {
            let newTime = new Date(endTime) - new Date(startTime);
            let days = parseInt(newTime / 1000 / 60 / 60 / 24);
            let hours = parseInt((newTime / 1000 / 60 / 60) % 24);
            return days+'.'+hours+'天'
        },
    },
    created(){
        this.gettype()
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
header{
  width: 100%;
  height: pxTorem(40px);
   @include box-flex;
   justify-content: center;
  align-items: center;
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
        >p{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(60px);
            font-size: pxTorem(14px);
            padding-top: pxTorem(3px);
        }
    }
    .img{
        >p{
            width: 100%;
            height: pxTorem(120px);
            display: flex;
            img{
                width: pxTorem(120px);
                height: pxTorem(120px);
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
