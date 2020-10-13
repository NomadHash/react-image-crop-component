import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// * ===========================
// * REDUX & SAGA_MIDDLE_WARE
// * ===========================
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // <React.StrictMode>

  <Provider store={store}>
    <App />,
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
