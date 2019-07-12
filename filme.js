let filmes = [
    {titulo:'Harray Potter', classificacao : 12},
    {titulo:'As branquelas', classificacao :16},
    {titulo:'Rei leão', classificacao : 10},
    {titulo:'Interestralar', classificacao : 10},
    {titulo:'Ninja Assassino', classificacao: 18},
    {titulo:'jhon', classificacao: 18},
    {titulo:'velozes e furiosos', classificacao:14}
    
];





function verficaoIdade(idade){
    

    for  (let item  in filmes){
        if(filmes[item].classificacao <= idade){
            console.log(filmes[item].titulo);
        }
   }
}

