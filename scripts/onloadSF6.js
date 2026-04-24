const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-luke"),
	document.getElementById("character-jamie"),
	document.getElementById("character-manon"),
	document.getElementById("character-kimberly"),
	document.getElementById("character-marisa"),
	document.getElementById("character-lily"),
	document.getElementById("character-jp"),
	document.getElementById("character-juri"),
	document.getElementById("character-deejay"),
	document.getElementById("character-cammy"),
	document.getElementById("character-ryu"),
	document.getElementById("character-honda"),
	document.getElementById("character-blanka"),
	document.getElementById("character-guile"),
	document.getElementById("character-ken"),
	document.getElementById("character-chun"),
	document.getElementById("character-zangief"),
	document.getElementById("character-dhalsim"),
	document.getElementById("character-rashid"),
	document.getElementById("character-aki"),
	document.getElementById("character-ed"),
	document.getElementById("character-akuma"),
	document.getElementById("character-bison"),
	document.getElementById("character-terry"),
	document.getElementById("character-mai"),
	document.getElementById("character-elena"),
	document.getElementById("character-sagat"),
	document.getElementById("character-viper"),
	document.getElementById("character-alex"),
];

const pageMusic = new Audio("audio/music/SF6 - Reinvent the Game.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/sf6/cursor.ogg"),
	confirm: new Audio("audio/sfx/sf6/confirm.ogg"),
	cancel: new Audio("audio/sfx/sf6/cancel.ogg"),
}
sfx.cursor.volume = 0.8;
sfx.confirm.volume = 0.8;
sfx.cancel.volume = 0.8;

var previewDisplayOn = true;
var interactionEnabled = true;

// Display on hover

function hoverDisplay(charFileName) {
	if (interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/sf6/" + charFileName + ".png";
			document.getElementById("info-portrait-reflection").src = "img/portraits/sf6/" + charFileName + ".png";
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

// Display on click

var announcer = new Audio();
var banter = new Audio();

function runDisplay(characterName) {
	if (interactionEnabled) {
		interactionEnabled = false;

		announcer.onended = function() {}
		if (!announcer.paused) {
			announcer.pause();
		}
		previewDisplayOn = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");
		
		chrPrevImg.src = "img/portraits/sf6/" + characterName + ".png";
		document.getElementById("info-portrait-reflection").src = "img/portraits/sf6/" + characterName + ".png";
		chrName.innerHTML = characterName.replace(/_/g, " ");

		announcer = new Audio("audio/sfx/sf6/announcer/" + characterName + "_call.ogg");
		announcer.volume = 0.9;
		announcer.play();
		if (!banter.paused) {
			banter.pause();
		}
		announcer.onended = function() {
			banter = new Audio("audio/sfx/sf6/banter/" + characterName + "_select.ogg");
			banter.volume = 0.9;
			banter.currentTime = 0;
			banter.play();
		}
		
		switch (characterName) {
			case "Luke":
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
			case "Jamie":
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
			case "Manon":
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
			case "Kimberly":
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
			case "Marisa":
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
			case "Lily":
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
			case "JP":
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
			case "Juri":
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
			case "Dee_Jay":
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
			case "Cammy":
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
			case "Ryu":
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
			case "E._Honda":
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
			case "Blanka":
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
			case "Guile":
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
			case "Ken":
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
			case "Chun-Li":
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
			case "Zangief":
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
			case "Dhalsim":
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
			case "Rashid":
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
			case "A.K.I.":
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
			case "Ed":
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
			case "Akuma":
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
			case "M._Bison":
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
			case "Terry":
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
			case "Mai":
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
			case "Elena":
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
			case "Sagat":
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
			case "C._Viper":
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
			case "Alex":
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

        updateOV2(displayInfo, "sf6");
	}
}