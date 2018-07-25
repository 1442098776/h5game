$(function(){
	setTimeout(function(){
		$('.app>.count').fadeOut();
		$('.app>.count1').fadeIn();
	},500);
	$('.kitBtn,.close,.prev,.next,.liShow,.attention,.close1').click(function(){
		if ($(this).hasClass('kitBtn')) {
			$('.contenCount').fadeIn();
		}
		if ($(this).hasClass('close')) {
			$(this).parents('.contenCount').fadeOut();
		}
		if ($(this).hasClass('prev')) {
			var num=$(this).siblings('.page').text();
			if (num>1) {
				$(this).siblings('.page').text(--num);
			}else {
				$(this).siblings('.page').text('1');
			}
		}
		if ($(this).hasClass('next')) {
			var num=$(this).siblings('.page').text();
			if (num<10) {
				$(this).siblings('.page').text(++num);
			}else {
				$(this).siblings('.page').text('10');
			}
		}
		if ($(this).hasClass('liShow')) {
			var n=$(this).index();
			$(this).find('img').stop().fadeIn().end().siblings().find('img').stop().fadeOut();
			$('.contenCount>.text>div').eq(n).stop().fadeIn('slow').siblings('div').stop().fadeOut(0);
		}
		if ($(this).hasClass('attention')) {
			$('.contenCount>.kitImg').stop().fadeIn('slow');
		}
		if ($(this).hasClass('close1')) {
			$('.contenCount>.kitImg').stop().fadeOut('slow');
		}
	});
});