
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
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

var Play = function(){}

 Play.mineCount = function(mineField, K, I)
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
            if (mineField[0][N*(N-1)-(-I)-1] == 9) k++; // влево-вверх
            if (mineField[0][N*(N-1)-(-I)] == 9) k++; // вверх
            if (mineField[0][N*(N-1)-(-I)+1] == 9) k++; // вверх-вправо
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
            if (mineField[3][N*(N-1)-(-I)-1] == 9) k++; // влево-вверх
            if (mineField[3][N*(N-1)-(-I)] == 9) k++; // вверх
            if (mineField[3][N*(N-1)-(-I)+1] == 9) k++; // вверх-вправо
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

Play.openMe = function(K, I){
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button'+(K+1)).find('img').each(function(img){
            if (this.alt == I) {
                if(this.src.indexOf('white')+1){
                   this.src = "images/"+mineField[K][this.alt]+".jpg";
                }
            }
        });
    }

Play.openCell = function(K, I)
{
    N = 8;
    Play.openMe(K, I);
    if (mineField[K][I] == 0)
    {
        mineField[K][I] += 100;
        if (I == 0) // (левый верхний угол одной стороны)
        {
            Play.openCell(K, 1); // вправо
            Play.openCell(K, N+1); // вправо-вниз
            Play.openCell(K, N); // вниз
            switch (K)
            {
                case 0:
                Play.openCell(4, 0); // влево
                Play.openCell(4, 1); // влево-вниз
                Play.openCell(3, N-1); // вверх
                Play.openCell(3, N-2); // вверх вправо
                break;

                case 1:
                Play.openCell(4, N-1); // влево
                Play.openCell(4, 2*N-1); // влево-вниз
                Play.openCell(0, N*(N-1)); // вверх 
                Play.openCell(0, N*(N-1)+1); // вверх вправо 
                break;

                case 2:
                Play.openCell(1, N-1); // влево
                Play.openCell(1, 2*N-1); // влево-вниз
                Play.openCell(0, N*N-1); // вверх
                Play.openCell(0, N*(N-1)-1); // вверх вправо
                break;
                 
                case 3:
                Play.openCell(2, N-1); // влево
                Play.openCell(2, 2*N-1); // влево-вниз
                Play.openCell(0, N-1); // вверх
                Play.openCell(0, N-2); // вверх вправо
                break;
                
                case 4:
                Play.openCell(3, N-1); // влево
                Play.openCell(3, 2*N-1); // влево-вниз
                Play.openCell(0, 0); // вверх
                Play.openCell(0, N); // вверх вправо
                break;
                
                case 5:
                Play.openCell(2, N*N-1); // влево
                Play.openCell(2, N*N-2); // влево-вниз
                Play.openCell(3, N*(N-1)); // вверх
                Play.openCell(3, N*(N-1)+1); // вверх вправо
                break;
            } 
        }

        if (I == N-1) // (правый верхний угол одной стороны)
        {
            Play.openCell(K, N-2); // влево
            Play.openCell(K, 2*N-2); // влево-вниз
            Play.openCell(K, 2*N-1); // вниз
            switch (K)
            {
                case 0:
                Play.openCell(2, N-1); // вправо
                Play.openCell(2, N-2); // вправо-вниз
                Play.openCell(3, 0); // вверх
                Play.openCell(3, 1); // вверх-влево
                break;

                case 1:
                Play.openCell(2, 0); // вправо
                Play.openCell(2, N); // вправо-вниз
                Play.openCell(0, N*N-1); // вверх 
                Play.openCell(0, N*N-2); // вверх-влево 
                break;

                case 2:
                Play.openCell(3, 0); // вправо
                Play.openCell(3, N); // вправо-вниз
                Play.openCell(0, N-1); // вверх
                Play.openCell(0, 2*N-1); // вверх-влево
                break;
                 
                case 3:
                Play.openCell(4, 0); // вправо
                Play.openCell(4, N); // вправо-вниз
                Play.openCell(0, 0); // вверх
                Play.openCell(0, 1); // вверх-влево
                break;
                
                case 4:
                Play.openCell(1, 0); // вправо
                Play.openCell(1, N); // вправо-вниз
                Play.openCell(0, N*(N-1)); // вверх
                Play.openCell(0, N*(N-2)); // вверх-влево
                break;
                
                case 5:
                Play.openCell(4, N*(N-1)); // вправо
                Play.openCell(4, N*(N-1)+1); // вправо-вниз
                Play.openCell(3, N*N-1); // вверх
                Play.openCell(3, N*N-2); // вверх-влево
                break;
            } 
        }

        if (I == N*(N-1)) // (левый нижний угол одной стороны)
        {
            Play.openCell(K, N*(N-2)); // вверх
            Play.openCell(K, N*(N-2)+1); // вправо-вверх
            Play.openCell(K, N*(N-1)+1); // вправо
            switch (K)
            {
                case 0:
                Play.openCell(4, N-2); // влево-сверху
                Play.openCell(4, N-1); // влево
                Play.openCell(1, 0); // вниз
                Play.openCell(1, 1); // вниз-вправо
                break;

                case 1:
                Play.openCell(4, N*(N-1)-1); // влево-сверху
                Play.openCell(4, N*N-1); // влево
                Play.openCell(5, N*N-1); // вниз
                Play.openCell(5, N*N-2); // вниз-вправо
                break;

                case 2:
                Play.openCell(1, N*(N-1)-1); // влево-сверху
                Play.openCell(1, N*N-1); // влево
                Play.openCell(5, N*(N-1)); // вниз
                Play.openCell(5, N*(N-2)); // вниз-вправо
                break;
                 
                case 3:
                Play.openCell(2, N*(N-1)-1); // влево-сверху
                Play.openCell(2, N*N-1); // влево
                Play.openCell(5, 0); // вниз
                Play.openCell(5, 1); // вниз-вправо
                break;
                
                case 4:
                Play.openCell(3, N*(N-1)-1); // влево-сверху
                Play.openCell(3, N*N-1); // влево
                Play.openCell(5, N-1); // вниз
                Play.openCell(5, 2*N-1); // вниз-вправо
                break;
                
                case 5:
                Play.openCell(2, N*(N-1)+1); // вправо
                Play.openCell(2, N*(N-1)); // вправо-вниз
                Play.openCell(1, N*N-1); // вверх
                Play.openCell(1, N*N-2); // вверх-вправо
                break;
            } 
        }

        if (I == N*N-1) // (правый нижний угол одной стороны)
        {
            Play.openCell(K, N*(N-1)-1); // вверх
            Play.openCell(K, N*(N-1)-2); // влево-вверх
            Play.openCell(K, N*N-2); // влево
            switch (K)
            {
                case 0:
                Play.openCell(2, 1); // вправо-вверх
                Play.openCell(2, 0); // вправо
                Play.openCell(1, N-1); // вниз
                Play.openCell(1, N-2); // вниз-влево
                break;

                case 1:
                Play.openCell(2, N*(N-2)); // вправо-вверх
                Play.openCell(2, N*(N-1)); // вправо
                Play.openCell(5, N*(N-1)); // вниз
                Play.openCell(5, N*(N-1)+1); // вниз-влево
                break;

                case 2:
                Play.openCell(3, N*(N-2)); // вправо-вверх
                Play.openCell(3, N*(N-1)); // вправо
                Play.openCell(5, 0); // вниз
                Play.openCell(5, N); // вниз-влево
                break;
                 
                case 3:
                Play.openCell(4, N*(N-2)); // вправо-вверх
                Play.openCell(4, N*(N-1)); // вправо
                Play.openCell(5, N-1); // вниз
                Play.openCell(5, N-2); // вниз-влево
                break;
                
                case 4:
                Play.openCell(1, N*(N-2)); // вправо-вверх
                Play.openCell(1, N*(N-1)); // вправо
                Play.openCell(5, N*N-1); // вниз
                Play.openCell(5, N*(N-1)-1); // вниз-влево
                break;
                
                case 5:
                Play.openCell(4, N*N-2); // вправо-вверх
                Play.openCell(4, N*N-1); // вправо
                Play.openCell(1, N*(N-1)); // вниз
                Play.openCell(1, N*(N-1)+1); // вниз-влево
                break;
            } 
        }

        if ((I / N >> 0 == 0) && (I != 0) && (I != N-1)) // верхняя грань
        {
            Play.openCell(K, I-1); // влево
            Play.openCell(K, I-(-1)); // вправо
            Play.openCell(K, I-(-N)+1); // вправо-вниз
            Play.openCell(K, I-(-N)); // вниз
            Play.openCell(K, I-(-N)-1); // влево-вниз
            switch (K)
            {
                case 0:
                Play.openCell(3, N-I); // влево-вверх
                Play.openCell(3, N-I-1); // вверх
                Play.openCell(3, N-I-2); // вверх-вправо
                break;

                case 1:
                Play.openCell(0, N*(N-1)-(-I)-1); // влево-вверх
                Play.openCell(0, N*(N-1)-(-I)); // вверх
                Play.openCell(0, N*(N-1)-(-I)+1); // вверх-вправо
                break;

                case 2:
                Play.openCell(0, N*(N-I+1)-1); // влево-вверх
                Play.openCell(0, N*(N-I)-1); // вверх
                Play.openCell(0, N*(N-I-1)-1); // вверх-вправо
                break;
                 
                case 3:
                Play.openCell(0, N-I); // влево-вверх 
                Play.openCell(0, N-I-1); // вверх 
                Play.openCell(0, N-I-2); // вверх-вправо 
                break;
                
                case 4:
                Play.openCell(0, N*(I-1)); // влево-вверх
                Play.openCell(0, N*I); // вверх
                Play.openCell(0, N*(I-(-1))); // вверх-вправо
                break;
                
                case 5:
                Play.openCell(3, N*(N-1)-(-I)-1); // влево-вверх
                Play.openCell(3, N*(N-1)-(-I)); // вверх
                Play.openCell(3, N*(N-1)-(-I)+1); // вверх-вправо
                break;
            } 
        }

        if ((I % N == 0) && (I != 0) && (I != N*(N-1))) // левая грань
        {
            Play.openCell(K, I-N); // вверх
            Play.openCell(K, I-N+1); // вправо-вверх
            Play.openCell(K, I-(-1)); // вправо
            Play.openCell(K, I-(-N)+1); // вправо-вниз
            Play.openCell(K, I-(-N)); // вниз
            switch (K)
            {
                case 0:
                Play.openCell(4, (I / N >> 0)-1); // влево-вверх
                Play.openCell(4, (I / N >> 0)); // влево
                Play.openCell(4, (I / N >> 0)+1); // влево-вниз
                break;

                case 1:
                Play.openCell(4, I-1); // влево-вверх
                Play.openCell(4, I-(-N)-1); // влево
                Play.openCell(4, I-(-2*N)-1); // влево-вниз
                break;

                case 2:
                Play.openCell(1, I-1); // влево-вверх
                Play.openCell(1, I-(-N)-1); // влево
                Play.openCell(1, I-(-2*N)-1); // влево-вниз
                break;
                 
                case 3:
                Play.openCell(2, I-1); // влево-вверх
                Play.openCell(2, I-(-N)-1); // влево
                Play.openCell(2, I-(-2*N)-1); // влево-вниз
                break;
                
                case 4:
                Play.openCell(3, I-1); // влево-вверх
                Play.openCell(3, I-(-N)-1); // влево
                Play.openCell(3, I-(-2*N)-1); // влево-вниз
                break;
                
                case 5:
                Play.openCell(2, N*N-(I / N >> 0)); // влево-вверх
                Play.openCell(2, N*N-1-(I / N >> 0)); // влево
                Play.openCell(2, N*N-2-(I / N >> 0)); // влево-вниз
                break;
            } 
        }

        if ((I % N == N-1) && (I != N-1) && (I != N*N-1)) // правая грань
        {
            Play.openCell(K, I-N); // вверх
            Play.openCell(K, I-N-1); // влево-вверх
            Play.openCell(K, I-1); // влево
            Play.openCell(K, I-(-N)-1); // влево-вниз
            Play.openCell(K, I-(-N)); // вниз
            switch (K)
            {
                case 0:
                Play.openCell(2, N-(I / N >> 0)); // вправо-вверх
                Play.openCell(2, N-1-(I / N >> 0)); // вправо
                Play.openCell(2, N-2-(I / N >> 0)); // вправо-вниз
                break;

                case 1:
                Play.openCell(2, N*((I / N >> 0)-1)); // вправо-вверх
                Play.openCell(2, N*(I / N >> 0)); // вправо
                Play.openCell(2, N*((I / N >> 0)+1)); // вправо-вниз
                break;

                case 2:
                Play.openCell(3, N*((I / N >> 0)-1)); // вправо-вверх
                Play.openCell(3, N*(I / N >> 0)); // вправо
                Play.openCell(3, N*((I / N >> 0)+1)); // вправо-вниз
                break;
                 
                case 3:
                Play.openCell(4, N*((I / N >> 0)-1)); // вправо-вверх
                Play.openCell(4, N*(I / N >> 0)); // вправо
                Play.openCell(4, N*((I / N >> 0)+1)); // вправо-вниз
                break;
                
                case 4:
                Play.openCell(1, N*((I / N >> 0)-1)); // вправо-вверх
                Play.openCell(1, N*(I / N >> 0)); // вправо
                Play.openCell(1, N*((I / N >> 0)+1)); // вправо-вниз
                break;
                
                case 5:
                Play.openCell(4, N*(N-1)+(I / N >> 0)-1); // вправо-вверх
                Play.openCell(4, N*(N-1)+(I / N >> 0)); // вправо
                Play.openCell(4, N*(N-1)+(I / N >> 0)+1); // вправо-вниз
                break;
            } 
        }
        if ((I / N >> 0 == 7) && (I != N*(N-1)) && (I != N*N-1)) // нижняя грань
        {
            Play.openCell(K, I-1); // влево
            Play.openCell(K, I-1-(N)); // влево-вверх
            Play.openCell(K, I-0-(N)); // вверх
            Play.openCell(K, I-(-1)-(N)); // вправо-вверх
            Play.openCell(K, I-(-1)); // вправо
            switch (K)
            {
                case 0:
                Play.openCell(1, (I % N)-1); // вниз-влево
                Play.openCell(1, (I % N)); // вниз
                Play.openCell(1, (I % N)+1); // вниз-вправо
                break;

                case 1:
                Play.openCell(5, N*N-(I % N)); // вниз-влево
                Play.openCell(5, N*N-(I % N)-1); // вниз
                Play.openCell(5, N*N-(I % N)-2); // вниз-вправо
                break;

                case 2:
                Play.openCell(5, N*(N-(I % N))); // вниз-влево
                Play.openCell(5, N*(N-(I % N)-1)); // вниз
                Play.openCell(5, N*(N-(I % N)-2)); // вниз-вправо
                break;
                 
                case 3:
                Play.openCell(5, (I % N)-1); // вниз-влево
                Play.openCell(5, (I % N)); // вниз
                Play.openCell(5, (I % N)+1); // вниз-вправо
                break;
                
                case 4:
                Play.openCell(5, (I % N)*N-1); // вниз-влево
                Play.openCell(5, ((I % N)+1)*N-1); // вниз
                Play.openCell(5, ((I % N)+2)*N-1); // вниз-вправо
                break;
                
                case 5:
                Play.openCell(1, N*N-(I % N)); // вниз-влево
                Play.openCell(1, N*N-(I % N)-1); // вниз
                Play.openCell(1, N*N-(I % N)-2); // вниз-вправо
                break;
            } 
        }
        if ((I / N >> 0 != 0) && (I / N >> 0 != 7) && (I % N != 0) && (I % N != 7)) // не граничный случай
        {
            Play.openCell(K, I-(-N)+1); // вправо-вниз
            Play.openCell(K, I-(-N)); // вниз
            Play.openCell(K, I-(-N)-1); // влево-вниз
            Play.openCell(K, I-1); // влево
            Play.openCell(K, I-1-N); // влево-вверх
            Play.openCell(K, I-N); // вверх
            Play.openCell(K, I-N+1); // вправо-вверх
            Play.openCell(K, I-(-1)); // вправо
        }
    }
}

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

