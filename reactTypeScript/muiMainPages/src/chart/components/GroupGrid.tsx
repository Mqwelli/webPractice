import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {architectures, tGroup} from '../groupdata';
import Container from '@mui/material/Container';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
type GroupProps = {
	data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
	const rows: GridRowsProp = data.map((item) => ({
		id: item.id,
		group: item.Group,
		minFreq: item["Minimal base frequency"],
		maxFreq: item["Maximal base frequency"],
		}));
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID'},
		{ field: 'group', headerName: 'Group', flex: 1},
		{ field: 'minFreq', headerName: 'Base frequency', flex: 0.5},
		{ field: 'maxFreq', headerName: 'Maximal frequency', flex: 0.5},
	];
	return (
		<div style={{width: '100%'}}>
		<Container maxWidth="lg" sx={{ height: '100vh', mt: '20px' }}>
				<DataGrid
			showToolbar={true}
			rows={rows}
			columns={columns}
			/>
		</Container>
		</div>
	);
}
export default GroupGrid;