Algoritmo raices_complejas
	Escribir "Ingrese los valores A, B y C: "
	Escribir "Ingrese A"
	Leer A
	Escribir "Ingrese B"
	Leer B
	Escribir "Ingrese C"
	Leer C
	//Discriminante

	D = B^2-4*A*C
	si D >= 0
		x1 = (-b+(RC(D)))/(2*a)
		x2 = (-b-(RC(D)))/(2*a)
		Mostrar "Raices encontradas: ", x1, " y " , x2
	SiNo
		//x3 = (-b+(RC(D)))/(2*a)
		//x4 = (-b-(RC(D)))/(2*a)
		Mostrar "No puedo calcular raices complejas"
	FinSi
FinAlgoritmo
