import './app.css'

function App() {

    const numero = 10+5
    const usuario = {
        nombre:'Juan',
        apellido:'Pérez',
    }

    function formatearNombre(persona) {
        return persona.nombre + ' ' +persona.apellido 
    }

    return (
        <>
        <h1>Expresiones y Funciones</h1>
        <p>{formatearNombre(usuario)}</p>
        </>

    )

}

export default App