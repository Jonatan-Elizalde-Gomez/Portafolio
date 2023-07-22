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

  const menuItems = [
    { id: "about-me", label: "Acerca de mi" },
    { id: "portafolio", label: "Portafolio" },
    { id: "contact-me", label: "Contacto" },
  ];

  // Funcion para desplazarse suavemente hacia la seccion correspondiente al hacer clic en el enlace del NavBar
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (sectionId == "contact-me" && section) {
      setMenuOpen(false); // Cerrar el menu al hacer clic en un enlace

      const alturaPagina = document.body.scrollHeight;

      window.scrollTo({
        top: alturaPagina,
        behavior: "smooth",
      });
    } else if (section) {
      window.scrollTo({
        top: section.offsetTop - 150,
        behavior: "smooth",
      });
      setMenuOpen(false); // Cerrar el menu al hacer clic en un enlace
    }
  };

  return (
    <nav
      style={{ zIndex: "999" }}
      className={`${
        sticky ? "sticky top-0" : ""
      } h-fit font-thin text-xl bg-backgroundColor border-letters border-b w-full text-letters`}
      ref={navRef}
    >
      <div className="flex justify-between items-center px-4 py-4 sm:pt-6">
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
          <div className="flex space-y-4 sm:space-y-0 sm:space-x-10 items-center">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
        {transitions(
          (style, item) =>
            item && (
              <animated.div
                className={`sm:flex sm:space-x-10 sm:items-center menu-columns`}
                style={style}
              >
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </div>
                ))}
                <button className="flex gap-x-1.5">
                  <p>CV</p>
                  <img src={downloadSvg} width={"25px"} alt="Descargar" />
                </button>
              </animated.div>
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
