// import http from '@/common/http.js'
import axios from "../ajax/ajax.js"



const beseUrl = "http://47.113.230.184:5566"

// 获取一级分类
export function getTypeOneList() {
	return axios({
		url: beseUrl,
	})
}

// // 热销排行
// export function getHotShop() {
// 	return axios({
// 		url: beseUrl + "/rmsp",
// 	})
// }