var Mine = function(){}


Mine.getRandomInt = function(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

Mine.randomMine = function(n){
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
            a = Mine.getRandomInt(0, 5);
            b = Mine.getRandomInt(0, 63);
        } while (mineField[a][b] == 9 || limit[a] > n/4)
        mineField[a][b] = 9;
        limit[a]++;
    }
    for(i=0;i<6;i++){
        for(j=0;j<64;j++){
            if(mineField[i][j] != 9){
                mineField[i][j] = Play.mineCount(mineField, i, j);
            }
        }
    }
    return(mineField)
}

Mine.writeMine = function(){
$('body').find('div#mines').find("font").each(function(){
    this.innerHTML = 'Осталось мин: ' + $s
});
}

var $s = location.search;
$mine_max = $s.substr(1-$s.length)
$s = $s.substr(1-$s.length)
mineField = Mine.randomMine($s);
Mine.writeMine()



$t = 00;
$h = 00;
$m = 00;
$time = $h+':'+$m+':'+$t
interval = setInterval(function(){
    $t++;
    $('body').find('div#time').find("font").each(function(){
        if ($t == 60){
            $m++;
            $t = 00;
        }
        if ($m == 60){
            $h++;
            $m = 00;
        }
        $time = $h+':'+$m+':'+$t
        this.innerHTML = $time
        });
    
}, 1000)

