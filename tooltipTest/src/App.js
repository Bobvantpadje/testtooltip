import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import style from './index.scss';
class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Tippy content="Hello">
          <button style={{ color: 'red' }}>My button</button>
        </Tippy>
      </div>
    );
  }
}

export default App;
