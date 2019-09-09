<template>
<div class="container">
  <ul>
    <li v-for="(item,index) in list" :key="item.id" bind:click="bindViewTap">
      <div class="left">
      <p class="left-top"><span class="name">{{item.name}}</span><span calss="phone">{{item.phone}}</span></p>
      <p>{{item.address}}</p>
      </div>
      <div class="edit">
        | 编辑
      </div>
    </li>
  </ul>
  <div class="btn-new" @click="bindViewTap">+新增地址</div>
</div>

</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      list:[
        {
          id:"1",
          name:"李女士",
          phone:"3123213",
          address:"河北省廊坊市燕郊经济开发区维多利亚B座"
        },
        {
          id:"2",
          name:"李女士",
          phone:"3123213",
          address:"河北省廊坊市燕郊经济开发区维多利亚B座"
        }
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../addAddress/main";
      console.info(1);
      if (mpvuePlatform === "wx") {
        console.info(2);
        wx.navigateTo({ url });
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
    },
    //选择地址
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.container{
  height:100vh;
  display: flex;
  flex-direction: column;

}
ul{
  flex:1;
}
ul>li{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 20px;
  border-bottom:1px solid #d2d2d2;
}
.left{
  flex:1;
}
.left-top{
  color:#999;
  font-size:16px;
}
.name{
  margin-right:20px;
}
.edit{
  width:50px;
  color:#999;
}
.btn-new{
  height:40px;
  line-height:40px;
  color:#1982c4;
  background-color: #f1f1f1;
  text-align: center;
}
</style>
