let isim = document.querySelector("#myName")
let myName = prompt("İsminiz? ")
isim.innerHTML += `${myName}`

function tarih(){
    let date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date
}
setInterval(tarih, 1000);

