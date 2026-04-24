const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-mature"),
	document.getElementById("character-shingo"),
	document.getElementById("character-kim"),
	document.getElementById("character-sylvie"),
	document.getElementById("character-najd"),
	document.getElementById("character-duolon"),
	document.getElementById("character-hinako"),
	document.getElementById("character-goenitz"),
	document.getElementById("character-vice"),
	document.getElementById("character-geese"),
	document.getElementById("character-billy"),
	document.getElementById("character-ryuji"),
	document.getElementById("character-rock"),
	document.getElementById("character-bjenet"),
	document.getElementById("character-gato"),
	document.getElementById("character-oyashiro"),
	document.getElementById("character-oshermie"),
	document.getElementById("character-ochris"),
	document.getElementById("character-haohmaru"),
	document.getElementById("character-nakoruru"),
	document.getElementById("character-darli"),
	document.getElementById("character-rugal"),
	document.getElementById("character-shunei"),
	document.getElementById("character-meitenkun"),
	document.getElementById("character-benimaru"),
	document.getElementById("character-ash"),
	document.getElementById("character-elisabeth"),
	document.getElementById("character-kukri"),
	document.getElementById("character-kyo"),
	document.getElementById("character-iori"),
	document.getElementById("character-chizuru"),
	document.getElementById("character-kdash"),
	document.getElementById("character-maxima"),
	document.getElementById("character-whip"),
	document.getElementById("character-isla"),
	document.getElementById("character-heidern"),
	document.getElementById("character-dolores"),
	document.getElementById("character-terry"),
	document.getElementById("character-andy"),
	document.getElementById("character-joe"),
	document.getElementById("character-ryo"),
	document.getElementById("character-robert"),
	document.getElementById("character-king"),
	document.getElementById("character-yashiro"),
	document.getElementById("character-shermie"),
	document.getElementById("character-chris"),
	document.getElementById("character-athena"),
	document.getElementById("character-mai"),
	document.getElementById("character-yuri"),
	document.getElementById("character-leona"),
	document.getElementById("character-ralf"),
	document.getElementById("character-clark"),
	document.getElementById("character-antonov"),
	document.getElementById("character-ramon"),
	document.getElementById("character-dinosaurs"),
	document.getElementById("character-krohnen"),
	document.getElementById("character-kula"),
	document.getElementById("character-angel"),
	document.getElementById("character-mary"),
	document.getElementById("character-vanessa"),
	document.getElementById("character-luong"),
];

const pageMusic = new Audio("audio/music/KoFXV - Member Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.15;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/KoFXV - Member Select intro.ogg");
pageMusicIntro.volume = 0.15;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/kofxv/Cursor.ogg"),
	colorCursor: new Audio("audio/sfx/kofxv/Color_Cursor.ogg"),
	confirm: new Audio("audio/sfx/kofxv/Confirm.ogg"),
	cancel: new Audio("audio/sfx/kofxv/Cancel.ogg"),
}
sfx.cursor.volume = 0.3;
sfx.colorCursor.volume = 0.25;
sfx.confirm.volume = 0.25;
sfx.cancel.volume = 0.25;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(charFileName, charIcon) {
	if (charFileName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();
		if (charFileName === "Shunei") {
			charFileName = "Shun'ei";
		}
		if (charFileName === "KDash") {
			charFileName = "K'";
		}

		chrPrevImg.src = "img/portraits/kofxv/" + charFileName + ".png";

		if (charFileName === "Omega_Rugal") {
			chrName.innerHTML = "&Omega; Rugal";
		} else if (charFileName === "Ramon") {
			chrName.innerHTML = "Ram&oacute;n";
		} else if (charFileName === "Angel") {
			chrName.innerHTML = "&Aacute;ngel";
		} else {
			chrName.innerHTML = charFileName.replace(/_/g, " ");
		}

		chrSel.forEach(element => {
			element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon.png";
		});
		charIcon.children[0].src = charIcon.children[0].src.split(".png")[0] + "_selected.png";
    }
}

var prevIcon;

function positionCursor(characterIcon) {
	if (interactionEnabled) {
		var csCursor = document.createElement("img");
		csCursor.setAttribute("id", "select-cursor");
		if (characterIcon.children[0].src.includes("Random")) {
			csCursor.src = "img/characterSelect/kofxv/Cursor_random.png";
		} else {
			csCursor.src = "img/characterSelect/kofxv/Cursor.png";
		}

		try {
			prevIcon.removeChild(prevIcon.children[1]);
		} catch (error) {

		}

		characterIcon.appendChild(csCursor);
		prevIcon = characterIcon;
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1], element);
			positionCursor(element);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		positionCursor(document.getElementById("character-random"));
		if (interactionEnabled) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();

            chrPrevImg.src = "";
            chrName.innerHTML = "";

			chrSel.forEach(element => {
				element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon.png";
			});
		}
	}
);

document.getElementById("character-randomteam").addEventListener("mouseover",
	() => {
		positionCursor(document.getElementById("character-randomteam"));
		if (interactionEnabled) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();

            chrPrevImg.src = "";
            chrName.innerHTML = "";

			chrSel.forEach(element => {
				element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon.png";
			});
		}
	}
);

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
        
        sfx.confirm.currentTime = 0;
        sfx.confirm.play();
        
        initializeOV("experimental");
        
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
		}

		if (characterName === "Shunei") {
			characterName = "Shun'ei";
		}
		if (characterName === "KDash") {
			characterName = "K'";
		}

		chrPrevImg.src = "img/portraits/kofxv/" + characterName + ".png";

		if (characterName === "Omega_Rugal") {
			chrName.innerHTML = "&Omega; Rugal";
		} else if (characterName === "Ramon") {
			chrName.innerHTML = "Ram&oacute;n";
		} else if (characterName === "Angel") {
			chrName.innerHTML = "&Aacute;ngel";
		} else {
			chrName.innerHTML = characterName.replace(/_/g, " ");
		}

        var displayInfo;
        
        switch (characterName) {
            case "Mature":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Shingo_Yabuki":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Kim_Kaphwan":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Sylvie_Paula_Paula":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Najd":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Duo_Lon":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Hinako_Shijo":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Goenitz":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Vice":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Geese_Howard":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Billy_Kane":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Ryuji_Yamazaki":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Rock_Howard":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "B.Jenet":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Gato":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Orochi_Yashiro":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Orochi_Shermie":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Orochi_Chris":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Haohmaru":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Nakoruru":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Darli_Dagger":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Omega_Rugal":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Shun'ei":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Meitenkun":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Benimaru_Nikaido":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Ash_Crimson":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Elisabeth_Blanctorche":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Kukri":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Kyo_Kusanagi":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Iori_Yagami":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Chizuru_Kagura":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "K'":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Maxima":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Whip":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Isla":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Heidern":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Dolores":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Terry_Bogard":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Andy_Bogard":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Joe_Higashi":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Ryo_Sakazaki":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Robert_Garcia":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "King":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Yashiro_Nanakase":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Shermie":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Chris":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Athena_Asamiya":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Mai_Shiranui":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Yuri_Sakazaki":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Leona_Heidern":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Ralf_Jones":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Clark_Still":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Antonov":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Ramon":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "King_of_Dinosaurs":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Krohnen":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Kula_Diamond":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Angel":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Blue_Mary":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Vanessa":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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
            case "Luong":
                displayInfo = {
                    filename: characterName,
					nicknames: [""],
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

        updateOV2(displayInfo, "kofxv");
	}
}