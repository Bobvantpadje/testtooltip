import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'index.scss';
import 'normalize.css';

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// This is for using de application in offline modes, we should expirement with this and
// see how we whould like to use this.
// Calling "registerServiceWorker()" enables the serviceworker. If this method is called you have
// to call "unregister()" on all browsers where the serviceworker is installed to remove the serviceworker.
unregister();
// registerServiceWorker();
