let frases= [
    '"A educação é a arma mais poderosa que você pode usar para mudar o mundo." -Nelson Mandela',
    '“O maior erro que um homem pode cometer é sacrificar a sua saúde a qualquer outra vantagem.” -Arthur Schopenhauer',
    '“Não se curem além da conta. Gente curada demais é gente chata. Todo mundo tem um pouco de loucura.” -Nise da Silveira',
    '“A violência, seja qual for a maneira como ela se manifesta, é sempre uma derrota.” -Jean-Paul Sartre',
    '“A natureza não faz milagres, faz revelações.” -Carlos Drummond de Andrade',
    '“Preconceito é opinião sem conhecimento.” -Voltaire',
    ' “A internet é muito mais que uma tecnologia. É um meio de comunicação, de interação e de organização social.” -Manuel Castells',
    '“Faz da tua vida um reflexo da sociedade que desejas.” - Mahatma Gandhi',
    '“A publicidade é uma das formas mais interessantes e difíceis da literatura moderna.” -Aldous Huxley',
]

function gerarCitacao(){
    var valorAleatorio = Math.floor(Math.random() * (frases.length));
    document.getElementById('citacao').innerHTML = frases[valorAleatorio];
}

function limparCitacao(){
    document.getElementById('citacao').innerHTML = " ";
}