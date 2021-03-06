import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HyperwalletTranferMethodDropIn extends Component {
  static propTypes = {
    userToken: PropTypes.string,
    environment: PropTypes.oneOf(['sandbox', 'uat', 'production']),
    getAuthenticationToken: PropTypes.func,
    onComplete: PropTypes.func,
    onError: PropTypes.func,
    template: PropTypes.string
  }

  state = {
    isSdkReady: false,
    isUILoaded: false,
    isError: false
  }

  componentDidMount() {
    this._addPaypalSdk()
  }

  render() {
    if (this.state.isSdkReady) {
      window.HWWidgets.initialize(this._getAuthenticationToken)
    }

    return (
      <div style={{padding: 20}}>
        {this.state.isUILoaded ? null : this.state.isError ? 'error occured' : 'loading'}
        <div id='TransferMethodUI' />
      </div>
    )
  }

  _addPaypalSdk = () => {
    const {
      userToken,
      environment,
      onComplete,
      template,
      onError
    } = this.props

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://${environment}.hyperwallet.com/rest/widgets/transfer-methods/${userToken}/en.min.js`
    script.async = true
    script.onload = () => {
      this.setState({ isSdkReady: true })
      window.HWWidgets.transferMethods.configure({
        'template': template || 'plain',
        'el': document.getElementById('TransferMethodUI'),
        'onComplete': function (trmObject, completionResult) {
          onComplete(trmObject, completionResult)
        }
      }).display(function () {
        // this is a callback event called when display is done
        this.setState({ isUILoaded: true })
      }.bind(this))
    }
    script.onerror = () => {
      this.setState({isError: true})
      onError()
    }

    document.body.appendChild(script)
  }

  _getAuthenticationToken = (callback) => {
    this.props.getAuthenticationToken(callback)
  }
}
