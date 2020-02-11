import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  state = {
    isSdkReady: false
  }

  componentDidMount() {
    this.addPaypalSdk()
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div>
        Example Component: {text}
        <div id='TransferMethodUI' />
      </div>
    )
  }

  addPaypalSdk = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://sandbox.hyperwallet.com/rest/widgets/transfer-methods/usr-60765e54-4e77-499e-bf5b-8e55d40d9b2e/en.min.js`
    script.async = true
    script.onload = () => {
      this.setState({ isSdkReady: true })
      window.HWWidgets.initialize((onSuccess, onFailure) => {
        console.log(onSuccess)
      })
    }
    script.onerror = () => {
      throw new Error('Hyperwallet SDK could not be loaded.')
    }

    document.body.appendChild(script)
  }
}
