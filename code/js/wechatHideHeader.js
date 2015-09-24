/** 
 * @Description: the script 智能运维平台 -- 微信处理方案
 * @authors: bradenhan (bradenhan@126.com)
 * @date：    2015-09-17 22:04:29
 * @version： 1.0
 */
(function(){
	//微信页面隐藏头部
	var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        document.getElementById('header').style.display = 'none';
    }else{ 
        return false;
    } 
})()
