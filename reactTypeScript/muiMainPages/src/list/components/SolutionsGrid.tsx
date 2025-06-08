import solutions from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Container from '@mui/material/Container';

function SolutionsGrid() {

	const rows: GridRowsProp = solutions;

	const columns: GridColDef[] = [
		{ field: 'Name', headerName: 'Name', flex: 1},
		{ field: 'Architecture', flex: 0.5},
		{ field: 'Year', flex: 0.5},
		{ field: 'Cores', flex: 0.5},
		{ field: 'Threads' },
		{ field: 'Base frequency'},
		{ field: 'Boost frequency'},
	];
	
	return (
		<Container maxWidth="lg" sx={{ flexGrow: 1, height: '700px', mt: '20px'}}>
			<DataGrid
			getRowId={(row : any) => row.Name}
			showToolbar={true}
			rows={rows}
			columns={columns}
			/>
		</Container>
	);
}
export default SolutionsGrid;