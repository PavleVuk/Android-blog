function validacija() {
    
	if(document.registracija.ime.value == ""){
	document.getElementById("error0").innerHTML = "Morate uneti ime";
	return false; //vraća false da forma ne bi izvršila default akciju
	}
	else if ((document.registracija.lozinka0.value== "") && (document.registracija.lozinka1.value == "")){	
	document.getElementById("error1").innerHTML = "Morate uneti lozinku";
	return false;
	}
	else if ((document.registracija.lozinka0.value.length < 8) && (document.registracija.lozinka1.value.length < 8)){ 
	document.getElementById("error2").innerHTML = "Lozinka mora biti duža od 8 karaktera";
	return false;
	}
	else if(document.registracija.lozinka0.value != document.registracija.lozinka1.value){
	document.getElementById("error2").innerHTML = "Lozinke se ne podudaraju";
	return false;
	}
	
	else if(document.registracija.email.value==""){
	document.getElementById("error3").innerHTML = "Morate uneti email adresu";
	return false;
	}
	
	document.getElementById("registracija").onsubmit = handleinput;
} 
</script>