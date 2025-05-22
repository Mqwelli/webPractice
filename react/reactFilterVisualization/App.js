import logo from './images/logo.svg';
import './CSS/App.css';
import buildings from './data.js';
import Table from './components/Table.js';
import Chart from './components/Chart.js';
import { useState } from "react";
function App() {
	const [data,setData] = useState(buildings);
	const dataChange = (a) => {setData(a)};
  return (
    <div className="App">
	  <h3>Самые высокие здания и сооружения</h3>
	  <Chart data={data}/>
      <Table data={buildings} amountRows="12" pagina="true" dataChange={dataChange}/>
	  </div>
  );
}

export default App;
