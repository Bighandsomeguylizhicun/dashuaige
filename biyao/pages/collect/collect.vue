<template>
	<view>

	</view>
</template>

<script setup>
	import collectGoods from './components/collect-goods.vue'
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from "@dcloudio/uni-app"
	
	
	onLoad((option) => {
		console.log(option.id, '777777777777777777');
	})
</script>

<style lang="scss" scoped>

</style>