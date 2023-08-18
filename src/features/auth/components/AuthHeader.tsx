import clsx from 'clsx';
import { ToggleAuthButton } from '.';

interface Props {
  className?: string;
}

const AuthHeader = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <h3 className="mb-6 text-center">My Account</h3>
      <ToggleAuthButton />
    </div>
  );
};

export default AuthHeader;
