const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-fubuki"),
	document.getElementById("character-korone"),
	document.getElementById("character-suisei"),
	document.getElementById("character-koyori"),
	document.getElementById("character-sora"),
	document.getElementById("character-ollie"),
	document.getElementById("character-ina"),
	document.getElementById("character-aki"),
	document.getElementById("character-pekora"),
	document.getElementById("character-ayame"),
	document.getElementById("character-coco"),
	document.getElementById("character-botan"),
];

const pageMusic = new Audio("audio/music/ISD - Who Wants a Showdown loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.1;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/ISD - Who Wants a Showdown intro.ogg");
pageMusicIntro.volume = 0.1;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor1: new Audio("audio/sfx/isd/cursor1.ogg"),
	cursor2: new Audio("audio/sfx/isd/cursor2.ogg"),
	confirm: new Audio("audio/sfx/isd/confirm.ogg"),
	cancel: new Audio("audio/sfx/isd/cancel.ogg"),
}
sfx.cursor1.volume = 0.8;
sfx.cursor2.volume = 0.8;
sfx.confirm.volume = 0.4;
sfx.cancel.volume = 0.8;

var cursorState = true;
function playCursor() {
	if (cursorState) {
		sfx.cursor1.currentTime = 0;
		sfx.cursor1.play();
	} else {
		sfx.cursor2.currentTime = 0;
		sfx.cursor2.play();
	}
	cursorState = !cursorState;
}

var previewDisplayOn = true;
var interactionEnabled = true;

// Display on hover

function hoverDisplay(targetChar) {
	if (interactionEnabled) {
		var charFileName = targetChar.onclick.toString().split("'")[1];
		
		playCursor();

		if (charFileName === "Ninomae_Inanis") {
			charFileName = "Ninomae_Ina'nis"
		}
		
		var scaleMeasures = targetChar.dataset.scale.split(",");
		if (scaleMeasures[0].includes("-")) {
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ", " + scaleMeasures[0].replace("-", "") + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		} else {
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		}
		
		chrPrevImg.src = "img/portraits/isd/" + charFileName + "_small.png";
		chrName.src = "img/characterSelect/isd/logos/" + charFileName + "_logo.png";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		playCursor();
		if (previewDisplayOn) {
			chrPrevImg.src = "";
			chrName.src = "";
		}
	}
);

// Display on click

var banterNum = 0;
var prevBanterNum = 0;
var announcer = new Audio();
var banter = new Audio();

function runDisplay(characterName) {
	if (interactionEnabled) {
		announcer.onended = function() {}
		if (!announcer.paused) {
			announcer.pause();
		}
		previewDisplayOn = false;
		interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
		}
		
		if (characterName === "Ninomae_Inanis") {
			characterName = "Ninomae_Ina'nis"
		}
		
		chrPrevImg.src = "img/portraits/isd/" + characterName + "_small.png";
		chrName.src = "img/characterSelect/isd/logos/" + characterName + "_logo.png";
			
		announcer = new Audio("audio/sfx/isd/announcer/" + characterName + "_call.ogg");
		announcer.volume = 0.3;
		announcer.play();
		if (!banter.paused) {
			banter.pause();
		}
		announcer.onended = function() {
			reroll: while (true) {
				switch (characterName) {
					case "Shishiro_Botan":
						banterNum = 1;
						break;
					case "Hoshimachi_Suisei": case "Inugami_Korone": case "Kureiji_Ollie": case "Usada_Pekora":
						banterNum = Math.floor(Math.random() * 2 + 1);
						break;
					case "Hakui_Koyori": case "Kiryu_Coco": case "Shirakami_Fubuki": case "Tokino_Sora":
						banterNum = Math.floor(Math.random() * 3 + 1);
						break;
					case "Nakiri_Ayame": case "Ninomae_Ina'nis":
						banterNum = Math.floor(Math.random() * 4 + 1);
						break;
					case "Aki_Rosenthal":
						banterNum = Math.floor(Math.random() * 5 + 1);
						break;
				}
				if (banterNum === prevBanterNum && characterName !== "Shishiro_Botan") {
					continue reroll;
				} else {
					prevBanterNum = banterNum;
					break reroll;
				}
			}
			banter = new Audio("audio/sfx/isd/banter/" + characterName + "_" + banterNum + ".ogg");
			banter.volume = 0.3;
			banter.currentTime = 0;
			banter.play();
		}
		
		switch (characterName) {
			case "Shirakami_Fubuki":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Inugami_Korone":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Hoshimachi_Suisei":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Hakui_Koyori":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Tokino_Sora":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Kureiji_Ollie":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Ninomae_Ina'nis":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Aki_Rosenthal":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Usada_Pekora":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Nakiri_Ayame":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Kiryu_Coco":
				displayInfo = {
					filename: characterName,
					colors: 20,
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
			case "Shishiro_Botan":
				displayInfo = {
					filename: characterName,
					colors: 20,
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

		updateOV2(displayInfo, "isd");
	}
}