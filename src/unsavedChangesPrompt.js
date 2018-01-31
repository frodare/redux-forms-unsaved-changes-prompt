import { withRouter } from 'react-router'
import { lifecycle, compose } from 'recompose'

const DEFAULT_MESSAGE = 'Changes you made may not be saved.'

export default (formName, message) => WrappedComponent => {
  let unblock

  const onBrowserUnload = event => (event.returnValue = message || DEFAULT_MESSAGE)

  const enable = history => {
    if (unblock) unblock()
    unblock = history.block(message || DEFAULT_MESSAGE)
    window.addEventListener('beforeunload', onBrowserUnload)
  }

  const disable = () => {
    if (unblock) {
      unblock()
      unblock = null
    }
    window.removeEventListener('beforeunload', onBrowserUnload)
  }

  const update = ({dirty, history}) => {
    if (dirty) {
      enable(history)
    } else {
      disable()
    }
  }

  const lifecycleHandlers = {
    componentDidMount () {
      update(this.props)
    },
    componentDidUpdate () {
      update(this.props)
    },
    componentWillUnmount () {
      disable()
    }
  }

  return compose(withRouter, lifecycle(lifecycleHandlers))(WrappedComponent)
}
