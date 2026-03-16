// Obtiene la URL de las imágenes de la carpeta assets de forma dinámica compatible con Vite
export function getImageUrl(nameImage) {
    return new URL(`../assets/${nameImage}.jpg`, import.meta.url).href
}