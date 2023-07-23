import { NavbarContext, NavbarContextProps } from '@/contexts';
import { useState } from 'react';

interface NavbarProviderProps {
  children: React.ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const hiddenClasses = isOpen ? 'hidden lg:block' : '';

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  const contextValue: NavbarContextProps = {
    toogleNavbar: toggle,
    isNavbarOpen: isOpen,
    setIsNavbarOpen: setIsOpen,
    hiddenClasses,
    closeNavbar: close,
    openNavbar: open,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};
