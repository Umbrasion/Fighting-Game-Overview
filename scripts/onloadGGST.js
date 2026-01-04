$(window).resize(setSize);

function setSize() {
	console.log("Window resized");
	flexResize([9, 20]);
}

document.getElementById("sampleImage").onload = setSize();