girls = setInterval(function(){
    $a = Mine.getRandomInt(3, 13);
    document.body.style.background="url(images/fon" + $a + ".jpg)"
},2000)

Play.openAll = function(){
    for (i=0;i<6;i++){
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('.button'+(i+1)).find('img').each(function(img) {
    this.src = "images/"+mineField[i][this.alt]+".jpg";
});
    }
}

Play.gameOver = function(){
    k = 0
    $('body').find('div#theEnd').each(function(){
        k=2
    });
    if (k == 0){
    $b = ('<div id=\'theEnd\' style=\'position:absolute;left:10px;top:400px\'><center> <h3>Ну что же, не всем быть гениальными саперами<br>' +
        'Потрачено времени на игру: ' + $time + ' </h3>' +
        '<a href = \"ready.html\"><h1>Начать сначала</h1></a></center></div>');
    $('body').each(function(){
        this.innerHTML += $b
        clearInterval(interval);
    });
}
}

Play.victory = function(){
    k=0
    $('body').find('div#theEnd').each(function(){
        k=2
    });
    if (k == 0){
    k = 0;
    q = 0;
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('img').each(function(){
        if (this.src.indexOf("white") + 1) k++
        if (this.src.indexOf("blood_mine") + 1) k=-1
        if (this.src.indexOf("flag") + 1) q++
    });
    $s = $mine_max - q
    Mine.writeMine()
    if (k==$s){
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('img').each(function(){
            if (this.src.indexOf("white") + 1) this.src = "images/flag.jpg"
        });
        clearInterval(interval);
        $b = ('<div id=\'theEnd\' style=\'position:absolute;left:10px;top:400px\'><center><h3> И это победа!<br>' +
            'Вы потратили на игру: ' + $time + '</h3>' +
            '<a href = \"ready.html\"><h1>Начать сначала</h1></a></center></div>');
        $('body').each(function(){
        this.innerHTML += $b
        $s = 0
    });
    }
    if (k==0){
        clearInterval(interval);
        $b = ('<div id=\'theEnd\' style=\'position:absolute;left:10px;top:200px\'><center><h3> И это победа!<br>' +
            'Вы потратили на игру: ' + $time + '</h3>' +
            '<button style=\"width:240px;height:80px\"><a href = \"ready.html\"><h1>Начать сначала</h1></a></button></center></div>');
        $('body').each(function(){
        this.innerHTML += $b
    });
    }
}
Mine.writeMine();
}


