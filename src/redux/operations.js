import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6522edaef43b1793841510f0.mockapi.io/',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=8`,
    }),
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
    getAdvertById: builder.query({
      query: id => `/advert/${id}`,
      providesTags: ['Advert'],
    }),
    updateFavoriteAdvertById: builder.mutation({
      query: fields => ({
        url: `/advert/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Advert'],
    }),
  }),
});

export const {
  useGetCarsByPageQuery,
  useGetAdvertsQuery,
  useGetAdvertByIdQuery,
  useUpdateFavoriteAdvertByIdMutation,
} = carsApi;
