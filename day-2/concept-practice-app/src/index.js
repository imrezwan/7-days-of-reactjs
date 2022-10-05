import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Home extends React.Component {
  formatMyName(user) {
    return user.first_name + " " + user.last_name;
  }

  render() {
    const user = {
      first_name: "Rezwan",
      last_name: "Kaoser",
    }
    const element = <h1>{this.formatMyName(user)}</h1>;
    return (
      element
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home></Home>
);
