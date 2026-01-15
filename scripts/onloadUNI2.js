const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-eltnum"),
	document.getElementById("character-kuon"),
	document.getElementById("character-phonon"),
	document.getElementById("character-nanase"),
	document.getElementById("character-seth"),
	document.getElementById("character-waldstein"),
	document.getElementById("character-hyde"),
	document.getElementById("character-linne"),
	document.getElementById("character-carmine"),
	document.getElementById("character-yuzuriha"),
	document.getElementById("character-byakuya"),
	document.getElementById("character-mika"),
	document.getElementById("character-kaguya"),
	document.getElementById("character-akatsuki"),
	document.getElementById("character-izumi"),
	document.getElementById("character-uzuki"),
	document.getElementById("character-tsurugi"),
	document.getElementById("character-hilda"),
	document.getElementById("character-merkava"),
	document.getElementById("character-orie"),
	document.getElementById("character-wagner"),
	document.getElementById("character-enkidu"),
	document.getElementById("character-gordeau"),
	document.getElementById("character-vatista"),
	document.getElementById("character-chaos"),
	document.getElementById("character-londrekia"),
	document.getElementById("character-ogre"),
];

const pageMusic = new Audio("audio/music/UNI2 - Begin System Celestial loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/UNI2 - Begin System Celestial intro.ogg");
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
	cursor: new Audio("audio/sfx/uni2/MoveCursor.wav"),
	confirm: new Audio("audio/sfx/uni2/OK.wav"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.2;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, lightingColor, scaleMeasures) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		clearTimeout(cycleRandom);
		chrPrevImg.src = "img/portraits/uni2/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		chrName.classList.add("name-onhover");

		document.getElementById("character-lighting").style.background = "linear-gradient(65deg, rgba(" + lightingColor[0] + ", " + lightingColor[1] + ", " + lightingColor[2] + ", 0.7) 0%, rgba(0,0,0,0), rgba(0,0,0,0))";
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
	}
}

function positionCursor(positionID) {
	var csCursor = document.getElementById("select-cursor");
	csCursor.style.opacity = 1;
	csCursor.style.left = Math.floor(positionID % 14) * 75 + "px";
	csCursor.style.top = Math.floor(positionID / 14) * 198 + "px";
}

