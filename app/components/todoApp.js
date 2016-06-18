import React from 'react'
import { View } from 'react-native'

import AddTodo from '../containers/addTodo'
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
      <AddTodo />
      <TodoList />
    </View>
  )
}
