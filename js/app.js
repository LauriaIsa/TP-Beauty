/* Asignamos nuestras constantes a travez de selectores de clase */
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => { /* Por cada item encontrado en el contenedor de productos */
    let containerDimensions = item.getBoundingClientRect(); /* Tomamos posicion y el tamaño de cada card product */
    let containerWidth = containerDimensions.width; /* Tomamos el ancho */

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 290;  /* Por cada click al boton el item se movera en +x segun en tamaño del contenedor  */
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 290;  /* Por cada click al boton el item se movera en -x segun en tamaño del contenedor */
    })
})