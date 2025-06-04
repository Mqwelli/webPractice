import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface ComponentProps {
	building: {
		img: string,
		title: string,
		description: string[],
	},
	index: number;
}
const StyledTypography = styled(Typography)(({theme}) => ({
	color: ('text.secondary'),
	textAlign: 'justify',
	marginBottom: '1em'
}));
function BuildCard({building, index} : ComponentProps) {
	return (
		<Card sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
			<CardMedia
				sx={{ order: index % 2 == 0 ? 2 : 1}}
				component="img"
				alt={ building.title }
				image={ building.img }
			/>
			<Box sx={{ order: 2, display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
				<CardContent>
					<StyledTypography gutterBottom variant="h5" sx={{textAlign: 'center'}} >
						{ building.title }
					</StyledTypography>
					{ building.description.map((item, ind) => (
						<StyledTypography key={ind} variant="body2">
							{ item }
						</StyledTypography>
					))}
				</CardContent>
				<CardActions sx={{ justifyContent: 'end', marginTop:'auto'}} >
					<Button size="small" color='error'>Read more</Button>
				</CardActions>
			</Box>
		</Card>
	)
}
export default BuildCard;