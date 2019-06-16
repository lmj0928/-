import request from "../utils/request"
export default {
    //首次进入页面的登录情况
    userinfo:()=>request.get("/api/user/info"),

    //获取首页加班的列表数据
    getlist:(data)=>request.get("/api/task/list",data),

    //登录的请求
    getlogin:(data)=>request.post("/api/login",data),

    //加班的详情  -------  overtime
    overtimedetail:(data)=>request.get('/api/apply/overtime',data),

    //休假的详情  -------  vacation
    vacationdetail:(data)=>request.get('/api/apply/vacation',data),

    //提交加班
    getovertime:(data)=>request.post("/api/apply/overtime",data),

    //提交休假
    getvacation:(data)=>request.post("/api/apply/vacation",data),
    //提交图片
    submitFile:(filedata)=>request.post('/api/upload',filedata),
    //提交加班
    submitovertime:(data)=>request.post('/api/apply/overtime',data),
    //提交休假
    submitvacation:(data)=>request.post('/api/apply/vacation',data)
}
