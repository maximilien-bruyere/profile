import Hamburger from "../ui/hamburger/Hamburger";
import useHamburger from "../../hooks/useHamburger";
import Nav from "../ui/navigation/Nav";
import MobileNav from "../ui/navigation/MobileNav";

const Header = () => {
  const { isOpen, toggle, close } = useHamburger();

  return (
    <header className="bg-primary relative p-5 flex items-center justify-between border-b border-white/20 md:fixed md:w-full">
      <div className="md:hidden flex flex-row justify-between w-full items-center">
        <Hamburger isOpen={isOpen} toggle={toggle} />
        <h1 className="font-heading bg-gradient-to-r from-color-text-secondary to-color-text-primary bg-clip-text text-transparent pr-1">
          Maximilien
        </h1>
      </div>

      <div className="hidden md:flex justify-around items-center w-full ">
        <h1 className="font-heading bg-gradient-to-r from-color-text-secondary to-color-text-primary bg-clip-text text-transparent text-lg">
          Maximilien
        </h1>
        <Nav />
      </div>

      <MobileNav isOpen={isOpen} close={close} />
    </header>
  );
};

export default Header;
