const nombre1Element = document.getElementById("nombre1");
const nombre2El = document.getElementById("nombre2");

const plusBtn = document.getElementById("plus");
const moinBtn = document.getElementById("moin");
const produitBtn = document.getElementById("produit");
const divisionBtn = document.getElementById("division");
const egaleBtn = document.getElementById("egale");


let operateurChoisi = '';

function calc(n1, operateur, n2) {
    let result;
    if(operateur === '+') {
        result = Number(n1) + Number(n2);
    }
    if(operateur === '-') {
        result = Number(n1) - Number(n2);
    }
    if(operateur === '*') {
        result = Number(n1) * Number(n2);
    }
    if(operateur === '/') {
        result = Number(n1) / Number(n2);
    }


    return result;
};

plusBtn.addEventListener("click", () => {operateurChoisi = '+'});
moinBtn.addEventListener("click", () => {operateurChoisi = '-'});
produitBtn.addEventListener("click", () => {operateurChoisi = '*'});
divisionBtn.addEventListener("click", () => {operateurChoisi = '/'});

egaleBtn.addEventListener("click", () => {
    const resultat = calc(nombre1Element.value, operateurChoisi, nombre2El.value);
    console.log(resultat);
    document.getElementById('valiny').textContent= "Valiny dia " + resultat
})





