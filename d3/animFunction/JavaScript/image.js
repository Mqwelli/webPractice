// создаем изображение смайлик
// рисуем его относительно точки (0, 0)
function drawCircle(svg) {
    let resImage = svg.append("g")
		.style("stroke", "black")
        .style("stroke-width", 2)
        .style("fill", "cyan");
	resImage.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 50)
        .style("fill", " #3498db ");
	resImage.append("circle")
		.attr("cx", 0)
		.attr("cy", 0)
		.attr("r", 10)
		.style("fill", "none")
		.style("stroke", "white")
		.style("stroke-width", "10");
	resImage.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 10)
        .style("fill", "white")
		.style("stroke", "black")
		.style("stroke-width", "1");
	resImage.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 1)
        .style("fill", "black");
	resImage.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 20)
        .style("fill", "none")
		.style("stroke", "#5dade2")
		.style("stroke-width", "1");
	resImage.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 30)
        .style("fill", "none")
		.style("stroke", "#5dade2")
		.style("stroke-width", "1");
	resImage.append("circle") 
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 40)
        .style("fill", "none")
		.style("stroke", "#5dade2")
		.style("stroke-width", "1");
	let data = [
	{x: 40, y: -60},{x: 60, y: -40},{x: 10, y: -5}, {x:5, y:-10}, {x:40, y:-60}
	];
	let data1 = [
	{x: -40, y: 60},{x: -60, y: 40},{x: -10, y: 5}, {x:-5, y:10}, {x:-40, y:60}
	];
	let line = d3.line()
	.x(d => d.x)
	.y(d => d.y);
	resImage.append("path")
	.attr("d", line(data))
	.style("fill","white")
	.style("stroke","white")
	.style("stroke-width","2");
	resImage.append("path")
	.attr("d", line(data1))
	.style("fill","white")
	.style("stroke","white")
	.style("stroke-width","2");
     return resImage  
}   