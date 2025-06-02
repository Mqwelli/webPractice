import { useState, useRef } from "react";
const Sort = (props) => {
	const options = [
	{value: '1', text: 'None'},
	{value: '2', text: 'Name'},
	{value: '3', text: 'Architecture'},
	{value: '4', text: 'Year'},
	{value: '5', text: 'Cores'},
	{value: '6', text: 'Threads'},
	{value: '7', text: 'Base frequency'},
	{value: '8', text: 'Boost frequency'}
	];
	const [selected,setSelected] = useState(
		{
			first: "1",
			second: "1",
			third: "1"
		}
	);
	const [desc,setDesc] = useState({
		first: Boolean(0),
		second: Boolean(0),
		third: Boolean(0)
	});
const handleReset = () => {
		setSelected(
			{
				first: "1",
				second: "1",
				third: "1"
			}
		);
		setDesc([false,false,false]);
		props.sorting(props.origData);
		console.log(props.formRef.current);
}
	const isUsed = (curOption,curSelect) => {
		if (curOption == "None") return false;
		return (
            ((curSelect == 'second' || curSelect == 'third') && selected.first !== '1' &&
				options.find(opt => opt.value === selected.first)?.text === curOption) ||
            (curSelect == 'third' && selected.second !== '1' &&
				options.find(opt => opt.value === selected.second)?.text === curOption) 
        );
	}
	const isLocked = (curOption) => {
		return (
		(curOption === 'second' && selected.first === '1') ||
		(curOption === 'third' && (selected.first === '1' || selected.second === '1'))
		)
	};
let createSortArr = (data) => {
	const selectedArray = Object.values(selected);
	const descArray = Object.values(desc);
	return selectedArray.reduce((sortArr,selector,id) => {
		
		if (selector !== "1") {
			sortArr.push(
			{ 
				column: selector - 2, 
				order: descArray[id]
			}
			); 
		}
		return sortArr; 
	},[]);
};
let handleSelect = (event, val) => {
     const value = event.target.value;
        setSelected(prev => {
            const newValues = { ...prev, [val]: value };
            if (val === 'first') {
                newValues.second = '1';
				desc.second = false;
                newValues.third = '1';
				desc.third = false;
            } else if (val === 'second') {
                newValues.third = '1';
				desc.third = false;
            }

            return newValues;
        });
}
let handleDesc = (val) => {
	setDesc(prev => {
		return {
			...prev,
			[val]: !prev[val]
		};
	});
}
// sort 
const handleSubmit = (event) => {
	event.preventDefault();	
    let sortArr = createSortArr(props.fullData);
    if (sortArr.length === 0) {
        props.sorting(props.fullData);
		return false;
    }
	let rowData = [...props.fullData];
    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
			let order = sortArr[i].order ? -1 : 1;
			let firstCellValue = Object.values(first)[key];
			let secondCellValue = Object.values(second)[key];
			if (key !== 0 && key !== 1) {
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
    props.sorting(rowData);
}
return (
	<div>
	  <form onSubmit={handleSubmit} onReset={handleReset} ref={props.formRef}>
		<p>
		  <select name="fieldsFirst" value={selected.first} onChange={a => handleSelect(a,'first')}>
			  {options.map((opt) => (
			  <option value={opt.value} key={opt.value} disabled={isUsed(opt.text,'first')}> {opt.text} </option>
			  ))}
		  </select> 
		  descending? <input type="checkbox" onChange={() => handleDesc('first')}/>
		</p>
		<p> 
		  <select name="fieldsSecond" value={selected.second} disabled={isLocked('second')} onChange={a => handleSelect(a,'second')}>
			 {options.map((opt) => (
			  <option value={opt.value} key={opt.value} disabled={isUsed(opt.text,'second')}> {opt.text} </option>
			  ))}
		  </select> 
		  descensding? <input type="checkbox" disabled={isLocked('second')} onChange={() =>  handleDesc('second')}/>
		</p>
		<p> 
		  <select name="fieldsThird" value={selected.third} disabled={isLocked('third')} onChange={a => handleSelect(a,'third')}>
			 {options.map((opt) => (
			  <option value={opt.value} key={opt.value} disabled={isUsed(opt.text,'third')}> {opt.text} </option>
			  ))}
		  </select> 
descensding? <input type="checkbox" disabled={isLocked('third')} onChange={() => handleDesc('third')}/>
		</p>
		<p>
			<button type="submit">Sort</button> 
			<button type="reset">Reset sort </button>
			
		</p>
	  </form>  
  </div>
)
}
export default Sort;