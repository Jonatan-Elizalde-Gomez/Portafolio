import { useRef } from "react";
import App from './App.jsx'

function Abr() {
  const ref = useRef();

  return (
    <div>
        <App></App>
        <div className="h-64 bg-gray-200">Contenido del contenedor</div>
        <div className="h-64 bg-gray-200">Contenido del contenedor</div>
        <div className="h-64 bg-gray-200">Contenido del contenedor</div>
        <div className="h-64 bg-gray-200">Contenido del contenedor</div>
        <div className="h-64 bg-gray-200">Contenido del contenedor</div>
   
    </div>
  );
}

export default Abr;
