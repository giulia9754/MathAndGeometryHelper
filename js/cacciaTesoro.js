let questionNumber = 1; // Start at the first question

// Function to load each question based on the question number
function loadQuestion() {
    console.log("Loading question:", questionNumber);
    const messageOutput = document.getElementById("message-output");
    messageOutput.innerText = ""; // toglie messaggi precedenti

    // Clear any previously selected answer
    document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);

    // carica domande e risposte in base al numero
    if (questionNumber === 1) {
        document.getElementById("question").innerText = "Quanto fa 5+3?";
        document.getElementById("labelA").innerText = "8";
        document.getElementById("labelB").innerText = "10";
        document.getElementById("labelC").innerText = "7";
        document.getElementById("quiz-image").src = "img/map1.jpg"; // immagine1
    } else if (questionNumber === 2) {
        document.getElementById("question").innerText = "quanto fa 12-4?";
        document.getElementById("labelA").innerText = "9";
        document.getElementById("labelB").innerText = "8";
        document.getElementById("labelC").innerText = "7";
        document.getElementById("quiz-image").src = "img/mapAl2.png"; // immagine2
    } else if (questionNumber === 3) {
        document.getElementById("question").innerText = " il risultato di 7x6?";
        document.getElementById("labelA").innerText = "36";
        document.getElementById("labelB").innerText = "40";
        document.getElementById("labelC").innerText = "42";
        document.getElementById("quiz-image").src = "img/mapAl3.png."; // immagine3
    } else if (questionNumber === 4) {
        document.getElementById("question").innerText = "Scegli la radice quadrata di 64";
        document.getElementById("labelA").innerText = "8";
        document.getElementById("labelB").innerText = "6";
        document.getElementById("labelC").innerText = "10";
        document.getElementById("quiz-image").src = "img/mapAl4.png";  // immagine4
    } else if (questionNumber === 5) {4
        document.getElementById("question").innerText = "Dimmi la somma degli angoli interiori di un triangolo";
        document.getElementById("labelA").innerText = "90";
        document.getElementById("labelB").innerText = "180";
        document.getElementById("labelC").innerText = "360";
        document.getElementById("quiz-image").src = "img/mapAl5.png"; // immagine5
    } else {
        messageOutput.innerText = "Hai trovato il tesoro!";
        document.getElementById("quiz-image").src = "img/mapVinto.png";
        console.log("Quiz completed.");
        return; // Fine del quiz
    }
}

// Funzione per iniziare il quiz
function startQuiz() {
    document.getElementById("start-button").setAttribute("hidden", true); // Nasconde il tasto inizia
    document.getElementById("quiz-container").removeAttribute("hidden"); //mostra il container delle domande
    questionNumber = 1; // Per essere sicuro che carichi la prima domanda
    loadQuestion(); // Carica la prima domanda
}

// funzione per verificare che la risposta è corretta
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const messageOutput = document.getElementById("message-output");

   
    

    // controlla che la risposta è corretta e passa alla successiva
    if ((questionNumber === 1 && selectedOption.value === "A") ||
        (questionNumber === 2 && selectedOption.value === "B") ||
        (questionNumber === 3 && selectedOption.value === "C") ||
        (questionNumber === 4 && selectedOption.value === "A") ||
        (questionNumber === 5 && selectedOption.value === "B")) {

        messageOutput.innerText = "Corretto!";
        document.getElementById("quiz-image").src = `image${questionNumber}.jpg`; //carica immagine successiva
        questionNumber++; // porta alla domanda successiva
        loadQuestion(); // carica immediatamente la domanda successiva
    } else {
        messageOutput.innerText = "Sbagliato.Riprova!";
        console.log("Incorrect answer. Staying on question:", questionNumber);
    }
}

// Reset all inizio del quiz
function resetQuiz() {
    questionNumber = 1;
    document.getElementById("quiz-image").src = "img/map1.jpg.jpg"; // Reset all immagine iniziale
    document.getElementById("start-button").removeAttribute("hidden"); // Show the Start Quiz button
    document.getElementById("quiz-container").setAttribute("hidden", true); // Hide the quiz content
    document.getElementById("message-output").innerText = ""; // Clear any messages
    loadQuestion(); // carica la prima domanda
}
