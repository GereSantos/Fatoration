function FirstFactorial(num) { 
    //Declaração do resultado atribuido pelo valor do número que sera fatorado
      var resultado = num;
      //for que será utilizado para realizar a refatoração e por fim multiplicar o resultado
      //pelo [i]
      for(var i = 1; i < num; i++){
        resultado *=i;
      }
    // retorno do resultado
    return resultado
  }
     
  console.log(FirstFactorial(readline()));