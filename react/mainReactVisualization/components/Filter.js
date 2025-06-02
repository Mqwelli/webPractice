/*
   компонент, для фильтрации таблицы
*/
const Filter = (props) => {
	 const handleSubmit= (event) => {    
        event.preventDefault();		

		// создаем словарь со значениями полей формы
		const filterField = {
			"Name": event.target["name"].value.toLowerCase(),
		    "Architecture": event.target["arch"].value.toLowerCase(),
			"Year": [event.target["yearFrom"].value, event.target["yearTo"].value],
			"Cores": [event.target["coresFrom"].value, event.target["coresTo"].value],
			"Threads": [event.target["threadsFrom"].value, event.target["threadsTo"].value],
			"Base frequency": [event.target["baseFrom"].value, event.target["baseTo"].value],
			"Boost frequency": [event.target["boostFrom"].value, event.target["boostTo"].value]
	    };
			
        //фильтруем данные по значениям всех полей формы
        let arr = props.fullData;
        for(const key in  filterField) {
			if (key == 'Name' || key == 'Architecture') {
				arr = arr.filter(item => item[key].toLowerCase().includes(filterField[key])); 
			}
			else {
				if (!isNaN(parseFloat(filterField[key][0]))) {
					arr = arr.filter(item => parseFloat(item[key]) >= filterField[key][0]); 
				}
				if (!isNaN(parseFloat(filterField[key][1]))) {
					arr = arr.filter(item => item[key] <= filterField[key][1]); 
				}
			}
        }  
                
        //передаем родительскому компоненту новое состояние - отфильтрованный массив
        props.filtering(arr);
	}
	const handleReset= (event) => {
		props.filtering(props.origData);
		props.sortRes();
	}
	
    return (
      <form onSubmit={ handleSubmit } onReset={ handleReset }>
        <p>
          <label>Name:</label>
          <input name="name" type="text" />
        </p>  
        <p>
          <label>Architecture:</label>		
          <input name="arch" type="text" />
        </p>
		<p>
          <label>Year from:</label>		
          <input name="yearFrom" type="number" />
        </p>
		<p>
          <label>Year to:</label>		
          <input name="yearTo" type="number" />
        </p>
		<p>
          <label>Cores from:</label>		
          <input name="coresFrom" type="number" />
        </p>
		<p>
          <label>Cores to:</label>		
          <input name="coresTo" type="number" />
        </p>
		<p>
		  <label>Threads from:</label>		
          <input name="threadsFrom" type="number" />
        </p>
		<p>
          <label>Threads to:</label>		
          <input name="threadsTo" type="number" />
        </p>
		<p>
		  <label>Base from:</label>		
          <input name="baseFrom" type="text" />
        </p>
		<p>
          <label>Base to:</label>		
          <input name="baseTo" type="text" />
        </p>
		<p>
		  <label>Boost from:</label>		
          <input name="boostFrom" type="text" />
        </p>
		<p>
          <label>Boost to:</label>		
          <input name="boostTo" type="text" />
        </p>
        <p>         
          <button type="submit">Apply filters</button>   
		  <button type="reset">Clear filters</button>
		</p>  
      </form> 
    )
}

export default Filter;