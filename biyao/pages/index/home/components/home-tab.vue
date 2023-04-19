<template>
	<view class="tab-boxs">
		<scroll-view scroll-x data-v-3b297d3e="" class="category-ul">
			<li data-v-3b297d3e="" options="[object Object]" class="category-li active" v-for="(item,index) in tabarr"
				:key="index">
				{{item.categoryName}}
			</li>
		</scroll-view>
		<view class="tab-zk" @click="zkxs()">
			{{zk}}
		</view>
	</view>
	<view class="zk-box" v-show="flag">
		<view class="zk-text" v-for="(item,index) in tabarr" :key="index">
			{{item.categoryName}}
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

	let zk = ref('展开')


	let tabarr = ref([])
	const data = async () => {
		let res = await getTypeOneList()
		console.log(res.data.homeData.oneLevelCategoryList);
		tabarr.value = res.data.homeData.oneLevelCategoryList
	}
	data()

	let flag = ref(false)

	let zkxs = () => {
		flag.value = !flag.value
		zk.value = zk.value == "展开" ? zk.value = "收起" : zk.value = "展开"
	}
</script>

<style lang="scss" scoped>
	.tab-boxs {
		padding: 10px 20px;
		height: 72rpx;
		display: flex;
		justify-content: space-between;
		position: relative;


		.category-ul {
			display: block;
			white-space: nowrap;
			padding: 0 1rpx;
			list-style: none;

			.category-li {
				margin-right: 20rpx;
				display: inline-block;
				font-size: 28rpx;
				height: 72rpx;
				line-height: 72rpx;
				padding: 0rpx 15rpx;
			}

		}

		.tab-zk {
			width: 15%;
			font-weight: 600;
			position: absolute;
			background-color: white;
			height: 72rpx;
			line-height: 72rpx;
			right: 32rpx;
			text-align: center;
		}





















		// .tab-box {
		// 	background-color: rebeccapurple;
		// 	width: 85%;
		// 	height: 70rpx;
		// 	// overflow-x: auto;
		// 	display: flex;




		// 	.tab-text {
		// 		display:inline-block;
		// 		width: 15%;
		// 		line-height: 70rpx;
		// 		height: 70rpx;
		// 		padding: 0 20rpx;
		// 		text-align: center;
		// 		background-color: aliceblue;
		// 		margin-right: 10rpx;
		// 		font-size: 12px
		// 	}
		// }

		// .tab-zk {
		// 	background-color: chartreuse;
		// 	text-align: right;
		// 	width: 15%;
		// }
	}

	.zk-box {
		position: absolute;
		z-index: 111;
		padding: 40rpx;
		background-color: white;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.zk-text {
		width: 18%;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		margin-bottom: 30rpx;
		border: 1px solid #adadad;
		font-size: 12px
	}
</style>