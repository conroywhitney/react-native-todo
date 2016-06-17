import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TodoApp extends Component {
  render() {
    const { state, actions } = this.props
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
}
