<template>
  <div class="order">
    <div @click="toAddressList" v-if="addressInfo.name" class="address">
      <div class="item">
        <div class="list">
          <div class="addresslist" >
            <div>
              <span>{{addressInfo.name}}</span>
              <div v-if="addressInfo.is_default" class="moren">默认</div>
            </div>
            <div class="info">
              <p>{{addressInfo.phone}}</p>
              <p>{{addressInfo.address+addressInfo.address_detail}}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div @click="toAddressList" v-else class="seladdress" >请选择收货地址</div>
    <div class="orderbox">
      <div class="item">
        <div>商品合计</div>
        <div>￥{{allprice}}</div>
      </div>
      <!-- <div class="item">
        <div>运费</div>
        <div>免运费</div>
      </div>-->
      <div class="item">
        <div>优惠券</div>
        <div>暂无</div>
      </div>
    </div>
    <div class="cartlist">
      <div class="item" v-for="(item,index) in goodslist" :key="index">
        <div class="con">
          <div class="left">
            <div class="img">
              <img :src="item.list_pic_url" alt>
            </div>
            <div class="info">
              <p>{{item.goods_name}}</p>
              <p>￥{{item.retail_price}}</p>
            </div>
          </div>
          <div class="right">
            <div class="num">x{{item.number}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>实付 : ￥{{allprice}}</div>
      <div @click="pay">支付</div>
    </div>
  </div>
</template>

<script>
//import sepLine from "@/components/sep-line";
// import {orderData} from './data'
// import {openLocation} from '@/utils/wxapi'
// import {mapState, mapMutations, mapActions, mapGetters} from "vuex"

export default {
  onShow() {
    // if (wx.getStorageSync("addressId")) {
    //   this.addressId = wx.getStorageSync("addressId");
    // }
    // this.openId = getStorageOpenid();

    this.getDetail();
  },
  data() {
    return {
      addressId: "",
      addressInfo: {
        address: "天津市 天津市 和平区",
        address_detail: "321312",
        id: 598,
        is_default: 0,
        phone: "32",
        name: "321",
        user_id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
      },
      arrivalInfo: {},
      goodslist: [
        {
          goods_id: 1152004,
          goods_name: "魔兽世界 蛋盾包 双肩包",
          id: 1207,
          list_pic_url:
            "http://yanxuan.nosdn.127.net/8c93cef435d888bd79833777df1cd0c2.png",
          number: 1,
          retail_price: 399,
          user_id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
        }
      ],
      openId: "",
      allprice: "28"
    };
  },
  computed: {
    // ...mapState('shoppingCart', ['shopInfo', 'reduceFee']),
    // deliveryFee() {
    //   return this.shopInfo.support_pay
    // },
    // realFee() {
    //   var totalPrice = 0
    //   this.shopInfo.selectedArr.map(item => totalPrice += parseFloat(item.totalPrice))
    //   return parseFloat(totalPrice - this.reduceFee).toFixed(1)
    // }
  },
  components: {
    //sepLine
  },
  methods: {
    toAddressList() {
      wx.navigateTo({url: '/pages/address/main'})
    },
    // redPacketClick() {
    //   wx.navigateTo({url: '/pages/redPacket/main'})
    // },
    // couponClick() {
    //   wx.navigateTo({url: '/pages/couponList/main'})
    // },
    // remarkClick() {
    //   wx.navigateTo({url: '/pages/remark/main'})
    // },
    // deliveryClick() {
    //   this.tabIndex = 0;
    // },
    // pickClick() {
    //   this.tabIndex = 1;
    // },
    // protocol() {
    //   wx.navigateTo({url: '/pages/pickProtocol/main'})
    // },
    // openMap() {
    //   wx.getLocation({
    //     type: 'gcj02',
    //     success (res) {
    //       const latitude = res.latitude
    //       const longitude = res.longitude
    //       wx.openLocation({
    //         latitude,
    //         longitude,
    //         scale: 28
    //       })
    //     }
    //   })
    // },
    // payClick() {
    //   wx.navigateTo({url: '/pages/orderDetail/main'})
    // }
    async getDetail() {
      // const data = await get("/order/detailAction", {
      //   openId: this.openId,
      //   addressId: this.addressId
      // });
      // console.log(data);
      // if (data) {
      // 	console.info(data);
      //   this.allprice = data.allPrise;
      //   this.listData = data.goodsList;
      //   this.address = data.address;
      // }
    }
  },
  mounted() {
    // this.itemData = orderData.delivery.data
    // this.addressInfo = this.itemData.address_info
    // this.arrivalInfo = this.itemData.expected_arrival_info
    // this.privacy_service = this.itemData.privacy_service
    // this.remark_field = this.itemData.remark_field
    // this.pcikData = orderData.pick.data.address_info
    // this.tablewareArr = this.itemData.diners_option.map(item => item.description)
    // this.foodList = this.shopInfo.selectedArr
  }
};
</script>

<style scoped>
.order {
  overflow-x: hidden;
}
.seladdress {
  width: 100%;
  min-height: 166rpx;
  background: url("http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png")
    0 0 repeat-x #fff;
  background-size: 62rpx 10rpx;
  margin-bottom: 20rpx;
  padding-top: 10rpx;
  text-align: center;
  line-height: 166rpx;
}
.address {
  background: url("http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png")
    0 0 repeat-x #fff;
  padding: 50rpx 0 30rpx 0;
  margin-bottom: 20rpx;
}
.address .item {
  padding: 0 20rpx;
}
.address .item .addresslist {
  width: 100%;
  position: relative;
  transition: all 300ms ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.address .item .addresslist div:nth-child(1) {
  width: 100rpx;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-self: flex-start;
}
.address .item .addresslist .moren {
  width: 60rpx;
  height: 30rpx;
  border: 1rpx solid #b4282d;
  text-align: center;
  line-height: 30rpx;
  color: #b4282d;
  margin: 10rpx auto 0 auto;
}
.address .item .info {
  padding: 0 20rpx;
  flex: 1;
}
.address .item .info p:nth-child(2) {
  margin-top: 5rpx;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.address .item div:nth-child(3) {
  width: 50rpx;
  height: 50rpx;
  margin: 0 20rpx;
  background: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-596d39df1e.png")
    no-repeat;
  background-size: 100% 100%;
}
.orderbox {
  padding: 0 30rpx;
  background: #ffffff;
}
.orderbox .item {
  padding: 30rpx 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1rpx solid #d9d9d9;
}
.orderbox .item:last-child {
  border: none;
}

.cartlist {
  background: #fff;
  margin-bottom: 110rpx;
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
.bottom {
  position: fixed;
  bottom: 0;
  height: 100rpx;
  width: 100%;
  display: flex;
  background: #fff;
  font-size: 32repx;
}
.bottom div:nth-child(1) {
  flex: 1;
  line-height: 100rpx;
  padding-left: 20rpx;
}
.bottom div:nth-child(2) {
  width: 200rpx;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  font-size: 29rpx;
  background: #ff4933;
  color: #fff;
}
</style>
