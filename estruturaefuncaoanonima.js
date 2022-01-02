// Estrutura
//Variáveis criadas dentro de um afunção apenas podem ser utilizadas dentro dela.
function nome(parametros){
  // instruções
}
//...............................................
// Quando invocamos o "return", a função para de ser executada.
function nome(parametros) {
  // instruções
  return; // valor do retorno.
}



// Função Anônima
// Uma vairável pode armazenar uma função.
const soma = function (a,b) {
  return a + b; 
}

soma(2,10)

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

