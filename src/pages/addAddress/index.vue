<template>
<div>
  <i-panel>
    <i-input
      :value="formdata.userName"
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
      placeholder="点击选择"
    />
    <i-input
      :value="formdata.detailAddress"
      maxlength="50"
      title="详细地址"
      autofocus
      placeholder="例：1号楼1单元111"
    />

  </i-panel>
</div>

  <!-- <div>
    <!-- <i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
		<view slot="content">内容不错</view>
		<view slot="footer">尾部内容</view>
	</i-card>
	<i-tab-bar :fixed="true" :current="mine" @change="handleChange()">
		<i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="主页"></i-tab-bar-item>
		<i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div> -->

  <!-- 		<div>11</div> -->
</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      formdata: {
        companyName: "",
        userName: "",
        phone: "",
        address: "",
        detailAddress:"",
      },
    };
  },

  components: {
    card
  },

  methods: {
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
    handleChange({ detail }) {
      this.current = detail.key;
      //         this.setData({
      //             current: detail.key
      //         });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
</style>
