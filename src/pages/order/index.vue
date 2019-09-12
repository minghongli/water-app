<template>
  <div>
    <i-tabs :current="current" @change="changeTab">
      <!-- <i-tab key="tab1" title="已购买"></i-tab> -->
      <!-- 已购买就是待配送 -->
      <i-tab key="0" title="待配送"></i-tab>
      <!-- <i-tab key="tab3" title="配送中"></i-tab> -->
      <i-tab key="1" title="已完成"></i-tab>
      <!-- <i-tab key="tab4" title="待评价"></i-tab> -->
      <i-tab key="-1" title="全部"></i-tab>
    </i-tabs>
    <div class="list">
      <div
        class="item card"
        v-for="(item,index) in list"
        :key="index"
        @click="goToDetail(item._id)"
      >
        <div class="content" v-for="(goods,idx) in item.goods" :key="idx">
          <div class="item-l">
            <img :src="goods.pic_url" alt />
          </div>

          <div class="item-c des">
            <p class="title">{{goods.name}}</p>
          </div>
          <div class="item-r">
            <p class="price">￥{{goods.price}}.00</p>
            <p class="count">*{{goods.num}}</p>
          </div>
        </div>
        <div class="footer">
          <p class="total">合计:￥{{item.total_price}}.00</p>
          <!-- <div class="btn-bar">
            <button>确认收货</button>
          </div>-->
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
      current: "0",
      // list:[],
      list: [
        {
          create_time: "2019-09-06T09:22:27.666Z",
          total_price: 30,
          goods: [
            {
              has_comment: false,
              _id: "5d7225718557c526ac3cde2e",
              name: "11",
              price: 10,
              num: 2,
              total_price: "20",
              pic_url:
                "http://shuidifu.cn/upload/201905/21/201905211830167115.jpg"
            },
            {
              has_comment: false,
              _id: "5d7225718557c526ac3cde2d",
              name: "11",
              price: 10,
              num: 1,
              total_price: "10",
              pic_url:
                "http://shuidifu.cn/upload/201905/21/201905211830167115.jpg"
            }
          ],
          address: {
            phone: "13120121466",
            name: "minghong",
            address_all: "地址1"
          },
          user_id: "id",
          remark: "",
          status: "未支付",
          code: 0,
          delivery_state: 0,
          create_time_timestamp: "1567761777",
          __v: 0
        },
        {
          create_time: "2019-09-06T09:20:44.463Z",
          total_price: 30,
          goods: [
            {
              has_comment: false,
              _id: "5d72250cc6f8e262a80405d8",
              name: "11",
              price: 10,
              num: 2,
              total_price: "20",
              pic_url:
                "http://shuidifu.cn/upload/201905/21/201905211830167115.jpg"
            },
            {
              has_comment: false,
              _id: "5d72250cc6f8e262a80405d7",
              name: "11",
              price: 10,
              num: 1,
              total_price: "10",
              pic_url:
                "http://shuidifu.cn/upload/201905/21/201905211830167115.jpg"
            }
          ],
          address: {
            phone: "13120121466",
            name: "minghong",
            address_all: "地址1"
          },
          user_id: "id",
          remark: "",
          status: "未支付",
          code: 0,
          delivery_state: 0,
          create_time_timestamp: "1567761676",
          __v: 0
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    changeTab(detail) {
      console.info(detail);
      this.current = detail.mp.detail.key;
      //this.current=detail.key;
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    goToDetail(id) {
      const url = "../orderDetail/main?id=" + id;
      wx.navigateTo({ url });
    }
  },

  created() {
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
