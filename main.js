const urlRobert = "https://pbs.twimg.com/media/Ejw3aVcUcAAMm_m.jpg";

// Seleccionamos todas las imágenes en la página
const imagenes = document.getElementsByTagName('img');

// Iteramos sobre cada imagen y reemplazamos su fuente por la nueva URL
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = urlRobert;
}

