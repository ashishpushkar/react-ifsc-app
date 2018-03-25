import React from 'react';
import ReactDOM from 'react-dom';
import Bank from './containers/bank';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Bank />
    </Provider>,
    document.getElementById('app')
);