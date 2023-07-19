import AnimatedDivider from "./AnimatedDivider";

function AboutMe() {
  return (
    <>
      <div className="px-10 sm:px-0 w-full flex items-center justify-center mt-20 bg-backgroundColor">
        <div className="text-center" style={{ width: "650px" }}>
          <h1 className=" text-5xl sm:text-7xl">Acerca de mi</h1>
          <div className="px-3">
            <AnimatedDivider />
          </div>
          <p className="text-justify text-lg pt-5">
            Soy un estudiante de software con una gran pasión por la tecnología
            y el aprendizaje. Me considero una persona proactiva, con fuertes
            habilidades de comunicación y una profunda curiosidad por adquirir
            nuevas habilidades y conocimientos. Me esfuerzo por estar al día con
            las últimas tendencias tecnológicas y siempre estoy buscando nuevas
            formas de mejorar mis habilidades. Me gusta trabajar en equipo y
            creo que los mejores resultados se logran a través de la
            colaboración entre personas. Me gusta usar mi creatividad para crear
            soluciones innovadoras.
          </p>
        </div>
      </div>

      {/* TODO Eliminar */}
      <div>
        <div
          className="h-screen  text-backgroundColor  "
          style={{
            top: "-100px",
          }}
        >
          <p>
            Soy un estudiante de software con una gran pasión por la tecnología
            y el aprendizaje. Me considero una persona proactiva, con fuertes
            habilidades de comunicación y una profunda curiosidad por adquirir
            nuevas habilidades y conocimientos. Me esfuerzo por estar al día con
            las últimas tendencias tecnológicas y siempre estoy buscando nuevas
            formas de mejorar mis habilidades. Me gusta trabajar en equipo y
            creo que los mejores resultados se logran a través de la
            colaboración entre personas. Me gusta usar mi creatividad para crear
            soluciones innovadoras.
          </p>
        </div>

        <div className="h-screen" style={{}}>
          <p>
            Soy un estudiante de software con una gran pasión por la tecnología
            y el aprendizaje. Me considero una persona proactiva, con fuertes
            habilidades de comunicación y una profunda curiosidad por adquirir
            nuevas habilidades y conocimientos. Me esfuerzo por estar al día con
            las últimas tendencias tecnológicas y siempre estoy buscando nuevas
            formas de mejorar mis habilidades. Me gusta trabajar en equipo y
            creo que los mejores resultados se logran a través de la
            colaboración entre personas. Me gusta usar mi creatividad para crear
            soluciones innovadoras.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
