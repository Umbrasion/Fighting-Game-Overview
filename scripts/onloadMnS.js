const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	priestess: document.getElementById("character-priestess"),
	redhood: document.getElementById("character-redhood"),
	arcanist: document.getElementById("character-arcanist"),
	hero: document.getElementById("character-hero"),
	random: document.getElementById("character-random"),
	dreadwyrm: document.getElementById("character-dreadwyrm"),
	lich: document.getElementById("character-lich"),
	secret: document.getElementById("character-secret"),
	stormbeast: document.getElementById("character-stormbeast"),
}
/*const chrImg = {
	priestess: document.getElementById("selectbox-priestess"),
	redhood: document.getElementById("selectbox-redhood"),
	arcanist: document.getElementById("selectbox-arcanist"),
	hero: document.getElementById("selectbox-hero"),
	random: document.getElementById("selectbox-random"),
	dreadwyrm: document.getElementById("selectbox-dreadwyrm"),
	lich: document.getElementById("selectbox-lich"),
	secret: document.getElementById("selectbox-secret"),
	stormbeast: document.getElementById("selectbox-stormbeast"),
}*/

// THE PAGE MUSIC IS NOT A PERFECT LOOP. DON'T FORGET TO FIX THAT EVENTUALLY
const pageMusic = new Audio("../audio/music/MnS - music_mainthema.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

/*const sfx = {
	cursor: new Audio("../audio/sfx/mns/"),
	confirm: new Audio("../audio/sfx/mns/"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;*/

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName) {
	//sfx.cursor.fastSeek(0);
	//sfx.cursor.play();
	if (previewDisplayOn) {
		if (charFileName === "Random") {
			chrPrevImg.src = "";
		} else {
			chrPrevImg.src = "../img/portraits/mns/" + charFileName + ".webp";
		}
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}
}

chrSel.priestess.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sun_Priestess");
	}
);

chrSel.redhood.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Silent_Redhood");
	}
);

chrSel.arcanist.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Royal_Arcanist");
	}
);

chrSel.hero.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hero_of_Frost");
	}
);

chrSel.random.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Random");
	}
);

chrSel.dreadwyrm.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Dreadwyrm_Heir");
	}
);

chrSel.lich.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Lich_of_Flowers");
	}
);

chrSel.secret.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Depth's_Secret");
	}
);

chrSel.stormbeast.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Stormbeast");
	}
);

$(window).resize(setLocations);

function setLocations() {
	var chrCoords = [381,43, 816,43, 781,138, 346,138];
	autoResize("selectbox-fullroster", chrSel.priestess, chrCoords);
	chrCoords = [342,149, 778,149, 744,242, 308,242];
	autoResize("selectbox-fullroster", chrSel.redhood, chrCoords);
	chrCoords = [304,253, 740,253, 706,346, 432,346];
	autoResize("selectbox-fullroster", chrSel.arcanist, chrCoords);
	chrCoords = [266,358, 702,358, 670,448, 233,448];
	autoResize("selectbox-fullroster", chrSel.hero, chrCoords);
	chrCoords = [229,460, 665,460, 632,552, 195,552];
	autoResize("selectbox-fullroster", chrSel.random, chrCoords);
	chrCoords = [191,564, 628,564, 595,656, 157,656];
	autoResize("selectbox-fullroster", chrSel.dreadwyrm, chrCoords);
	chrCoords = [153,668, 591,668, 558,758, 120,758];
	autoResize("selectbox-fullroster", chrSel.lich, chrCoords);
	chrCoords = [116,769, 554,769, 520,863, 81,863];
	autoResize("selectbox-fullroster", chrSel.secret, chrCoords);
	chrCoords = [77,875, 516,875, 482,968, 43,968];
	autoResize("selectbox-fullroster", chrSel.stormbeast, chrCoords);
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setTimeout(setLocations, 1);