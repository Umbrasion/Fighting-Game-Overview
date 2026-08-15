const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-dongdong"),
	document.getElementById("character-shuang"),
	document.getElementById("character-ken"),
	document.getElementById("character-yinyin"),
	document.getElementById("character-mingboy"),
	document.getElementById("character-liu"),
	document.getElementById("character-wu"),
	document.getElementById("character-jie"),
	document.getElementById("character-gouki"),
	document.getElementById("character-terminator"),
	document.getElementById("character-mian"),
	document.getElementById("character-jian"),
	document.getElementById("character-mo"),
	document.getElementById("character-jiang"),
	document.getElementById("character-jiejie"),
	document.getElementById("character-xiao"),
	document.getElementById("character-huo"),
	document.getElementById("character-mario"),
	document.getElementById("character-wukong"),
	document.getElementById("character-dalan"),
	document.getElementById("character-zhuge"),
	document.getElementById("character-feifei"),
	document.getElementById("character-sheng"),
	document.getElementById("character-korone"),
];

const pageMusic = new Audio("audio/music/DDND - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.1;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/DDND - Character Select intro.ogg");
pageMusicIntro.volume = 0.1;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/ddnd/cursor.wav"),
	confirm: new Audio("audio/sfx/ddnd/confirm.wav"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;

var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	var charNameHanzi = targetChar.children[0].children[0].dataset.hanzi;
	console.log(targetChar);
	if (charFileName !== previousCharacter && interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		chrPrevImg.src = "img/portraits/ddnd/" + charFileName + ".png";
		chrName.innerHTML = charNameHanzi;

		chrPrevImg.style.height = (chrPrevImg.naturalHeight / 480) * 100 + "vh";
		if (charFileName === "Jian_Ci_Lang") {
			chrPrevImg.style.bottom = ((205 - 39) / 480) * 100 + "vh";
			chrPrevImg.style.transform = "scale(-1,1)";
		} else {
			chrPrevImg.style.bottom = "42.708333vh";
			chrPrevImg.style.transform = "scale(1,1)";
		}
        previousCharacter = charFileName;
	}
}

function positionCursor(positionID) {
	if (interactionEnabled) {
		csCursor = document.getElementById("select-cursor");

		csCursor.style.left = Math.floor(positionID % 8) * 109 + 4 + "px";
		csCursor.style.top = Math.floor(positionID / 8) * 105 + -6 + "px";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(element);
			positionCursor(chrSel.indexOf(event.target.parentElement.parentElement));
		}
	);
});

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV();

		var charNameHanzi;
		chrSel.forEach(element => {
			if (element.onclick.toString().includes(characterName)) {
				charNameHanzi = element.children[0].children[0].dataset.hanzi;
			}
		});
		console.log(charNameHanzi);
			
		chrPrevImg.src = "img/portraits/ddnd/" + characterName + ".png";
		chrName.innerHTML = charNameHanzi;

		chrPrevImg.style.height = (chrPrevImg.naturalHeight / 480) * 100 + "vh";
		if (characterName === "Jian_Ci_Lang") {
			chrPrevImg.style.bottom = ((205 - 39) / 480) * 100 + "vh";
			chrPrevImg.style.transform = "scale(-1,1)";
		} else {
			chrPrevImg.style.bottom = "42.708333vh";
			chrPrevImg.style.transform = "scale(1,1)";
		}
		
		switch (characterName) {
			case "Dong_Dong":
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
			case "A_Shuang":
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
			case "Ken":
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
			case "Yin_Yin":
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
			case "Ming_Boy":
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
			case "Liu_Mang":
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
			case "Wu_Liao_Jun":
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
			case "Jie_Mei_Hua":
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
			case "GOUKI":
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
			case "Terminator":
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
			case "Mian_Hua_Tang":
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
			case "Jian_Ci_Lang":
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
			case "Mo_Shu_Shi":
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
			case "Jiang_Bao":
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
			case "Jie_Jie":
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
			case "Xiao_Ban":
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
			case "Huo_Chai_Ren":
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
			case "Mario":
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
			case "Sun_Wu_Kong":
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
			case "Da_Lan":
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
			case "Zhuge_Liang":
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
			case "Fei_Fei":
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
			case "Sheng_Hua_Nan":
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
			case "Korone":
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

        updateOV2(displayInfo, "ddnd");
    }
}

var backgroundNum = 1;
var backgroundNumForward = true;
setInterval(function() {
	document.body.style.backgroundImage = "url('img/backgrounds/DDND_" + backgroundNum + ".png')";
	if (backgroundNumForward) {
		backgroundNum++;
	} else {
		backgroundNum--;
	}
	
	if (backgroundNum === 5) {
		backgroundNum = 3;
		backgroundNumForward = false;
	} else if (backgroundNum === 0) {
		backgroundNum = 2;
		backgroundNumForward = true;
	}
}, 145);