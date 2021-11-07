let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao)* adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos +(bebidasPP(duracao) / 2 * criancas);
    resultado.innerHTML = `<p><br>${qtdTotalCarne/1000}KG de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de cerveja.`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's de 2 Litros Bebidas` 
    console.log(qtdTotalCarne);

}


function carnePP(duracao){
    if (duracao >= 6){
        return 800;
    }else{
        return 650;
    }
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2500;
    }else{
        return 1400;
    }
}
function bebidasPP(duracao){
    if(duracao >= 6){
        return 1700;
    }else{
        return 1000;
    }
}
console.log("teste 9")