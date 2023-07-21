import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";

import menuSvg from "../assets/menu.svg";
import closeSvg from "../assets/close.svg";
import downloadSvg from "../assets/download.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0.5 * window.innerHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transitions = useTransition(menuOpen, {
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
  });

    // Función para desplazarse suavemente hacia la sección correspondiente al hacer clic en el enlace del NavBar
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
        setMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
      }
    };

  return (
    <nav
    style={{zIndex:"999"}}
      className={`${
        sticky ? "sticky top-0" : ""
      } h-fit font-thin text-xl bg-backgroundColor border-letters border-b w-full`}
      ref={navRef}
    >
      <div className="flex justify-between items-center px-4 py-4 sm:px-6">
        <div>
          <button className="font-medium sm:hidden" onClick={toggleMenu}>
            {!menuOpen ? (
              <img src={menuSvg} width={"40px"} alt="Menu" />
            ) : (
              <img src={closeSvg} width={"30px"} alt="Cerrar" />
            )}
          </button>
        </div>
        <div className="hidden sm:block">
          <ul className="flex space-x-10 items-center">
          <li className="cursor-pointer" onClick={() => scrollToSection("about-me")}>Acerca de mí</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("portafolio")}>Portafolio</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contacto</li>
          </ul>
        </div>
        {transitions(
          (style, item) =>
            item && (
              <animated.ul
                className="sm:flex sm:space-x-10 sm:items-center"
                style={style}
              >
            <li className="cursor-pointer" onClick={() => scrollToSection("about-me")}>Acerca de mí</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("portafolio")}>Portafolio</li>
            <li className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contacto</li>
                <button className="flex gap-x-1.5">
                  <p>CV</p>
                  <img src={downloadSvg} width={"25px"} alt="Descargar" />
                </button>
              </animated.ul>
            )
        )}
        <div className="hidden sm:block">
          <button className="flex gap-x-1.5">
            <p>CV</p>
            <img src={downloadSvg} width={"25px"} alt="Descargar" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
