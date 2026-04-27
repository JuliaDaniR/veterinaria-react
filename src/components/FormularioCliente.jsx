import { useState } from "react";

function FormularioCliente({ onClienteAgregado }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const manejadorNombre = (e) => {
    setNombre(e.target.value);
  };

  const manejadorTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const manejadorEnvio = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || telefono.trim() === "") {
      alert("Por favor, completa ambos campos.");
      return;
    }

    const nuevoCliente = {
      id: Date.now(),
      nombre: nombre,
      telefono: telefono,
    };
    console.log("Nuevo cliente registrado:", nuevoCliente);
    onClienteAgregado(nuevoCliente);
    setNombre("");
    setTelefono("");
  };

  return (
    <form className="form-container" onSubmit={manejadorEnvio}>
      <h3>Registrar nuevo cliente</h3>
      <div className="form-group">
        <label>Nombre Completo:</label>
        <input type="text" value={nombre} onChange={manejadorNombre} required />
      </div>
      <div className="form-group">
        <label>Teléfono:</label>
        <input type="tel" value={telefono} onChange={manejadorTelefono} required />
      </div>
      <button type="submit" className="button">Registrar Cliente</button>
    </form>
  );
}

export default FormularioCliente;
