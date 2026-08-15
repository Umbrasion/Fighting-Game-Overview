const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-roboky"),
	document.getElementById("character-unika"),
	document.getElementById("character-asuka"),
	document.getElementById("character-bridget"),
	document.getElementById("character-ramlethal"),
	document.getElementById("character-sol"),
	document.getElementById("character-ky"),
	document.getElementById("character-may"),
	document.getElementById("character-leo"),
	document.getElementById("character-goldlewis"),
	document.getElementById("character-baiken"),
	document.getElementById("character-elphelt"),
	document.getElementById("character-lucy"),
	document.getElementById("character-dizzy"),
	document.getElementById("character-sin"),
	document.getElementById("character-nagoriyuki"),
	document.getElementById("character-axl"),
	document.getElementById("character-chipp"),
	document.getElementById("character-potemkin"),
	document.getElementById("character-giovanna"),
	document.getElementById("character-jacko"),
	document.getElementById("character-testament"),
	document.getElementById("character-aba"),
	document.getElementById("character-jam"),
	document.getElementById("character-venom"),
	document.getElementById("character-bedman"),
	document.getElementById("character-anji"),
	document.getElementById("character-faust"),
	document.getElementById("character-millia"),
	document.getElementById("character-zato"),
	document.getElementById("character-ino"),
	document.getElementById("character-chaos"),
	document.getElementById("character-johnny"),
	document.getElementById("character-slayer"),
];

var previewDisplayOn = true;
var interactionEnabled = true;

const pageMusic = new Audio("audio/music/GGST - Smell of The Game Instrumental loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.5;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/GGST - Smell of The Game Instrumental intro.ogg");
pageMusicIntro.volume = 0.5;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio(),
	confirm: new Audio("audio/sfx/ggst/confirm.ogg"),
	cancel: new Audio("audio/sfx/ggst/cancel.ogg"),
}
sfx.cursor.volume = 0.35;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.12;

// Display on hover

function hoverDisplay(charFileName) {
	if (previewDisplayOn) {
		if (charFileName === "Jack-O") {
			charFileName = "Jack-O'";
		}
		chrPrevImg.src = "img/portraits/ggst/" + charFileName + ".png";
		if (charFileName === "Asuka_R._Kreutz") {
			chrName.innerHTML = "ASUKA R&sharp;";
		} else if (charFileName === "Bedman") {
			chrName.innerHTML = "BEDMAN?";
		} else {
			chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();
		}
	}
}

var positionPrevious = "1px";
var positionIDPrevious = 4;

function positionCursor(positionID) {
	var csCursor = document.getElementById("select-cursor");
	csCursor.style.opacity = 1;
	if (positionID < 12) {
		csCursor.style.left = Math.floor(positionID % 12) * 100 - 11 + "px";
		csCursor.style.top = "1px";
	} else if (positionID > 22) {
		csCursor.style.left = Math.floor(positionID % 11.5) * 100 - 11 + "px";
		csCursor.style.top = "165px";
	} else {
		csCursor.style.left = Math.floor(positionID % 11.5) * 100 + 39 + "px";
		csCursor.style.top = "83px";
	}
	
	// Play audio based on direction
	if (parseInt(csCursor.style.top) > positionPrevious) {
		sfx.cursor.src = "audio/sfx/ggst/cursor_down.ogg";
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	} else if (parseInt(csCursor.style.top) < positionPrevious) {
		sfx.cursor.src = "audio/sfx/ggst/cursor_up.ogg";
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	} else if (positionIDPrevious > positionID) {
		sfx.cursor.src = "audio/sfx/ggst/cursor_right.ogg";
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	} else if (positionIDPrevious < positionID) {
		sfx.cursor.src = "audio/sfx/ggst/cursor_left.ogg";
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	}
	positionPrevious = parseInt(csCursor.style.top);
	positionIDPrevious = positionID;
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			if (interactionEnabled) {
				hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1]);
				positionCursor(chrSel.indexOf(event.target.parentElement.parentElement));
			}
		}
	);
});

var announcer = new Audio("audio/sfx/ggst/announcer/Charselect_call.ogg");
announcer.volume = 0.15;
announcer.play();

function runDisplay(characterName) {
	if (interactionEnabled) {
		previewDisplayOn = false;
		interactionEnabled = false;

		if (!announcer.paused) {
			announcer.pause();
		}

		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].parentElement.parentElement.onclick.toString().split("'")[1];
		}
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
			
		initializeOV("experimental");
		
		if (characterName === "Jack-O") {
			characterName = "Jack-O'";
		}
		chrPrevImg.src = "img/portraits/ggst/" + characterName + ".png";
		if (characterName === "Asuka_R._Kreutz") {
			chrName.innerHTML = "ASUKA R&sharp;";
		} else if (characterName === "Bedman") {
			chrName.innerHTML = "BEDMAN?";
		} else {
			chrName.innerHTML = characterName.replace(/_/g, " ").toUpperCase();
		}

		announcer = new Audio("audio/sfx/ggst/announcer/" + characterName + "_call.ogg");
		announcer.volume = 0.2;
		announcer.play();
		
		switch (characterName) {
			case "Robo-Ky":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Unika":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Asuka_R._Kreutz":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Bridget":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Ramlethal_Valentine":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Sol_Badguy":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Ky_Kiske":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "May":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Leo_Whitefang":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Goldlewis_Dickinson":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Baiken":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Elphelt_Valentine":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Lucy":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Queen_Dizzy":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Sin_Kiske":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Nagoriyuki":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Axl_Low":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Chipp_Zanuff":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Potemkin":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Giovanna":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Jack-O'":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Testament":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "A.B.A":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Jam_Kuradoberi":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Venom":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Bedman":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `?</b> is</p>
					`,
				}
				break;
			case "Anji_Mito":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Faust":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Millia_Rage":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Zato-1":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "I-No":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Happy_Chaos":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Johnny":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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
			case "Slayer":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 16,
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

		updateOV2(displayInfo, "ggst");
	}
}

// $(window).resize(setSize);

// function setSize() {
// 	console.log("Window resized");
// 	flexResize([9, 20]);
// }

// document.getElementById("sampleImage").onload = setSize();