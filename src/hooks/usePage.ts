import { useMemo, useState } from 'react';

interface PageProps<T> {
  currentPage?: number;
  data: T[];
  pageSize?: number;
}

const usePage = <T>({ currentPage = 1, pageSize = 3, data }: PageProps<T>) => {
  const [page, setPage] = useState(currentPage);

  const currentData = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return data.slice(start, end);
  }, [page, data, pageSize]);

  return {
    currentData,
    currentPage: page,
    setPage,
  };
};

export default usePage;
