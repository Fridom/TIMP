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

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button').click(function() {

    this.src = 'images/flag.jpg';
  });

  //document.getElementById('cube').oncontextmenu = function(e) {

    //alert('Клик!');
    //return false;
 // }

 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('img').click(function(img) {
    this.src = 'images/flag.jpg';
 });