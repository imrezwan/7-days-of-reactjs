import React from 'react';
import './App.css';
import './datasource';
import CommentList from './components/Comment';
import BlogPosts from './components/BlogPost';

class App extends React.Component {

  render() {
    return <div className="App">
      <BlogPosts></BlogPosts>
      <CommentList></CommentList>
    </div>
  }
}

export default App;
