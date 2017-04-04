import React from 'react';
import {browserHistory} from 'react-router';


class Login extends React.Component {
  constructor(props){
  	super(props);
  	this.handleLogin=this.handleLogin.bind(this);
  }
  

  handleLogin(e){
  	FB.login((response)=>{
  		  if (response.status === 'connected') {
	    localStorage.setItem('token',JSON.stringify(response.authResponse));
	    	FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
			    function (response) {
			        localStorage.setItem('user',JSON.stringify(response));
			        browserHistory.push('/home');
			    });

	  } else if (response.status === 'not_authorized') {
	    console.error('user logged in facebook but not here');
	  } else {
	  	 console.error('The person is not logged into Facebook, so were not sure if they are logged into this app or not.');
	  }
  	})
  }

   render() {

      return (
         <article>
         	<section className="login-cent" >
         	<button className="btn btn-success" onClick={this.handleLogin}>Login with facebook</button>
         	</section>
         </article>
        
      );
   }
}

export default Login