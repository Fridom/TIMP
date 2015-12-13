function openCell (K, I)
{
    k = 0;
    N = 8;
if (I == 0) // (левый верхний угол одной стороны)
{
    if (mineField[K][1] == 0) openCell(K, 1); // вправо
    if (mineField[K][N+1] == 0) k++; // вправо-вниз
    if (mineField[K][N] == 0) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[4][0] == 0) k++; // влево
        if (mineField[4][1] == 0) k++; // влево-вниз
        if (mineField[3][N-1] == 0) k++; // вверх
        if (mineField[3][N-2] == 0) k++; // вверх вправо
        break;

        case 1:
        if (mineField[4][N-1] == 0) k++; // влево
        if (mineField[4][2*N-1] == 0) k++; // влево-вниз
        if (mineField[0][N*(N-1)] == 0) k++; // вверх 
        if (mineField[0][N*(N-1)+1] == 0) k++; // вверх вправо 
        break;

        case 2:
        if (mineField[1][N-1] == 0) k++; // влево
        if (mineField[1][2*N-1] == 0) k++; // влево-вниз
        if (mineField[0][N*N-1] == 0) k++; // вверх
        if (mineField[0][N*(N-1)-1] == 0) k++; // вверх вправо
        break;
         
        case 3:
        if (mineField[2][N-1] == 0) k++; // влево
        if (mineField[2][2*N-1] == 0) k++; // влево-вниз
        if (mineField[0][N-1] == 0) k++; // вверх
        if (mineField[0][N-2] == 0) k++; // вверх вправо
        break;
        
        case 4:
        if (mineField[3][N-1] == 0) k++; // влево
        if (mineField[3][2*N-1] == 0) k++; // влево-вниз
        if (mineField[0][0] == 0) k++; // вверх
        if (mineField[0][N] == 0) k++; // вверх вправо
        break;
        
        case 5:
        if (mineField[2][N*N-1] == 0) k++; // влево
        if (mineField[2][N*N-2] == 0) k++; // влево-вниз
        if (mineField[3][N*(N-1)] == 0) k++; // вверх
        if (mineField[3][N*(N-1)+1] == 0) k++; // вверх вправо
        break;
    } 
}

if (I == N-1) // (правый верхний угол одной стороны)
{
    if (mineField[K][N-2] == 0) k++; // влево
    if (mineField[K][2*N-2] == 0) k++; // влево-вниз
    if (mineField[K][2*N-1] == 0) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[2][N-1] == 0) k++; // вправо
        if (mineField[2][N-2] == 0) k++; // вправо-вниз
        if (mineField[3][0] == 0) k++; // вверх
        if (mineField[3][1] == 0) k++; // вверх-влево
        break;

        case 1:
        if (mineField[2][0] == 0) k++; // вправо
        if (mineField[2][N] == 0) k++; // вправо-вниз
        if (mineField[0][N*N-1] == 0) k++; // вверх 
        if (mineField[0][N*N-2] == 0) k++; // вверх-влево 
        break;

        case 2:
        if (mineField[3][0] == 0) k++; // вправо
        if (mineField[3][N] == 0) k++; // вправо-вниз
        if (mineField[0][N-1] == 0) k++; // вверх
        if (mineField[0][2*N-1] == 0) k++; // вверх-влево
        break;
         
        case 3:
        if (mineField[4][0] == 0) k++; // вправо
        if (mineField[4][N] == 0) k++; // вправо-вниз
        if (mineField[0][0] == 0) k++; // вверх
        if (mineField[0][1] == 0) k++; // вверх-влево
        break;
        
        case 4:
        if (mineField[1][0] == 0) k++; // вправо
        if (mineField[1][N] == 0) k++; // вправо-вниз
        if (mineField[0][N*(N-1)] == 0) k++; // вверх
        if (mineField[0][N*(N-2)] == 0) k++; // вверх-влево
        break;
        
        case 5:
        if (mineField[4][N*(N-1)] == 0) k++; // вправо
        if (mineField[4][N*(N-1)+1] == 0) k++; // вправо-вниз
        if (mineField[3][N*N-1] == 0) k++; // вверх
        if (mineField[3][N*N-2] == 0) k++; // вверх-влево
        break;
    } 
}

