"use strict";

var company = "NSIA GROUPE";
let year = new Date().toLocaleDateString(
  {
    year: "number",
    day: "number",
  },
  "fr-FR"
);

const response = true;
let userName;
userName = "welcome";
if (response) {
  let userName = "greet";
}
let nom_utilisateur = "jlgoueguy@gmail.com";
console.log(nom_utilisateur);
console.log(company, year, response, userName);
