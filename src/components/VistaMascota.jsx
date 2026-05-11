import { useState, useEffect } from "react";
import FormularioMascota from "./FormularioMascota";
import MascotaItem from "./MascotaItem";

function VistaMascota() {
  const [mascotas, setMascotas] = useState(() => {
    const mascotasGuardadas = localStorage.getItem("mascotasDogo") | [];
    return mascotasGuardadas ? JSON.parse(mascotasGuardadas) : [];
  });

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

  useEffect(() => {
    console.log("Guardando mascotas en localStorage:", mascotas);
    localStorage.setItem("mascotasDogo", JSON.stringify(mascotas));
  }, [mascotas]);
  return (
    <>
      <section>
        <h2>Gestión de mascotas</h2>
      </section>
      <FormularioMascota
        onMascotaAgregada={agregarMascota}
      />
      <h2>Mascotas Actuales</h2>
      <ul className="item-list">
        {mascotas.map((mascota) => (
          <MascotaItem
            key={mascota.id}
            mascota={mascota}
            onEliminar={eliminarMascota}
            onGuardar={actualizarMascota}
          />
        ))}
      </ul>
    </>
  );
}
export default VistaMascota;
