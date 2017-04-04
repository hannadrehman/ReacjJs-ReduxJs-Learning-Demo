import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from '../Reducers/main';

console.log(reducer);
const middleware=applyMiddleware(promise(),thunk,logger());


export default createStore(reducer,middleware);