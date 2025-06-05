import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import building from '../data';
import Container from '@mui/material/Container';

function Building() {
	const { id } = useParams();
	return (
		<div style={{display: 'flex', flexDirection: 'column',minHeight: '100vh'}}>
			<Navbar active="0"/>
			<Container sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', height: '100%'}}>
				<Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center'}}>
				<Link to="/" style={{textDecoration: 'none'}}>
				<Typography color="primary" fontWeight='bold' gutterBottom variant="subtitle1" sx={{margin: '20px 0px 20px 0px'}}>
					ГЛАВНАЯ {'>'}
				</Typography>
				</Link>
				<Typography sx={{margin: '20px 20px 20px 0px'}}>
					&nbsp;{building[parseInt(id == undefined ? '0' : id)].title }
				</Typography>
				</Box>
				<Typography color='grey' gutterBottom variant="h5" sx={{margin: '20px auto'}}>
					{ building[parseInt(id == undefined ? '0' : id)].title }
				</Typography>
				<CardMedia
					component="img"
					alt={ building[parseInt(id == undefined ? '0' : id)].title }
					image={ building[parseInt(id == undefined ? '0' : id)].img }
					sx={{width: '25%', margin: 'auto'}}
				/>
				<CardContent sx={{ display: 'flex', flexDirection: 'row', height: '100%', textAlign: 'justify'}}>
					{ building[parseInt(id == undefined ? '0' : id)].description.map((item, ind) => (
						<Typography sx={{width: '50%', margin: '20px'}} key={parseInt(id == undefined ? '0' : id)} variant="body2">
							{ item }
						</Typography>
					))}
				</CardContent>
			</Container>
			<Footer />
		</div>
	);
}
export default Building;