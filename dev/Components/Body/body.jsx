//<!-- Author : Hannad Rehman Mon Jan 30 2017 22:58:08 GMT+0530 (IST)-->

import React from 'react';


class Body extends React.Component {
   constructor(props){
   	super(props);
   }
   render() {
   	
      return (
        <section className='site-body'>
        	{this.props.children}
        </section>
      );
   }
}

export default Body;