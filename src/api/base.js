/**
  * 接口域名的管理
  */

let base = {
  baseUrl: '',
  connectUrl: '',
}
let localEdition = function () { // 本地接口
  base.baseUrl = '',
  base.connectUrl = 'http://172.24.1.185:9005/app/endpoint-websocket'
}
let testEdition = function () { // 测试接口
  base.baseUrl = 'https://172.24.1.185:9005',
  base.connectUrl = 'http://172.24.1.185:9005/app/endpoint-websocket'
};
let formalEdition = function () { // 正式接口
  base.baseUrl = 'https://zhjj.cdaudit.cn:9010',
  base.connectUrl = 'http://172.24.1.185:9005/app/endpoint-websocket'
}

localEdition()

export default base;