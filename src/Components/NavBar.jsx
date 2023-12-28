import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import menuSvg from "/menu.svg";
import closeSvg from "/close.svg";
import downloadSvg from "/download.svg";
import { useTranslation } from 'react-i18next';
import LanguageSwitch from "./Shared/LanguageSwitch";

function NavBar() {
  const { t, i18n } = useTranslation();
  const cvLink = i18n.language === 'en' ? '/cv-en.pdf' : '/cv-es.pdf';

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
    { id: "about-me", label: t('aboutMe')},
    { id: "portafolio", label: t('portfolio') },
    { id: "contact-me", label: t('contact') },
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
      <div className="flex justify-between items-center px-4 py-4 lg:pt-6">
        <div>
          <div className="hidden lg:block">
        <LanguageSwitch id="1"/>
          </div>
          <button className="font-medium lg:hidden" onClick={toggleMenu}>
            {!menuOpen ? (
              <img src={menuSvg} width={"40px"} alt="Menu" />
            ) : (
              <img src={closeSvg} width={"30px"} alt="Cerrar" />
            )}
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-y-4 lg:space-y-0 lg:space-x-10 items-center">
        
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
                className={`lg:flex lg:space-x-10 lg:items-center menu-columns`}
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
                <a
                  className="flex gap-x-1.5"
                  href={cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV - Jonatan Elizalde Gomez"
                >
                  <p>CV</p>
                  <img src={downloadSvg} width={"25px"} alt="Descargar" />
                </a>
              </animated.div>
            )
        )}
        <div className="lg:hidden">
        <LanguageSwitch id="2"/>
        </div>
        <div className="hidden lg:block">
          <a
            className="flex gap-x-1.5"
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            download="CV - Jonatan Elizalde Gomez"
          >
            <p>CV</p>
            <img src={downloadSvg} width={"25px"} alt="Descargar" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
