$(document).ready(function(){
    $('#example font').gradientText({
        colors: ['#D3100D', '#EE820F',  '#D3100D']
    });
});

function setCookie( name, value, expires, path, domain, secure ) {
    document.cookie = name + "=" + escape(value) +
        ((expires)  ?  "; expires=" + expires.toGMTString():   "") +
        ((path)  ?  "; path=" + path   :   "")   +
        ((domain)  ?  "; domain="   +  domain :   "")   +
        ((secure)  ?  ";   secure"  :   "");
}

//setCookie('number', 'qwe', new Date( (new Date()).getTime() + ( 60 * 60 * 24 * 1000 ) ), '/');

$('body').find('.design').click(function() {
	if (document.getElementById('radio1').checked) $a = document.getElementById('radio1').value;
	if (document.getElementById('radio2').checked) $a = document.getElementById('radio2').value;
	if (document.getElementById('radio3').checked) $a = document.getElementById('radio3').value;
	if (document.getElementById('number').value > 1 ) $a = document.getElementById('number').value
    //setCookie('number', $a, new Date( (new Date()).getTime() + ( 60 * 60 * 24 * 1000 ) ), '/');
    if ($a > 200){
        $a = 200
    }
    if ($a < 10){
        $a = 10
    }
    var s = 'index.html?'+escape($a);
    this.href=s;
});

