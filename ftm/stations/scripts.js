
var stationNo = 0; // this is the only variable that has to be changed between stations

var displayTime = 15; // currently same for error and solution displays
var count = displayTime;

var passcodes = [37123471, 18932798, 29485769];

var solutionCodes = ['seanpark.xyz/ftm/cwm.html', // Code with Music! 
										 'seanpark.xyz/ftm/ptb.html', // Play the Bits!
										 // 'seanpark.xyz/ftm/wan.html', // What are Numbers?
										 'seanpark.xyz/ftm/trivia.html' // Trivia
										];

function setUpStation(number) {

	stationNo = number;

	// Set page title
	document.getElementById('title').innerHTML = 'Station #' + stationNo;

	// Set color of text and button based on station number
	var color;
	if(stationNo == 1)      { color = 'blue'; }
	else if(stationNo == 2) { color = 'purple'; }
	else if(stationNo == 3) { color = 'orange'; }
	else if(stationNo == 4) { color = 'green'; }

	document.getElementById('title').style.color = color;
	document.getElementById('button').style.borderColor = color;

	// Set audio
	setAudio();

}

function setAudio() {
	var sample = new Audio('../audio_samples/sample' + stationNo + '.mp3');
	sample.controls = true;
	sample.loop = true;
	sample.autoplay = true;
	document.body.appendChild(sample);
}

function authenticate() {
	var val = document.getElementById('passcode').value;
	if(passcodes[stationNo - 1] == val) {
		showSolutionCode();
	} else {
		showErrorScreen();
	}
}

function showSolutionCode() {
	document.getElementById('solutionScreen').style.display = 'block';
	document.getElementById('entryScreen').style.display = 'none';
	document.getElementById('solutionCode').innerHTML = solutionCodes[stationNo - 1];
	document.getElementById('passcode').value = ''; // clear passcode field
	setCountdown('solution');
}

function setCountdown(screen) {
	document.getElementById(screen + 'Countdown').innerHTML = count;
	var countdownInterval = setInterval(function() { countdown(screen) }, 1000);
	setTimeout(showEntryScreen, displayTime * 1000);
	setTimeout(function() { clearInterval(countdownInterval) }, displayTime * 1000);
}

function countdown(screen) {
	count -= 1;
	if(count == 0) {
		count = displayTime;
	}

	document.getElementById(screen + 'Countdown').innerHTML = count;
}

function showErrorScreen() {
	document.getElementById('errorScreen').style.display = 'block';
	document.getElementById('entryScreen').style.display = 'none';
	document.getElementById('passcode').value = ''; // clear passcode field
	setCountdown('error');
}

function showEntryScreen() {
	document.getElementById('entryScreen').style.display = 'block';
	document.getElementById('solutionScreen').style.display = 'none';
	document.getElementById('errorScreen').style.display = 'none';
}