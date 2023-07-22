import React from "react";
import { Fade } from "react-reveal";

const Card = ({
  imagen,
  titulo,
  parrafo,
  link1,
  link2,
  mostrarIcono1,
  mostrarIcono2,
}) => {
  return (
    <Fade bottom>
    <div
      className="bg-[#001730] rounded-lg p-8 w-80 sm:w-[500px] text-letter shadow-4xl shadow-red-200 ring-2 ring-offset-2 ring-[#001021]"
      style={{
        boxShadow: "rgba(37, 80, 125, 0.3) 0px 0px 29px 2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Alinea los elementos verticalmente
      }}
    >
      <div>
        {/* Imagen */}
        <div className="mb-4">
          <img src={imagen} alt="Imagen" className="w-full h-auto rounded-lg" />
        </div>

        {/* Contenido */}
        <div>
          {/* Titulo */}
          <h2 className="text-xl font-medium mb-2">{titulo}</h2>

          {/* Parrafo */}
          <p className="pt-2 mb-8 text-left">{parrafo}</p>
        </div>
      </div>

      {/* Iconos */}
      <div className="flex items-end">
        {/* items-end para alinear los iconos abajo */}
        {mostrarIcono1 && (
          <div className="mr-2">
            <a href={link1} target="_blank" rel="noopener noreferrer">
              <img
                src="/github.svg"
                alt="Icono 1"
                className="w-6 h-6"
              />
            </a>
          </div>
        )}
        {mostrarIcono2 && (
          <div>
            <a href={link2} target="_blank" rel="noopener noreferrer">
              <img src="/web.svg" alt="Icono 2" className="w-6 h-6" />
            </a>
          </div>
        )}
      </div>
    </div>
    </Fade>
  );
};

export default Card;
