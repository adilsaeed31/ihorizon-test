// global imports
import React, {useLayoutEffect, useMemo} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

// local imports
import {images} from '@Assets'
import {useGetPokemonDetailsQuery} from '@Api'
import {Row, Loader, ErrorBox} from '@Components'

// Pokemon Type
interface PokemonType {
  type: {
    name: string
  }
}

const PokemonDetail: React.FC = ({navigation, route}: any) => {
  const {data, isLoading, isError} = useGetPokemonDetailsQuery(
    route?.params?.name,
  )

  // getting types as string and adding useMemo to run only once
  const typeNames = useMemo(
    () => data?.types?.map((item: PokemonType) => item.type.name).join(', '),
    [],
  )

  // this is to set the header title of the pokemon
  useLayoutEffect(() => {
    navigation.setOptions({title: route.params.name})
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorBox />
  }

  return (
    <View className="flex-1 bg-white p-5">
      <Animated.Image
        resizeMode="contain"
        source={images[route?.params?.name]}
        sharedTransitionTag={route.params.name}
        className="w-48 h-48 rounded-2xl mb-5 self-center"
      />

      <Row title="Name" value={data?.name} />
      <Row title="Height" value={`${data?.height} cm`} />
      <Row title="Weight" value={`${data?.weight} kg`} />
      <Row title="Type" value={typeNames} />
    </View>
  )
}

export {PokemonDetail}
