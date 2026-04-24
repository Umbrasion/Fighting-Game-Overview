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
	banter: new Audio("audio/sfx/mbtl/banter/Arcueid_Brunestud_idle1.wav"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.2;
sfx.announcer.volume = 0.25;
sfx.banter.volume = 0.25;
sfx.announcer.play();

var interactionEnabled = true;

// Display on hover

var banterTimer;
function hoverDisplay(targetChar) {
	if (interactionEnabled) {
		var charFileName = targetChar.parentElement.parentElement.onclick.toString().split("'")[1];
		clearTimeout(cycleRandom);

		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		
		chrPrevImg.src = "img/portraits/mbtl/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
		var scaleMeasures = targetChar.dataset.scale.split(",");
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		
		if (!sfx.banter.paused) {
			sfx.banter.pause();
		}
		sfx.banter.src = "audio/sfx/mbtl/banter/" + charFileName + "_idle1.wav";
		clearTimeout(banterTimer);
		banterTimer = setTimeout(function() {
			sfx.banter.play();
			banterTimer = setTimeout(function() {
				sfx.banter.src = "audio/sfx/mbtl/banter/" + charFileName + "_idle2.wav";
				sfx.banter.play();
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
			hoverDisplay(event.target);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	(event) => {
		if (interactionEnabled) {
			randomDisplay();
		}
	}
);

var cycleRandom;
var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		var displayCharacter = chrSel[Math.floor(Math.random() * chrSel.length)].children[0].children[0];
		if (displayCharacter === previousSelection) {
			continue reroll;
		} else {
			hoverDisplay(displayCharacter);
			cycleRandom = setTimeout(randomDisplay, 125);
			previousSelection = displayCharacter;
			break reroll;
		}
	}
}

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
		interactionEnabled = false;

		clearTimeout(cycleRandom);
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
			chrPrevImg.src = "img/portraits/mbtl/" + characterName + ".png";
			chrName.innerHTML = characterName.replace(/_/g, " ");

			var charIcon;
			chrSel.forEach(element => {
				if (element.children[0].children[0].src.includes("/" + characterName + "_icon")) {
					charIcon = element.children[0].children[0];
				}
			});

			console.log(charIcon);
			
			var scaleMeasures = charIcon.dataset.scale.split(",");
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		}
			

		if (!sfx.banter.paused) {
			sfx.banter.pause();
		}
		clearTimeout(banterTimer);
		sfx.banter.src = "audio/sfx/mbtl/banter/" + characterName + "_select.wav";
		sfx.banter.play();
		
		switch (characterName) {
			case "Powered_Ciel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Hisui_&_Kohaku":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Akiha_Tohno":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Arcueid_Brunestud":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Ciel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Noel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Mario_Gallo_Bestino":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Red_Arcueid":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Kohaku":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Miyako_Arima":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Kouma_Kishima":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Shiki_Tohno":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Michael_Roa_Valdamjong":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Vlov_Arkhangel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Dead_Apostle_Noel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Hisui":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Ushiwakamaru":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Neco-Arc":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Mash_Kyrielight":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Saber":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "Aoko_Aozaki":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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
			case "The_Count_of_Monte_Cristo":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 25,
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

        updateOV2(displayInfo, "mbtl");
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