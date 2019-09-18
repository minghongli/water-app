<template>
  <div>
    <section class="state">
      已完成
    </section>
    <section class="cartlist">
      <div class="item" v-for="(item,index) in orderInfo.goods" :key="index">
        <div class="con">
          <div class="left">
            <div class="img">
              <img :src="item.pic_url" alt />
            </div>
            <div class="info">
              <p>{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </div>
          <div class="right">
            <div class="num">x{{item.num}}</div>
          </div>
        </div>
      </div>
      <div class="money">
        <span>订单总价：</span><span>{{total_price}}</span>
      </div>
    </section>
    <section class="address">
      <p>
        <span class="label">订单编号：</span>
        <span>{{number}}</span>
      </p>
      <p>
        <span class="label">下单时间：</span>
        <span>{{create_time}}</span>
      </p>
      <p>
        <span class="label">收货人：</span>
        <span>{{orderInfo.address.name}}&nbsp;{{orderInfo.address.phone}}</span>
      </p>
      <p>
        <span class="label">收货地址：</span>
        <span>{{orderInfo.address.address_all}}</span>
      </p>

    </section>
  </div>
</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      orderId:"",
      orderInfo:{
      address: {
        phone: "13120121466",
        name: "minghong",
        address_all: "地址1"
      },
      create_time: "2019-09-06T08:50:30.775Z",
      _id: "5d721fc19aa0a34128c0e637",
      total_price: 30,
      goods: [
        {
          has_comment: false,
          _id: "5d721fc19aa0a34128c0e639",
          name: "11",
          price: 10,
          num: 2,
          total_price: "20",
          pic_url: "http://shuidifu.cn/upload/201905/21/201905211830167115.jpg"
        },
        {
          has_comment: false,
          _id: "5d721fc19aa0a34128c0e638",
          name: "11",
          price: 10,
          num: 1,
          total_price: "10",
          pic_url: "http://shuidifu.cn/upload/201905/21/201905211830167115.jpg"
        }
      ],
      remark: "",
      status: "超过支付期限",
      code: 400,
      create_time_timestamp: "1567760321",
      __v: 0,
      pay_remain_time: "0",
      number: "1234"
      },

    };
  },

  components: {
    card
  },

  methods: {
    async getInfo(){
      const data = await get("/v1/getGoodsList", {});
      // const data = await axios({
      //   url: "/v1/getGoodsList", //admin_login
      //   method: "get",
      //   data: {}
      // });
      console.info(data);
    }
  },

  created() {
    // this.orderId = this.$root.$mp.query.id;
    // console.info(this.orderId);
    // this.getInfo();
    
    // let app = getApp()
  }
};
</script>

<style scoped>
.state{
  height:40px;
}
section {
  background-color: #fff;
  margin-bottom: 10px;
  font-size:14px;
}
.cartlist {
  background: #fff;
  margin-top: 20rpx;
}
.cartlist .item {
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f4f4f4;
  position: relative;
}
.cartlist .item .con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 300ms ease;
}
.cartlist .item .con .left {
  display: flex;
  align-items: center;
  width: 80%;
}
.cartlist .item .con .left .img {
  height: 125rpx;
  width: 125rpx;
  display: block;
  background: #f4f4f4;
  margin-left: 20rpx;
}
.cartlist .item .con .left .img img {
  width: 100%;
  height: 100%;
}
.cartlist .item .con .info {
  width: 50%;
  padding: 20rpx;
}
.cartlist .item .con .info p {
  line-height: 40rpx;
}
.cartlist .item .con .right {
  padding-right: 50rpx;
}
.money{
  display: flex;
  justify-content:space-between;
}
.address p{
  padding:6px;
  line-height:2;
}
.address p .label{
  display: inline-block;
  width:80px;
  text-align: justify;
  text-align-last: justify;
}
</style>
