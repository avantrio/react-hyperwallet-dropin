import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    userToken: PropTypes.string,
    environment: PropTypes.oneOf(['sandbox', 'uat', 'production']),
    getAuthenticationToken: PropTypes.func,
    onComplete: PropTypes.func
  }

  state = {
    isSdkReady: false,
    isUILoaded: false
  }

  componentDidMount() {
    this._addPaypalSdk()
  }

  render() {
    if (this.state.isSdkReady) {
      window.HWWidgets.initialize(this._getAuthenticationToken)
    }

    return (
      <div>
        {this.state.isUILoaded ? null : 'loading'}
        <div id='TransferMethodUI' />
      </div>
    )
  }

  _addPaypalSdk = () => {
    const {
      userToken,
      environment
    } = this.props

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://${environment}.hyperwallet.com/rest/widgets/transfer-methods/${userToken}/en.min.js`
    script.async = true
    script.onload = () => {
      this.setState({ isSdkReady: true })
      window.HWWidgets.transferMethods.configure({
        'template': 'plain',
        'el': document.getElementById('TransferMethodUI'),
        'onComplete': function (trmObject, completionResult) {
          this.props.onComplete(trmObject, completionResult)
        }
      }).display(function () {
        // this is a callback event called when display is done
        this.setState({ isUILoaded: true })
      }.bind(this))
    }
    script.onerror = () => {
      throw new Error('Hyperwallet SDK could not be loaded.')
    }

    document.body.appendChild(script)
  }

  _getAuthenticationToken = (callback) => {
    this.props.getAuthenticationToken(callback)
  }
}
