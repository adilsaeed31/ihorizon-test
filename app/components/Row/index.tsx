import React, {memo} from 'react'
import {View, Text} from 'react-native'

const Row = memo(({title, value}: {title: string; value: string}) => {
  return (
    <View className="flex-row items-center justify-between p-4 border-t border-slate-200">
      <Text className="font-bold text-black">{title}</Text>

      <Text className=" text-black">{value}</Text>
    </View>
  )
})

export {Row}
