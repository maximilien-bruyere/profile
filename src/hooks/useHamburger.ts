import { useCallback, useEffect, useState } from "react";

/**
 * useHamburger
 *
 * Hook pour gérer l'état d'un menu hamburger.
 * Fournit les actions open / close / toggle et bloque le scroll du body
 * tant que le menu est ouvert.
 *
 * @param {boolean} [initial=false] - état initial du menu (true = ouvert).
 * @returns {{ isOpen: boolean, open: () => void, close: () => void, toggle: () => void }}
 *
 * Effets secondaires :
 * - Définit `document.body.style.overflow = "hidden"` quand le menu est ouvert
 *   et restaure la valeur précédente quand il se ferme.
 *
 * Exemple :
 * const { isOpen, toggle, close, open } = useHamburger();
 */

const useHamburger = (initial = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    document.body.style.overflow = prev;
  }, [isOpen]);

  return { isOpen, open, close, toggle } as const;
};

export default useHamburger;
