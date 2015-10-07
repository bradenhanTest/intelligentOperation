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
	
	//按钮点击展开关闭
	$('.evaluation-items .evaluation-item').on('click','.button',function(){
		$(this).toggleClass('closed');
	});
});