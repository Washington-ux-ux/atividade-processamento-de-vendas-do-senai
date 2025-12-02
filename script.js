// Parte A: Abordagem Estruturada (Imperativa)
// Escreva um código que resolva o problema focando no "COMO FAZER".

// REQUISITOS:
// Utilize uma estrutura de repetição (for ou while) para percorrer a lista.
// Utilize condicionais (if) para filtrar os dados inválidos.
// Utilize variáveis mutáveis (ex: let total = 0) para acumular o resultado passo a passo.


const vendas = [150, 0, null, 300, 50, 10, 1200, "CANCELADA", 55];

let desconto = 0.9; 

let soma = 0;

for(let i = 0; i < vendas.length; i++) {
  
  let valor = vendas[i];

  if (typeof valor === "number") {
    valor = valor * desconto; 
    
    soma += valor;
  }
}

console.log("A soma com desconto é: ", soma);
// A soma com desconto é:  1588.5



// Parte B: Abordagem Funcional
// Escreva um código que resolva o mesmo problema focando no "O QUE FAZER".

// REQUISITOS:
// Não utilize laços de repetição explícitos (for).
// Crie funções pequenas e puras para as operações (ex: ehVendaValida, aplicarImposto).
// Utilize o encadeamento de funções de alta ordem para transformar os dados (ex: filter ➔ map ➔ reduce).
// Garanta a imutabilidade (não altere o array vendas original).



const venda = [150, 0, null, 300, 50, 10, 1200, "CANCELADA", 55];

const ehVendaValida = (valor) => typeof valor === "number"; 

const aplicarImposto = (valor) => valor * 0.9; 

const somar = (acumulado, atual) => acumulado + atual;

const total = vendas
  .filter(ehVendaValida)   
  .map(aplicarImposto)     
  .reduce(somar, 0);       

console.log("O resultado da soma é: ", total);
// O resultado da soma é:  1588.5




