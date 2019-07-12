function somar (a=0, b=0){
    return a+b;
}

function fazerEscadinha(material, degraus){
    let escada = material;
    for(let i =0; i < degraus; i++){
        console.log(escada);
        escada+= material;
    }
}

function parOuImpar(numero){
    if(numero%2 == 0){
        return "é par";
    }
    else{
        return 'é impar';
    }
}

const aleatorio = function(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}   