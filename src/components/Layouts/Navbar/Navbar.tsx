import clsx from 'clsx';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={clsx('', className)}>
      <p>This is navbar</p>
    </nav>
  );
};
