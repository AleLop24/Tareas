let palabra = prompt("Escribe una palabra:");

if (palabra) {
  palabra = palabra.toLowerCase();

  let invertida = palabra.split("").reverse().join("");

  if (palabra === invertida) {
    alert("Es un palíndromo.");
  } else {
    alert("No es un palíndromo.");
  }
} else {
  alert("No hay nada escrito.");
}
