import { Message } from '../Elements';

interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
  className?: string;
  children: React.ReactNode;
}

export const Form = ({
  onSubmit,
  error = null,
  className,
  children,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {error && <Message message={error} variant="error" />}
      {children}
    </form>
  );
};
