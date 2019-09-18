<template>
  <div class="goodslist">
    <i-tabs :current="currentType" @change="handleChange">
      <i-tab key="1" title="桶装水"></i-tab>
      <i-tab key="2" title="瓶装水"></i-tab>
      <!-- <i-tab key="tab3" title="选项3"></i-tab> -->
    </i-tabs>
    <section>
      <ul class="goodsul">
        <li v-for="(item, index) in goods" :key="item.id" @click="goToGoodsDetail(item.id)">
          <div class="goods-pic">
            <img :src="item.pic_url" alt />
          </div>
          <div class="goods-spec">
            <p class="goods-title">{{item.name}}</p>
            <p class="goods-bottom">
              <span class="price">¥{{item.price}}</span>
              <!-- <button bind:click="handleClick">立即订水</button> -->
            </p>
          </div>
        </li>
      </ul>
      <div></div>
    </section>
  </div>
</template>
<script>
import store from "../../store.js";
import card from "@/components/card";
import { get, post } from "../../utils/request";

export default {
  data() {
    return {
      brands: store.state.brands,
      currentType: 1,
      goods: [
        // {
        //   id: "1",
        //   imgUrl:
        //     "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        //   title: "善品香山饮用天然泉水",
        //   price: "19.00"
        // },
        // {
        //   id: "2",
        //   imgUrl:
        //     "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        //   title: "善品香山饮用天然泉水",
        //   price: "19.00"
        // }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap(tag) {
      const url = "../" + tag + "/main"; //'../logs/main' company
      wx.navigateTo({ url });
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    async handleChange(detail) {
      //console.info(detail);
      this.currentType = detail.mp.detail.key; //detail.key
      this.getGoods();
    },
    goToGoodsDetail(id) {
      const url = "../goodsDetail/main?id=" + id; //'../logs/main' company
      wx.navigateTo({ url });
    },
    async getGoods() {
      const res = await get(`/v1/getGoodsList?package_type=${this.currentType}`,{});
      if (res.status == 200) {
        console.info(111);
        this.goods = res.result;
      }
      // const res = await get("/v1/getGoodsList", {
      //   package_type: this.currentType
      //   // openId: this.userInfo.openId,
      //   // name: this.userInfo.nickName,
      //   // content: this.content,
      //   // phone: this.phone
      // });
    }
  },
  created() {
    //console.info(this.brands);
    console.info(1);
    //this.getGoods();
    // let app = getApp()
  },
  mounted() {
    console.info(2);
    //this.getGoods();
  },
  onLoad() {
    console.info(3);
    //this.getGoods();
  },
  async onShow() {
    console.info(4);
    await this.getGoods();
  }
};
</script>

<style scoped>
.goodslist {
  background-color: #fff;
}
.swiper {
  height: 376rpx !important;
}
image {
  height: 100%;
  width: 100%;
}
.goodsul > li {
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  padding: 6px 0 8px;
}
.goods-pic {
  width: 112px;
  height: 120px;
}
.goods-spec {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goods-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  color: #f40;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
}
.goods-bottom > button {
  font-size: 16px;
  background-color: #ff4933;
  color: #fff;
  padding: 5px 10px;
  border-radius: 24px;
  line-height: 1;
  margin-right: 10px;
}
</style>
