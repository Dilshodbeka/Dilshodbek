function clock() {
	// created new date and got hour min sec
	const fullDate = new Date();
	let hours = fullDate.getHours();
	let mins = fullDate.getMinutes();
	let secs = fullDate.getSeconds();

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (mins < 10) {
		mins = '0' + mins;
	}
	if (secs < 10) {
		secs = '0' + secs;
	}
	// get from html and inner 
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minute').innerHTML = mins;
	document.getElementById('secund').innerHTML = secs;

}
//   set interval for 
setInterval(clock, 100);