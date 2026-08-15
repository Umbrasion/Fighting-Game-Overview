const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = Array.prototype.slice.call(document.getElementsByClassName("css-character"));

const pageMusic = new Audio("audio/music/MvCIB - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.3;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/mvcib/SYS_84.wav"),
	colorCursor: new Audio("audio/sfx/mvcib/SYS_88.wav"),
	confirm: new Audio("audio/sfx/mvcib/SYS_85.wav"),
	cancel: new Audio("audio/sfx/mvcib/SYS_83.wav"),
	announcer: new Audio("audio/sfx/mvcib/SYS_95.wav"),
    banter: new Audio("audio/sfx/mvcib/banter/Ryu_select1.wav"),
}
sfx.cursor.volume = 0.3;
sfx.confirm.volume = 0.3;
sfx.cancel.volume = 0.3;
sfx.announcer.volume = 0.3;
sfx.banter.volume = 0.3;
sfx.announcer.play();

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
    var characterName = targetChar.onclick.toString().split("'")[1];
    if (characterName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();

        chrPrevImg.src = `img/portraits/mvcib/${characterName}.png`;
        chrName.src = `img/characterSelect/mvcib/Name_${characterName}.png`;

        previousCharacter = characterName;
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
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
        if (!sfx.banter.paused) {
			sfx.banter.pause();
		}

		switch (characterName) {
			case "Black_Panther": case "Black_Widow": case "Captain_America": case "Captain_Marvel": case "Chun-Li": case "Dante": case "Dormammu": case "Hulk": case "Iron_Man": case "Mike_Haggar": case "Monster_Hunter": case "Morrigan": case "Nova": case "Ryu": case "Sigma": case "Venom": case "X": case "Zero":
				sfx.banter.src = `audio/sfx/mvcib/banter/${characterName}_select${Math.floor(Math.random() * 2) + 1}.wav`;
				break;
			default:
				sfx.banter.src = `audio/sfx/mvcib/banter/${characterName}_select.wav`;
		}
		sfx.banter.currentTime = 0;
        sfx.banter.play();
		
		initializeOV();
		
		switch (characterName) {
			case "Strider_Hiryu":
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
			case "Arthur":
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
			case "Frank_West":
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
			case "Rocket_Raccoon":
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
			case "Dr._Strange":
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
			case "Hawkeye":
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
			case "Chris":
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
			case "X":
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
			case "Zero":
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
			case "Ultron":
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
			case "Gamora":
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
			case "Ghost_Rider":
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
			case "Nemesis":
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
			case "Dante":
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
			case "Ryu":
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
			case "Iron Man":
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
			case "Thanos":
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
			case "Nova":
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
			case "Spencer":
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
			case "Chun-Li":
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
			case "Morrigan":
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
			case "Hulk":
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
			case "Captain_Marvel":
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
			case "Thor":
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
			case "Jedah":
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
			case "Firebrand":
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
			case "Mike_Haggar":
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
			case "Captain_America":
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
			case "Spider-Man":
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
			case "Dormammu":
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
			case "Sigma":
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
			case "Monster_Hunter":
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
			case "Winter_Soldier":
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
			case "Black_Widow":
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
			case "Venom":
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
			case "Black_Panther":
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

		updateOV2(displayInfo, "mvcib");
	}
}