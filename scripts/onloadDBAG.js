const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-asuma"),
	document.getElementById("character-kuon"),
	document.getElementById("character-reizei"),
	document.getElementById("character-kureha"),
	document.getElementById("character-noah"),
	document.getElementById("character-licht"),
	document.getElementById("character-dawn"),
	document.getElementById("character-dusk"),
	document.getElementById("character-souya"),
	document.getElementById("character-yui"),
	document.getElementById("character-eve"),
	document.getElementById("character-pekomaru"),
	document.getElementById("character-nina"),
	document.getElementById("character-shiffon"),
];

const pageMusic = new Audio("audio/music/DBAG - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/dbag/Cursor.ogg"),
	confirm: new Audio("audio/sfx/dbag/Confirm.ogg"),
	cancel: new Audio("audio/sfx/dbag/Cancel.ogg"),
	banter: new Audio("audio/sfx/dbag/banter/Asuma_idle.ogg"),
}
sfx.cursor.volume = 0.25;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.2;
sfx.banter.volume = 0.3;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";
var banterTimer;

function hoverDisplay(charFileName) {
	if (charFileName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();

		chrPrevImg.src = "img/portraits/dbag/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");

        if (!sfx.banter.paused) {
            sfx.banter.pause();
        }
        sfx.banter.src = "audio/sfx/dbag/banter/" + charFileName + "_idle.ogg";
        clearTimeout(banterTimer);
        banterTimer = setTimeout(function() {
            sfx.banter.play();
        }, 5000);

		previousCharacter = charFileName;
    }
}

function resetIcons() {
    chrSel.forEach(element => {
        element.children[0].children[1].style.visibility = "hidden";
    });
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1]);
		}
	);
});

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
		}
		
		initializeOV("experimental");

        clearTimeout(banterTimer);
		
        if (!sfx.banter.paused) {
			sfx.banter.pause();
		}

        sfx.banter.src = "audio/sfx/dbag/banter/" + characterName + "_select.ogg";
        sfx.banter.play();
		
		switch (characterName) {
			case "Asuma":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Kuon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Reizei":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Kureha":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Noah":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Licht":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Dawn":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Dusk":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Souya":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Yui_Emelia":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Eve":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Pekomaru":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Nina":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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
			case "Shiffon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 4,
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

		updateOV2(displayInfo, "dbag");
	}
}

$(window).resize(setScale);

function setScale() {
	var assetScale = document.body.clientHeight / 480;
	document.querySelector(':root').style.setProperty("--icon-scale", assetScale);
}

setScale();