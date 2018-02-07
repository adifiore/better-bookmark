import { createStore } from 'redux';
// Add composeWithDevTools to get easy access to the Redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';


const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;