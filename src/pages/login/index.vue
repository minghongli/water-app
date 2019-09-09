<template>
  <div class="login">
    <div class="logo">
      <img class="logo" src="http://shuidifu.cn/templates/shuidifu/images/logo01.png" alt>
    </div>
    <button class="login-btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">微信登录</button>
  </div>
</template>
<script>
import card from "@/components/card";
import { post, get } from "../../utils/request";

export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png",
        current: "homepage"
      }
    };
  },

  components: {
    card
  },

  methods: {
    doLogin() {
      wx.showLoading({
        title: "登录中...", //提示的内容,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res1 => {}
      });
      wx.login({
        success(res) {
          if (res.code) {
            console.info(res.code);
            let result=get("/user/login", {code: res.code});
            console.info(result);
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
      
    }
  },
  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.login {
  padding-top: 100px;
  text-align: center;
}
.logo {
  width: 302px;
  height: 73px;
  margin-bottom: 40px;
}
</style>
