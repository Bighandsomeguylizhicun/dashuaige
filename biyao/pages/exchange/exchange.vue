<template>
	<view style="padding-bottom: 100rpx;  ">
		<view class="exchange_nav_view">
			<view class="bgc_fff exchange_nav_box pos_f">
				<view class="search_box pos_r">
					<image class="search_icon pos_a" src="http://www.liwanying.top/applate-icon/icon_search.png"
						mode=""></image>
					<input class="search_input bgc_f8f8f8 boxs_bb" placeholder="请输入你想要的商品" @input="oninput"
						v-model="inpv" :value="inpv" />
				</view>
			</view>
		</view>
		<!-- <view class="dj">
			大家都在搜
		</view>
		<div class="rs-box">
			<div class="rs-text">

			</div>
		</div> -->

	</view>
	<div class="rs">
		<div class="rs-boxx" v-for="(item,index) in rsarr" :key="index"
			style=" margin-bottom: 20rpx; padding: 10rpx 0; background-color: aliceblue;">
			<text> {{item.sw}} </text>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	import {
		gethotwords
	} from '../../api/loginApi.js'


	let inpv = ref('')
	const oninput = (e) => {
		inpv.value = e.detail.value
		console.log(inpv.value, inpv.value !== '');
		if (inpv.value !== '') {
			data(inpv.value)
		} else {
			rsarr.value = []
		}
	}
	let rsarr = ref([])
	const data = async (v) => {
		let res = await gethotwords(v)
		res.data.data == null ? rsarr.value = [] : rsarr.value = res.data.data.suggestionwords
	}


	onLoad(() => {})
	const tapCard = () => {
		uni.navigateTo({
			url: '/pages/order/orderDetails'
		})
	}
</script>

<style lang="scss">
	.search_box {
		padding: 24rpx 32rpx;
	}

	.search_icon {
		top: 42rpx;
		left: 64rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.search_input {
		width: 100%;
		display: block;
		height: 76rpx;
		border-radius: 76rpx;
		padding-left: 88rpx;
	}

	page {
		background-color: #f8f8f8;
	}

	.exchange_nav_view {
		width: 100%;
		height: 184rpx;
	}

	.exchange_nav_box {
		width: 100%;
		height: 184rpx;
		/* #ifdef H5 */
		top: var(--window-top);
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* #endif */
		z-index: 1;
		left: 0;
		right: 0;
	}

	.dj {
		font-size: 14px;
		padding: 20rpx;
		background-color: aquamarine;
	}

	.rs-box {
		font-size: 14px;
		padding: 20rpx;
		background-color: brown;
	}

	.rs {
		width: 80%;
		margin-left: 5%;
		height: 100%;
		background-color: white;
		position: fixed;
		top: 200rpx;
		padding: 40rpx;
		z-index: 11111111;
	}
</style>