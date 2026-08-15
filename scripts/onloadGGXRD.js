const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-haehyun"),
	document.getElementById("character-elphelt"),
	document.getElementById("character-sol"),
	document.getElementById("character-ky"),
	document.getElementById("character-ramlethal"),
	document.getElementById("character-raven"),
	document.getElementById("character-sin"),
	document.getElementById("character-johnny"),
	document.getElementById("character-may"),
	document.getElementById("character-leo"),
	document.getElementById("character-chipp"),
	document.getElementById("character-millia"),
	document.getElementById("character-baiken"),
	document.getElementById("character-answer"),
	document.getElementById("character-zato"),
	document.getElementById("character-potemkin"),
	document.getElementById("character-ino"),
	document.getElementById("character-slayer"),
	document.getElementById("character-venom"),
	document.getElementById("character-axl"),
	document.getElementById("character-dizzy"),
	document.getElementById("character-faust"),
	document.getElementById("character-bedman"),
	document.getElementById("character-jacko"),
	document.getElementById("character-jam"),
];

const pageMusic = new Audio("audio/music/GGXRD - Fizz.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.1;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/ggxrd/cursor.ogg"),
	confirm: new Audio("audio/sfx/ggxrd/confirm.ogg"),
	cancel: new Audio("audio/sfx/ggxrd/cancel.ogg"),
	announcer: new Audio("audio/sfx/ggxrd/announcer/CharSelect_call.ogg"),
}
sfx.cursor.volume = 0.08;
sfx.confirm.volume = 0.12;
sfx.cancel.volume = 0.12;
sfx.announcer.volume = 1;
setTimeout(function() {sfx.announcer.play()}, 2200);

var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrPrevImg.classList.remove("portrait-onhover");
	chrName.src = "";
	chrName.classList.remove("name-onhover");
}

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	if (charFileName !== previousCharacter && interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		
		if (charFileName == "Jack-O") {
			charFileName = "Jack-O'";
		}

		chrPrevImg.src = "img/portraits/ggxrd/" + charFileName + ".png";
		chrName.src = "img/characterSelect/ggxrd/Name_" + charFileName + ".png";
		document.getElementsByClassName("css-fullroster")[0].src = `img/characterSelect/ggxrd/${charFileName}_icon.png`;

		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		chrName.classList.add("name-onhover");
		
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

// Random select

var cycleRandom;
document.getElementById("character-random").addEventListener("mouseover",
	(event) => {
		randomDisplay();
	}
);
document.getElementById("character-random").addEventListener("mouseout",
	(event) => {
		clearTimeout(cycleRandom);
	}
);

var previousSelection = -1;
function randomDisplay() {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	reroll: while (true) {
		var displayCharacter = Math.floor(Math.random() * 25);
		if (displayCharacter === previousSelection) {
			continue reroll;
		} else {
			hoverDisplay(chrSel[displayCharacter]);
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	cycleRandom = setTimeout(randomDisplay, 70);
	previousSelection = displayCharacter;
}

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		if (characterName == "Jack-O") {
			characterName = "Jack-O'";
		}
		
		clearTimeout(cycleRandom);
		reroll: while (true) {
			if (characterName === "Random") {
				characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
				continue reroll;
			} else {
				break reroll;
			}
		}
		
		if (characterName == "Jack-O") {
			characterName = "Jack-O'";
		}
		
		initializeOV("experimental");

		chrPrevImg.src = "img/portraits/ggxrd/" + characterName + ".png";
		chrName.src = "img/characterSelect/ggxrd/Name_" + characterName + ".png";
		document.getElementsByClassName("css-fullroster")[0].src = `img/characterSelect/ggxrd/${characterName}_icon.png`;
		
		chrPrevImg.classList.remove("portrait-onselect");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onselect");

		sfx.announcer.volume = 0.2;
		sfx.announcer.src = `audio/sfx/ggxrd/announcer/${characterName}_call.ogg`;
		sfx.announcer.play();
		
		switch (characterName) {
			case "Kum_Haehyun":
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
			case "Elphelt_Valentine":
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
			case "Sol_Badguy":
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
			case "Ky_Kiske":
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
			case "Ramlethal_Valentine":
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
			case "Raven":
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
			case "Sin_Kiske":
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
			case "Johnny":
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
			case "May":
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
			case "Leo_Whitefang":
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
			case "Chipp_Zanuff":
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
			case "Millia_Rage":
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
			case "Baiken":
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
			case "Answer":
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
			case "Zato-1":
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
			case "Potemkin":
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
			case "I-No":
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
			case "Slayer":
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
			case "Venom":
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
			case "Axl_Low":
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
			case "Dizzy":
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
			case "Faust":
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
			case "Bedman":
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
			case "Jack-O'":
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
			case "Jam_Kuradoberi":
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

        updateOV2(displayInfo, "ggxrd");
	}
}