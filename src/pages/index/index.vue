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
        <li v-for="item in goods" :key="item._id" @click="goToGoodsDetail(item._id)">
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
import axios from "axios";

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
      goods: [
        // {
        //   _id: "5d76ff6b20515dc2d87fe56a",
        //   id: 1,
        //   brand: 1,
        //   name: "善品香山弱碱性天然泉水",
        //   capacity: 1,
        //   package_type: 1,
        //   price: 17,
        //   description:
        //     '<p class="MsoNormal" align="left"><b><span style="color:#337FE5;font-size:16px;">“</span></b><b><span style="color:#337FE5;font-size:16px;">善品香山</span><span lang="EN-US" style="color:#337FE5;font-size:16px;">”</span><span style="color:#337FE5;font-size:16px;">水</span><span lang="EN-US" style="font-size:16px;">&nbsp; </span><span style="font-size:16px;">源自北京园博园区域地下</span><span lang="EN-US" style="font-size:16px;">1000</span><span style="font-size:16px;">多米水层</span><span lang="EN-US" style="font-size:16px;">,</span><span style="font-size:16px;">经多重净化加工，保留其天然特质</span><span lang="EN-US" style="font-size:16px;">;</span><span style="font-size:16px;">水样在国家水样</span><span lang="EN-US" style="font-size:16px;">106</span><span style="font-size:16px;">项检测中全部达标</span><span lang="EN-US" style="font-size:16px;">,</span><span style="font-size:16px;">水</span><span lang="EN-US" style="font-size:16px;">ph</span><span style="font-size:16px;">值为</span><span lang="EN-US" style="font-size:16px;">7.5</span><span style="font-size:16px;">，与人体血液的</span><span lang="EN-US" style="font-size:16px;">ph</span><span style="font-size:16px;">值（</span><span lang="EN-US" style="font-size:16px;">7.3</span><span style="font-size:16px;">）接近，口感甘甜</span><span lang="EN-US" style="font-size:16px;">,</span><span style="font-size:16px;">是新一代高端饮用天然水。它富含偏硅酸、锶、钙、镁、钾等</span><span lang="EN-US" style="font-size:16px;">20</span><span style="font-size:16px;">余种微量元素，可以调节人体酸碱平衡、激活人体细胞（小分子团结构）净化细胞和血液、可清除体内多余的自由基、</span><span lang="EN-US" style="font-size:16px;">100%</span><span style="font-size:16px;">的具备抗菌排毒的功能，增强免疫力、防三高、防尿酸高、保护肝脏。缓解现代人因烟酒过多、熬夜、肉食过多、缺乏运动等带来的亚健康问题。</span></b> <b><o:p></o:p></b></p><p class="MsoNormal" align="left"><span style="font-size:16px;">&nbsp;</span></p>',
        //   pic_url: "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        //   sequence: 1,
        //   month_saled: 0,
        //   month_saled_content: "0",
        //   comment_number: 0,
        //   __v: 0
        // },

        // {
        //   _id: "5d76ff9520515dc2d87fe576",
        //   id: 1,
        //   brand: 1,
        //   name: "饮用纯净水",
        //   capacity: 1,
        //   package_type: 1,
        //   price: 15,
        //   description:
        //     "<p>品名：时代峡谷包装饮用水</p><p>配料：水</p><p>产品标准号：GB19298</p><p>规格：18.9L</p><p>保质期：未开封三个月</p><p>产地：北京市密云区</p><p><br></p>",
        //   pic_url: "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        //   sequence: 1,
        //   month_saled: 0,
        //   month_saled_content: "0",
        //   comment_number: 0,
        //   __v: 0
        // },
        // {
        //   _id: "5d76ff9520515dc2d87fe578",
        //   id: 1,
        //   brand: 1,
        //   name: "乐百氏饮用天然泉水",
        //   capacity: 1,
        //   package_type: 1,
        //   price: 20,
        //   description:
        //     "<p>乐百氏是法国达能集团旗下企业，拥有十多年专业制水经验，致力于用专业的制水工艺，为消费者提供优质的饮用水以及健康的生活。1999年10月创办了桶装水事业部，始终秉承“严格治水、造福于民”的经营理念，将质量视同企业的生命。凭借乐百氏良好的产品品质和先进的销售模式，乐百氏桶装水迅速被消费者认同，取得了销量全国第一，市场覆盖率全国第一的卓越成绩。</p>",
        //   pic_url: "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        //   sequence: 1,
        //   month_saled: 0,
        //   month_saled_content: "0",
        //   comment_number: 0,
        //   __v: 0
        // },
        // {
        //   _id: "5d76ffd220515dc2d87fe584",
        //   id: 1,
        //   brand: 1,
        //   name: "怡宝纯净水",
        //   capacity: 1,
        //   package_type: 1,
        //   price: 21,
        //   description: "",
        //   pic_url: "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        //   sequence: 1,
        //   month_saled: 0,
        //   month_saled_content: "0",
        //   comment_number: 0,
        //   __v: 0
        // }
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
    goToGoodsDetail(id) {
      const url = "../goodsDetail/main?id=" + id; //'../logs/main' company
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
      // const data = await post("/v1/getGoodsList", {
      //   openId: this.userInfo.openId,
      //   name: this.userInfo.nickName,
      //   content: this.content,
      //   phone: this.phone
      // });
      const data = await get("/v1/getGoodsList", {});
      // const data = await axios({
      //   url: "/v1/getGoodsList", //admin_login
      //   method: "get",
      //   data: {}
      // });
      console.info(data);
    }
  },

  async created() {
    await this.getGoods();
    console.info(this.brands);
    // let app = getApp()
  }
};
</script>

<style scoped>
.home {
  background-color: #fff;
}
.swiper {
  height: 376rpx !important;
}
image {
  height: 100%;
  width: 100%;
}
.company {
  padding: 10px 30px;
  color: #fff;
  background-color: #01b6eb;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
}
.company > button {
  border-radius: 4px;
  width: 100%;
  color: #fff;
  background-color: #01b6eb;
  font-size: 16px;
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
