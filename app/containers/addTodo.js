import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AddTodo from '../components/addTodo'
import { createItem } from '../actions/items'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo: createItem
  }, dispatch)
}
