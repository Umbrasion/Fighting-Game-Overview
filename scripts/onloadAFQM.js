const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-eureka"),
	document.getElementById("character-knockt"),
	document.getElementById("character-rend"),
	document.getElementById("character-ninja"),
	document.getElementById("character-sarissae"),
];

const sfx = {
	cursor: new Audio("audio/sfx/afqm/Cursor_1.ogg"),
	colorCursor: new Audio("audio/sfx/afqm/Cursor_2.ogg"),
    announcer: new Audio("audio/sfx/afqm/announcer/Eureka_select.ogg"),
}
sfx.cursor.volume = 0.4;
sfx.colorCursor.volume = 0.2;
sfx.announcer.volume = 0.2;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(charFileName, charIcon) {
	if (interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1]);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
    () => {
        hoverDisplay("Random");
    }
);

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		
        if (characterName === "Random") {
            characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
        }
		
		initializeOV("experimental");
		
        if (!sfx.announcer.paused) {
			sfx.announcer.pause();
		}

        sfx.announcer.src = "audio/sfx/afqm/announcer/" + characterName + "_select.ogg";
        sfx.announcer.play();
		
		switch (characterName) {
			case "Eureka":
				displayInfo = {
					filename: characterName,
					colors: 8,
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
			case "Knockt":
				displayInfo = {
					filename: characterName,
					colors: 8,
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
			case "Rend":
				displayInfo = {
					filename: characterName,
					colors: 8,
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
			case "Ninja":
				displayInfo = {
					filename: characterName,
					colors: 8,
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
			case "Sarissae":
				displayInfo = {
					filename: characterName,
					colors: 8,
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

		updateOV2(displayInfo, "afqm");
    }
}