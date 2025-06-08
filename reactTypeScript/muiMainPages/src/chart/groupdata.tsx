export type tGroup = {
      "id": number, 
      "Group": string | number, 
      "Minimal base frequency": number , 
      "Maximal base frequency": number,
  }[];
export const  architectures: tGroup = [
            { 'id': 1, 'Group': 'Zen 1', 'Minimal base frequency': 3, 'Maximal base frequency': 3.6 },
            { 'id': 2, 'Group': 'Zen 1+', 'Minimal base frequency': 3.2, 'Maximal base frequency': 3.7 },
			{ 'id': 3, 'Group': 'Zen 2', 'Minimal base frequency': 3.5, 'Maximal base frequency': 3.9 },
			{ 'id': 4, 'Group': 'Zen 3', 'Minimal base frequency': 3, 'Maximal base frequency': 4 },
			{ 'id': 5, 'Group': 'Zen 4', 'Minimal base frequency': 3.4, 'Maximal base frequency': 4.7 },
			{ 'id': 6, 'Group': 'Zen 5', 'Minimal base frequency': 3.8, 'Maximal base frequency': 4.7 },
            
        ];


    export const years: tGroup = [
        { 'id': 1, 'Group': 2017, 'Minimal base frequency': 3, 'Maximal base frequency': 3.6 },
		{ 'id': 2, 'Group': 2018, 'Minimal base frequency': 3.2, 'Maximal base frequency': 3.6 },
		{ 'id': 3, 'Group': 2019, 'Minimal base frequency': 3.2, 'Maximal base frequency': 3.9 },
		{ 'id': 4, 'Group': 2020, 'Minimal base frequency': 3.4, 'Maximal base frequency': 3.8 },
		{ 'id': 5, 'Group': 2021, 'Minimal base frequency': 3, 'Maximal base frequency': 4 },
		{ 'id': 6, 'Group': 2022, 'Minimal base frequency': 3.4, 'Maximal base frequency': 4.7 },
		{ 'id': 7, 'Group': 2023, 'Minimal base frequency': 3.3, 'Maximal base frequency': 3.8 },
		{ 'id': 8, 'Group': 2024, 'Minimal base frequency': 3.4, 'Maximal base frequency': 4.7 },
		{ 'id': 9, 'Group': 2025, 'Minimal base frequency': 4, 'Maximal base frequency': 4 },

    ];    

    export const cores: tGroup = [
        { 'id': 1, 'Group': 2, 'Minimal base frequency': 3.5, 'Maximal base frequency': 3.5 },
        { 'id': 2, 'Group': 4, 'Minimal base frequency': 3.2, 'Maximal base frequency': 4 },
		{ 'id': 3, 'Group': 6, 'Minimal base frequency': 3.2, 'Maximal base frequency': 4.7 },
		{ 'id': 4, 'Group': 8, 'Minimal base frequency': 3, 'Maximal base frequency': 4.7 },
		{ 'id': 5, 'Group': 12, 'Minimal base frequency': 3, 'Maximal base frequency': 4.4 },
		{ 'id': 6, 'Group': 16, 'Minimal base frequency': 3.4, 'Maximal base frequency': 4.5 },
    ]; 