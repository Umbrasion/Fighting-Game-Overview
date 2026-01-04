const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	nudist: document.getElementById("character-nudist"),
	nui: document.getElementById("character-nui"),
	inumuta: document.getElementById("character-inumuta"),
	gamagori: document.getElementById("character-gamagori"),
	satsuki: document.getElementById("character-satsuki"),
	random: document.getElementById("character-random"),
	ryuko: document.getElementById("character-ryuko"),
	sanageyama: document.getElementById("character-sanageyama"),
	jakuzure: document.getElementById("character-jakuzure"),
	ragyo: document.getElementById("character-ragyo"),
	mako: document.getElementById("character-mako"),
}

const pageMusic = new Audio("audio/music/KLKIF - Main Menu Theme loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/KLKIF - Main Menu Theme intro.ogg");
pageMusicIntro.volume = 0.2;

pageMusic.addEventListener("canplay", function() {
	pageMusicIntro.play();
});
pageMusicIntro.onended = function() {
	pageMusic.play();
}

const sfx = {
	cursor: new Audio("audio/sfx/klkif/cursor.ogg"),
	confirm: new Audio("audio/sfx/klkif/confirm.ogg"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.4;

function clearDisplay() {
	if (previewDisplayOn) {
		chrPrevImg.src = "";
		chrName.innerHTML = "";
	}
}

var previewDisplayOn = true;
var disableActions = false;

// Display on hover

function hoverDisplay(charFileName) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/klkif/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();
	}
}

chrSel.nudist.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Nudist_Beach");
		}
	}
);
chrSel.nudist.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.nui.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Nui_Harime");
		}
	}
);
chrSel.nui.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.inumuta.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Houka_Inumuta");
		}
	}
);
chrSel.inumuta.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.gamagori.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Ira_Gamagoori");
		}
	}
);
chrSel.gamagori.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.satsuki.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Satsuki_Kiryuin");
		}
	}
);
chrSel.satsuki.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.ryuko.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Ryuko_Matoi");
		}
	}
);
chrSel.ryuko.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.sanageyama.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Uzu_Sanageyama");
		}
	}
);
chrSel.sanageyama.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.jakuzure.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Nonon_Jakuzure");
		}
	}
);
chrSel.jakuzure.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.ragyo.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Ragyo_Kiryuin");
		}
	}
);
chrSel.ragyo.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.mako.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			hoverDisplay("Mako_Mankanshoku");
		}
	}
);
chrSel.mako.addEventListener("mouseout",
	(event) => {
		if (!disableActions) {
			clearDisplay();
		}
	}
);

chrSel.random.addEventListener("mouseover",
	(event) => {
		if (!disableActions) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			clearDisplay();
		}
	}
);

// Display on click

var characterBanter = new Audio();

function runDisplay(characterName, overrideDisableActions = false) {
	if (!disableActions || overrideDisableActions) {
		previewDisplayOn = false;
		disableActions = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		sfx.confirm.onended = function() {
			var characterBanter = new Audio("audio/sfx/klkif/banter/" + characterName + "_select.ogg");
			characterBanter.volume = 0.35;
			characterBanter.play();
		};
		
		initializeOV("wide");
		
		function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
			updateOV(detailInfo, ratings, likeOrDislike, charDescription);
			
			chrPrevImg.src = "img/portraits/klkif/" + charFileName + ".png";
			chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();
		}
		
		switch (characterName) {
			case "Nudist_Beach":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Nui_Harime":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Houka_Inumuta":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Ira_Gamagoori":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Satsuki_Kiryuin":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Ryuko_Matoi":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Uzu_Sanageyama":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Nonon_Jakuzure":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Ragyo_Kiryuin":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
			case "Mako_Mankanshoku":
				writeCharInfo(
					[
						"<span class='archetype-'></span>",
						"<span class='range-'></span>",
						"<span class='unimech-none'>None</span>"
					],
					[1,1,1,1,1,1],
					["<li></li>", "<li></li>"],
					`
					<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
					characterName
				);
				break;
		}
	}
}

var iterationCount = 0
function randomDisplay() {
	previewDisplayOn = true;
	disableActions = true;
	
	switch (Math.floor(Math.random() * 10)) {
		case 0:
			hoverDisplay("Nudist_Beach");
			break;
		case 1:
			hoverDisplay("Nui_Harime");
			break;
		case 2:
			hoverDisplay("Houka_Inumuta");
			break;
		case 3:
			hoverDisplay("Ira_Gamagoori");
			break;
		case 4:
			hoverDisplay("Satsuki_Kiryuin");
			break;
		case 5:
			hoverDisplay("Ryuko_Matoi");
			break;
		case 6:
			hoverDisplay("Uzu_Sanageyama");
			break;
		case 7:
			hoverDisplay("Nonon_Jakuzure");
			break;
		case 8:
			hoverDisplay("Ragyo_Kiryuin");
			break;
		case 9:
			hoverDisplay("Mako_Mankanshoku");
			break;
	}
	iterationCount++;
	if (iterationCount === 20) {
		iterationCount = 0;
		switch (Math.floor(Math.random() * 10)) {
			case 0:
				runDisplay("Nudist_Beach", true);
				break;
			case 1:
				runDisplay("Nui_Harime", true);
				break;
			case 2:
				runDisplay("Houka_Inumuta", true);
				break;
			case 3:
				runDisplay("Ira_Gamagoori", true);
				break;
			case 4:
				runDisplay("Satsuki_Kiryuin", true);
				break;
			case 5:
				runDisplay("Ryuko_Matoi", true);
				break;
			case 6:
				runDisplay("Uzu_Sanageyama", true);
				break;
			case 7:
				runDisplay("Nonon_Jakuzure", true);
				break;
			case 8:
				runDisplay("Ragyo_Kiryuin", true);
				break;
			case 9:
				runDisplay("Mako_Mankanshoku", true);
				break;
		}
	} else {
		setTimeout(function() {
			randomDisplay();
		}, 100);
	}
}