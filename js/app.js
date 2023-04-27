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


window.onscroll = ()=>{
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 100){ //Cuando el nivel de scroll sea mayor a 100
        document.querySelectorAll('.go-top-container')[0].classList.add('show')
        console.log()
    }else{
        document.querySelectorAll('.go-top-container')[0].classList.remove('show')
    }
}

document.querySelectorAll('.go-top-container')[0].addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})
