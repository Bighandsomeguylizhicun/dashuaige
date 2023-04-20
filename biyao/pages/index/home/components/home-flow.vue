<template>
	<view class="flow_box">


		<!-- <navigator url="../../../goodsDetails/goodsDetails"> -->
		<view class="sp-tboxs" v-for="(item,index) in sparr" :key="index">
			<view class="sp-box" v-for="(v,i) in item.data" :key="i" @click="toxq(v.routerParams.suId)">
				<view class="sp-img">
					<img :src="v.image" alt="">
				</view>
				<view class="sp-sprice">
					￥{{v.priceStr}}元
				</view>
				<view class="sp-title">
					{{v.mainTitle}}
				</view>
				<view class="sp-hp">
					{{v.goodCommentAll}}条好评
				</view>
			</view>
		</view>
		<!-- </navigator> -->


	</view>
</template>
<script setup>
	import {
		ref,

	} from 'vue';
	import {
		getTypeOneList,
	} from '../../../../api/loginApi.js'

	let sparr = ref([])
	const data = async () => {
		let res = await getTypeOneList()
		sparr.value = res.data.floorData.blockList[1].block
		console.log(sparr.value);
	}
	data()

	let toxq = (id) => {
		uni.navigateTo({
			url: '/pages/goodsDetails/goodsDetails?id=' + id,
			fail: (res) => {
				console.log(res);
			}
		});
	}
</script>

<script setup>

</script>
<style lang="scss" scoped>
	.flow_box {
		padding: 40rpx;
	}

	.sp-tboxs {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		background-color: rgb(244, 244, 244);

		.sp-box {
			margin-bottom: 5rpx;
			width: 49.5%;
			background-color: white;

			.sp-img img {
				width: 100%;
				margin-bottom: 10rpx;
			}

			.sp-sprice {
				color: goldenrod;
				margin-bottom: 10rpx;
			}

			.sp-title {
				font-size: 14px;
				margin-bottom: 10rpx;
			}

			.sp-hp {
				font-size: 12px;
				margin-bottom: 10rpx;
				color: #adadad;
			}
		}
	}
</style>