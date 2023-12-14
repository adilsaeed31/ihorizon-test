import React, {memo} from 'react'
import {View, Text} from 'react-native'

const ErrorBox = memo(() => {
  return (
    <View className="flex-1 items-center justify-center" testID="errorBox">
      <Text className="text-red-400">An error has occurred</Text>
    </View>
  )
})

export {ErrorBox}
