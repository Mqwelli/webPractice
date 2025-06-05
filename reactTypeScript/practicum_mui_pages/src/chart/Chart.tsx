import { years, countries, types } from "./groupdata";
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
type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
	const [group, setGroup] = React.useState<tSelect>("Страна");
	const [groupData, setGroupData] = React.useState(countries);
	const handleChange = (event: SelectChangeEvent) => {
		setGroup(event.target.value as tSelect);
		event.target.value == 'Страна' ? setGroupData(countries) 
							: event.target.value == 'Год' ? setGroupData(years)
							: event.target.value == 'Тип' ? setGroupData(types)
							: setGroupData(countries) ;
		console.log(groupData);
	}
	return (
		<div>
			<Navbar active="3"/>
			<GroupChart data={groupData}/>
			<Box sx={{ width:"200px", m:"auto" }}>
				<FormControl fullWidth>
					<InputLabel> Группировать по </InputLabel>
					<Select
						id="select-group"
						value={group}
						label="Группировать по"
						onChange={ handleChange }
						>
						<MenuItem value="Страна"> Стране </MenuItem>
						<MenuItem value="Год"> Году </MenuItem>
						<MenuItem value="Тип"> Типу </MenuItem>
					</Select>
				</FormControl>
			</Box>
			<GroupGrid data={groupData}/>
			<Footer/>
		</div>
	);
}
export default Chart;