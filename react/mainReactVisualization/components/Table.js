import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import {useState, useEffect} from "react";
import Filter from './Filter.js';
import Sort from './Sort.js';
/*
компонент, выводящий на страницу таблицу
пропсы:
data - данные для таблицы в виде массива объектов
*/
const Table = (props) => {
	const [dataTable, setDataTable] = useState(props.data);
	const [dataFilter, setDataFilter] = useState(props.data);
	const updateFilter = (value) => {
		setDataTable(value);
		setDataFilter(value);
		
	}
	useEffect(() => {
			props.dataChange(dataTable);
		});
	//количество страниц разбиения таблицы
    const n = Math.ceil(dataTable.length / props.amountRows); 
    const [activePage, setActivePage] = useState("1");
	const changeActive = (event) => {
        setActivePage(event.target.innerHTML);
    };
	
    // массив с номерами страниц
    const arr = Array.from({ length: n }, (v, i) => i + 1);
    let curPg = activePage;
     //формируем совокупность span с номерами страниц
	 if (props.pagina === 'true') {
		const pages = arr.map((item, index) =>  
			  <span className = {item == curPg ? "pgSelected" : "pg"} key={ index } onClick={ changeActive }> { item } </span>
		);
		return( 
		  <>
		  <h4>Filters</h4>
          <Filter filtering={ updateFilter } fullData={ dataTable } origData={props.data}/>
		  <Sort sorting={setDataTable} fullData={dataTable} origData={dataFilter}/>
			<table>
				<TableHead head={ Object.keys(props.data[0]) } />
				<TableBody body={ dataTable } amountRows={ props.amountRows } numPage={activePage} pagi={props.pagina}/>
			</table>

			<div className={arr.length > 1 ? "numPg" : "hide"}>
			  {pages}
			</div>
		  </>   
		 )
	 }  
	 else {
		 
		 return( 
		  <>
		  <h4>Filters</h4>
          <Filter filtering={ updateFilter } fullData={ dataTable } origData={props.data}/>
		  <Sort sorting={setDataTable} fullData={dataTable} origData={dataFilter}/>
			<table>
				<TableHead head={ Object.keys(props.data[0]) } />
				<TableBody body={ dataTable } amountRows={ props.amountRows } numPage={curPg} pagi={props.pagina}/>
			</table>
		  </>   
		 )
	 }
}

export default Table;