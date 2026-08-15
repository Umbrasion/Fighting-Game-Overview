const chrPrevImg = document.getElementById("info-portrait");
const chrSymbol = document.getElementById("info-symbol");
const chrSel = [
	document.getElementById("character-marie"),
	document.getElementById("character-squigly"),
	document.getElementById("character-bigband"),
	document.getElementById("character-eliza"),
	document.getElementById("character-msfortune"),
	document.getElementById("character-peacock"),
	document.getElementById("character-painwheel"),
	document.getElementById("character-filia"),
	document.getElementById("character-cerebella"),
	document.getElementById("character-valentine"),
	document.getElementById("character-parasoul"),
	document.getElementById("character-double"),
	document.getElementById("character-fukua"),
	document.getElementById("character-beowulf"),
	document.getElementById("character-robofortune"),
	document.getElementById("character-umbrella"),
	document.getElementById("character-annie"),
	document.getElementById("character-blackdahlia"),
];

const pageMusic = new Audio("audio/music/SG - select_loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/SG - select_intro.ogg");
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
	cursor: new Audio("audio/sfx/sg/selectslide.p1.2.ogg"),
	portrait: new Audio("audio/sfx/sg/charportrait.fadein.whoosh.p1.ogg"),
	confirm: new Audio("audio/sfx/sg/selectconfirm.p1.3.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.portrait.volume = 0.2;
sfx.confirm.volume = 0.2;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	if (charFileName !== previousCharacter && interactionEnabled) {
		var charFileName = targetChar.onclick.toString().split("'")[1];

        sfx.cursor.currentTime = 0;
        sfx.cursor.play();
		sfx.portrait.currentTime = 0;
		sfx.portrait.play();

		Array.prototype.slice.call(document.getElementsByClassName("css-character")).forEach(element => {
			element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon.webp";
			if (element.children[0].src.includes("/" + charFileName + "_icon")) {
				element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon_selected.webp";
			}
		});
        
        chrPrevImg.src = `img/portraits/sg/${charFileName}.webp`;
		chrPrevImg.style.opacity = 1;
        chrSymbol.src = `img/characterSelect/sg/Symbol_${charFileName}.webp`;

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

document.getElementById("character-random").addEventListener("mouseover",
	(event) => {
		charFileName = "Random";

		chrPrevImg.src = "";
		chrPrevImg.style.opacity = 0;
		chrSymbol.src = "img/characterSelect/sg/Symbol_none.webp";

		sfx.cursor.pause();
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();

		Array.prototype.slice.call(document.getElementsByClassName("css-character")).forEach(element => {
			element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon.webp";
			if (element.children[0].src.includes("/" + charFileName + "_icon")) {
				element.children[0].src = element.children[0].src.split("_icon")[0] + "_icon_selected.webp";
			}
		});

		previousCharacter = charFileName;
	}
);

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
				chrPrevImg.style.opacity = 1;
				continue reroll;
			} else {
				break reroll;
			}
		}

		chrPrevImg.src = "img/portraits/sg/" + characterName + ".webp";
		chrSymbol.src = "img/characterSelect/sg/Symbol_" + characterName + ".webp";

        var displayInfo;
		
		switch (characterName) {
			case "Marie":
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
			case "Squigly":
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
			case "Big_Band":
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
			case "Eliza":
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
			case "Ms._Fortune":
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
			case "Peacock":
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
			case "Painwheel":
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
			case "Filia":
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
			case "Cerebella":
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
			case "Valentine":
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
			case "Parasoul":
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
			case "Double":
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
			case "Fukua":
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
			case "Beowulf":
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
			case "Robo-Fortune":
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
			case "Umbrella":
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
			case "Annie":
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
			case "Black_Dahlia":
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

        updateOV2(displayInfo, "sg");
	}
}

const chrImg = {
	marie: document.getElementById("css-marie"),
	squigly: document.getElementById("css-squigly"),
	band: document.getElementById("css-band"),
	eliza: document.getElementById("css-eliza"),
	fortune: document.getElementById("css-fortune"),
	peacock: document.getElementById("css-peacock"),
	painwheel: document.getElementById("css-painwheel"),
	filia: document.getElementById("css-filia"),
	random: document.getElementById("css-random"),
	cerebella: document.getElementById("css-cerebella"),
	valentine: document.getElementById("css-valentine"),
	parasoul: document.getElementById("css-parasoul"),
	double: document.getElementById("css-double"),
	fukua: document.getElementById("css-fukua"),
	beowulf: document.getElementById("css-beowulf"),
	robo: document.getElementById("css-robo"),
	umbrella: document.getElementById("css-umbrella"),
	annie: document.getElementById("css-annie"),
	dahlia: document.getElementById("css-dahlia"),
}

$(window).resize(setLocations);

function setLocations() {
	var chrCoords = [316,155, 409,250];
	autoResize("css-fullroster", chrSel[0], chrCoords, chrImg.marie);
	
	chrCoords = [211,263, 304,358];
	autoResize("css-fullroster", chrSel[1], chrCoords, chrImg.squigly);
	
	chrCoords = [316,263, 409,358];
	autoResize("css-fullroster", chrSel[2], chrCoords, chrImg.band);
	
	chrCoords = [422,263, 515,358];
	autoResize("css-fullroster", chrSel[3], chrCoords, chrImg.eliza);
	
	chrCoords = [211,370, 304,466];
	autoResize("css-fullroster", chrSel[4], chrCoords, chrImg.fortune);
	
	chrCoords = [316,370, 409,466];
	autoResize("css-fullroster", chrSel[5], chrCoords, chrImg.peacock);
	
	chrCoords = [423,370, 516,466];
	autoResize("css-fullroster", chrSel[6], chrCoords, chrImg.painwheel);
	
	chrCoords = [210,477, 304,573];
	autoResize("css-fullroster", chrSel[7], chrCoords, chrImg.filia);
	
	chrCoords = [315,477, 409,573];
	autoResize("css-fullroster", document.getElementById("character-random"), chrCoords, chrImg.random);
	
	chrCoords = [422,477, 516,573];
	autoResize("css-fullroster", chrSel[8], chrCoords, chrImg.cerebella);
	
	chrCoords = [210,585, 304,681];
	autoResize("css-fullroster", chrSel[9], chrCoords, chrImg.valentine);
	
	chrCoords = [315,585, 409,681];
	autoResize("css-fullroster", chrSel[10], chrCoords, chrImg.parasoul);
	
	chrCoords = [421,585, 516,681];
	autoResize("css-fullroster", chrSel[11], chrCoords, chrImg.double);
	
	chrCoords = [210,694, 304,789];
	autoResize("css-fullroster", chrSel[12], chrCoords, chrImg.fukua);
	
	chrCoords = [315,694, 409,789];
	autoResize("css-fullroster", chrSel[13], chrCoords, chrImg.beowulf);
	
	chrCoords = [421,694, 516,789];
	autoResize("css-fullroster", chrSel[14], chrCoords, chrImg.robo);
	
	chrCoords = [210,802, 304,898];
	autoResize("css-fullroster", chrSel[15], chrCoords, chrImg.umbrella);
	
	chrCoords = [315,802, 409,898];
	autoResize("css-fullroster", chrSel[16], chrCoords, chrImg.annie);
	
	chrCoords = [422,802, 515,898];
	autoResize("css-fullroster", chrSel[17], chrCoords, chrImg.dahlia);
}

setLocations();