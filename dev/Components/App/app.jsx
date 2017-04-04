//Author : Hannad Rehman Sun Jan 22 2017 22:00:32 GMT+0530 (IST)
import React from 'react';
import $ from 'jquery';
import NavigationBar from '../NavigationBar/navigationBar.jsx';
import Body from '../Body/body.jsx'
import { Link ,browserHistory} from 'react-router';
import {connect} from 'react-redux';



@connect((store)=>{
    return{
        user:store.user
    }
})
class App extends React.Component {

 
   render() {
      return (
         <div className='container'>
             {this.props.user}
          <NavigationBar/>
          <div className="site-body">
          {this.props.children}
          </div>
         </div>

      );
   }
}

export default App;

