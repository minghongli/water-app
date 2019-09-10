import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //是否登录
    isLogin: wx.getStorageSync('isLogin') ? wx.getStorageSync('isLogin') : false,
    openid: '',
    session_key: '',
    token: "",
    //品牌
    brands: ["维维碱LOVE天然泉水", "乐百氏", "怡宝", "景田", "雀巢", "娃哈哈", "燕京", "农夫山泉", "5100西藏冰川矿泉水", "善品香山", "时代峡谷"],
    goodslist: [
      {
        goods_id: "",
        goods_name: "",
        id: "",
        list_pic_url: "",
        number: 1,
        _id: "5d76ff6b20515dc2d87fe56a",
        id: 1,
        brand: 1,
        name: "善品香山弱碱性天然泉水",
        capacity: 1,
        package_type: 1,
        price: 17,
        description: '',
        pic_url:
          "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        sequence: 1,
        month_saled: 0,
        month_saled_content: "0",
        comment_number: 0,
      }
    ],
  },
  mutations: {
    login(state, data) {
      console.info(data);
      let { openid, session_key, token } = data;
      console.info(222);
      console.info(openid);
      wx.setStorage({
        key: "isLogin",
        data: true
      });
      state.isLogin = true;
      state.openid = openid;
      state.session_key = session_key;
      state.token = token;
    },
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  actions: {
    login({ commit }, result) {
      console.info(123);
      commit('login', result)
    }
  }
})

export default store