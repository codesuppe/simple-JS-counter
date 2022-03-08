const htmlH3 = document.getElementById("counterValue");
var btnDown = document.getElementById("btndown");
var fullPrice = document.getElementById("fullPrice");

let count = 1;
let singlePrice = document.getElementById("singlePrice").value;

htmlH3.innerHTML = count;
fullPrice.value = singlePrice * count;

function countUp(){
    count++;
    fullPrice.value = singlePrice * count;
    htmlH3.innerHTML = count;

    if (btnDown.disabled = true){
        btnDown.disabled = false;
    }
}

function countDown(){
    count--;
    fullPrice.value = singlePrice * count;
    htmlH3.innerHTML = count;
    
    if(count <1){
        btnDown.disabled = true;
    }

    
}














/* let mitNavn = "Janus";
let mitEfternavn ="Fabricius";

let minAlder = 29;

let minRigtigeAlder = minAlder / 2;

let minAlder2Gange = minAlder + minAlder;   

htmlH3.innerHTML = mitNavn + " " + mitEfternavn + " Min alder er " + minAlder2Gange + " år.";

 */