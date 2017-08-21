import React, { Component } from 'react';
import OnlyPlayPauseButton from './OnlyPlayPauseButton'
import './App.css';

class HelloWord extends Component {
	constructor() {
    super();
    console.log("constructor");
  }

	// 时间处理函数写法
	handleClick = (e) => {
    this.setState({clicked: true});
    console.log("button has been clicked");
  }
	
	// <HowlerComponent/>
  render() {
    return (
      <div className="App">
      	<button onClick={this.handleClick}>事件监听测试</button>
        <div>hello,world.今天是{(new Date()).toLocaleString()}</div>
        <ChildComponent message="hello,child"/>
        <OnlyPlayPauseButton/>
      </div>
    );
  }
}

// props属性可以获得从父标签哪里获得的属性
class ChildComponent extends Component {
  render() {
    return (
      <div>
        <span>我是子组件.父标签传递的消息是: {this.props.message}</span>
      </div>
    );
  }
}

export default HelloWord;