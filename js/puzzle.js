const gridItems = document.getElementById(`gridItems`);

const elementos = [];

/* FUNCION EXPRESADA PARA PODER LLENAR UN ARRAY CON DIV */
const llenarArray = () =>
{
    for (let i = 0; i < 9; i++)
    {
        let div = document.createElement(`div`)
        div.innerHTML = `<img src="./img/${i+1}.jpg" class="img" id="img${8-i}">`
        elementos.push(div);
    }
}

/* FUNCIÓN PARA INSERTAR HIJOS AL GRID CREADO EN EL DOM */
const insertarHijosGrid = () =>
{
    /* SE ORDENA/DESORDENA EL ARRAY CON UN MATH.RAMDOM */
    elementos.sort((a, b) => Math.random() - 0.5)

    elementos.forEach(element =>
    {
        gridItems.appendChild(element);
    })
}

window.onload = () =>
{
    /* EL ORDEN ES IMPORTANTE, PRIMERO SE LLENA EL ARRAY */
    llenarArray();
    
    /* LUEGO DE LLENADO EL ARRAY INGRESAMOS A LOS HIJOS */
    insertarHijosGrid();
}


/* SORTABLE ES UNA LIBRERIA DE JS QUE PERMITE CREAR DRAG AND DROP FACILMENTE */
/* SE PUEDE INICIALIZAR CON Sortable.create(elementoPadre, {estilos}) */
/* SE PUEDE INICIALIZAR CON new Sortable(elementoPadre, {estilos}) */
Sortable.create(gridItems,{
    /* AQUÍ SE INSERTAN ESTILOS PARA MANEJAR DE DISTINTA FORMA EL DRAG AND DROP */
    animation: 150,
    swap: true,
    /* swapClass, es la clase que se le dará al elemento destinatario */
    swapClass: `intercambiar`,
    /* ghostClass, es la clase que se le dará al elemento seleccionado */
    ghostClass: `seleccionado`,
    /* ESTOS NOMBRES SE PUEDEN LLAMAR COMO SEAN, YA QUE SE VINCULAN CON EL CSS */
});

/* CREO UNA VARIABLE GLOBAL PARA RECOLECTAR A TODAS LAS IMAGENES */
let elementosCreados;

/* FUNCION PARA RECTIFICAR EL ORDEN */
const verificar = () =>
{
    elementosCreados = document.querySelectorAll(`.img`);
    /* let variable = true */

    /* console.log(elementosCreados);
    elementosCreados.forEach((element, index) =>
    {
        console.log(element.getAttribute(`id`));
        console.log(`img${index}`);
        
        if(element.getAttribute(`id`) !== `img${index}`) variable = false;
        
    }) */

    for (let index = 0; index < elementosCreados.length; index++)
    {
        if(elementosCreados[index].getAttribute(`id`) !== `img${index}`) return false;
    }
    return true
    /* return variable; */
}


/* VARIABLE PARA LLAMAR AL BOTON */
let boton = document.getElementById(`boton`);

boton.addEventListener(`click`, () =>
{
    /* GUARDAMOS EL RESULTADO DEL VERIFICAR EN UNA VARIABLE PARA ASÍ CONFIGURAR EL MENSAJE */
    let resultVerificacion = verificar()

    resultVerificacion ? alert(`El puzzle está completo, FELICITACIONES`) : alert(`El puzzle está desordenado, por favor inténtelo de nuevo`)
})