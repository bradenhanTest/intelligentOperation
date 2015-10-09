/** 
 * @Description: the script 智能运维平台 -- 抢单列表页
 * @authors: bradenhan (bradenhan@126.com)
 * @date：    2015-09-17 22:04:29
 * @version： 1.0
 */
require.config({
	paths: {
		jquery: 'jquery.min.2.1.4',
		wechatHideHeader: 'wechatHideHeader',
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

require(['jquery', 'wechatHideHeader'], function($) { 
	
	$('.form-items').on('click',function(){
		$(this).parent().find('span.tip').hide();
	})
	
	$("#cmpleteButton").on('click', function() {
		//声明表单变量
		var userNo = $('#userNo').val(),
			userName = $('#userName').val(),
			userPhone = $('#userPhone').val(), 
			recordContent = $('#recordContent').val(), 
			tips = $('.form-items').find('span.tip');
			
		//是否填写表单
		if(userNo == ""){
			tips.eq(0).show().text('\u8bf7\u8f93\u5165\u5ba2\u6237\u540d\u79f0\u6216\u7f16\u53f7'); //请输入客户名称或编号
			return false;
		}else if(userName == ""){
			tips.hide();
			tips.eq(1).show().text('\u8bf7\u8f93\u5165\u5ba2\u6237\u59d3\u540d'); //请输入客户姓名
			return false;
		}else if(userPhone == ""){
			tips.hide();
			tips.eq(2).show().text('\u8bf7\u8f93\u5165\u8054\u7cfb\u7535\u8bdd'); //请输入联系电话
			return false;
		}else if(userPhone != ""){
			var telReg = !!userPhone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/); 
			if(telReg == false){ 
				tips.hide();
				tips.eq(2).show().text('\u60a8\u586b\u5199\u7684\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e'); //您填写的手机号格式不正确
				return false;
			}else if(recordContent == ""){
				tips.hide();
				tips.eq(3).show().text('\u8bf7\u8f93\u5165\u547c\u53eb\u8bb0\u5f55\u5185\u5bb9'); //请输入呼叫记录内容
				return false;
			}
		}
		
		//表单赋值
		var formDate = {
			"userNo": userNo,
			"userName": userName,
			"userPhone": userPhone,
			"recordContent": recordContent
		};
		
		//ajax提交数据
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat01emergencyTask.txt",
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