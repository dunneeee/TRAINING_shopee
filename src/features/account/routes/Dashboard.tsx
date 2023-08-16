import { Link } from '@/components/Elements';
import { useAuth } from '@/hooks';
import { logout } from '@/redux';

const DashBoard = () => {
  const { user, authDispatch } = useAuth();
  const handleLogout = () => {
    authDispatch(logout());
  };
  if (!user) return null;
  return (
    <section className="wrapper">
      <div className="">
        <p className="font-body-small mb-3">
          Hello {user.name} (not {user.name}?
          <button
            onClick={handleLogout}
            className="text-primary transition hover:text-black"
          >
            Log out
          </button>
          )
        </p>
        <div className="font-body-small">
          <span>From your account dashboard you can view your </span>
          <Link className="text-primary" to="/account/orders">
            recent orders
          </Link>
          <span>, manage your </span>
          <Link className="text-primary" to="/account/addresses">
            shipping and billing addresses
          </Link>
          <span>, and edit your </span>
          <Link className="text-primary" to="/account/account-details">
            password and account details
          </Link>
          .
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
