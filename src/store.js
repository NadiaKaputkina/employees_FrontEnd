import { createStore } from 'redux';
import rootReduser from './reducers/index';

const composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReduser,
    composeEnhancers
);

export default store;