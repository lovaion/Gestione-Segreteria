window.addEventListener("load",function (){
    inizializza()
    registraEventi()
});
var tuttiStudenti = new Array();

function Studente(matricola, nome, cognome, email) {
    this.matricola = matricola;
    this.cognome = cognome;
    this.nome = nome;
    this.email = email;
}

function inizializza(){
var studente1 = new Studente(201018, "Daniele", "Avolio", "daniele.avolio@gmail.com");
tuttiStudenti.push(studente1);
var studente2 = new Studente(201912, "Alex","Fazio", "alex.fazio@jetbrains.com");
tuttiStudenti.push(studente2);
var studente3 = new Studente(201917,"Simone","Bilotta","simonebilotta.curingone@gmail.com");
tuttiStudenti.push(studente3);
var studente4 = new Studente(201922,  "Domenico Nicodemo", "Panetta","ddannidoro@gmail.com");
tuttiStudenti.push(studente4);
popolaTabella();

}
//Genera lo studente e lo manda ad aggiungiStudente
function registraStudente() {
    var matricola = document.querySelector("#matricola").value;
    var nome = document.querySelector("#nome").value;
    var cognome = document.querySelector("#cognome").value;
    var email = document.querySelector("#email").value;

    var studente = new Studente(matricola, nome, cognome, email);
    aggiungiStudente(studente);
}

function popolaTabella(){
    tuttiStudenti.forEach(function(stud,index){
      aggiungiStudente(stud);
    })
}


function registraEventi() {
    var bottoneIscrivi = document.getElementById("idIscrivi");
    bottoneIscrivi.addEventListener("click", registraStudente);

    var bottoneRiordina = document.getElementById("sort");
    bottoneRiordina.addEventListener("click", sortStudents);
}
//Si prende lo studente e poi lo aggiunge
function aggiungiStudente(studente) {
    tuttiStudenti.push(studente);

    var table = document.querySelector(".table");
    var row = table.insertRow(-1);
    var matricola = row.insertCell(0);
    var nome = row.insertCell(1);
    var cognome = row.insertCell(2);
    var email = row.insertCell(3);

    nome.textContent = studente.nome;
    cognome.textContent = studente.cognome;
    matricola.textContent = studente.matricola;
    email.textContent = studente.email;
}

function sortStudents() {
    var table = document.getElementById(("tabellaStud"));
    var righe, x, y, riordinando, daRiordinare;
    //parto dicendo che va ordinato
    riordinando = true;
    while (riordinando) {
        //per ora lo fermo perche se poi non devo ordinare, esco
        riordinando = false;
        //mi predno le righe
        righe = table.rows;
        //adessp scorriamo le righe
        for (var i = 1; i < (righe.length - 1); i++) {
            daRiordinare = false;
            x = righe[i].getElementsByTagName("TD")[0];
            y = righe[i + 1].getElementsByTagName("TD")[0];
            //controllaimo se vanno scambiati
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                daRiordinare = true;
                break;
            }
        }
        //se vanno scambiati, gli cambio la posizione
        if (daRiordinare) {
            righe[i].parentNode.insertBefore(righe[i + 1], righe[i]);
            riordinando = true;
        }
    }
}