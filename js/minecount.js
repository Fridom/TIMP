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
		if (mineField[0][2*N-1)] == 9) k++; // вверх-влево
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
		if (mineField[4][N*N-1)] == 9) k++; // влево
		if (mineField[5][N*N-1] == 9) k++; // вниз
		if (mineField[5][N*N-2] == 9) k++; // вниз-вправо
		break;

		case 2:
		if (mineField[1][N*(N-1)-1] == 9) k++; // влево-сверху
		if (mineField[1][N*N-1)] == 9) k++; // влево
		if (mineField[5][N*(N-1)] == 9) k++; // вниз
		if (mineField[5][N*(N-2)] == 9) k++; // вниз-вправо
		break;
		 
		case 3:
		if (mineField[2][N*(N-1)-1] == 9) k++; // влево-сверху
		if (mineField[2][N*N-1)] == 9) k++; // влево
		if (mineField[5][0] == 9) k++; // вниз
		if (mineField[5][1] == 9) k++; // вниз-вправо
		break;
		
		case 4:
		if (mineField[3][N*(N-1)-1] == 9) k++; // влево-сверху
		if (mineField[3][N*N-1)] == 9) k++; // влево
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

if ((I div N == 0) and (I != 0) and (I != N-1)) // верхняя грань
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
		if (mineField[0][N*(I-1))] == 9) k++; // влево-вверх
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

if ((I mod N == 0) and (I != 0) and (I != N*(N-1))) // левая грань
{
	if (mineField[K][I-N] == 9) k++; // вверх
	if (mineField[K][I-N+1] == 9) k++; // вправо-вверх
	if (mineField[K][I+1] == 9) k++; // вправо
	if (mineField[K][I+N+1] == 9) k++; // вправо-вниз
	if (mineField[K][I+N] == 9) k++; // вниз
	switch (K)
	{
		case 0:
		if (mineField[1][(I div N)-1] == 9) k++; // влево-вверх
		if (mineField[1][(I div N)] == 9) k++; // влево
		if (mineField[1][(I div N)+1] == 9) k++; // влево-вниз
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
		if (mineField[2][N*N-(I div N)] == 9) k++; // влево-вверх
		if (mineField[2][N*N-1-(I div N)] == 9) k++; // влево
		if (mineField[2][N*N-2-(I div N)] == 9) k++; // влево-вниз
		break;
	} 
}

if ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // правая грань
{
	if (mineField[K][I-N] == 9) k++; // вверх
	if (mineField[K][I-N-1] == 9) k++; // влево-вверх
	if (mineField[K][I-1] == 9) k++; // влево
	if (mineField[K][I+N-1] == 9) k++; // влево-вниз
	if (mineField[K][I+N] == 9) k++; // вниз
	switch (K)
	{
		case 0:
		if (mineField[3][N-(I div N)] == 9) k++; // вправо-вверх
		if (mineField[3][N-1-(I div N)] == 9) k++; // вправо
		if (mineField[3][N-2-(I div N)+1] == 9) k++; // вправо-вниз
		break;

		case 1:
		if (mineField[2][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (mineField[2][N*(I div N)] == 9) k++; // вправо
		if (mineField[2][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;

		case 2:
		if (mineField[3][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (mineField[3][N*(I div N)] == 9) k++; // вправо
		if (mineField[3][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		 
		case 3:
		if (mineField[4][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (mineField[4][N*(I div N)] == 9) k++; // вправо
		if (mineField[4][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		
		case 4:
		if (mineField[1][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (mineField[1][N*(I div N)] == 9) k++; // вправо
		if (mineField[1][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		
		case 5:
		if (mineField[2][N*(N-1)+(I div N)-1] == 9) k++; // вправо-вверх
		if (mineField[2][N*(N-1)+(I div N)] == 9) k++; // вправо
		if (mineField[2][N*(N-1)+(I div N)+1] == 9) k++; // вправо-вниз
		break;
	} 
}

if ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // нижняя грань
{
	if (mineField[K][I-1] == 9) k++; // влево
	if (mineField[K][I-N-1] == 9) k++; // влево-вверх
	if (mineField[K][I-N] == 9) k++; // вверх
	if (mineField[K][I-N+1] == 9) k++; // вправо-вверх
	if (mineField[K][I+1] == 9) k++; // вправо
	switch (K)
	{
		case 0:
		if (mineField[2][(I mod N)-1] == 9) k++; // вниз-влево
		if (mineField[2][(I mod N)] == 9) k++; // вниз
		if (mineField[2][(I mod N)+1] == 9) k++; // вниз-вправо
		break;

		case 1:
		if (mineField[5][N*N-(I mod N)] == 9) k++; // вниз-влево
		if (mineField[5][N*N-(I mod N)-1] == 9) k++; // вниз
		if (mineField[5][N*N-(I mod N)-2] == 9) k++; // вниз-вправо
		break;

		case 2:
		if (mineField[5][N*(N-(I mod N))] == 9) k++; // вниз-влево
		if (mineField[5][N*(N-(I mod N)-1)] == 9) k++; // вниз
		if (mineField[5][N*(N-(I mod N)-2)] == 9) k++; // вниз-вправо
		break;
		 
		case 3:
		if (mineField[5][(I mod N)-1] == 9) k++; // вниз-влево
		if (mineField[5][(I mod N)] == 9) k++; // вниз
		if (mineField[5][(I mod N)+1] == 9) k++; // вниз-вправо
		break;
		
		case 4:
		if (mineField[5][(I mod N)*N-1] == 9) k++; // вниз-влево
		if (mineField[5][((I mod N)+1)*N-1] == 9) k++; // вниз
		if (mineField[5][((I mod N)+2)*N-1] == 9) k++; // вниз-вправо
		break;
		
		case 5:
		if (mineField[1][N*N-(I mod N)] == 9) k++; // вниз-влево
		if (mineField[1][N*N-(I mod N)-1] == 9) k++; // вниз
		if (mineField[1][N*N-(I mod N)-2] == 9) k++; // вниз-вправо
		break;
	} 
}
if ((I div N != 0) and (I div N != 7) and (I mod N != 0) and (I mod N != 7))
{
	if (mineFiled[K][I-1] == 9) k++; // влево
	if (mineFiled[K][I-1-N] == 9) k++; // влево-вверх
	if (mineFiled[K][I-N] == 9) k++; // вверх
	if (mineFiled[K][I-N+1] == 9) k++; // вправо-вверх
	if (mineFiled[K][I+1] == 9) k++; // вправо
	if (mineFiled[K][I+N+1] == 9) k++; // вправо-вниз
	if (mineFiled[K][I+N] == 9) k++; // вниз
	if (mineFiled[K][I+N-1] == 9) k++; // влево-вниз
}
return k;
}