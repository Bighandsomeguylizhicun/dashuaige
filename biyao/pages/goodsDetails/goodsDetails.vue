<template>
	<view>
		<goods-swiper></goods-swiper>
		<view class="goods_title boxs_bb m_b_24 bgc_fff">
			<view class="flex m_b_24 flex-aife">
				<view class="price_color">
					<text class="font_36">¥</text><text class="font_64 m_r_24">{{arr.togGroupPriceStr}}</text>
				</view>

			</view>
			<view class="m_b_8 color_333 font_32 font_bold">{{arr.longProductName}}</view>
			<view class="m_b_16 color_999 font_28">销量99999+</view>

		</view>
		<view class="bgc_fff font_28 color_333 m_b_24">
			<view @tap="showSku" class="goods_item_box boxs_bb flex-aic flexr-jsb">
				<text class="goods_item_cla color_999">选择</text><text class="flex-fitem">xxxxxx</text>
				<image class="goods_item_icon" src="http://www.liwanying.top/applate-icon/gengduo.png" mode=""></image>
			</view>
			<view class="goods_item_box boxs_bb">
				<text class="goods_item_cla color_999">类型</text><text>xxxxx</text>
			</view>
			<view class="goods_item_box boxs_bb">
				<text class="goods_item_cla color_999">发货</text><text>xxxxx</text>
			</view>
			<view class="goods_item_box boxs_bb">
				<text class="goods_item_cla color_999">运费</text><text>xxxxx<text class="color_eee">｜</text>xxxxxxx</text>
			</view>
		</view>

		<view class="bb_title font_28 color_999 flex-aic flexr-jsc">
			<view class="bgc_ddd"></view><text>宝贝详情</text>
		</view>
		<rich-text style="width: 100%;" :nodes="imgarr" />
		<goods-sku @toOrder="toOrder" ref="goodsSkuRef"></goods-sku>
		<goods-nav @add="goodsAdd" @pay="goodsTapPay"></goods-nav>
	</view>
</template>

<script setup>
	import goodsSwiper from './components/goods-swiper.vue'
	import goodsNav from './components/goods-nav.vue'
	import goodsSku from './components/goods-sku.vue'
	import {
		getshopxq
	} from '../../api/loginApi.js'
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
		// console.log(id.value, '1111111111111111111');
	})


	// 
	let arr = ref([])
	let imgarr = ref()
	const data = async () => {
		let res = await getshopxq(id.value)
		arr.value = res.data
		imgarr.value = (res.data.productButtomDetail).replace(/<img/g,
			'<img style="max-width:100%;height:auto;display:block;margin:40rpx 0;"')

	}

	watchEffect(() => {
		data()
	})




	let goodsSkuRef = ref()

	const showSku = () => {
		goodsSkuRef.value.showSku()
	}
	const goodsAdd = () => {
		uni.showToast({
			title: '添加成功，在购物车等亲!',
			mask: true,
			icon: 'none'
		});
	}
	const toOrder = () => {
		uni.navigateTo({
			url: '/pages/orderInfo/orderInfo'
		})
	}
	const goodsTapPay = () => {
		goodsSkuRef.value.showSku()
	}
</script>



<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.goods_title {
		padding: 0 32rpx;
	}

	.price_color {
		color: #FAAD14;
		background: linear-gradient(360deg, #FF3636 0%, #FF6600 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.goods_item_box {
		padding: 20rpx 32rpx;
	}

	.goods_item_cla {
		margin-right: 16rpx;
	}

	.goods_item_icon {
		width: 12rpx;
		height: 24rpx;
	}

	.bb_title {
		padding: 24rpx 0;

		text {
			margin: 0 16rpx;
		}

		view {
			width: 100rpx;
			height: 2rpx;
		}
	}
</style>