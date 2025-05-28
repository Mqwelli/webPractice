import logo from './images/logo.svg';
import './CSS/App.css';
import processors from './data.js';
import Table from './components/Table.js';
import Chart from './components/Chart.js';
import { useState } from "react";
function App() {
	const [data,setData] = useState(processors);
	console.log(data);
  return (
    <div className="App">
	  <h3>AMD processors</h3>
	  <Chart data={data}/>
      <Table data={processors} amountRows="12" pagina="true" dataChange={setData}/>
	  </div>
  );
}

export default App;
