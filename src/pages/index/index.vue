<template>
  <div class="home">
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="(item, index) in images" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>

    <!-- <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
			<view slot="content">内容不错</view>
			<view slot="footer">尾部内容</view>
    </i-card>-->
    <div @click="bindViewTap('company')" class="company">申请成为公司用户</div>
    <!-- <div @click="bindViewTap('address')">选择地址</div> -->
    <!-- <i-divider content="快捷送水"></i-divider> -->
    <!-- <i-divider content="商品列表"></i-divider> -->
    <section>
      <ul class="goodsul">
        <li v-for="(item, index) in goods" :key="item.id" @click="goToGoodsDetail(item.id)">
          <div class="goods-pic">
            <img :src="item.imgUrl" alt>
          </div>
          <div class="goods-spec">
            <p class="goods-title">{{item.title}}</p>
            <p class="goods-bottom">
              <span class="price">¥{{item.price}}</span>
              <!-- <button bind:click="handleClick">立即订水</button> -->
            </p>
          </div>
        </li>
      </ul>
      <div></div>
    </section>
    <!-- <i-tab-bar :fixed="true" :current="mine" @change="handleChange()">
			<i-tab-bar-item key="home" icon="remind" current-icon="remind_fill" title="主页"></i-tab-bar-item>
			<i-tab-bar-item key="mall" icon="service" current-icon="mall_fill" title="商城"></i-tab-bar-item>
			<i-tab-bar-item key="activity" icon="activity" current-icon="activity_fill" title="活动"></i-tab-bar-item>
			<i-tab-bar-item key="order" icon="tasklist" current-icon="tasklist_fill" title="订单"></i-tab-bar-item>
			<i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>-->
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
      images: [
        {
          url:
            "https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png"
        },
        {
          url:
            "https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg"
        }
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      motto: "Hello miniprograme",
      current: "home",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png",
        current: "homepage"
	  },
	  goods:[
		  {
			  id:"1",
			  imgUrl:"http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
			  title:"善品香山饮用天然泉水",
			  price:"19.00"
		  },
		  {
			  id:"2",
			  imgUrl:"http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
			  title:"善品香山饮用天然泉水",
			  price:"19.00"
      },
      		  {
			  id:"2",
			  imgUrl:"http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
			  title:"善品香山饮用天然泉水",
			  price:"19.00"
		  },
	  ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap(tag) {
      console.log(1111);
      const url = "../" + tag + "/main"; //'../logs/main' company
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
    goToGoodsDetail(id){
      const url = "../goodsDetail/main?id="+id; //'../logs/main' company
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
    async getGoods() {
      const data = await post("/v1/getGoodsList", {
        openId: this.userInfo.openId,
        name: this.userInfo.nickName,
        content: this.content,
        phone: this.phone
      });
    }
  },

  created() {
    console.info(this.brands);
    // let app = getApp()
  }
};
</script>

<style scoped>
.home{
  background-color: #fff;
}
.swiper {
  height: 376rpx !important;
}
image {
  height: 100%;
  width: 100%;
}
.company{
  padding:10px 30px;
  color:#fff;
  background-color: #01b6eb;
  font-size:16px;
  text-align: center;
  border-bottom:1px solid #e8e8e8;
}
.company>button{
  border-radius:4px;
  width:100%;
  color:#fff;
  background-color: #01b6eb;
  font-size:16px;
}
.goodsul>li{
	display:flex;
	border-bottom:1px solid #e8e8e8;
	padding:6px 0 8px;
}
.goods-pic{
	width:112px;
	height:120px;
}
.goods-spec{
	flex:1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.goods-bottom{
	display:flex;
	justify-content: space-between;
	align-items: center;
}
.price{
	color:#f40;
	font-size: 24px;
    font-weight: 700;
    flex:1;
}
.goods-bottom>button{
	font-size:16px;
	background-color: #ff4933;
    color: #fff;
    padding: 5px 10px;
    border-radius: 24px;
	line-height:1;
  margin-right:10px;

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
