// Função Autoinvocável
//Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
// Também pode ser utilizada com parâmetros ou armazenada em uma variável.
(
  function (a,b){
    return a + b;
  }
  )(1,2); //3
//..............................
const soma3 = (
  function () {
    return a +b;
  }
)(1,2);
console.log(soma3) //3

// Função Autoinvocável

