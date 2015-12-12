(I div 8 = 7)
(I mod 8 = 7)
(I mod 8 = 0)
(I div 8 = 0)
storona[6] // массив со сторонами. 
I // номер ячейки, куда вставляем
k // переменная, необходимая для подсчёта мин вокруг
N // размер куба (8)
If (I == 0) // (левый верхний угол одной стороны)
{
	if (storona[K][1] == 9) k++; // вправо
	if (storona[K][N+1] == 9) k++; // вправо-вниз
	if (storona[K][N] == 9) k++; // вниз
	switch (K)
	{
		case K = 1
		if (storona[2][0] == 9) k++; // влево
		if (storona[2][1] == 9) k++; // влево-вниз
		if (storona[5][N-1] == 9) k++; // вверх
		if (storona[5][N-2] == 9) k++; // вверх вправо
		break;

		case K = 2
		if (storona[5][N-1] == 9) k++; // влево
		if (storona[5][2*N-1] == 9) k++; // влево-вниз
		if (storona[1][0] == 9) k++; // вверх
		if (storona[1][N] == 9) k++; // вверх вправо
		break;

		case K = 3
		if (storona[2][N-1] == 9) k++; // влево
		if (storona[2][2*N-1] == 9) k++; // влево-вниз
		if (storona[1][N*(N-1)] == 9) k++; // вверх
		if (storona[1][N*(N-1)+1] == 9) k++; // вверх вправо
		break;
		 
		case K = 4
		if (storona[3][N-1] == 9) k++; // влево
		if (storona[3][2*N-1] == 9) k++; // влево-вниз
		if (storona[1][N*N-1] == 9) k++; // вверх
		if (storona[1][N*(N-1)-1] == 9) k++; // вверх вправо
		break;
		
		case K = 5
		if (storona[4][N-1] == 9) k++; // влево
		if (storona[4][2*N-1] == 9) k++; // влево-вниз
		if (storona[1][N-1] == 9) k++; // вверх
		if (storona[1][N-2] == 9) k++; // вверх вправо
		break;
		
		case K = 6
		if (storona[3][N*N-1] == 9) k++; // влево
		if (storona[3][N*N-2] == 9) k++; // влево-вниз
		if (storona[4][N*(N-1)] == 9) k++; // вверх
		if (storona[4][N*(N-1)+1] == 9) k++; // вверх вправо
		break;
	}
	storona[K][I] = k;
}

If (I == N-1) // (правый верхний угол одной стороны)
{
	if (storona[K][N-2] == 9) k++; // влево
	if (storona[K][2*N-2] == 9) k++; // влево-вниз
	if (storona[K][2*N-1] == 9) k++; // вниз
	switch (K)
	{
		case K = 1
		if (storona[4][N-1] == 9) k++; // вправо
		if (storona[4][N-2] == 9) k++; // вправо-вниз
		if (storona[5][0] == 9) k++; // вверх
		if (storona[5][1] == 9) k++; // вверх-влево
		break;

		case K = 2
		if (storona[3][0] == 9) k++; // вправо
		if (storona[3][N] == 9) k++; // вправо-вниз
		if (storona[1][N*(N-1)] == 9) k++; // вверх
		if (storona[1][N*(N-2)] == 9) k++; // вверх-влево
		break;

		case K = 3
		if (storona[4][0] == 9) k++; // вправо
		if (storona[4][N] == 9) k++; // вправо-вниз
		if (storona[1][N*N-1] == 9) k++; // вверх
		if (storona[1][N*N-2] == 9) k++; // вверх-влево
		break;
		 
		case K = 4
		if (storona[5][0] == 9) k++; // вправо
		if (storona[5][N] == 9) k++; // вправо-вниз
		if (storona[1][N-1] == 9) k++; // вверх
		if (storona[1][2*N-1)] == 9) k++; // вверх-влево
		break;
		
		case K = 5
		if (storona[2][0] == 9) k++; // вправо
		if (storona[2][N] == 9) k++; // вправо-вниз
		if (storona[1][0] == 9) k++; // вверх
		if (storona[1][1] == 9) k++; // вверх-влево
		break;
		
		case K = 6
		if (storona[5][N*(N-1)] == 9) k++; // вправо
		if (storona[5][N*(N-1)+1] == 9) k++; // вправо-вниз
		if (storona[4][N*N-1] == 9) k++; // вверх
		if (storona[4][N*N-2] == 9) k++; // вверх-влево
		break;
	}
	storona[K][I] = k;
}

