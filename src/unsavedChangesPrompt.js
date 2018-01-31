import React from 'react'
import { withRouter } from 'react-router'

const DEFAULT_MESSAGE = 'Changes you made may not be saved.'

export default (formName, message) => WrappedComponent => {
  class UnsavedChangesPrompt extends React.Component {
    constructor (props) {
      super(props)
      this.onBrowserUnload = this.onBrowserUnload.bind(this)
    }

    onBrowserUnload (event) {
      event.returnValue = message || DEFAULT_MESSAGE
    }

    enable () {
      if (this.unblock) this.unblock()
      this.unblock = this.props.history.block(message || DEFAULT_MESSAGE)
      window.addEventListener('beforeunload', this.onBrowserUnload)
    }

    disable () {
      if (this.unblock) {
        this.unblock()
        this.unblock = null
      }
      window.removeEventListener('beforeunload', this.onBrowserUnload)
    }

    update () {
      if (this.props.dirty) {
        this.enable()
      } else {
        this.disable()
      }
    }

    componentDidMount () {
      this.update()
    }

    componentDidUpdate () {
      this.update()
    }

    componentWillUnmount () {
      this.disable()
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  return withRouter(UnsavedChangesPrompt)
}
