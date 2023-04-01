/** class Tratamientos{
    constructor(tipo,descripcion,disponibilidad,hora){
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.hora = hora;
    }
}

const terapiaManual = new Tratamientos(1,'Se trata de la fórmula más clásica y más practicada de la fisioterapia. Suele relacionarse con los masajes pero también engloba otras técnicas como las movilizaciones, manipulaciones, bombeos, etc.', 'lunes', '8am');
const osteopatia = new Tratamientos(2,'La osteopatía es un conjunto de técnicas manuales encaminadas al tratamiento de dolores presentes en diferentes zonas del cuerpo mediante manipulaciones de las articulaciones.', 'martes', '1pm');
const neurodinamia = new Tratamientos(3,'La neurodinamia consiste en la realización de ejercicios enfocados a la movilización de los nervios asociados a la lesión en cuestión, provocando una liberación de los tejidos que lo rodean, produciendo así un alivio inmediato del dolor y disminuyendo la posible inflamación muscular.', 'miercoles', '11am');
const drenajeLinfatico = new Tratamientos(4,'Son masajes realizados con las manos aplicados específicamente sobre los ganglios para aliviar las retenciones de líquidos. El fisioterapeuta localiza los ganglios y los manipula suavemente para vaciarlos, aliviando acumulaciones en el sistema linfático.', 'jueves', '10am');

const verTratamientos = [terapiaManual, osteopatia, neurodinamia, drenajeLinfatico];

console.log(verTratamientos);

const bienvenida = alert ('¡Hola, bienvenido! Usted esta a punto de utilizar un simulador interactivo para conocer sobre los tratamientos que tenemos en nuestro Centro Kinesiologico GIMA.');

let selecTratamientos = +prompt ('Indique a continuación el número de tratamiento que desea conocer, entre las siguientes opciones: 1-Terapia Manual / 2-Osteopatia / 3-Neurodinamia / 4-Drenaje Linfatico.');

let tratamientoCorrecto = false;

while(tratamientoCorrecto === false){
const tratar = verTratamientos.find(tratar=>tratar.tipo === selecTratamientos)

    if(!tratar){
        selecTratamientos = +prompt('¡Indique un número correcto!');
    } else{
        tratamientoCorrecto = true;
    }
}

alert('El tratamiento indicado es: ' + selecTratamientos);

if(selecTratamientos === 1){
    alert(terapiaManual.descripcion);
    alert(terapiaManual.disponibilidad);
    alert(terapiaManual.hora);
} else if(selecTratamientos === 2){
    alert(osteopatia.descripcion);
} else if(selecTratamientos === 3){
    alert(neurodinamia.descripcion);
} else if(selecTratamientos === 4){
    alert(drenajeLinfatico.descripcion);
}

alert('Si desea volver a seleccionar un tratamiento toque la telca "F5". De lo contrario continuemos.')
alert('A continuación le mostraremos la disponibilidad del tratamiento seleccionado');

if(selecTratamientos === 1){
    prompt('Tenemos disponibilidad los días lunes a las 8am ¿Desea sacar un turno con un especialista en Terapia Manual? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
} else if(selecTratamientos === 2){
    prompt('¿Desea sacar un turno con un especialista en Osteopatía? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
} else if(selecTratamientos === 3){
    prompt('¿Desea sacar un turno con un especialista en Neurodinámia? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
} else if(selecTratamientos === 4){
    prompt('¿Desea sacar un turno con un especialista en Drenaje Linfático? Ingrese "SI", de lo contrario precione "F5" para volver a seleccionar un tratamiento');
}

alert('Disculpe, no pudimos registrar su turno, a la brevedad seguiremos desarrollando este apartado, Muchas gracias por elegir GIMA.');
alert('Desarrollado por Juan Pablo Miranda'); **/

//ENVÍO DE FORMULARIO

/**const titulo = document.getElementById('contactanos')
const formulario = document.getElementById('formulario')
const inputNombre = document.getElementById('nombre')
const inputTelefono = document.getElementById('telefono')
const inputEmail = document.getElementById('email')
const inputMensaje = document.getElementById('mensaje')

formulario.onsubmit = (e) => {
    e.preventDefault()
    const infoPaciente = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        email: inputEmail.value,
        mensaje: inputMensaje.value
    }
    localStorage.setItem('infoPaciente', JSON.stringify(infoPaciente))
    formulario.remove()
    titulo.innerText = `¡Mensaje enviado con éxito!`
}**/

//TURNOS

const divTurno = document.getElementById('divTurno')

class turnoDisponibles {
    constructor(id,especialidad,nombre,dia,hora){
        this.id = id
        this.especialidad = especialidad
        this.nombre = nombre
        this.dia = dia
        this.hora = hora
    }
}

const turnos = [
    new turnoDisponibles(1,'Kinesiologia','Gimena','miercoles','10:00'),
    new turnoDisponibles(2,'Kinesiologia','Gimena','viernes','12:00'),
    new turnoDisponibles(3,'DrenajeLinfatico','Cecilia','lunes','10:00'),
    new turnoDisponibles(4,'DrenajeLinfatico','Cecilia','jueves','10:00'),
    new turnoDisponibles(5,'Lipolaser','Sandra','martes','9:00'),
    new turnoDisponibles(6,'Lipolaser','Sandra','jueves','9:00')
]

turnos.forEach(turnoDisponibles=>{
divTurno.innerHTML +=
`<article class="container">
<div class="articulo row d-flex justify-content-center">
    <div class="card m-5 shadow-sm" data-aos="fade-up-right" style="width: 18rem;"card shadow">
        <div class="card-body text-center">
            <h5 class="card-title text-center fs-3">${turnoDisponibles.especialidad}</h5>
                <p class="card-text text-start">${turnoDisponibles.nombre}</p>
                <p class="card-text text-start">${turnoDisponibles.dia}</p>
                <p class="card-text text-start">${turnoDisponibles.hora}</p>
                <button class="btn btn-primary">Solicitar</button>
        </div>
    </div>
    </div>   
  </article>` 
})


const solicitud = []

const btnSolicitar = document.querySelector('.btn-primary')
btnSolicitar.for


