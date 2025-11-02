const choix = document.getElementById('choix');
const billet = document.getElementById('billet');
const InformationsParticipants = document.querySelector(".Informations-participants");
const confirmationSection = document.querySelector("#confirmation");
const reserveButtons = document.querySelectorAll(".choix1");
const prevButtons = document.querySelectorAll(".button2");
const nextButton = document.querySelectorAll(".nextbtn");
const firstCircle = document.getElementById("firstCercle");
const firstLine = document.getElementById("line1");
const secondCircle = document.getElementById("secondCercle");
const secondLine = document.getElementById("line2");
const thirdCircle = document.getElementById("thirdCercle");
const thirdLine = document.getElementById("line3");
const fourthCircle = document.getElementById("fourthCercle");
const confirmerButton = document.getElementById("confirmer");
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
    reservation.evenement = {
      titre: eventCard.querySelector("h4").textContent,
      date: eventCard.querySelectorAll("p")[0].textContent,
      lieu: eventCard.querySelectorAll("p")[1].textContent,
      places: parseInt(eventCard.querySelectorAll("p")[2].textContent),
      prix: parseFloat(eventCard.querySelectorAll("p")[3].textContent)
    };
    choix.style.display = "none";
    billet.style.display = "block";
    firstCircle.style.backgroundColor = "#0fa038ff";
    firstLine.style.backgroundColor = "#0fa038ff";
    updateBilletSection();
  });
});
nextButton.forEach(btn => {
  btn.addEventListener("click", () => {
    if (billet.style.display === "block") {
      billet.style.display = "none";
      InformationsParticipants.style.display = "block";
      secondCircle.style.backgroundColor = "#0fa038ff";
      secondLine.style.backgroundColor = "#0fa038ff";
    } else if (InformationsParticipants.style.display === "block") {
      InformationsParticipants.style.display = "none";
      confirmationSection.style.display = "block";
      thirdCircle.style.backgroundColor = "#0fa038ff";
      thirdLine.style.backgroundColor = "#0fa038ff";
    }
    showData();
  });
});
confirmerButton.addEventListener("click", () => {
  alert("Réservation confirmée ! Merci.");
  fourthCircle.style.backgroundColor = "#0fa038ff";
});

prevButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (confirmationSection.style.display === "block") {
      confirmationSection.style.display = "none";
      InformationsParticipants.style.display = "block";
      thirdCircle.style.backgroundColor = "#adadadff";
      thirdLine.style.backgroundColor = "#adadadff";
    } else if (InformationsParticipants.style.display === "block") {
      InformationsParticipants.style.display = "none";
      billet.style.display = "block";
      secondCircle.style.backgroundColor = "#adadadff";
      secondLine.style.backgroundColor = "#adadadff"; 
    } else if (billet.style.display === "block") {
      billet.style.display = "none";
      choix.style.display = "block";
      firstCircle.style.backgroundColor = "#adadadff";
      firstLine.style.backgroundColor = "#adadadff";
    }
    else  {
      fourthCircle.style.backgroundColor = "#adadadff";
    }
    showData();
  });
});

function updateBilletSection() {
  billet.querySelector(".billets-content").innerHTML = `
    <h3>${reservation.evenement.titre}</h3>
    <p>${reservation.evenement.date}</p>
    <p>${reservation.evenement.lieu}</p>
    <p>${reservation.evenement.places}</p>
    <p>${reservation.evenement.prix}€ par billet</p>
  `;
}

let ticketCount = 1;
const nombre = document.querySelector(".nombre");
const [minusBtn, ticketDisplay, plusBtn] = nombre.children;
let afficheMsg;

plusBtn.addEventListener("click", () => {
  if (ticketCount >= reservation.evenement.places) {
    afficheMsg = document.querySelector("#affiche-msg");
    afficheMsg.classList.add('affiche');
    afficheMsg.style.display = "block";
    afficheMsg.innerHTML = `aucun billet restant !!!`;
  } else {
    ticketCount++;
    ticketDisplay.textContent = ticketCount;
    reservation.billets = ticketCount;
  }
});

