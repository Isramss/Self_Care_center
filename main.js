// Tableaux Mantras & Affirmations

const Mantras = [
  "Je m’aime, je crois en moi-même et je me soutiens quoi qu’il arrive.",

  "Je suis aimée, aimante et aimable.",

  "Je fais de mon mieux à chaque instant.",

  "J’ai en moi les pouvoirs de réalisation de ce que je souhaite.",

  "Je suis la personne qui décide de tout ce que je fais et j’ai toujours le choix.",

  "Je donne le meilleur de moi-même et je suis comme je suis.",

  "Là, maintenant, à cet instant, je vais bien.",

  "Je mérite d’être heureuse.",

  "L’échec est une étape sur la route du succès.",

  "J’accepte ce que je ne peux pas changer afin de me concentrer sur ce que je peux changer.",

  "Tout est expérience. J’apprends chaque jour.",

  "J’ai confiance en moi et en mes décisions.",

  "Je n’ai pas besoin d’être parfaite, j’ai besoin d’être moi-même.",

  "Je ne cherche pas à faire plaisir à tout le monde, je fais ce que je pense être bien et juste.",

  "Je suis forte, je suis capable, je suis sereine.",

  "Ma situation actuelle n’est pas ma destination finale.",

  "Je suis force, je suis détermination.",

  "L’important est ce que je pense de moi-même, pas ce que les autres pensent de moi.",

  "Rien ne peut me résister, je peux tout réussir.",

  "Je suis unique, mon parcours est unique.",

  "J’apprécie mon esprit, mes émotions, mon corps et mon âme.",

  "Toutes mes émotions sont utiles, je les accueille, je les écoute, je m’en libère.",

  "Je choisis d’être heureuse. Je choisis de m’aimer.",

  "Je vise le progrès, pas la perfection.",

  "Plus j’ai confiance en moi, plus j’ai confiance en d’autres personnes.",

  "Je suis ravie de mes talents, de mes dons et de mes qualités.",
  "Je suis moi, et c’est bien.",

  "Je lâche prise et j’accepte ce que je ne peux pas contrôler.",
  "Qu’importe les épreuves, j’ai confiance en moi et je le mérite.",
  "J’ai déjà réussi, je réussirai encore.",
  "Je fais de mon mieux et j’en suis fière.",
  "Je travaille sur moi-même, pour moi-même, par moi-même.",
];

const Affirmations = [
  "Je suis capable d'apprendre et de grandir chaque jour.",
  "Mes efforts sont la clé de mon succès.",
  "Chaque défi est une opportunité pour moi de grandir.",
  "Je suis entouré d'amour et de soutien.",
  "Je suis digne de bonheur et de réussite.",
  "Mes pensées créent ma réalité, donc je choisis des pensées positives.",
  "Je mérite d'atteindre mes objectifs et de réaliser mes rêves.",
  "Je suis fort(e) et résilient(e) face aux défis.",
  "Je suis fier(e) de qui je suis et de ce que j'ai accompli.",
  "Mon potentiel est illimité, et je choisis de me concentrer sur les possibilités.",
];
// déclaration de mes variables
let Affirmation = document.querySelector("#choice1");
let choixAffirmations = Math.floor(Math.random() * Affirmations.length);

let Mantra = document.querySelector("#choice2");
let choixMantras = Math.floor(Math.random() * Mantras.length);

let btn = document.querySelector(".btn_Message");
let btn_clear = document.querySelector(".Clear");

let err = document.querySelector(".err");

let boudha = document.querySelector(".boudha");

let Message = document.querySelector(".box_text");

// Ma function click
btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (Affirmation.checked) {
    Message.innerHTML = Affirmations[choixAffirmations];
    btn_clear.style.display = "";
  } else if (Mantra.checked) {
    Message.innerHTML = Mantras[choixMantras];
    btn_clear.style.display = "";
  } else {
    err.innerHTML = "Selectionne un choix";
  }
});

function Clearbtn() {
  Message.innerHTML = '<img class="boudha" src="assets/meditate.svg" />';
  btn_clear.style.display = "none";
}
console.log(Clearbtn);

// Je veux que lorsque je selectionne une radio et que je cliques sur le bouton cela m'affiche (en fonction de la radio selectionné) le text demandé tout en me masquant le boudha

//si mantra est selectioné affiche le moi dans la console
