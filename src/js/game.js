var time;
$(function(){
	clearInterval(time);
	showTime();
	$('.close,.discountsBtn,.discountsBtn1').click(function(){
		if ($(this).hasClass('close')) {
			$(this).parent().stop().fadeOut();
			// 重新游对时重启定时器，
			setTimeout(time);
			showTime();
		}
		if ($(this).hasClass('discountsBtn')) {
			$(this).text('已领取优惠券')
		}
		if ($(this).hasClass('discountsBtn1')) {
			$(this).parents('.popup1').stop().fadeOut();
			// 重新游对时重启定时器，
			setTimeout(time);
			showTime();
		}
	});
});
// 时间秒数自减
function showTime(){
	$('.p>.endTime').text('60s');
	$('.p>i').width('100%').stop().fadeIn();
	 time=setInterval(function(){
				var text=$('.p>.endTime').text().substring(0,$('.p>.endTime').text().length-1);
				--text;
				$('.p>.endTime').text(text+'s');
				var w=$('.p>i').width();
				$('.p>i').width(w-3.66);
				if (text==0) {
					clearInterval(time);
					$('.p>i').fadeOut();
				}
				// 判断挑战失败/成功
				var num=$('.num').text();
				// 挑战失败
				if (text==0 && num<10) {
					$('.popup1').stop().fadeIn();
				}
				// 挑战成功
				if (text!=0 && num==10) {
					$('.popup').stop().fadeIn();
				}
			},1000);
}