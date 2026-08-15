const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-red"),
	document.getElementById("character-blue"),
	document.getElementById("character-green"),
	document.getElementById("character-random"),
	document.getElementById("character-pink"),
	document.getElementById("character-orange"),
	document.getElementById("character-yellow"),
	document.getElementById("character-black"),
	document.getElementById("character-white"),
	document.getElementById("character-purple"),
	document.getElementById("character-brown"),
	document.getElementById("character-cyan"),
	document.getElementById("character-lime"),
	document.getElementById("character-tan"),
	document.getElementById("character-rose"),
	document.getElementById("character-banana"),
	document.getElementById("character-maroon"),
	document.getElementById("character-gray"),
	document.getElementById("character-coral"),
	document.getElementById("character-olive"),
	document.getElementById("character-mint"),
	document.getElementById("character-chocolate"),
	document.getElementById("character-teal"),
	document.getElementById("character-flame"),
	document.getElementById("character-navy"),
	document.getElementById("character-gold"),
	document.getElementById("character-sky"),
	document.getElementById("character-apricot"),
	document.getElementById("character-lavender"),
	document.getElementById("character-chartreuse"),
	document.getElementById("character-eggplant"),
	document.getElementById("character-honey"),
	document.getElementById("character-fortegreen"),
	document.getElementById("character-undefined"),
	document.getElementById("character-charcoal"),
	document.getElementById("character-gone"),
];

const pageMusic = new Audio("audio/music/AUAU - BeatsToBeEjectedTo.wav");
pageMusic.loop = true;
pageMusic.volume = 0.2 * volumeModifier;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/auau/UI_Hover.wav"),
	confirm: new Audio("audio/sfx/auau/UI_Select.wav"),
	intro: new Audio("audio/sfx/auau/Player_SpawnIn2.wav"),
}
sfx.cursor.volume = 0.3;
sfx.confirm.volume = 0.3;
sfx.intro.volume = 0.3;
sfx.intro.play();

var interactionEnabled = true;

function getWindowScale() {
	var elementScale = window.innerWidth / 1920;
	document.documentElement.style = `--element-scale: ${elementScale}`;
}
$(window).resize(getWindowScale);
getWindowScale();

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	if (charFileName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();

        chrPrevImg.src = "img/portraits/auau/" + charFileName + ".png";
        chrName.innerHTML = charFileName.replace(/_/g, " ");

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
			hoverDisplay(element);
		}
	);
});

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		reroll: while (true) {
			if (characterName === "Random") {
				characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
				continue reroll;
			} else {
				break reroll;
			}
		}
		
		initializeOV("experimental");

		chrPrevImg.src = "img/portraits/auau/" + characterName + ".png";
        chrName.innerHTML = characterName.replace(/_/g, " ");
		
		switch (characterName) {
			case "Red":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Blue":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Green":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Pink":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Orange":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Yellow":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Black":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "White":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Purple":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Brown":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Cyan":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Lime":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Tan":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Rose":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Banana":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Maroon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Gray":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Coral":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Olive":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Mint":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Chocolate":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Teal":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Flame":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Navy":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Gold":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Sky":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Apricot":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Lavender":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Chartreuse":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Eggplant":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Honey":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Fortegreen":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Undefined":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Charcoal":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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
			case "Gone":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 1,
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

		updateOV2(displayInfo, "auau");
	}
}