/** 
 * @Description: the script 智能运维平台 -- 填写回单
 * @authors: bradenhan (bradenhan@126.com)
 * @date：    2015-09-17 22:04:29
 * @version： 1.0
 */
 
require.config({ 
    paths : {
    	jquery: 'jquery.min.2.1.4',
		wechatHideHeader: 'wechatHideHeader', 
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require(['jquery', 'wechatHideHeader'], function($) {
	console.log('此页面的js交互未写')
	
	$('div.loading-wrap').delay(3000).hide(); 
});