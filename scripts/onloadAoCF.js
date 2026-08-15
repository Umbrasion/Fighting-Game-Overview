const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-reimu"),
	document.getElementById("character-marisa"),
	document.getElementById("character-ichirin"),
	document.getElementById("character-nitori"),
	document.getElementById("character-futo"),
	document.getElementById("character-byakuren"),
	document.getElementById("character-kokoro"),
	document.getElementById("character-miko"),
	document.getElementById("character-koishi"),
	document.getElementById("character-kasen"),
	document.getElementById("character-mokou"),
	document.getElementById("character-mamizou"),
	document.getElementById("character-sukuna"),
	document.getElementById("character-reisen"),
	document.getElementById("character-doremy"),
	document.getElementById("character-sumireko"),
	document.getElementById("character-tenshi"),
	document.getElementById("character-joon"),
	document.getElementById("character-yukari"),
]

const pageMusic = new Audio("audio/music/AoCF - Blizzard of Scattering Possession Flowers loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.08 * volumeModifier;

const pageMusicIntro = new Audio("audio/music/AoCF - Blizzard of Scattering Possession Flowers intro.ogg");
pageMusicIntro.volume = 0.08 * volumeModifier;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/aocf/aocfCursor.wav"),
	confirm: new Audio("audio/sfx/aocf/aocfOk.wav"),
	cancel: new Audio("audio/sfx/aocf/sys_cancel.wav"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;
sfx.cancel.volume = 0.1;

var previewDisplayOn = true;
var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

// Display on hover

function hoverDisplay(targetChar, isRandom = false) {
	if (interactionEnabled) {
		if (!isRandom) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
		}
		clearTimeout(cycleRandom);
		if (previewDisplayOn) {
			var charFileName = targetChar.onclick.toString().split("'")[1];
			var scaleMeasures = targetChar.dataset.scale.split(",");

			// document.getElementById("info-portrait-reference").src = "img/portraits/aocf/" + charFileName + ".png";
			// chrPrevImg.style.aspectRatio = document.getElementById("info-portrait-reference").naturalWidth + " / " + document.getElementById("info-portrait-reference").naturalHeight;
			chrName.src = "img/characterSelect/aocf/Nameplate_" + charFileName + ".png";
			chrPrevImg.style.backgroundImage = "url('img/portraits/aocf/" + charFileName + ".png')";
			chrPrevImg.style.backgroundSize = "auto " + scaleMeasures[0] + "%";
			chrPrevImg.style.backgroundPosition = "right " + scaleMeasures[1] + "% bottom " + (parseInt(scaleMeasures[2]) + 20) + "%";
		}
	}
}

function positionCursor(characterIcon) {
	if (interactionEnabled) {
		var cursor = document.getElementById("select-cursor");
		var cursorPosition = characterIcon.dataset.cursor.split(",");
		cursor.style.left = cursorPosition[0] + "%";
		cursor.style.top = cursorPosition[1] + "%";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element);
			positionCursor(element);
		}
	);
});

// Random select

var cycleRandom;
document.getElementById("character-random").addEventListener("mouseover",
	() => {
		positionCursor(document.getElementById("character-random"));
		if (interactionEnabled) {
			clearTimeout(cycleRandom);
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			if (previewDisplayOn) {
				randomDisplay();
			}
		}
	}
);

