/* Asignamos nuestras constantes a travez de selectores de clase */
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

let btnHombre = document.getElementById("btnHombre");
let btnMujer = document.getElementById("btnMujer");
let btnMake = document.getElementById("btnMake");

let btnAcerca = document.getElementById("btnAcerca");
let btnProductos = document.getElementById("btnProductos");
let btnContacto = document.getElementById("btnContacto");
let check = document.getElementById("check");



productContainers.forEach((item, i) => { /* Por cada item encontrado en el contenedor de productos */
    let containerDimensions = item.getBoundingClientRect(); /* Tomamos posicion y el tamaño de cada card product */
    let containerWidth = containerDimensions.width; /* Tomamos el ancho */

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;  /* Por cada click al boton el item se movera en +x segun en tamaño del contenedor  */
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;  /* Por cada click al boton el item se movera en -x segun en tamaño del contenedor */
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
function consultarDolar() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(info =>{
            if (info.casa.nombre == "Dolar Oficial"){
                document.getElementById("dolarOficial").innerHTML +=" "+"$"+info.casa.compra
                //console.log(info.casa.compra)
            }
        })
    })
    .catch(err=>console.log(err))

}
//Eventos
btnAcerca.addEventListener("click",()=>{
    btnProductos.classList.remove('active')
    btnContacto.classList.remove('active')
    check.checked=false

    if(btnAcerca.classList[0]=="active"){
        btnAcerca.classList.remove('active') 
        
    }else{
        btnAcerca.classList.add('active')
    }
})

btnProductos.addEventListener("click",()=>{
    btnAcerca.classList.remove('active')
    btnContacto.classList.remove('active')
    check.checked=false

    if(btnProductos.classList[0]=="active"){
        btnProductos.classList.remove('active') 
        
    }else{
        btnProductos.classList.add('active')
    }
})

btnContacto.addEventListener("click",()=>{
    btnProductos.classList.remove('active')
    btnAcerca.classList.remove('active')
    check.checked=false
    if(btnAcerca.classList[0]=="active"){
        btnContacto.classList.remove('active') 
        
    }else{
        btnContacto.classList.add('active')
    }

    
})

btnHombre.addEventListener("click",()=>{
    check.checked=false
})

btnMujer.addEventListener("click",()=>{
    check.checked=false
})

btnMake.addEventListener("click",()=>{
    check.checked=false
})