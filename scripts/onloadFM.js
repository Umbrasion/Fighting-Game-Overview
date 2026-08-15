const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = Array.prototype.slice.call(document.getElementsByClassName("css-character"));

const pageMusic = new Audio("audio/music/FM - Fraymakers Theme loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/FM - Fraymakers Theme intro.ogg");
pageMusicIntro.volume = 0.2;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/fm/cursor.ogg"),
	confirm: new Audio("audio/sfx/fm/confirm.ogg"),
	cancel: new Audio("audio/sfx/fm/cancel.ogg"),
	announcer: new Audio("audio/sfx/fm/announcer/CSS_call1.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.2;
sfx.announcer.volume = 0.4;
sfx.announcer.src = `audio/sfx/fm/announcer/CSS_call${Math.floor(Math.random() * 4) + 1}.ogg`;
sfx.announcer.play();

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
    var characterName = targetChar.onclick.toString().split("'")[1];
    if (characterName !== previousCharacter && interactionEnabled) {
        
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();

        chrPrevImg.src = "img/portraits/fm/" + characterName + ".webp";
        chrName.innerHTML = characterName.replace(/_/g, " ");

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
		
		reroll: while (true) {
			if (characterName === "Random") {
				characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
				continue reroll;
			} else {
				break reroll;
			}
		}

		sfx.announcer.src = `audio/sfx/fm/announcer/${characterName}_call${Math.floor(Math.random() * 2) + 1}.ogg`;
        sfx.announcer.currentTime = 0;
		sfx.announcer.play();
        
        initializeOV();

        chrPrevImg.src = "img/portraits/fm/" + characterName + ".webp";
        chrName.innerHTML = characterName.replace(/_/g, " ");

        var displayInfo;
        
        switch (characterName) {
            case "Octodad":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 14,
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
            case "CommanderVideo":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 18,
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
            case "Hat_Kid":
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
            case "Impostor":
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
            case "Welltaro":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 16,
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
            case "The_Watcher":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 15,
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
            case "Orcane":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 14,
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
            case "Guy_Spelunky":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 15,
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
            case "Ultra_Fishbunjin_3000":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
                    colors: 13,
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

        updateOV2(displayInfo, "fm");
    }
}