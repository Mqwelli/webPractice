import {useState, useEffect} from "react";
import ChartDraw from './ChartDraw.js';
import * as d3 from "d3";
const Chart = (props) => {
	const [ox, setOx] = useState("Страна"); // radio по x
	const [oy, setOy] = useState([true,false]); // checkbox по y, по умолчанию первый вкл
	const [errors, setErrors] = useState(false);
	const [chartType, setChartType] = useState("dot");
	const handleSubmit = (event) => {        
        event.preventDefault();
        setOx(event.target["ox"].value); 
		setOy([event.target["oy"][0].checked, event.target["oy"][1].checked]);
		setChartType(event.target["chartType"].value);
		if(event.target["oy"][0].checked == false && event.target["oy"][1].checked == false) {
				setErrors(true);
		}
		else {
			setErrors(false);
		}
		
	}
	const createArrGraph =(data, key)=>{   
        const groupObj = d3.group(data, d => d[key]);
        let arrGraph =[];
        for(let entry of groupObj) {
            let minMax = d3.extent(entry[1].map(d => d['Высота']));
            arrGraph.push({labelX: entry[0], values: minMax});
        }
		if (ox === "Год") {
			arrGraph.sort((a,b) => {
				return a.labelX - b.labelX;
			});
		}
        return arrGraph;
    }
	const handleClick = () => {
		setErrors(false);
	};
   return (
    <>
      <h4>Визуализация</h4>
      <form onSubmit={handleSubmit}>
        <p> Значение по оси OX: </p>
		<div>
          <input type="radio"  name="ox" value="Страна" defaultChecked={ox === "Страна"}/>
		  Страна
		  <br/>		
          <input type="radio" name="ox" value="Год" />
		  Год
		</div>

        <p> Значение по оси OY </p>
		<div className={errors == true ? "error" : ""}>
          <input type="checkbox" name="oy" error="false" defaultChecked={oy[0] === true} onClick={handleClick}/>
		  Максимальная высота <br/>
          <input  type="checkbox" name="oy" error="false" onClick={handleClick}/>
		  Минимальная высота
		</div>
		<p>Тип графика:
		  <select name="chartType">
			<option value="dot">Точечная</option>
			<option value="gisto">Гистограмма</option>
		  </select>
		</p>
        <p>  
          <button type="submit">Построить </button>
        </p>
      </form>   
		<ChartDraw data={createArrGraph(props.data,ox)} oyType={oy} chartType={chartType}/>
	</>
    )
}

export default Chart;