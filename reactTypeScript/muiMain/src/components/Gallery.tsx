import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import structures from "../../data";
import {Link} from 'react-router-dom';

const imgData=structures.slice(0, 4);

function Gallery() {
	return (
	<Container maxWidth="lg">
		<Box sx={{height: 385, overflowY: 'auto', m: '20px auto'}}>
			<ImageList variant="woven" 
			sx={{
				gridTemplateColumns: {
					xs: 'repeat(1,1fr) !important',
					sm: 'repeat(2,1fr) !important',
					md: 'repeat(2,1fr) !important',
					lg: 'repeat(2,1fr) !important',
					},
					textAlign: 'center',
				}}
				gap={ 8 }>
				{imgData.map((item, index) => (
					<Link key={ index } to={ "/product/" + index }>
						<ImageListItem key={ item.img }>
							<img
								srcSet={ item.img }
								src={ item.img }
								alt={ item.title }
								loading="lazy"
							/>
							<ImageListItemBar position="bottom" title={ item.title } />
						</ImageListItem>
					</Link>
				))}
			</ImageList>
		</Box>
	</Container>
	);
}
export default Gallery;
