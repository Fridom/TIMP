I // номер ячейки, куда вставляем
k // переменная, необходимая для подсчёта мин вокруг
N // размер куба (8)
K // сторона, в которую вставляем число
if (I == 0) // (левый верхний угол одной стороны)
{
	if (minefield[K][1] == 9) k++; // вправо
	if (minefield[K][N+1] == 9) k++; // вправо-вниз
	if (minefield[K][N] == 9) k++; // вниз
	switch (K)
	{
		case 0:
		if (minefield[1][0] == 9) k++; // влево
		if (minefield[1][1] == 9) k++; // влево-вниз
		if (minefield[4][N-1] == 9) k++; // вверх
		if (minefield[4][N-2] == 9) k++; // вверх вправо
		break;

		case 1:
		if (minefield[4][N-1] == 9) k++; // влево
		if (minefield[4][2*N-1] == 9) k++; // влево-вниз
		if (minefield[0][0] == 9) k++; // вверх
		if (minefield[0][N] == 9) k++; // вверх вправо
		break;

		case 2:
		if (minefield[1][N-1] == 9) k++; // влево
		if (minefield[1][2*N-1] == 9) k++; // влево-вниз
		if (minefield[0][N*(N-1)] == 9) k++; // вверх
		if (minefield[0][N*(N-1)+1] == 9) k++; // вверх вправо
		break;
		 
		case 3:
		if (minefield[2][N-1] == 9) k++; // влево
		if (minefield[2][2*N-1] == 9) k++; // влево-вниз
		if (minefield[0][N*N-1] == 9) k++; // вверх
		if (minefield[0][N*(N-1)-1] == 9) k++; // вверх вправо
		break;
		
		case 4:
		if (minefield[3][N-1] == 9) k++; // влево
		if (minefield[3][2*N-1] == 9) k++; // влево-вниз
		if (minefield[0][N-1] == 9) k++; // вверх
		if (minefield[0][N-2] == 9) k++; // вверх вправо
		break;
		
		case 5:
		if (minefield[2][N*N-1] == 9) k++; // влево
		if (minefield[2][N*N-2] == 9) k++; // влево-вниз
		if (minefield[3][N*(N-1)] == 9) k++; // вверх
		if (minefield[3][N*(N-1)+1] == 9) k++; // вверх вправо
		break;
	}
	minefield[K][I] = k;
}

if (I == N-1) // (правый верхний угол одной стороны)
{
	if (minefield[K][N-2] == 9) k++; // влево
	if (minefield[K][2*N-2] == 9) k++; // влево-вниз
	if (minefield[K][2*N-1] == 9) k++; // вниз
	switch (K)
	{
		case 0:
		if (minefield[3][N-1] == 9) k++; // вправо
		if (minefield[3][N-2] == 9) k++; // вправо-вниз
		if (minefield[4][0] == 9) k++; // вверх
		if (minefield[4][1] == 9) k++; // вверх-влево
		break;

		case 1:
		if (minefield[2][0] == 9) k++; // вправо
		if (minefield[2][N] == 9) k++; // вправо-вниз
		if (minefield[0][N*(N-1)] == 9) k++; // вверх
		if (minefield[0][N*(N-2)] == 9) k++; // вверх-влево
		break;

		case 2:
		if (minefield[3][0] == 9) k++; // вправо
		if (minefield[3][N] == 9) k++; // вправо-вниз
		if (minefield[0][N*N-1] == 9) k++; // вверх
		if (minefield[0][N*N-2] == 9) k++; // вверх-влево
		break;
		 
		case 3:
		if (minefield[4][0] == 9) k++; // вправо
		if (minefield[4][N] == 9) k++; // вправо-вниз
		if (minefield[0][N-1] == 9) k++; // вверх
		if (minefield[0][2*N-1)] == 9) k++; // вверх-влево
		break;
		
		case 4:
		if (minefield[1][0] == 9) k++; // вправо
		if (minefield[1][N] == 9) k++; // вправо-вниз
		if (minefield[0][0] == 9) k++; // вверх
		if (minefield[0][1] == 9) k++; // вверх-влево
		break;
		
		case 5:
		if (minefield[4][N*(N-1)] == 9) k++; // вправо
		if (minefield[4][N*(N-1)+1] == 9) k++; // вправо-вниз
		if (minefield[3][N*N-1] == 9) k++; // вверх
		if (minefield[3][N*N-2] == 9) k++; // вверх-влево
		break;
	}
	minefield[K][I] = k;
}

