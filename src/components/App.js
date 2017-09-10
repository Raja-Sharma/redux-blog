import React, { Component } from 'react'
import Entries from '../containers/Entries'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <Entries />
      </div>
    )
  }
}

export default App
