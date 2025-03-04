import { View, Text } from 'react-native'
import React from 'react'
import { Image, type ImageSource } from 'expo-image';

const Props = {
    imgSource: ImageSource;
}

const logo = ({imgSource}: Props) => {
  return (
    <View>
      <Image source={imgSource} style={{ width: 100, height: 100 }} />
    </View>
  )
}

export default logo