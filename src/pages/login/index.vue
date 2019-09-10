<template>
  <div class="login">
    <div class="logo">
      <img class="logo" src="http://shuidifu.cn/templates/shuidifu/images/logo01.png" alt />
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
      console.info(111);
      console.info(this.$store.state.isLogin);
      let _this = this;
      wx.login({
        success(res) {
          if (res.code) {
            console.info(res.code);
            //let { result } = get("/user/wx_login", { code: res.code });
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
