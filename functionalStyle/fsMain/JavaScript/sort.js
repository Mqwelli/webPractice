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
	console.log(sortArr);
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
let clearSort = (idTable, data, idSort) => {
	let sort = document.getElementById(idSort);
	let selectList = document.getElementsByTagName('select');
	for (let i = 0; i < selectList.length; i++) {
		selectList[i].value = 0;
	}
	let checkOne = document.getElementById('fieldsFirstDesc');
	if (checkOne.checked == true) {
		checkOne.checked = false;
	}
	let checkTwo = document.getElementById('fieldsSecondDesc');
	if (checkTwo.checked == true) {
		checkTwo.checked = false;
	}
	let checkThree = document.getElementById('fieldsThirdDesc');
	if (checkThree.checked == true) {
		checkThree.checked = false;
	}
	clearTable(idTable);
	createTable(data,idTable);
}