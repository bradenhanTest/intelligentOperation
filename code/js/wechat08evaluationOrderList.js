/** 
 * @Description: the script 智能运维平台 -- 待评价回单
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
	var evaluationOrderListSection = $('#evaluationOrderListSection'),
		evaluationOrderList = $('#evaluationOrderList'),
		loadingWrap = $('div.loading-wrap'),  
		errorWrap = $('div.error-wrap'),
		loading = $('#loading'),
		loadingMore = $('#loadingMore');

	//页面初始的时候加载数据
	$(document).ready(function() { 
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat08evaluationOrderList.txt",
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			success: function(data) { 
				loadingWrap.delay(3000).hide();  
				
				for(var i = 0; i < 4; i++){
					//收费任务
					var loadingDataStr = '<li class="evaluationOrder-item clearfix" id="'+ data.loadingData[i].orderId +'">'+
											'<a href="'+ data.loadingData[i].orderHref +'">'+
												'<div class="order-summary">'+
													'<h3>'+ data.loadingData[i].orderTitle +'</h3>'+
													'<span class="date">'+ data.loadingData[i].orderDate +'</span>'+
												'</div>'+
						
												'<div class="order-state">'+
													'<span class="state">'+ data.loadingData[i].orderState +'</span>'+
													'<span class="comment-state">'+ data.loadingData[i].orderCommentState +'</span>'+
												'</div>'+
											'</a>'+
										'</li>'; 
										
					evaluationOrderListSection.css('display','block');	 		
					evaluationOrderList.append(loadingDataStr).siblings('.more-link').show(); 
				}
			},
			error: function() { 
				loadingWrap.hide();
				errorWrap.show(); 
			}
		}); 
	});
	
	//点击加载--收费任务
	loadingMore.on('click',function(){
		loadingMore.hide();
		loading.css('display','block');
		
		$.ajax({
			type: "get",
			url: "http://4.bradenwork.sinaapp.com/poject/intelligentOperationData/wechat08evaluationOrderList.txt",
			dataType: 'jsonp',
			jsonpCallback: 'jsonpCallback',
			success: function(data) {
				loading.hide();
				loadingMore.css('display','block');
				for(var i = 0; i < 3; i++){
					//收费任务
					var clickDataStr = '<li class="evaluationOrder-item clearfix" id="'+ data.clickData[i].orderId +'">'+
											'<a href="'+ data.clickData[i].orderHref +'">'+
												'<div class="order-summary">'+
													'<h3>'+ data.clickData[i].orderTitle +'</h3>'+
													'<span class="date">'+ data.clickData[i].orderDate +'</span>'+
												'</div>'+
						
												'<div class="order-state">'+
													'<span class="state">'+ data.clickData[i].orderState +'</span>'+
													'<span class="comment-state">'+ data.clickData[i].orderCommentState +'</span>'+
												'</div>'+
											'</a>'+
										'</li>';  
					 				
					evaluationOrderList.append(clickDataStr);
					 
				}
			},
			error: function() {  
				return false;
			} 
		});
	}); 
});