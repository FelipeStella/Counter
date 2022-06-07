let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
let enable_negative_count = false;


function modifyStatusButton() {
	if (enable_negative_count == false) {
		if (CURRENT_NUMBER.innerHTML == 0) {
			document.getElementById("counter").children[0].disabled = true 
			document.getElementById("counter").children[0].style.color = '#c4c3c2'
			document.getElementById('counter').children[0].style.borderColor = '#c4c3c2';
			document.getElementById('counter').children[0].style.backgroundColor = '#e0e0e0';
		}  else {
			document.getElementById("counter").children[0].disabled = false;
			document.getElementById("counter").children[0].style.color = 'lightcoral'
			document.getElementById('counter').children[0].style.borderColor = 'lightcoral';
			document.getElementById('counter').children[0].style.backgroundColor = 'rgb(241, 214, 214)';
			document.getElementById('currentNumber').style.color = 'black'
		}
	} else {
		CURRENT_NUMBER.innerHTML < 0 ? document.getElementById('currentNumber').style.colorScheme = 'red' :
		document.getElementById('currentNumber').style.color = 'black'

		document.getElementById("counter").children[0].disabled = false;
		document.getElementById("counter").children[0].style.color = 'lightcoral'
		document.getElementById('counter').children[0].style.borderColor = 'lightcoral';
		document.getElementById('counter').children[0].style.backgroundColor = 'rgb(241, 214, 214)';
		document.getElementById('currentNumber').style.color = 'black'
	}
	
		if (CURRENT_NUMBER.innerHTML == 10) {
			document.getElementById("counter").children[2].disabled = true 
			document.getElementById("counter").children[2].style.color = '#c4c3c2'
			document.getElementById('counter').children[2].style.borderColor = '#c4c3c2';
			document.getElementById('counter').children[2].style.backgroundColor = '#e0e0e0';
		}  else {
			document.getElementById("counter").children[2].disabled = false;
			document.getElementById("counter").children[2].style.color = 'lightcoral'
			document.getElementById('counter').children[2].style.borderColor = 'lightcoral';
			document.getElementById('counter').children[2].style.backgroundColor = 'rgb(241, 214, 214)';
		}
														
}
	
modifyStatusButton();

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function modifyLimitCount() {
	if (enable_negative_count) {
		enable_negative_count = false
		document.getElementById('currentNumber').innerHTML = 0
	}
	else {
		enable_negative_count = true
	}
	modifyStatusButton()
}

document.getElementById("counter").children[2].addEventListener("click", increment);
document.getElementById("counter").children[0].addEventListener("click", decrement);
document.getElementById("counter").children[0].addEventListener("click", modifyStatusButton);
document.getElementById("counter").children[2].addEventListener("click", modifyStatusButton);
document.getElementById("button-number-negative").children[0].addEventListener("click", modifyLimitCount)




