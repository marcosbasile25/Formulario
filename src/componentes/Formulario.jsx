import React, { useState } from 'react'


const initialState = {
    nombre: "",
    // apellido: "",
    email: "",
  };


const Formulario = () => {
    const [usuario, setUsuario] = useState(initialState);

    const enviarDatos = () => {
        console.log(usuario);
        setUsuario(initialState);
      };

  return (
    <>
    <div>Formulario</div>;
      <form action="">
        <input
          className="form-control mt-3"
          value={usuario.nombre}
          type="text"
          onChange={(e) =>
            setUsuario({
              ...usuario,
              nombre: e.target.value,
            })
          }
        />
        {/* <input
         className="form-control mt-3"
          value={usuario.apellido}
          type="text"
          onChange={(e) =>
            setUsuario({
              ...usuario,
              apellido: e.target.value,
            })
          }
        /> */}
        <input
          className="form-control mt-3"
          value={usuario.email}
          type="text"
          onChange={(e) =>
            setUsuario({
              ...usuario,
              email: e.target.value,
            })
          }
        />
      </form>
      <button type="submit" onClick={enviarDatos}>
        Enviar
      </button>
    
    </>
    
    
  )
}

export default Formulario