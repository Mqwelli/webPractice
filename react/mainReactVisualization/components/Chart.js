import {useState, useEffect} from "react";
import ChartDraw from './ChartDraw.js';
import * as d3 from "d3";
const Chart = (props) => {
	const [ox, setOx] = useState("Architecture"); // radio по x
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
            let minMax = d3.extent(entry[1].map(d => d['Base frequency']));
            arrGraph.push({labelX: entry[0], values: minMax});
        }
		if (ox === "Year") {
			arrGraph.sort((a,b) => {
				return a.labelX - b.labelX;
			});
		}
		if (ox === "Architecture") {
			arrGraph.sort((a,b) => {
				return a.labelX > b.labelX;
			});
		}
        return arrGraph;
    }
	const handleClick = () => {
		setErrors(false);
	};
   return (
    <>
      <h4>Visualization</h4>
      <form onSubmit={handleSubmit}>
        <p> OX-value </p>
		<div>
          <input type="radio"  name="ox" value="Architecture" defaultChecked={ox === "Architecture"}/>
		  Architecture
		  <br/>		
          <input type="radio" name="ox" value="Year" />
		  Year
		</div>

        <p> OY-value </p>
		<div className={errors == true ? "error" : ""}>
          <input type="checkbox" name="oy" error="false" defaultChecked={oy[0] === true} onClick={handleClick}/>
		  Maximum base frequency <br/>
          <input  type="checkbox" name="oy" error="false" onClick={handleClick}/>
		  Minimum base frequency
		</div>
		<p>Graph type:
		  <select name="chartType">
			<option value="dot">Dot</option>
			<option value="gisto">Histogram</option>
		  </select>
		</p>
        <p>  
          <button type="submit">Build</button>
        </p>
      </form>   
		<ChartDraw data={createArrGraph(props.data,ox)} oyType={oy} chartType={chartType}/>
	</>
    )
}

export default Chart;