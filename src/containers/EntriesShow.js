import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntry } from '../actions'
import { Link } from 'react-router-dom'

class EntriesShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchEntry(id)
  }

  render() {
    const { entry } = this.props
    if (!entry) {
      return <p>loading</p>
    }
    return (
      <div>
        <h2>{entry.title}</h2>
        <p>{entry.body}</p>
        <Link to='/'>Back to index</Link>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return { entry: state.entries }
}

export default connect(mapStateToProps, { fetchEntry })(EntriesShow)
