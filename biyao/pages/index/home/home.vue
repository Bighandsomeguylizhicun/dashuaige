<template>
	<view>
		<home-search></home-search>
		<home-tab></home-tab>
		<home-swiper></home-swiper>
		<home-grid></home-grid>
		<home-flow></home-flow>
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




	// let operationarr = ref([]) //品质男装....
	const data = async () => {
		let res = await getTypeOneList()
		// console.log(res.data.homeData.operationNavigation);
		// operationarr.value = res.data.homeData.operationNavigation
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