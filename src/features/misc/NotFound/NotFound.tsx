import { Button, Logo } from '@/components/Elements';
import { Search } from '@/components/Form';
import { useNavigate } from 'react-router-dom';

interface NotFoundProps {
  label?: string;
}

const NotFound = ({ label = 'This page not found' }: NotFoundProps) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <section className="wrapper flex min-h-screen flex-col">
      <div className="">
        <Logo className="block w-full text-center" />
      </div>
      <div className="">
        <Search className="w-full" />
      </div>
      <div className=" flex flex-1 flex-col items-center justify-center text-center">
        <h4 className="mb-3">404 ERROR</h4>
        <div className="mb-6 text-darkGray">
          <p className="font-body-small">{label}</p>
          <p className="font-body-small">Back to home and start again</p>
        </div>
        <Button variant="outline" onClick={handleBackToHome}>
          HOMEPAGE
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
