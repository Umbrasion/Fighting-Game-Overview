const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-ragna"),
	document.getElementById("character-jin"),
	document.getElementById("character-noel"),
	document.getElementById("character-rachel"),
	document.getElementById("character-tager"),
	document.getElementById("character-hakumen"),
	document.getElementById("character-nu"),
	document.getElementById("character-hazama"),
	document.getElementById("character-makoto"),
	document.getElementById("character-platinum"),
	document.getElementById("character-izayoi"),
	document.getElementById("character-azrael"),
	document.getElementById("character-celica"),
	document.getElementById("character-nine"),
	document.getElementById("character-naoto"),
	document.getElementById("character-susanoo"),
	document.getElementById("character-es"),
	document.getElementById("character-mai"),
	document.getElementById("character-jubei"),
	document.getElementById("character-narukami"),
	document.getElementById("character-yosuke"),
	document.getElementById("character-chie"),
	document.getElementById("character-yukiko"),
	document.getElementById("character-kanji"),
	document.getElementById("character-teddie"),
	document.getElementById("character-naotos"),
	document.getElementById("character-mitsuru"),
	document.getElementById("character-akihiko"),
	document.getElementById("character-aegis"),
	document.getElementById("character-elizabeth"),
	document.getElementById("character-labrys"),
	document.getElementById("character-adachi"),
	document.getElementById("character-hyde"),
	document.getElementById("character-linne"),
	document.getElementById("character-waldstein"),
	document.getElementById("character-carmine"),
	document.getElementById("character-orie"),
	document.getElementById("character-gordeau"),
	document.getElementById("character-merkava"),
	document.getElementById("character-vatista"),
	document.getElementById("character-seth"),
	document.getElementById("character-yuzuriha"),
	document.getElementById("character-hilda"),
	document.getElementById("character-mika"),
	document.getElementById("character-ruby"),
	document.getElementById("character-weiss"),
	document.getElementById("character-blake"),
	document.getElementById("character-yang"),
	document.getElementById("character-neo"),
	document.getElementById("character-heart"),
	document.getElementById("character-yumi"),
	document.getElementById("character-akatsuki"),
	document.getElementById("character-blitztank"),
];
const charSelOthers = {
	bg: document.getElementById("css-other"),
	bgL: document.getElementById("scrollspace-other-l"),
	bgR: document.getElementById("scrollspace-other-r"),
	bgR2: document.getElementById("scrollspace-other-r2"),
	logo: document.getElementById("logo-other"),
}

const pageMusic = new Audio("audio/music/BBTAG - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.06 * volumeModifier;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/BBTAG - Character Select intro.ogg");
pageMusicIntro.volume = 0.06 * volumeModifier;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/bbcf/400_menu_select.wav"),
	colorCursor: new Audio("audio/sfx/bbcf/400_menu_pause.wav"),
	confirm: new Audio("audio/sfx/bbcf/401_decision.wav"),
	cancel: new Audio("audio/sfx/bbcf/400_menu_cancel.wav"),
	announcer: new Audio("audio/sfx/bbtag/announcer/Charselect_call.wav"),
}
sfx.cursor.volume = 0.2;
sfx.colorCursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.2;
sfx.announcer.volume = 0.15;
sfx.announcer.play();

