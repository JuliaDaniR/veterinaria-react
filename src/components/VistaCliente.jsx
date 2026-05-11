import { useState, useEffect } from "react";
import FormularioCliente from "./FormularioCliente";
import ClienteItem from "./ClienteItem";

function VistaCliente() {
  const [clientes, setClientes] = useState(() => {
    const clientesGuardados = localStorage.getItem("clientesDogo") | [];
    return clientesGuardados ? JSON.parse(clientesGuardados) : [];
  });

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

  useEffect(() => {
    console.log("Guardando clientes en localStorage:", clientes);
    localStorage.setItem("clientesDogo", JSON.stringify(clientes));
  }, [clientes]);

  return (
    <>
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
    </>
  );
}
export default VistaCliente;
