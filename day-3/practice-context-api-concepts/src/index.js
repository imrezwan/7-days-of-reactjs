import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const ThemeContext = React.createContext({
  theme: 'light',
});

class LevelOne extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
            console.log(theme);
            const textColor = (theme === 'dark') ? 'white': 'black'
            const bgColor = (theme === 'light') ? 'white': 'black';
            return (
              (<div 
              className="level-one"
              style={{backgroundColor: bgColor }}
            >
              <span style={{textAlign: 'center', color: textColor}}>{theme}</span>
            </div>
              )
            )
          }
        }
      </ThemeContext.Consumer>
    );
  }
}

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    }
  }


  changeTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === 'light'? 'dark' :'light',
    }));
    console.log(this.state.theme)
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="level-two">
          <LevelOne></LevelOne>
          
            <button onClick={this.changeTheme}>Change theme</button>
          
          <h3>Theme: {this.state.theme}</h3>
        </div>
      </ThemeContext.Provider>
    );
  }
}

class App extends React.Component {
    render() {
      return <LevelTwo></LevelTwo>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

