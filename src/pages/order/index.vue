<template>
  <div>
    <i-tabs :current="current" @change="handleChange">
      <!-- <i-tab key="tab1" title="已购买"></i-tab> -->
      <!-- 已购买就是待配送 -->
      <i-tab key="tab2" title="待配送"></i-tab>
      <!-- <i-tab key="tab3" title="配送中"></i-tab> -->
      <i-tab key="tab3" title="已完成"></i-tab>
      <!-- <i-tab key="tab4" title="待评价"></i-tab> -->
      <i-tab key="tab5" title="全部"></i-tab>
    </i-tabs>
    <div class="list">
      <div class="item card" @click="goToDetail()">
        <div class="content">
          <div class="item-l">
            <img src="http://www.shuidifu.cn/upload/201610/18/thumb_201610181357309290.jpg" alt>
          </div>

          <div class="item-c des">
            <p class="title">乐百氏桶装天然泉水</p>
          </div>
          <div class="item-r">
            <p class="price">￥15.00</p>
            <p class="count">*1</p>
          </div>
        </div>
        <div class="footer">
          <p class="total">合计:￥15.00</p>
          <div class="btn-bar">
            <button>确认收货</button>
          </div>
        </div>
      </div>
      <!-- <i-card
        i-class="order-card"
        title="乐百氏桶装天然泉水"
        extra="￥20.00"
        thumb="http://www.shuidifu.cn/upload/201610/18/thumb_201610181357309290.jpg"
      >
        <view slot="content">
          <div>
            <p>数量:10</p>
            <p>合计:￥200.00</p>
          </div>
        </view>
        <view slot="footer">尾部内容</view>
      </i-card>-->
    </div>
  </div>
</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      current: "tab1",
      // list:[],
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png",
        current: "homepage"
      }
    };
  },

  components: {
    card
  },

  methods: {
    handleChange(detail) {
      console.info(detail);
      this.current = detail.mp.detail.key;
      //this.current=detail.key;
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({
          url
        });
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
    goToDetail() {
      const url = "../orderDetail/main";
      wx.navigateTo({ url });
    }
  },

  created() {
    console.info(22);
    // let app = getApp()
  }
};
</script>

<style scoped>
.card {
  font-size: 16px;
  margin: 10px 15px 0;
  padding: 0;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  background: #fff;
}
.card > .content {
  display: flex;
  padding: 10px;
}
.card .item-l {
  width: 74px;
  height: 74px;
}
.card .item-l img {
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.item-c {
  flex: 1;
  padding: 0 10px;
}
.footer {
  padding: 10px;
  text-align: right;
}
.total {
  text-align: right;
  margin-bottom: 10px;
  border-bottom: 1px solid #d2d2d2;
  /* font-size:14px; */
}
button {
  width: 100px;
  padding: 6px 0;
  text-align: center;
  display: inline-block;
  line-height: 1;
  font-size: 16px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #d2d2d2;
}
.item-f {
  display: flex;
}

.item-f > img {
  width: 120px;
  height: 120px;
}

.detail {
  flex: 1;
}

.item-r {
  width: 80px;
  text-align: right;
}

.item-r .count {
  font-size: 12px;
  color: #999;
}

.order-card {
  padding: 6px 10px;
  margin-top: 15px;
}

.order-card .i-card-header-extra {
  width: 50px;
}

/* .userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
} */
</style>
