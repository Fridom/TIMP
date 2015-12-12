var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

var xAngle = 0, yAngle = 0;
$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 10;
            break;

        case 38: // up
        if (xAngle = 90) break;
            xAngle += 10;
            evt.preventDefault();
            break;
        

        case 39: // right
            yAngle += 10;
            break;

        case 40: // down
        if (xAngle != -90){
            xAngle -= 10;
            evt.preventDefault();
            break;
        }
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

 i=0
 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button1').find('img').each(function(a){
    this.alt = i++
 });

i=0
 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button2').find('img').each(function(a){
    this.alt = i++
 });

 i=0
 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button3').find('img').each(function(a){
    this.alt = i++
 });

 i=0
 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button4').find('img').each(function(a){
    this.alt = i++
 });

 i=0
 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button5').find('img').each(function(a){
    this.alt = i++
 });

 i=0
 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button6').find('img').each(function(a){
    this.alt = i++
 });

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('img').click(function(img) {
    this.src = "images/"+this.alt+".png";

});

function randomMine(n){
    limit = [0,0,0,0,0,0];
    mineField = [[],[],[],[],[],[]];
    for (i=0;i<64;i++){
        mineField[0].push(0);
        mineField[1].push(0);
        mineField[2].push(0);
        mineField[3].push(0);
        mineField[4].push(0);
        mineField[5].push(0);
    }
    for (i=0;i<n;i++){
        do{
        a = getRandomInt(0, 5);
        b = getRandomInt(0, 63);
    } while (mineField[a][b] == 9 && limit[a] > n/4)
    mineField[a][b] = 9;
    limit[a]++;
    }
    alert(mineField)
    alert('\n')
    alert(limit)
}

randomMine(100)