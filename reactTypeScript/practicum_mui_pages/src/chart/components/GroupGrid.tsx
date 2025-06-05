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
import {countries, tGroup} from '../groupdata';
import Container from '@mui/material/Container';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
type GroupProps = {
	data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
	const rows: GridRowsProp = data.map((item) => ({
		id: item.id,
		group: item.Группа,
		minHeight: item["Минимальная высота"],
		maxHeight: item["Максимальная высота"],
		avgHeight: item["Средняя высота"]
		}));
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID'},
		{ field: 'group', headerName: 'Группа', flex: 1},
		{ field: 'minHeight', headerName: 'Минимальная высота', flex: 0.5},
		{ field: 'maxHeight', headerName: 'Максимальная высота', flex: 0.5},
		{ field: 'avgHeight', headerName: 'Средняя высота' }
	];
	return (
		<div style={{width: '100%'}}>
		<Container maxWidth="lg" sx={{ height: '100vh', mt: '20px' }}>
				<DataGrid
			localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
			showToolbar={true}
			rows={rows}
			columns={columns}
			/>
		</Container>
		</div>
	);
}
export default GroupGrid;