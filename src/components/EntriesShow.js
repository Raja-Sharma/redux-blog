import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntry } from '../actions'

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
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return { entry: state.entries }
}

export default connect(mapStateToProps, { fetchEntry })(EntriesShow)
