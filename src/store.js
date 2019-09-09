import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //品牌
    brands:["维维碱LOVE天然泉水","乐百氏","怡宝","景田","雀巢","娃哈哈","燕京","农夫山泉","5100西藏冰川矿泉水","善品香山","时代峡谷"],
    order:{
      address:"",
      goodslist: [
        {
          goods_id: "",
          goods_name: "",
          id: "",
          list_pic_url:"",
          number: 1,
          retail_price: 0,
          user_id: ""
        }
      ],
      allprice:0    
    },
    selectAddress:"",
  },
  mutations: {
    
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store