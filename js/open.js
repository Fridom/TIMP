minefield[5] // массив со сторонами. 
I // номер ячейки, которую открываем
k // переменная, необходимая для подсчёта мин вокруг
N // размер куба (8)
K // сторона, которую открываем
K = K + 1;
If (I == 0) // (левый верхний угол одной стороны)
{
	if (minefield[K][1] == 0) openCell(K, 1); // вправо
	if (minefield[K][N+1] == 0) openCell(K, N+1); // вправо-вниз
	if (minefield[K][N] == 0) openCell(K, N); // вниз
	switch (K)
	{
		case 1:
		if (minefield[1][0] == 0) openCell(2, 0); // влево
		if (minefield[1][1] == 0) openCell(2, 1); // влево-вниз
		if (minefield[4][N-1] == 0) openCell(5, N-1); // вверх
		if (minefield[4][N-2] == 0) openCell(5, N-2); // вверх вправо
		break;

		case 2:
		if (minefield[4][N-1] == 0) openCell(5, N-1); // влево
		if (minefield[4][2*N-1] == 0) openCell(5, 2*N-1); // влево-вниз
		if (minefield[0][0] == 0) openCell(1, 0); // вверх
		if (minefield[0][N] == 0) openCell(1, N); // вверх вправо
		break;

		case 3:
		if (minefield[1][N-1] == 0) openCell(2, N-1); // влево
		if (minefield[1][2*N-1] == 0) openCell(2, 2*N-1); // влево-вниз
		if (minefield[0][N*(N-1)] == 0) openCell(1, N*(N-1)); // вверх
		if (minefield[0][N*(N-1)+1] == 0) openCell(1, N*(N-1)+1); // вверх вправо
		break;
		 
		case 4:
		if (minefield[2][N-1] == 0) openCell(3, N-1); // влево
		if (minefield[2][2*N-1] == 0) openCell(3, 2*N-1); // влево-вниз
		if (minefield[0][N*N-1] == 0) openCell(1, N*N-1); // вверх
		if (minefield[0][N*(N-1)-1] == 0) openCell(1, ); // вверх вправо
		break;
		
		case 5:
		if (minefield[3][N-1] == 0) openCell(); // влево
		if (minefield[3][2*N-1] == 0) openCell(); // влево-вниз
		if (minefield[0][N-1] == 0) openCell(); // вверх
		if (minefield[0][N-2] == 0) openCell(); // вверх вправо
		break;
		
		case 6:
		if (minefield[2][N*N-1] == 0) openCell(); // влево
		if (minefield[2][N*N-2] == 0) openCell(); // влево-вниз
		if (minefield[3][N*(N-1)] == 0) openCell(); // вверх
		if (minefield[3][N*(N-1)+1] == 0) openCell(); // вверх вправо
		break;
	}
	minefield[K][I] = k;
}

If (I == N-1) // (правый верхний угол одной стороны)
{
	if (minefield[K][N-2] == 0) openCell(); // влево
	if (minefield[K][2*N-2] == 0) openCell(); // влево-вниз
	if (minefield[K][2*N-1] == 0) openCell(); // вниз
	switch (K)
	{
		case 1:
		if (minefield[3][N-1] == 0) openCell(); // вправо
		if (minefield[3][N-2] == 0) openCell(); // вправо-вниз
		if (minefield[4][0] == 0) openCell(); // вверх
		if (minefield[4][1] == 0) openCell(); // вверх-влево
		break;

		case 2:
		if (minefield[2][0] == 0) openCell(); // вправо
		if (minefield[2][N] == 0) openCell(); // вправо-вниз
		if (minefield[0][N*(N-1)] == 0) openCell(); // вверх
		if (minefield[0][N*(N-2)] == 0) openCell(); // вверх-влево
		break;

		case 3:
		if (minefield[3][0] == 0) openCell(); // вправо
		if (minefield[3][N] == 0) openCell(); // вправо-вниз
		if (minefield[0][N*N-1] == 0) openCell(); // вверх
		if (minefield[0][N*N-2] == 0) openCell(); // вверх-влево
		break;
		 
		case 4:
		if (minefield[4][0] == 0) openCell(); // вправо
		if (minefield[4][N] == 0) openCell(); // вправо-вниз
		if (minefield[0][N-1] == 0) openCell(); // вверх
		if (minefield[0][2*N-1)] == 0) openCell(); // вверх-влево
		break;
		
		case 5:
		if (minefield[1][0] == 0) openCell(); // вправо
		if (minefield[1][N] == 0) openCell(); // вправо-вниз
		if (minefield[0][0] == 0) openCell(); // вверх
		if (minefield[0][1] == 0) openCell(); // вверх-влево
		break;
		
		case 6:
		if (minefield[4][N*(N-1)] == 0) openCell(); // вправо
		if (minefield[4][N*(N-1)+1] == 0) openCell(); // вправо-вниз
		if (minefield[3][N*N-1] == 0) openCell(); // вверх
		if (minefield[3][N*N-2] == 0) openCell(); // вверх-влево
		break;
	}
	minefield[K][I] = k;
}