minusBtn.addEventListener("click", () => {
  if (ticketCount > 1) {
    ticketCount--;
    ticketDisplay.textContent = ticketCount;
    reservation.billets = ticketCount;
    if (afficheMsg) afficheMsg.style.display = "none";
  }
});

const nextSection3 = document.querySelector("#next-page-3");
const [firstButton, secondButton] = nextSection3.children;
let index = 0;

secondButton.addEventListener("click", () => {
  const particepants = document.getElementById("particepent");
  particepants.innerHTML = `
    <p>progresion</p>
    <p class="incrementIndex">${index}/${ticketCount} participants enregistrés</p>
  `;
});

const parentInputs = document.getElementById("inscription");
parentInputs.innerHTML = `
  <form id="formId" class="inscription-form">
    <div class="input-box">
      <input type="text" id="Nom" placeholder="Nom" required>
    </div>
    <span id="nom_error"></span>
    <div class="input-box">
      <input type="text" id="prenom" placeholder="Prénom" required>
    </div>
    <span id="prenom_error"></span>
    <div class="input-box">
      <input type="email" id="email" placeholder="Email" required>
    </div>
    <span id="email_error"></span>
    <div class="input-box">
      <input type="tel" id="phone" placeholder="Telephone" required>
    </div>
    <span id="phone_error"></span>
    <div class="login">
      <button type="submit" id="submet" class="btn">Ajouter ce participant</button>
    </div>
  </form>
`;

const form = document.getElementById("formId");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nom = document.getElementById("Nom");
  const prenom = document.getElementById("prenom");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const nomError = document.getElementById("nom_error");
  const prenomError = document.getElementById("prenom_error");
  const emailError = document.getElementById("email_error");
  const phoneError = document.getElementById("phone_error");

  nomError.textContent = "";
  prenomError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  nom.style.border = "none";
  prenom.style.border = "none";
  email.style.border = "none";
  phone.style.border = "none";

  let valid = true;
  if (nom.value.trim() === "") {
    nomError.textContent = "Le nom est requis.";
    nom.style.border = "2px solid red";
    valid = false;
    return;
  }
  if (prenom.value.trim() === "") {
    prenomError.textContent = "Le prénom est requis.";
    prenom.style.border = "2px solid red";
    valid = false;
    return;
  }
  const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email_check.test(email.value)) {
    emailError.textContent = "Adresse e-mail invalide.";
    email.style.border = "2px solid red";
    valid = false;
    return;
  }
  const phone_check = /^\+?[0-9]{7,15}$/;
  if (!phone_check.test(phone.value)) {
    phoneError.textContent = "Numéro de téléphone invalide.";
    phone.style.border = "2px solid red";
    valid = false;
    return;
  }

  const incrementIndex = document.querySelector(".incrementIndex");
  if (valid && index < ticketCount) {
    const participant = {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      phone: phone.value
    };
    reservation.participants.push(participant);
    index++;
    incrementIndex.textContent = `${index}/${ticketCount} participants enregistrés`;
    form.reset();
  }

  showData();
});
document.querySelector(".Informations-participants .nextbtn").addEventListener("click", () => {
  const detailsReservation = document.getElementById("details-reservation");
  detailsReservation.innerHTML = `
    <h3>${reservation.evenement.titre}</h3>
    <p>Date: ${reservation.evenement.date}</p>
    <p>Lieu: ${reservation.evenement.lieu}</p>
    <p>Nombre de billets: ${reservation.billets}</p>
    <p>Prix total: ${reservation.billets * reservation.evenement.prix}€</p>
    <div id="details-participants"></div>
  `;
  showData();
});
function showData() {
  const detailsParticipants = document.getElementById("details-participants");
  detailsParticipants.innerHTML = reservation.participants.map((p, i) => `
    <div class="participant-info">
      <h4>Participant ${i + 1}</h4>
      <p>Nom: ${p.nom}</p>
      <p>Prénom: ${p.prenom}</p>
      <p>Email: ${p.email}</p>
      <p>Téléphone: ${p.phone}</p>
    </div>
  `).join('');
}


