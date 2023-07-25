import { NavbarContext } from '@/contexts';
import { useContext } from 'react';

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context)
    throw new Error('useNavbar must be used within a NavbarProvider');
  return context;
};

export default useNavbar;
