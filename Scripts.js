function mostrarImagen(numero) {
  const ruta = `imagen${numero}.png`; // Cambia a .png si tus imágenes son .png
  document.getElementById("imagen").src = ruta;
}
