import React from 'react'
import ReactHowler from 'react-howler'
import demo from './demo.mp3';

// 音频控制模块，整理完毕，现在只要在相对应的业务逻辑界面调用play和stop相关的按钮就可以了
// 如果要优化在播放结束后多少秒之后再度开启警报功能的话，需要在播放结束调用一个定时器，然后在关闭声音警报的按钮里面加上一条判断逻辑，如果定时器是开着的，那么关闭警报音乐的同时，把定时器也关闭就可以了
// 或者可以直接在他自己的写的top——alert组件，或者top——confirm组件里面做一个子组件然后在一定条件下触发就可以
// 晚上先尝试一下webpack打包，试一下webpack的打包逻辑，生成后的代码，单独放在静态文件下跑一下尝试下
class OnlyPlayPauseButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false
		}
		this.handlePlay = this.handlePlay.bind(this)
		this.handlePause = this.handlePause.bind(this)
	}

	handlePlay() {
		this.setState({
			playing: true
		})
	}

	handlePause() {
		this.setState({
			playing: false
		})
	}

	render() {
		return(
			<div>
		        <ReactHowler
		          src={demo}
		          playing={this.state.playing}
		        />
		        <div>播放的资源文件:{demo}</div>	
		        <button onClick={this.handlePlay}>play(事件监听)</button>
		        <button onClick={this.handlePause}>Pause(事件监听)</button>
	      </div>
		)
	}
}

export default OnlyPlayPauseButton