var interactionEnabled = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	var seriesName = targetChar.dataset.series;
	if (charFileName !== previousCharacter && interactionEnabled) {
		clearTimeout(cycleRandom);
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (chrPrevImg.src.includes(".png")) {
			document.getElementById("info-portrait-temp").src = chrPrevImg.src;
		}
		document.getElementById("info-portrait-temp").classList.remove("tempportrait-onhover");
		void document.getElementById("info-portrait-temp").offsetWidth;
		document.getElementById("info-portrait-temp").classList.add("tempportrait-onhover");
		
		if (charFileName === "Susanoo") {
			charFileName = "Susano'o";
		}

		chrPrevImg.src = "img/portraits/bbtag/" + charFileName + ".png";
		
		if (charFileName === "Es") {
			chrName.innerHTML = charFileName;
		} else if (charFileName === "Nu-13") {
			chrName.innerHTML = "&mu;-No.12-";
		} else if (seriesName === "BB") {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, "=");
		} else {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		}
		
		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		
		var seriesColor;
		switch (seriesName) {
			case "BB":
				seriesColor = "#00B2FF";
				break;
			case "P4A":
				seriesColor = "#FFFA01";
				break;
			case "UNI":
				seriesColor = "#E13CFF";
				break;
			case "RWBY":
				seriesColor = "#FF3C00";
				break;
			case "AH3":
				seriesColor = "#FF56C9";
				break;
			case "SK":
				seriesColor = "#95D0FF";
				break;
			case "AKBK":
				seriesColor = "#F1A58A";
				break;
		}
		document.getElementById("info-portrait-temp").style.filter = chrPrevImg.style.filter;
		chrPrevImg.style.filter = "drop-shadow(-10px 0px " + seriesColor + ")";
		if (seriesName === "AH3" || seriesName === "SK" || seriesName === "AKBK") {
			if (!disableExtraChange) {
				charSelOthers.bg.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.bgL.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.bgR.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.bgR2.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";

				if (seriesName === "AH3") {
					charSelOthers.logo.src = "img/logos/bbtag/AH3LMSS_logo_bbtag_select.webp";
					charSelOthers.logo.style.width = "198px";
					charSelOthers.logo.style.marginTop = "18px";
				} else if (seriesName === "SK") {
					charSelOthers.logo.src = "img/logos/bbtag/SKEV_logo_bbtag_select.webp";
					charSelOthers.logo.style.width = "198px";
					charSelOthers.logo.style.marginTop = "18px";
				} else if (seriesName === "AKBK") {
					charSelOthers.logo.src = "img/logos/bbtag/AKBK_logo_bbtag_select.webp";
					charSelOthers.logo.style.width = "190px";
					charSelOthers.logo.style.marginTop = "50px";
				}
			}
		} else {
			charSelOthers.bg.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgL.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgR.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgR2.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.logo.src = "img/logos/bbtag/AH3LMSS_logo_bbtag_select.webp";
			charSelOthers.logo.style.width = "198px";
			charSelOthers.logo.style.marginTop = "18px";
		}
        previousCharacter = charFileName;
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			disableExtraChange = false;
			hoverDisplay(element);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		if (interactionEnabled) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			disableExtraChange = true;
			randomDisplay();
			charSelOthers.bg.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgL.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgR.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgR2.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.logo.src = "img/logos/bbtag/AH3LMSS_logo_bbtag_select.webp";
			charSelOthers.logo.style.width = "198px";
			charSelOthers.logo.style.marginTop = "18px";
		}
	}
);

var cycleRandom;
var previousSelection = -1;
var disableExtraChange = false;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 53)
		if (displayCharacter === previousSelection) {
			continue reroll;
		} else {
			hoverDisplay(chrSel[displayCharacter]);
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 120);
}