if (I == N*(N-1)) // (левый нижний угол одной стороны)
{
	if (minefield[K][N*(N-2)] == 9) k++; // вверх
	if (minefield[K][N*(N-2)+1] == 9) k++; // вправо-вверх
	if (minefield[K][N*(N-1)+1] == 9) k++; // вправо
	switch (K)
	{
		case 0:
		if (minefield[1][N-2] == 9) k++; // влево-сверху
		if (minefield[1][N-1] == 9) k++; // влево
		if (minefield[2][0] == 9) k++; // вниз
		if (minefield[2][1] == 9) k++; // вниз-вправо
		break;

		case 1:
		if (minefield[4][N*(N-1)-1] == 9) k++; // влево-сверху
		if (minefield[4][N*N-1)] == 9) k++; // влево
		if (minefield[5][N*N-1] == 9) k++; // вниз
		if (minefield[5][N*N-2] == 9) k++; // вниз-вправо
		break;

		case 2:
		if (minefield[1][N*(N-1)-1] == 9) k++; // влево-сверху
		if (minefield[1][N*N-1)] == 9) k++; // влево
		if (minefield[5][N*(N-1)] == 9) k++; // вниз
		if (minefield[5][N*(N-2)] == 9) k++; // вниз-вправо
		break;
		 
		case 3:
		if (minefield[2][N*(N-1)-1] == 9) k++; // влево-сверху
		if (minefield[2][N*N-1)] == 9) k++; // влево
		if (minefield[5][0] == 9) k++; // вниз
		if (minefield[5][1] == 9) k++; // вниз-вправо
		break;
		
		case 4:
		if (minefield[3][N*(N-1)-1] == 9) k++; // влево-сверху
		if (minefield[3][N*N-1)] == 9) k++; // влево
		if (minefield[5][N-1] == 9) k++; // вниз
		if (minefield[5][2*N-1] == 9) k++; // вниз-вправо
		break;
		
		case 5:
		if (minefield[2][N*(N-1)+1] == 9) k++; // вправо
		if (minefield[2][N*(N-1)] == 9) k++; // вправо-вниз
		if (minefield[1][N*N-1] == 9) k++; // вверх
		if (minefield[1][N*N-2] == 9) k++; // вверх-вправо
		break;
	}
	minefield[K][I] = k;
}

if (I == N*N-1) // (правый нижний угол одной стороны)
{
	if (minefield[K][N*(N-1)-1] == 9) k++; // вверх
	if (minefield[K][N*(N-2)-2] == 9) k++; // влево-вверх
	if (minefield[K][N*N-2] == 9) k++; // влево
	switch (K)
	{
		case 0:
		if (minefield[3][1] == 9) k++; // вправо-вверх
		if (minefield[3][0] == 9) k++; // вправо
		if (minefield[2][N-1] == 9) k++; // вниз
		if (minefield[2][N-2] == 9) k++; // вниз-влево
		break;

		case 1:
		if (minefield[2][N*(N-2)] == 9) k++; // вправо-вверх
		if (minefield[2][N*(N-1)] == 9) k++; // вправо
		if (minefield[5][N*(N-1)] == 9) k++; // вниз
		if (minefield[5][N*(N-1)+1] == 9) k++; // вниз-влево
		break;

		case 2:
		if (minefield[3][N*(N-2)] == 9) k++; // вправо-вверх
		if (minefield[3][N*(N-1)] == 9) k++; // вправо
		if (minefield[5][0] == 9) k++; // вниз
		if (minefield[5][N] == 9) k++; // вниз-влево
		break;
		 
		case 3:
		if (minefield[4][N*(N-2)] == 9) k++; // вправо-вверх
		if (minefield[4][N*(N-1)] == 9) k++; // вправо
		if (minefield[5][N-1] == 9) k++; // вниз
		if (minefield[5][N-2] == 9) k++; // вниз-влево
		break;
		
		case 4:
		if (minefield[1][N*(N-2)] == 9) k++; // вправо-вверх
		if (minefield[1][N*(N-1)] == 9) k++; // вправо
		if (minefield[5][N*N-1] == 9) k++; // вниз
		if (minefield[5][N*(N-1)-1] == 9) k++; // вниз-влево
		break;
		
		case 5:
		if (minefield[4][N*N-2] == 9) k++; // вправо-вверх
		if (minefield[4][N*N-1] == 9) k++; // вправо
		if (minefield[1][N*(N-1)] == 9) k++; // вниз
		if (minefield[1][N*(N-1)+1] == 9) k++; // вниз-влево
		break;
	}
	minefield[K][I] = k;
}

