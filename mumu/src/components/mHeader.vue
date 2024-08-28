<template>
	<header>
		<div class="h-main">
			<div class="h-left">
				<div class="h-logo">
					<img class="pic1" src="../assets/img/logo4.png" alt="" />
					<img class="pic2"
						src="https://fe-resource.cdn.bcebos.com/groot/mip-sjh-merchant-info/icon-safeguard.svg"
						alt="" />
				</div>
			</div>
			<div class="h-right">
				<div class="h-btn-group">
					<div class="h-btn-switch">
						<div class="switch-text" @click="go('home')"><span>首页</span></div>
						<div class="switch-text" @click="go('serve')">
							<span>服务项目</span>
						</div>
						<div class="switch-text" @click="go('call')">
							<span>联系我们</span>
						</div>
						<div class="switch-text" @click="go('intro')">
							<span>公司介绍</span>
						</div>
					</div>
				</div>
				<div class="h-btn-right">
					<!-- <div class="h-call-me"> -->
						<!-- <n-icon size="20">
							<CallOutline />
						</n-icon> -->
						<!-- 拨打电话 -->
						<!-- </div> -->
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import {
		CallOutline
	} from '@vicons/ionicons5'
	export default {
		data() {
			return {};
		},

		components: {
			CallOutline
		},

		methods: {
			go(page) {
				this.$router.push("/" + page);
			},
		},
	};
</script>

<style lang="less">
	@import url('@/less/index.less');
	@height: 8rem;

	header {
		height: @height;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 1000;

		.h-main {
			width: 142rem;
			margin: 0 auto;
			height: 100%;
			display: flex;
			justify-content: space-between;
		}

		.h-logo {
			width: 190px;
			height: @height;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.pic1 {
				width: 10rem;
				height: 5rem;
				border: 1rpx so;
			}

			.pic2 {
				width: 6.7rem;
				height: 2.4rem;
			}
		}

		.h-right {
			width: max-content;
			height: @height;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.h-btn-switch {
			display: flex;
		}

		.switch-text {
			height: @height;
			line-height: @height;
			padding-left: 2rem;
			padding-right: 2rem;
			width: max-content;
			cursor: pointer;

			span {
				display: inline-block;
				height: @height;

				&:hover {
					color: @color;
					border-bottom: 0.1rem solid @color;
				}
			}
		}

		.h-call-me {
			width: 14rem;
			height: 4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: @color;
			color: #fff;
			cursor: pointer;
			opacity: 0.9;

			&:hover {
				opacity: 1;
			}
		}
	}
</style>