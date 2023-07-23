import { createContext } from 'react';

export interface NavbarContextProps {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toogleNavbar: () => void;
  closeNavbar: () => void;
  openNavbar: () => void;
  hiddenClasses: string;
}

export const NavbarContext = createContext<NavbarContextProps>({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {
    return;
  },
  toogleNavbar: () => {
    return;
  },
  closeNavbar: () => {
    return;
  },
  openNavbar: () => {
    return;
  },
  hiddenClasses: '',
});
