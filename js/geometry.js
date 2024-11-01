//calcolo Area e Perimetro Cerchio
function calcolaCerchio() {
    //dichiarazioni variabili con puntamenti html
    var raggio = parseInt(document.getElementById('raggioCerchio').value);
    //calcoli
    var areaC = 3.14 * (raggio * raggio);
    var perimetroC = 2 * 3.14 * raggio;
    //output
    if (raggio >= 0) {
        document.getElementById('calcoloAreaCerchio').innerHTML = areaC;
        document.getElementById('calcoloPerimetroCerchio').innerHTML =
            perimetroC;
    } else {
        alert('Inserire valori positivi del raggio!');
    }
}
//calcolo Area e Perimetro Quadrato
function calcolaQuadrato() {
    //dichiarazioni variabili con puntamenti html
    var latoQ = parseInt(document.getElementById('latoQuadrato').value);
    //calcoli
    var areaQ = latoQ * latoQ;
    var perimetroQ = latoQ * 4;
    //output
    if (latoQ >= 0) {
        document.getElementById('calcoloAreaQuadrato').innerText = areaQ;
        document.getElementById('calcoloPerimetroQuadrato').innerHTML =
            perimetroQ;
    } else {
        alert('Inserire valori positivi del lato del quadrato!');
    }
}
//calcolo Area e Perimetro Rettangolo
function calcolaRettangolo() {
    //dichiarazioni variabili con puntamenti html
    var altezzaR = parseInt(document.getElementById('altezzaRettangolo').value);
    var baseR = parseInt(document.getElementById('baseRettangolo').value);
    //calcoli
    var areaR = altezzaR * baseR;
    var perimetroR = (altezzaR + baseR) * 2;
    //output
    if (isNaN(altezzaR) || isNaN(baseR) || altezzaR < 0 || baseR < 0) {
        alert('Inserisci valori di base e altezza positivi!');
    } else if (altezzaR == baseR) {
        document.getElementById('calcoloAreaRettangolo').innerText = areaR;
        document.getElementById('calcoloPerimetroRettangolo').innerHTML =
            perimetroR;
        alert(
            'NOTA: Stai Calcolando i valori di Area e Perimetro di un quadrato, che è un particolare rettangolo!'
        );
    } else {
        document.getElementById('calcoloAreaRettangolo').innerText = areaR;
        document.getElementById('calcoloPerimetroRettangolo').innerHTML =
            perimetroR;
    }
}
//calcolo Area e Perimetro Triangolo
function calcolaTriangolo() {
    //dichiarazioni variabili con puntamenti html
    var altezzaT = parseInt(document.getElementById('altezzaTriangolo').value);
    var baseT = parseInt(document.getElementById('baseTriangolo').value);
    var lato1T = parseInt(document.getElementById('latoATriangolo').value);
    var lato2T = parseInt(document.getElementById('latoBTriangolo').value);
    //calcoli
    var areaT = (baseT * altezzaT) / 2;
    var perimetroT = lato1T + lato2T + baseT;
    //output
    if (isNaN(baseT)) {
        alert('Inserire obbligatoriamente la base per procedere al calcolo!');
        return;
    } else if (
        isNaN(altezzaT) ||
        altezzaT < 0 ||
        isNaN(baseT) ||
        baseT < 0 ||
        isNaN(lato1T) ||
        lato1T < 0 ||
        isNaN(lato2T) ||
        lato2T < 0
    ) {
        alert('Inserire valori positivi!');
    } else if (
        !(
            lato1T + lato2T <= baseT ||
            baseT + lato2T <= lato1T ||
            baseT + lato2T <= lato2T
        )
    ) {
        document.getElementById('calcoloAreaTriangolo').innerHTML = areaT;
        document.getElementById('calcoloPerimetroTriangolo').innerHTML =
            perimetroT;
    } else {
        alert(
            `Verifica che i valori inseriti di "a"=${lato1T},"b"=${baseT},"c"=${lato2T} per il calcolo del perimetro rispettino la condizione di Disuguaglianza Triangolare!!! : CIASCUN LATO DEVE ESSERE MAGGIORE ALLA SOMMA DEGLI ALTRI DUE!!!`
        );
    }
}

//calcolo Area e Perimetro Trapezio
function calcolaTrapezio() {
    //dichiarazioni variabili con puntamenti html
    var baseMaggioreTr = parseInt(
        document.getElementById('baseMaggioreTrapezio').value
    );
    var baseMinoreTr = parseInt(
        document.getElementById('baseMinoreTrapezio').value
    );
    var altezzaTr = parseInt(document.getElementById('altezzaTrapezio').value);
    var latoATr = parseInt(document.getElementById('latoATrapezio').value);
    var latoBTr = parseInt(document.getElementById('latoBTrapezio').value);
    //calcoli
    var areaTr = ((baseMaggioreTr + baseMinoreTr) * altezzaTr) / 2;
    var perimetroTr = baseMaggioreTr + baseMinoreTr + latoATr + latoBTr;
    //output
    if (
        isNaN(altezzaTr) ||
        altezzaTr < 0 ||
        isNaN(latoATr) ||
        latoATr < 0 ||
        isNaN(latoBTr) ||
        latoBTr < 0 ||
        isNaN(baseMaggioreTr) ||
        baseMaggioreTr < 0 ||
        isNaN(baseMinoreTr) ||
        baseMinoreTr < 0
    ) {
        alert('Inserisci valori positivi!');
    } else if (baseMaggioreTr < baseMinoreTr) {
        alert(
            'Inserisci B > b, affinché Venga Calcolata la figura di Un Tarpezio!'
        );
    } else {
        document.getElementById('calcoloAreaTrapezio').innerHTML = areaTr;
        document.getElementById('calcoloPerimetroTrapezio').innerHTML =
            perimetroTr;
    }
}