chrSel[0].addEventListener("mouseover",
	() => {
		hoverDisplay("Eltnum", [228,122,250], [1,-3,-12]);
		positionCursor(0);
	}
);
chrSel[1].addEventListener("mouseover",
	() => {
		hoverDisplay("Kuon", [250,2,94], [1.5,-2.5,-23]);
		positionCursor(1);
	}
);
chrSel[2].addEventListener("mouseover",
	() => {
		hoverDisplay("Phonon", [251,76,130], [0.92,-13,-11]);
		positionCursor(2);
	}
);
chrSel[3].addEventListener("mouseover",
	() => {
		hoverDisplay("Nanase", [79,240,198], [1.08,8,-10]);
		positionCursor(3);
	}
);
chrSel[4].addEventListener("mouseover",
	() => {
		hoverDisplay("Seth", [8,153,250], [0.88,10,-6]);
		positionCursor(4);
	}
);
chrSel[5].addEventListener("mouseover",
	() => {
		hoverDisplay("Waldstein", [74,180,157], [1.18,7,-20]);
		positionCursor(5);
	}
);
chrSel[6].addEventListener("mouseover",
	() => {
		hoverDisplay("Hyde", [218,0,90], [1.15,-26,-4]);
		positionCursor(6);
	}
);
chrSel[7].addEventListener("mouseover",
	() => {
		hoverDisplay("Linne", [255,143,19], [0.7,0,-14]);
		positionCursor(7);
	}
);
chrSel[8].addEventListener("mouseover",
	() => {
		hoverDisplay("Carmine", [246,19,27], [0.9,-29,-1]);
		positionCursor(8);
	}
);
chrSel[9].addEventListener("mouseover",
	() => {
		hoverDisplay("Yuzuriha", [249,2,154], [1.12,13,-25.3]);
		positionCursor(9);
	}
);
chrSel[10].addEventListener("mouseover",
	() => {
		hoverDisplay("Byakuya", [189,145,254], [1,-8,-12]);
		positionCursor(10);
	}
);
chrSel[11].addEventListener("mouseover",
	() => {
		hoverDisplay("Mika", [242,222,2], [1.38,-0.5,-28]);
		positionCursor(11);
	}
);
chrSel[12].addEventListener("mouseover",
	() => {
		hoverDisplay("Kaguya", [116,167,239], [0.94,-23,-17]);
		positionCursor(12);
	}
);
chrSel[13].addEventListener("mouseover",
	() => {
		hoverDisplay("Akatsuki", [0,255,255], [0.95,-21,-1]);
		positionCursor(13);
	}
);
chrSel[14].addEventListener("mouseover",
	() => {
		hoverDisplay("Izumi", [140,226,243], [1.1,-8,-21]);
		positionCursor(14);
	}
);
chrSel[15].addEventListener("mouseover",
	() => {
		hoverDisplay("Uzuki", [245,1,83], [1.3,-1.8,-15]);
		positionCursor(15);
	}
);
chrSel[16].addEventListener("mouseover",
	() => {
		hoverDisplay("Tsurugi", [253,151,55], [1.05,-12.5,-9]);
		positionCursor(16);
	}
);
chrSel[17].addEventListener("mouseover",
	() => {
		hoverDisplay("Hilda", [167,125,255], [1.03,-20,-5]);
		positionCursor(17);
	}
);
chrSel[18].addEventListener("mouseover",
	() => {
		hoverDisplay("Merkava", [161,88,246], [1.24,-2,-17]);
		positionCursor(18);
	}
);
chrSel[19].addEventListener("mouseover",
	() => {
		hoverDisplay("Orie", [130,171,234], [1.15,-1,-13]);
		positionCursor(19);
	}
);
chrSel[20].addEventListener("mouseover",
	() => {
		hoverDisplay("Wagner", [242,190,1], [0.9,-34,0.5]);
		positionCursor(20);
	}
);
chrSel[21].addEventListener("mouseover",
	() => {
		hoverDisplay("Enkidu", [167,0,247], [0.88,-15,-6]);
		positionCursor(21);
	}
);
chrSel[22].addEventListener("mouseover",
	() => {
		hoverDisplay("Gordeau", [110,79,255], [1.4,-10,-14]);
		positionCursor(22);
	}
);
chrSel[23].addEventListener("mouseover",
	() => {
		hoverDisplay("Vatista", [236,19,88], [1.25,21.2,-17.5]);
		positionCursor(23);
	}
);
chrSel[24].addEventListener("mouseover",
	() => {
		hoverDisplay("Chaos", [0,250,194], [0.93,-5,0]);
		positionCursor(24);
	}
);
chrSel[25].addEventListener("mouseover",
	() => {
		hoverDisplay("Londrekia", [136,223,255], [1.05,-3,-8]);
		positionCursor(25);
	}
);
chrSel[26].addEventListener("mouseover",
	() => {
		hoverDisplay("Ogre", [221,0,146], [0.94,3,-7]);
		positionCursor(26);
	}
);

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		document.getElementById("select-cursor").style.opacity = 0;
		if (previewDisplayOn) {
			randomDisplay();
		}
	}
);

