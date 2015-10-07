/** 
 * @Description: the script 智能运维平台 -- 任务详情
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
	var grabOrderDetailSection = $('#grabOrderDetailSection'),
		loadingWrap = $('div.loading-wrap'),  
		errorWrap = $('div.error-wrap');

	//页面初始的时候加载数据
	$(document).ready(function() {
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat04receiptOrder.txt",
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			success: function(data) {
				loadingWrap.delay(3000).hide();   
				
				var grabOrderStr = '<ul class="grabOrder-summary">'+
										'<li>'+data.customerName+'</li>'+
										'<li class="address"><a href="'+data.addressLink+'">'+data.customerAddress+'</a></li>'+
										'<li class="telphone"><a href="'+data.phoneLink+'">'+data.customerPhone+'</a></li>'+
										'<li>'+data.ServiceType+'</li>'+
										'<li>'+data.faultType+'</li>'+
										'<li class="price">'+data.price+'</li>'+
									'</ul>'+
						
									'<div class="part-header">'+
										'<h3 class="part-title">'+data.callTitle+'</h3>'+
									'</div>'+
						
									'<div class="call-log">'+
										'<p>'+data.callLog+'</p>'+
									'</div>'+
									
									'<div class="part-header">'+
										'<span class="date">'+data.orderResponseTime+'</span>'+
										'<h3 class="part-title">'+data.orderResponseTitle+'</h3>'+
									'</div>'+
						
									'<ul class="pic-list clearfix">'+
										'<li><img src="'+data.orderpicLink1+'" alt="" /></li>'+
										'<li><img src="'+data.orderpicLink2+'" alt="" /></li>'+
									'</ul>'+
									
									'<div class="button-box">'+
										'<a href="'+data.grabOrderLink+'" class="complete-button">抢&#x3000;单</a>'+
									'</div>';

				grabOrderDetailSection.css('display', 'block');
				grabOrderDetailSection.append(grabOrderStr);
			},
			error: function() {
				loadingWrap.hide();
				errorWrap.show();  
				
			}
		});
	});
});