const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-roshi"),
	document.getElementById("character-gogeta-ssgss"),
	document.getElementById("character-goku"),
	document.getElementById("character-tien"),
	document.getElementById("character-yamcha"),
	document.getElementById("character-krillin"),
	document.getElementById("character-goku-ss"),
	document.getElementById("character-goku-ss4-daima"),
	document.getElementById("character-frieza"),
	document.getElementById("character-kidbuu"),
	document.getElementById("character-ginyu"),
	document.getElementById("character-nappa"),
	document.getElementById("character-vegeta"),
	document.getElementById("character-broly-dbs"),
	document.getElementById("character-superbaby2"),
	document.getElementById("character-goku-gt"),
	document.getElementById("character-android17"),
	document.getElementById("character-bardock"),
	document.getElementById("character-goku-ssgss"),
	document.getElementById("character-gohan-adult"),
	document.getElementById("character-trunks"),
	document.getElementById("character-vegeta-ss"),
	document.getElementById("character-gogeta-ss4"),
	document.getElementById("character-labcoat"),
	document.getElementById("character-cell"),
	document.getElementById("character-android18"),
	document.getElementById("character-android16"),
	document.getElementById("character-android21"),
	document.getElementById("character-broly"),
	document.getElementById("character-cooler"),
	document.getElementById("character-janemba"),
	document.getElementById("character-goku-ui"),
	document.getElementById("character-videl"),
	document.getElementById("character-vegito-ssgss"),
	document.getElementById("character-vegeta-ssgss"),
	document.getElementById("character-gotenks"),
	document.getElementById("character-piccolo"),
	document.getElementById("character-gohan-teen"),
	document.getElementById("character-majinbuu"),
	document.getElementById("character-beerus"),
	document.getElementById("character-hit"),
	document.getElementById("character-gokublack"),
	document.getElementById("character-zamasu"),
	document.getElementById("character-jiren"),
	document.getElementById("character-kefla"),
]

const pageMusic = new Audio("audio/music/DBFZ - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.11;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/DBFZ - Character Select intro.ogg");
pageMusicIntro.volume = 0.11;
pageMusicIntro.play();

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Cursor_CharaSel.ogg"),
	cursor2: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_CharaApp_1.ogg"),
	colorCursor: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Cursor.ogg"),
	confirm: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Decide_1.ogg"),
	cancel: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Cancel_2.ogg"),
	random: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Cursor_Random.ogg"),
	announcer: new Audio("audio/sfx/dbfz/announcer/Name_Goku_(Super_Saiyan).ogg"),
	//banter: new Audio("audio/sfx/dbfz/"),
}
sfx.cursor.volume = 0.08;
sfx.cursor2.volume = 0.08;
sfx.colorCursor.volume = 0.12;
sfx.confirm.volume = 0.15;
sfx.cancel.volume = 0.12;
sfx.random.volume = 0.08;
sfx.announcer.volume = 0.2;
//sfx.banter.volume = 0.1;

sfx.random.playbackRate = 1.5;
sfx.random.loop = true;

var previewDisplayOn = true;
var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

var previousCharacter = "";

function hoverDisplay(iconArea) {
	var charFileName = iconArea.onclick.toString().split("'")[1];
	if (interactionEnabled) {
		var charIcon;
		Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(iconBox => {
			iconBox.children[0].style.transform = "translate(0,0)";
			if (iconBox.children[0].src.includes("/" + charFileName + "_icon")) {
				charIcon = iconBox.children[0];
			}
		});
		
		charIcon.style.transform = "translate(0, -10%)";
			
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();

		if (charFileName !== previousCharacter) {
			clearTimeout(cycleRandom);
			sfx.random.pause();

			sfx.cursor2.currentTime = 0;
			sfx.cursor2.play();
			chrPrevImg.src = "img/portraits/dbfz/" + charFileName + ".png";
			if (charFileName === "Goku_(SS4_DAIMA)") {
				chrName.innerHTML = "Goku (SS4, DAIMA)";
			} else {
				chrName.innerHTML = charFileName.replace(/_/g, " ");
			}
			
			chrPrevImg.classList.remove("portrait-onselect");
			chrPrevImg.classList.remove("portrait-onhover");
			void chrPrevImg.offsetWidth;
			chrPrevImg.classList.add("portrait-onhover");

			previousCharacter = charFileName;
		}
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element);
		}
	);
});
chrSel.forEach(element => {
	element.addEventListener("mouseout",
		() => {
			if (interactionEnabled) {
				Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(iconBox => {
					if (iconBox.children[0].src.includes("/" + element.onclick.toString().split("'")[1] + "_icon")) {
						iconBox.children[0].style.transform = "translate(0,0)";
					}
				});
			}
		}
	);
});

// Random select

document.getElementById("character-random").addEventListener("mouseover",
	() => {
	if (interactionEnabled) {
			Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(iconBox => {
				iconBox.children[0].style.transform = "translate(0,0)";
			});

			document.getElementsByClassName("selectbox-container")[0].children[0].children[0].style.transform = "translate(0, -10%)";

			clearTimeout(cycleRandom);
			randomDisplay();
			sfx.random.currentTime = 0;
			sfx.random.play();
			previousCharacter = "Random";
		}
	}
);
document.getElementById("character-random").addEventListener("mouseout",
	() => {
		if (interactionEnabled) {
			Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(iconBox => {
				if (iconBox.children[0].src.includes("/Random_icon")) {
					iconBox.children[0].style.transform = "translate(0,0)";
				}
			});
		}
	}
);

var cycleRandom;