if (I == N*(N-1)) // (левый нижний угол одной стороны)
{
    if (mineField[K][N*(N-2)] == 0) k++; // вверх
    if (mineField[K][N*(N-2)+1] == 0) k++; // вправо-вверх
    if (mineField[K][N*(N-1)+1] == 0) k++; // вправо
    switch (K)
    {
        case 0:
        if (mineField[4][N-2] == 0) k++; // влево-сверху
        if (mineField[4][N-1] == 0) k++; // влево
        if (mineField[1][0] == 0) k++; // вниз
        if (mineField[1][1] == 0) k++; // вниз-вправо
        break;

        case 1:
        if (mineField[4][N*(N-1)-1] == 0) k++; // влево-сверху
        if (mineField[4][N*N-1] == 0) k++; // влево
        if (mineField[5][N*N-1] == 0) k++; // вниз
        if (mineField[5][N*N-2] == 0) k++; // вниз-вправо
        break;

        case 2:
        if (mineField[1][N*(N-1)-1] == 0) k++; // влево-сверху
        if (mineField[1][N*N-1] == 0) k++; // влево
        if (mineField[5][N*(N-1)] == 0) k++; // вниз
        if (mineField[5][N*(N-2)] == 0) k++; // вниз-вправо
        break;
         
        case 3:
        if (mineField[2][N*(N-1)-1] == 0) k++; // влево-сверху
        if (mineField[2][N*N-1] == 0) k++; // влево
        if (mineField[5][0] == 0) k++; // вниз
        if (mineField[5][1] == 0) k++; // вниз-вправо
        break;
        
        case 4:
        if (mineField[3][N*(N-1)-1] == 0) k++; // влево-сверху
        if (mineField[3][N*N-1] == 0) k++; // влево
        if (mineField[5][N-1] == 0) k++; // вниз
        if (mineField[5][2*N-1] == 0) k++; // вниз-вправо
        break;
        
        case 5:
        if (mineField[2][N*(N-1)+1] == 0) k++; // вправо
        if (mineField[2][N*(N-1)] == 0) k++; // вправо-вниз
        if (mineField[1][N*N-1] == 0) k++; // вверх
        if (mineField[1][N*N-2] == 0) k++; // вверх-вправо
        break;
    } 
}

if (I == N*N-1) // (правый нижний угол одной стороны)
{
    if (mineField[K][N*(N-1)-1] == 0) k++; // вверх
    if (mineField[K][N*(N-2)-2] == 0) k++; // влево-вверх
    if (mineField[K][N*N-2] == 0) k++; // влево
    switch (K)
    {
        case 0:
        if (mineField[2][1] == 0) k++; // вправо-вверх
        if (mineField[2][0] == 0) k++; // вправо
        if (mineField[1][N-1] == 0) k++; // вниз
        if (mineField[1][N-2] == 0) k++; // вниз-влево
        break;

        case 1:
        if (mineField[2][N*(N-2)] == 0) k++; // вправо-вверх
        if (mineField[2][N*(N-1)] == 0) k++; // вправо
        if (mineField[5][N*(N-1)] == 0) k++; // вниз
        if (mineField[5][N*(N-1)+1] == 0) k++; // вниз-влево
        break;

        case 2:
        if (mineField[3][N*(N-2)] == 0) k++; // вправо-вверх
        if (mineField[3][N*(N-1)] == 0) k++; // вправо
        if (mineField[5][0] == 0) k++; // вниз
        if (mineField[5][N] == 0) k++; // вниз-влево
        break;
         
        case 3:
        if (mineField[4][N*(N-2)] == 0) k++; // вправо-вверх
        if (mineField[4][N*(N-1)] == 0) k++; // вправо
        if (mineField[5][N-1] == 0) k++; // вниз
        if (mineField[5][N-2] == 0) k++; // вниз-влево
        break;
        
        case 4:
        if (mineField[1][N*(N-2)] == 0) k++; // вправо-вверх
        if (mineField[1][N*(N-1)] == 0) k++; // вправо
        if (mineField[5][N*N-1] == 0) k++; // вниз
        if (mineField[5][N*(N-1)-1] == 0) k++; // вниз-влево
        break;
        
        case 5:
        if (mineField[4][N*N-2] == 0) k++; // вправо-вверх
        if (mineField[4][N*N-1] == 0) k++; // вправо
        if (mineField[1][N*(N-1)] == 0) k++; // вниз
        if (mineField[1][N*(N-1)+1] == 0) k++; // вниз-влево
        break;
    } 
}

