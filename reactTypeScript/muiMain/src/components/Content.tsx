import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../data";
import BuildCard from "./BuildCard";

const cardData = [structures[7], structures[6], structures[4], structures[5]]
function Content() {
	return (
		<Container maxWidth="xl">
			<Grid container spacing={{ xs: 12, md: 3 }}>
				{cardData.map((item, index) => (
					<Grid key={index} size={{ xs: 12, md: 3 }} >
						<BuildCard building={ item } index={ index }/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
export default Content;
