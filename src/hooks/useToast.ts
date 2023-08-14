import { ToastType } from '@/components/Elements';
import { useState } from 'react';

interface Toast {
  type: ToastType;
  message: string;
  link?: {
    to: string;
    label: string;
  };
}

const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (
    type: Toast['type'],
    message: string,
    link?: Toast['link']
  ) => {
    setToast({ type, message, link });
  };

  const hideToast = () => {
    setToast(null);
  };

  return {
    toast,
    showToast,
    hideToast,
  };
};

export default useToast;
