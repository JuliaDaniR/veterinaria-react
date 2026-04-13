import "./App.css";

function App() {
  const nombreApp = "El Dogo - Gestión de Veterinaria";

  return (
    <>
      <div>
        <h1>{nombreApp}</h1>
        <p>¡Bienvenido! Acá se gestionan clientes y mascotas.</p>
        <section>
          <h2>Gestión de clientes</h2>
          <h2>Gestión de mascotas</h2>
        </section>
      </div>
    </>
  );
}

export default App;
