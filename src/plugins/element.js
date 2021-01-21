import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// 导入提示框组件，需要全局挂载 

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message;
