import { useSearchProduct } from '@/hooks';
import { Search } from '../Form';
import { ProductSearchResult } from '.';
import { Message } from '../Elements';
import clsx from 'clsx';

interface SearchProductProps {
  className?: string;
}

export const SearchProduct = ({ className }: SearchProductProps) => {
  const { handleSearch, result, search } = useSearchProduct();
  return (
    <Search
      className={clsx('w-full', className)}
      onChange={handleSearch}
      value={search}
      showResult={search.length > 0}
    >
      <div className="mt-2 rounded border border-lightGray bg-white p-1 shadow">
        {result.map((p) => (
          <ProductSearchResult product={p} key={p.id} className="mb-2" />
        ))}
        {result.length === 0 && (
          <Message className="text-center">
            <span className="font-body-small md:font-body-medium">
              No result
            </span>
          </Message>
        )}
      </div>
    </Search>
  );
};
