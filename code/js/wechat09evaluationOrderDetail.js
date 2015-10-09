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
	
	$('#textareaWrap').on('click',function(){
		$(this).find('span.tip').hide();
	})
	
	//表单提交
	$('#completeButton').on('click', function() {
		
		//声明表单变量
		var completeTask,
			completeAppointmen,
			completeCal,
			taskEvaluation,
			signature = $('#signature').val(),
			tips = $('#textareaWrap').find('span.tip');
			
		if($('#completeTask').hasClass('closed')){
			completeTask = "\u5426"; //否
		}else{
			completeTask = "\u662f"; //是
		}
		
		if($('#completeAppointmen').hasClass('closed')){
			completeAppointmen = "\u5426";//否
		}else{
			completeAppointmen = "\u662f"; //是
		}
		
		if($('#completeCal').hasClass('closed')){
			completeCal = "\u5426";//否
		}else{
			completeCal = "\u662f"; //是
		}
		
		//对此次实施任务评价
		if($('#item1').is(':checked')){
			taskEvaluation = '\u975e\u5e38\u6ee1\u610f'; //非常满意
		}else if($('#item2').is(':checked')){
			taskEvaluation = '\u6ee1\u610f'; //满意
		}else{
			taskEvaluation = '\u4e0d\u6ee1\u610f'; //不满意
		}
		
		//是否填写表单
		if(signature == ""){
			tips.eq(0).show().text('\u8bf7\u8f93\u5165\u7b7e\u540d'); //请输入签名
			return false;
		}
		
		//表单赋值
		var formDate = {
			"completeTask": completeTask,
			"completeAppointmen": completeAppointmen,
			"completeCal": completeCal,
			"taskEvaluation": taskEvaluation,
			"signature": signature  
		};
		
		//ajax提交数据
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat09evaluationOrderDetail.txt",
			data: formDate,
			dataType: "jsonp",
			jsonpCallback: 'jsonpCallback',
			success: function(data) { 
				if (data.status == "1") {
					alert("\u63d0\u4ea4\u6210\u529f!"); //提交成功
					//window.location.reload()
				} else {
					alert('\u63d0\u4ea4\u5931\u8d25'); //提交失败
				}
			}
		});
		return false;
		
	});
	
});