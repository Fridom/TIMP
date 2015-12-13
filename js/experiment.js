
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

var xAngle = 0, yAngle = -0;
$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 10;
            break;

        case 38: // up
        if (xAngle != 90){
            xAngle += 10;
            evt.preventDefault();
            break;
        }
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
        do
        {
            a = getRandomInt(0, 5);
            b = getRandomInt(0, 63);
        } while (mineField[a][b] == 9 && limit[a] > n/4)
        mineField[a][b] = 9;
        limit[a]++;
    }
    for(i=0;i<6;i++){
        for(j=0;j<64;j++){
            if(mineField[i][j] == 0){
                mineField[i][j] = mineCount(mineField, i, j);
            }
        }
    }
    return(mineField)
}

mineField = randomMine(100);


$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button1').find('img').click(function(img) {
    this.src = "images/"+mineField[0][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button2').find('img').click(function(img) {
    this.src = "images/"+mineField[1][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button3').find('img').click(function(img) {
    this.src = "images/"+mineField[2][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button4').find('img').click(function(img) {
    this.src = "images/"+mineField[3][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button5').find('img').click(function(img) {
    this.src = "images/"+mineField[4][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button6').find('img').click(function(img) {
    this.src = "images/"+mineField[5][this.alt]+".jpg";
});

// НЕ забудь удалить!!!
$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button1').find('img').each(function(img) {
    this.src = "images/"+mineField[0][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button2').find('img').each(function(img) {
    this.src = "images/"+mineField[1][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button3').find('img').each(function(img) {
    this.src = "images/"+mineField[2][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button4').find('img').each(function(img) {
    this.src = "images/"+mineField[3][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button5').find('img').each(function(img) {
    this.src = "images/"+mineField[4][this.alt]+".jpg";
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button6').find('img').each(function(img) {
    this.src = "images/"+mineField[5][this.alt]+".jpg";
});




function mineCount (mineField, K, I)
{
    k = 0;
    N = 8;
if (I == 0) // (левый верхний угол одной стороны)
{
    if (mineField[K][1] == 9) k++; // вправо
    if (mineField[K][N+1] == 9) k++; // вправо-вниз
    if (mineField[K][N] == 9) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[1][0] == 9) k++; // влево
        if (mineField[1][1] == 9) k++; // влево-вниз
        if (mineField[4][N-1] == 9) k++; // вверх
        if (mineField[4][N-2] == 9) k++; // вверх вправо
        break;

        case 1:
        if (mineField[4][N-1] == 9) k++; // влево
        if (mineField[4][2*N-1] == 9) k++; // влево-вниз
        if (mineField[0][0] == 9) k++; // вверх
        if (mineField[0][N] == 9) k++; // вверх вправо
        break;

        case 2:
        if (mineField[1][N-1] == 9) k++; // влево
        if (mineField[1][2*N-1] == 9) k++; // влево-вниз
        if (mineField[0][N*(N-1)] == 9) k++; // вверх
        if (mineField[0][N*(N-1)+1] == 9) k++; // вверх вправо
        break;
         
        case 3:
        if (mineField[2][N-1] == 9) k++; // влево
        if (mineField[2][2*N-1] == 9) k++; // влево-вниз
        if (mineField[0][N*N-1] == 9) k++; // вверх
        if (mineField[0][N*(N-1)-1] == 9) k++; // вверх вправо
        break;
        
        case 4:
        if (mineField[3][N-1] == 9) k++; // влево
        if (mineField[3][2*N-1] == 9) k++; // влево-вниз
        if (mineField[0][N-1] == 9) k++; // вверх
        if (mineField[0][N-2] == 9) k++; // вверх вправо
        break;
        
        case 5:
        if (mineField[2][N*N-1] == 9) k++; // влево
        if (mineField[2][N*N-2] == 9) k++; // влево-вниз
        if (mineField[3][N*(N-1)] == 9) k++; // вверх
        if (mineField[3][N*(N-1)+1] == 9) k++; // вверх вправо
        break;
    } 
}

if (I == N-1) // (правый верхний угол одной стороны)
{
    if (mineField[K][N-2] == 9) k++; // влево
    if (mineField[K][2*N-2] == 9) k++; // влево-вниз
    if (mineField[K][2*N-1] == 9) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[3][N-1] == 9) k++; // вправо
        if (mineField[3][N-2] == 9) k++; // вправо-вниз
        if (mineField[4][0] == 9) k++; // вверх
        if (mineField[4][1] == 9) k++; // вверх-влево
        break;

        case 1:
        if (mineField[2][0] == 9) k++; // вправо
        if (mineField[2][N] == 9) k++; // вправо-вниз
        if (mineField[0][N*(N-1)] == 9) k++; // вверх
        if (mineField[0][N*(N-2)] == 9) k++; // вверх-влево
        break;

        case 2:
        if (mineField[3][0] == 9) k++; // вправо
        if (mineField[3][N] == 9) k++; // вправо-вниз
        if (mineField[0][N*N-1] == 9) k++; // вверх
        if (mineField[0][N*N-2] == 9) k++; // вверх-влево
        break;
         
        case 3:
        if (mineField[4][0] == 9) k++; // вправо
        if (mineField[4][N] == 9) k++; // вправо-вниз
        if (mineField[0][N-1] == 9) k++; // вверх
        if (mineField[0][2*N-1] == 9) k++; // вверх-влево
        break;
        
        case 4:
        if (mineField[1][0] == 9) k++; // вправо
        if (mineField[1][N] == 9) k++; // вправо-вниз
        if (mineField[0][0] == 9) k++; // вверх
        if (mineField[0][1] == 9) k++; // вверх-влево
        break;
        
        case 5:
        if (mineField[4][N*(N-1)] == 9) k++; // вправо
        if (mineField[4][N*(N-1)+1] == 9) k++; // вправо-вниз
        if (mineField[3][N*N-1] == 9) k++; // вверх
        if (mineField[3][N*N-2] == 9) k++; // вверх-влево
        break;
    } 
}

if (I == N*(N-1)) // (левый нижний угол одной стороны)
{
    if (mineField[K][N*(N-2)] == 9) k++; // вверх
    if (mineField[K][N*(N-2)+1] == 9) k++; // вправо-вверх
    if (mineField[K][N*(N-1)+1] == 9) k++; // вправо
    switch (K)
    {
        case 0:
        if (mineField[1][N-2] == 9) k++; // влево-сверху
        if (mineField[1][N-1] == 9) k++; // влево
        if (mineField[2][0] == 9) k++; // вниз
        if (mineField[2][1] == 9) k++; // вниз-вправо
        break;

        case 1:
        if (mineField[4][N*(N-1)-1] == 9) k++; // влево-сверху
        if (mineField[4][N*N-1] == 9) k++; // влево
        if (mineField[5][N*N-1] == 9) k++; // вниз
        if (mineField[5][N*N-2] == 9) k++; // вниз-вправо
        break;

        case 2:
        if (mineField[1][N*(N-1)-1] == 9) k++; // влево-сверху
        if (mineField[1][N*N-1] == 9) k++; // влево
        if (mineField[5][N*(N-1)] == 9) k++; // вниз
        if (mineField[5][N*(N-2)] == 9) k++; // вниз-вправо
        break;
         
        case 3:
        if (mineField[2][N*(N-1)-1] == 9) k++; // влево-сверху
        if (mineField[2][N*N-1] == 9) k++; // влево
        if (mineField[5][0] == 9) k++; // вниз
        if (mineField[5][1] == 9) k++; // вниз-вправо
        break;
        
        case 4:
        if (mineField[3][N*(N-1)-1] == 9) k++; // влево-сверху
        if (mineField[3][N*N-1] == 9) k++; // влево
        if (mineField[5][N-1] == 9) k++; // вниз
        if (mineField[5][2*N-1] == 9) k++; // вниз-вправо
        break;
        
        case 5:
        if (mineField[2][N*(N-1)+1] == 9) k++; // вправо
        if (mineField[2][N*(N-1)] == 9) k++; // вправо-вниз
        if (mineField[1][N*N-1] == 9) k++; // вверх
        if (mineField[1][N*N-2] == 9) k++; // вверх-вправо
        break;
    } 
}

if (I == N*N-1) // (правый нижний угол одной стороны)
{
    if (mineField[K][N*(N-1)-1] == 9) k++; // вверх
    if (mineField[K][N*(N-2)-2] == 9) k++; // влево-вверх
    if (mineField[K][N*N-2] == 9) k++; // влево
    switch (K)
    {
        case 0:
        if (mineField[3][1] == 9) k++; // вправо-вверх
        if (mineField[3][0] == 9) k++; // вправо
        if (mineField[2][N-1] == 9) k++; // вниз
        if (mineField[2][N-2] == 9) k++; // вниз-влево
        break;

        case 1:
        if (mineField[2][N*(N-2)] == 9) k++; // вправо-вверх
        if (mineField[2][N*(N-1)] == 9) k++; // вправо
        if (mineField[5][N*(N-1)] == 9) k++; // вниз
        if (mineField[5][N*(N-1)+1] == 9) k++; // вниз-влево
        break;

        case 2:
        if (mineField[3][N*(N-2)] == 9) k++; // вправо-вверх
        if (mineField[3][N*(N-1)] == 9) k++; // вправо
        if (mineField[5][0] == 9) k++; // вниз
        if (mineField[5][N] == 9) k++; // вниз-влево
        break;
         
        case 3:
        if (mineField[4][N*(N-2)] == 9) k++; // вправо-вверх
        if (mineField[4][N*(N-1)] == 9) k++; // вправо
        if (mineField[5][N-1] == 9) k++; // вниз
        if (mineField[5][N-2] == 9) k++; // вниз-влево
        break;
        
        case 4:
        if (mineField[1][N*(N-2)] == 9) k++; // вправо-вверх
        if (mineField[1][N*(N-1)] == 9) k++; // вправо
        if (mineField[5][N*N-1] == 9) k++; // вниз
        if (mineField[5][N*(N-1)-1] == 9) k++; // вниз-влево
        break;
        
        case 5:
        if (mineField[4][N*N-2] == 9) k++; // вправо-вверх
        if (mineField[4][N*N-1] == 9) k++; // вправо
        if (mineField[1][N*(N-1)] == 9) k++; // вниз
        if (mineField[1][N*(N-1)+1] == 9) k++; // вниз-влево
        break;
    } 
}

if ((I / N == 0) && (I != 0) && (I != N-1)) // верхняя грань
{
    if (mineField[K][I-1] == 9) k++; // влево
    if (mineField[K][I+1] == 9) k++; // вправо
    if (mineField[K][I+N+1] == 9) k++; // вправо-вниз
    if (mineField[K][I+N] == 9) k++; // вниз
    if (mineField[K][I+N-1] == 9) k++; // влево-вниз
    switch (K)
    {
        case 0:
        if (mineField[4][N-I] == 9) k++; // влево-вверх
        if (mineField[4][N-I-1] == 9) k++; // вверх
        if (mineField[4][N-I-2] == 9) k++; // вверх-вправо
        break;

        case 1:
        if (mineField[0][N*(I-1)] == 9) k++; // влево-вверх
        if (mineField[0][N*I] == 9) k++; // вверх
        if (mineField[0][N*(I+1)] == 9) k++; // вверх-вправо
        break;

        case 2:
        if (mineField[0][N*(N-1)+I-1] == 9) k++; // влево-вверх
        if (mineField[0][N*(N-1)+I] == 9) k++; // вверх
        if (mineField[0][N*(N-1)+I+1] == 9) k++; // вверх-вправо
        break;
         
        case 3:
        if (mineField[0][N*(N-I+1)-1] == 9) k++; // влево-вверх
        if (mineField[0][N*(N-I)-1] == 9) k++; // вверх
        if (mineField[0][N*(N-I-1)-1] == 9) k++; // вверх-вправо
        break;
        
        case 4:
        if (mineField[0][N-I] == 9) k++; // влево-вверх
        if (mineField[0][N-I-1] == 9) k++; // вверх
        if (mineField[0][N-I-2] == 9) k++; // вверх-вправо
        break;
        
        case 5:
        if (mineField[3][N*(N-1)+I-1] == 9) k++; // влево-вверх
        if (mineField[3][N*(N-1)+I] == 9) k++; // вверх
        if (mineField[3][N*(N-1)+I+1] == 9) k++; // вверх-вправо
        break;
    } 
}

if ((I % N == 0) && (I != 0) && (I != N*(N-1))) // левая грань
{
    if (mineField[K][I-N] == 9) k++; // вверх
    if (mineField[K][I-N+1] == 9) k++; // вправо-вверх
    if (mineField[K][I+1] == 9) k++; // вправо
    if (mineField[K][I+N+1] == 9) k++; // вправо-вниз
    if (mineField[K][I+N] == 9) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[1][(I / N)-1] == 9) k++; // влево-вверх
        if (mineField[1][(I / N)] == 9) k++; // влево
        if (mineField[1][(I / N)+1] == 9) k++; // влево-вниз
        break;

        case 1:
        if (mineField[4][I-1] == 9) k++; // влево-вверх
        if (mineField[4][I+N-1] == 9) k++; // влево
        if (mineField[4][I+2*N-1] == 9) k++; // влево-вниз
        break;

        case 2:
        if (mineField[1][I-1] == 9) k++; // влево-вверх
        if (mineField[1][I+N-1] == 9) k++; // влево
        if (mineField[1][I+2*N-1] == 9) k++; // влево-вниз
        break;
         
        case 3:
        if (mineField[2][I-1] == 9) k++; // влево-вверх
        if (mineField[2][I+N-1] == 9) k++; // влево
        if (mineField[2][I+2*N-1] == 9) k++; // влево-вниз
        break;
        
        case 4:
        if (mineField[3][I-1] == 9) k++; // влево-вверх
        if (mineField[3][I+N-1] == 9) k++; // влево
        if (mineField[3][I+2*N-1] == 9) k++; // влево-вниз
        break;
        
        case 5:
        if (mineField[2][N*N-(I / N)] == 9) k++; // влево-вверх
        if (mineField[2][N*N-1-(I / N)] == 9) k++; // влево
        if (mineField[2][N*N-2-(I / N)] == 9) k++; // влево-вниз
        break;
    } 
}

