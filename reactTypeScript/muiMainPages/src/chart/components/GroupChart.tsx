import { architectures, years, cores } from "../groupdata";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import {tGroup} from '../groupdata';
import { BarChart} from '@mui/x-charts/BarChart';
import { axisClasses} from '@mui/x-charts';
import Container from '@mui/material/Container';
import SettingChart from './SettingChart';
import { LineChart} from '@mui/x-charts/LineChart';
type tSelect = "Architecture" | "Year" | "Cores";
type GroupProps = {
	data: tGroup;
};
function GroupChart({data} : GroupProps) {
	const [series, setSeries] = React.useState({
		'Minimal base frequency': true,
		'Maximal base frequency': false,
	});
	let seriesY = Object.entries(series)
		.filter(item => item[1] == true)
		.map(item => {
			return {"dataKey": item[0], "label": item[0]}
		});
	const chartSetting = {
		yAxis: [
			{
				label: 'Frequency(gHz)',
			}],
			height: 500,
			sx: {
			[`.${axisClasses.left} .${axisClasses.label}`]: {
			transform: 'translate(-10px, 0)',
			},
			},
	};
	const [isBar, setIsBar] = React.useState(true);
	const barLabel = Object.values(series).filter(Boolean).length === 1 ? 'value' : undefined;
	if (isBar){
		return (
			<Container maxWidth="lg">
				<BarChart
					dataset={ data }
					xAxis={[{ scaleType: 'band', dataKey: 'Group' }]}
					series={seriesY}
					barLabel={barLabel}
					slotProps={{
						legend: {
							position: { vertical: 'bottom', horizontal: 'center' },
						},
					}}
				{...chartSetting}
				/>
				<SettingChart series={ series } setSeries={ setSeries } isBar={isBar} setIsBar={setIsBar}/>
			</Container>
		)
	}
	else {
		return (
			<Container maxWidth="lg">
			<LineChart
				dataset={ data }
				xAxis={[{ scaleType: 'band', dataKey: 'Group' }]}
				series={ seriesY}
				slotProps={{
					legend: {
						position: { vertical: 'bottom', horizontal: 'center' },
					},
				}}
				{...chartSetting}
			/>
			<SettingChart series={ series } setSeries={ setSeries } isBar={isBar} setIsBar={setIsBar}/>
		</Container>
		)
	}
}
export default GroupChart;