import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

interface ToggleAuthButtonProps {
  className?: string;
}

const ToggleAuthButton = ({ className }: ToggleAuthButtonProps) => {
  const activeClasses = 'bg-white shadow';
  return (
    <div className={clsx(className, 'flex rounded bg-lightGray p-[2px]')}>
      <NavLink
        to={'/account/login'}
        className={({ isActive }) =>
          clsx('block h-7 flex-1 rounded p-1 text-center transition', {
            [activeClasses]: isActive,
          })
        }
      >
        Sign In
      </NavLink>
      <NavLink
        to={'/account/register'}
        className={({ isActive }) =>
          clsx('block h-7 flex-1 rounded p-1 text-center transition', {
            [activeClasses]: isActive,
          })
        }
      >
        Register
      </NavLink>
    </div>
  );
};

export default ToggleAuthButton;
