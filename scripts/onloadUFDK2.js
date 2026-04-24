const chrPrevImg = document.getElementById("info-portrait");
//const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-kamen"),
	document.getElementById("character-zacky"),
	document.getElementById("character-chihiro"),
	document.getElementById("character-blues"),
	document.getElementById("character-sendou"),
	document.getElementById("character-anna"),
	document.getElementById("character-kyanta"),
	document.getElementById("character-buttobi"),
	document.getElementById("character-spike"),
	document.getElementById("character-kinoko"),
	document.getElementById("character-razuma"),
	document.getElementById("character-garasha"),
	document.getElementById("character-azuma"),
	document.getElementById("character-jakor"),
	document.getElementById("character-michelle"),
	document.getElementById("character-rogue"),
	document.getElementById("character-gyanta"),
	document.getElementById("character-hisomi"),
	document.getElementById("character-tsukinami"),
	document.getElementById("character-rare"),
	document.getElementById("character-welldone"),
	document.getElementById("character-cocorn"),
	document.getElementById("character-hatoyan"),
	document.getElementById("character-mmichelle"),
	document.getElementById("character-katana"),
	document.getElementById("character-masao"),
	document.getElementById("character-masako"),
	document.getElementById("character-natanee"),
	document.getElementById("character-doctork"),
	document.getElementById("character-nanatsu"),
	document.getElementById("character-taro"),
	document.getElementById("character-myusha"),
]

const pageMusic = new Audio("audio/music/UFDK2 - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: [
		new Audio("audio/sfx/ufdk2/cursor1.ogg"),
		new Audio("audio/sfx/ufdk2/cursor2.ogg"),
		new Audio("audio/sfx/ufdk2/cursor3.ogg"),
		new Audio("audio/sfx/ufdk2/cursor4.ogg"),
	],
	confirm: new Audio("audio/sfx/ufdk2/confirm.ogg"),
}
sfx.cursor[0].volume = 0.6;
sfx.cursor[1].volume = 0.6;
sfx.cursor[2].volume = 0.6;
sfx.cursor[3].volume = 0.6;
sfx.confirm.volume = 0.7;

var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	//chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName) {
	if (interactionEnabled) {
		var randNum = Math.floor(Math.random() * 4);
		sfx.cursor[randNum].currentTime = 0;
		sfx.cursor[randNum].play();
		chrPrevImg.src = "img/portraits/ufdk2/" + charFileName + ".png";
	}
}

function positionCursor(positionID) {
	if (interactionEnabled) {
		csCursor = document.getElementById("select-cursor");
		csCursor.style.opacity = 1;
		csCursor.style.left = Math.floor(positionID % 6) * 84 + 17 + "px";
		csCursor.style.top = Math.floor(positionID / 6) * 120 + -12 + "px";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1]);
			positionCursor(element.children[0].children[0].dataset.cursor);
		}
	);
});

Array.prototype.slice.call(document.getElementsByClassName("character-random")).forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1]);
			positionCursor(element.children[0].children[0].dataset.cursor);
		}
	);
});

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {

		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");

		if (characterName === "Random") {
			var randNum = Math.floor(Math.random() * chrSel.length);
			characterName = chrSel[randNum].onclick.toString().split("'")[1];
			positionCursor(chrSel[randNum].children[0].children[0].dataset.cursor);
			chrPrevImg.src = "img/portraits/ufdk2/" + charFileName + ".png";
		}

		interactionEnabled = false;
		
		switch (characterName) {
			case "Japan_Kamen":
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
			case "ZackyWild":
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
			case "Chihiro":
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
			case "Blues":
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
			case "Sendou":
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
			case "Anna":
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
			case "Kyanta":
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
			case "Buttobi":
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
			case "Spike":
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
			case "Kinoko":
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
			case "Robo_Azuma":
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
			case "Garasha":
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
			case "Investigator_Azuma":
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
			case "Jakor":
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
			case "Michelle":
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
			case "Rogue":
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
			case "Gyanta":
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
			case "Hisomi":
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
			case "Tsukinami":
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
			case "Rare":
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
			case "Well_Done":
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
			case "Cocorn":
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
			case "Hatoyan":
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
			case "Mask_Michelle":
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
			case "Katana_Kyanta":
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
			case "Masao":
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
			case "Masako":
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
			case "Natanee":
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
			case "Doctor_K":
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
			case "Nanatsu":
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
			case "Taro":
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
			case "Myusha":
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

        updateOV2(displayInfo, "ufdk2");
	}
}