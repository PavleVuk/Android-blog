function kreirajCookie(naziv,vrednost,days) {
    if (days) {
        var datum = new Date();
        datum.setTime(datum.getTime()+(days*24*60*60*1000));
        var istice = "; expires="+datum.toGMTString();
    }
    else var istice = "";
    document.cookie = naziv+"="+vrednost+istice+"; path=/";
}

function citajCookie(naziv) {
    var nameEQ = naziv + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function izbrisiCookie(naziv) {
    kreirajCookie(naziv,"",-1);
    window.location.href="registracija.html";
}
function kolacic(){
var x=document.getElementById("ime").value;
if(x!='')
kreirajCookie('ime1',x,365);
var y=citajCookie('ime1');
if(y)
alert("pozdrav,"+y);
return;
}

function popuni(){
document.getElementById("ime").value=citajCookie('ime1');
return}

function popuni1(){
document.getElementById("korisničko").value=citajCookie('ime1');
return}