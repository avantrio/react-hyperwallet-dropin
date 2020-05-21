# react-hyperwallet-dropin

> React component to integrate Hyperwallet Drop-In UI

[![NPM](https://img.shields.io/npm/v/react-hyperwallet-dropin.svg)](https://www.npmjs.com/package/react-hyperwallet-dropin) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hyperwallet-dropin
```

## Usage

```jsx
import React, { Component } from 'react'

import HyperwalletTranferMethodDropIn from 'react-hyperwallet-dropin'

class Example extends Component {
  render () {
    return (
      <HyperwalletTranferMethodDropIn
        userToken='unique user identifier prefixed with usr-. generated when creating a user'
        environment='sandbox'
        getAuthenticationToken = {(callback)=>{callback('auth-token')}} //token should be renewed every 10 mins
        onComplete = {(trmObject, completionResult)=>{
          //logic to be executed on completion of setting up transfer method.
        }}
        onError = {() => {
          // handle error
        }}
        template = 'Specifies the drop-in UI template. Allowed values are:bootstrap3|plain'
      />
    )
  }
}
```

## License

MIT © [lahiru94](https://github.com/lahiru94)
# react-hyperwallet-dropin
