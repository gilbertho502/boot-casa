Algoritmo LectorDeMotes
	n_mascotas = 1
	
	Mostrar "ingresa el numero de mascotas"
	Leer n_mascotas
	
	Dimension motes[n_mascotas]
	
	para i <-1 Hasta n_mascotas Hacer
		Mostrar "Como se llama tu ", i ," mascota?"
		Leer motes[i]
		
	FinPara
	
	Mostrar "Tus mascotas son: "
	para i <- 1 hasta n_mascotas Hacer
		Mostrar "Tus mascotas son: ", motes[i]
	FinPara
	
FinAlgoritmo
