import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const cour = () => {
  const { courId } = useLocalSearchParams();
  return (
    <View>
      <Text>cour {courId} </Text>
    </View>
  )
}

export default cour