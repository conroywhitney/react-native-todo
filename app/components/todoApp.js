import React from 'react'
import { View } from 'react-native'

import TodoList from '../containers/todoList'

export default function TodoApp() {
  const styles = {
    paddingTop: 50,
    paddingRight: 10,
    paddingBottom: 50,
    paddingLeft: 10,
    flex: 1
  }

  return (
    <View style={styles}>
      <TodoList />
    </View>
  )
}
