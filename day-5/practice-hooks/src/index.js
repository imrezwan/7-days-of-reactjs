import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const posts = [
  { id: 0, content: "Without it, we wouldn’t be able to automatically check for violations"},
  { id: 1, content: "Want to share logic between two JavaScript functions"},
  { id: 2, content: "A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks"},
  { id: 3, content: "In the beginning, our stated goal was to remove the duplicated logic from the FriendStatus and"},
]

function App(){
  const [postID, setPostID ] = useState(1);

  return (
    <div className="container">
      <PracticeUseState></PracticeUseState>
      <hr></hr>
      <PracticeUseEffect id = {postID}></PracticeUseEffect>
      <button onClick={() => {let id = Math.floor(Math.random() * 3 | 0); setPostID(id); console.log(id)  } }>Change Post</button>
      <hr></hr>
    </div>
  )

}

function PracticeUseState() {
  const [count, setCount ] = useState(0);
  return (
    <div>
      <h2>Practice "useState" hook</h2>
      <button onClick={() => setCount(count+1)}>Clicked on {count} times </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

function PracticeUseEffect({id}) {
  const [post, setPost ] = useState({});

  useEffect(() => {
    setPost(fetchData(id));
  }, [id]);

  let fetchData = (id) => {
    return posts.find( item => item.id === id)
  }

  return (
    <div>
      <h2>Practice "useEffect" hook</h2>
      <h3>POST ID: {post.id}</h3>
      <p>{post.content}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
