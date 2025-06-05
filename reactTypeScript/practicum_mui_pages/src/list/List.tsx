import Navbar from "../components/Navbar";
import BuildingsGrid from "./components/BuildingsGrid";
import Footer from "../components/Footer";

function List() {
	return (
		<div style={{display: 'flex', flexDirection: 'column',minHeight: '100vh'}}>
			<Navbar active="2"/>
			<BuildingsGrid/>
			<Footer />
		</div>
	);
}
export default List;