// Funções: bloco de codigo que pode ser reutilizavel, sendo chmado quantas vezes forem necessarias.

//nome da função, o que ela vai fazer, o recebimento de paramentros e chavez de bloco de intruções
function saudarAluno(){
    //Tudo o que vai ser feito deve estar entre as "{}"
    alert("Olá, voces serao extraordinario no hackathon")
}

//passagem de parametros
function somar(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d ;
}

//função anonima: quando temos poucas ou nenhuma chance de te-la de chamar mais de uma vez
const subtrair = function(n1, n2){
    return n1 - n2;
}


//Arrow function: fazer um codigo mais compacto para trazer o mesmo resultado.
//ele obrigatoriamente tem um unico retorno, e basicamente uma linha de codigo
function dividir(v1, v2){
    return v1/v2
}

//Arrow é a simbologia de "=>" Após o simbolo, informo qual script deve ser executado
const dividirArrow = (a1, a2) => a1/a2



//para chamar a função, necessito manter a estrutura dela
saudarAluno()

//chamando a função soma
resultado = somar(10, 30, 15, 65)
document.write(`o resultado da sua soma é ${somar}`)