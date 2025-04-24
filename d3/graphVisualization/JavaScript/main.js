document.addEventListener("DOMContentLoaded", function() {
	showTable('list', buildings);
	drawGraph(buildings);
})
let visibility = () => {
	let list = document.getElementById("list");
	let btn = document.getElementById("showTable");
	if (list.getAttribute('hidden')) {
		list.removeAttribute('hidden');
		btn.value = "Скрыть таблицу";
	}
	else {
		list.setAttribute('hidden',true);
		btn.value = "Показать таблицу";
	}
}