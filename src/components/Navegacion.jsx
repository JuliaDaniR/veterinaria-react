import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/mascotas">Mascotas</Link></li>
        <li><Link to="/configuracion">Configuración</Link></li>
      </ul>
    </nav>
  );
}
export default Navegacion;