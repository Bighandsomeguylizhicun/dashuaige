<template>
	<view>

		<!-- 搜索框 -->
		<view class="goods_search_box bgc_fff flex-aic flexr-jsc">
			<view class="search_box pos_r boxs_bb">
				<image class="search_icon pos_a" src="http://www.liwanying.top/applate-icon/icon_search.png" mode="">
				</image>
				<input class="search_input bgc_f8f8f8 boxs_bb" placeholder="请输入商品" />
			</view>
		</view>


		<!-- 内容 -->
		<view class="conter">
			<view class="box">

				<view class="kungbox">
					<view class="Kleft">
						<view class="hd">
							<block v-for="(item,index) in arr" :key="index">
								<view class="hd_flex {{nav_type == index ? 'hd_flex_on' : ''}}" catchtap="changeType"
									data-index="{{index}}">{{item.categoryName}}</view>
							</block>
						</view>
					</view>

					<view class="Kright">
						<view class="fltitlebox">
							<view class="cateList1"></view>
							<view class="cateList-name">男装</view>
							<view class="cateList2"></view>
						</view>
						fffffffffffffffffffffff
					</view>
				</view>

			</view>
		</view>

<!-- 123 -->

		<lyz-tab-bar pagePath="pages/tabbar/good/good"></lyz-tab-bar>
	</view>
</template>

<script setup>
	import {
		getfenlei
	} from "../../../api/loginApi.js"
	import {
		ref
	} from "vue"
	let arr = ref([])
	const data = async () => {
		let res = await getfenlei()
		console.log(res.data.listData);
		arr.value = res.data.listData
	}
	data()
</script>

