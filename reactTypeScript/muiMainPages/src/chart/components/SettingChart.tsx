import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
type tSeries= {
	'Minimal base frequency': boolean,
	'Maximal base frequency': boolean,
}
type CheckboxProps = {
	series: tSeries;
	setSeries: React.Dispatch<
		React.SetStateAction<tSeries>
	>;
	isBar: boolean;
	setIsBar: React.Dispatch<
		React.SetStateAction<boolean>
	>;
};
function SettingChart({series, setSeries, isBar, setIsBar}: CheckboxProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSeries({
			...series,
			[event.target.name]: event.target.checked,
		});
	};
	return (
		<Stack
			direction="row"
			justifyContent="center"
			divider={<Divider orientation="vertical" flexItem />}
			spacing={2}
			sx={{ m: "20px 0" }}
		>
			<FormControl>
				<FormLabel id="label-radio-group">
					Type of diagram:
				</FormLabel>
				<RadioGroup
					name="group-radio"
					value={(isBar) ? "bar": "dot"}
				>
					<FormControlLabel value="bar"
						control={
							<Radio checked={isBar} onChange={() => setIsBar(!isBar)}/>
						}
						label="Histogram"
					/>
					<FormControlLabel value="dot"
						control={
							<Radio checked={!isBar} onChange={() => setIsBar(!isBar)}/>
					}
					label="Linear" />
				</RadioGroup>
			</FormControl>
			<FormControl>
				<FormLabel id="label-checkbox-group">
					Show on diagram:
				</FormLabel>
				<FormControlLabel
					control={
						<Checkbox checked={series["Minimal base frequency"]}
						onChange={handleChange} name="Minimal base frequency" />
					}
					label="minimal base frequency" />
				<FormControlLabel
					control={
						<Checkbox checked={series["Maximal base frequency"]}
							onChange={handleChange} name="Maximal base frequency" />
					}
					label="maximal base frequency" />
			</FormControl>
		</Stack>
	)
}
export default SettingChart;