import { useState } from "react";

function FormularioMascota({ onMascotaAgregada, clientes }) {
  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [clienteId, setClienteId] = useState("");

  const manejadorNombre = (e) => {
    setNombre(e.target.value);
  }
  const manejadorEspecie = (e) => {
    setEspecie(e.target.value);
  }
  const manejadorRaza = (e) => {
    setRaza(e.target.value);
  }
  const manejadorEdad = (e) => {
    setEdad(e.target.value);
  }
  const manejadorCliente = (e) => {
    setClienteId(e.target.value);
  } 
  const manejadorEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || especie.trim() === "" || raza.trim() === "" || edad.trim() === "" || clienteId.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    } 
    const nuevaMascota = {
      id: Date.now(),
      nombre: nombre,
      especie: especie,
      raza: raza,
      edad: parseInt(edad),
      clienteId: parseInt(clienteId),
    };
    console.log("Nueva mascota registrada:", nuevaMascota); 
    onMascotaAgregada(nuevaMascota);
    setNombre("");
    setEspecie("");
    setRaza("");
    setEdad("");
    setClienteId("");
  };

  return (
    <form className="form-container" onSubmit={manejadorEnvio}>
      <h3>Registrar nueva mascota</h3>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={manejadorNombre} required />
      </div>
      <div className="form-group">
        <label>Especie:</label>
        <input type="text" value={especie} onChange={manejadorEspecie} required />
      </div>
      <div className="form-group">
        <label>Raza:</label>
        <input type="text" value={raza} onChange={manejadorRaza} required />
      </div>
      <div className="form-group">
        <label>Edad:</label>
        <input type="number" value={edad} onChange={manejadorEdad} required />
      </div>
      <div className="form-group">
        <label>Cliente:</label>
        <select value={clienteId} onChange={manejadorCliente} required>
          <option value="">Selecciona un cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="button">Registrar Mascota</button>
    </form>
  );
}

export default FormularioMascota;