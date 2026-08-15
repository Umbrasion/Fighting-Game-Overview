const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-main"),
	document.getElementById("character-sisca"),
	document.getElementById("character-qdora"),
	document.getElementById("character-tae"),
	document.getElementById("character-tina"),
	document.getElementById("character-cecil"),
	document.getElementById("character-stina"),
	document.getElementById("character-alcott"),
	document.getElementById("character-serena"),
	document.getElementById("character-yagabi"),
];

const pageMusic = new Audio("audio/music/EL2 - 01_pselect.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.07;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/el2/00000_cursor.wav"),
	confirm: new Audio("audio/sfx/el2/00010_enter.wav"),
	cancel: new Audio("audio/sfx/el2/00011_chari02.wav"),
}
sfx.cursor.volume = 0.06;
sfx.confirm.volume = 0.06;
sfx.cancel.volume = 0.08;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	var offsetValue = targetChar.dataset.offset;
	if (charFileName !== previousCharacter && interactionEnabled) {
		clearTimeout(cycleRandom);
		
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();

		console.log(offsetValue);

		if (charFileName === "Yagabi") {
			chrPrevImg.src = "img/portraits/el2/" + charFileName + ".png";
		// } else if (charFileName == "Serena") {
		// 	chrPrevImg.src = "img/portraits/el2/Unfinished_scale.png";
		} else {
			chrPrevImg.src = "img/portraits/el2/" + charFileName + "_small.png";
		}

		chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		if (charFileName === "Sisca" || charFileName === "Saving_Tina" || charFileName === "Alcott" || charFileName === "Yagabi") {
			chrPrevImg.style.transform = "scale(-1, 1)";
		} else {
			chrPrevImg.style.transform = "scale(1, 1)";
		}
		
		if (offsetValue != 0) {
			chrPrevImg.style.transform += " translate(" + offsetValue + "%, 0)";
		}

		chrSel.forEach(element => {
			element.children[0].children[0].src = "img/characterSelect/el2/" + element.onclick.toString().split("'")[1] + "_icon.webp";
		});

		targetChar.children[0].children[0].src = "img/characterSelect/el2/" + charFileName + "_icon_selected.webp";
		
		document.getElementsByClassName("portrait-area")[0].classList.remove("portrait-onhover");
		void document.getElementsByClassName("portrait-area")[0].offsetWidth;
		document.getElementsByClassName("portrait-area")[0].classList.add("portrait-onhover");
		
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

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		if (interactionEnabled) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			randomDisplay();
		}
	}
);

var cycleRandom;
var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 10);
		if (displayCharacter === previousSelection) {
			continue reroll;
		} else {
			hoverDisplay(chrSel[displayCharacter]);
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 50);
}

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		clearTimeout(cycleRandom);
		
		if (characterName === "Random") {
			clearTimeout(cycleRandom);
			characterName = chrSel[Math.floor(Math.random() * 10)].onclick.toString().split("'")[1];
		}

		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV();

		if (characterName == "Yagabi") {
			chrPrevImg.src = "img/portraits/el2/" + characterName + ".png";
		} else {
			chrPrevImg.src = "img/portraits/el2/" + characterName + "_small.png";
		}
		chrName.innerHTML = characterName.toUpperCase().replace(/_/g, " ");
		
		if (characterName === "Sisca" || characterName === "Saving_Tina" || characterName === "Alcott" || characterName === "Yagabi") {
			chrPrevImg.style.transform = "scale(-1, 1)";
		} else {
			chrPrevImg.style.transform = "scale(1, 1)";
		}

		var offsetValue;
		chrSel.forEach(element => {
			if (element.children[0].children[0].src.includes("/" + characterName + "_icon")) {
				offsetValue = element.dataset.offset;
			}
		});
		
		if (offsetValue != 0) {
			chrPrevImg.style.transform += " translate(" + offsetValue + "%, 0)";
		}

        var displayInfo;
		
		switch (characterName) {
			case "Main":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Sisca":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Qdora":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Akamine_Tae":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Tina":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Cecil":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Saving_Tina":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Alcott":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Serena":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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
			case "Yagabi":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 32,
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

        updateOV2(displayInfo, "el2");
	}
}