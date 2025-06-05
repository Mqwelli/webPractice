import buildings from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {

	const rows: GridRowsProp = buildings;

	const columns: GridColDef[] = [
		{ field: 'Название', headerName: 'Название', flex: 1},
		{ field: 'Тип', flex: 0.5},
		{ field: 'Страна', flex: 0.5},
		{ field: 'Город', flex: 0.5},
		{ field: 'Год' },
		{ field: 'Высота'},
	];
	
	return (
		<Container maxWidth="lg" sx={{ flexGrow: 1, height: '700px', mt: '20px'}}>
			<DataGrid
			localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
			showToolbar={true}
			rows={rows}
			columns={columns}
			/>
		</Container>
	);
}
export default BuildingsGrid;