if ((I div N == 0) and (I != 0) and (I != N-1)) // верхняя грань
{
	if (minefield[K][I-1] == 9) k++; // влево
	if (minefield[K][I+1] == 9) k++; // вправо
	if (minefield[K][I+N+1] == 9) k++; // вправо-вниз
	if (minefield[K][I+N] == 9) k++; // вниз
	if (minefield[K][I+N-1] == 9) k++; // влево-вниз
	switch (K)
	{
		case 0:
		if (minefield[4][N-I] == 9) k++; // влево-вверх
		if (minefield[4][N-I-1] == 9) k++; // вверх
		if (minefield[4][N-I-2] == 9) k++; // вверх-вправо
		break;

		case 1:
		if (minefield[0][N*(I-1))] == 9) k++; // влево-вверх
		if (minefield[0][N*I] == 9) k++; // вверх
		if (minefield[0][N*(I+1)] == 9) k++; // вверх-вправо
		break;

		case 2:
		if (minefield[0][N*(N-1)+I-1] == 9) k++; // влево-вверх
		if (minefield[0][N*(N-1)+I] == 9) k++; // вверх
		if (minefield[0][N*(N-1)+I+1] == 9) k++; // вверх-вправо
		break;
		 
		case 3:
		if (minefield[0][N*(N-I+1)-1] == 9) k++; // влево-вверх
		if (minefield[0][N*(N-I)-1] == 9) k++; // вверх
		if (minefield[0][N*(N-I-1)-1] == 9) k++; // вверх-вправо
		break;
		
		case 4:
		if (minefield[0][N-I] == 9) k++; // влево-вверх
		if (minefield[0][N-I-1] == 9) k++; // вверх
		if (minefield[0][N-I-2] == 9) k++; // вверх-вправо
		break;
		
		case 5:
		if (minefield[3][N*(N-1)+I-1] == 9) k++; // влево-вверх
		if (minefield[3][N*(N-1)+I] == 9) k++; // вверх
		if (minefield[3][N*(N-1)+I+1] == 9) k++; // вверх-вправо
		break;
	}
	minefield[K][I] = k;
}

if ((I mod N == 0) and (I != 0) and (I != N*(N-1))) // левая грань
{
	if (minefield[K][I-N] == 9) k++; // вверх
	if (minefield[K][I-N+1] == 9) k++; // вправо-вверх
	if (minefield[K][I+1] == 9) k++; // вправо
	if (minefield[K][I+N+1] == 9) k++; // вправо-вниз
	if (minefield[K][I+N] == 9) k++; // вниз
	switch (K)
	{
		case 0:
		if (minefield[1][(I div N)-1] == 9) k++; // влево-вверх
		if (minefield[1][(I div N)] == 9) k++; // влево
		if (minefield[1][(I div N)+1] == 9) k++; // влево-вниз
		break;

		case 1:
		if (minefield[4][I-1] == 9) k++; // влево-вверх
		if (minefield[4][I+N-1] == 9) k++; // влево
		if (minefield[4][I+2*N-1] == 9) k++; // влево-вниз
		break;

		case 2:
		if (minefield[1][I-1] == 9) k++; // влево-вверх
		if (minefield[1][I+N-1] == 9) k++; // влево
		if (minefield[1][I+2*N-1] == 9) k++; // влево-вниз
		break;
		 
		case 3:
		if (minefield[2][I-1] == 9) k++; // влево-вверх
		if (minefield[2][I+N-1] == 9) k++; // влево
		if (minefield[2][I+2*N-1] == 9) k++; // влево-вниз
		break;
		
		case 4:
		if (minefield[3][I-1] == 9) k++; // влево-вверх
		if (minefield[3][I+N-1] == 9) k++; // влево
		if (minefield[3][I+2*N-1] == 9) k++; // влево-вниз
		break;
		
		case 5:
		if (minefield[2][N*N-(I div N)] == 9) k++; // влево-вверх
		if (minefield[2][N*N-1-(I div N)] == 9) k++; // влево
		if (minefield[2][N*N-2-(I div N)] == 9) k++; // влево-вниз
		break;
	}
	minefield[K][I] = k;
}

if ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // правая грань
{
	if (minefield[K][I-N] == 9) k++; // вверх
	if (minefield[K][I-N-1] == 9) k++; // влево-вверх
	if (minefield[K][I-1] == 9) k++; // влево
	if (minefield[K][I+N-1] == 9) k++; // влево-вниз
	if (minefield[K][I+N] == 9) k++; // вниз
	switch (K)
	{
		case 0:
		if (minefield[3][N-(I div N)] == 9) k++; // вправо-вверх
		if (minefield[3][N-1-(I div N)] == 9) k++; // вправо
		if (minefield[3][N-2-(I div N)+1] == 9) k++; // вправо-вниз
		break;

		case 1:
		if (minefield[2][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (minefield[2][N*(I div N)] == 9) k++; // вправо
		if (minefield[2][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;

		case 2:
		if (minefield[3][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (minefield[3][N*(I div N)] == 9) k++; // вправо
		if (minefield[3][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		 
		case 3:
		if (minefield[4][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (minefield[4][N*(I div N)] == 9) k++; // вправо
		if (minefield[4][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		
		case 4:
		if (minefield[1][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (minefield[1][N*(I div N)] == 9) k++; // вправо
		if (minefield[1][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		
		case 5:
		if (minefield[2][N*(N-1)+(I div N)-1] == 9) k++; // вправо-вверх
		if (minefield[2][N*(N-1)+(I div N)] == 9) k++; // вправо
		if (minefield[2][N*(N-1)+(I div N)+1] == 9) k++; // вправо-вниз
		break;
	}
	minefield[K][I] = k;
}

if ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // нижняя грань
{
	if (minefield[K][I-1] == 9) k++; // влево
	if (minefield[K][I-N-1] == 9) k++; // влево-вверх
	if (minefield[K][I-N] == 9) k++; // вверх
	if (minefield[K][I-N+1] == 9) k++; // вправо-вверх
	if (minefield[K][I+1] == 9) k++; // вправо
	switch (K)
	{
		case 0:
		if (minefield[2][(I mod N)-1] == 9) k++; // вниз-влево
		if (minefield[2][(I mod N)] == 9) k++; // вниз
		if (minefield[2][(I mod N)+1] == 9) k++; // вниз-вправо
		break;

		case 1:
		if (minefield[5][N*N-(I mod N)] == 9) k++; // вниз-влево
		if (minefield[5][N*N-(I mod N)-1] == 9) k++; // вниз
		if (minefield[5][N*N-(I mod N)-2] == 9) k++; // вниз-вправо
		break;

		case 2:
		if (minefield[5][N*(N-(I mod N))] == 9) k++; // вниз-влево
		if (minefield[5][N*(N-(I mod N)-1)] == 9) k++; // вниз
		if (minefield[5][N*(N-(I mod N)-2)] == 9) k++; // вниз-вправо
		break;
		 
		case 3:
		if (minefield[5][(I mod N)-1] == 9) k++; // вниз-влево
		if (minefield[5][(I mod N)] == 9) k++; // вниз
		if (minefield[5][(I mod N)+1] == 9) k++; // вниз-вправо
		break;
		
		case 4:
		if (minefield[5][(I mod N)*N-1] == 9) k++; // вниз-влево
		if (minefield[5][((I mod N)+1)*N-1] == 9) k++; // вниз
		if (minefield[5][((I mod N)+2)*N-1] == 9) k++; // вниз-вправо
		break;
		
		case 5:
		if (minefield[1][N*N-(I mod N)] == 9) k++; // вниз-влево
		if (minefield[1][N*N-(I mod N)-1] == 9) k++; // вниз
		if (minefield[1][N*N-(I mod N)-2] == 9) k++; // вниз-вправо
		break;
	}
	minefield[K][I] = k;
}

