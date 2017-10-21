import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class Entries extends Component {

  componentDidMount() {
    this.props.fetchEntries()
  }

  renderEntries() {
    return _.map(this.props.entries, entry=> {
      return (
        <li key={entry.id}>
            <Link to={`/entries/${entry.id}`}><h3>{entry.title}</h3></Link>
        </li>
      )
    })
  }

  render() {
    if (!this.props.entries) return <p>loading...</p>
    return (
      <div>
        <h1>Hipster blog entries</h1>
        <ul>
          {this.renderEntries()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {entries: state.entries}
}

export default connect(mapStateToProps, { fetchEntries })(Entries)
