import { useState} from "react";
import "./App.css";
import VistaInicial from "./components/VistaInicial";
import VistaCliente from "./components/VistaCliente";
import VistaMascota from "./components/VistaMascota";
import VistaConfiguracion from "./components/VistaConfiguracion";
import Navegacion from "./components/Navegacion";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  const nombreApp = "El Dogo - Gestión de Veterinaria";

  const [estaLogueado, setEstaLogueado] = useState(false);

  const manejadorLogin = (estado) => {
    setEstaLogueado(estado);
  };

  return (
    <>
      <div className="app">
        <h1>{nombreApp}</h1>
        <p>¡Bienvenido! Acá se gestionan clientes y mascotas.</p>
        {estaLogueado ? (
          <>
            <Navegacion />
            <Routes>
              <Route path= "/" element= {<VistaInicial />}/>
              <Route path= "/clientes" element= {<VistaCliente />} />
              <Route path= "/mascotas" element= {<VistaMascota />} />
              <Route path= "/configuracion" element= {<VistaConfiguracion />} />
              <Route path= "*" element= {<h2>404 - Página no encontrada</h2>} />
            </Routes>
          </>
        ) : (
          <Login onLoginExitoso={manejadorLogin} />
        )}
      </div>
    </>
  );
}

export default App;
