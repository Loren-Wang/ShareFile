/**
 * 创建时间： 2019/8/26 0026 下午 18:47:14
 * 创建人：LorenWang（王亮）
 * 功能作用：通用工具类
 * 方法介绍：
 * 思路：
 * 修改人：
 * 修改时间：
 * 备注：
 */

/**
 * 格式化url地址获取参数值
 * @param key 参数名称
 * @returns {string} 参数值
 */
function jstlwGetUrlParams(key) {
    if (jstlwParamsIsString(key)) {
        //地址转码
        let url = decodeURI(document.URL);
        let reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
        let arg = window.location.search.substr(1).match(reg);
        if(arg!=null){
            return  unescape(arg[2]);
        }
//         //读取参数部分
//         let params = url.substring(url.indexOf("?"), url.length);
//         //是否有参数
//         if (params.length > 0) {
//             params = params.substring(1, params.length)
//         }
//         //判断是否是多参数
//         let index = params.indexOf("&");
//         if (index >= 0) {
//             params.split("&").forEach(item => {
//                 index = item.indexOf("=");
//                 if (index >= 0 && key === item.substring(0, index)) {
//                     return item.substring(index + 1, item.length)
//                 }
//             })
//         } else {
//             index = params.indexOf("=");
//             if (index >= 0 && key === params.substring(0, index)) {
//                 return params.substring(index + 1, params.length)
//             }
//         }
    }
    return key
}

/**
 * 获取参数类型
 * @param params 参数
 * @returns  参数类型
 */
function jstlwGetParamsType(params) {
    return Object.prototype.toString.call(params).constructor
}

/**
 * 判断参数是否是字符串
 * @param params 参数
 * @returns {boolean} 是否是字符串，true为是
 */
function jstlwParamsIsString(params) {
    return jstlwGetParamsType(params) === String
}

/**
 * 判断参数是否为空
 * @param params 参数
 * @return 返回是否为空
 */
function jstlwParamsIsEmpty(params) {
    return params == null || jstlwGetParamsType(params) === undefined || (jstlwParamsIsString(params) && params === "")
}

/**
 * 判断参数是否为空字符串或者空
 * @param params 参数
 * @return 返回是否为空
 */
function jstlwParamsIsEmptyStr(params) {
    return jstlwParamsIsEmpty(params) || (jstlwParamsIsString(params) && params.length === 0)
}

/**
 * 是否是开发环境
 */
function isDevelopEnvironment() {
    return process.env.NODE_ENV === "development"
}


