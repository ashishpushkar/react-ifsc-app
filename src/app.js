import React from 'react';
import ReactDOM from 'react-dom';
import Bank from './containers/bank';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Bank />
    </Provider>,
    document.getElementById('app')
);