if ((I / N >> 0 == 0) && (I != 0) && (I != N-1)) // верхняя грань
{
    if (mineField[K][I-1] == 0) k++; // влево
    if (mineField[K][I+1] == 0) k++; // вправо
    if (mineField[K][I+N+1] == 0) k++; // вправо-вниз
    if (mineField[K][I+N] == 0) k++; // вниз
    if (mineField[K][I+N-1] == 0) k++; // влево-вниз
    switch (K)
    {
        case 0:
        if (mineField[3][N-I] == 0) k++; // влево-вверх
        if (mineField[3][N-I-1] == 0) k++; // вверх
        if (mineField[3][N-I-2] == 0) k++; // вверх-вправо
        break;

        case 1:
        if (mineField[0][N*(N-1)+I-1] == 0) k++; // влево-вверх
        if (mineField[0][N*(N-1)+I] == 0) k++; // вверх
        if (mineField[0][N*(N-1)+I+1] == 0) k++; // вверх-вправо
        break;

        case 2:
        if (mineField[0][N*(N-I+1)-1] == 0) k++; // влево-вверх
        if (mineField[0][N*(N-I)-1] == 0) k++; // вверх
        if (mineField[0][N*(N-I-1)-1] == 0) k++; // вверх-вправо
        break;
         
        case 3:
        if (mineField[0][N-I] == 0) k++; // влево-вверх 
        if (mineField[0][N-I-1] == 0) k++; // вверх 
        if (mineField[0][N-I-2] == 0) k++; // вверх-вправо 
        break;
        
        case 4:
        if (mineField[0][N*(I-1)] == 0) k++; // влево-вверх
        if (mineField[0][N*I] == 0) k++; // вверх
        if (mineField[0][N*(I+1)] == 0) k++; // вверх-вправо
        break;
        
        case 5:
        if (mineField[3][N*(N-1)+I-1] == 0) k++; // влево-вверх
        if (mineField[3][N*(N-1)+I] == 0) k++; // вверх
        if (mineField[3][N*(N-1)+I+1] == 0) k++; // вверх-вправо
        break;
    } 
}

if ((I % N == 0) && (I != 0) && (I != N*(N-1))) // левая грань
{
    if (mineField[K][I-N] == 0) k++; // вверх
    if (mineField[K][I-N+1] == 0) k++; // вправо-вверх
    if (mineField[K][I+1] == 0) k++; // вправо
    if (mineField[K][I+N+1] == 0) k++; // вправо-вниз
    if (mineField[K][I+N] == 0) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[4][(I / N >> 0)-1] == 0) k++; // влево-вверх
        if (mineField[4][(I / N >> 0)] == 0) k++; // влево
        if (mineField[4][(I / N >> 0)+1] == 0) k++; // влево-вниз
        break;

        case 1:
        if (mineField[4][I-1] == 0) k++; // влево-вверх
        if (mineField[4][I+N-1] == 0) k++; // влево
        if (mineField[4][I+2*N-1] == 0) k++; // влево-вниз
        break;

        case 2:
        if (mineField[1][I-1] == 0) k++; // влево-вверх
        if (mineField[1][I+N-1] == 0) k++; // влево
        if (mineField[1][I+2*N-1] == 0) k++; // влево-вниз
        break;
         
        case 3:
        if (mineField[2][I-1] == 0) k++; // влево-вверх
        if (mineField[2][I+N-1] == 0) k++; // влево
        if (mineField[2][I+2*N-1] == 0) k++; // влево-вниз
        break;
        
        case 4:
        if (mineField[3][I-1] == 0) k++; // влево-вверх
        if (mineField[3][I+N-1] == 0) k++; // влево
        if (mineField[3][I+2*N-1] == 0) k++; // влево-вниз
        break;
        
        case 5:
        if (mineField[2][N*N-(I / N >> 0)] == 0) k++; // влево-вверх
        if (mineField[2][N*N-1-(I / N >> 0)] == 0) k++; // влево
        if (mineField[2][N*N-2-(I / N >> 0)] == 0) k++; // влево-вниз
        break;
    } 
}

