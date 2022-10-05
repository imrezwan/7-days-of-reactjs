import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const element = (
        <div className="clock">
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
    );
    return (
      element
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Clock></Clock>
  </div>
);
