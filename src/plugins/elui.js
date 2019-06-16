import head from '@/components/header/head'
import alertConfig from '../components/alertMessage'
export default {
  install(Vue){
    Vue.component('el-header',head);
    const AlertClass=Vue.extend(alertConfig); //组件类
    Vue.prototype.$alert=(text)=>{
      const AlertComponent= new AlertClass({
        propsData:{
          text
        }
      })  //组件实例
    AlertComponent.$mount()
    document.body.appendChild(AlertComponent.$el)
    }
  }
}
