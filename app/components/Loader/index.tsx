import React, {memo} from 'react'
import {View, ActivityIndicator} from 'react-native'

const Loader = memo(() => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#2e7cf6" />
    </View>
  )
})

export {Loader}
