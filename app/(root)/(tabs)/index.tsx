import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index () {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
        <Text className='text-lg font-bold my-10 font-rubik text-3xl'>Hello</Text>
      <Link href="/sign-up">
        <Text>Login</Text>
      </Link>
      <Link href="/emploi-du-temps">
        <Text>Emploi du temps</Text>
      </Link>
      <Link href="/cahier-de-texte">
        <Text>Cahier de texte</Text>
      </Link>
      <Link href="/compte">
        <Text>Compte</Text>
      </Link>
      <Link href="/ues/">
        <Text>Math</Text>
      </Link>
    </View>
  )
}

