function openCell (K, I)
{
    k = 0;
    N = 8;
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

switch(K):{
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
}