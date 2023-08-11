import { useNavbar } from '@/hooks';

export interface WithNavbarProps {
  toggleNavbar?: () => void;
  closeNavbar?: () => void;
  isNavbarOpen?: boolean;
}

export const withNavbar = <T extends WithNavbarProps>(
  Component: React.ComponentType<T>
) => {
  const EnhancedComponent = (props: Omit<T, keyof WithNavbarProps>) => {
    const { toogleNavbar, closeNavbar, isNavbarOpen } = useNavbar();

    return (
      <Component
        {...(props as T)}
        toggleNavbar={toogleNavbar}
        closeNavbar={closeNavbar}
        isNavbarOpen={isNavbarOpen}
      />
    );
  };

  return EnhancedComponent;
};
