import { setCounter } from "./counter";

import "./app.css";

import jsLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
	<button id="counter"></button>
	<p>Click the button to increase number</p>
	<div class="imgContainer">
		<img src="${viteLogo}" class="logo" />
		<img src="${jsLogo}" class="logo vanilla" />
	</div>
`;

const element = document.querySelector("#counter");

setCounter(element);