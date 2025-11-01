
const choix = document.getElementById('choix');
const billet = document.getElementById('billet');
const InformationsParticipants = document.querySelector(".Informations-participants");

const reserveButtons = document.querySelectorAll(".choix1");
const prevButtons = document.querySelectorAll(".button2");
const nextButton = document.querySelectorAll(".nextbtn")
const firstCircle = document.getElementById("firstCercle");
const firstLine = document.getElementById("line1");
const secondCircle = document.getElementById("secondCercle");
const secondLine = document.getElementById("line2");
const evenmentsCard = document.querySelectorAll(".evenment1")

let reservation = {
  evenement: null,
  billets: 1,
  participants: []
};

billet.style.display = "none";
InformationsParticipants.style.display = "none";
reserveButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const eventCard = e.target.closest(".evenment1");
    const eventData = {
      titre: eventCard.querySelector("h4").textContent,
      date: eventCard.querySelectorAll("p")[0].textContent,
      lieu: eventCard.querySelectorAll("p")[1].textContent,
      places: eventCard.querySelectorAll("p")[2].textContent,
      prix: eventCard.querySelectorAll("p")[3].textContent
    };
    reservation.evenement = eventData;
    console.log("Événement choisi :", reservation.evenement);
    choix.style.display = "none";
    billet.style.display = "block";
    firstCircle.style.backgroundColor = "#078E51";
    firstLine.style.backgroundColor = "#078E51";

    updateBilletSection();
  });
});
let e;
function updateBilletSection() {
  const billetContent = billet.querySelector(".billets-content");
  e = reservation.evenement;

  billetContent.innerHTML = `
    <h3>${e.titre}</h3>
    <p>${e.date}</p>
    <p>${e.lieu}</p>
    <p>${e.places}</p>
    <p>${e.prix}</p>
    `;
}
let ticketCount = 1;
const nombre = document.querySelector(".nombre");
const [minusBtn, ticketDisplay, plusBtn] = nombre.children;//even selector//
let afficheMsg;
// function dyal ila mab9awch ticket affiche mab9awch les tickts//
//ila n9es display lih msg//
plusBtn.addEventListener("click", () => {
  if (ticketCount >= +e.places) {
    afficheMsg = document.querySelector("#affiche-msg");
    afficheMsg.classList.add('affiche');
    afficheMsg.style.display = "block";
    afficheMsg.innerHTML = `aucun billet restant !!!`;
  }
  else {
    ticketCount++;
    ticketDisplay.textContent = ticketCount;
    reservation.billets = ticketCount;
    console.log(reservation.billets);
    //stocke les donnes dyal reservation ela 7sab ch7al mn ticket khda//
    for (let i = 0; i < ticketCount; i++) {
      reservation.participants[i] = reservation.evenement;
      console.log(reservation.participants)
    }

  }

});
minusBtn.addEventListener("click", () => {
  if (ticketCount > 1) {
    ticketCount--;
    ticketDisplay.textContent = ticketCount;
    reservation.billets = ticketCount;
    afficheMsg.style.display = "none";
  }
});

nextButton.forEach(btn => {
  btn.addEventListener("click", () => {
    if (choix.style.display === "block") {
      choix.style.display = "none";
      billet.style.display = "block";
    } else if (billet.style.display === "block") {
      billet.style.display = "none";
      InformationsParticipants.style.display = "block";
      secondCircle.style.backgroundColor = "#078E51";
    secondLine.style.backgroundColor = "#078E51";
    }
    //else if for section 4//
  });
});
prevButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (InformationsParticipants.style.display === "block") {
      InformationsParticipants.style.display = "none";
      billet.style.display = "block";
    } else if (billet.style.display === "block") {
      billet.style.display = "none";
      choix.style.display = "block";

    }
  });
});
    const nextSection3 = document.querySelector("#next-page-3");
const [firstButton, secondButton] = nextSection3.children;
console.log(secondButton)
let index = 0;
secondButton.addEventListener("click",() => {
  const particepants = document.getElementById("particepent");
  particepants.innerHTML =
    `<p>progresion</p>
      <p class = "incrementIndex">${index}/${ticketCount} participants enregistrés</p>
      `
        const incrementIndex = document.querySelector(".incrementIndex");
});

//section 3//
// 7ttit les elements dyal formula f div//
const parentInputs = document.getElementById("inscription");
parentInputs.innerHTML = `
    <form id = "formId" class="inscription-form">
      <div class="input-box">
        <input type="text" id="Nom" placeholder="Nom">
      </div>
      <span id="nom_error" ></span>
      <div class="input-box">
        <input type="text" id="prenom" placeholder="Prénom">
      </div>
      <span id="prenom_error"></span>
      <div class="input-box">
        <input type="email" id="email" placeholder="Email">
      </div>
      <span id="email_error"></span>
      <div class="input-box">
        <input type="tel" id="phone" placeholder="Telephone">
      </div>
      <span id="phone_error" ></span>
      <div class="login">
        <button type="submit" id="submet" class="btn">Ajouter ce participant</button>
      </div>
    </form>

  `;
const form = document.getElementById("formId")
form.addEventListener("submit", (e) => {
  e.preventDefault();
const nom = document.getElementById("Nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submet = document.getElementById("submet");

const nomError = document.getElementById("nom_error");
const prenomError = document.getElementById("prenom_error");
const emailError = document.getElementById("email_error");
const phoneError = document.getElementById("phone_error");
// verification Data//
  nomError.textContent = "";
  prenomError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  nom.style.border = "2px solid black";
  prenom.style.border = "2px solid black";
  email.style.border = "2px solid black";
  phone.style.border = "2px solid black";
  let valid = true;
  if (nom.value.trim() === "") {
    nomError.textContent = "Le nom est requis.";
    nom.style.border = "2px solid red";
    nomError.style.color = "red";
    valid = false;
    return;
  }
  if (prenom.value.trim() === "") {
    prenomError.textContent = "Le prénom est requis.";
    prenom.style.border = "2px solid red";
    prenomError.style.color = "red";
    valid = false;
    return;
  }
  const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email_check.test(email.value)) {
    emailError.textContent = "Adresse e-mail invalide.";
    email.style.border = "2px solid red";
    emailError.style.color = "red";
    valid = false;
    return;
  }
  const phone_check = /^\+?[0-9]{7,15}$/;
  if (!phone_check.test(phone.value)) {
    phoneError.textContent = "Numéro de téléphone invalide.";
    phone.style.border = "2px solid red";
    phoneError.style.color = "red";
    valid = false;
    return;
  }
  //incrementation//

  const incrementIndex = document.querySelector(".incrementIndex");
  if (valid && index < ticketCount) {
    form.reset();
    index++;
    incrementIndex.textContent=`${index}/${ticketCount} participants enregistrés`;
  }
});

function enregestrieParticipants() {
  // cree array kat2afichee formula we9tma 3mer formula li 9bel 3la hssab ticket
}
