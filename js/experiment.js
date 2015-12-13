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


 $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button').contextmenu(function(img) {
    $text = this.innerHTML
    if($text.indexOf("white") + 1){
        this.innerHTML = $text.replace('white', 'flag')
    }
    if($text.indexOf("flag") + 1){
        this.innerHTML = $text.replace('flag', 'white')
    }
    return false
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
            if(mineField[i][j] != 9){
                mineField[i][j] = mineCount(mineField, i, j);
            }
        }
    }
    return(mineField)
}

mineField = randomMine(50);


$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button1').click(function(img) {
    $a = this.innerHTML.substr(-4,2);
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }
    this.innerHTML = this.innerHTML.replace('white', mineField[0][$a])
    $a = parseInt($a, 10);
    if (mineField[0][$a] == 0) {
        openCell(0, $a);
    }
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button2').click(function(img) {
    $a = this.innerHTML.substr(-4,2);
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }
    this.innerHTML = this.innerHTML.replace('white', mineField[1][$a])
    $a = parseInt($a, 10);
    if (mineField[1][$a] == 0) {
        openCell(1, $a);
    }
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button3').click(function(img) {
    $a = this.innerHTML.substr(-4,2);
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }
    this.innerHTML = this.innerHTML.replace('white', mineField[2][$a])
    if (mineField[2][$a] == 0) {
        openCell(2, $a);
    }
    
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button4').click(function(img) {
    $a = this.innerHTML.substr(-4,2);
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    
    }
    this.innerHTML = this.innerHTML.replace('white', mineField[3][$a])
    if (mineField[3][$a] == 0) {
        openCell(3, $a);
    }
    
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button5').click(function(img) {
    $a = this.innerHTML.substr(-4,2);
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }
    this.innerHTML = this.innerHTML.replace('white', mineField[4][$a])
    if (mineField[4][$a] == 0) {
        openCell(4, $a);
    }
    
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button6').click(function(img) {
    $a = this.innerHTML.substr(-4,2);
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }
    this.innerHTML = this.innerHTML.replace('white', mineField[5][$a])
    if (mineField[5][$a] == 0) {
        openCell(5, $a);
    }
    
});
/*
//Это нужно удалить
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
*/

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
            if (mineField[4][0] == 9) k++; // влево
            if (mineField[4][1] == 9) k++; // влево-вниз
            if (mineField[3][N-1] == 9) k++; // вверх
            if (mineField[3][N-2] == 9) k++; // вверх вправо
            break;

            case 1:
            if (mineField[4][N-1] == 9) k++; // влево
            if (mineField[4][2*N-1] == 9) k++; // влево-вниз
            if (mineField[0][N*(N-1)] == 9) k++; // вверх 
            if (mineField[0][N*(N-1)+1] == 9) k++; // вверх вправо 
            break;

            case 2:
            if (mineField[1][N-1] == 9) k++; // влево
            if (mineField[1][2*N-1] == 9) k++; // влево-вниз
            if (mineField[0][N*N-1] == 9) k++; // вверх
            if (mineField[0][N*(N-1)-1] == 9) k++; // вверх вправо
            break;
             
            case 3:
            if (mineField[2][N-1] == 9) k++; // влево
            if (mineField[2][2*N-1] == 9) k++; // влево-вниз
            if (mineField[0][N-1] == 9) k++; // вверх
            if (mineField[0][N-2] == 9) k++; // вверх вправо
            break;
            
            case 4:
            if (mineField[3][N-1] == 9) k++; // влево
            if (mineField[3][2*N-1] == 9) k++; // влево-вниз
            if (mineField[0][0] == 9) k++; // вверх
            if (mineField[0][N] == 9) k++; // вверх вправо
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
            if (mineField[2][N-1] == 9) k++; // вправо
            if (mineField[2][N-2] == 9) k++; // вправо-вниз
            if (mineField[3][0] == 9) k++; // вверх
            if (mineField[3][1] == 9) k++; // вверх-влево
            break;

            case 1:
            if (mineField[2][0] == 9) k++; // вправо
            if (mineField[2][N] == 9) k++; // вправо-вниз
            if (mineField[0][N*N-1] == 9) k++; // вверх 
            if (mineField[0][N*N-2] == 9) k++; // вверх-влево 
            break;

            case 2:
            if (mineField[3][0] == 9) k++; // вправо
            if (mineField[3][N] == 9) k++; // вправо-вниз
            if (mineField[0][N-1] == 9) k++; // вверх
            if (mineField[0][2*N-1] == 9) k++; // вверх-влево
            break;
             
            case 3:
            if (mineField[4][0] == 9) k++; // вправо
            if (mineField[4][N] == 9) k++; // вправо-вниз
            if (mineField[0][0] == 9) k++; // вверх
            if (mineField[0][1] == 9) k++; // вверх-влево
            break;
            
            case 4:
            if (mineField[1][0] == 9) k++; // вправо
            if (mineField[1][N] == 9) k++; // вправо-вниз
            if (mineField[0][N*(N-1)] == 9) k++; // вверх
            if (mineField[0][N*(N-2)] == 9) k++; // вверх-влево
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
            if (mineField[4][N-2] == 9) k++; // влево-сверху
            if (mineField[4][N-1] == 9) k++; // влево
            if (mineField[1][0] == 9) k++; // вниз
            if (mineField[1][1] == 9) k++; // вниз-вправо
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
        if (mineField[K][N*(N-1)-2] == 9) k++; // влево-вверх
        if (mineField[K][N*N-2] == 9) k++; // влево
        switch (K)
        {
            case 0:
            if (mineField[2][1] == 9) k++; // вправо-вверх
            if (mineField[2][0] == 9) k++; // вправо
            if (mineField[1][N-1] == 9) k++; // вниз
            if (mineField[1][N-2] == 9) k++; // вниз-влево
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

    if ((I / N >> 0 == 0) && (I != 0) && (I != N-1)) // верхняя грань
    {
        if (mineField[K][I-1] == 9) k++; // влево
        if (mineField[K][I+1] == 9) k++; // вправо
        if (mineField[K][I+N+1] == 9) k++; // вправо-вниз
        if (mineField[K][I+N] == 9) k++; // вниз
        if (mineField[K][I+N-1] == 9) k++; // влево-вниз
        switch (K)
        {
            case 0:
            if (mineField[3][N-I] == 9) k++; // влево-вверх
            if (mineField[3][N-I-1] == 9) k++; // вверх
            if (mineField[3][N-I-2] == 9) k++; // вверх-вправо
            break;

            case 1:
            if (mineField[0][N*(N-1)+I-1] == 9) k++; // влево-вверх
            if (mineField[0][N*(N-1)+I] == 9) k++; // вверх
            if (mineField[0][N*(N-1)+I+1] == 9) k++; // вверх-вправо
            break;

            case 2:
            if (mineField[0][N*(N-I+1)-1] == 9) k++; // влево-вверх
            if (mineField[0][N*(N-I)-1] == 9) k++; // вверх
            if (mineField[0][N*(N-I-1)-1] == 9) k++; // вверх-вправо
            break;
             
            case 3:
            if (mineField[0][N-I] == 9) k++; // влево-вверх 
            if (mineField[0][N-I-1] == 9) k++; // вверх 
            if (mineField[0][N-I-2] == 9) k++; // вверх-вправо 
            break;
            
            case 4:
            if (mineField[0][N*(I-1)] == 9) k++; // влево-вверх
            if (mineField[0][N*I] == 9) k++; // вверх
            if (mineField[0][N*(I+1)] == 9) k++; // вверх-вправо
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
            if (mineField[4][(I / N >> 0)-1] == 9) k++; // влево-вверх
            if (mineField[4][(I / N >> 0)] == 9) k++; // влево
            if (mineField[4][(I / N >> 0)+1] == 9) k++; // влево-вниз
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
            if (mineField[2][N*N-(I / N >> 0)] == 9) k++; // влево-вверх
            if (mineField[2][N*N-1-(I / N >> 0)] == 9) k++; // влево
            if (mineField[2][N*N-2-(I / N >> 0)] == 9) k++; // влево-вниз
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
            if (mineField[2][N-(I / N >> 0)] == 9) k++; // вправо-вверх
            if (mineField[2][N-1-(I / N >> 0)] == 9) k++; // вправо
            if (mineField[2][N-2-(I / N >> 0)] == 9) k++; // вправо-вниз
            break;

            case 1:
            if (mineField[2][N*((I / N >> 0)-1)] == 9) k++; // вправо-вверх
            if (mineField[2][N*(I / N >> 0)] == 9) k++; // вправо
            if (mineField[2][N*((I / N >> 0)+1)] == 9) k++; // вправо-вниз
            break;

            case 2:
            if (mineField[3][N*((I / N >> 0)-1)] == 9) k++; // вправо-вверх
            if (mineField[3][N*(I / N >> 0)] == 9) k++; // вправо
            if (mineField[3][N*((I / N >> 0)+1)] == 9) k++; // вправо-вниз
            break;
             
            case 3:
            if (mineField[4][N*((I / N >> 0)-1)] == 9) k++; // вправо-вверх
            if (mineField[4][N*(I / N >> 0)] == 9) k++; // вправо
            if (mineField[4][N*((I / N >> 0)+1)] == 9) k++; // вправо-вниз
            break;
            
            case 4:
            if (mineField[1][N*((I / N >> 0)-1)] == 9) k++; // вправо-вверх
            if (mineField[1][N*(I / N >> 0)] == 9) k++; // вправо
            if (mineField[1][N*((I / N >> 0)+1)] == 9) k++; // вправо-вниз
            break;
            
            case 5:
            if (mineField[4][N*(N-1)+(I / N >> 0)-1] == 9) k++; // вправо-вверх
            if (mineField[4][N*(N-1)+(I / N >> 0)] == 9) k++; // вправо
            if (mineField[4][N*(N-1)+(I / N >> 0)+1] == 9) k++; // вправо-вниз
            break;
        } 
    }
    if ((I / N >> 0 == 7) && (I != N*(N-1)) && (I != N*N-1)) // нижняя грань
    {
        if (mineField[K][I-1] == 9) k++; // влево
        if (mineField[K][I-N-1] == 9) k++; // влево-вверх
        if (mineField[K][I-N] == 9) k++; // вверх
        if (mineField[K][I-N+1] == 9) k++; // вправо-вверх
        if (mineField[K][I+1] == 9) k++; // вправо
        switch (K)
        {
            case 0:
            if (mineField[1][(I % N)-1] == 9) k++; // вниз-влево
            if (mineField[1][(I % N)] == 9) k++; // вниз
            if (mineField[1][(I % N)+1] == 9) k++; // вниз-вправо
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
    if ((I / N >> 0 != 0) && (I / N >> 0 != 7) && (I % N != 0) && (I % N != 7)) // не граничный случай
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

function openCell (K, I)
{
    k = 0;
    N = 8;
    if (mineField[K][I] == 0)
    {
        if (I == 0) // (левый верхний угол одной стороны)
        {
            if (mineField[K][1] == 0) openCell(K, 1); // вправо
            if (mineField[K][N+1] == 0) openCell(K, N+1); // вправо-вниз
            if (mineField[K][N] == 0) openCell(K, N); // вниз
            switch (K)
            {
                case 0:
                if (mineField[4][0] == 0) openCell(4, 0); // влево
                if (mineField[4][1] == 0) openCell(4, 1); // влево-вниз
                if (mineField[3][N-1] == 0) openCell(3, N-1); // вверх
                if (mineField[3][N-2] == 0) openCell(3, N-2); // вверх вправо
                break;

                case 1:
                if (mineField[4][N-1] == 0) openCell(4, N-1); // влево
                if (mineField[4][2*N-1] == 0) openCell(4, 2*N-1); // влево-вниз
                if (mineField[0][N*(N-1)] == 0) openCell(0, N*(N-1)); // вверх 
                if (mineField[0][N*(N-1)+1] == 0) openCell(0, N*(N-1)+1); // вверх вправо 
                break;

                case 2:
                if (mineField[1][N-1] == 0) openCell(1, N-1); // влево
                if (mineField[1][2*N-1] == 0) openCell(1, 2*N-1); // влево-вниз
                if (mineField[0][N*N-1] == 0) openCell(0, N*N-1); // вверх
                if (mineField[0][N*(N-1)-1] == 0) openCell(0, N*(N-1)-1); // вверх вправо
                break;
                 
                case 3:
                if (mineField[2][N-1] == 0) openCell(2, N-1); // влево
                if (mineField[2][2*N-1] == 0) openCell(2, 2*N-1); // влево-вниз
                if (mineField[0][N-1] == 0) openCell(0, N-1); // вверх
                if (mineField[0][N-2] == 0) openCell(0, N-2); // вверх вправо
                break;
                
                case 4:
                if (mineField[3][N-1] == 0) openCell(3, N-1); // влево
                if (mineField[3][2*N-1] == 0) openCell(3, 2*N-1); // влево-вниз
                if (mineField[0][0] == 0) openCell(0, 0); // вверх
                if (mineField[0][N] == 0) openCell(0, N); // вверх вправо
                break;
                
                case 5:
                if (mineField[2][N*N-1] == 0) openCell(2, N*N-1); // влево
                if (mineField[2][N*N-2] == 0) openCell(2, N*N-2); // влево-вниз
                if (mineField[3][N*(N-1)] == 0) openCell(3, N*(N-1)); // вверх
                if (mineField[3][N*(N-1)+1] == 0) openCell(3, N*(N-1)+1); // вверх вправо
                break;
            } 
        }

        if (I == N-1) // (правый верхний угол одной стороны)
        {
            if (mineField[K][N-2] == 0) openCell(K, N-2); // влево
            if (mineField[K][2*N-2] == 0) openCell(K, 2*N-2); // влево-вниз
            if (mineField[K][2*N-1] == 0) openCell(K, 2*N-1); // вниз
            switch (K)
            {
                case 0:
                if (mineField[2][N-1] == 0) openCell(2, N-1); // вправо
                if (mineField[2][N-2] == 0) openCell(2, N-2); // вправо-вниз
                if (mineField[3][0] == 0) openCell(3, 0); // вверх
                if (mineField[3][1] == 0) openCell(3, 1); // вверх-влево
                break;

                case 1:
                if (mineField[2][0] == 0) openCell(2, 0); // вправо
                if (mineField[2][N] == 0) openCell(2, N); // вправо-вниз
                if (mineField[0][N*N-1] == 0) openCell(0, N*N-1); // вверх 
                if (mineField[0][N*N-2] == 0) openCell(0, N*N-2); // вверх-влево 
                break;

                case 2:
                if (mineField[3][0] == 0) openCell(3, 0); // вправо
                if (mineField[3][N] == 0) openCell(3, N); // вправо-вниз
                if (mineField[0][N-1] == 0) openCell(0, N-1); // вверх
                if (mineField[0][2*N-1] == 0) openCell(0, 2*N-1); // вверх-влево
                break;
                 
                case 3:
                if (mineField[4][0] == 0) openCell(4, 0); // вправо
                if (mineField[4][N] == 0) openCell(4, N); // вправо-вниз
                if (mineField[0][0] == 0) openCell(0, 0); // вверх
                if (mineField[0][1] == 0) openCell(0, 1); // вверх-влево
                break;
                
                case 4:
                if (mineField[1][0] == 0) openCell(1, 0); // вправо
                if (mineField[1][N] == 0) openCell(1, N); // вправо-вниз
                if (mineField[0][N*(N-1)] == 0) openCell(0, N*(N-1)); // вверх
                if (mineField[0][N*(N-2)] == 0) openCell(0, N*(N-2)); // вверх-влево
                break;
                
                case 5:
                if (mineField[4][N*(N-1)] == 0) openCell(4, N*(N-1)); // вправо
                if (mineField[4][N*(N-1)+1] == 0) openCell(4, N*(N-1)+1); // вправо-вниз
                if (mineField[3][N*N-1] == 0) openCell(3, N*N-1); // вверх
                if (mineField[3][N*N-2] == 0) openCell(3, N*N-2); // вверх-влево
                break;
            } 
        }

        if (I == N*(N-1)) // (левый нижний угол одной стороны)
        {
            if (mineField[K][N*(N-2)] == 0) openCell(K, N*(N-2)); // вверх
            if (mineField[K][N*(N-2)+1] == 0) openCell(K, N*(N-2)+1); // вправо-вверх
            if (mineField[K][N*(N-1)+1] == 0) openCell(K, N*(N-1)+1); // вправо
            switch (K)
            {
                case 0:
                if (mineField[4][N-2] == 0) openCell(4, N-2); // влево-сверху
                if (mineField[4][N-1] == 0) openCell(4, N-1); // влево
                if (mineField[1][0] == 0) openCell(1, 0); // вниз
                if (mineField[1][1] == 0) openCell(1, 1); // вниз-вправо
                break;

                case 1:
                if (mineField[4][N*(N-1)-1] == 0) openCell(4, N*(N-1)-1); // влево-сверху
                if (mineField[4][N*N-1] == 0) openCell(4, N*N-1); // влево
                if (mineField[5][N*N-1] == 0) openCell(5, N*N-1); // вниз
                if (mineField[5][N*N-2] == 0) openCell(5, N*N-2); // вниз-вправо
                break;

                case 2:
                if (mineField[1][N*(N-1)-1] == 0) openCell(1, N*(N-1)-1); // влево-сверху
                if (mineField[1][N*N-1] == 0) openCell(1, N*N-1); // влево
                if (mineField[5][N*(N-1)] == 0) openCell(5, N*(N-1)); // вниз
                if (mineField[5][N*(N-2)] == 0) openCell(5, N*(N-2)); // вниз-вправо
                break;
                 
                case 3:
                if (mineField[2][N*(N-1)-1] == 0) openCell(2, N*(N-1)-1); // влево-сверху
                if (mineField[2][N*N-1] == 0) openCell(2, N*N-1); // влево
                if (mineField[5][0] == 0) openCell(5, 0); // вниз
                if (mineField[5][1] == 0) openCell(5, 1); // вниз-вправо
                break;
                
                case 4:
                if (mineField[3][N*(N-1)-1] == 0) openCell(3, N*(N-1)-1); // влево-сверху
                if (mineField[3][N*N-1] == 0) openCell(3, N*N-1); // влево
                if (mineField[5][N-1] == 0) openCell(5, N-1); // вниз
                if (mineField[5][2*N-1] == 0) openCell(5, 2*N-1); // вниз-вправо
                break;
                
                case 5:
                if (mineField[2][N*(N-1)+1] == 0) openCell(2, N*(N-1)+1); // вправо
                if (mineField[2][N*(N-1)] == 0) openCell(2, N*(N-1)); // вправо-вниз
                if (mineField[1][N*N-1] == 0) openCell(1, N*N-1); // вверх
                if (mineField[1][N*N-2] == 0) openCell(1, N*N-2); // вверх-вправо
                break;
            } 
        }

        if (I == N*N-1) // (правый нижний угол одной стороны)
        {
            if (mineField[K][N*(N-1)-1] == 0) openCell(K, N*(N-1)-1); // вверх
            if (mineField[K][N*(N-2)-2] == 0) openCell(K, N*(N-2)-2); // влево-вверх
            if (mineField[K][N*N-2] == 0) openCell(K, N*N-2); // влево
            switch (K)
            {
                case 0:
                if (mineField[2][1] == 0) openCell(2, 1); // вправо-вверх
                if (mineField[2][0] == 0) openCell(2, 0); // вправо
                if (mineField[1][N-1] == 0) openCell(1, N-1); // вниз
                if (mineField[1][N-2] == 0) openCell(1, N-2); // вниз-влево
                break;

                case 1:
                if (mineField[2][N*(N-2)] == 0) openCell(2, N*(N-2)); // вправо-вверх
                if (mineField[2][N*(N-1)] == 0) openCell(2, N*(N-1)); // вправо
                if (mineField[5][N*(N-1)] == 0) openCell(5, N*(N-1)); // вниз
                if (mineField[5][N*(N-1)+1] == 0) openCell(5, N*(N-1)+1); // вниз-влево
                break;

                case 2:
                if (mineField[3][N*(N-2)] == 0) openCell(3, N*(N-2)); // вправо-вверх
                if (mineField[3][N*(N-1)] == 0) openCell(3, N*(N-1)); // вправо
                if (mineField[5][0] == 0) openCell(5, 0); // вниз
                if (mineField[5][N] == 0) openCell(5, N); // вниз-влево
                break;
                 
                case 3:
                if (mineField[4][N*(N-2)] == 0) openCell(4, N*(N-2)); // вправо-вверх
                if (mineField[4][N*(N-1)] == 0) openCell(4, N*(N-1)); // вправо
                if (mineField[5][N-1] == 0) openCell(5, N-1); // вниз
                if (mineField[5][N-2] == 0) openCell(5, N-2); // вниз-влево
                break;
                
                case 4:
                if (mineField[1][N*(N-2)] == 0) openCell(1, N*(N-2)); // вправо-вверх
                if (mineField[1][N*(N-1)] == 0) openCell(1, N*(N-1)); // вправо
                if (mineField[5][N*N-1] == 0) openCell(5, N*N-1); // вниз
                if (mineField[5][N*(N-1)-1] == 0) openCell(5, N*(N-1)-1); // вниз-влево
                break;
                
                case 5:
                if (mineField[4][N*N-2] == 0) openCell(4, N*N-2); // вправо-вверх
                if (mineField[4][N*N-1] == 0) openCell(4, N*N-1); // вправо
                if (mineField[1][N*(N-1)] == 0) openCell(1, N*(N-1)); // вниз
                if (mineField[1][N*(N-1)+1] == 0) openCell(1, N*(N-1)+1); // вниз-влево
                break;
            } 
        }

        if ((I / N >> 0 == 0) && (I != 0) && (I != N-1)) // верхняя грань
        {
            if (mineField[K][I-1] == 0) openCell(K, I-1); // влево
            if (mineField[K][I+1] == 0) openCell(K, I+1); // вправо
            if (mineField[K][I+N+1] == 0) openCell(K, I+N+1); // вправо-вниз
            if (mineField[K][I+N] == 0) openCell(K, I+N); // вниз
            if (mineField[K][I+N-1] == 0) openCell(K, I+N-1); // влево-вниз
            switch (K)
            {
                case 0:
                if (mineField[3][N-I] == 0) openCell(3, N-I); // влево-вверх
                if (mineField[3][N-I-1] == 0) openCell(3, N-I-1); // вверх
                if (mineField[3][N-I-2] == 0) openCell(3, N-I-2); // вверх-вправо
                break;

                case 1:
                if (mineField[0][N*(N-1)+I-1] == 0) openCell(0, N*(N-1)+I-1); // влево-вверх
                if (mineField[0][N*(N-1)+I] == 0) openCell(0, N*(N-1)+I); // вверх
                if (mineField[0][N*(N-1)+I+1] == 0) openCell(0, N*(N-1)+I+1); // вверх-вправо
                break;

                case 2:
                if (mineField[0][N*(N-I+1)-1] == 0) openCell(0, N*(N-I+1)-1); // влево-вверх
                if (mineField[0][N*(N-I)-1] == 0) openCell(0, N*(N-I)-1); // вверх
                if (mineField[0][N*(N-I-1)-1] == 0) openCell(0, N*(N-I-1)-1); // вверх-вправо
                break;
                 
                case 3:
                if (mineField[0][N-I] == 0) openCell(0, N-I); // влево-вверх 
                if (mineField[0][N-I-1] == 0) openCell(0, N-I-1); // вверх 
                if (mineField[0][N-I-2] == 0) openCell(0, N-I-2); // вверх-вправо 
                break;
                
                case 4:
                if (mineField[0][N*(I-1)] == 0) openCell(0, N*(I-1)); // влево-вверх
                if (mineField[0][N*I] == 0) openCell(0, N*I); // вверх
                if (mineField[0][N*(I+1)] == 0) openCell(0, N*(I+1)); // вверх-вправо
                break;
                
                case 5:
                if (mineField[3][N*(N-1)+I-1] == 0) openCell(3, N*(N-1)+I-1); // влево-вверх
                if (mineField[3][N*(N-1)+I] == 0) openCell(3, N*(N-1)+I); // вверх
                if (mineField[3][N*(N-1)+I+1] == 0) openCell(3, N*(N-1)+I+1); // вверх-вправо
                break;
            } 
        }

        if ((I % N == 0) && (I != 0) && (I != N*(N-1))) // левая грань
        {
            if (mineField[K][I-N] == 0) openCell(K, I-N); // вверх
            if (mineField[K][I-N+1] == 0) openCell(K, I-N+1); // вправо-вверх
            if (mineField[K][I+1] == 0) openCell(K, I+1); // вправо
            if (mineField[K][I+N+1] == 0) openCell(K, I+N+1); // вправо-вниз
            if (mineField[K][I+N] == 0) openCell(K, I+N); // вниз
            switch (K)
            {
                case 0:
                if (mineField[4][(I / N >> 0)-1] == 0) openCell(4, (I / N >> 0)-1); // влево-вверх
                if (mineField[4][(I / N >> 0)] == 0) openCell(4, (I / N >> 0)); // влево
                if (mineField[4][(I / N >> 0)+1] == 0) openCell(4, (I / N >> 0)+1); // влево-вниз
                break;

                case 1:
                if (mineField[4][I-1] == 0) openCell(4, I-1); // влево-вверх
                if (mineField[4][I+N-1] == 0) openCell(4, I+N-1); // влево
                if (mineField[4][I+2*N-1] == 0) openCell(4, I+2*N-1); // влево-вниз
                break;

                case 2:
                if (mineField[1][I-1] == 0) openCell(1, I-1); // влево-вверх
                if (mineField[1][I+N-1] == 0) openCell(1, I+N-1); // влево
                if (mineField[1][I+2*N-1] == 0) openCell(1, I+2*N-1); // влево-вниз
                break;
                 
                case 3:
                if (mineField[2][I-1] == 0) openCell(2, I-1); // влево-вверх
                if (mineField[2][I+N-1] == 0) openCell(2, I+N-1); // влево
                if (mineField[2][I+2*N-1] == 0) openCell(2, I+2*N-1); // влево-вниз
                break;
                
                case 4:
                if (mineField[3][I-1] == 0) openCell(3, I-1); // влево-вверх
                if (mineField[3][I+N-1] == 0) openCell(3, I+N-1); // влево
                if (mineField[3][I+2*N-1] == 0) openCell(3, I+2*N-1); // влево-вниз
                break;
                
                case 5:
                if (mineField[2][N*N-(I / N >> 0)] == 0) openCell(2, N*N-(I / N >> 0)); // влево-вверх
                if (mineField[2][N*N-1-(I / N >> 0)] == 0) openCell(2, N*N-1-(I / N >> 0)); // влево
                if (mineField[2][N*N-2-(I / N >> 0)] == 0) openCell(2, N*N-2-(I / N >> 0)); // влево-вниз
                break;
            } 
        }

        if ((I % N == N-1) && (I != N-1) && (I != N*N-1)) // правая грань
        {
            if (mineField[K][I-N] == 0) openCell(K, I-N); // вверх
            if (mineField[K][I-N-1] == 0) openCell(K, I-N-1); // влево-вверх
            if (mineField[K][I-1] == 0) openCell(K, I-1); // влево
            if (mineField[K][I+N-1] == 0) openCell(K, I+N-1); // влево-вниз
            if (mineField[K][I+N] == 0) openCell(K, I+N); // вниз
            switch (K)
            {
                case 0:
                if (mineField[2][N-(I / N >> 0)] == 0) openCell(2, N-(I / N >> 0)); // вправо-вверх
                if (mineField[2][N-1-(I / N >> 0)] == 0) openCell(2, N-1-(I / N >> 0)); // вправо
                if (mineField[2][N-2-(I / N >> 0)] == 0) openCell(2, N-2-(I / N >> 0)); // вправо-вниз
                break;

                case 1:
                if (mineField[2][N*((I / N >> 0)-1)] == 0) openCell(2, N*((I / N >> 0)-1)); // вправо-вверх
                if (mineField[2][N*(I / N >> 0)] == 0) openCell(2, N*(I / N >> 0)); // вправо
                if (mineField[2][N*((I / N >> 0)+1)] == 0) openCell(2, N*((I / N >> 0)+1)); // вправо-вниз
                break;

                case 2:
                if (mineField[3][N*((I / N >> 0)-1)] == 0) openCell(3, N*((I / N >> 0)-1)); // вправо-вверх
                if (mineField[3][N*(I / N >> 0)] == 0) openCell(3, N*(I / N >> 0)); // вправо
                if (mineField[3][N*((I / N >> 0)+1)] == 0) openCell(3, N*((I / N >> 0)+1)); // вправо-вниз
                break;
                 
                case 3:
                if (mineField[4][N*((I / N >> 0)-1)] == 0) openCell(4, N*((I / N >> 0)-1)); // вправо-вверх
                if (mineField[4][N*(I / N >> 0)] == 0) openCell(4, N*(I / N >> 0)); // вправо
                if (mineField[4][N*((I / N >> 0)+1)] == 0) openCell(4, N*((I / N >> 0)+1)); // вправо-вниз
                break;
                
                case 4:
                if (mineField[1][N*((I / N >> 0)-1)] == 0) openCell(1, N*((I / N >> 0)-1)); // вправо-вверх
                if (mineField[1][N*(I / N >> 0)] == 0) openCell(1, N*(I / N >> 0)); // вправо
                if (mineField[1][N*((I / N >> 0)+1)] == 0) openCell(1, N*((I / N >> 0)+1)); // вправо-вниз
                break;
                
                case 5:
                if (mineField[4][N*(N-1)+(I / N >> 0)-1] == 0) openCell(4, N*(N-1)+(I / N >> 0)-1); // вправо-вверх
                if (mineField[4][N*(N-1)+(I / N >> 0)] == 0) openCell(4, N*(N-1)+(I / N >> 0)); // вправо
                if (mineField[4][N*(N-1)+(I / N >> 0)+1] == 0) openCell(4, N*(N-1)+(I / N >> 0)+1); // вправо-вниз
                break;
            } 
        }
        if ((I / N >> 0 == 7) && (I != N*(N-1)) && (I != N*N-1)) // нижняя грань
        {
            if (mineField[K][I-1] == 0) openCell(K, I-1); // влево
            if (mineField[K][I-N-1] == 0) openCell(K, I-N-1); // влево-вверх
            if (mineField[K][I-N] == 0) openCell(K, I-N); // вверх
            if (mineField[K][I-N+1] == 0) openCell(K, I-N+1); // вправо-вверх
            if (mineField[K][I+1] == 0) openCell(K, I+1); // вправо
            switch (K)
            {
                case 0:
                if (mineField[1][(I % N)-1] == 0) openCell(1, (I % N)-1); // вниз-влево
                if (mineField[1][(I % N)] == 0) openCell(1, (I % N)); // вниз
                if (mineField[1][(I % N)+1] == 0) openCell(1, (I % N)+1); // вниз-вправо
                break;

                case 1:
                if (mineField[5][N*N-(I % N)] == 0) openCell(5, N*N-(I % N)); // вниз-влево
                if (mineField[5][N*N-(I % N)-1] == 0) openCell(5, N*N-(I % N)-1); // вниз
                if (mineField[5][N*N-(I % N)-2] == 0) openCell(5, N*N-(I % N)-2); // вниз-вправо
                break;

                case 2:
                if (mineField[5][N*(N-(I % N))] == 0) openCell(5, N*(N-(I % N))); // вниз-влево
                if (mineField[5][N*(N-(I % N)-1)] == 0) openCell(5, N*(N-(I % N)-1)); // вниз
                if (mineField[5][N*(N-(I % N)-2)] == 0) openCell(5, N*(N-(I % N)-2)); // вниз-вправо
                break;
                 
                case 3:
                if (mineField[5][(I % N)-1] == 0) openCell(5, (I % N)-1); // вниз-влево
                if (mineField[5][(I % N)] == 0) openCell(5, (I % N)); // вниз
                if (mineField[5][(I % N)+1] == 0) openCell(5, (I % N)+1); // вниз-вправо
                break;
                
                case 4:
                if (mineField[5][(I % N)*N-1] == 0) openCell(5, (I % N)*N-1); // вниз-влево
                if (mineField[5][((I % N)+1)*N-1] == 0) openCell(5, ((I % N)+1)*N-1); // вниз
                if (mineField[5][((I % N)+2)*N-1] == 0) openCell(5, ((I % N)+2)*N-1); // вниз-вправо
                break;
                
                case 5:
                if (mineField[1][N*N-(I % N)] == 0) openCell(1, N*N-(I % N)); // вниз-влево
                if (mineField[1][N*N-(I % N)-1] == 0) openCell(1, N*N-(I % N)-1); // вниз
                if (mineField[1][N*N-(I % N)-2] == 0) openCell(1, N*N-(I % N)-2); // вниз-вправо
                break;
            } 
        }
        if ((I / N >> 0 != 0) && (I / N >> 0 != 7) && (I % N != 0) && (I % N != 7)) // не граничный случай
        {
            if (mineField[K][I-1] == 0) openCell(K, I-1); // влево
            if (mineField[K][I-1-N] == 0) openCell(K, I-1-N); // влево-вверх
            if (mineField[K][I-N] == 0) openCell(K, I-N); // вверх
            if (mineField[K][I-N+1] == 0) openCell(K, I-N+1); // вправо-вверх
            if (mineField[K][I+1] == 0) openCell(K, I+1); // вправо
            if (mineField[K][I+N+1] == 0) openCell(K, I+N+1); // вправо-вниз
            if (mineField[K][I+N] == 0) openCell(K, I+N); // вниз
            if (mineField[K][I+N-1] == 0) openCell(K, I+N-1); // влево-вниз
        }
    }
    switch(K)
    {
        case 0:
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button1').find('img').each(function(){
            if (this.alt == I) this.src = "images/"+mineField[0][this.alt]+".jpg";
        });
        break;

        case 1:
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button2').find('img').each(function(){
            if (this.alt == I) this.src = "images/"+mineField[1][this.alt]+".jpg";
        });
        break;

        case 2:
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button3').find('img').each(function(){
            if (this.alt == I) this.src = "images/"+mineField[2][this.alt]+".jpg";
        });
        break;

        case 3:
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button4').find('img').each(function(){
            if (this.alt == I) this.src = "images/"+mineField[3][this.alt]+".jpg";
        });
        break;

        case 4:
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button5').find('img').each(function(){
            if (this.alt == I) this.src = "images/"+mineField[4][this.alt]+".jpg";
        });
        break;

        case 5:
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button6').find('img').each(function(){
            if (this.alt == I) this.src = "images/"+mineField[5][this.alt]+".jpg";
        });
        break;