If (I == N*(N-1)) // (левый нижний угол одной стороны)
{
	if (minefield[K][N*(N-2)] == 0) openCell(); // вверх
	if (minefield[K][N*(N-2)+1] == 0) openCell(); // вправо-вверх
	if (minefield[K][N*(N-1)+1] == 0) openCell(); // вправо
	switch (K)
	{
		case 1:
		if (minefield[1][N-2] == 0) openCell(); // влево-сверху
		if (minefield[1][N-1] == 0) openCell(); // влево
		if (minefield[2][0] == 0) openCell(); // вниз
		if (minefield[2][1] == 0) openCell(); // вниз-вправо
		break;

		case 2:
		if (minefield[4][N*(N-1)-1] == 0) openCell(); // влево-сверху
		if (minefield[4][N*N-1)] == 0) openCell(); // влево
		if (minefield[5][N*N-1] == 0) openCell(); // вниз
		if (minefield[5][N*N-2] == 0) openCell(); // вниз-вправо
		break;

		case 3:
		if (minefield[1][N*(N-1)-1] == 0) openCell(); // влево-сверху
		if (minefield[1][N*N-1)] == 0) openCell(); // влево
		if (minefield[5][N*(N-1)] == 0) openCell(); // вниз
		if (minefield[5][N*(N-2)] == 0) openCell(); // вниз-вправо
		break;
		 
		case 4:
		if (minefield[2][N*(N-1)-1] == 0) openCell(); // влево-сверху
		if (minefield[2][N*N-1)] == 0) openCell(); // влево
		if (minefield[5][0] == 0) openCell(); // вниз
		if (minefield[5][1] == 0) openCell(); // вниз-вправо
		break;
		
		case 5:
		if (minefield[3][N*(N-1)-1] == 0) openCell(); // влево-сверху
		if (minefield[3][N*N-1)] == 0) openCell(); // влево
		if (minefield[5][N-1] == 0) openCell(); // вниз
		if (minefield[5][2*N-1] == 0) openCell(); // вниз-вправо
		break;
		
		case 6:
		if (minefield[2][N*(N-1)+1] == 0) openCell(); // вправо
		if (minefield[2][N*(N-1)] == 0) openCell(); // вправо-вниз
		if (minefield[1][N*N-1] == 0) openCell(); // вверх
		if (minefield[1][N*N-2] == 0) openCell(); // вверх-вправо
		break;
	}
	minefield[K][I] = k;
}

If (I == N*N-1) // (правый нижний угол одной стороны)
{
	if (minefield[K][N*(N-1)-1] == 0) openCell(); // вверх
	if (minefield[K][N*(N-2)-2] == 0) openCell(); // влево-вверх
	if (minefield[K][N*N-2] == 0) openCell(); // влево
	switch (K)
	{
		case 1:
		if (minefield[3][1] == 0) openCell(); // вправо-вверх
		if (minefield[3][0] == 0) openCell(); // вправо
		if (minefield[2][N-1] == 0) openCell(); // вниз
		if (minefield[2][N-2] == 0) openCell(); // вниз-влево
		break;

		case 2:
		if (minefield[2][N*(N-2)] == 0) openCell(); // вправо-вверх
		if (minefield[2][N*(N-1)] == 0) openCell(); // вправо
		if (minefield[5][N*(N-1)] == 0) openCell(); // вниз
		if (minefield[5][N*(N-1)+1] == 0) openCell(); // вниз-влево
		break;

		case 3:
		if (minefield[3][N*(N-2)] == 0) openCell(); // вправо-вверх
		if (minefield[3][N*(N-1)] == 0) openCell(); // вправо
		if (minefield[5][0] == 0) openCell(); // вниз
		if (minefield[5][N] == 0) openCell(); // вниз-влево
		break;
		 
		case 4:
		if (minefield[4][N*(N-2)] == 0) openCell(); // вправо-вверх
		if (minefield[4][N*(N-1)] == 0) openCell(); // вправо
		if (minefield[5][N-1] == 0) openCell(); // вниз
		if (minefield[5][N-2] == 0) openCell(); // вниз-влево
		break;
		
		case 5:
		if (minefield[1][N*(N-2)] == 0) openCell(); // вправо-вверх
		if (minefield[1][N*(N-1)] == 0) openCell(); // вправо
		if (minefield[5][N*N-1] == 0) openCell(); // вниз
		if (minefield[5][N*(N-1)-1] == 0) openCell(); // вниз-влево
		break;
		
		case 6:
		if (minefield[4][N*N-2] == 0) openCell(); // вправо-вверх
		if (minefield[4][N*N-1] == 0) openCell(); // вправо
		if (minefield[1][N*(N-1)] == 0) openCell(); // вниз
		if (minefield[1][N*(N-1)+1] == 0) openCell(); // вниз-влево
		break;
	}
	minefield[K][I] = k;
}

