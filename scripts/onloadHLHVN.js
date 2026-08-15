const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-ollie"),
	document.getElementById("character-suisei"),
	document.getElementById("character-kanata"),
	document.getElementById("character-mio"),
	document.getElementById("character-subaru"),
	document.getElementById("character-oga"),
	document.getElementById("character-random"),
];

const pageMusic = new Audio("audio/music/HLHVN - Heroine Audition.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/hlhvn/CursorMove.wav"),
	confirm: new Audio("audio/sfx/hlhvn/CursorSelect.wav"),
	cancel: new Audio("audio/sfx/hlhvn/CursorDeselect.wav"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.25;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	if (charFileName !== previousCharacter && interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();

		chrPrevImg.src = "img/portraits/hlhvn/" + charFileName + ".png";
		chrName.src = "img/characterSelect/hlhvn/Nameplate_" + charFileName + ".png";
		
        previousCharacter = charFileName;
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element);
		}
	);
});

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
		previewDisplayOn = false;
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		reroll: while (true) {
			if (characterName === "Random") {
				characterName = chrSel[Math.floor(Math.random() * (chrSel.length - 1))].onclick.toString().split("'")[1];
				continue reroll;
			} else {
				break reroll;
			}
		}
		
		initializeOV("experimental");

		chrPrevImg.src = "img/portraits/hlhvn/" + characterName + ".png";
		chrName.src = "img/characterSelect/hlhvn/Nameplate_" + characterName + ".png";
		
		switch (characterName) {
			case "Ollie":
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
			case "Suisei":
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
			case "Kanata":
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
			case "Mio":
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
			case "Subaru":
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
			case "Oga":
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

        updateOV2(displayInfo, "hlhvn");
    }
}