<<<<<<< HEAD
    }
    mineField[K][I] += 100;
=======
    } 
}
if ((I / N >> 0 != 0) && (I / N >> 0 != 7) && (I % N != 0) && (I % N != 7)) // не граничный случай
{
    if (mineField[K][I-1] == 0) openCell(K, I-1); // влево
    if (mineField[K][I-1-N] == 0) openCell(K, I-1-N); // влево-вверх
    if (mineField[K][I-N] == 0) openCell(K, I-N); // вверх
    if (mineField[K][I-N+1] == 0) openCell(K, I-N+1); // вправо-вверх
    if (mineField[K][I+1] == 0) openCell(K, I+1); // вправо
    if (mineField[K][I+N+1] == 0) openCell(K, I+N+1); // вправо-вниз
    if (mineField[K][I+N] == 0) openCell(K, I+N); // вниз
    if (mineField[K][I+N-1] == 0) openCell(K, I+N-1); // влево-вниз
}

switch(K){
    case 0:
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button1').find('img').each(function(img){
        if (this.alt == I) {
            this.src = "images/"+mineField[0][this.alt]+".jpg";
            alert('asd');
        }
    });
    break;

    case 1:
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button2').find('img').each(function(img){
        alert('asd');
        if (this.alt == I) {
            this.src = "images/"+mineField[1][this.alt]+".jpg";
            alert('asd');
        }
    });
    break;

    case 2:
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button3').find('img').each(function(img){
        if (this.alt == I) this.src = "images/"+mineField[2][this.alt]+".jpg";
    });
    break;

    case 3:
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button4').find('img').each(function(img){
        if (this.alt == I) this.src = "images/"+mineField[3][this.alt]+".jpg";
    });
    break;

    case 4:
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button5').find('img').each(function(img){
        if (this.alt == I) this.src = "images/"+mineField[4][this.alt]+".jpg";
    });
    break;

    case 5:
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button6').find('img').each(function(img){
        if (this.alt == I) this.src = "images/"+mineField[5][this.alt]+".jpg";
    });
    break;
}
mineField[K][I] += 100;
}
}