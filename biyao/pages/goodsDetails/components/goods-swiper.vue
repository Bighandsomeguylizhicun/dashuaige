<template>
	<view style="padding: 24rpx 0 20rpx;" class="bgc_fff">
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in arr" :key="index" class="swiper-item flexr-jsc flex-aic">
				<image mode="aspectFill" class="swiper-item-img" :src='item.largeImg'> </image>
			</swiper-item>

		</swiper>
	</view>
</template>

<script setup>
	import {
		getshopxq
	} from '../../../api/loginApi.js'
	import {
		ref,
		watchEffect
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app"


	let id = ref()
	onLoad((option) => {
		id.value = option.id
		console.log(id.value, '1111111111111111111');
	})

	let arr = ref([])
	const data = async () => {
		let res = await getshopxq(id.value)
		console.log(res.data.imgList);
		arr.value = res.data.imgList

	}
	watchEffect(() => {
		data()
	})
</script>

<style lang="scss" scoped>
	.swiper {
		height: 560rpx;

		.swiper-item {
			width: 100%;
			height: 100%;
		}

		.swiper-item-img {
			width: 686rpx;
			border-radius: 10rpx;
			height: 100%;
		}
	}
</style>