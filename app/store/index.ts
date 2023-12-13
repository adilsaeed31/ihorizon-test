import {configureStore} from '@reduxjs/toolkit'

import {pokemonApi} from '@Api'
import {pokemonSlice} from '@Slicers'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemon: pokemonSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})
