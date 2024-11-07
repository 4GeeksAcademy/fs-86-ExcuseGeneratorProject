/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function sandwichLoco() {
    const pan = obtenerElTipoDePanAleatorio();
    const proteina = obtenerProteinaAleatoria();
    const vegetable = obtenerVegetablesAleatorio();
    const sauce = obtenerSauceAleatorio();
    const sandwich = armarSandwich(pan, proteina, vegetable, sauce);
    return sandwich;
  }

  function obtenerElTipoDePanAleatorio() {
    const tiposDePan = new Array("Avena", "Centeno", "Blanco");
    const posicionDelPanRandom = Math.floor(Math.random() * tiposDePan.length);
    return tiposDePan[posicionDelPanRandom];
  }

  function obtenerProteinaAleatoria() {
    const tiposDeProteina = new Array(
      "jamón",
      "pollo terayaqui",
      "carne con queso"
    );
    const posicionDeLaProteinaRandom = Math.floor(
      Math.random() * tiposDeProteina.length
    );
    return tiposDeProteina[posicionDeLaProteinaRandom];
  }

  function obtenerVegetablesAleatorio() {
    const tiposDeVegetables = new Array("lechuga", "tomate", "aceitunas");
    const posicionDeVegetablesRandom = Math.floor(
      Math.random() * tiposDeVegetables.length
    );
    return tiposDeVegetables[posicionDeVegetablesRandom];
  }

  function obtenerSauceAleatorio() {
    const tiposDeSauce = new Array("ketchup", "Mahonesa", "Barbacoa");
    const posicionDeSauceRandom = Math.floor(
      Math.random() * tiposDeSauce.length
    );
    return tiposDeSauce[posicionDeSauceRandom];
  }

  function armarSandwich(pan, proteina, vegetable, sauce) {
    return `${pan} ${proteina} ${vegetable} ${sauce}.`;
  }

  document.getElementById("Dorian").innerHTML = sandwichLoco();
  console.log("Hello Rigo from the console!");
};
