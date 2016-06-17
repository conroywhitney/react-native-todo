import React, { Component } from 'react'
import { ListView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  text: {
    flex: 1
  }
})

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: this.initializeDataSource()
    }
  }

  initializeDataSource() {
    const { items } = this.props
    const rowHasChanged = (r1, r2) => r1 !== r2
    const dataSource = new ListView.DataSource({ rowHasChanged })

    return dataSource.cloneWithRows(items)
  }

  renderRow(rowData) {
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.text}>
            {rowData}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Todo:</Text>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow} />
      </View>
    )
  }
}
