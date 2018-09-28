import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class AppRedux extends Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<AppRedux />, document.getElementById('root'));
registerServiceWorker();
