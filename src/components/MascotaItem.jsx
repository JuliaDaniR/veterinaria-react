import React, { useState } from "react";
function MascotaItem({ mascota, clientes, onEliminar, onGuardar }) {
  // Find the client name for this pet's clienteId
  const cliente = clientes.find((c) => c.id === mascota.clienteId);
  const clienteNombre = cliente ? cliente.nombre : "Cliente no encontrado";

  const [edicion, setEdicion] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(mascota.nombre);
  const [especieEditada, setEspecieEditada] = useState(mascota.especie);
  const [razaEditada, setRazaEditada] = useState(mascota.raza);
  const [edadEditada, setEdadEditada] = useState(mascota.edad);

  const manejadorEliminar = () => {
    if (
      window.confirm(
        `¿Estás seguro de eliminar a la mascota "${mascota.nombre}"?`,
      )
    ) {
      onEliminar(mascota.id);
    }
  };

  const manejadorEditar = () => {
    setEdicion(true);
  };

  const manejadorGuardar = () => {
    const mascotaActualizada = {
      ...mascota,
      nombre: nombreEditado,
      especie: especieEditada,
      raza: razaEditada,
      edad: edadEditada,
    };
    onGuardar(mascotaActualizada);
    setEdicion(false);
  };

  return (
    <li key={mascota.id}>
      {edicion ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            manejadorGuardar();
          }}
        >
          <input
            type="text"
            value={nombreEditado}
            onChange={(e) => setNombreEditado(e.target.value)}
          />
          <input
            type="text"
            value={especieEditada}
            onChange={(e) => setEspecieEditada(e.target.value)}
          />
          <input
            type="text"
            value={razaEditada}
            onChange={(e) => setRazaEditada(e.target.value)}
          />
          <input
            type="number"
            value={edadEditada}
            onChange={(e) => setEdadEditada(e.target.value)}
          />
          <button type="submit">Guardar</button>
        </form>
      ) : (
        <div>
          <h4>{mascota.nombre}</h4>
          <p>
            <strong>Especie:</strong> {mascota.especie}
          </p>
          <p>
            <strong>Raza:</strong> {mascota.raza}
          </p>
          <p>
            <strong>Edad:</strong> {mascota.edad} años
          </p>
          <p>
            <strong>Cliente:</strong> {clienteNombre}
          </p>
          <button onClick={manejadorEliminar}>Eliminar</button>
          <button onClick={manejadorEditar}>Editar</button>
        </div>
      )}
    </li>
  );
}

export default MascotaItem;
