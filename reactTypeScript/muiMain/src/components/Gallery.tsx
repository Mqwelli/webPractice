import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import structures from "../data";

const imgData=structures.slice(0, 4);

function Gallery() {
	return (
	<Container maxWidth="lg">
		<Box sx={{height: 385, overflowY: 'auto', m: '20px auto'}}>
			<ImageList variant="quilted" 
			sx={{
				columnCount: {
					xs: '1 !important',
					sm: '2 !important',
					md: '3 !important',
					lg: '3 !important',
					},
					textAlign: 'center',
				}}
				gap={ 8 }>
				{imgData.map((item) => (
					<ImageListItem key={ item.img }>
						<img
							srcSet={ item.img }
							src={ item.img }
							alt={ item.title }
							loading="lazy"
						/>
						<ImageListItemBar position="bottom" title={ item.title } />
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	</Container>
	);
}
export default Gallery;
