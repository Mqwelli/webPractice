/*формируем массив для сортировки по уровням вида 
  (в нашем случае в форме два уровня сортировки):
   [
    {column: номер столбца, по которому осуществляется сортировка, 
     order: порядок сортировки (true по убыванию, false по возрастанию)
    },
    {column: номер столбца, 
     order: порядок сортировки
    }
   ]
*/
let createSortArr = (data) => {
    let sortArr = [];
    
    let sortSelects = data.getElementsByTagName('select');
    
    for (let i = 0; i < sortSelects.length; i++) {   
       // получаем номер выбранной опции
        let keySort = sortSelects[i].value;
        // в случае, если выбрана опция Нет, заканчиваем формировать массив
        if (keySort == 0) {
            break;
        }
        // получаем номер значение флажка для порядка сортировки
        // имя флажка сформировано как имя поля SELECT и слова Desc
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
        sortArr.push(
          {column: keySort - 1, 
           order: desc}
        ); 
    }
	console.log(sortArr);
    return sortArr; 
};
let sortTable = (idTable, data) => {
    
    // формируем управляющий массив для сортировки
    let sortArr = createSortArr(data);
    
    // сортировать таблицу не нужно, во всех полях выбрана опция Нет
    if (sortArr.length === 0) {
        return false;
    }
    //находим нужную таблицу
    let table = document.getElementById(idTable);

    // преобразуем строки таблицы в массив 
    let rowData = Array.from(table.rows);
    
    // удаляем элемент с заголовками таблицы
    let headRow = rowData.shift();
    
    //сортируем данные по возрастанию по всем уровням сортировки
    // используется массив sortArr
    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
			let order = sortArr[i].order ? -1 : 1;
			
			let firstCellValue = first.cells[key].innerHTML;
			let secondCellValue = second.cells[key].innerHTML;
            if (firstCellValue > secondCellValue) {
                return order;
            } else if (firstCellValue < secondCellValue){
                return -order;
            }
        }
        return 0;
    });
    clearTable(idTable);
    // обновить таблицу на страницу
	table.appendChild(headRow);
	rowData.forEach (row => table.appendChild(row));
}
let clearSortAndFilters = (idTable, data, idSort) => {
	let sort = document.getElementById(idSort);
	sort.reset();	
	let filter = document.getElementById("filter");
	filter.reset();
	clearTable(idTable);
	createTable(data,idTable);
}