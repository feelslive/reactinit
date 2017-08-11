import React,{ Component } from 'react';

class App extends Component {
	 constructor(){
	 	super();//定义属性 必须调用super方法
	 	this.a = 100
	 }
  render() {
    return (
    	<div>
    		<h1>ES6方式创建的组件<span>我和你</span></h1>
    		<h2>{this.a}</h2>
    	</div>
      
    );
  }
}

export default App;

