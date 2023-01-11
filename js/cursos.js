//Variables
const btnAdmin = document.getElementById('btnAdmin');
const botones = document.querySelectorAll('.botones');
const btnEliminar = document.querySelector('.btnEliminar');
const btnCrear = document.querySelector('.btnCrear');
//const btnModificar = document.querySelector('.btnModificar');
//const contenedorModificar = document.querySelector('#lista-modificar tbody');
const modificar_curso = document.getElementById('modificar_curso');
const cursos = document.querySelectorAll('.curso');
const listadoCursosHTML = document.querySelector('#listaCursos');
// Arrays
const listaCursos = [...cursos];
let cursosModificar = [];

console.log(listadoCursosHTML);

// Que se ejecute cuando el DOM este listo
document.addEventListener('DOMContentLoaded', cargarEventListeners() );

// Funcion para registrar todos los eventListeners
function cargarEventListeners() {
    btnAdmin.addEventListener('click', mostrarAdmin);
    btnEliminar.addEventListener('click', eliminarCurso);
    btnCrear.addEventListener('click', crearCurso);
    //btnModificar.addEventListener('click', modificarCurso);
}


/* Funciones */

// Funcion para mostrar el formulario de administrador
function mostrarAdmin() {
    let passwd = prompt('Ingrese la contraseña');
    if (passwd === 'admin') {
        mostrarBotones();
        
    } else {
        alert('Contraseña incorrecta');
    }
    console.log('click admin');
}

// Funcion para mostrar los botones de administrador
function mostrarBotones() {
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove('botones');
    }
}

// Funcion para eliminar un curso
function eliminarCurso(e) {
    console.log('Eliminando curso');
    for (let i = 0; i < listaCursos.length; i++) {
        listaCursos[i].addEventListener('click', function () {
            this.remove();
        });
    }
    
    console.log(e.bubbles, e.cancelBubble)
    e.stopPropagation();
    console.log(e.bubbles, e.cancelBubble);
}

// Funcion para crear un curso
function crearCurso(e) {
    console.log('Creando curso');
    const nombre = prompt('Ingrese el nombre del curso');
    const descripcion = prompt('Ingrese la descripcion del curso');
    const precio = prompt('Ingrese el precio del curso');
    const modalidad = prompt('Ingrese la modalidad del curso');
    // const imagen = prompt('Ingrese la url de la imagen del curso');
    const curso = document.createElement('div');
    curso.classList.add('curso');
    curso.innerHTML = `
    <div class="curso" >

        <div class="curso__imagen">
            <img src="img/curso1.jpg" alt="Imagen del curso">
        </div>

        <div class="curso__informacion" id="curso_nuevo">
            <h4 class="no-margin">${nombre}</h4>
            <p class="curso__label">Precio:
                <span class="curso__info">${precio} &euro;</span>
            </p>
            <p class="curso__label">Modalidad:
                <span class="curso__info">${modalidad}</span>
            </p>
            <p class="curso__descripcion">
            ${descripcion} 
            </p>
        </div> 
        <div class="btn-group botones" role="group" aria-label="Basic example">
            <button type="button" class="btnEliminar btn btn-danger">Borrar</button>
            <button type="button" class="btnCrear btn btn-warning">Crear</button>
        </div>

    </div> 
    `;
    listadoCursosHTML.appendChild(curso);
    console.log('click crear');
    
}
        

// function leerDatosParaModificar(curso) {
//     // creamos objeto con el contenido del curso actual
//     const infoCurso = {
//         imagen: curso.querySelector('img').src,
//         nombre: curso.querySelector('.nombre').textContent,
        
        
//     }
   
//     console.log(nombre);
//     // Agregar elemento a ofcanva modificar
//     cursosModificar = [infoCurso];
//     modificarSelectHTML();

// }

//Funcion para modificar un curso
// function modificarCurso(e) {
//     console.log('Modificando curso');
//     const cursoSeleccionado = e.target.parentElement.parentElement;
//     //leerDatosParaModificar(cursoSeleccionado);
 
// }