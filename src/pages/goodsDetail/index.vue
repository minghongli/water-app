<template>
  <div class="container">
    <div class="content">
      <div class="img-box">
        <img :src="goodsInfo.pic_url" alt="img" />
      </div>

      <p class="title">{{goodsInfo.name}}</p>
      <p class="price">￥{{goodsInfo.price}}</p>
      <p v-html="goodsInfo.description"></p>
    </div>

    <div class="goods-bottom">
      <div class="count-box">
        <div @click="changeCount('reduce')">-</div>
        <div class="count">{{count}}</div>
        <div @click="changeCount('add')">+</div>
      </div>
      <div class="price">¥{{totalPrice}}</div>
      <div class="buy" @click="buy">立即购买</div>
    </div>
  </div>
</template>
<script>
import store from "../../store.js";
import card from "@/components/card";
import { get, post } from "../../utils/request";
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      goodsId: "",
      goodsInfo: {
        _id: "5d76ff6b20515dc2d87fe56a",
        id: 1,
        brand: 1,
        name: "善品香山弱碱性天然泉水",
        capacity: 1,
        package_type: 1,
        price: 17,
        description:
          '<p class="MsoNormal" align="left"><b><span style="color:#337FE5;font-size:16px;">“</span></b><b><span style="color:#337FE5;font-size:16px;">善品香山</span><span lang="EN-US" style="color:#337FE5;font-size:16px;">”</span><span style="color:#337FE5;font-size:16px;">水</span><span lang="EN-US" style="font-size:16px;">&nbsp; </span><span style="font-size:16px;">源自北京园博园区域地下</span><span lang="EN-US" style="font-size:16px;">1000</span><span style="font-size:16px;">多米水层</span><span lang="EN-US" style="font-size:16px;">,</span><span style="font-size:16px;">经多重净化加工，保留其天然特质</span><span lang="EN-US" style="font-size:16px;">;</span><span style="font-size:16px;">水样在国家水样</span><span lang="EN-US" style="font-size:16px;">106</span><span style="font-size:16px;">项检测中全部达标</span><span lang="EN-US" style="font-size:16px;">,</span><span style="font-size:16px;">水</span><span lang="EN-US" style="font-size:16px;">ph</span><span style="font-size:16px;">值为</span><span lang="EN-US" style="font-size:16px;">7.5</span><span style="font-size:16px;">，与人体血液的</span><span lang="EN-US" style="font-size:16px;">ph</span><span style="font-size:16px;">值（</span><span lang="EN-US" style="font-size:16px;">7.3</span><span style="font-size:16px;">）接近，口感甘甜</span><span lang="EN-US" style="font-size:16px;">,</span><span style="font-size:16px;">是新一代高端饮用天然水。它富含偏硅酸、锶、钙、镁、钾等</span><span lang="EN-US" style="font-size:16px;">20</span><span style="font-size:16px;">余种微量元素，可以调节人体酸碱平衡、激活人体细胞（小分子团结构）净化细胞和血液、可清除体内多余的自由基、</span><span lang="EN-US" style="font-size:16px;">100%</span><span style="font-size:16px;">的具备抗菌排毒的功能，增强免疫力、防三高、防尿酸高、保护肝脏。缓解现代人因烟酒过多、熬夜、肉食过多、缺乏运动等带来的亚健康问题。</span></b> <b><o:p></o:p></b></p><p class="MsoNormal" align="left"><span style="font-size:16px;">&nbsp;</span></p>',
        pic_url:
          "http://www.shuidifu.cn/upload/201905/21/thumb_201905211830222115.jpg",
        sequence: 1,
        month_saled: 0,
        month_saled_content: "0",
        comment_number: 0,
        __v: 0
      },
      count: 1
      // totalPrice: 19.0
    };
  },
  computed: {
    totalPrice: function() {
      return this.count * this.goodsInfo.price;
    }
  },
  components: {
    card
  },

  methods: {
    async buy() {
      let url = `../submitOrder/main?id=${this.goodsId}&num=${this.count}`; 
      if (!this.$store.state.isLogin) {
        url = "../login/main"; 
      }
      wx.navigateTo({ url });
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
    },
    async getGoodsInfo() {
      this.goodsInfo = await get(`/v1/getGoodsDetail/${this.goodsId}`, {});
    }
  },

  created(options) {
    //console.info("created");
    //console.log(options);
    //console.info(this.goodsInfo);
  },
  onLoad: function(options) {
    console.info("onLoad");
    //console.log(options);
  },
  onShow() {
    console.info("onshow");
    //this.getGoods();
  },
  mounted() {
    console.info("mounted");
    console.info(this.$root.$mp.query);
    this.goodsId = this.$root.$mp.query.id;
    //await this.getGoodsInfo();
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
}
.content {
  margin-bottom: 50px;
}
.img-box {
  text-align: center;
}
image {
  height: 415px;
  width: 285px;
}
.title {
  font-size: 22px;
  font-weight: 500;
  margin: 10px 0 10px;
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
  background-color: #fff;
}
.count-box {
  border: 1px solid #000;
  border-radius: 4px;
  width: 120px;
  text-align: center;
  margin-left: 20px;
  display: flex;
  align-items: stretch;
  height: 30px;
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