if ((I % N == N-1) && (I != N-1) && (I != N*N-1)) // правая грань
{
    if (mineField[K][I-N] == 0) k++; // вверх
    if (mineField[K][I-N-1] == 0) k++; // влево-вверх
    if (mineField[K][I-1] == 0) k++; // влево
    if (mineField[K][I+N-1] == 0) k++; // влево-вниз
    if (mineField[K][I+N] == 0) k++; // вниз
    switch (K)
    {
        case 0:
        if (mineField[2][N-(I / N >> 0)] == 0) k++; // вправо-вверх
        if (mineField[2][N-1-(I / N >> 0)] == 0) k++; // вправо
        if (mineField[2][N-2-(I / N >> 0)] == 0) k++; // вправо-вниз
        break;

        case 1:
        if (mineField[2][N*((I / N >> 0)-1)] == 0) k++; // вправо-вверх
        if (mineField[2][N*(I / N >> 0)] == 0) k++; // вправо
        if (mineField[2][N*((I / N >> 0)+1)] == 0) k++; // вправо-вниз
        break;

        case 2:
        if (mineField[3][N*((I / N >> 0)-1)] == 0) k++; // вправо-вверх
        if (mineField[3][N*(I / N >> 0)] == 0) k++; // вправо
        if (mineField[3][N*((I / N >> 0)+1)] == 0) k++; // вправо-вниз
        break;
         
        case 3:
        if (mineField[4][N*((I / N >> 0)-1)] == 0) k++; // вправо-вверх
        if (mineField[4][N*(I / N >> 0)] == 0) k++; // вправо
        if (mineField[4][N*((I / N >> 0)+1)] == 0) k++; // вправо-вниз
        break;
        
        case 4:
        if (mineField[1][N*((I / N >> 0)-1)] == 0) k++; // вправо-вверх
        if (mineField[1][N*(I / N >> 0)] == 0) k++; // вправо
        if (mineField[1][N*((I / N >> 0)+1)] == 0) k++; // вправо-вниз
        break;
        
        case 5:
        if (mineField[4][N*(N-1)+(I / N >> 0)-1] == 0) k++; // вправо-вверх
        if (mineField[4][N*(N-1)+(I / N >> 0)] == 0) k++; // вправо
        if (mineField[4][N*(N-1)+(I / N >> 0)+1] == 0) k++; // вправо-вниз
        break;
    } 
}
if ((I / N >> 0 == 7) && (I != N*(N-1)) && (I != N*N-1)) // нижняя грань
{
    if (mineField[K][I-1] == 0) k++; // влево
    if (mineField[K][I-N-1] == 0) k++; // влево-вверх
    if (mineField[K][I-N] == 0) k++; // вверх
    if (mineField[K][I-N+1] == 0) k++; // вправо-вверх
    if (mineField[K][I+1] == 0) k++; // вправо
    switch (K)
    {
        case 0:
        if (mineField[1][(I % N)-1] == 0) k++; // вниз-влево
        if (mineField[1][(I % N)] == 0) k++; // вниз
        if (mineField[1][(I % N)+1] == 0) k++; // вниз-вправо
        break;

        case 1:
        if (mineField[5][N*N-(I % N)] == 0) k++; // вниз-влево
        if (mineField[5][N*N-(I % N)-1] == 0) k++; // вниз
        if (mineField[5][N*N-(I % N)-2] == 0) k++; // вниз-вправо
        break;

        case 2:
        if (mineField[5][N*(N-(I % N))] == 0) k++; // вниз-влево
        if (mineField[5][N*(N-(I % N)-1)] == 0) k++; // вниз
        if (mineField[5][N*(N-(I % N)-2)] == 0) k++; // вниз-вправо
        break;
         
        case 3:
        if (mineField[5][(I % N)-1] == 0) k++; // вниз-влево
        if (mineField[5][(I % N)] == 0) k++; // вниз
        if (mineField[5][(I % N)+1] == 0) k++; // вниз-вправо
        break;
        
        case 4:
        if (mineField[5][(I % N)*N-1] == 0) k++; // вниз-влево
        if (mineField[5][((I % N)+1)*N-1] == 0) k++; // вниз
        if (mineField[5][((I % N)+2)*N-1] == 0) k++; // вниз-вправо
        break;
        
        case 5:
        if (mineField[1][N*N-(I % N)] == 0) k++; // вниз-влево
        if (mineField[1][N*N-(I % N)-1] == 0) k++; // вниз
        if (mineField[1][N*N-(I % N)-2] == 0) k++; // вниз-вправо
        break;
    } 
}
if ((I / N >> 0 != 0) && (I / N >> 0 != 7) && (I % N != 0) && (I % N != 7)) // не граничный случай
{
    if (mineField[K][I-1] == 0) k++; // влево
    if (mineField[K][I-1-N] == 0) k++; // влево-вверх
    if (mineField[K][I-N] == 0) k++; // вверх
    if (mineField[K][I-N+1] == 0) k++; // вправо-вверх
    if (mineField[K][I+1] == 0) k++; // вправо
    if (mineField[K][I+N+1] == 0) k++; // вправо-вниз
    if (mineField[K][I+N] == 0) k++; // вниз
    if (mineField[K][I+N-1] == 0) k++; // влево-вниз
}
return k;
}