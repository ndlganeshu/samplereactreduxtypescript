import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './models/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { EnthusiasmAction } from './actions/index';
import {Middleware} from 'redux';

const store = createStore<StoreState, EnthusiasmAction, null, null>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

export const logger:Middleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}


ReactDOM.render(
  <Provider store={store}>
  <Hello />
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
