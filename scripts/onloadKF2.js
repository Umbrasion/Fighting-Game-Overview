document.addEventListener("keydown", function(e) {
	if (e.key === "F1") {
		if (document.getElementsByClassName("selectbox-character")[0].style.visibility === "hidden") {
			Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(element => {
				element.style.visibility = "visible";
			});
		} else {
			Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(element => {
				element.style.visibility = "hidden";
			});
		}
	}
});