import { PropertyNotFoundError, NullNameError, InvalidIdError } from './errors.js';

let BaseDeDatosFalsa = [
    {
        id: 'a',
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profecion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profecion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profecion: "Ing Sistemas Computacionales"
    },
    {
        id: 4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profecion: "Ing Industrial"
    },
    {
        id: 5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profecion: "Lic Derecho"
    },
    {
        id: 6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17
    },
];

function consultarPropiedad(propiedad) {
    let resultados = [];

    BaseDeDatosFalsa.forEach((item) => {
        let resultado;
        try {
            if (propiedad === 'id') {
                if (isNaN(item.id)) {
                    throw new InvalidIdError();
                }
            } else if (propiedad === 'nombre') {
                if (item.nombre === null) {
                    throw new NullNameError();
                }
            } else {
                if (!item.hasOwnProperty(propiedad)) {
                    throw new PropertyNotFoundError(propiedad);
                }
            }
            resultado = item[propiedad];
        } catch (e) {
            resultado = `Error: ${e.message}`;
        }
        resultados.push(resultado);
    });

    return resultados;
}

document.getElementById('consultar').addEventListener('click', () => {
    const propiedad = document.getElementById('query').value;
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    const resultados = consultarPropiedad(propiedad);
    let resultadosTexto = '';
    resultados.forEach((resultado, index) => {
        resultadosTexto +=  `<ul>Resultado ${index + 1}: ${resultado}</ul>`;
    });
    Swal.fire({
        title: "RESULTADOS",
        html: resultadosTexto,
        icon: "success"
    });
});