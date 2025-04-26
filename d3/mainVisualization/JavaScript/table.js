let createTable = (data, idTable) => {
	let table = document.getElementById(idTable);
	let tr = document.createElement('tr');
	for(key in data[0]) {
		let th = document.createElement('th');
		th.innerHTML = key;
		tr.append(th);
	}
	table.append(tr);	
	data.forEach((item) => {
		   tr = document.createElement('tr');
		   for (key in item) {
			   let td = document.createElement('td');
			   td.innerHTML = item[key];
			   tr.append(td);
		   }
		  table.append(tr);
	});	
}
let clearTable = (idTable) => {
	let table = document.getElementById(idTable);
	while (table.firstChild != null) {
		table.removeChild(table.firstChild);
	}
}