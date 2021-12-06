Algoritmo sum3_V2
	n <- 10
	Dimension  Lista[n]
	Para i <- 1 Hasta n Hacer
		value <- 2*i^3 -5*i+3
		Lista[i] = value
		sum <- sum + value
	FinPara
	Para i <-1 Hasta n Hacer
		Mostrar "Lista [", i,"] tiene: ",Lista[i]
	FinPara
	Mostrar "Sumatoria: ", sum
FinAlgoritmo
