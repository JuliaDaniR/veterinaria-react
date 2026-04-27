import { useState } from "react";
import "./App.css";
import FormularioCliente from "./components/FormularioCliente";
import ClienteItem from "./components/ClienteItem";
import FormularioMascota from "./components/FormularioMascota";
import MascotaItem from "./components/MascotaItem";

function App() {
  const nombreApp = "El Dogo - Gestión de Veterinaria";
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      telefono: "555-1234",
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      telefono: "555-5678",
    },
  ]);

  const [mascotas, setMascotas] = useState([
    {
      id: 1,
      nombre: "Rex",
      especie: "Perro",
      raza: "Labrador",
      edad: 5,
      clienteId: 1,
    },
    {
      id: 2,
      nombre: "Mia",
      especie: "Gato",
      raza: "Siamés",
      edad: 3,
      clienteId: 2,
    },
  ]);

  const agregarCliente = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  };

  const eliminarCliente = (id) => {
    const listaActualizada = clientes.filter((cliente) => cliente.id !== id);
    setClientes(listaActualizada);
  };

  const actualizarCliente = (clienteActualizado) => {
    const listaActualizada = clientes.map((cliente) =>
      cliente.id === clienteActualizado.id ? clienteActualizado : cliente,
    );
    setClientes(listaActualizada);
  };

  const agregarMascota = (nuevaMascota) => {
    setMascotas([...mascotas, nuevaMascota]);
  };

  const eliminarMascota = (id) => {
    const listaActualizada = mascotas.filter((mascota) => mascota.id !== id);
    setMascotas(listaActualizada);
  };

  const actualizarMascota = (mascotaActualizada) => {
    const listaActualizada = mascotas.map((mascota) =>
      mascota.id === mascotaActualizada.id ? mascotaActualizada : mascota,
    );
    setMascotas(listaActualizada);
  };

  return (
    <>
      <div className="app">
        <h1>{nombreApp}</h1>
        <p>¡Bienvenido! Acá se gestionan clientes y mascotas.</p>
        <p>Total de clientes registrados: {clientes.length}</p>
        <p>Total de mascotas registradas: {mascotas.length}</p>
        <section>
          <h2>Gestión de clientes</h2>
        </section>
        <FormularioCliente onClienteAgregado={agregarCliente} />
        <h2>Clientes Actuales</h2>
        <ul className="item-list">
          {clientes.map((cliente) => (
            <ClienteItem
              key={cliente.id}
              cliente={cliente}
              onEliminar={eliminarCliente}
              onGuardar={actualizarCliente}
            />
          ))}
        </ul>
        <section>
          <h2>Gestión de mascotas</h2>
        </section>
        <FormularioMascota
          onMascotaAgregada={agregarMascota}
          clientes={clientes}
        />
        <h2>Mascotas Actuales</h2>
        <ul className="item-list">
          {mascotas.map((mascota) => (
            <MascotaItem
              key={mascota.id}
              mascota={mascota}
              clientes={clientes}
              onEliminar={eliminarMascota}
              onGuardar={actualizarMascota}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
