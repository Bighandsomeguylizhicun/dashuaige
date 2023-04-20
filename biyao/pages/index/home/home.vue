<!--
 * @Description: Description
 * @Author: lizhicun
 * @Date: 2023-04-18 23:20:25
 * @LastEditors: lizhicun
 * @LastEditTime: 2023-04-20 11:26:57
-->
<template>
	<view>
		<home-search></home-search>
		<home-tab></home-tab>
		<home-swiper></home-swiper>
		<home-grid></home-grid>
		<home-flow></home-flow>
		<!-- -------------- -->
	</view>
</template>

<script setup>
	import homeSearch from './components/home-search.vue'
	import homeSwiper from './components/home-swiper.vue'
	import homeGrid from './components/home-grid.vue'
	import homeFlow from './components/home-flow.vue'
	import homeTab from './components/home-tab.vue'
	import {
		ref
	} from 'vue'
	// let tabIndex = ref(0)
	// const getTab = (id) => {
	// 	// console.log(id)
	// }


	import {
		getTypeOneList
	} from '../../../api/loginApi.js'


	const data = async () => {
		let res = await getTypeOneList()
	}
	data()
</script>

<style lang="scss" scoped>
	.bar_box {
		width: 100%;
		height: 140rpx;
	}

	.tabs_box {
		padding: 24rpx 0;
	}
</style>