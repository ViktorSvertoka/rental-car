import { useState, useEffect } from 'react';
import CarItem from 'components/CarItem/CarItem';
import { WrapperFilter, WrapperList, LoadMore } from './Catalog.styled';
import Filter from 'components/Filter/Filter';

import { useGetCarsByPageQuery } from '../../redux/operations';
import { Loader } from 'components/Loader/Loader';

export default function Catalog() {
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState([]);

  const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      setAllCars(prevCars => [...prevCars, ...data]);
    }
  }, [data]);

  return (
    <>
      <WrapperFilter>
        <Filter />
      </WrapperFilter>
      <WrapperList>
        {error ? (
          <>Oops, there was an error...</>
        ) : isLoading ? (
          <Loader />
        ) : allCars.length > 0 ? (
          <>
            {allCars.map(car => (
              <CarItem key={car.id} data={car} />
            ))}
          </>
        ) : null}
      </WrapperList>
      {data && data.length >= 8 && (
        <LoadMore onClick={loadMore} disabled={isFetching}>
          Load more
        </LoadMore>
      )}
    </>
  );
}
