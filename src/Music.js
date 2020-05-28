import React, { Component } from 'react'
import soundfile from './assets/interstellar.mp3'
import Sound from 'react-sound'

class Music extends Component {
	constructor() {
		super()
		this.state = {
			isPlaying : false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState => ({
			isPlaying : !prevState.isPlaying
		}))
	}

	render() {
		const styles = {
			backgroundColor : "#444444",
			marginTop: "20px",
			borderRadius : "30px",
			padding: "5px 15px 5px 15px",
			border: "none",
			color : "white"
		}

		 return (
		 	<div>
		 	   <button style={styles} onClick={this.handleClick}>{this.state.isPlaying ? "Stop Music" : "Play Music"}</button>
			   <Sound
				   url={soundfile}
				   playStatus={this.state.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
				   onLoading={this.handleSongLoading}
				   onPlaying={this.handleSongPlaying}
				   onFinishedPlaying={this.handleSongFinishedPlaying}
			   />
			</div>
		  );
	 }
}

export default Music