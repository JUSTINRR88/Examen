import { lista_de_componentes } from "./data.js";

let div_root = document.querySelector(".root")

lista_de_componentes.forEach((cada_elemento)=>{
    let div = document.createElement("div");
    div.innerHTML = `

    <div class="contenedor">
    <div class="titulo">${cada_elemento.nombre}</div>
    <div class="descripccion">${cada_elemento.descripcion}</div>
    <div class="boton">
    <div class="btn2">Boton</div>    
    </div>
    </div>


    
    `
    div_root.appendChild(div)
})
let btn = document.querySelector(".boton")

function ActivarBoton(){
    
}