// Display on click

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;
		clearTimeout(cycleRandom);

		chrPrevImg.parentElement.classList.remove("portrait-onselect");
		void chrPrevImg.parentElement.offsetWidth;
		document.getElementById("info-portrait-temp").classList.remove("tempportrait-onselect");
		void document.getElementById("info-portrait-temp").offsetWidth;
		chrPrevImg.parentElement.classList.add("portrait-onselect");
		document.getElementById("info-portrait-temp").classList.add("tempportrait-onselect");

		if (!sfx.announcer.paused) {
			sfx.announcer.pause();
		}
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
		}
		
		if (characterName === "Susanoo") {
			characterName = "Susano'o";
		}

		sfx.confirm.currentTime = 0;
		sfx.confirm.play();

		initializeOV();

		sfx.announcer.src = `audio/sfx/bbtag/announcer/${characterName}_call.wav`;
		sfx.announcer.play();

		var seriesName;
		chrSel.forEach(element => {
			if (element.onclick.toString().includes(characterName)) {
				seriesName = element.dataset.series;
			}
		});
		
		chrPrevImg.src = "img/portraits/bbtag/" + characterName + ".png";
		if (characterName == "Es") {
			chrName.innerHTML = characterName;
		} else if (characterName == "Nu-13") {
			chrName.innerHTML = "&mu;-No.12-";
		} else if (seriesName == "BB") {
			chrName.innerHTML = characterName.toUpperCase().replace(/_/g, "=");
		} else {
			chrName.innerHTML = characterName.toUpperCase().replace(/_/g, " ");
		}
		
		document.getElementById("info-portrait-temp").src = "img/portraits/bbtag/" + characterName + ".png";
		
		var seriesColor;
		switch (seriesName) {
			case "BB":
				seriesColor = "#00B2FF";
				break;
			case "P4A":
				seriesColor = "#FFFA01";
				break;
			case "UNI":
				seriesColor = "#E13CFF";
				break;
			case "RWBY":
				seriesColor = "#FF3C00";
				break;
			case "AH3":
				seriesColor = "#FF56C9";
				break;
			case "SK":
				seriesColor = "#95D0FF";
				break;
			case "AKBK":
				seriesColor = "#F1A58A";
				break;
		}
		chrPrevImg.style.filter = "drop-shadow(-10px 0px " + seriesColor + ")";
		
		switch (characterName) {
			case "Ragna_the_Bloodedge":
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
			case "Jin_Kisaragi":
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
			case "Noel_Vermillion":
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
			case "Rachel_Alucard":
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
			case "Iron_Tager":
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
			case "Hakumen":
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
			case "Nu-13":
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
			case "Hazama":
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
			case "Makoto_Nanaya":
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
			case "Platinum_the_Trinity":
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
			case "Izayoi":
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
			case "Azrael":
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
			case "Celica_A._Mercury":
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
			case "Nine_the_Phantom":
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
			case "Naoto_Kurogane":
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
			case "Susano'o":
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
			case "Es":
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
			case "Mai_Natsume":
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
			case "Jubei":
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
			case "Yu_Narukami":
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
			case "Yosuke_Hanamura":
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
			case "Chie_Satonaka":
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
			case "Yukiko_Amagi":
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
			case "Kanji_Tatsumi":
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
			case "Teddie":
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
			case "Naoto_Shirogane":
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
			case "Mitsuru_Kirijo":
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
			case "Akihiko_Sanada":
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
			case "Aegis":
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
			case "Elizabeth":
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
			case "Labrys":
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
			case "Tohru_Adachi":
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
			case "Hyde":
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
			case "Linne":
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
			case "Waldstein":
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
			case "Carmine":
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
			case "Orie":
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
			case "Gordeau":
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
			case "Merkava":
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
			case "Vatista":
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
			case "Seth":
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
			case "Yuzuriha":
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
			case "Hilda":
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
			case "Mika":
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
			case "Ruby_Rose":
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
			case "Weiss_Schnee":
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
			case "Blake_Belladonna":
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
			case "Yang_Xiao_Long":
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
			case "Neo_Politan":
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
			case "Heart_Aino":
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
			case "Yumi":
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
			case "Akatsuki":
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
			case "Blitztank":
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

		updateOV2(displayInfo, "bbtag");
	}
}

function scrollSelection(series, directionForward) {
	var scrollArea = document.getElementById("css-scroll-" + series);
	var seriesClass = "scroll-char-" + series;
	
	if (directionForward) {
		scrollArea.insertBefore(document.getElementsByClassName(seriesClass)[0], document.getElementsByClassName(seriesClass)[document.getElementsByClassName(seriesClass).length - 1].nextSibling);
	} else {
		scrollArea.insertBefore(document.getElementsByClassName(seriesClass)[document.getElementsByClassName(seriesClass).length - 1], document.getElementsByClassName(seriesClass)[0]);
	}
}