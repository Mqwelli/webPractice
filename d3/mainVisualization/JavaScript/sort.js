let createSortArr = (data) => {
    let sortArr = [];
    let sortSelects = data.getElementsByTagName('select');
    for (let i = 0; i < sortSelects.length; i++) {   
        let keySort = sortSelects[i].value;
        if (keySort == 0) {
            break;
        }
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
        sortArr.push(
          {column: keySort - 1, 
           order: desc}
        ); 
    }
    return sortArr; 
};
let sortTable = (idTable, data) => {
    let sortArr = createSortArr(data);
    if (sortArr.length === 0) {
        return false;
    }
    let table = document.getElementById(idTable);
    let rowData = Array.from(table.rows);
    let headRow = rowData.shift();
    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
			let order = sortArr[i].order ? -1 : 1;
			let firstCellValue = first.cells[key].innerHTML;
			let secondCellValue = second.cells[key].innerHTML;
			if (key === 3 || key === 4) {
				firstCellValue = Number(firstCellValue);
				secondCellValue = Number(secondCellValue);
			}
            if (firstCellValue > secondCellValue) {
                return order;
            } else if (firstCellValue < secondCellValue){
                return -order;
            }
        }
        return 0;
    });
    clearTable(idTable);
	table.appendChild(headRow);
	rowData.forEach (row => table.appendChild(row));
}
let clearSortAndFilters = (idTable, data, idSort) => {
	let sort = document.getElementById(idSort);
	let filter = document.getElementById("filter");
	sort.reset();
	filter.reset();
	clearTable(idTable);
	createTable(data,idTable);
}