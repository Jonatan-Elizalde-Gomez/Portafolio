import React from "react";
import { Fade } from "react-reveal";

const card = ({ imagen, titulo, parrafo, link1, link2 }) => {
  return (
    

    <div className="bg-secondaryColor rounded-lg  p-8 w-80 text-letter shadow ring-2 ring-offset-2 ring-[#001021]"
    style={{
      boxShadow: "rgba(33, 70, 110, 0.1) 0px 7px 29px 0px"
    }}>
      {/* Imagen */}
      <div className="mb-4">
        <img src={imagen} alt="Imagen" className="w-full h-auto rounded-lg" />
      </div>

      {/* Título */}
      <h2 className="text-xl font-medium mb-2">{titulo}</h2>

      {/* Párrafo */}
      <p className="mb-4">{parrafo}</p>

      {/* Iconos */}
      <div className="flex items-center">
        <div className="mr-2">
          <a href={link1} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github.svg" alt="Icono 1" className="w-6 h-6" />
          </a>
        </div>
        <div>
          <a href={link2} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/web.svg" alt="Icono 2" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;
