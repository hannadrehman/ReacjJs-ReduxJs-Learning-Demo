//Author : Hannad Rehman Sun Jan 22 2017 22:00:32 GMT+0530 (IST)

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


class NavigationBar extends React.Component {
   constructor(props){
      super(props);
   }
   
   render() {
   	const siteLinks=['home','error','Posts'];
      return (
         <nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">ReactJs</a>
			    </div>
			      <NavigationList links={siteLinks}/>

			  </div>
			</nav>
        
      );
   }
}

class NavigationList extends React.Component {
   constructor(props){
   	super(props);
   	this.renderNavList=this.renderNavList.bind(this);
   };

   renderNavList(link){
     const list= link.map((current,i)=>{
       return <li key={i}><Link to={'/'+current}  activeClassName="active">{current}</Link></li>
     });
     return list;
   }
   	
   

   render() {
      return (
         <ul className="nav navbar-nav">
				{this.renderNavList(this.props.links)}
			</ul>
      );
   }
}

//;


export default NavigationBar;

