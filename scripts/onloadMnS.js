const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-priestess"),
	document.getElementById("character-redhood"),
	document.getElementById("character-arcanist"),
	document.getElementById("character-hero"),
	document.getElementById("character-random"),
	document.getElementById("character-dreadwyrm"),
	document.getElementById("character-lich"),
	document.getElementById("character-secret"),
	document.getElementById("character-stormbeast"),
];

const pageMusic = new Audio("audio/music/MnS - Main Theme loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/MnS - Main Theme intro.ogg");
pageMusicIntro.volume = 0.2;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/mns/cursor.ogg"),
	confirm: new Audio("audio/sfx/mns/confirm.ogg"),
	cancel: new Audio("audio/sfx/mns/confirm.ogg"),
}
sfx.cursor.volume = 0.6;
sfx.confirm.volume = 0.6;
sfx.cancel.volume = 0.6;

var previewDisplayOn = true;
var interactionEnabled = true;

// Display on hover

function hoverDisplay(charFileName) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		if (charFileName === "Random") {
			chrPrevImg.src = "";
		} else if (charFileName === "Depths_Secret") {
			chrPrevImg.src = "img/portraits/mns/Depth's_Secret.webp";
		} else {
			chrPrevImg.src = "img/portraits/mns/" + charFileName + ".webp";
		}
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1], element);
		}
	);
});

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
		previewDisplayOn = false;
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");

		if (characterName === "Depths_Secret") {
			characterName = "Depth's_Secret";
		}
		
		chrPrevImg.src = "img/portraits/mns/" + characterName + ".webp";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
		switch (characterName) {
			case "Sun_Priestess":
				displayInfo = {
					filename: characterName,
					colors: 2,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
		}

		updateOV2(displayInfo, "mns");
	}
}

$(window).resize(setLocations);

function setLocations() {
	var chrCoords = [381,43, 816,43, 781,138, 346,138];
	autoResize("selectbox-fullroster", chrSel[0], chrCoords);
	chrCoords = [342,149, 778,149, 744,242, 308,242];
	autoResize("selectbox-fullroster", chrSel[1], chrCoords);
	chrCoords = [304,253, 740,253, 706,346, 432,346];
	autoResize("selectbox-fullroster", chrSel[2], chrCoords);
	chrCoords = [266,358, 702,358, 670,448, 233,448];
	autoResize("selectbox-fullroster", chrSel[3], chrCoords);
	chrCoords = [229,460, 665,460, 632,552, 195,552];
	autoResize("selectbox-fullroster", chrSel[4], chrCoords);
	chrCoords = [191,564, 628,564, 595,656, 157,656];
	autoResize("selectbox-fullroster", chrSel[5], chrCoords);
	chrCoords = [153,668, 591,668, 558,758, 120,758];
	autoResize("selectbox-fullroster", chrSel[6], chrCoords);
	chrCoords = [116,769, 554,769, 520,863, 81,863];
	autoResize("selectbox-fullroster", chrSel[7], chrCoords);
	chrCoords = [77,875, 516,875, 482,968, 43,968];
	autoResize("selectbox-fullroster", chrSel[8], chrCoords);
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setLocations;

// Failsafe in case it doesn't properly set things the first time
setTimeout(setLocations,10);