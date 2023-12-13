// global imports
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import Animated, {Easing, SlideInLeft} from 'react-native-reanimated'

// local imports
import {images} from '@Assets'
import {useGetPokemonListQuery} from '@Api'
import {ErrorBox, Loader} from '@Components'
import {PokeMon, selectPokemonList, setPokemonList} from '@Slicers'

const PokemonList: React.FC = ({navigation}: any) => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(selectPokemonList)

  const {data, isLoading, isError} = useGetPokemonListQuery()

  useEffect(() => {
    if (data) {
      dispatch(setPokemonList(data.results))
    }
  }, [dispatch, data])

  const handlePokemonTap = (pokemon: any) => {
    // Navigate to details screen
    navigation.navigate('Detail', {...pokemon})
  }

  const Item = ({item, index}: {item: PokeMon; index: number}) => {
    return (
      <Animated.View
        entering={SlideInLeft.delay(index * 75)
          .duration(1000)
          .easing(Easing.out(Easing.exp))}>
        <TouchableOpacity
          onPress={() => handlePokemonTap(item)}
          className="px-4 flex-row items-center  border-t border-slate-200 py-4">
          <Animated.Image
            resizeMode="contain"
            className="w-12 h-12"
            source={images[item.name]}
            sharedTransitionTag={item.name}
          />

          <Text className="ml-5 text-lg text-black">{item.name}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorBox />
  }

  return (
    <View className="bg-white">
      <FlatList
        renderItem={Item}
        data={pokemonList}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export {PokemonList}
