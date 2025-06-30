import {useGetProductsQuery} from '@src/entities/product/api/productApi';
import {useEffect, useState} from 'react';

export const useInfiniteProductsList = (shopId: string) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const {isLoading, data} = useGetProductsQuery(
    {page: currentPage, shopId},
    {
      refetchOnMountOrArgChange: 60,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    },
  );

  useEffect(() => {
    if (!isLoading && data && totalPages === null) {
      setTotalPages(data.pagination.total_pages);
    }
  }, [data, isLoading, totalPages]);

  const handleOnEndReached = () => {
    if (!totalPages) return;

    if (currentPage < totalPages) {
      setCurrentPage(page => page + 1);
    }
  };

  return {handleOnEndReached, data, isLoading};
};
