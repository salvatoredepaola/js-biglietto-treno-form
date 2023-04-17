const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");

genera.addEventListener("click", function(){

    const prezzoPerdistanza = 0.21;
    let nome = document.getElementById("nome").value;
    let distanza = parseInt( document.getElementById("distanza").value );
    let prezzo = 0;
    
    console.log(`La distanza è di ${distanza} km`);
    prezzo = distanza * prezzoPerdistanza;
    console.log(`Il prezzo è di ${prezzo}€`);
    let eta = document.getElementById("eta").value;
    let offerta = "Biglietto Standard";
    if( eta=="1" ) {
        offerta = "Biglietto Junior";
        prezzo *= 0.8;
    } else if ( eta=="3") {
        offerta = "Biglietto Senior";
        prezzo *= 0.6;
    }
    prezzo = prezzo.toFixed(2);
    console.log(`Il prezzo finale è di ${prezzo}€`);
    document.getElementById("nomepasseggero").innerText = nome;
    document.getElementById("offerta").innerText = offerta;
    document.getElementById("prezzo").innerText = prezzo;
} );


annulla.addEventListener("click", function() {
    
    document.getElementById("nome").value = "";
    document.getElementById("distanza").value = "";
    document.getElementById("eta").value = "";

});
