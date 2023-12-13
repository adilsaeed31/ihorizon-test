import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface PokeMon {
  name: string
  url: string
}

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      // (process.env.REACT_APP_BASE_API_URL as string) ??
      'https://pokeapi.co/api/v2/',
  }),
  endpoints: build => ({
    getPokemonList: build.query<{results: PokeMon[]}, void>({
      query: () => 'pokemon',
    }),
    getPokemonDetails: build.query({
      query: (id: string) => `pokemon/${id}`,
    }),
  }),
})

export const {useGetPokemonListQuery, useGetPokemonDetailsQuery} = pokemonApi
