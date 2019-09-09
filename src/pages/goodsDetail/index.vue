<template>
  <div>
    <img :src="goodsInfo.imgUrl" alt>
    <p>{{goodsInfo.title}}</p>
    <p>￥{{goodsInfo.price}}</p>
    <div class="goods-bottom">
      <div class="count-box">
        <div @click="changeCount('reduce')">-</div>
        <div class="count">{{count}}</div>
        <div @click="changeCount('add')">+</div>
      </div>
      <div class="price">¥{{totalPrice}}</div>
      <div class="buy" @click="bindViewTap">立即购买</div>
    </div>
  </div>
</template>
<script>
import store from "../../store.js";
import card from "@/components/card";

export default {
  data() {
    return {
      goodsInfo: {
        id: "1",
        imgUrl:
          "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        title: "善品香山饮用天然泉水",
        price: "19"
      },
      count: 1,
      totalPrice: 19.0
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      console.log(1111);
      const url = "../submitOrder/main"; //'../logs/main' company
      if (mpvuePlatform === "wx") {
        //wx.switchTab({url});
        wx.navigateTo({ url });
        // mpvue.switchTab({
        // 	url
        // })
      } else {
        mpvue.navigateTo({
          url
        });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    handleChange({ detail }) {
      this.current = detail.mp.detail.key; //detail.key
      //         this.setData({
      //             current: detail.key
      //         });
    },
    changeCount(tag) {
      if (tag == "add") {
        this.count++;
      } else if (this.count > 1) {
        this.count--;
      }
      this.totalPrice = this.goodsInfo.price * this.count;
    }
  },

  created(options) {
    console.log(options);
    console.info(this.goodsInfo);
    // let app = getApp()
  },
  onLoad: function(options) {
    console.log(options);
  },
  onShow() {
    this.count = 1;
    console.info(444);
    //this.getGoods();
  },
  mounted() {
    console.info(1);
    console.info(this.$root.$mp.query);
  }
};
</script>

<style scoped>
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #d2d2d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.count-box {
  border: 1px solid #000;
  border-radius: 4px;
  width: 120px;
  text-align: center;
  margin-left: 20px;
  display: flex;
  align-items: stretch;
  height:30px;
}
.count-box > div {
  flex: 1;
  text-align: center;
  /* height:100%; */
}
.count {
  display: flex;
  /* width: 40px; */
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.price {
  color: #f40;
  font-size: 22px;
  font-weight: 500;
}
.goods-bottom > .buy {
  font-size: 16px;
  background-color: #ff4933;
  color: #fff;
  width: 120px;
  height: 100%;
  line-height: 50px;
  text-align: center;
}
</style>
