// import http from '@/common/http.js'
import axios from "../ajax/ajax.js"



const beseUrl = "http://47.113.230.184:5566"

export function getTypeOneList() {
	// return ({
	// 	url: beseUrl + "/getTypeone",
	// })
	return axios({
		url: beseUrl,
	})
}

// 商品详情
export function getshopxq(id) {
	return axios({
		url: beseUrl+'/oo?id=1301185059010900001',	
	})
}

// 分类
export function getfenlei() {
	return axios({
		url: 'http://192.168.212.95:5056/classify',	
	})
}