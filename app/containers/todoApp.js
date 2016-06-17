import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoApp from '../components/todoApp'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
  }, dispatch)
}