If (I == N*(N-1)) // (левый нижний угол одной стороны)
{
	if (storona[K][N*(N-2)] == 9) k++; // вверх
	if (storona[K][N*(N-2)+1] == 9) k++; // вправо-вверх
	if (storona[K][N*(N-1)+1] == 9) k++; // вправо
	switch (K)
	{
		case K = 1
		if (storona[2][N-2] == 9) k++; // влево-сверху
		if (storona[2][N-1] == 9) k++; // влево
		if (storona[3][0] == 9) k++; // вниз
		if (storona[3][1] == 9) k++; // вниз-вправо
		break;

		case K = 2
		if (storona[5][N*(N-1)-1] == 9) k++; // влево-сверху
		if (storona[5][N*N-1)] == 9) k++; // влево
		if (storona[6][N*N-1] == 9) k++; // вниз
		if (storona[6][N*N-2] == 9) k++; // вниз-вправо
		break;

		case K = 3
		if (storona[2][N*(N-1)-1] == 9) k++; // влево-сверху
		if (storona[2][N*N-1)] == 9) k++; // влево
		if (storona[6][N*(N-1)] == 9) k++; // вниз
		if (storona[6][N*(N-2)] == 9) k++; // вниз-вправо
		break;
		 
		case K = 4
		if (storona[3][N*(N-1)-1] == 9) k++; // влево-сверху
		if (storona[3][N*N-1)] == 9) k++; // влево
		if (storona[6][0] == 9) k++; // вниз
		if (storona[6][1] == 9) k++; // вниз-вправо
		break;
		
		case K = 5
		if (storona[4][N*(N-1)-1] == 9) k++; // влево-сверху
		if (storona[4][N*N-1)] == 9) k++; // влево
		if (storona[6][N-1] == 9) k++; // вниз
		if (storona[6][2*N-1] == 9) k++; // вниз-вправо
		break;
		
		case K = 6
		if (storona[3][N*(N-1)+1] == 9) k++; // вправо
		if (storona[3][N*(N-1)] == 9) k++; // вправо-вниз
		if (storona[2][N*N-1] == 9) k++; // вверх
		if (storona[2][N*N-2] == 9) k++; // вверх-вправо
		break;
	}
	storona[K][I] = k;
}

If (I == N*N-1) // (правый нижний угол одной стороны)
{
	if (storona[K][N*(N-1)-1] == 9) k++; // вверх
	if (storona[K][N*(N-2)-2] == 9) k++; // влево-вверх
	if (storona[K][N*N-2] == 9) k++; // влево
	switch (K)
	{
		case K = 1
		if (storona[4][1] == 9) k++; // вправо-вверх
		if (storona[4][0] == 9) k++; // вправо
		if (storona[3][N-1] == 9) k++; // вниз
		if (storona[3][N-2] == 9) k++; // вниз-влево
		break;

		case K = 2
		if (storona[3][N*(N-2)] == 9) k++; // вправо-вверх
		if (storona[3][N*(N-1)] == 9) k++; // вправо
		if (storona[6][N*(N-1)] == 9) k++; // вниз
		if (storona[6][N*(N-1)+1] == 9) k++; // вниз-влево
		break;

		case K = 3
		if (storona[4][N*(N-2)] == 9) k++; // вправо-вверх
		if (storona[4][N*(N-1)] == 9) k++; // вправо
		if (storona[6][0] == 9) k++; // вниз
		if (storona[6][N] == 9) k++; // вниз-влево
		break;
		 
		case K = 4
		if (storona[5][N*(N-2)] == 9) k++; // вправо-вверх
		if (storona[5][N*(N-1)] == 9) k++; // вправо
		if (storona[6][N-1] == 9) k++; // вниз
		if (storona[6][N-2] == 9) k++; // вниз-влево
		break;
		
		case K = 5
		if (storona[2][N*(N-2)] == 9) k++; // вправо-вверх
		if (storona[2][N*(N-1)] == 9) k++; // вправо
		if (storona[6][N*N-1] == 9) k++; // вниз
		if (storona[6][N*(N-1)-1] == 9) k++; // вниз-влево
		break;
		
		case K = 6
		if (storona[5][N*N-2] == 9) k++; // вправо-вверх
		if (storona[5][N*N-1] == 9) k++; // вправо
		if (storona[2][N*(N-1)] == 9) k++; // вниз
		if (storona[2][N*(N-1)+1] == 9) k++; // вниз-влево
		break;
	}
	storona[K][I] = k;
}