if ((I % N == N-1) && (I != N-1) && (I != N*N-1)) // правая грань
{
    if (mineField[K][I-N] == 9) k++; // вверх
    if (mineField[K][I-N-1] == 9) k++; // влево-вверх
    if (mineField[K][I-1] == 9) k++; // влево
    if (mineField[K][I+N-1] == 9) k++; // влево-вниз
    if (mineField[K][I+N] == 9) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[3][N-(I / N)] == 9) k++; // вправо-вверх
        if (mineField[3][N-1-(I / N)] == 9) k++; // вправо
        if (mineField[3][N-2-(I / N)+1] == 9) k++; // вправо-вниз
        break;

        case 1:
        if (mineField[2][N*((I / N)-1)] == 9) k++; // вправо-вверх
        if (mineField[2][N*(I / N)] == 9) k++; // вправо
        if (mineField[2][N*((I / N)+1)] == 9) k++; // вправо-вниз
        break;

        case 2:
        if (mineField[3][N*((I / N)-1)] == 9) k++; // вправо-вверх
        if (mineField[3][N*(I / N)] == 9) k++; // вправо
        if (mineField[3][N*((I / N)+1)] == 9) k++; // вправо-вниз
        break;
         
        case 3:
        if (mineField[4][N*((I / N)-1)] == 9) k++; // вправо-вверх
        if (mineField[4][N*(I / N)] == 9) k++; // вправо
        if (mineField[4][N*((I / N)+1)] == 9) k++; // вправо-вниз
        break;
        
        case 4:
        if (mineField[1][N*((I / N)-1)] == 9) k++; // вправо-вверх
        if (mineField[1][N*(I / N)] == 9) k++; // вправо
        if (mineField[1][N*((I / N)+1)] == 9) k++; // вправо-вниз
        break;
        
        case 5:
        if (mineField[2][N*(N-1)+(I / N)-1] == 9) k++; // вправо-вверх
        if (mineField[2][N*(N-1)+(I / N)] == 9) k++; // вправо
        if (mineField[2][N*(N-1)+(I / N)+1] == 9) k++; // вправо-вниз
        break;
    } 
}

