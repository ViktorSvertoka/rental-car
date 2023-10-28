import { useState, useEffect } from 'react';
import CarItem from 'components/CarItem/CarItem';
import { WrapperFilter, WrapperList, LoadMore } from './Catalog.styled';
import Filter from 'components/Filter/Filter';

import {
  useGetAdvertsQuery,
  useGetCarsByPageQuery,
} from '../../redux/operations';
import { Loader } from 'components/Loader/Loader';
import NavBar from 'components/NavBar/NavBar';

export default function Catalog() {
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState([]);
  const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);
  const { data: allAdverts } = useGetAdvertsQuery();

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      setAllCars(prevCatalog => [...prevCatalog, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = allAdverts.filter(advert => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === advert.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });

        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, allAdverts, isFiltering]);

  const makes = allAdverts
    ? [...new Set(allAdverts.map(advert => advert.make))]
    : [];
  const prices = allAdverts
    ? [
        ...new Set(
          allAdverts.map(advert => advert.rentalPrice.replace('$', ''))
        ),
      ]
    : [];
  const mileage = allAdverts
    ? [...new Set(allAdverts.map(advert => advert.mileage))]
    : [];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);

  return (
    <>
      <NavBar />
      <WrapperFilter>
        <Filter
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
        />
      </WrapperFilter>
      <WrapperList>
        {isFiltering ? (
          filteredAdverts !== null && filteredAdverts.length > 0 ? (
            filteredAdverts.map((car, index) => (
              <CarItem key={index} data={car} />
            ))
          ) : (
            <div>No matches found based on the chosen criteria.</div>
          )
        ) : error ? (
          <>Oops, there was an error...</>
        ) : isLoading ? (
          <Loader />
        ) : allCars.length > 0 ? (
          allCars.map((car, index) => <CarItem key={index} data={car} />)
        ) : null}
        {!isFiltering && data && data.length >= 8 && (
          <LoadMore variant="text" onClick={loadMore} disabled={isFetching}>
            Load more
          </LoadMore>
        )}
      </WrapperList>
    </>
  );
}