var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		var displayCharacter = Math.floor(Math.random() * 19);
		if (displayCharacter == previousSelection) {
			continue reroll;
		} else {
			hoverDisplay(chrSel[displayCharacter], true);
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 80);
}

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();

		previewDisplayOn = false;
		interactionEnabled = false;

		var selectImage = document.getElementById("info-portrait-select");
		chrPrevImg.style.visibility = "hidden";
		selectImage.style.visibility = "visible";
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
		}

		selectImage.src = "img/portraits/aocf/" + characterName + "_selected.png";
		chrName.src = "img/characterSelect/aocf/Nameplate_" + characterName + ".png";
		
		chrPrevImg.style.backgroundImage = "url('img/portraits/aocf/" + characterName + ".png')";

		var charIcon;
		chrSel.forEach(element => {
			if (element.onclick.toString().includes(characterName)) {
				charIcon = element;
			}
		});

		var scaleMeasures = charIcon.dataset.scale.split(",");
		chrPrevImg.style.backgroundSize = "auto " + scaleMeasures[0] + "%";
		chrPrevImg.style.backgroundPosition = "right " + scaleMeasures[1] + "% bottom " + (parseInt(scaleMeasures[2]) + 20) + "%";
		
		selectImage.classList.remove("portrait-onselect");
		void selectImage.offsetWidth;
		selectImage.classList.add("portrait-onselect");

		// var duration = 10;
		// var spinInterval = setInterval(function() {
		// 	duration++;
		// 	document.getElementsByClassName("portrait-bg")[0].style.animationDuration = duration + "s";
		// 	document.getElementsByClassName("portrait-box")[0].style.animationDuration = duration + "s";
		// 	document.getElementsByClassName("portrait-border")[0].style.animationDuration = duration + "s";
		// 	if (duration === 50) {
		// 		clearInterval(spinInterval);
		// 	}
		// }, 16.667);
		
		initializeOV("experimental");

		var selectScale;
		
		switch (characterName) {
			case "Reimu_Hakurei":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [93,-10,-5];
				break;
			case "Marisa_Kirisame":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [90,3,0];
				break;
			case "Ichirin_Kumoi":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [115,-10,0];
				break;
			case "Nitori_Kawashiro":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [105,-11,0];
				break;
			case "Mononobe_no_Futo":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [115,-10,-7];
				break;
			case "Byakuren_Hijiri":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [87,-3,0];
				break;
			case "Hata_no_Kokoro":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [108,-12,-5];
				break;
			case "Toyosatomimi_no_Miko":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [92,-21,0];
				break;
			case "Koishi_Komeiji":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [88,-10,0];
				break;
			case "Kasen_Ibaraki":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [91,4,0];
				break;
			case "Fujiwara_no_Mokou":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [90,-1,0];
				break;
			case "Mamizou_Futatsuiwa":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [90,-9,0];
				break;
			case "Shinmyoumaru_Sukuna":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [84,-4,6];
				break;
			case "Reisen_Udongein_Inaba":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [108,-3,-2];
				break;
			case "Doremy_Sweet":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [98,-18,-2];
				break;
			case "Sumireko_Usami":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [88,-10,0];
				break;
			case "Tenshi_Hinanawi":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [109,-15,-8];
				break;
			case "Joon_Yorigami":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>Jo'on Yorigami</b> is</p>
					`,
				}
				selectScale = [106,-19,0];
				break;
			case "Yukari_Yakumo":
				displayInfo = {
					filename: characterName,
					colors: 10,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				selectScale = [100,-25,0];
				break;
		}
		selectImage.style.height = selectScale[0] + "vh";
		// selectImage.style.transform = "scale(" + selectScale[0] + ")";
		selectImage.style.left = selectScale[1] + "vw";
		selectImage.style.bottom = selectScale[2] + "vh";

		updateOV2(displayInfo, "aocf");
	}
}

// $(window).resize(setLocations);

function setLocations() {
	var chrCoords = [3,0, 124,0, 135,77, 39,77];
	autoResize("css-fullroster", chrSel[0], chrCoords);
	chrCoords = [129,0, 248,0, 238,77, 140,77];
	autoResize("css-fullroster", document.getElementById("character-random"), chrCoords);
	chrCoords = [254,0, 375,0, 339,77, 244,77];
	autoResize("css-fullroster", chrSel[1], chrCoords);
	chrCoords = [39,81, 135,81, 141,158, 54,158];
	autoResize("css-fullroster", chrSel[2], chrCoords);
	chrCoords = [140,81, 238,81, 231,158, 147,158];
	autoResize("css-fullroster", chrSel[3], chrCoords);
	chrCoords = [243,81, 339,81, 325,158, 237,158];
	autoResize("css-fullroster", chrSel[4], chrCoords);
	chrCoords = [54,162, 142,162, 144,239, 60,239];
	autoResize("css-fullroster", chrSel[5], chrCoords);
	chrCoords = [147,162, 231,162, 227,239, 150,239];
	autoResize("css-fullroster", chrSel[6], chrCoords);
	chrCoords = [237,162, 324,162, 318,239, 234,239];
	autoResize("css-fullroster", chrSel[7], chrCoords);
	chrCoords = [60,243, 144,243, 144,320, 60,320];
	autoResize("css-fullroster", chrSel[8], chrCoords);
	chrCoords = [233,243, 318,243, 318,320, 233,320];
	autoResize("css-fullroster", chrSel[9], chrCoords);
	chrCoords = [59,324, 144,324, 141,401, 54,401];
	autoResize("css-fullroster", chrSel[10], chrCoords);
	chrCoords = [150,324, 229,324, 232,401, 146,401];
	autoResize("css-fullroster", chrSel[11], chrCoords);
	chrCoords = [233,324, 319,324, 325,401, 237,401];
	autoResize("css-fullroster", chrSel[12], chrCoords);
	chrCoords = [53,405, 140,405, 133,482, 38,482];
	autoResize("css-fullroster", chrSel[13], chrCoords);
	chrCoords = [146,405, 232,405, 239,482, 139,482];
	autoResize("css-fullroster", chrSel[14], chrCoords);
	chrCoords = [237,405, 325,405, 339,482, 245,482];
	autoResize("css-fullroster", chrSel[15], chrCoords);
	chrCoords = [38,486, 133,486, 121,565, 0,565];
	autoResize("css-fullroster", chrSel[16], chrCoords);
	chrCoords = [139,486, 239,486, 251,565, 127,565];
	autoResize("css-fullroster", chrSel[17], chrCoords);
	chrCoords = [245,486, 340,486, 378,565, 257,565];
	autoResize("css-fullroster", chrSel[18], chrCoords);
}

document.getElementsByClassName("css-fullroster")[0].onload = setInterval(setLocations, 1);