import React, { Component } from 'react'

import HyperwalletTranferMethodDropIn from 'react-hyperwallet-dropin'

export default class App extends Component {

  render () {

    //token expires every 10 minutes.
    const token  = "Temp Token from hyperwallet"

    return (
      <div>
        <HyperwalletTranferMethodDropIn 
          userToken='unique user identifier prefixed with usr-. generated when creating a user'
          environment='sandbox'
          getAuthenticationToken = {(callback)=>{callback(token)}}
          onComplete = {(trmObject, completionResult)=>{
            console.log(trmObject)
            console.log(completionResult)
          }}
        />
      </div>
    )
  }
}

