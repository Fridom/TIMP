
function setCookie( name, value, expires, path, domain, secure ) {
    document.cookie = name + "=" + escape(value) +
        ((expires)  ?  "; expires=" + expires.toGMTString():   "") +
        ((path)  ?  "; path=" + path   :   "")   +
        ((domain)  ?  "; domain="   +  domain :   "")   +
        ((secure)  ?  ";   secure"  :   "");
}

//setCookie('number', 'qwe', new Date( (new Date()).getTime() + ( 60 * 60 * 24 * 1000 ) ), '/');

$('body').find('.design').click(function() {
    $a = document.getElementById('number').value
    //setCookie('number', $a, new Date( (new Date()).getTime() + ( 60 * 60 * 24 * 1000 ) ), '/');
    var s = 'index.html?'+escape($a);
    this.href=s;
});



