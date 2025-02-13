function berechnen(){
    var Gewicht = document.BMI.Gewicht.value;
    var Groesse = document.BMI.Groesse.value;
    var BMI = document.BMI.BMI.value;
    var Kategorie = document.BMI.Kategorie.value;
    //alert(Gewicht);
    //alert(Groesse);
    //alert(BMI);
    //alert(Kategorie);

    if((Gewicht>10 && Gewicht<300) && (Groesse>0.5 && Groesse<3.00)){
    }
    else {
        alert("Eingabe ist ungültig - Bitte überprüfen sie die Werte")
    }

    var Ergebnis = Gewicht / (Groesse * Groesse);
    alert("Ihr BMI wer liegt bei: " + Ergebnis);
    document.BMI.BMI.value = Ergebnis;

    if(Ergebnis<=19){
        alert("Sie liegen in der Kategorie: Untergewicht");
        document.BMI.Kategorie.value = "Untergewicht";
    }
    else if(Ergebnis<=25){
        alert("Sie liegen in der Kategorie: Normalgewicht");
        document.BMI.Kategorie.value = "Normalgewicht";
    }
    else if(Ergebnis<=31){
        alert("Sie liegen in der Kategorie: Übergewicht");
        document.BMI.Kategorie.value = "Übergewicht";
    }
    else if(Ergebnis<=40){
        alert("Sie liegen in der Kategorie: Fettleibigkeit");
        document.BMI.Kategorie.value = "Fettleibigkeit";
    }
    else{
        alert("Sie liegen in der Kategorie: Starke Fettleibigkeit");
        document.BMI.Kategorie.value = "Starke  Fettleibigkeit";
    }
}

function SA(){
    var start = Number(document.Schleife.SZ.value);
    var ziel = Number(document.Schleife.EZ.value);
    while(start < ziel){
        start++;
        alert(start);
    }
}
