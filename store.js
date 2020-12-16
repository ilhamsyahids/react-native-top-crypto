import { 
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Reducers from './reducers'

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
    Reducers,
    compose(middleware)
);

export default Store;