function Umrechnen() {
    var BIE = document.WR.BIE.value;
    var ZW = document.WR.ZW.value;

    // Währungsfaktoren als Objekt
    var Faktoren = {
        "USD": 1.12,
        "YEN": 129.44,
        "GBP": 0.84,
        "CHF": 1.05,
        "CZK": 25.49,
        "RUB": 83.64,
        "TRY": 13.46,
        "PLN": 4.67,
        "KRW": 1336.83,
        "AUD": 1.63,
        "CAD": 1.47,
        "SEK": 11.36,
        "NOK": 11.54
    };

    if (Faktoren[ZW]) {
        var Faktor = Faktoren[ZW];
        var ER = (BIE * Faktor).toFixed(2); // Ergebnis auf 2 Dezimalstellen runden
        alert(BIE + " EUR = " + ER + " " + ZW);
        document.WR.ER.value = ER;
    } else {
        alert("Ungültige Währung: " + ZW);
        document.WR.ER.value = "";
    }
}
