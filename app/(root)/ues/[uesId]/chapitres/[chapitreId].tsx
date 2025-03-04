import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const chapitre = () => {
  const {chapitreId} = useLocalSearchParams()
  return (
    <View>
      <Text>chapitre {chapitreId} </Text>
    </View>
  )
}

export default chapitre