import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoList from '../components/todoList'
import { allItems } from '../selectors/items'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

function mapStateToProps(state) {
  return {
    items: allItems(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}
