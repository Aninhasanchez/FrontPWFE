function calcularTotal(){
    //parseFloat obriga transformar em Float
    let precoPrato = parseFloat(document.getElementById('prato').value)
    let quantidade = parseInt(document.getElementById('quantidade').value)

    // === não compara somente o valor, mas também o tipo dele, int com int, str com string
    if(precoPrato === 0){
        document.getElementById('resultado').textContent="Por favor, informe um prato"

    }else{

        //tofixed coloca duas casas decimais
        let total = precoPrato * quantidade;
        document.getElementById('resultado').textContent = "Total a pagar é R$" +total.toFixed(2)
    }

}

