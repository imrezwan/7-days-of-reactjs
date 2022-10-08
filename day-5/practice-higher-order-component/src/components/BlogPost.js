import React from 'react'
import DataSource from '../datasource';
import withSubscription from '../withSubscription';

class BlogPosts extends React.Component {
  render() {
    return (
        <div className="blogpost-section">
        <h2>Blog Posts</h2>
        <div className='actions'>
            <button onClick={this.props.load}>Load All Posts</button>
            <button onClick={this.props.remove}>Remove All Posts</button>
        </div>
        {
            this.props.data.map( item => {
                return (
                    <div className="post">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                );
            })
        }
        <hr></hr>
      </div>
    );
  }
}

export default withSubscription(BlogPosts, DataSource.getBlogPosts());
