import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexShrink: 0,
	borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
	border: '1px solid',
	borderColor: theme.palette.divider,
	padding: '8px 12px',
}));
interface Props {
	active: string;
}
function Navbar({active} : Props) {
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	const selectColorStyle = (cur: string) => {
		if (cur == active) return ['darkred','white'];
		else return ['transparent','black'];
	}
	function barMenuItem(num: string, val: string) {
		return (
			<MenuItem sx= {{
			background: selectColorStyle(num)[0], 
			color: selectColorStyle(num)[1], 
			'&:hover': {background: 'indianred',color:'white'}}}>{val}</MenuItem> 
		)
	};
	function barButton(num: string, val: string) {
		return (
			<Button 
			variant={active == num ? 'contained' : 'text' } 
			color="error" 
			size="medium">
			{val}
			</Button>
		)
	};
	return (
		<AppBar
			position="static"
			sx={{
				boxShadow: 0,
				bgcolor: 'transparent',
				mt: '28px',
			}}
		>
			<Container maxWidth="xl">
				<StyledToolbar>
					<Box component="img" sx={{
						height: '100%',
						width: 133}}
						alt="AMD"
						src="/logo.png"
						/>
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{barButton('1','Products')}
						{barButton('2','Solutions')}
						{barButton('3','Support')}
						{barButton('4','Shop')}
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' }}}>
						<IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="top"
							open={ open }
							onClose={toggleDrawer(false)}
						>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<IconButton onClick={toggleDrawer(false)}>
										<CloseRoundedIcon />
									</IconButton>
								</Box>
								{barMenuItem('1','Products')}
								{barMenuItem('2','Solutions')}
								{barMenuItem('3','Support')}
								{barMenuItem('4','Shop')}
							</Box>
						</Drawer>
					</Box>
				</StyledToolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;