$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button').contextmenu(function(img) {
    $text = this.innerHTML
    if($text.indexOf("white") + 1){
        this.innerHTML = $text.replace('white', 'flag')
    }
    if($text.indexOf("flag") + 1){
        this.innerHTML = $text.replace('flag', 'white')
    }
    Play.victory();
    return false
 });

Play.clickCell = function(K, obj){
    $a = obj.innerHTML.substr(-4,2);
    $b = obj.innerHTML
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }
    if (!(obj.innerHTML.indexOf('flag')+1)){
    obj.innerHTML = obj.innerHTML.replace('white', mineField[K][$a])
    if (mineField[K][$a] == 0) {
        Play.openCell(K, $a);
    }
    if (mineField[K][$a] == 9) {
        Play.openAll()
        obj.innerHTML = $b.replace('white', 'blood_mine');

        Play.gameOver();
    }
}
Play.victory();
}


$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button1').click(function(img) {
    Play.clickCell(0, this)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button2').click(function(img) {
    Play.clickCell(1, this)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button3').click(function(img) {
    Play.clickCell(2, this)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button4').click(function(img) {
    Play.clickCell(3, this)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button5').click(function(img) {
    Play.clickCell(4, this)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button6').click(function(img) {
    Play.clickCell(5, this)
});


