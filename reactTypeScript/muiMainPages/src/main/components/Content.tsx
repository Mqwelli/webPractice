import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../../data";
import ProductCard from "./ProductCard";

const cardData = [structures[4], structures[5], structures[6], structures[7]]
function Content() {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={{ xs: 12, md: 3 }}>
				{cardData.map((item, index) => (
					<Grid key={index} size={{ xs: 12, md: 3 }} >
						<ProductCard product={ item } index={ index }/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
export default Content;
