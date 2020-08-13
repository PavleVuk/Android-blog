function kreirajCookie1(naziv,vrednost,days) {
    if (days) {
        var datum = new Date();
        datum.setTime(datum.getTime()+(days*24*60*60*1000));
        var istice = "; expires="+datum.toGMTString();
    }
    else var istice = "";
    document.cookie = naziv+"="+vrednost+istice+"; path=/";
}

function citajCookie1(naziv) {
    var nameEQ = naziv + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function izbrisiCookie1(naziv) {
    kreirajCookie(naziv,"",-1);
    window.location.href="registracija.html";
}
function kolacic1(){
var x=document.getElementById("lozinka0").value;
if(x!='')
kreirajCookie('lozinka',x,365);
var y=citajCookie('lozinka');
return;
}

function popuni2(){
document.getElementById("lozinka").value=citajCookie('lozinka');
return}

