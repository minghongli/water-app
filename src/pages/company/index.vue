<template>
  <div>
    <div class="line">
      <label for>公司名称:</label>
      <input v-model="formdata.companyName" placeholder="例：xx公司" />
    </div>
    <div class="line">
      <label for>收 货 人:</label>
      <input v-model="formdata.userName" placeholder="请输入姓名" />
    </div>
    <div class="line">
      <label for>联系电话:</label>
      <input v-model="formdata.phone" placeholder="请输入联系电话" />
    </div>
    <div class="line">
      <label for>公司地址:</label>
      <input v-model="formdata.address" placeholder="例：xx市xx区xx大厦xx室" />
    </div>
    <!-- <select v-model="formdata.invoiceType">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>-->
    <div class="line">
      <picker @change="bindInvoiceChange" :value="invoiceIdx" :range="invoiceType">
        <view class="picker">发票类型：{{invoiceType[invoiceIdx]}}</view>
      </picker>
    </div>
    <div class="line">
      <picker @change="demandOfMonthChange" :value="demandIdx" :range="demandOfMonth">
        <view class="picker">月需求量：{{demandOfMonth[demandIdx]}}</view>
      </picker>
    </div>
    <div class="line">
      <picker @change="singleNumberChange" :value="singleIdx" :range="singleNumber">
        <view class="picker">单次送水：{{singleNumber[singleIdx]}}</view>
      </picker>
    </div>
    <div class="line">
      <picker @change="brandChange" :value="brandIdx" :range="brands">
        <view class="picker">选择品牌：{{brands[brandIdx]}}</view>
      </picker>
    </div>
    <i-button @click="commit" type="primary">确认申请</i-button>
  </div>
</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      position: "left",
      checked: false,
      disabled: false,
      formdata: {
        companyName: "公司名",
        userName: "收货人",
        phone: "",
        address: "",
        invoiceType: "",
        demandOfMonth: "",
        singleNumber: "",
        brand: ""
      },
      invoiceType: ["请选择", "不开发票", "普通发票", "专用发票"],
      invoiceIdx: 0,
      demandOfMonth: [
        "请选择",
        "20-50(桶)",
        "50-100(桶)",
        "100-300(桶)",
        "300-500(桶)",
        "500桶以上"
      ],
      demandIdx: 0,
      singleNumber: [
        "请选择",
        "5-10(桶)",
        "10-20(桶)",
        "20-50(桶)",
        "50桶以上"
      ],
      singleIdx: 0,

      brands: [
        "维维碱LOVE天然泉水",
        "乐百氏",
        "怡宝",
        "景田",
        "雀巢",
        "娃哈哈",
        "燕京",
        "农夫山泉",
        "5100西藏冰川矿泉水",
        "善品香山",
        "时代峡谷"
      ], //品牌
      brandIdx: 0
    };
  },
  components: {
    card
  },

  methods: {
    handleFruitChange({ detail = {} }) {
      console.info(this.current);
      console.info(detail);
      console.info(detail.mp.detail.value);
      // this.setData({
      //     current: detail.value
      // });
    },
    changeName({ detail = {} }) {
      console.info(e);
      //event.detail.detail.value

      //       this.setData({

      // myData: event.detail.detail.value

      // })
      //console.info(detail.value);
      //console.info(detail.mp.detail.key)
      // this.setData({
      //     formdata.companyName: detail.value
      // });
    },
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
    bindInvoiceChange(e) {
      //console.info(e.mp.detail.value);
      this.invoiceIdx = e.mp.detail.value;
      this.formdata.invoiceType = this.invoiceType[this.invoiceIdx];
      // this.setData({
      //     invoiceIdx: e.mp.detail.value
      // });
    },
    demandOfMonthChange(e) {
      this.demandIdx = e.mp.detail.value;
      this.formdata.demandOfMonthType = this.demandOfMonth[this.demandIdx];
    },
    singleNumberChange(e) {
      this.singleIdx = e.mp.detail.value;
      this.formdata.singleNumber = this.singleNumber[this.singleIdx];
    },
    brandChange(e) {
      this.brandIdx = e.mp.detail.value;
      this.formdata.brand = this.brands[this.brandIdx];
    },
    commit() {
      //alert(1);
      console.info(this.formdata);
    }
  },
  created() {
    console.info(22);
    // let app = getApp()
  },
  bindInvoiceChange() {
    alert(2);
    // this.setData({
    //     current: detail.value
    // });
  }
};
</script>

<style scoped>
.line {
  background-color: #fff;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  font-size: 16px;
  padding: 10px 15px;
  color: #495060;
  align-items: center;
}
.line label {
  width: 75px;
  color: #495060;
}
.line input {
  flex: 1;
}
.brands {
  display: flex;
  border: 1px solid #d2d2d2;
}
.section {
  background: #fff;
  padding: 10px 15px;
  color: #495060;
  font-size: 16px;
  line-height: 1.4;
  border-bottom: 1px solid #d2d2d2;
}
.i-button {
  position: fixed;
  left: 0;
  bottom: 15px;
}
</style>
