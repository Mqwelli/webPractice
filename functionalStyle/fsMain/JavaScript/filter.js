let correspond = {
    "Name": "name",
    "Architecture": "architecture",
    "Year": ["yearFrom", "yearTo"],
	"Cores": ["coreFrom", "coreTo"],
    "Threads": ["threadsFrom", "threadsTo"],
    "Base frequency": ["baseFrom", "baseTo"],
    "Boost frequency": ["boostFrom", "boostTo"]
};
let dataFilter = (dataForm) => {
    
    let dictFilter = {};
    for(let j = 0; j < dataForm.elements.length; j++) {
        let item = dataForm.elements[j];
        let valInput = item.value;
        if (item.type == "text") {
            valInput = valInput.toLowerCase();
        } 
		else if (item.type == "number") {
			if (valInput != "") {
				valInput = Number(valInput);
			}
			else {
				if (item.id.indexOf("From") != -1) {
					valInput = Number.NEGATIVE_INFINITY;
				}
				else if (item.id.indexOf("To") != -1) {
					valInput = Number.POSITIVE_INFINITY;
				}
			}
		}
        dictFilter[item.id] = valInput;
    }       
    return dictFilter;
}
let filterTable = (data, idTable, dataForm) => {
    let datafilter = dataFilter(dataForm);
    let tableFilter = data.filter(item => {
        let result = true;
        for(let key in item) {
            let val = item[key];
            if (typeof val == 'string') {
                val = item[key].toLowerCase() 
				console.log(key);
                result &&= val.indexOf(datafilter[correspond[key]]) !== -1 
            }
			else if (typeof val == 'number') {
				let range = correspond[key];
				if (range) {
					let filterFrom = datafilter[correspond[key][0]];
					let filterTo = datafilter[correspond[key][1]];
					result = result && (val >= filterFrom) && (val <= filterTo);
				}
			}
         }
         return result;
    });     
	clearTable(idTable);
    createTable(tableFilter, idTable);  
}