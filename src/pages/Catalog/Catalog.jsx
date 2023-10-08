import React, { useState } from 'react';
import CarItem from 'components/CarItem/CarItem';
import { WrapperFilter, WrapperList, LoadMoreButton } from './Catalog.styled'; // Добавьте импорт для кнопки LoadMore
import Filter from 'components/Filter/Filter';

import { useGetCarsByPageQuery } from '../../redux/operations';

export default function Catalog() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);

  const loadMore = () => {
    setPage(page + 1);
  };

  const allCars = data ? data.reduce((acc, curr) => acc.concat(curr), []) : [];

  return (
    <>
      <WrapperFilter>
        <Filter />
      </WrapperFilter>
      <WrapperList>
        {error ? (
          <>Ой, произошла ошибка</>
        ) : isLoading ? (
          <>Загрузка...</>
        ) : allCars.length > 0 ? (
          <>
            {allCars.map(car => (
              <CarItem key={car.id} data={car} />
            ))}
          </>
        ) : null}
      </WrapperList>
      {data && data.length >= 8 && (
        <LoadMoreButton onClick={loadMore} disabled={isFetching}>
          Load More
        </LoadMoreButton>
      )}
    </>
  );
}
