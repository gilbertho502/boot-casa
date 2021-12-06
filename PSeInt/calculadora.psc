Funcion menu
	Mostrar "Ingrese los valores n1 y n2"
	Leer n1
	Leer n2
	Escribir "Ingrese la opcion: "
	Escribir "1 Suma"
	Escribir "2 resta"
	Escribir "3 multiplicacion"
	Escribir "4 division"
	Escribir "5 potencia"
	Leer opcion
FinFuncion

Funcion r <- suma(n1,n2)
	r <- n1+n2
	Mostrar "La suma es: " suma(n1,n2)
FinFuncion
Funcion r<- resta(n1,n2)
	r<- n1-n2
FinFuncion
Funcion r<- multiplicacion(n1,n2)
	r<- n1*n2
FinFuncion
Funcion r<- division(n1,n2)
	r<- n1/n2
FinFuncion
Funcion r<- potencia(n1,n2)
	r<- n1^n2
FinFuncion


Proceso calculadora

	
	si opcion =1 Entonces
		Mostrar suma(n1,n2)
		
	FinSi
	
FinProceso