var cycleRandom;
var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 27)
		if (displayCharacter == previousSelection) {
			continue reroll;
		} else {
			switch (displayCharacter) {
				case 0:
					hoverDisplay("Eltnum", [228,122,250], [1,-3,-12]);
					break;
				case 1:
					hoverDisplay("Kuon", [250,2,94], [1.5,-2.5,-23]);
					break;
				case 2:
					hoverDisplay("Phonon", [251,76,130], [0.92,-13,-11]);
					break;
				case 3:
					hoverDisplay("Nanase", [79,240,198], [1.08,8,-10]);
					break;
				case 4:
					hoverDisplay("Seth", [8,153,250], [0.88,10,-6]);
					break;
				case 5:
					hoverDisplay("Waldstein", [74,180,157], [1.18,7,-20]);
					break;
				case 6:
					hoverDisplay("Hyde", [218,0,90], [1.15,-26,-4]);
					break;
				case 7:
					hoverDisplay("Linne", [255,143,19], [0.7,0,-14]);
					break;
				case 8:
					hoverDisplay("Carmine", [246,19,27], [0.9,-29,-1]);
					break;
				case 9:
					hoverDisplay("Yuzuriha", [249,2,154], [1.12,13,-25.3]);
					break;
				case 10:
					hoverDisplay("Byakuya", [189,145,254], [1,-8,-12]);
					break;
				case 11:
					hoverDisplay("Mika", [242,222,2], [1.38,-0.5,-28]);
					break;
				case 12:
					hoverDisplay("Kaguya", [116,167,239], [0.94,-23,-17]);
					break;
				case 13:
					hoverDisplay("Akatsuki", [0,255,255], [0.95,-21,-1]);
					break;
				case 14:
					hoverDisplay("Izumi", [140,226,243], [1.1,-8,-21]);
					break;
				case 15:
					hoverDisplay("Uzuki", [245,1,83], [1.3,-1.8,-15]);
					break;
				case 16:
					hoverDisplay("Tsurugi", [253,151,55], [1.05,-12.5,-9]);
					break;
				case 17:
					hoverDisplay("Hilda", [167,125,255], [1.03,-20,-5]);
					break;
				case 18:
					hoverDisplay("Merkava", [161,88,246], [1.24,-2,-17]);
					break;
				case 19:
					hoverDisplay("Orie", [130,171,234], [1.15,-1,-13]);
					break;
				case 20:
					hoverDisplay("Wagner", [242,190,1], [0.9,-34,0.5]);
					break;
				case 21:
					hoverDisplay("Enkidu", [167,0,247], [0.88,-15,-6]);
					break;
				case 22:
					hoverDisplay("Gordeau", [110,79,255], [1.4,-10,-14]);
					break;
				case 23:
					hoverDisplay("Vatista", [236,19,88], [1.25,21.2,-17.5]);
					break;
				case 24:
					hoverDisplay("Chaos", [0,250,194], [0.93,-5,0]);
					break;
				case 25:
					hoverDisplay("Londrekia", [136,223,255], [1.05,-3,-8]);
					break;
				case 26:
					hoverDisplay("Ogre", [221,0,146], [0.94,3,-7]);
					break;
			}
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 120);
}

