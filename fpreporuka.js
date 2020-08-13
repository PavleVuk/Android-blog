
function preporuka(){
    if((document.getElementById("m5").checked) && (document.getElementById("dbitno").checked)
    && (document.getElementById("bbitno").checked) && (document.getElementById("fbitno").checked) 
    && (document.getElementById("une").checked) && (document.getElementById("iOS").checked)){
    document.getElementById("preporuka").innerHTML="Razmislite o iPhone 8";
    return false;
    }

    
    else if((document.getElementById("v5").checked) && (document.getElementById("dmbitno").checked)
    && (document.getElementById("bmbitno").checked) && (document.getElementById("fmbitno").checked) 
    && (document.getElementById("une").checked) && (document.getElementById("android").checked)){
    document.getElementById("preporuka").innerHTML="Razmislite o Google Pixel 2";
    return false;
    }

    
    else if((document.getElementById("v6").checked) && (document.getElementById("dmbitno").checked)
    && (document.getElementById("bmbitno").checked) && (document.getElementById("fmbitno").checked) 
    && (document.getElementById("uda").checked) && (document.getElementById("android").checked)){
    document.getElementById("preporuka").innerHTML="Razmislite o LG V30";
    return false;
    }

    else{
document.getElementById("preporuka").innerHTML="Morate izabrati sve stavke";
    return false;
    
    }
}
