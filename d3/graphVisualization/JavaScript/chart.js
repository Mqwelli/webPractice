// Входные данные:
// data - исходный массив (например, buildings)
// key - поле, по которому осуществляется группировка
//функция считает максимальные и минимальные высоты по стране
function resetOps() {
	const maxChecked = d3.select("#hval1").node();
	maxChecked.parentNode.removeAttribute("style");
}
function createArrGraph(data, key, reversed) { // key - страна/год
	let groupObj = d3.group(data, d => d[key]);
	if (key == "Год") {
		groupObj = new Map([...groupObj.entries()].sort()); 
	}
	let arrGraph =[];
	for(let entry of groupObj) {
		let minMax = d3.extent(entry[1].map(d => d['Высота']));
		arrGraph.push({labelX : entry[0], values : minMax});
	}
	return arrGraph;
}
//построение диаграммы
function drawGraph(data) {
	// значения по оси ОХ
	let keyX;
	if (d3.select("#xval1").node().checked) {
		keyX = "Страна";
	}
	else if (d3.select("#xval2").node().checked){
		keyX = "Год";
	}
	let arrGraph1;
	let arrGraph2;
	const maxChecked = d3.select("#hval1").node();
	const minChecked = d3.select("#hval2").node();
	if (!maxChecked.checked && !minChecked.checked) {
		maxChecked.parentNode.style.borderColor = "red";
		maxChecked.parentNode.style.backgroundColor = "red";
		maxChecked.parentNode.style.color = "white";
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
		if (maxChecked.checked) {
			arrGraph1 = createArrGraph(data, keyX,false);
			const [scX1, scY1] = createAxis(svg, arrGraph1, attr_area, true);
			createChart(svg, arrGraph1, scX1, scY1, attr_area, "red",true)
		}
		if (minChecked.checked) {
			arrGraph2 = createArrGraph(data, keyX,true);
			const [scX2, scY2] = createAxis(svg, arrGraph2, attr_area, false);
			createChart(svg, arrGraph2, scX2, scY2, attr_area, "blue",false)
		}
	}
}
//оси
function createAxis(svg, data, attr_area, desc){
	// находим интервал значений, которые нужно отложить по оси OY
	// максимальное и минимальное значение и максимальных высот по каждой стране
	const maxChecked = d3.select("#hval1").node().checked;
	const minChecked = d3.select("#hval2").node().checked;
	let tempdesc = desc;
	if (maxChecked && minChecked) tempdesc = true;
	const [min, max] = d3.extent(data.map(d => d.values[+tempdesc]));
	console.log([min,max]);
	// функция интерполяции значений на оси
	// по оси ОХ текстовые значения
	let scaleX = d3.scaleBand()
	.domain(data.map(d => d.labelX))
	.range([0 , attr_area.width - 2 * attr_area.marginX ]);
	let scaleY = d3.scaleLinear()
	.domain([min * 0.85, max * 1.1 ])
	.range([attr_area.height - 2 * attr_area.marginY, 0]);
	// создание осей
	let axisX = d3.axisBottom(scaleX); // горизонтальная
	let axisY = d3.axisLeft(scaleY); // вертикальная
	let color;
	let rotation;
	if (desc || !maxChecked) {
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
		svg.append("g")
		.attr("transform", `translate(${attr_area.marginX},
		${attr_area.marginY})`)
		.call(axisY);
	}
	return [scaleX, scaleY]
}
//точечная диаграмма
function createChart(svg, data, scaleX, scaleY, attr_area, color,desc) {
	if (d3.select("#graphSelector").node().value == "dot") {
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
		if (desc || !d3.select("#hval1").node().checked) {
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