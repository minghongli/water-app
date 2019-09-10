import Vue from 'vue'
import App from './index'
import store from '@/store'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

// const app = new Vue(App)
const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  config: {
    usingComponents: {
      'i-card': '../../../static/iview/card/index'
    }
  }
}
