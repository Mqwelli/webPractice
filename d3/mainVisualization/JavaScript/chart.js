function createArrGraph(data, key) { // key - разъём/производитель/год
	let groupObj = d3.group(data, d => d[key]);
	groupObj = new Map([...groupObj.entries()].sort()); 
	let arrGraph =[];
	for(let entry of groupObj) {
		let minMax = d3.extent(entry[1].map(d => d['Base frequency']));
		arrGraph.push({labelX : entry[0], values : minMax});
	}
	return arrGraph;
}
let headers = [
    "Name",
    "Architecture",
    "Year",
	"Cores",
    "Threads",
    "Base frequency",
    "Boost frequency"
];
//<input type="checkbox" id="hval3" name="result" value="mintp">Минимальный техпроцесс<br>
//построение диаграммы
function drawGraph(data) {
	let rows = document.querySelectorAll('#list tr');
	let tableInfo = [];
	for (let i = 0; i < rows.length; i++) {
	  let cells = rows[i].querySelectorAll('td');
	  let rowData = {};
	  for (let j = 0; j < cells.length; j++) {
		rowData[headers[j]] = cells[j].innerHTML;
	  }
	  tableInfo.push(rowData);
	}
	tableInfo.shift();
	// значения по оси ОХ
	let keyX;
	if (document.getElementById("xval1").checked) {
		keyX = "Architecture";
	}
	else if (document.getElementById("xval2").checked){
		keyX = "Year";
	}
	let arrGraph1;
	let arrGraph2;
	const maxChecked = document.getElementById("hval1").checked;
	const minChecked = document.getElementById("hval2").checked;
	if (!document.getElementById("hval1").checked && !document.getElementById("hval2").checked) {
		alert("Не выбран результат графика");
	}
	else {
		// создаем массив для построения графика
		let svg = d3.select("svg")
		svg.selectAll('*').remove();
		// создаем словарь с атрибутами области вывода графика
		attr_area = {
		width: parseFloat(svg.style('width')),
		height: parseFloat(svg.style('height')),
		marginX: 50,
		marginY: 50
		}
		if (maxChecked) {
			arrGraph1 = createArrGraph(tableInfo, keyX);
			const [scX1, scY1] = createAxis(svg, arrGraph1, attr_area, true);
			createChart(svg, arrGraph1, scX1, scY1, attr_area, "red",true)
		}
		if (minChecked) {
			arrGraph2 = createArrGraph(tableInfo, keyX);
			const [scX2, scY2] = createAxis(svg, arrGraph2, attr_area, false);
			createChart(svg, arrGraph2, scX2, scY2, attr_area, "blue",false)
		}
	}
}
//оси
function createAxis(svg, data, attr_area, desc){
	// находим интервал значений, которые нужно отложить по оси OY
	// максимальное и минимальное значение и максимальных высот по каждой стране
	const [min, max] = d3.extent(data.map(d => d.values[1]));
	// функция интерполяции значений на оси
	// по оси ОХ текстовые значения
	let scaleX = d3.scaleBand()
	.domain(data.map(d => d.labelX))
	.range([0 , attr_area.width - 2 * attr_area.marginX ]);
	let scaleY = d3.scaleLinear()
	.domain([min * 0.75, max * 1.1 ])
	.range([attr_area.height - 2 * attr_area.marginY, 0]);
	// создание осей
	let axisX = d3.axisBottom(scaleX); // горизонтальная
	let axisY = d3.axisLeft(scaleY); // вертикальная
	let color;
	let rotation;
	if (desc || !document.getElementById("hval1").checked) {
		// отрисовка осей в SVG-элементе
		svg.append("g")
		.attr("transform", `translate(${attr_area.marginX},
		${attr_area.height - attr_area.marginY})`)
		.call(axisX)
		.selectAll("text") // подписи на оси - наклонные
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", ".15em")
		.style("fill", color)
		.attr("transform", d => "rotate(-45)");
	}
	svg.append("g")
	.attr("transform", `translate(${attr_area.marginX},
	${attr_area.marginY})`)
	.call(axisY);
	return [scaleX, scaleY]
}
//точечная диаграмма
function createChart(svg, data, scaleX, scaleY, attr_area, color,desc) {
	if (document.getElementById("graphSelector").value == "dot") {
		const r = 4;
		svg.selectAll(".dot")
		.data(data)
		.enter()
		.append("circle")
		.attr("r", r)
		.attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
		.attr("cy", d => scaleY(d.values[+desc])) // 0 - min, 1 - max
		.attr("transform", `translate(${attr_area.marginX},
		${attr_area.marginY})`)
		.style("fill", color)
	}
	else {
		//histogram
		const r = 4;
		const graphHeight = d3.select("g").attr("transform").split("\t\t")[1].substring(0,3);
		if (desc || !document.getElementById("hval1").checked) {
			svg.selectAll(".dot")
			.data(data)
			.enter()
			.append("rect")
			
			.attr("x", d => scaleX(d.labelX) + scaleX.bandwidth() / 2)
			.attr("y", d => scaleY(d.values[+desc])) // 0 - min, 1 - max
			.attr("width",10)
			.attr("height",d => graphHeight - 50 - scaleY(d.values[+desc]))
			.attr("transform", `translate(${attr_area.marginX},
			${attr_area.marginY})`)
			.style("fill", color)
		}
		else if (!desc) {
			svg.selectAll(".dot")
			.data(data)
			.enter()
			.append("rect")
			
			.attr("x", d => scaleX(d.labelX) + scaleX.bandwidth() / 2 - 10)
			.attr("y", d => scaleY(d.values[+desc])) // 0 - min, 1 - max
			.attr("width",10)
			.attr("height",d => graphHeight - 50 - scaleY(d.values[+desc]))
			.attr("transform", `translate(${attr_area.marginX},
			${attr_area.marginY})`)
			.style("fill", color)
		}
	}
}