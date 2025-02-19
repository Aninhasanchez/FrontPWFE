// pegando itens HTML e mudando sua estrutura
let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color='red';

let body = window.document.body;
body.style.background = "black";

//achando um elemento pelo id
function mudarCor(){
    let div = document.getElementById
    ("MinhaDiv");

    if(div.style.backgroundColor == "fuchsia"){
        div.style.backgroundColor = "blueviolet";
    }
    else{
        div.style.backgroundColor = "fuchsia";
    }
    
}

//Mudar a estrutura de uma div que tem uma classe
let box = document.querySelector(".box");
box.style.backgroundColorb = "blue";
box.style.width = "800px";