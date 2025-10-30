
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
    InformationsParticipants.style.display = "none";

    firstCircle.style.backgroundColor = "#078E51";
    firstLine.style.backgroundColor = "#078E51";
  });
});
