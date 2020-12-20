//carne = 400 gr por pessoa + de 6 horas - 650
//cerveja = 1200 ml por pessoa + 6 horas - 2000ml
//refrigerante/agua = 1000ml por pessoa + 6 horas 1500 ml

//crianças valem por 0.5

function calcular(){

        let adultos = inputAdultos = document.getElementById("adultos").value;
        let criancas = inputCriancas = document.getElementById("criancas").value;
        let duracao = inputDuracao = document.getElementById("duracao").value;

        let qdtTotalCarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas);
        let qdtTotalCerveja = cervejapp(duracao) * adultos;
        let qdtTotalBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas);

        resultado.innerHTML =`<p>${(qdtTotalCarne / 1000)} Kg de carne</p>`
        resultado.innerHTML +=`<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
        resultado.innerHTML +=`<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet´s de 2L de Bebidas</p>`
}

function carnepp(duracao) {
    if(duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}

function cervejapp(duracao) {
    if(duracao >= 6) {
        return 2000;
    }else{
        return 1000;
    }
}

function bebidaspp(duracao) {
    if(duracao >= 6) {
        return 1500;
    }else{
        return 800;
    }
}