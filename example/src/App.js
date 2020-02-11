import React, { Component } from 'react'

import ExampleComponent from 'react-hyperwallet-dropin'

export default class App extends Component {

  render () {

    //token expires every 10 minutes.
    const token  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3ItNjA3NjVlNTQtNGU3Ny00OTllLWJmNWItOGU1NWQ0MGQ5YjJlIiwiaWF0IjoxNTgxNDM2NjcxLCJleHAiOjE1ODE0MzcyNzEsImF1ZCI6InBndS0zMjM2NDU1NC1jZGQyLTQxYmMtYmNmNy1mMWE0M2Q3NmI4YjMiLCJpc3MiOiJwcmctOGM5ZGI4OGItNjAyZC00ZGZlLThmODItM2U3MDU3YjRjMmQ1IiwicmVzdC11cmkiOiJodHRwczovL2FwaS5zYW5kYm94Lmh5cGVyd2FsbGV0LmNvbS9yZXN0L3YzLyIsImdyYXBocWwtdXJpIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5oeXBlcndhbGxldC5jb20vZ3JhcGhxbCIsImluc2lnaHRzLXVyaSI6Imh0dHBzOi8vbXNtYXN0ZXIucWEucGF5cGFsLmNvbToxMjQzNi92MS90cmFja2luZy9iYXRjaC9ldmVudHMiLCJlbnZpcm9ubWVudCI6IlVBVCJ9.CGf8H02JMYCrz_Hqmg54lIvg72z0GKz9XqfMVGbGUWMEZSo6t-cVBMD2KLWDYY-AmhIulw87mGMg7IDMGLJGQw"

    return (
      <div>
        <ExampleComponent 
          userToken='usr-60765e54-4e77-499e-bf5b-8e55d40d9b2e'
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

