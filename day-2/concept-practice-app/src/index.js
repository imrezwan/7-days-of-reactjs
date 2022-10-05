import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Home extends React.Component {
  render() {
    const element = <h1>Hello World</h1>;
    return (
      element
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home></Home>
);
