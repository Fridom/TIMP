var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

var xAngle = 0, yAngle = 0;
$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 10;
            break;

        case 38: // up
            xAngle += 10;
            evt.preventDefault();
            break;

        case 39: // right
            yAngle += 10;
            break;

        case 40: // down
            xAngle -= 10;
            evt.preventDefault();
            break;
    };
    document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});


 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('img').contextmenu(function(img) {
    $path = this.src
    if($path.indexOf('white.jpg') + 1){
        this.src = 'images/flag.jpg';
    }
    if($path.indexOf('flag.jpg') + 1){
        this.src = 'images/white.jpg';
    }
    return false;
 });
