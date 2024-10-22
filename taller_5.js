//! Resolucion del taller #5

//-----------------------------------------------------------------------------------------
// El objetivo de esta funcion es verificar si se puede establecer una conexión con la URL especificada.
async function obtenerProductosAcer() {
    try {
        const respuesta = await fetch('https://www.acer.com/us-en')
        if (!respuesta.ok) {
            throw new Error('Error al obtener los productos')
        }

    } catch (error) {
        console.error('Error:', error)
    }
}

obtenerProductosAcer()

//---------------------------------------------------------------------------------------
// Esta funcion omprueba si el servidor al que se intenta acceder está respondiendo o no.
const obtenerProductos='https://www.acer.com/us-en'

const verifyConexion= async() => {
    try {
        console.log(await fetch(obtenerProductos))
    } catch (error) {
        console.log(error)
    }
}

verifyConexion()

//---------------------------------------------------------------------------------------
// Esta funcion verifica la conexion, tiene un retardo de 3 segundos

const conexion=(datosConexion)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            datosConexion ? resolve("OK Conexion") : reject("Conexion Bad")
        }, 3000);
    })
}

conexion('https://www.acer.com/us-en')

//--------------------------------------------------------------------------------------




