/* массив точек пути будет иметь следующий вид:
  [
    {x: координата, y: координата},
    {x: координата, y: координата},
    ...
  ]
*/
//кардиоида
function createPathCardioid() {
    const svg = d3.select("svg")
	const width = svg.attr("width")
	const height = svg.attr("height")
    let data = [];
    // используем параметрическую форму описания круга
    // центр расположен в центре svg-элемента, а радиус равен трети высоты/ширины
    for (let t = Math.PI ; t <= Math.PI * 3; t += 0.1) { // t = Math.PI - полукруг, = 0 - полный круг
        data.push(
            {x: width / 2 + width / 3 * Math.cos(t) + width / 6 * Math.cos(t/0.5),
             y: height / 2 + height / 3 * Math.sin(t) + width / 6 * Math.sin(t/0.5)}
        );
    }
    return data
}
let drawPath = () => {
	// создаем массив точек
	const dataPoints = createPathCardioid();

	const line = d3.line()
		.x((d) => d.x)
		.y((d) => d.y);
    const svg = d3.select("svg")
	// создаем путь на основе массива точек	  
	const path = svg.append('path')
		.attr('d', line(dataPoints))
		.attr('stroke', 'blue') // поставить none чтобы скрыть путь
		.attr('fill', 'none'); 
		
	return path;	
}
function translateAlong(dataForm,path) {
    const length = path.getTotalLength();
    return function() {
        return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
			const a = +dataForm.sx.value + (dataForm.lsx.value - dataForm.sx.value) * t;
			const b = +dataForm.sy.value + (dataForm.lsy.value - dataForm.sy.value) * t;
			const c = +dataForm.turn.value + (dataForm.lturn.value -dataForm.turn.value) * t;
            return `translate(${x},${y}) rotate(${c}) scale(${a},${b})`;
        }
    }
}