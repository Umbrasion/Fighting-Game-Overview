const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-nudist"),
	document.getElementById("character-nui"),
	document.getElementById("character-inumuta"),
	document.getElementById("character-gamagori"),
	document.getElementById("character-satsuki"),
	document.getElementById("character-ryuko"),
	document.getElementById("character-sanageyama"),
	document.getElementById("character-jakuzure"),
	document.getElementById("character-ragyo"),
	document.getElementById("character-mako"),
]

const pageMusic = new Audio("audio/music/KLKIF - Main Menu Theme loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.1;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/KLKIF - Main Menu Theme intro.ogg");
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
	cursor: new Audio("audio/sfx/klkif/cursor.ogg"),
	confirm: new Audio("audio/sfx/klkif/confirm.ogg"),
	cancel: new Audio("audio/sfx/klkif/cancel.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.2;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

var interactionEnabled = true;
var disableActions = false;

// Display on hover

function hoverDisplay(targetChar) {
	if (interactionEnabled) {
		var charFileName = targetChar.onclick.toString().split("'")[1];
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();

		chrPrevImg.src = "img/portraits/klkif/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();
		
		var scaleMeasures = targetChar.children[0].children[0].dataset.scale.split(",");
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
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
		if (!disableActions && interactionEnabled) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			clearDisplay();
		}
	}
);

// Display on click

var banter = new Audio();

function runDisplay(characterName, overrideDisableActions = false) {
	if (!disableActions && interactionEnabled || overrideDisableActions) {
		sfx.confirm.onended = function() {}
		if (!banter.paused) {
			banter.pause();
		}

		interactionEnabled = false;
		disableActions = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		sfx.confirm.onended = function() {
			banter.src = "audio/sfx/klkif/banter/" + characterName + "_select.ogg";
			banter.volume = 0.35;
			banter.play();
		};
		
		initializeOV("experimental");
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
			chrPrevImg.src = "img/portraits/klkif/" + characterName + ".png";
			chrName.innerHTML = characterName.replace(/_/g, " ").toUpperCase();

			var charIcon;
			chrSel.forEach(element => {
				if (element.children[0].children[0].src.includes("/" + characterName + "_icon")) {
					charIcon = element.children[0].children[0];
				}
			});
			
			var scaleMeasures = charIcon.dataset.scale.split(",");
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		}
		
		switch (characterName) {
			case "Nudist_Beach":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Nui_Harime":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Houka_Inumuta":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Ira_Gamagoori":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Satsuki_Kiryuin":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Ryuko_Matoi":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Uzu_Sanageyama":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Nonon_Jakuzure":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Ragyo_Kiryuin":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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
			case "Mako_Mankanshoku":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 3,
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

        updateOV2(displayInfo, "klkif");
	}
}

var iterationCount = 0
function randomDisplay() {
	disableActions = true;

	hoverDisplay(chrSel[Math.floor(Math.random() * chrSel.length)]);

	iterationCount++;
	if (iterationCount === 20) {
		iterationCount = 0;
		runDisplay("Random", true);
	} else {
		setTimeout(function() {
			randomDisplay();
		}, 100);
	}
}