import React from 'react';
import $ from 'jquery';


class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={
			posts:[]
		}
	}
	componentWillMount(){
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/posts',
			method:'GET',
			data:{}
		}).then((a)=>{
			this.setState({posts:a});
		},(b)=>{
			console.log(a);
		})
	}
   render() {
      return (
         <article>
         	<Posts post={this.state.posts} />
         </article>
        
      );
   }
}
class Posts extends React.Component{
	constructor(props){
		super(props);
		this.generatePosts=this.generatePosts.bind(this);
	}
	generatePosts(psts){
		const list=psts.map((current,i)=><PostBody key={i} id={i} me={current}/>);
		return list;
	}
	render(){
		return(
				<div>
					{this.generatePosts(this.props.post)}
				</div>
			)
	}
}
class PostBody extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<p id={this.props.id+'_title'}>{this.props.me.title}</p>
				<p id={this.props.id+'_body'}>{this.props.me.body}</p>
				
			</div>
		)
	}
}

export default Home