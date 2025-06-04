import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
	return (
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
			bgcolor: 'rgb(211, 47, 47)', marginTop: '25px', padding: '0px 7px', alignItems: 'center', height: '35px'}}>
				<Typography variant="subtitle1" color='white'>
					© 2025
				</Typography>
				<Typography variant="subtitle1" color='white'>
					Contacts
				</Typography>
			</Box>
	)
}
export default Footer;