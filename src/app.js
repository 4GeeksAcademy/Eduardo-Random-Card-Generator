/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }
  let simbol = ["♦", "♥", "♠", "♣"];
  let numero = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let simbolCarta = aleatorio(simbol);
  let CartaArriba = document.querySelector("#cartaArriba");
  CartaArriba.innerHTML = simbolCarta;

  let numCarta = aleatorio(numero);
  let elementNumCarta = document.querySelector("#numCarta");
  elementNumCarta.innerHTML = numCarta;

  let CartaAbajo = document.querySelector("#cartaAbajo");
  CartaAbajo.innerHTML = simbolCarta;

  CartaAbajo.style.transform = "rotate(180deg)";
  if (simbolCarta == "♥" || simbolCarta == "♦") {
    CartaAbajo.style.color = "red";
    CartaArriba.style.color = "red";
  }
};
