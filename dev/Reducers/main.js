import {combineReducers} from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer';
import rest from './restReducer';

console.log(tweets,user,rest);
export default combineReducers({
    tweets:'tweets',
    user:'user',
    rest:'rest'
});
