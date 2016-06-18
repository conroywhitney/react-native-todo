import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginBottom: 25
  },
  button: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'green',
    width: 40,
    height: 40,
    marginLeft: 10,
    justifyContent: 'center'
  },
  icon: {
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1
  },
  oneLine: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 24
  }
})

export default class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = { text: null }
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  handleButtonPress() {
    const { addTodo } = this.props

    return addTodo(this.state.text)
  }

  /* eslint-disable react/no-set-state */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add New Todo:</Text>
        <View style={styles.oneLine}>
          <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ text })} />
          <TouchableHighlight onPress={this.handleButtonPress}>
            <View style={styles.button}>
              <Text style={styles.icon}>+</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
