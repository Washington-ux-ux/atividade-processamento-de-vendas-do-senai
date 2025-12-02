Você foi contratado para desenvolver um módulo de relatórios para um e-commerce. O sistema recebe uma lista bruta de vendas realizadas no dia. No entanto, nem todas as vendas são válidas (algumas foram canceladas ou têm valor zero) e é necessário aplicar uma taxa de imposto sobre as vendas válidas antes de calcular o faturamento final.

Dados de Entrada:
Utilize o seguinte  de vendas (valores em reais) para seus testes:

   const vendas = [150, 0, null, 300, 50, 10, 1200, "CANCELADA", 55];


Objetivo da Atividade
Seu objetivo é processar essa lista de dados para entregar o  que a empresa faturou.
 Considere apenas os valores que são  e que sejam .
 Aplique um desconto de  (multiplicar por 0.9) em cada venda válida.
 Some todos os valores líquidos para obter o faturamento final.
O que o aluno deve fazer:

Parte A: Abordagem Estruturada (Imperativa)
Escreva um código que resolva o problema focando no "COMO FAZER".

REQUISITOS:
Utilize uma estrutura de repetição (for ou while) para percorrer a lista.
Utilize condicionais (if) para filtrar os dados inválidos.
Utilize variáveis mutáveis (ex: let total = 0) para acumular o resultado passo a passo.
Não utilize métodos prontos de array como filter ou reduce.

Parte B: Abordagem Funcional
Escreva um código que resolva o mesmo problema focando no "O QUE FAZER".

REQUISITOS:
Não utilize laços de repetição explícitos (for).
Crie funções pequenas e puras para as operações (ex: ehVendaValida, aplicarImposto).
Utilize o encadeamento de funções de alta ordem para transformar os dados (ex: filter ➔ map ➔ reduce).
Garanta a imutabilidade (não altere o array vendas original).