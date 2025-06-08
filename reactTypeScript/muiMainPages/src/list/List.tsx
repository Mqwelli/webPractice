import Navbar from "../components/Navbar";
import SolutionsGrid from "./components/SolutionsGrid";
import Footer from "../components/Footer";

function List() {
	return (
		<div style={{display: 'flex', flexDirection: 'column',minHeight: '100vh'}}>
			<Navbar active="2"/>
			<SolutionsGrid/>
			<Footer />
		</div>
	);
}
export default List;