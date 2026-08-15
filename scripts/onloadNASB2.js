const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = Array.prototype.slice.call(document.getElementsByClassName("css-character"));

const pageMusic = new Audio("audio/music/NASB2 - Main Theme loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.3;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/NASB2 - Main Theme intro.ogg");
pageMusicIntro.volume = 0.3;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/nasb2/cursor.wav"),
	colorCursor: new Audio("audio/sfx/nasb2/color_cursor.wav"),
	confirm: new Audio("audio/sfx/nasb2/confirm.wav"),
	cancel: new Audio("audio/sfx/nasb2/cancel.wav"),
	announcer: new Audio("audio/sfx/nasb2/announcer/SpongeBob_call.wav"),
}
sfx.cursor.volume = 0.3;
sfx.colorCursor.volume = 0.3;
sfx.confirm.volume = 0.3;
sfx.cancel.volume = 0.3;
sfx.announcer.volume = 0.3;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
    var characterName = targetChar.onclick.toString().split("'")[1];
    if (characterName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();

        chrPrevImg.src = "img/portraits/nasb2/" + characterName + ".png";
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
        
        initializeOV();
		
		reroll: while (true) {
			if (characterName === "Random") {
				characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
				continue reroll;
			} else {
				break reroll;
			}
		}
        
        if (characterName === "El_Tigre" || characterName === "Lucy_Loud" || characterName === "Zuko") {
            sfx.announcer.src = `audio/sfx/nasb2/announcer/${characterName}_call${Math.floor(Math.random() * 2) + 1}.wav`;
        } else {
            sfx.announcer.src = `audio/sfx/nasb2/announcer/${characterName}_call.wav`;
        }
        sfx.announcer.currentTime = 0;
        sfx.announcer.play();

        chrPrevImg.src = "img/portraits/nasb2/" + characterName + ".png";
        chrName.innerHTML = characterName.replace(/_/g, " ");

        var displayInfo;
        
        switch (characterName) {
            case "SpongeBob":
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
            case "Patrick":
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
            case "Squidward":
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
            case "Mecha_Plankton":
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
            case "El_Tigre":
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
            case "Rocko":
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
            case "Jimmy_Neutron":
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
            case "Lucy_Loud":
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
            case "Angry_Beavers":
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
            case "Garfield":
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
            case "Aang":
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
            case "Korra":
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
            case "Azula":
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
            case "Raphael":
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
            case "Donatello":
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
            case "April":
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
            case "Danny_Phantom":
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
            case "Ember":
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
            case "Grandma_Gertie":
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
            case "Gerald":
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
            case "Nigel":
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
            case "Zim":
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
            case "Jenny_Wakeman":
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
            case "Reptar":
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
            case "Ren_&_Stimpy":
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
            case "Mr._Krabs":
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
            case "Zuko":
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
            case "Iroh":
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
            case "Rocksteady":
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

        updateOV2(displayInfo, "nasb2");
    }
}