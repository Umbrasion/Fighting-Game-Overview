const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	zetterburn: document.getElementById("character-zetterburn"),
	forsburn: document.getElementById("character-forsburn"),
	clairen: document.getElementById("character-clairen"),
	mollo: document.getElementById("character-mollo"),
	wrastor: document.getElementById("character-wrastor"),
	absa: document.getElementById("character-absa"),
	elliana: document.getElementById("character-elliana"),
	pomme: document.getElementById("character-pomme"),
	kragg: document.getElementById("character-kragg"),
	maypul: document.getElementById("character-maypul"),
	sylvanos: document.getElementById("character-sylvanos"),
	olympia: document.getElementById("character-olympia"),
	orcane: document.getElementById("character-orcane"),
	etalus: document.getElementById("character-etalus"),
	ranno: document.getElementById("character-ranno"),
	hodan: document.getElementById("character-hodan"),
	ori: document.getElementById("character-ori"),
	shovelknight: document.getElementById("character-shovelknight"),
	random: document.getElementById("character-random"),
}

/*const pageMusic = new Audio("../audio/music/ROA - .ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	confirm: new Audio("../audio/sfx/roa/00010_enter.wav"),
}
sfx.confirm.volume = 0.2;*/

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

// Display on hover

function hoverDisplay(charFileName) {
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/roa/" + charFileName + ".png";
		chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");;
	}
}

chrSel.zetterburn.addEventListener("mouseover",
	(event) => {
		
	}
);
chrSel.zetterburn.addEventListener("mouseout",
	(event) => {
		
	}
);