import logo from './images/logo.svg';
import './CSS/App.css';
import processors from './data.js';
import Table from './components/Table.js';
function App() {
  return (
    <div className="App">
	  <h3>AMD Processors</h3>
      <Table data={processors} amountRows="15" pagina="true"/>
	  </div>
  );
}

export default App;
