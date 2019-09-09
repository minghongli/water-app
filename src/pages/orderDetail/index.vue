<template>
  <div>
    <section>
      收获信息
    </section>
    <section>商品信息</section>
    <section>
      订单信息
      <p>订单编号</p>
      <p>下单时间</p>
      <p>支付方式</p>
    </section>
  </div>
</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      current: "tab1",
      // list:[],
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
    }
  },

  created() {
    console.info(22);
    // let app = getApp()
  }
};
</script>

<style scoped>
</style>
