/** 
 * @Description: the script 智能运维平台 -- 填写回单  大范甘迪发鬼地方
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
	
	$('.fillReceipt-items').on('click','li',function(){
		$(this).parent().find('span.tip').hide();
	})
	
	$("#completeButton").on('click', function() {
		//声明表单变量
		var modelType = $('#modelType').val(),
			serialNumber = $('#serialNumber').val(),
			workContent = $('#workContent').val(), 
			solveProblem = $('#solveProblem').val(),  
			workPlan = $('#workPlan').val(),  
			remarks = $('#remarks').val(), 
			tips = $('.fillReceipt-items').find('span.tip');
			
		//是否填写表单
		if(modelType == ""){
			tips.eq(0).show().text('\u8bf7\u8f93\u5165\u673a\u578b'); //请输入机型
			return false;
		}else if(serialNumber == ""){
			tips.hide();
			tips.eq(1).show().text('\u8bf7\u8f93\u5165\u7cfb\u5217\u53f7'); //请输入系列号
			return false;
		}else if(workContent == ""){
			tips.hide();
			tips.eq(2).show().text('\u8bf7\u8f93\u5165\u5de5\u4f5c\u5185\u5bb9'); //请输入工作内容
			return false;
		}else if(solveProblem == ""){
				tips.hide();
				tips.eq(3).show().text('\u8bf7\u8f93\u5165\u672c\u6b21\u89e3\u51b3\u7684\u95ee\u9898'); //请输入本次解决的问题
				return false;
		}else if(workPlan == ""){
				tips.hide();
				tips.eq(4).show().text('\u8bf7\u8f93\u5165\u4e0b\u4e00\u6b65\u5de5\u4f5c\u8ba1\u5212'); //请输入下一步工作计划
				return false;
		}else if(remarks == ""){
				tips.hide();
				tips.eq(5).show().text('\u8bf7\u8f93\u5165\u5907\u6ce8'); //请输入备注
				return false;
		}
		
		//表单赋值
		var formDate = {
			"modelType": modelType,
			"serialNumber": serialNumber,
			"workContent": workContent,
			"solveProblem": solveProblem,
			"workPlan": workPlan,
			"remarks": remarks
		};
		
		//ajax提交数据
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat05fillReceiptOrder.txt",
			data: formDate,
			dataType: "jsonp",
			jsonpCallback: 'jsonpCallback',
			success: function(data) { 
				if (data.status == "1") {
					alert("\u63d0\u4ea4\u6210\u529f!"); //提交成功
					window.location.reload()
				} else {
					alert('\u63d0\u4ea4\u5931\u8d25'); //提交失败
				}
			}
		});
		return false;
	});
});