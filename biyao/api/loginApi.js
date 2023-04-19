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