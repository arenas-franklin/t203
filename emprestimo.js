// Criar um programa que avalia uma proposta  de empréstimo.
// O programa recebe: idade do ClientRect, quanro dinheiro 
// ele quer emprestar , quanto ele ganha por mês


// REGRAS para aceito o emprestimo:
//  - entre 22 e 55 anos:
//  -valor a apartir de 1000 Rais 
//  - valor não ultrapassar 15x o que ele recebe 

//  REsponder: Aceito ou não aceito 

//  extra:
//  - perguntar também a quantidade de parcelas (3 a 20 vezes)
//  e calcular juros de 8% ao mes (composto)

//  Responder valor total do emprestimo e valor d parcela 

let nomeCliente = prompt("informe o seu nome: ");
let idadeDoCliente = Number(prompt("qual a sua idade? :"));
    while(idadeDoCliente < 22){
        alert('idade inválida');
    }

let qtdDinheiroEmprestado = Number(prompt("qual a quantidade de dinheiro que vc quer emprestado "));
let parcelas = Number(prompt("quantas aparcelas vc quer ? "));
let taxa = 0.08;

const emprestimo = function (){
    
    if(idadeDoCliente < 22 || idadeDoCliente > 55){
        console.log("sua idade foi invalida " + nomeCliente);
        

    }else if(qtdDinheiroEmprestado < 1000){
        console.log("valor uma abaixo permetido - valor permetido é acima de 1000");

        
    }else if(parcelas > 15){
        console.log("quantidade de parcelas não permetidas, parcelas maxima permetida são 15");
    }
    else{
        console.log("credito aprovado");
        console.log("valor do total " + montante(parcelas, taxa,qtdDinheiroEmprestado));
        console.log("valor da parcela " + parcela(qtdDinheiroEmprestado, taxa));
        console.log("quantidade de parcelas " + parcelas);
    }


}

function parcela (capital , taxa){
    return capital * taxa;
}

function montante (parcela, taxa, capital ){
    return (capital*(1+taxa)**parcela).toFixed(2);
}

emprestimo();
