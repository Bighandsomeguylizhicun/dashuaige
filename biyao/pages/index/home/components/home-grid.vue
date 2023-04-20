<template>
	<view class="opers-box">
		<view class="oper-box" v-for="(item, index) in operationarr" :key="index" @click="tofl(item.ext.categoryID)">
			<view class="icon-box">
				<img :src="item.icon" alt="">
			</view>
			<view class="text-box">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		getTypeOneList
	} from '../../../../api/loginApi.js'

	let operationarr = ref([]) //品质男装....
	const data = async () => {
		let res = await getTypeOneList()
		operationarr.value = res.data.homeData.operationNavigation
		console.log(operationarr.value, '66666666666666666666');
	}
	data()

	const tofl = (id) => {
		console.log(id);
		uni.navigateTo({
			url: '/pages/collect/collect?id=' + id,
			fail: (res) => {
				console.log(res);
			}
		});
	}




	const tapGrid = () => {
		uni.showToast({
			icon: 'none',
			title: '正在开发中...'
		})
	}
</script>

<style lang="scss" scoped>
	.opers-box {
		padding: 40rpx;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	.oper-box {
		text-align: center;
		color: #666;
		font-size: 12px
	}

	.icon-box img {
		width: 60rpx;
		height: 60rpx
	}
</style>