// <!-- Author : Hannad Rehman Sun Jan 22 2017 22:00:32 GMT+0530 (IST)-->
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Home from '../../Views/Home/home.jsx';
import Error from '../../Views/Error/error.jsx';
import Login from '../../Views/Login/login.jsx';
import Posts from '../../Views/Posts/posts.jsx';
import ReduxTest from '../../Views/Redux/redux.jsx';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {store} from '../../store';

console.log(store);
ReactDOM.render(
	<Provider store={store}>
<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Login}></IndexRoute>
			<Route path="home" component={Home}></Route>
			<Route path="error" component={Error}></Route>
			<Route path="login" component={Login}></Route>
			<Route path="posts" component={Posts}></Route>
			<Route path="redux" component={ReduxTest}></Route>
			
			
		</Route>
</Router>
</Provider>
	,document.getElementById('app'));

