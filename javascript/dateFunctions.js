function findDifference() {
	var parsedDate = parseInput();
	var difference = calculateDifference(parsedDate);
	setDisplay(difference);
}

function parseInput() {
	var day = document.getElementById('date_day').value;
	var month = document.getElementById('date_month').value;
	var year = document.getElementById('date_year').value;
	var parsedDate = {
		day: null,
		month: null,
		year: null
	}

	if (day == "" && month == "" && year != ""){
		if (year.length != 4){
			alert("Please enter a valid year!");
		}
	} else if (day == "" || month == "" || year == ""){
		alert("Please enter a full date!");
	} else {
		parsedDate.day = day;
		parsedDate.month = month;
		parsedDate.year = year;
	}
	return parsedDate;
}

function calculateDifference(date) {
	var countTo = new Date();
	countTo.setFullYear(date.year);
	countTo.setMonth(date.month - 1);
	countTo.setDate(date.day);
	countTo.setHours(00);
	countTo.setMinutes(00);
	countTo.setSeconds(00);

	now = new Date();
	difference = Math.abs(now - countTo);

	days = Math.floor(difference/(60*60*1000*24)*1);
	years = Math.floor(days/365);
	hours = Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
	mins = Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	secs = Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

	return {
		days: days,
		years: years,
		hours: hours,
		mins: mins,
		secs: secs
	}
}

function setDisplay(difference) {
	document.getElementById('diff_days').value = difference.days;
	document.getElementById('diff_years').value = difference.years;
	document.getElementById('diff_hours').value = difference.hours;
	document.getElementById('diff_mins').value = difference.mins;
	document.getElementById('diff_secs').value = difference.secs;
}