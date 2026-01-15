const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-pciel"),
	document.getElementById("character-maids"),
	document.getElementById("character-akiha"),
	document.getElementById("character-arcueid"),
	document.getElementById("character-ciel"),
	document.getElementById("character-noel"),
	document.getElementById("character-mario"),
	document.getElementById("character-warc"),
	document.getElementById("character-kohaku"),
	document.getElementById("character-miyako"),
	document.getElementById("character-kouma"),
	document.getElementById("character-shiki"),
	document.getElementById("character-roa"),
	document.getElementById("character-vlov"),
	document.getElementById("character-dan"),
	document.getElementById("character-hisui"),
	document.getElementById("character-ushiwakamaru"),
	document.getElementById("character-neco"),
	document.getElementById("character-mash"),
	document.getElementById("character-saber"),
	document.getElementById("character-aoko"),
	document.getElementById("character-count"),
]

const pageMusic = new Audio("audio/music/MBTL - Moonlight of Reunion loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.15;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/MBTL - Moonlight of Reunion intro.ogg");
pageMusicIntro.volume = 0.15;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/mbtl/Menu_MoveCursor.wav"),
	confirm: new Audio("audio/sfx/mbtl/Menu_OK.wav"),
    announcer: new Audio("audio/sfx/mbtl/Sys00_0900.wav"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.2;
sfx.announcer.volume = 0.25;
sfx.announcer.play();

var previewDisplayOn = true;

// Display on hover

var banterTimer;
var charBanter1 = new Audio();
var charBanter2 = new Audio();
function hoverDisplay(charFileName) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/mbtl/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");

        if (!charBanter1.paused || !charBanter2.paused) {
            charBanter1.pause();
            charBanter2.pause();
        }
        charBanter1 = new Audio("audio/sfx/mbtl/banter/" + charFileName + "_idle1.wav");
        charBanter2 = new Audio("audio/sfx/mbtl/banter/" + charFileName + "_idle2.wav");
        charBanter1.volume = 0.25;
        charBanter2.volume = 0.25;
        clearTimeout(banterTimer);
        banterTimer = setTimeout(function() {
            charBanter1.play();
            banterTimer = setTimeout(function() {
                charBanter2.play();
            }, 10000);
        }, 5000);

		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrName.offsetWidth;
		chrName.classList.add("name-onhover");
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1]);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	(event) => {
		randomDisplay();
	}
);
document.getElementById("character-random").addEventListener("mouseout",
	(event) => {
		clearTimeout(cycleRandom);
	}
);

var cycleRandom;
var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		var displayCharacter = Math.floor(Math.random() * 22);
		if (displayCharacter === previousSelection) {
			continue reroll;
		} else {
			switch (displayCharacter) {
					case 0:
						hoverDisplay("Powered_Ciel");
						break;
					case 1:
						hoverDisplay("Hisui_&_Kohaku");
						break;
					case 2:
						hoverDisplay("Akiha_Tohno");
						break;
					case 3:
						hoverDisplay("Arcueid_Brunestud");
						break;
					case 4:
						hoverDisplay("Ciel");
						break;
					case 5:
						hoverDisplay("Noel");
						break;
					case 6:
						hoverDisplay("Mario_Gallo_Bestino");
						break;
					case 7:
						hoverDisplay("Red_Arcueid");
						break;
					case 8:
						hoverDisplay("Kohaku");
						break;
					case 9:
						hoverDisplay("Miyako_Arima");
						break;
					case 10:
						hoverDisplay("Kouma_Kishima");
						break;
					case 11:
						hoverDisplay("Shiki_Tohno");
						break;
					case 12:
						hoverDisplay("Michael_Roa_Valdamjong");
						break;
					case 13:
						hoverDisplay("Vlov_Arkhangel");
						break;
					case 14:
						hoverDisplay("Dead_Apostle_Noel");
						break;
					case 15:
						hoverDisplay("Hisui");
						break;
					case 16:
						hoverDisplay("Ushiwakamaru");
						break;
					case 17:
						hoverDisplay("Neco-Arc");
						break;
					case 18:
						hoverDisplay("Mash_Kyrielight");
						break;
					case 19:
						hoverDisplay("Saber");
						break;
					case 20:
						hoverDisplay("Aoko_Aozaki");
						break;
					case 21:
						hoverDisplay("The_Count_of_Monte_Cristo");
						break;
			}
			cycleRandom = setTimeout(randomDisplay, 125);
			previousSelection = displayCharacter;
			break reroll;
		}
	}
}

// Display on click

