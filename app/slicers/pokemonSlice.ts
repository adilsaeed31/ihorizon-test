import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface PokeMon {
  name: string
  url: string
}

export interface PokemonState {
  pokemonList: PokeMon[]
}

const initialState: PokemonState = {
  pokemonList: [],
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<any[]>) => {
      state.pokemonList = action.payload
    },
  },
})

export const {setPokemonList} = pokemonSlice.actions

export const selectPokemonList = (state: {pokemon: PokemonState}) =>
  state.pokemon.pokemonList