If ((I div N == 0) and (I != 0) and (I != N-1)) // верхняя грань
{
	if (minefield[K][I-1] == 0) openCell(); // влево
	if (minefield[K][I+1] == 0) openCell(); // вправо
	if (minefield[K][I+N+1] == 0) openCell(); // вправо-вниз
	if (minefield[K][I+N] == 0) openCell(); // вниз
	if (minefield[K][I+N-1] == 0) openCell(); // влево-вниз
	switch (K)
	{
		case 1:
		if (minefield[4][N-I] == 0) openCell(); // влево-вверх
		if (minefield[4][N-I-1] == 0) openCell(); // вверх
		if (minefield[4][N-I-2] == 0) openCell(); // вверх-вправо
		break;

		case 2:
		if (minefield[0][N*(I-1))] == 0) openCell(); // влево-вверх
		if (minefield[0][N*I] == 0) openCell(); // вверх
		if (minefield[0][N*(I+1)] == 0) openCell(); // вверх-вправо
		break;

		case 3:
		if (minefield[0][N*(N-1)+I-1] == 0) openCell(); // влево-вверх
		if (minefield[0][N*(N-1)+I] == 0) openCell(); // вверх
		if (minefield[0][N*(N-1)+I+1] == 0) openCell(); // вверх-вправо
		break;
		 
		case 4:
		if (minefield[0][N*(N-I+1)-1] == 0) openCell(); // влево-вверх
		if (minefield[0][N*(N-I)-1] == 0) openCell(); // вверх
		if (minefield[0][N*(N-I-1)-1] == 0) openCell(); // вверх-вправо
		break;
		
		case 5:
		if (minefield[0][N-I] == 0) openCell(); // влево-вверх
		if (minefield[0][N-I-1] == 0) openCell(); // вверх
		if (minefield[0][N-I-2] == 0) openCell(); // вверх-вправо
		break;
		
		case 6:
		if (minefield[3][N*(N-1)+I-1] == 0) openCell(); // влево-вверх
		if (minefield[3][N*(N-1)+I] == 0) openCell(); // вверх
		if (minefield[3][N*(N-1)+I+1] == 0) openCell(); // вверх-вправо
		break;
	}
	minefield[K][I] = k;
}

If ((I mod N == 0) and (I != 0) and (I != N*(N-1))) // левая грань
{
	if (minefield[K][I-N] == 0) openCell(); // вверх
	if (minefield[K][I-N+1] == 0) openCell(); // вправо-вверх
	if (minefield[K][I+1] == 0) openCell(); // вправо
	if (minefield[K][I+N+1] == 0) openCell(); // вправо-вниз
	if (minefield[K][I+N] == 0) openCell(); // вниз
	switch (K)
	{
		case 1:
		if (minefield[1][(I div N)-1] == 0) openCell(); // влево-вверх
		if (minefield[1][(I div N)] == 0) openCell(); // влево
		if (minefield[1][(I div N)+1] == 0) openCell(); // влево-вниз
		break;

		case 2:
		if (minefield[4][I-1] == 0) openCell(); // влево-вверх
		if (minefield[4][I+N-1] == 0) openCell(); // влево
		if (minefield[4][I+2*N-1] == 0) openCell(); // влево-вниз
		break;

		case 3:
		if (minefield[1][I-1] == 0) openCell(); // влево-вверх
		if (minefield[1][I+N-1] == 0) openCell(); // влево
		if (minefield[1][I+2*N-1] == 0) openCell(); // влево-вниз
		break;
		 
		case 4:
		if (minefield[2][I-1] == 0) openCell(); // влево-вверх
		if (minefield[2][I+N-1] == 0) openCell(); // влево
		if (minefield[2][I+2*N-1] == 0) openCell(); // влево-вниз
		break;
		
		case 5:
		if (minefield[3][I-1] == 0) openCell(); // влево-вверх
		if (minefield[3][I+N-1] == 0) openCell(); // влево
		if (minefield[3][I+2*N-1] == 0) openCell(); // влево-вниз
		break;
		
		case 6:
		if (minefield[2][N*N-(I div N)] == 0) openCell(); // влево-вверх
		if (minefield[2][N*N-1-(I div N)] == 0) openCell(); // влево
		if (minefield[2][N*N-2-(I div N)] == 0) openCell(); // влево-вниз
		break;
	}
	minefield[K][I] = k;
}

If ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // правая грань
{
	if (minefield[K][I-N] == 0) openCell(); // вверх
	if (minefield[K][I-N-1] == 0) openCell(); // влево-вверх
	if (minefield[K][I-1] == 0) openCell(); // влево
	if (minefield[K][I+N-1] == 0) openCell(); // влево-вниз
	if (minefield[K][I+N] == 0) openCell(); // вниз
	switch (K)
	{
		case 1:
		if (minefield[3][N-(I div N)] == 0) openCell(); // вправо-вверх
		if (minefield[3][N-1-(I div N)] == 0) openCell(); // вправо
		if (minefield[3][N-2-(I div N)+1] == 0) openCell(); // вправо-вниз
		break;

		case 2:
		if (minefield[2][N*((I div N)-1)] == 0) openCell(); // вправо-вверх
		if (minefield[2][N*(I div N)] == 0) openCell(); // вправо
		if (minefield[2][N*((I div N)+1)] == 0) openCell(); // вправо-вниз
		break;

		case 3:
		if (minefield[3][N*((I div N)-1)] == 0) openCell(); // вправо-вверх
		if (minefield[3][N*(I div N)] == 0) openCell(); // вправо
		if (minefield[3][N*((I div N)+1)] == 0) openCell(); // вправо-вниз
		break;
		 
		case 4:
		if (minefield[4][N*((I div N)-1)] == 0) openCell(); // вправо-вверх
		if (minefield[4][N*(I div N)] == 0) openCell(); // вправо
		if (minefield[4][N*((I div N)+1)] == 0) openCell(); // вправо-вниз
		break;
		
		case 5:
		if (minefield[1][N*((I div N)-1)] == 0) openCell(); // вправо-вверх
		if (minefield[1][N*(I div N)] == 0) openCell(); // вправо
		if (minefield[1][N*((I div N)+1)] == 0) openCell(); // вправо-вниз
		break;
		
		case 6:
		if (minefield[2][N*(N-1)+(I div N)-1] == 0) openCell(); // вправо-вверх
		if (minefield[2][N*(N-1)+(I div N)] == 0) openCell(); // вправо
		if (minefield[2][N*(N-1)+(I div N)+1] == 0) openCell(); // вправо-вниз
		break;
	}
	minefield[K][I] = k;
}

If ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // нижняя грань
{
	if (minefield[K][I-1] == 0) openCell(); // влево
	if (minefield[K][I-N-1] == 0) openCell(); // влево-вверх
	if (minefield[K][I-N] == 0) openCell(); // вверх
	if (minefield[K][I-N+1] == 0) openCell(); // вправо-вверх
	if (minefield[K][I+1] == 0) openCell(); // вправо
	switch (K)
	{
		case 1:
		if (minefield[2][(I mod N)-1] == 0) openCell(); // вниз-влево
		if (minefield[2][(I mod N)] == 0) openCell(); // вниз
		if (minefield[2][(I mod N)+1] == 0) openCell(); // вниз-вправо
		break;

		case 2:
		if (minefield[5][N*N-(I mod N)] == 0) openCell(); // вниз-влево
		if (minefield[5][N*N-(I mod N)-1] == 0) openCell(); // вниз
		if (minefield[5][N*N-(I mod N)-2] == 0) openCell(); // вниз-вправо
		break;

		case 3:
		if (minefield[5][N*(N-(I mod N))] == 0) openCell(); // вниз-влево
		if (minefield[5][N*(N-(I mod N)-1)] == 0) openCell(); // вниз
		if (minefield[5][N*(N-(I mod N)-2)] == 0) openCell(); // вниз-вправо
		break;
		 
		case 4:
		if (minefield[5][(I mod N)-1] == 0) openCell(); // вниз-влево
		if (minefield[5][(I mod N)] == 0) openCell(); // вниз
		if (minefield[5][(I mod N)+1] == 0) openCell(); // вниз-вправо
		break;
		
		case 5:
		if (minefield[5][(I mod N)*N-1] == 0) openCell(); // вниз-влево
		if (minefield[5][((I mod N)+1)*N-1] == 0) openCell(); // вниз
		if (minefield[5][((I mod N)+2)*N-1] == 0) openCell(); // вниз-вправо
		break;
		
		case 6:
		if (minefield[1][N*N-(I mod N)] == 0) openCell(); // вниз-влево
		if (minefield[1][N*N-(I mod N)-1] == 0) openCell(); // вниз
		if (minefield[1][N*N-(I mod N)-2] == 0) openCell(); // вниз-вправо
		break;
	}
	minefield[K][I] = k;
}