<style lang="scss" scoped>
	.search_box {
		width: 686rpx;
		margin-top: 15rpx;
	}

	.search_icon {
		top: 18rpx;
		left: 32rpx;
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

	.conter {
		width: 686rpx;
		height: 100vh;
		margin-left: 30rpx;
		border: 1px solid red;
		box-sizing: border-box;
		// overflow-y: hidden;
		// nnnnnnnnnnnnnnnnnnnnnnnnnnnnn
		flex: auto;
		overflow: auto;
	}

	.kungbox {
		width: 100%;
		padding: 0 10Px;
		display: flex;
		justify-content: space-between;
	}



	.navleft {
		width: 100%;
		text-align: center;
		color: #333;
		background: #FFFFFF;
	}

	.Kleft {
		width: 7.375rem;
		height: 100vh;
		// overflow-y: hidden;
		// nnnnnnnnnnnnnnnnnnnnnnnnn
		flex: auto;
		overflow: auto;
	}

	.hd {
		width: 7.375rem;
		height: 50rpx;
		line-height: 50rpx;
		background: #f7f8fa;
	}

	.hd_flex {
		flex: 1;
		font-size: 28rpx;
		padding: 10px 0;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		padding-left: 20rpx;
		background: #f7f8fa;
	}

	.hd_flex_on {
		font-size: 30rpx;
		color: black;
		position: relative;
		background-color: #ffffff;

	}

	.hd_flex_on::after {
		position: absolute;
		top: 50%;
		left: 0;
		width: 4px;
		height: 16px;
		background-color: #ee0a24;
		transform: translateY(-50%);
		content: "";
	}



	.Kright {
		width: 600rpx;
		box-sizing: border-box;
		overflow-y: auto;
		border: 1px solid red;
	}

	.desttop {
		margin-bottom: 0.53333rem;
		display: flex;
		flex-wrap: wrap;
	}

	.destitem {
		margin-bottom: 0.21333rem;
		height: 100px;
		position: relative;
		box-sizing: border-box;
		width: 50%;
	}

	.info {
		position: relative;
		height: 100px;
		border-radius: 2Px;
		overflow: hidden;
		margin-right: 4Px;
	}

	.info image {
		width: 100%;
		height: 100%;
		border-radius: 2Px;
	}

	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.1);
	}

	.info-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 86%;
		height: 77%;
		border: 0.02667rem solid rgba(255, 255, 255, 0.7);
		border-radius: 2Px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		color: #fff;
	}

	.info-text text {
		width: 100%;
		font-size: 1rem;
	}

	.destbtom {
		width: 100%;
		text-align: center;
		color: #333;
	}

	.destbtom image {
		width: 18px;
		height: 18px;
		margin-top: 8rpx;
		vertical-align: top;
	}

	.bmtitle {
		font-size: 1.42667rem;
		font-weight: 500;
		text-align: left;
		margin-bottom: 18Px;
	}

	.bmitem {
		text-align: left;
		position: relative;
		background: #f6f6f6;
		min-height: 197px;
		margin: 20rpx 0;
	}

	.bmitem image {
		width: 100%;
	}

	.p1 {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333;
		letter-spacing: 0;
		font-weight: 500;
	}

	.p2 {
		margin-bottom: 6Px;
		font-family: PingFangSC-Light;
		font-size: 12px;
		color: #898989;
		letter-spacing: .15px;
	}

	.p3 {
		font-family: PingFangSC-Regular;
		font-weight: normal;
		font-size: 0.82rem;
		letter-spacing: 0.3Px;
		color: #c04374;
		white-space: nowrap;
	}

	.type {
		position: absolute;
		top: 0;
		left: 9px;
		padding: 3px 6px;
		color: #fff;
		background: rgba(0, 0, 0, .5);
		border-radius: 0 0 3px 3px;
		font-size: 12px;
	}

	.fltitlebox {
		font-family: PingFangSC-Semibold;
		font-size: 1rem;
		height: 40px;
		display: flex;
		justify-content: center;
	}

	.cateList1 {
		height: 0.12rem;
		width: 1.48rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAACCAYAAAAesF8hAAAAAXNSR0IArs4c6QAAAJhJREFUGBldT0sKRCEM8/P6wIX3v4N3mGOpC1EnKVORKUjTNInqSymx1iprLem9v957SSnJGON1zgnPnFOxoIj33g90bwjhaKhDhs7gBZqzM2y8+eE5Gvr/deRunm+j5/J/HhCncs4Oj3CtNQfxjjHqDn3j8oPxCc8B2sNzNg0zUBsZ7Jp1Y1K6gObXtd1+3m+7G4NjrvnXF/XOUa7X8vi3AAAAAElFTkSuQmCC) no-repeat center center;
		background-size: auto;
		background-size: 100% 100%;
		margin-top: 20px;
	}

	.cateList2 {
		height: 0.12rem;
		width: 1.48rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAACCAYAAAAesF8hAAAAAXNSR0IArs4c6QAAAKBJREFUGBl1TsENxDAIS9JGatSxbsrucbNkk35KEmpzJernkBDG2MjxOI5vCOGDvtDtmaKqAiwxRvLcbb454qcv6qBprh9j/PWnlOYv+qG9yGG2ZVnsJijefG+teQ4ppVAv+75LgsgrOkCQgCDKBmcT2O7kUK7l3erFBQSZfhP/fk0/7oYxp985PmN2BFd2711zzrquq3m2bdPzPA3XWvUGPwyDhD95AlIAAAAASUVORK5CYII=) no-repeat center center;
		background-size: auto;
		background-size: 100% 100%;
		margin-top: 20px;
	}
	.cateList-name::after {
	  content: '';
	  position: absolute;
	  height: 0.02rem;
	  top: 50%;
	  margin-top: -0.01rem;
	  margin-left: 0.44rem;
	  width: 0.48rem;
	  background-image: -webkit-linear-gradient(right, #999 0%, rgba(153,153,153,0) 100%);
	  background-image: linear-gradient(-90deg, #999 0%, rgba(153,153,153,0) 100%);
	  background-image: -webkit-linear-gradient(-90deg, #999 0%, rgba(153,153,153,0) 100%);
	}
</style>