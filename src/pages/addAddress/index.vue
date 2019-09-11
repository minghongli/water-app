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
    save(){
            //let { result } = post("/user/addAddress", this.formdata);
            let result = {
              openid: "o3zUZ41Q8u4K7iseTfJ_S73kSq-0",
              session_key: "mJp0HZ3olfr2DrEFxA+/3A==",
              token:
                "c57a39c3ec4b457a5753bbb07f9e1b7ac7f139c3f05355673cc01695ba2343bb774c79785463991730ce5a21f27c013539facce63c80dd68"
            };
            //_this.$store.dispatch("login", result); //dispatch Action
            _this.$store.commit('login',result);  //commit mutation

            let url = "../my/main";
            wx.navigateTo({ url });
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
