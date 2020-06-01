import React from 'react'
import randomColor from 'randomcolor'
import Music from './Music'
class Day extends React.Component {
	constructor() {
		super()
		this.state = {
			color : randomColor()
		}
	}

	date_diff_indays() {
		let dt1 = new Date("05/04/2020")
		let dt2 = new Date()
		return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
	}

	calculateToday() {
		let diff = this.date_diff_indays()
		let numWeeks = Math.floor(diff/7) + 1
		let numDay = diff%7 + 1
		console.log(numWeeks, numDay)
		return ({
			week : numWeeks,
			day : numDay
		})

	}

	render() {
		const styles = {
			fontSize : "100px",
			color : this.state.color
		}
		const {week, day} = this.calculateToday()
		return (
			<div>
				<h1 style={{marginTop : "60px"}}>Today is</h1>
				<h1 style={styles}>Week {week} Day {day}</h1>
				<h3 style={{fontWeight:"bold"}}>{day === 1 ? "Reminder : Create Pull Request" : ""}</h3>
				<Music />
			</div>
		)
	}
}

export default Day