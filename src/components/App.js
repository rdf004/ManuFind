import '../style/style.css';
import React from 'react';
import Header from './Header';
import Profile from './Profile';
import InputTags from './InputTags';

class App extends React.Component {

  render() {

    return (
      <div className="app">
        <Header />
        <Profile />
      </div>

    );

  }

}

export default App;
