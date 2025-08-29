import Hamburger from "../ui/hamburger/Hamburger";
import useHamburger from "../../hooks/useHamburger";

const Header = () => {
  const { isOpen, toggle, close } = useHamburger();

  return (
    <header className="relative p-4 flex items-center justify-between">
      {/** Menu Hamburger Smartphone */}
      <div className="md:hidden">
        <Hamburger isOpen={isOpen} toggle={toggle} />
      </div>

      {/** Navigation - Tablette */}
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#portfolio" className="hover:underline">
          Portfolio
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>

      {/** Navigation - Mobile */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex md:hidden"
        >
          <div
            className="w-72 max-w-full bg-secondary text-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="mb-6 text-sm underline underline-offset-6 active:text-accent transition-colors duration-200"
            >
              Fermer
            </button>

            <nav className="flex flex-col gap-3">
              <a
                href="#home"
                onClick={close}
                className="active:text-accent transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={close}
                className="active:text-accent transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#portfolio"
                onClick={close}
                className="active:text-accent transition-colors duration-200"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={close}
                className="active:text-accent transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex-1 bg-black/50" onClick={close} />
        </div>
      )}
    </header>
  );
};

export default Header;
