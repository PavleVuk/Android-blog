function otvoriModal() {
  document.getElementById('mojModal').style.display = "block";
}

function zatvoriModal() {
  document.getElementById('mojModal').style.display = "none";
}

var indeks = 1;
prikaziSlajd(indeks);

function plusSlajd(n) {
  prikaziSlajd(indeks += n);
}

function trenutniSlajd(n) {
  prikaziSlajd(indeks = n);
}

function prikaziSlajd(n) {
  var i;
  var slajdovi = document.getElementsByClassName("slajd");
  var tacke = document.getElementsByClassName("demo");
  var naslov = document.getElementById("naslov");
  if (n > slajdovi.length) {indeks = 1}
  if (n < 1) {indeks = slajdovi.length}
  for (i = 0; i < slajdovi.length; i++) {
      slajdovi[i].style.display = "none";
  }
  for (i = 0; i < tacke.length; i++) {
      tacke[i].className = tacke[i].className.replace(" aktivni", "");
  }
  slajdovi[indeks-1].style.display = "block";
  tacke[slideIndex-1].className += " active";
  naslov.innerHTML = tacke[indeks-1].alt;
}