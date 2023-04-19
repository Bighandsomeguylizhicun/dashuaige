<template>
	<view>
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic" v-for="(item, index) in banners" :key="index">
				<image class="swiper-item-img" :src="item.image"> </image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		getTypeOneList
	} from '../../../../api/loginApi.js'

	let banners = ref([])
	const data = async () => {
		let res = await getTypeOneList()
		banners.value = res.data.homeData.banners
	}
	// 
	data()
</script>

<style lang="scss" scoped>
	.swiper {
		height: 304rpx;

		.swiper-item {
			width: 100%;
			height: 100%;
		}

		.swiper-item-img {
			width: 686rpx;
			height: 100%;
		}
	}
</style>