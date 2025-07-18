let visibility = () => {
	let list = document.getElementById("list");
	let btn = document.getElementById("showTable");
	if (list.getAttribute('hidden')) {
		list.removeAttribute('hidden');
		btn.value = "Скрыть таблицу";
	}
	else {
		list.setAttribute('hidden',true);
		btn.value = "Показать таблицу";
	}
}
document.addEventListener("DOMContentLoaded", function() {
    createTable(processors, 'list');
	drawGraph(processors);
});
document.addEventListener("DOMContentLoaded", function() {
	let data = {
		"Name": 0,
        "Architecture": 1,
        "Year": 2,
		"Cores": 3,
        "Threads": 4,
        "Base frequency": 5,
        "Boost frequency": 6
	};
	let dataForm = document.getElementById('sort');
	setSortSelects(data,dataForm);
});
let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}
let setSortSelect = (arr, sortSelect) => {
    sortSelect.append(createOption('None', 0));
    for (let i in arr) {
        sortSelect.append(createOption(arr[i], Number(i) + 1));
    }
}
let setSortSelects = (data, dataForm) => { 
    let head = Object.keys(data);
    let allSelect = dataForm.getElementsByTagName('select');
    for(let j = 0; j < allSelect.length; j++) {
        setSortSelect(head, allSelect[j]);
		if (j !== 0) {
			allSelect[j].setAttribute('disabled', true);
		}
    }
}
let changeNextSelect = (nextSelectId, curSelect) => {
    let nextSelect = document.getElementById(nextSelectId);
    nextSelect.disabled = false;
    nextSelect.innerHTML = curSelect.innerHTML;
    if (curSelect.value != 0 && isFinite(curSelect.value)) {
       nextSelect.remove(curSelect.value);
    } else {
        nextSelect.disabled = true;
		changeThirdSelect('fieldsThird',document.getElementById('fieldsSecond'),'fieldsFirst');
    }
}
let changeThirdSelect = (nextSelectId, curSelect, firstValue) => {
    let nextSelect = document.getElementById(nextSelectId);
	let firstSelect = document.getElementById(firstValue);
    nextSelect.disabled = false;
    nextSelect.innerHTML = curSelect.innerHTML;
    if (curSelect.value != 0 && isFinite(curSelect.value)) {
		if (firstSelect.value - curSelect.value !=  1) {
			nextSelect.remove(curSelect.value - 1);
		}
		else {
			nextSelect.remove(curSelect.value);
		}
    } 
	else  {
        nextSelect.disabled = true;
    }
}