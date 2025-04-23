let hideObj = [];
document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
	   .attr("height", height) ;
	hideObj = [
		document.getElementById('cx_finish'),
		document.getElementById('cy_finish'),
		document.getElementById('lsx'),
		document.getElementById('lsy'),
		document.getElementById('lturn'),
		document.getElementById('animSelector'),
		document.getElementById('animateB'),
		document.getElementById('turnPath'),
		document.getElementById('drawB')
	];
    //let pict = drawSmile(svg);
    //pict.attr("transform", "translate(200, 200)");
	//let pict1 = drawSmile(svg); 
	//pict1.attr("transform", `translate(400, 400) scale(1.5, 1.5) rotate(180)`);
})
let draw = (dataForm) => {
	const svg = d3.select("svg")
    let pict = drawSmile(svg)
    pict.attr("transform", `translate(${dataForm.cx.value}, 
	${dataForm.cy.value}) scale(${dataForm.sx.value}, 
	${dataForm.sy.value}) rotate(${dataForm.turn.value})`);
}
let clearForm = (dataForm) => {
	const svg = d3.select("svg");
	svg.selectAll('*').remove();
}
let changeAnimSelect = (dataForm) => {
	if (dataForm.turnAnim.checked) {
		for (let i = 0; i < 5; i++) {
			hideObj[i].className = "";
			hideObj[i].labels[0].className = "";
		}
		for (let j = 5; j < 8; j++) {
			hideObj[j].className = "";
		}
		hideObj[7].labels[0].className = "";
		hideObj[8].className = "hiddenOpt";
	}
	else {
		for (let i = 0; i < 5; i++) {
			hideObj[i].className = "hiddenOpt";
			hideObj[i].labels[0].className = "hiddenOpt";
		}
		for (let j = 5; j < 8; j++) {
			hideObj[j].className = "hiddenOpt";
		}
		hideObj[7].labels[0].className = "hiddenOpt";
		hideObj[8].className = "";
	}
}
let runAnimation = (dataForm) => {
	let selectType;
	dataForm.animSelector.value == "linear" ?	selectType = d3.easeLinear :
	dataForm.animSelector.value == "elastic" ?	selectType = d3.easeElastic :
	dataForm.animSelector.value == "bounce" ?	selectType = d3.easeBounce : null;
	const svg = d3.select("svg")
    let pict = drawSmile(svg);
	if (dataForm.turnPath.checked) {
		let path;
		dataForm.pathSelector.value == "letter" ? path = drawPath(0) : path = drawPath(1);
		pict.transition()
        .ease(selectType) // установить в зависимости от настроек формы
        .duration(6000)
        .attrTween('transform', translateAlong(path.node()));
	}
	else {
		pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value}) 
								scale(${dataForm.sx.value},${dataForm.sy.value}) 
								rotate(${dataForm.turn.value})`)
		.transition()
		.duration(6000)
		.ease(selectType)
		.attr("transform", `translate(${dataForm.cx_finish.value}, ${dataForm.cy_finish.value}) 
							scale(${dataForm.lsx.value},${dataForm.lsy.value}) 
							rotate(${dataForm.lturn.value})`);
	}
}
let changePathSelect = (dataForm) => {
	if (dataForm.turnPath.checked) {
		dataForm.children[0].className = "";
		for (let i = 1; i < 4; i++) {
			dataForm.children[i].className = "hiddenOpt";
		}
	}
	else {
		dataForm.children[0].className = "hiddenOpt";
		for (let i = 1; i < 4; i++) {
			dataForm.children[i].className = "";
		}
	}
}