//выводим таблицу на страницу
let createTable = (data, idTable) => {
	// находим таблицу
	let table = document.getElementById(idTable);
	
	// формируем заголовочную строку из ключей нулевого элемента массива
	let tr = document.createElement('tr');

	for(key in data[0]) {
		let th = document.createElement('th');
		th.innerHTML = key;
		tr.append(th);
	}

	table.append(tr);	
	
	// самостоятельно сформировать строки таблицы на основе массива data
	data.forEach((item) => {
           // создать новую строку таблицы tr
		   tr = document.createElement('tr');
           // перебрать ключи очередного элемента массива
		   for (key in item) {
               // создать элемент td
			   let td = document.createElement('td');
               // занести в него соответствующее значение из массива 
			   td.innerHTML = item[key];
               // добавить элемент td к строке
			   tr.append(td);
		   }
          // строку добавить в таблицу
		  table.append(tr);
	});	
}
let clearTable = (idTable) => {
	let table = document.getElementById(idTable);
	while (table.firstChild != null) {
		table.removeChild(table.firstChild);
	}
}