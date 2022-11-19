let suma;
let numeroUno, numeroDos
let resultado = document.getElementById("resultado")


//swal("Bienvenidos a la calculadora hecha con JS!!!");

//function saludar() {
  //  resultado.innerHTML = "Hola usuario";

   

    function iniciar() {
    numeroUno=parseFloat(prompt("Ingrese su sueldo basico :"));
    while (isNaN (numeroUno) || numeroUno ==="" )numeroUno=parseFloat(prompt("Debe ingresar un numero :"));
  
       

    numeroDos=parseFloat(prompt("Ingrese % de paritarias :"))
    while (isNaN (numeroDos) || numeroDos ==="" )numeroDos=parseFloat(prompt("Debe ingresar otro numero :"));
    
  
}





function calcular()  {
      
        porcentaje = numeroUno * 17 / 100
        porcentajeDos = numeroUno * numeroDos / 100
        
        suma = numeroUno - porcentaje + porcentajeDos

        resultado.innerHTML= `Vas a cobrar : ` + suma; 
         }
    
