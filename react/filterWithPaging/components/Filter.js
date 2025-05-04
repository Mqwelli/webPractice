/*
   компонент, для фильтрации таблицы
*/

const Filter = (props) => {
	 const handleSubmit= (event) => {    
        event.preventDefault();		

		// создаем словарь со значениями полей формы
		const filterField = {
			"Название": event.target["structure"].value.toLowerCase(),
		    "Тип": event.target["type"].value.toLowerCase(),
			"Страна": event.target["country"].value.toLowerCase(),
			"Город": event.target["city"].value.toLowerCase(),
			"Год": [event.target["yearFrom"].value, event.target["yearTo"].value],
			"Высота": [event.target["heightFrom"].value, event.target["heightTo"].value]
	    };
			
        //фильтруем данные по значениям всех полей формы
        let arr = props.fullData;
        for(const key in  filterField) {
			if (key !== 'Год' && key !== 'Высота') {
				arr = arr.filter(item => item[key].toLowerCase().includes(filterField[key])); 
			}
			else {
				if (!isNaN(parseInt(filterField[key][0]))) {
					arr = arr.filter(item => parseInt(item[key]) >= filterField[key][0]); 
				}
				if (!isNaN(parseInt(filterField[key][1]))) {
					arr = arr.filter(item => item[key] <= filterField[key][1]); 
				}
			}
        }  
                
        //передаем родительскому компоненту новое состояние - отфильтрованный массив
        props.filtering(arr);
	}
	const handleReset= (event) => {
		props.filtering(props.fullData);
	}
	
    return (
      <form onSubmit={ handleSubmit } onReset={ handleReset }>
        <p>
          <label>Название:</label>
          <input name="structure" type="text" />
        </p>  
        <p>
          <label>Type:</label>		
          <input name="type" type="text" />
        </p>
		<p>
          <label>Страна:</label>		
          <input name="country" type="text" />
        </p>
		<p>
          <label>Город:</label>		
          <input name="city" type="text" />
        </p>
		<p>
          <label>Год от:</label>		
          <input name="yearFrom" type="number" />
        </p>
		<p>
          <label>Год до:</label>		
          <input name="yearTo" type="number" />
        </p>
		<p>
          <label>Высота от:</label>		
          <input name="heightFrom" type="number" />
        </p>
		<p>
          <label>Высота до:</label>		
          <input name="heightTo" type="number" />
        </p>
        <p>         
          <button type="submit">Фильтровать</button>   
		  <button type="reset">Очистить фильтр</button>
		</p>  
      </form> 
    )
}

export default Filter;