import { useClickOutside, useSearchProduct } from '@/hooks';
import { Search } from '../Form';
import { ProductSearchResult } from '.';
import { Message } from '../Elements';
import clsx from 'clsx';
import { useRef, useState } from 'react';

interface SearchProductProps {
  className?: string;
}

export const SearchProduct = ({ className }: SearchProductProps) => {
  const { handleSearch, result, search } = useSearchProduct();
  const [showResult, setShowResult] = useState(false);
  const searchInputRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(searchInputRef, () => setShowResult(false));
  return (
    <Search
      className={clsx('w-full', className)}
      onChange={handleSearch}
      value={search}
      showResult={showResult}
      ref={searchInputRef}
      onFocus={() => setShowResult(true)}
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
