import React, { Component } from 'react'
import DataSource from '../datasource';
import withSubscription from '../withSubscription'

class CommentList extends Component {
  render() {
    return (
      <div className="comment-section">
        <h3>Comments</h3>
        <div>
            <button onClick={this.props.load}>Load Comments</button>
            <button onClick={this.props.remove}>Remove All Comments</button>
        </div>
        {
            this.props.data.map( item => {
                console.log(item)
                return <p key={item.id}>{item.comment}</p>
            })
        }
      </div>
    )
  }
}

export default withSubscription(CommentList, DataSource.getComments());
