document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
	   .attr("height", height) ;
})
let clearForm = (dataForm) => {
	const svg = d3.select("svg");
	svg.selectAll('*').remove();
}
let runAnimation = (dataForm) => {
	let selectType;
	let path = drawPath();
	dataForm.animSelector.value == "linear" ?	selectType = d3.easeLinear :
	dataForm.animSelector.value == "elastic" ?	selectType = d3.easeElastic :
	dataForm.animSelector.value == "bounce" ?	selectType = d3.easeBounce : null;
	const svg = d3.select("svg")
	//console.log(svg.style("height").replace("px","")/2);
    let pict = drawCircle(svg);
	pict.attr("transform", `translate(${svg.style("width").replace("px","")/2}, ${svg.style("height").replace("px","")/2}) scale(${dataForm.sx.value}, ${dataForm.sy.value}) rotate(${dataForm.turn.value})`)	
	.transition()
	.duration(6000 / dataForm.speed.value)
	.ease(selectType)
	.attrTween('transform',translateAlong(dataForm,path.node()));
}