var selectBanter = new Audio();
function runDisplay(characterName) {
	previewDisplayOn = false;
	clearTimeout(cycleRandom);
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();

	if (characterName === "Random") {
		switch (Math.floor(Math.random() * 22)) {
			case 0:
				characterName = "Powered_Ciel";
				break;
			case 1:
				characterName = "Hisui_&_Kohaku";
				break;
			case 2:
				characterName = "Akiha_Tohno";
				break;
			case 3:
				characterName = "Arcueid_Brunestud";
				break;
			case 4:
				characterName = "Ciel";
				break;
			case 5:
				characterName = "Noel";
				break;
			case 6:
				characterName = "Mario_Gallo_Bestino";
				break;
			case 7:
				characterName = "Red_Arcueid";
				break;
			case 8:
				characterName = "Kohaku";
				break;
			case 9:
				characterName = "Miyako_Arima";
				break;
			case 10:
				characterName = "Kouma_Kishima";
				break;
			case 11:
				characterName = "Shiki_Tohno";
				break;
			case 12:
				characterName = "Michael_Roa_Valdamjong";
				break;
			case 13:
				characterName = "Vlov_Arkhangel";
				break;
			case 14:
				characterName = "Dead_Apostle_Noel";
				break;
			case 15:
				characterName = "Hisui";
				break;
			case 16:
				characterName = "Ushiwakamaru";
				break;
			case 17:
				characterName = "Neco-Arc";
				break;
			case 18:
				characterName = "Mash_Kyrielight";
				break;
			case 19:
				characterName = "Saber";
				break;
			case 20:
				characterName = "Aoko_Aozaki";
				break;
			case 21:
				characterName = "The_Count_of_Monte_Cristo";
				break;
		}
	}
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/mbtl/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}

    if (!charBanter1.paused || !charBanter2.paused) {
        charBanter1.pause();
        charBanter2.pause();
    }
    clearTimeout(banterTimer);
    selectBanter.pause();
    selectBanter = new Audio("audio/sfx/mbtl/banter/" + characterName + "_select.wav");
    selectBanter.volume = 0.3;
    selectBanter.currentTime = 0;
    selectBanter.play();
	
	switch (characterName) {
		case "Powered_Ciel":
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
		case "Hisui_&_Kohaku":
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
		case "Akiha_Tohno":
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
		case "Arcueid_Brunestud":
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
		case "Ciel":
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
		case "Noel":
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
		case "Mario_Gallo_Bestino":
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
		case "Red_Arcueid":
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
		case "Kohaku":
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
		case "Miyako_Arima":
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
		case "Kouma_Kishima":
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
		case "Shiki_Tohno":
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
		case "Michael_Roa_Valdamjong":
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
		case "Vlov_Arkhangel":
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
		case "Dead_Apostle_Noel":
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
		case "Hisui":
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
		case "Ushiwakamaru":
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
		case "Neco-Arc":
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
		case "Mash_Kyrielight":
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
		case "Saber":
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
		case "Aoko_Aozaki":
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
		case "The_Count_of_Monte_Cristo":
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

function startupDisplay() {
	var iconArray = Array.prototype.slice.call(document.getElementsByClassName("selectbox-character"));
	iconArray = iconArray.splice(0, iconArray.length - 1);
	
	var characterIconsL = [
		chrSel[3],
		chrSel[2],
		chrSel[1],
		chrSel[0],
		chrSel[8],
		chrSel[9],
		chrSel[10],
		chrSel[11],
		chrSel[18],
		chrSel[17],
		chrSel[16],
	];
	var characterIconsR = [
		chrSel[4],
		chrSel[5],
		chrSel[6],
		chrSel[7],
		chrSel[15],
		chrSel[14],
		chrSel[13],
		chrSel[12],
		chrSel[19],
		chrSel[20],
		chrSel[21],
	];

	// for (let [item, element] of Object.entries(chrSel)) {
	// 	element.classList.add("cssicon-onstart");
	// }
	
	var positionCount = 0;
	function addIconAnims() {
		characterIconsL[positionCount].classList.add("cssicon-onstart");
		characterIconsR[positionCount].classList.add("cssicon-onstart");

		characterIconsL[positionCount].style.opacity = 1;
		characterIconsR[positionCount].style.opacity = 1;

		positionCount++;
		
		if (positionCount === characterIconsL.length) {
			setTimeout(function() {
				document.getElementById("character-random").classList.add("cssicon-onstart");
				document.getElementById("character-random").style.opacity = 1;
			}, 30);
		} else {
			setTimeout(addIconAnims, 30);
		}
	}

	addIconAnims();
}

startupDisplay();