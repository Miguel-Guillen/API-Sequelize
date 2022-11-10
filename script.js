const valorInput1 = document.getElementById('nombre');
const valorInput2 = document.getElementById('edad');
const valorInput3 = document.getElementById('puesto');
const buscador = document.getElementById('buscador');

const contenido = document.getElementById('contenido');
const contenido2 = document.getElementById('contenido2');

const datos = [
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000,
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },        {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    },
    {
        nombre: 'miguel',
        correo: 'prueba@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15000
    },
    {
        nombre: 'daniel',
        correo: 'prueba_2@gmail.com',
        edad: 24,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'desarrollador',
        salario: 15500
    },
    {
        nombre: 'german',
        correo: 'prueba_4@gmail.com',
        edad: 99,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'scrum master',
        salario: 25000
    },
    {
        nombre: 'armando',
        correo: 'prueba_52@gmail.com',
        edad: 22,
        historial: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates nemo omnis neque? Fugit natus reprehenderit excepturi soluta, repudiandae perferendis beatae nesciunt consequuntur quia veritatis, quisquam quibusdam neque. Eos, reiciendis?',
        puesto: 'tester',
        salario: 10000
    }
];

valorInput1.addEventListener("keyup", filtrarNombre)
valorInput2.addEventListener("keyup", filtrarEdad)
valorInput3.addEventListener("keyup", filtrarPuesto)
buscador.addEventListener("keyup", filtrar)

// funcion de filtrado
function filtrarNombre(){
    const valor = valorInput1.value.toLowerCase();
    contenido.innerHTML = '';

    for(let programador of datos){
        let nombres = programador.nombre.toLowerCase();
        if(nombres.indexOf(valor) !== -1){
            contenido.innerHTML += `
            <tr>
                <td>${programador.nombre}</td>
                <td>${programador.correo}</td>
                <td>${programador.edad}</td>
                <td>${programador.puesto}</td>
                <td>$${programador.salario}</td>
            </tr>`;
        }
    }
}

function filtrarEdad(){
    const valor = valorInput2.value.toLowerCase();
    contenido.innerHTML = '';

    for(let programador of datos){
        let edades = programador.edad.toString();
        if(edades.indexOf(valor) !== -1){
            contenido.innerHTML += `
            <tr>
                <td>${programador.nombre}</td>
                <td>${programador.correo}</td>
                <td>${programador.edad}</td>
                <td>${programador.puesto}</td>
                <td>$${programador.salario}</td>
            </tr>`;
        }
    }
}

function filtrarPuesto(){
    const valor = valorInput3.value.toLowerCase();
    contenido.innerHTML = '';

    for(let programador of datos){
        let puestos = programador.puesto.toLowerCase();
        if(puestos.indexOf(valor) !== -1){
            contenido.innerHTML += `
            <tr>
                <td>${programador.nombre}</td>
                <td>${programador.edad}</td>
                <td>${programador.correo}</td>
                <td>${programador.puesto}</td>
                <td>$${programador.salario}</td>
            </tr>`;
        }
    }
}

function filtrar(){
    const valor = buscador.value.toLowerCase();
    contenido2.innerHTML = '';

    for(let programador of datos){
        let nombre = programador.nombre.toLowerCase();
        let edad = programador.edad.toString();
        let puesto = programador.puesto.toLowerCase();

        if(nombre.indexOf(valor) !== -1 || edad.indexOf(valor) !== -1 || puesto.indexOf(valor) !== -1){
            contenido2.innerHTML += `
            <tr>
                <td>${programador.nombre}</td>
                <td>${programador.correo}</td>
                <td>${programador.edad}</td>
                <td>${programador.puesto}</td>
                <td>$${programador.salario}</td>
            </tr>`;
        }
    }
}


// funcion de ejemplo que mustra los datos en una tabla
function insertarDatos(){
    datos.forEach(programador => {
        contenido.innerHTML += `
        <tr>
            <td>${programador.nombre}</td>
            <td>${programador.edad}</td>
            <td>${programador.historial}</td>
            <td>${programador.correo}</td>
            <td>${programador.puesto}</td>
            <td>$${programador.salario}</td>
        </tr>`;
    });

    datos.forEach(programador => {
        contenido2.innerHTML += `
        <tr>
            <td>${programador.nombre}</td>
            <td>${programador.edad}</td>
            <td>${programador.historial}</td>
            <td>${programador.correo}</td>
            <td>${programador.puesto}</td>
            <td>$${programador.salario}</td>
        </tr>`;
    });
}

insertarDatos();