import { architectures, years, cores } from "./groupdata";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GroupChart from "./components/GroupChart";
import GroupGrid from "./components/GroupGrid";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
type tSelect = "Architecture" | "Year" | "Cores";

function Chart() {
	const [group, setGroup] = React.useState<tSelect>("Architecture");
	const [groupData, setGroupData] = React.useState(architectures);
	const handleChange = (event: SelectChangeEvent) => {
		setGroup(event.target.value as tSelect);
		event.target.value == 'Architecture' ? setGroupData(architectures) 
							: event.target.value == 'Year' ? setGroupData(years)
							: event.target.value == 'Cores' ? setGroupData(cores)
							: setGroupData(architectures) ;
		console.log(groupData);
	}
	return (
		<div>
			<Navbar active="3"/>
			<GroupChart data={groupData}/>
			<Box sx={{ width:"200px", m:"auto" }}>
				<FormControl fullWidth>
					<InputLabel> Group by</InputLabel>
					<Select
						id="select-group"
						value={group}
						label="Group by:"
						onChange={ handleChange }
						>
						<MenuItem value="Architecture"> Architecture </MenuItem>
						<MenuItem value="Year">Year </MenuItem>
						<MenuItem value="Cores">Cores </MenuItem>
					</Select>
				</FormControl>
			</Box>
			<GroupGrid data={groupData}/>
			<Footer/>
		</div>
	);
}
export default Chart;