function runDisplay(characterName) {
	clearTimeout(cycleRandom);
	previewDisplayOn = false;
	chrPrevImg.parentElement.classList.remove("portrait-onselect");
	void chrPrevImg.parentElement.offsetWidth;
	chrPrevImg.parentElement.classList.add("portrait-onselect");
	
	if (characterName == "Random") {
		clearDisplay();
		switch (Math.floor(Math.random() * 27)) {
			case 0:
				characterName = "Eltnum";
				break;
			case 1:
				characterName = "Kuon";
				break;
			case 2:
				characterName = "Phonon";
				break;
			case 3:
				characterName = "Nanase";
				break;
			case 4:
				characterName = "Seth";
				break;
			case 5:
				characterName = "Waldstein";
				break;
			case 6:
				characterName = "Hyde";
				break;
			case 7:
				characterName = "Linne";
				break;
			case 8:
				characterName = "Carmine";
				break;
			case 9:
				characterName = "Yuzuriha";
				break;
			case 10:
				characterName = "Byakuya";
				break;
			case 11:
				characterName = "Mika";
				break;
			case 12:
				characterName = "Kaguya";
				break;
			case 13:
				characterName = "Akatsuki";
				break;
			case 14:
				characterName = "Izumi";
				break;
			case 15:
				characterName = "Uzuki";
				break;
			case 16:
				characterName = "Tsurugi";
				break;
			case 17:
				characterName = "Hilda";
				break;
			case 18:
				characterName = "Merkava";
				break;
			case 19:
				characterName = "Orie";
				break;
			case 20:
				characterName = "Wagner";
				break;
			case 21:
				characterName = "Enkidu";
				break;
			case 22:
				characterName = "Gordeau";
				break;
			case 23:
				characterName = "Vatista";
				break;
			case 24:
				characterName = "Chaos";
				break;
			case 25:
				characterName = "Londrekia";
				break;
			case 26:
				characterName = "Ogre";
				break;
		}
	}
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, lightingColor, scaleMeasures) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/uni2/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();

		document.getElementById("character-lighting").style.background = "linear-gradient(65deg, rgba(" + lightingColor[0] + ", " + lightingColor[1] + ", " + lightingColor[2] + ", 0.7) 0%, rgba(0,0,0,0), rgba(0,0,0,0))";
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
	}
	
	switch (characterName) {
		case "Eltnum":
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
				characterName,
				[228,122,250],
				[1,-3,-12]
			);
			break;
		case "Kuon":
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
				characterName,
				[250,2,94],
				[1.5,-2.5,-23]
			);
			break;
		case "Phonon":
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
				characterName,
				[251,76,130],
				[0.92,-13,-11]
			);
			break;
		case "Nanase":
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
				characterName,
				[79,240,198],
				[1.08,8,-10]
			);
			break;
		case "Seth":
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
				characterName,
				[8,153,250],
				[0.88,10,-6]
			);
			break;
		case "Waldstein":
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
				characterName,
				[74,180,157],
				[1.18,7,-20]
			);
			break;
		case "Hyde":
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
				characterName,
				[218,0,90],
				[1.15,-26,-4]
			);
			break;
		case "Linne":
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
				characterName,
				[255,143,19],
				[0.7,0,-14]
			);
			break;
		case "Carmine":
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
				characterName,
				[246,19,27],
				[0.9,-29,-1]
			);
			break;
		case "Yuzuriha":
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
				characterName,
				[249,2,154],
				[1.12,13,-25.3]
			);
			break;
		case "Byakuya":
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
				characterName,
				[189,145,254],
				[1,-8,-12]
			);
			break;
		case "Mika":
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
				characterName,
				[242,222,2],
				[1.38,-0.5,-28]
			);
			break;
		case "Kaguya":
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
				characterName,
				[116,167,239],
				[0.94,-23,-17]
			);
			break;
		case "Akatsuki":
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
				characterName,
				[0,255,255],
				[0.95,-21,-1]
			);
			break;
		case "Izumi":
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
				characterName,
				[140,226,243],
				[1.1,-8,-21]
			);
			break;
		case "Uzuki":
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
				characterName,
				[245,1,83],
				[1.3,-1.8,-15]
			);
			break;
		case "Tsurugi":
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
				characterName,
				[253,151,55],
				[1.05,-12.5,-9]
			);
			break;
		case "Hilda":
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
				characterName,
				[167,125,255],
				[1.03,-20,-5]
			);
			break;
		case "Merkava":
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
				characterName,
				[161,88,246],
				[1.24,-2,-17]
			);
			break;
		case "Orie":
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
				characterName,
				[130,171,234],
				[1.15,-1,-13]
			);
			break;
		case "Wagner":
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
				characterName,
				[242,190,1],
				[0.9,-34,0.5]
			);
			break;
		case "Enkidu":
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
				characterName,
				[167,0,247],
				[0.88,-15,-6]
			);
			break;
		case "Gordeau":
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
				characterName,
				[110,79,255],
				[1.4,-10,-14]
			);
			break;
		case "Vatista":
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
				characterName,
				[236,19,88],
				[1.25,21.2,-17.5]
			);
			break;
		case "Chaos":
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
				characterName,
				[0,250,194],
				[0.93,-5,0]
			);
			break;
		case "Londrekia":
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
				characterName,
				[136,223,255],
				[1.05,-3,-8]
			);
			break;
		case "Ogre":
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
				characterName,
				[221,0,146],
				[0.94,3,-7]
			);
			break;
    }
}