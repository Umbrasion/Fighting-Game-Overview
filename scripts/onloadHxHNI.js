const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-meruem"),
	document.getElementById("character-netero"),
	document.getElementById("character-hisoka"),
	document.getElementById("character-genthru"),
	document.getElementById("character-morel"),
	document.getElementById("character-leorio"),
	document.getElementById("character-kurapika"),
	document.getElementById("character-razor"),
	document.getElementById("character-kite"),
	document.getElementById("character-gon"),
	document.getElementById("character-killua"),
	document.getElementById("character-bisky"),
	document.getElementById("character-chrollo"),
	document.getElementById("character-uvogin"),
	document.getElementById("character-machi"),
	document.getElementById("character-feitan"),
	document.getElementById("character-neferpitou"),
	document.getElementById("character-phinks"),
	document.getElementById("character-shizuku"),
];

const pageMusic = new Audio("audio/music/HxHNI - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.25;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/hxhni/cursor.ogg"),
	confirm: new Audio("audio/sfx/hxhni/confirm.ogg"),
	cancel: new Audio("audio/sfx/hxhni/cancel.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.2;

var previewDisplayOn = true;
var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName) {
	if (interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/hxhni/" + charFileName + ".webp";
			chrName.innerHTML = charFileName.replace(/_/g, " ");
		}
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
		hoverDisplay("Random");
	}
);

document.getElementById("character-randomteam").addEventListener("mouseover",
	(event) => {
		hoverDisplay("Random");
	}
);

var banter = new Audio();

function runDisplay(characterName) {
	if (interactionEnabled) {
		interactionEnabled = false;

		if (!banter.paused) {
			banter.pause();
		}
		// chrPrevImg.parentElement.classList.remove("portrait-onselect");
		// void chrPrevImg.parentElement.offsetWidth;

		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
			
			chrPrevImg.src = "img/portraits/hxhni/" + characterName + ".webp";
			chrName.innerHTML = characterName.replace(/_/g, " ");
		}
		console.log(characterName)
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");

		banter = new Audio("audio/sfx/hxhni/banter/" + characterName + "_select.ogg");
		banter.volume = 0.4;
		banter.play();
		
		switch (characterName) {
			case "Meruem":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Netero":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Hisoka":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Genthru":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Morel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Leorio":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Kurapika":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Razor":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Kite":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Gon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Killua":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Bisky":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Chrollo":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Uvogin":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Machi":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Feitan":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Neferpitou":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Phinks":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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
			case "Shizuku":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 19,
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

        updateOV2(displayInfo, "hxhni");
	}
}