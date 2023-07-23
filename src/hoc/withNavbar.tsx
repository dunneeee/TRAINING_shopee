import { useNavbar } from '@/hook';

export interface WithNavbarProps {
  toggleNavbar?: () => void;
  closeNavbar?: () => void;
}

export const withNavbar = <T extends WithNavbarProps>(
  Component: React.ComponentType<T>
) => {
  const EnhancedComponent = (props: Omit<T, keyof WithNavbarProps>) => {
    const { toogleNavbar, closeNavbar } = useNavbar();

    return (
      <Component
        {...(props as T)}
        toggleNavbar={toogleNavbar}
        closeNavbar={closeNavbar}
      />
    );
  };

  return EnhancedComponent;
};
