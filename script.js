
const choix = document.getElementById('choix');
const billet = document.getElementById('billet');
const InformationsParticipants = document.querySelector(".Informations-participants");

const reserveButtons = document.querySelectorAll(".choix1");
const prevButtons = document.querySelectorAll("#button2");

const firstCircle = document.getElementById("firstCercle");
const firstLine = document.getElementById("line1");
const secondCircle = document.getElementById("secondCercle");
const secondLine = document.getElementById("line2");

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
plusBtn.addEventListener("click", () => {
  if (ticketCount >= +e.places ) {
    afficheMsg = document.querySelector("#affiche-msg");
    afficheMsg.classList.add('affiche');
    afficheMsg.style.display="block";
   afficheMsg.innerHTML=`aucun billet restant !!!`;
  }
  else {
    ticketCount++;
    ticketDisplay.textContent = ticketCount;
    reservation.billets = ticketCount;
    console.log(reservation.billets);
  
  }

});
minusBtn.addEventListener("click", () => {
  if (ticketCount > 1) {
    ticketCount--;
    ticketDisplay.textContent = ticketCount;
    reservation.billets = ticketCount;
    afficheMsg.style.display="none";
  }
});

function nextPage(index) {
  if (index === 1) {
    billet.style.display = "none";
    InformationsParticipants.style.display = "block";

    secondCircle.style.backgroundColor = "#078E51";
    secondLine.style.backgroundColor = "#078E51";
  }
}
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

