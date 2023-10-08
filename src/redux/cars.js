import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6522edaef43b1793841510f0.mockapi.io/',
  }),
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=8`,
    }),
  }),
});

export const { useGetCarsByPageQuery } = carsApi;
