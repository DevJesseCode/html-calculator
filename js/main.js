const calcDisplay = document.getElementById('calcDisplay');
let part1
let part2
let part3
let functionToPerform = ""
let functionToPerform2 = ""
let expression

function updateDisplay(value) {
	calcDisplay.innerHTML = calcDisplay.innerHTML + value
	expression = calcDisplay.innerHTML
}

function point() {
	calcDisplay.innerHTML = calcDisplay.innerHTML + "."
	expression = calcDisplay.innerHTML
}

function dividedBy() {
	if (expression.indexOf("*") === -1 && expression.indexOf("/") === -1 && expression.indexOf("+") === -1 && expression.indexOf("-") === -1) {
		part1 = calcDisplay.innerHTML
	}
	else {
		
	}
	calcDisplay.innerHTML = calcDisplay.innerHTML + " / "
	expression = calcDisplay.innerHTML
	if (functionToPerform !== "") {
		functionToPerform2 = "division"
	}
	else {
		functionToPerform = "division"
	}
}

function multipliedBy() {
	if (expression.indexOf("*") === -1 && expression.indexOf("/") === -1 && expression.indexOf("+") === -1 && expression.indexOf("-") === -1) {
		part1 = calcDisplay.innerHTML
	}
	else {
		
	}
	calcDisplay.innerHTML = calcDisplay.innerHTML + " * "
	expression = calcDisplay.innerHTML
	if (functionToPerform !== "") {
		functionToPerform2 = "multiplication"
	}
	else {
		functionToPerform = "multiplication"
	}
}

function totalOf() {
	if (expression.indexOf("*") === -1 && expression.indexOf("/") === -1 && expression.indexOf("+") === -1 && expression.indexOf("-") === -1) {
		part1 = calcDisplay.innerHTML
	}
	else {
		
	}
	calcDisplay.innerHTML = calcDisplay.innerHTML + " + "
	expression = calcDisplay.innerHTML
	if (functionToPerform !== "") {
		functionToPerform2 = "addition"
	}
	else {
		functionToPerform = "addition"
	}
}

function subtractedBy() {
	if (expression.indexOf("*") === -1 && expression.indexOf("/") === -1 && expression.indexOf("+") === -1 && expression.indexOf("-") === -1) {
		part1 = calcDisplay.innerHTML
	}
	else {
		
	}
	calcDisplay.innerHTML = calcDisplay.innerHTML + " - "
	expression = calcDisplay.innerHTML
	if (functionToPerform !== "") {
		functionToPerform2 = "subtraction"
	}
	else {
		functionToPerform = "subtraction"
	}
}

function deleteLast() {
	let newDisplay = ""
	for (let i = 0; i < calcDisplay.innerHTML.length - 1; i++) {
		newDisplay = newDisplay + calcDisplay.innerHTML[i]
	}
	calcDisplay.innerHTML = newDisplay
	expression = calcDisplay.innerHTML
}

function clearAll() {
	calcDisplay.innerHTML = ""
	expression = calcDisplay.innerHTML
}

function solve(){
	part2 = ""
	part3 = ""
	if (functionToPerform === "multiplication" && functionToPerform2 === "") {
		for (let i = expression.indexOf("*") + 2; i < expression.length; i++) {
			part2 = part2 + "" + expression[i]
		}
		let solution = part1 * part2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "multiplication" && functionToPerform2 === "division") {
		for (let i = expression.indexOf("*") + 2; i < expression.indexOf("/"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("/") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 * part2) / part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "multiplication" && functionToPerform2 === "multiplication") {
		for (let i = expression.indexOf("*") + 2; i < expression.lastIndexOf("*"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("*") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 * part2) * part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "multiplication" && functionToPerform2 === "addition") {
		for (let i = expression.indexOf("*") + 2; i < expression.indexOf("+"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("+") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = ((part1 * part2) - part3) + part3 * 2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "multiplication" && functionToPerform2 === "subtraction") {
		for (let i = expression.indexOf("*") + 2; i < expression.indexOf("-"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("-") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 * part2) - part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "division" && functionToPerform2 === "") {
		for (let i = expression.indexOf("/") + 2; i < expression.length; i++) {
			part2 = part2 + "" + expression[i]
		}
		let solution = part1 / part2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "division" && functionToPerform2 === "multiplication") {
		for (let i = expression.indexOf("/") + 2; i < expression.indexOf("*"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("*") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 / part2) * part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "division" && functionToPerform2 === "division") {
		for (let i = expression.indexOf("/") + 2; i < expression.lastIndexOf("/"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("/") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 / part2) / part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "division" && functionToPerform2 === "addition") {
		for (let i = expression.indexOf("/") + 2; i < expression.lastIndexOf("+"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("+") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = ((part1 / part2) - part3) + part3 * 2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "division" && functionToPerform2 === "subtraction") {
		for (let i = expression.indexOf("/") + 2; i < expression.lastIndexOf("-"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("-") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 / part2) - part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "addition" && functionToPerform2 === "") {
		for (let i = expression.indexOf("+") + 2; i < expression.length; i++) {
			part2 = part2 + "" + expression[i]
		}
		let solution = (part1 - part2) + part2 * 2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "addition" && functionToPerform2 === "multiplication") {
		for (let i = expression.indexOf("+") + 2; i < expression.indexOf("*"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("*") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = ((part1 - part2) + part2 * 2) * part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "addition" && functionToPerform2 === "division") {
		for (let i = expression.indexOf("+") + 2; i < expression.lastIndexOf("/"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("/") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = ((part1 - part2) + part2 * 2) / part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "addition" && functionToPerform2 === "addition") {
		for (let i = expression.indexOf("+") + 2; i < expression.lastIndexOf("+"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("+") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (((part1 - part2) + part2 * 2) - part3) + part3 * 2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "addition" && functionToPerform2 === "subtraction") {
		for (let i = expression.indexOf("+") + 2; i < expression.lastIndexOf("-"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("-") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = ((part1 - part2) + part2 * 2) - part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "subtraction" && functionToPerform2 === "") {
		for (let i = expression.indexOf("-") + 2; i < expression.length; i++) {
			part2 = part2 + "" + expression[i]
		}
		let solution = part1 - part2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "subtraction" && functionToPerform2 === "multiplication") {
		for (let i = expression.indexOf("-") + 2; i < expression.indexOf("*"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("*") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 - part2) * part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "subtraction" && functionToPerform2 === "division") {
		for (let i = expression.indexOf("-") + 2; i < expression.lastIndexOf("/"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("/") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 - part2) / part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "subtraction" && functionToPerform2 === "addition") {
		for (let i = expression.indexOf("-") + 2; i < expression.lastIndexOf("+"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("+") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = ((part1 - part2) - part3) + part3 * 2
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	if (functionToPerform === "subtraction" && functionToPerform2 === "subtraction") {
		for (let i = expression.indexOf("-") + 2; i < expression.lastIndexOf("-"); i++) {
			part2 = part2 + "" + expression[i]
		}
		for (let i = expression.lastIndexOf("-") + 2; i < expression.length; i++) {
			part3 = part3 + "" + expression[i]
		}
		let solution = (part1 - part2) - part3
		calcDisplay.innerHTML = solution
		part2 = ""
		part3 = ""
	}
	
	part1 = calcDisplay.innerHTML
	part2 = ""
	part3 = ""
	functionToPerform = ""
	functionToPerform2 = ""
}