Play.isDead = function(){
    k = 0;
    $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('img').each(function(){
        if (this.src.indexOf('9.jpg')+1){
            k++;
            this.src = "images/blood_mine.jpg";
        }
    });
    if (k>0) {
        Play.openAll();
        Play.gameOver();
    }
}

Play.centerClick = function(K, obj, e){
    if (e.which == 2){
    $a = obj.innerHTML.substr(-4,2);
    $b = obj.innerHTML
    if ($a.substr(0,1) == '\"'){
        $a = $a.substr(-1)
    }

    $disposable = mineField[K][$a]
    if (!(obj.innerHTML.indexOf('flag')+1) && !(obj.innerHTML.indexOf('white')+1)){
        if (mineField[K][$a] == 9) {
        Play.openAll()
        obj.innerHTML = $b.replace('white', 'blood_mine');

        Play.gameOver();
    }

        Play.victory();
        mineField[K][$a] = 0;
        Play.openCell(K, $a);
        mineField[K][$a] = $disposable
        Play.isDead();
    }
}
}


$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button1').mousedown(function(e) {
    Play.centerClick(0, this, e)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button2').mousedown(function(e) {
    Play.centerClick(1, this, e)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button3').mousedown(function(e) {
    Play.centerClick(2, this, e)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button4').mousedown(function(e) {
    Play.centerClick(3, this, e)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button5').mousedown(function(e) {
    Play.centerClick(4, this, e)
});

$('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button6').mousedown(function(e) {
    Play.centerClick(5, this, e)
});


Play.ifFlag = function(K, I){
        $('body').find('div.wrapper').find('div#experiment').find('div#cube').find('button.button'+(K+1)).find('img').each(function(img){
            if (this.alt == I) {
                if(this.src.indexOf('flag')+1){
                   $s = 1
                }
                else{
                    $s = 0
                }
            }
        });
    return $s
}
