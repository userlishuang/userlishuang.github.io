var timer = setInterval(change, 1000);
clearInterval(timer);
var index = 3;

function change() {
    $('.col2-2 a').eq(index).css({ zIndex: '1','opacity':1 }).siblings().css({ 'zIndex': '0','opacity':0 });
    $('#leftImg').css({ top: 115 * (3 - index) + 'px' });
    index--;
    if (index < 0) {
        index = 3;
    }
}
$('.col2-2').hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(change, 2000);
})