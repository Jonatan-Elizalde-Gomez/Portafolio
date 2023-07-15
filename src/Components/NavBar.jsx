import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function NavBar() {
  return (
    <nav className="flex justify-center items-center h-16 bg-backgroundColor border-b">
      <ul className="flex items-center space-x-4">
        <li className="text-lg font-medium">Acerca de mi</li>
        <li className="text-lg font-medium">Habilidades</li>
        <li className="text-lg font-medium">Contacto</li>
      </ul>
    </nav>
  );
}

export default NavBar;
