/**
 * 格式化url地址获取参数值
 * @param key 参数名称
 * @returns {string} 参数值
 */
function getUrlParams(key: string): string {
    //地址转码
    let url = decodeURI(document.URL);
    //读取参数部分
    let params = url.substring(url.indexOf("?"), url.length);
    //是否有参数
    if (params.length > 0) {
        params = params.substring(1, params.length)
    }
    //判断是否是多参数
    let index = params.indexOf("&");
    if (index >= 0) {
        params.split("&").forEach(item => {
            index = item.indexOf("=");
            if (index >= 0 && key === item.substring(0, index)) {
                return item.substring(index + 1, item.length)
            }
        })
    } else {
        index = params.indexOf("=");
        if (index >= 0 && key === params.substring(0, index)) {
            return params.substring(index + 1, params.length)
        }
    }
    return params
}