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
        <p className="font-body-small">
          From your account dashboard you can view your
          <Link className="text-primary" to="/account/orders">
            recent orders
          </Link>
          , manage your
          <Link className="text-primary" to="/account/addresses">
            shipping and billing addresses
          </Link>
          , and edit your
          <Link className="text-primary" to="/account/account-details">
            password and account details
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default DashBoard;
