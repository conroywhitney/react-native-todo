import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoApp from '../components/todoApp'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}
