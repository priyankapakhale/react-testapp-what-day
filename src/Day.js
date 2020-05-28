import React from 'react'
import randomColor from 'randomcolor'

class Day extends React.Component {

	getCurrentDate() {
		let today = new Date()
		let date = today.getDate()
		let month = today.getMonth() + 1
		return ({date : date, month : month})
	}

	calculateToday() {
		const {date, month} = this.getCurrentDate()
		let startDate = 4
		let startMonth = 5

		let diff = date - startDate
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
			color : randomColor()
		}
		const {week, day} = this.calculateToday()
		return (
			<div>
			<h1 style={{marginTop : "60px"}}>Today is</h1>
			<h1 style={styles}>Week {week} Day {day}</h1>
			<h3 style={{fontWeight:"bold"}}>{day === 1 ? "Reminder : Create Pull Request" : ""}</h3>
			</div>
		)
	}
}

export default Day