function randomDisplay() {
	chrPrevImg.classList.remove("portrait-onhover");
	chrName.innerHTML = "Random";

	chrPrevImg.src = "img/portraits/dbfz/" + chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1] + ".png";
	cycleRandom = setTimeout(randomDisplay, 80);
}

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
		interactionEnabled = false;
		const descriptionArea = document.getElementsByClassName("description-area")[0];

		Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(iconBox => {
			iconBox.children[0].style.transform = "translate(0,0)";
		});
		
		clearTimeout(cycleRandom);
		sfx.random.pause();
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
		
			chrPrevImg.src = "img/portraits/dbfz/" + characterName + ".png";
			if (characterName === "Goku_(SS4_DAIMA)") {
				chrName.innerHTML = "Goku (Super Saiyan 4, DAIMA)";
			} else {
				chrName.innerHTML = characterName.replace(/_/g, " ");
			}
		}
		
		switch (characterName) {
			case "Android_21_(Lab_Coat)":
				sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Android_21.ogg";
				break;
			case "Broly_(DBS)":
				sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Broly.ogg";
				break;
			case "Goku_(GT)": case "Goku_(Ultra_Instinct)": case "Goku_(SS4_DAIMA)":
				sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Goku_(Super_Saiyan).ogg";
				break;
			case "Gogeta_(SS4)":
				sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Gogeta_(SSGSS).ogg";
				break;
			default:
				sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_" + characterName + ".ogg";
				break;
		}

		sfx.announcer.play();
		
		initializeOV("experimental");
		
		chrPrevImg.classList.remove("portrait-onselect");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onselect");
		
		switch (characterName) {
			case "Master_Roshi":
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
			case "Gogeta_(SSGSS)":
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
			case "Goku":
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
			case "Tien":
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
			case "Yamcha":
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
			case "Krillin":
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
			case "Goku_(Super_Saiyan)":
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
			case "Goku_(SS4_DAIMA)":
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
			case "Frieza":
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
			case "Kid_Buu":
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
			case "Captain_Ginyu":
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
			case "Nappa":
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
			case "Vegeta":
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
			case "Broly_(DBS)":
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
			case "Super_Baby_2":
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
			case "Goku_(GT)":
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
			case "Android_17":
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
			case "Bardock":
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
			case "Goku_(SSGSS)":
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
			case "Gohan_(Adult)":
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
			case "Trunks":
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
			case "Vegeta_(Super_Saiyan)":
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
			case "Gogeta_(SS4)":
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
			case "Android_21_(Lab_Coat)":
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
			case "Cell":
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
			case "Android_18":
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
			case "Android_16":
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
			case "Android_21":
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
			case "Broly":
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
			case "Cooler":
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
			case "Janemba":
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
			case "Goku_(Ultra_Instinct)":
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
			case "Videl":
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
			case "Vegito_(SSGSS)":
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
			case "Vegeta_(SSGSS)":
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
			case "Gotenks":
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
			case "Piccolo":
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
			case "Gohan_(Teen)":
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
			case "Majin_Buu":
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
			case "Beerus":
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
			case "Hit":
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
			case "Goku_Black":
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
			case "Zamasu_(Fused)":
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
			case "Jiren":
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
			case "Kefla":
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

        updateOV2(displayInfo, "dbfz");
	}
}

$(window).resize(setScale);

function setScale() {
	var assetScale = document.getElementsByClassName("selectbox-fullroster")[0].clientWidth / document.getElementsByClassName("selectbox-fullroster")[0].naturalWidth;
	checkFail: while (true) {
		if (assetScale === NaN) {
			assetScale = document.getElementsByClassName("selectbox-fullroster")[0].clientWidth / document.getElementsByClassName("selectbox-fullroster")[0].naturalWidth;
		} else {
			break checkFail;
		}
	}
	document.querySelector(':root').style.setProperty("--css-scale", assetScale);

	var totalIcons = chrSel.concat(document.getElementById("character-random"));

	totalIcons.forEach(element => {
		var identifier = element.onclick.toString().split("'")[1];

		var charIcon;
		Array.prototype.slice.call(document.getElementsByClassName("selectbox-character")).forEach(iconBox => {
			if (iconBox.children[0].src.includes("/" + identifier + "_icon")) {
				charIcon = iconBox;
			}
		});
		// Base coords:
		// 15,18, 107,19, 112,23, 123,101, 116,108, 23,106, 18,101, 7,26
		var iconLeft = charIcon.offsetLeft;
		var iconTop = charIcon.offsetTop;

		var baseCoords;
		if (iconLeft === Math.round(829 * assetScale)) {
			// Random & DAIMA
			if (iconTop === Math.round(99.5 * assetScale)) {
				// DAIMA
				baseCoords = [15,18,113,18,123,28,112,99,103,108,25,108,16,99,5,28];
			} else {
				// Random
				baseCoords = [30,12,98,12,122,35,114,95,105,104,81,104,77,108,51,108,47,104,23,104,14,95,6,35];
			}
		} else if (iconLeft <= (766 * assetScale)) {
			baseCoords = [15,18,107,19,112,23,123,101,116,108,23,106,18,101,7,26];
		} else if (iconLeft >= (892 * assetScale)) {
			baseCoords = [113,18,21,19,16,23,5,101,12,108,105,106,110,101,121,26];
		}

		var finalCoords = "";
		for (i = 0; i < baseCoords.length; i++) {
			if (i === baseCoords.length - 1) {
				finalCoords += ((baseCoords[i] * assetScale) + iconTop).toString();
			} else if (i % 2 === 0) {
				finalCoords += ((baseCoords[i] * assetScale) + iconLeft).toString() + ",";
			} else {
				finalCoords += ((baseCoords[i] * assetScale) + iconTop).toString() + ",";
			}
		}

		element.coords = finalCoords;
	});
}

setScale();