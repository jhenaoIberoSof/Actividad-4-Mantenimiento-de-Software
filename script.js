function generarColor() {
  var colores = ["amarillo", "verde", "rojo"];
  var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

  var colorBox = document.getElementById("colorBox");
  colorBox.style.backgroundColor = colorAleatorio;
}
