<template>
	<div>

		<section class="top">
		<img class="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
		<p>minghong</p>
		<button @click="goToLogin()">登录</button>
		</section>
		<!-- <section class="top">
			<div>
				<span>切换用户</span>
			</div>
			<div>
				<i-avatar i-class="photo" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="small"></i-avatar>
				<div class="c">
					<p>13120117326</p>
					<p>
						<span class="c-y">积分</span><span>0</span>
						<span class="c-y">余额</span><span>0</span>
					</p>
				</div>
			</div>
			<div class="r">
				<i-button bind:click="goToRecharge()" type="primary">充值</i-button>
			</div>
		</section> -->
		<section>
			<i-cell-group i-class="order-bar">
			<i-cell title="我的订单" value="查看订单" is-link url="/pages/order/main" link-type="switchTab"></i-cell>
			<i-cell title="我的地址"  is-link url="/pages/address/main" link-type="navigateTo"></i-cell>
			<i-cell title="意见与反馈" is-link url="/pages/feedback/main" link-type="navigateTo"></i-cell>
			<i-cell title="客服电话" value="4000000" ></i-cell>
			</i-cell-group>
		</section>
		<!-- <section class="order">
			<i-cell-group i-class="order-bar">
				<i-cell title="我的订单" value="查看订单" is-link url="/pages/order/main" link-type="switchTab"></i-cell>
								<i-cell title="我的地址" value="" is-link url="/pages/order/main" link-type="switchTab"></i-cell>
												<i-cell title="意见与反馈" value="" is-link url="/pages/order/main" link-type="switchTab"></i-cell>
												<i-cell title="客服电话" value="" is-link url="/pages/order/main" link-type="switchTab"></i-cell>
			</i-cell-group>
			<div>
				<i-row>
					<i-col span="6" i-class="col-class">
						<i-icon type="activity" size="28" color="#80848f" />
						<p>待分配</p>
					</i-col>
					<i-col span="6" i-class="col-class">
						<i-icon type="activity" size="28" color="#80848f" />
						<p>配送中</p>
					</i-col>
					<i-col span="6" i-class="col-class">
						<i-icon type="activity" size="28" color="#80848f" />
						<p>待评价</p>
					</i-col>
					<i-col span="6" i-class="col-class">
						<i-icon type="activity" size="28" color="#80848f" />
						<p>已完成</p>
					</i-col>
				</i-row>
			</div>
		</section>
		<section>
			<i-row>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>水票</p>
				</i-col>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>地址</p>
				</i-col>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>优惠券</p>
				</i-col>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>发票</p>
				</i-col>
			</i-row>
			<i-row>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>刮刮卡</p>
				</i-col>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>退桶</p>
				</i-col>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>押金</p>
				</i-col>
				<i-col span="6" i-class="col-class">
					<i-icon type="activity" size="28" color="#80848f" />
					<p>反馈</p>
				</i-col>
			</i-row>
		</section>
		<section class="feeback">
			<i-button type="primary">投诉信箱</i-button>
		</section> -->
	</div>
</template>
<script>
	import card from '@/components/card'

	export default {
		data() {
			return {
				motto: 'Hello miniprograme',
				userInfo: {
					nickName: 'mpvue',
					avatarUrl: 'http://mpvue.com/assets/logo.png',
					current: 'homepage'
				}
			}
		},

		components: {
			card
		},

		methods: {
			bindViewTap() {
				const url = '../logs/main'
				if (mpvuePlatform === 'wx') {
					mpvue.switchTab({
						url
					})
				} else {
					mpvue.navigateTo({
						url
					})
				}
			},
			clickHandle(ev) {
				console.log('clickHandle:', ev)
				// throw {message: 'custom test'}
			},
			handleChange({
				detail
			}) {
				this.current = detail.key;
				//         this.setData({
				//             current: detail.key
				//         });
			},
			goToRecharge() {},
			goToLogin(){
			    const url = "../login/main";
				wx.navigateTo({ url });
			}
		},

		created() {
			// let app = getApp()
		}
	}
</script>

<style scoped>
.avatar{
	width:60px;
	height:60px;
	border-radius:50%;
}
	.top {
		height: 200px;
		background-color: #80848F;
		text-align: center;
	}
	.order-bar{
		border-bottom:1p solid #ccc;
	}

	.col-class {
		text-align: center;
	}

	.photo{
		width:50px;
		height:50px;
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
