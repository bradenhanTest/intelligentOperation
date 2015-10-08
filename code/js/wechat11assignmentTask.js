/** 
 * @Description: the script 智能运维平台 -- 指派任务
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
	var chargeOrderSection = $('#chargeOrderSection'),
		contractOrderSection = $('#contractOrderSection'),
		chargeOrderList = $('#chargeOrderList'),
		contractOrderList = $('#contractOrderList'),
		loadingWrap = $("div.loading-wrap"),  
		errorWrap = $('div.error-wrap'), 
		moreLink = $('.grabOrder-section').find('span.more-link'),
		chargeOrderMore = $('#chargeOrderMore'),
		contractOrderMore = $('#contractOrderMore'),
		chargeLoading = $('#chargeLoading'),
		contractLoading = $('#contractLoading');
		
		moreLink.hide();  
		
	//页面初始的时候加载数据
	$(document).ready(function() { 
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat02grabOrderList.txt",
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			success: function(data) { 
				loadingWrap.delay(3000).hide();  
				
				for(var i = 0; i < 2; i++){
					//收费任务
					var chargeOrderStr = '<li class="grabOrder-item" id="'+ data.chargeOrder[i].orderId +'">' +
											'<a href="'+ data.chargeOrder[i].orderHref +'">' +
												'<div class="grabOrder-title">' +
													'<h3>'+ data.chargeOrder[i].orderTitle +'</h3>' +
													'<p>'+ data.chargeOrder[i].orderSubTitle +'</p>' +
												'</div>' +
												'<span class="price">'+ data.chargeOrder[i].orderPrice +'</span>' +
												'<div class="button-box">' +
													'<span class="button">指派</span>' +
													'<p>'+ data.chargeOrder[i].orderTime +'</p>' +
												'</div>' +
											'</a>' +
										'</li>'; 
										
					chargeOrderSection.css('display','block');						
					chargeOrderList.append(chargeOrderStr).siblings('.more-link').show();
					
					//合约服务 
					var contractOrderStr = '<li class="grabOrder-item" id="'+ data.contractOrder[i].orderId +'">' +
											'<a href="'+ data.contractOrder[i].orderHref +'">' +
												'<div class="grabOrder-title">' +
													'<h3>'+ data.contractOrder[i].orderTitle +'</h3>' +
													'<p>'+ data.contractOrder[i].orderSubTitle +'</p>' +
												'</div>' +
												'<span class="price">'+ data.contractOrder[i].orderPrice +'</span>' +
												'<div class="button-box">' +
													'<span class="button">指派</span>' +
													'<p>'+ data.contractOrder[i].orderTime +'</p>' +
												'</div>' +
											'</a>' +
										'</li>'; 
										
					contractOrderSection.css('display','block');					
					contractOrderList.append(contractOrderStr).siblings('.more-link').show(); 
				}
			},
			error: function() { 
				loadingWrap.hide();
				errorWrap.show(); 
			}
		}); 
	});
	
	//点击加载--收费任务
	chargeOrderMore.on('click',function(){
		chargeOrderMore.hide();
		chargeLoading.css('display','block');
		
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat02grabChargeOrderList.txt",
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			success: function(data) {
				chargeLoading.hide();
				chargeOrderMore.css('display','block');
				for(var i = 0; i < 3; i++){
					//收费任务
					var chargeOrderStr = '<li class="grabOrder-item" id="'+ data.chargeOrder[i].orderId +'">' +
											'<a href="'+ data.chargeOrder[i].orderHref +'">' +
												'<div class="grabOrder-title">' +
													'<h3>'+ data.chargeOrder[i].orderTitle +'</h3>' +
													'<p>'+ data.chargeOrder[i].orderSubTitle +'</p>' +
												'</div>' +
												'<span class="price">'+ data.chargeOrder[i].orderPrice +'</span>' +
												'<div class="button-box">' +
													'<span class="button">指派</span>' +
													'<p>'+ data.chargeOrder[i].orderTime +'</p>' +
												'</div>' +
											'</a>' +
										'</li>';  
					 				
					chargeOrderList.append(chargeOrderStr);
					 
				}
			},
			error: function() {  
				return false;
			} 
		});
	});
	
	//点击加载--合约任务
	contractOrderMore.on('click',function(){
		contractOrderMore.hide();
		contractLoading.css('display','block');
		
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat02grabContractOrderList.txt",
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			success: function(data) {
				contractLoading.hide();
				contractOrderMore.css('display','block');
				for(var i = 0; i < 3; i++){
					//收费任务
					var contractOrderStr = '<li class="grabOrder-item" id="'+ data.contractOrder[i].orderId +'">' +
											'<a href="'+ data.contractOrder[i].orderHref +'">' +
												'<div class="grabOrder-title">' +
													'<h3>'+ data.contractOrder[i].orderTitle +'</h3>' +
													'<p>'+ data.contractOrder[i].orderSubTitle +'</p>' +
												'</div>' +
												'<span class="price">'+ data.contractOrder[i].orderPrice +'</span>' +
												'<div class="button-box">' +
													'<span class="button">指派</span>' +
													'<p>'+ data.contractOrder[i].orderTime +'</p>' +
												'</div>' +
											'</a>' +
										'</li>';  
					 				
					contractOrderList.append(contractOrderStr);
					 
				}
			},
			error: function() {  
				return false;
			} 
		});
	});
});