If ((I div N == 0) and (I != 0) and (I != N-1)) // верхняя грань
{
	if (storona[K][I-1] == 9) k++; // влево
	if (storona[K][I+1] == 9) k++; // вправо
	if (storona[K][I+N+1] == 9) k++; // вправо-вниз
	if (storona[K][I+N] == 9) k++; // вниз
	if (storona[K][I+N-1] == 9) k++; // влево-вниз
	switch (K)
	{
		case K = 1
		if (storona[5][N-I] == 9) k++; // влево-вверх
		if (storona[5][N-I-1] == 9) k++; // вверх
		if (storona[5][N-I-2] == 9) k++; // вверх-вправо
		break;

		case K = 2
		if (storona[1][N*(I-1))] == 9) k++; // влево-вверх
		if (storona[1][N*I] == 9) k++; // вверх
		if (storona[1][N*(I+1)] == 9) k++; // вверх-вправо
		break;

		case K = 3
		if (storona[1][N*(N-1)+I-1] == 9) k++; // влево-вверх
		if (storona[1][N*(N-1)+I] == 9) k++; // вверх
		if (storona[1][N*(N-1)+I+1] == 9) k++; // вверх-вправо
		break;
		 
		case K = 4
		if (storona[1][N*(N-I+1)-1] == 9) k++; // влево-вверх
		if (storona[1][N*(N-I)-1] == 9) k++; // вверх
		if (storona[1][N*(N-I-1)-1] == 9) k++; // вверх-вправо
		break;
		
		case K = 5
		if (storona[1][N-I] == 9) k++; // влево-вверх
		if (storona[1][N-I-1] == 9) k++; // вверх
		if (storona[1][N-I-2] == 9) k++; // вверх-вправо
		break;
		
		case K = 6
		if (storona[4][N*(N-1)+I-1] == 9) k++; // влево-вверх
		if (storona[4][N*(N-1)+I] == 9) k++; // вверх
		if (storona[4][N*(N-1)+I+1] == 9) k++; // вверх-вправо
		break;
	}
	storona[K][I] = k;
}

If ((I mod N == 0) and (I != 0) and (I != N*(N-1))) // левая грань
{
	if (storona[K][I-N] == 9) k++; // вверх
	if (storona[K][I-N+1] == 9) k++; // вправо-вверх
	if (storona[K][I+1] == 9) k++; // вправо
	if (storona[K][I+N+1] == 9) k++; // вправо-вниз
	if (storona[K][I+N] == 9) k++; // вниз
	switch (K)
	{
		case K = 1
		if (storona[2][(I div N)-1] == 9) k++; // влево-вверх
		if (storona[2][(I div N)] == 9) k++; // влево
		if (storona[2][(I div N)+1] == 9) k++; // влево-вниз
		break;

		case K = 2
		if (storona[5][I-1] == 9) k++; // влево-вверх
		if (storona[5][I+N-1] == 9) k++; // влево
		if (storona[5][I+2*N-1] == 9) k++; // влево-вниз
		break;

		case K = 3
		if (storona[2][I-1] == 9) k++; // влево-вверх
		if (storona[2][I+N-1] == 9) k++; // влево
		if (storona[2][I+2*N-1] == 9) k++; // влево-вниз
		break;
		 
		case K = 4
		if (storona[3][I-1] == 9) k++; // влево-вверх
		if (storona[3][I+N-1] == 9) k++; // влево
		if (storona[3][I+2*N-1] == 9) k++; // влево-вниз
		break;
		
		case K = 5
		if (storona[4][I-1] == 9) k++; // влево-вверх
		if (storona[4][I+N-1] == 9) k++; // влево
		if (storona[4][I+2*N-1] == 9) k++; // влево-вниз
		break;
		
		case K = 6
		if (storona[3][N*N-(I div N)] == 9) k++; // влево-вверх
		if (storona[3][N*N-1-(I div N)] == 9) k++; // влево
		if (storona[3][N*N-2-(I div N)] == 9) k++; // влево-вниз
		break;
	}
	storona[K][I] = k;
}

If ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // правая грань
{
	if (storona[K][I-N] == 9) k++; // вверх
	if (storona[K][I-N-1] == 9) k++; // влево-вверх
	if (storona[K][I-1] == 9) k++; // влево
	if (storona[K][I+N-1] == 9) k++; // влево-вниз
	if (storona[K][I+N] == 9) k++; // вниз
	switch (K)
	{
		case K = 1
		if (storona[4][N-(I div N)] == 9) k++; // вправо-вверх
		if (storona[4][N-1-(I div N)] == 9) k++; // вправо
		if (storona[4][N-2-(I div N)+1] == 9) k++; // вправо-вниз
		break;

		case K = 2
		if (storona[3][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (storona[3][N*(I div N)] == 9) k++; // вправо
		if (storona[3][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;

		case K = 3
		if (storona[4][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (storona[4][N*(I div N)] == 9) k++; // вправо
		if (storona[4][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		 
		case K = 4
		if (storona[5][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (storona[5][N*(I div N)] == 9) k++; // вправо
		if (storona[5][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		
		case K = 5
		if (storona[2][N*((I div N)-1)] == 9) k++; // вправо-вверх
		if (storona[2][N*(I div N)] == 9) k++; // вправо
		if (storona[2][N*((I div N)+1)] == 9) k++; // вправо-вниз
		break;
		
		case K = 6
		if (storona[3][N*(N-1)+(I div N)-1] == 9) k++; // вправо-вверх
		if (storona[3][N*(N-1)+(I div N)] == 9) k++; // вправо
		if (storona[3][N*(N-1)+(I div N)+1] == 9) k++; // вправо-вниз
		break;
	}
	storona[K][I] = k;
}

If ((I mod N == N-1) and (I != N-1) and (I != N*N-1)) // нижняя грань
{
	if (storona[K][I-1] == 9) k++; // влево
	if (storona[K][I-N-1] == 9) k++; // влево-вверх
	if (storona[K][I-N] == 9) k++; // вверх
	if (storona[K][I-N+1] == 9) k++; // вправо-вверх
	if (storona[K][I+1] == 9) k++; // вправо
	switch (K)
	{
		case K = 1
		if (storona[3][(I mod N)-1] == 9) k++; // вниз-влево
		if (storona[3][(I mod N)] == 9) k++; // вниз
		if (storona[3][(I mod N)+1] == 9) k++; // вниз-вправо
		break;

		case K = 2
		if (storona[6][N*N-(I mod N)] == 9) k++; // вниз-влево
		if (storona[6][N*N-(I mod N)-1] == 9) k++; // вниз
		if (storona[6][N*N-(I mod N)-2] == 9) k++; // вниз-вправо
		break;

		case K = 3
		if (storona[6][N*(N-(I mod N))] == 9) k++; // вниз-влево
		if (storona[6][N*(N-(I mod N)-1)] == 9) k++; // вниз
		if (storona[6][N*(N-(I mod N)-2)] == 9) k++; // вниз-вправо
		break;
		 
		case K = 4
		if (storona[6][(I mod N)-1] == 9) k++; // вниз-влево
		if (storona[6][(I mod N)] == 9) k++; // вниз
		if (storona[6][(I mod N)+1] == 9) k++; // вниз-вправо
		break;
		
		case K = 5
		if (storona[6][(I mod N)*N-1] == 9) k++; // вниз-влево
		if (storona[6][((I mod N)+1)*N-1] == 9) k++; // вниз
		if (storona[6][((I mod N)+2)*N-1] == 9) k++; // вниз-вправо
		break;
		
		case K = 6
		if (storona[2][N*N-(I mod N)] == 9) k++; // вниз-влево
		if (storona[2][N*N-(I mod N)-1] == 9) k++; // вниз
		if (storona[2][N*N-(I mod N)-2] == 9) k++; // вниз-вправо
		break;
	}
	storona[K][I] = k;
}