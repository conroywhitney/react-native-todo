import React from 'react'
import { Text, View } from 'react-native'

export default function TodoApp() {
  const styles = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <View style={styles}>
      <Text>Hello, World!</Text>
    </View>
  )
}
