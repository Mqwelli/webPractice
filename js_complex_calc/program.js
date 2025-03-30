function complexNum(data) {
	let a;
	let b;
	let c;
	let d;
	let result = [[],[],[],[]];
	let tang = data.task2.checked;
	a = parseFloat(data.input1.value);
	b = parseFloat(data.input2.value);
	c = parseFloat(data.input3.value);
	d = parseFloat(data.input4.value);
	if (!isFinite(a)) {
		data.input1.style.borderColor = "red";
		data.input1.style.backgroundColor = "red";
		data.input1.style.color = "white";
	}
	if (!isFinite(b)) {
		data.input2.style.borderColor = "red";
		data.input2.style.backgroundColor = "red";
		data.input2.style.color = "white";
	}
	if (!isFinite(c)) {
		data.input3.style.borderColor = "red";
		data.input3.style.backgroundColor = "red";
		data.input3.style.color = "white";
	}
	if (!isFinite(d)) {
		data.input4.style.borderColor = "red";
		data.input4.style.backgroundColor = "red";
		data.input4.style.color = "white";
	}
	if(!isFinite(a) || !isFinite(b) || !isFinite(c) || !isFinite(d)) {
		return;
	}
	if (!data.op1.checked && !data.op2.checked && !data.op3.checked && !data.op4.checked) {
		data.getElementsByClassName("opsname")[0].style.backgroundColor = "red";
		return;
	}
	let output = document.getElementById("output");
	output.innerHTML = "<p>Result: ";
	if (data.op1.checked) {
		result[0].push(a + c);
		result[0].push(b + d);
		let r1 = Math.round(Math.sqrt(result[0][0] * result[0][0] + result[0][1] * result[0][1])*10000)/10000;
		let phi1 = 0;
		if (result[0][0] > 0) {
			phi1 = Math.round(Math.atan2(result[0][1],result[0][0])*10000)/10000;
		}
		else if (result[0][0] < 0) {
			phi1 = Math.round((Math.atan2(result[0][1],result[0][0]))*10000)/10000;
		}
		else if (result[0][0] === 0 && result[0][1] > 0) {
			phi1 = Math.round(Math.PI / 2 * 10000) / 10000;
		}
		else if (result[0][0] === 0 && result[0][1] < 0) {
			phi1 = Math.round(Math.PI / 2 * 10000) / 10000 * (-1);
		}
		if (tang) {
			output.innerHTML += `<br>addition = ${r1} * (cos(${phi1}) + i * sin(${phi1}))`;
		}
		else {
			output.innerHTML += `<br>addition = ${r1} * e<sup>i*(${phi1})</sup>`;
		}
	}
	if (data.op2.checked) {
		result[1].push(a - c);
		result[1].push(b - d);
		console.log(result[1][0]);
		console.log(result[1][1]);
		let r2 = Math.round(Math.sqrt(result[1][0] * result[1][0] + result[1][1] * result[1][1])*10000)/10000;
		let phi2 = 0;
		if (result[1][0] > 0) {
			phi2 = Math.round(Math.atan2(result[1][1],result[1][0])*10000)/10000;
		}
		else if (result[1][0] < 0) {
			phi2 = Math.round((Math.atan2(result[1][1],result[1][0]))*10000)/10000;
		}
		else if (result[1][0] === 0 && result[1][1] > 0) {
			phi2 = Math.round(Math.PI / 2 * 10000) / 10000;
		}
		else if (result[1][0] === 0 && result[1][1] < 0) {
			phi2 = Math.round(Math.PI / 2 * 10000) / 10000 * (-1);
		}
		if (tang) {
			output.innerHTML += `<br>substraction = ${r2} * (cos(${phi2}) + i * sin(${phi2}))`;
		}
		else {
			output.innerHTML += `<br>substraction = ${r2} * e<sup>i*(${phi2})</sup>`;
		}
	}
	if (data.op3.checked) {
		result[2].push(a * c - b * d);
		result[2].push(b * c + a * d);
		let r3 = Math.round(Math.sqrt(result[2][0] * result[2][0] + result[2][1] * result[2][1])*10000)/10000;
		let phi3 = 0;
		if (result[2][0] > 0) {
			phi3 = Math.round(Math.atan2(result[2][1],result[2][0])*10000)/10000;
		}
		else if (result[2][0] < 0) {
			phi3 = Math.round((Math.atan2(result[2][1],result[2][0]))*10000)/10000;
		}
		else if (result[2][0] === 0 && result[2][1] > 0) {
			phi3 = Math.round(Math.PI / 2 * 10000) / 10000;
		}
		else if (result[2][0] === 0 && result[2][1] < 0) {
			phi3 = Math.round(Math.PI / 2 * 10000) / 10000 * (-1);
		}
		if (tang) {
			output.innerHTML += `<br>multiplication = ${r3} * (cos(${phi3}) + i * sin(${phi3}))`;
		}
		else {
			output.innerHTML += `<br>multiplication = ${r3} * e<sup>i*(${phi3})</sup>`;
		}
	}
	if (data.op4.checked) {
		result[3].push((a * c + b * d) / (c * c + d * d));
		result[3].push((b * c - a * d) / (c * c + d * d));
		let r4 = Math.round(Math.sqrt(result[3][0] * result[3][0] + result[3][1] * result[3][1])*10000)/10000;
		let phi4 = 0;
		if (result[3][0] > 0) {
			phi4 = Math.round(Math.atan2(result[3][1],result[3][0])*10000)/10000;
		}
		else if (result[3][0] < 0) {
			phi4 = Math.round((Math.atan2(result[3][1],result[3][0]))*10000)/10000;
		}
		else if (result[3][0] === 0 && result[3][1] > 0) {
			phi4 = Math.round(Math.PI / 2 * 10000) / 10000;
		}
		else if (result[3][0] === 0 && result[3][1] < 0) {
			phi4 = Math.round(Math.PI / 2 * 10000) / 10000 * (-1);
		}
		if (tang) {
			output.innerHTML += `<br>division = ${r4} * (cos(${phi4}) + i * sin(${phi4}))`;
		}
		else {
			output.innerHTML += `<br>division = ${r4} * e<sup>i*(${phi4})</sup>`;
		}
	}
}
function clearNum(data) {
	data.input1.value = null;
	data.input2.value = null;
	data.input3.value = null;
	data.input4.value = null;
	data.op1.checked = false;
	data.op2.checked = false;
	data.op3.checked = false;
	data.op4.checked = false;
	output.innerHTML = "";
	}
function complexForm(data) {
	if (data.task1.checked) {
		data.cfImg.src = "exp.png";
	}
	else if (data.task2.checked) {
		data.cfImg.src = "trig.png";
	}
}
function reinput(data) {
	data.style.borderColor = "black";
	data.style.backgroundColor = "white";
	data.style.color = "black";
}
function resetOps(data) {
	data.getElementsByClassName("opsname")[0].style.backgroundColor = "white";
}