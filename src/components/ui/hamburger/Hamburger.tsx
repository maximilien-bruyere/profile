import React from "react";

interface Props {
  isOpen?: boolean;
  toggle?: () => void;
}

const Hamburger: React.FC<Props> = ({ isOpen = false, toggle }) => {
  return (
    <button
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      onClick={toggle}
      className="w-8 h-8 bg-black border border-gray-600 flex flex-col justify-center items-center gap-[3px] p-1 rounded-sm"
    >
      <span
        className={`block w-4 h-[2px] bg-accent transition-transform duration-200 ${
          isOpen ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`block w-4 h-[2px] bg-accent transition-opacity duration-200 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block w-4 h-[2px] bg-accent transition-transform duration-200 ${
          isOpen ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
