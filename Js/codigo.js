let min = 1;
let max = 3;
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 📄";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    resultado = "Perdiste";
  }
  return resultado;
}

let jugador = 0;
let triunfos = 0;
let perdidas = 0;
while (triunfos < 3 && perdidas < 3) {
  jugador = prompt("Elegi: 1 para 🥌,2 para 📄 o 3 para ✂ ");
  let pc = aleatorio(1, 3);

  alert("PC elige: " + eleccion(pc));
  alert("Elegiste: " + eleccion(jugador));

  if (pc == jugador) alert("Empate");
  else if (jugador == 3 && pc == 2) {
    alert("Ganaste ");
    triunfos = triunfos + 1;
  } else if (jugador == 1 && pc == 3) {
    alert("Ganaste ");
    triunfos = triunfos + 1;
  } else if (jugador == 2 && pc == 1) {
    alert("Ganaste ");
    triunfos = triunfos + 1;
  } else if (pc == 3 && jugador == 2) {
    alert("Perdiste");
    perdidas = perdidas + 1;
  } else if (pc == 1 && jugador == 3) {
    alert("Perdiste");
    perdidas = perdidas + 1;
  } else if (pc == 2 && jugador == 1) {
    alert("Perdiste");
    perdidas = perdidas + 1;
  } else perdidas = perdidas + 1;
  alert("Ganaste " + triunfos + " veces . Perdiste " + perdidas + " veces .");
}