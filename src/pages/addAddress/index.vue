<template>
<div>
  <i-panel>
    <i-input
      :value="formdata.name"
      maxlength="50"
      title="联系人"
      autofocus
      placeholder="请输入收货人姓名"
    />
    <i-input
      :value="formdata.phone"
      maxlength="50"
      type="number"
      title="联系电话"
      placeholder="请输入收货人手机号"
    />
    <i-input
      :value="formdata.address"
      maxlength="50"
      title="收货地址"
      autofocus
      placeholder="请输入收货地址"
    />
    <i-input
      :value="formdata.address_detail"
      maxlength="50"
      title="详细地址"
      autofocus
      placeholder="例：1号楼1单元111"
    />

  </i-panel>
  <div class="bottom">
    <i-button type="primary" bind:click="save">保存</i-button>
  </div>
</div>
</template>
<script>
import card from "@/components/card";
import { get, post } from "../../utils/request";

export default {
  data() {
    return {
      formdata: 
      {
        name: "",
        phone: "",
        address: "",
        address_detail:"",
      },
    };
  },

  components: {
    card
  },

  methods: {
    async save(){
      const res = await post("/user/addAddress", this.formdata);
      if(res.status==200){
        wx.navigateTo("../address/main");
      }
    },
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
</style>