if ((I % N == N-1) && (I != N-1) && (I != N*N-1)) // нижняя грань
{
    if (mineField[K][I-1] == 9) k++; // влево
    if (mineField[K][I-N-1] == 9) k++; // влево-вверх
    if (mineField[K][I-N] == 9) k++; // вверх
    if (mineField[K][I-N+1] == 9) k++; // вправо-вверх
    if (mineField[K][I+1] == 9) k++; // вправо
    switch (K)
    {
        case 0:
        if (mineField[2][(I % N)-1] == 9) k++; // вниз-влево
        if (mineField[2][(I % N)] == 9) k++; // вниз
        if (mineField[2][(I % N)+1] == 9) k++; // вниз-вправо
        break;

        case 1:
        if (mineField[5][N*N-(I % N)] == 9) k++; // вниз-влево
        if (mineField[5][N*N-(I % N)-1] == 9) k++; // вниз
        if (mineField[5][N*N-(I % N)-2] == 9) k++; // вниз-вправо
        break;

        case 2:
        if (mineField[5][N*(N-(I % N))] == 9) k++; // вниз-влево
        if (mineField[5][N*(N-(I % N)-1)] == 9) k++; // вниз
        if (mineField[5][N*(N-(I % N)-2)] == 9) k++; // вниз-вправо
        break;
         
        case 3:
        if (mineField[5][(I % N)-1] == 9) k++; // вниз-влево
        if (mineField[5][(I % N)] == 9) k++; // вниз
        if (mineField[5][(I % N)+1] == 9) k++; // вниз-вправо
        break;
        
        case 4:
        if (mineField[5][(I % N)*N-1] == 9) k++; // вниз-влево
        if (mineField[5][((I % N)+1)*N-1] == 9) k++; // вниз
        if (mineField[5][((I % N)+2)*N-1] == 9) k++; // вниз-вправо
        break;
        
        case 5:
        if (mineField[1][N*N-(I % N)] == 9) k++; // вниз-влево
        if (mineField[1][N*N-(I % N)-1] == 9) k++; // вниз
        if (mineField[1][N*N-(I % N)-2] == 9) k++; // вниз-вправо
        break;
    } 
}
if ((I / N != 0) && (I / N != 7) && (I % N != 0) && (I % N != 7))
{
    if (mineField[K][I-1] == 9) k++; // влево
    if (mineField[K][I-1-N] == 9) k++; // влево-вверх
    if (mineField[K][I-N] == 9) k++; // вверх
    if (mineField[K][I-N+1] == 9) k++; // вправо-вверх
    if (mineField[K][I+1] == 9) k++; // вправо
    if (mineField[K][I+N+1] == 9) k++; // вправо-вниз
    if (mineField[K][I+N] == 9) k++; // вниз
    if (mineField[K][I+N-1] == 9) k++; // влево-вниз
}
return k;
}