import { useState } from "react";

function ClienteItem({ cliente, onEliminar, onGuardar }) {
  const [edicion, setEdicion] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(cliente.nombre);
  const [telefonoEditado, setTelefonoEditado] = useState(cliente.telefono);

  const manejadorEliminar = () => {
    if (
      window.confirm(
        `¿Estás seguro de eliminar al cliente "${cliente.nombre}"?`,
      )
    ) {
      onEliminar(cliente.id);
    }
  };

  const manejadorEditar = () => {
    setEdicion(true);
  };

  const manejadorGuardar = (e) => {
    e.preventDefault();
    const clienteActualizado = {
      ...cliente,
      nombre: nombreEditado,
      telefono: telefonoEditado,
    };
    onGuardar(clienteActualizado);
    setEdicion(false);
  };

  return (
    <li key={cliente.id}>
      {edicion ? (
        <form onSubmit={manejadorGuardar}>
          <input
            type="text"
            value={nombreEditado}
            onChange={(e) => setNombreEditado(e.target.value)}
          />
          <input
            type="tel"
            value={telefonoEditado}
            onChange={(e) => setTelefonoEditado(e.target.value)}
            required
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setEdicion(false)}>
            Cancelar
          </button>
        </form>
      ) : (
        <div>
          <h4>{cliente.nombre}</h4>
          <p>
            <strong>Teléfono:</strong> {cliente.telefono}
          </p>
          <button onClick={manejadorEliminar}>Eliminar</button>
          <button onClick={manejadorEditar}>Editar</button>
        </div>
      )}
    </li>
  );
}

export default ClienteItem;
