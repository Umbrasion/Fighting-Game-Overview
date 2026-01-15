const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	//document.getElementById("character-"),
];

const pageMusic = new Audio("audio/music/NSC - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.4;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/nsc/cursor.ogg"),
	confirm: new Audio("audio/sfx/nsc/confirm.ogg"),
}
sfx.cursor.volume = 0.3;
sfx.confirm.volume = 0.3;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

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