export function setCounter(element) {
	let counter = 0;
	
	function count(c) {
		counter = c;
		element.innerHTML = `count is ${c}`;
	}

	element.addEventListener("click", () => count(counter + 1));

	count(counter);
}
