function validacija() {
    var greska, ime, lozinka1, lozinka1_1, lozinka2, lozinka2_2, email;
    greska=document.getElementById("greska");
    greska.innerHTML="";
    ime=document.getElementById("ime").value;
    lozinka1=document.getElementById("lozinka0").value;
    lozinka1_1=document.getElementById("lozinka0").value.length;
    lozinka2=document.getElementById("lozinka1").value;
    lozinka2_2=document.getElementById("lozinka1").value.length;
    email=document.getElementById("email").value;
    
try{
if(ime=="") throw "Morate uneti ime";
if(lozinka1=="") throw "Morate uneti lozinku";
if(lozinka1_1 < 8) throw "Lozinka ne sme biti kraća od 8 karaktera";
if(lozinka2=="") throw "Morate uneti lozinku za potvrdu";
if(lozinka2 != lozinka1) throw "Lozinke se ne podudaraju";
if(lozinka2_2 < 8) throw "Lozinka ne sme biti kraća od 8 karaktera";
if(email=="") throw "Morate uneti email";
if(greska=="") throw "Uspešno ste se registrovali";
}
catch(error){
	greska.innerHTML=error;
}
}