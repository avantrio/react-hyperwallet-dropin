import React, { Component } from 'react'

import HyperwalletTranferMethodDropIn from 'react-hyperwallet-dropin'

export default class App extends Component {

  render () {

    //token expires every 10 minutes.
    const token  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3ItMTdhMTBjODktMWNkOS00YTFiLThkOGYtYjhlNjQ1ZjYzZGVlIiwiaWF0IjoxNTgxNTIyNjEyLCJleHAiOjE1ODE1MjMyMTIsImF1ZCI6InBndS0zMjM2NDU1NC1jZGQyLTQxYmMtYmNmNy1mMWE0M2Q3NmI4YjMiLCJpc3MiOiJwcmctOGM5ZGI4OGItNjAyZC00ZGZlLThmODItM2U3MDU3YjRjMmQ1IiwicmVzdC11cmkiOiJodHRwczovL2FwaS5zYW5kYm94Lmh5cGVyd2FsbGV0LmNvbS9yZXN0L3YzLyIsImdyYXBocWwtdXJpIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5oeXBlcndhbGxldC5jb20vZ3JhcGhxbCIsImluc2lnaHRzLXVyaSI6Imh0dHBzOi8vbXNtYXN0ZXIucWEucGF5cGFsLmNvbToxMjQzNi92MS90cmFja2luZy9iYXRjaC9ldmVudHMiLCJlbnZpcm9ubWVudCI6IlVBVCJ9.qO0wo2CRtWoxVTOR44E34z83DeoFFVGXaIVdZMXGVU1n4RQh-YjcevknRLK8K4y4STpzyN-u76-mjWG7hByXDQ"

    return (
      <div>
        <HyperwalletTranferMethodDropIn 
          userToken='usr-17a10c89-1cd9-4a1b-8d8f-b8e645f63dee'
          environment='sandbox'
          getAuthenticationToken = {(callback)=>{callback(token)}}
          onComplete = {(trmObject, completionResult)=>{
            console.log(trmObject)
            console.log(completionResult)
          }}
          onError = {()=>{window.alert('Hyperwallet SDK could not be loaded.')}}
          template='bootstrap3'
        />
      </div>
    )
  }
}

