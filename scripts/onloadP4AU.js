const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-margaret"),
	document.getElementById("character-ken"),
	document.getElementById("character-sho"),
	document.getElementById("character-yukari"),
	document.getElementById("character-naoto"),
	document.getElementById("character-labrys"),
	document.getElementById("character-teddie"),
	document.getElementById("character-mitsuru"),
	document.getElementById("character-yukiko"),
	document.getElementById("character-aigis"),
	document.getElementById("character-narukami"),
	document.getElementById("character-adachi"),
	document.getElementById("character-yosuke"),
	document.getElementById("character-elizabeth"),
	document.getElementById("character-chie"),
	document.getElementById("character-akihiko"),
	document.getElementById("character-kanji"),
	document.getElementById("character-slabrys"),
	document.getElementById("character-minazuki"),
	document.getElementById("character-junpei"),
	document.getElementById("character-marie"),
	document.getElementById("character-rise"),
];

const chrImg = {
	margaret: document.getElementById("css-margaret"),
	ken: document.getElementById("css-ken"),
	sho: document.getElementById("css-sho"),
	yukari: document.getElementById("css-yukari"),
	naoto: document.getElementById("css-naoto"),
	labrys: document.getElementById("css-labrys"),
	teddie: document.getElementById("css-teddie"),
	mitsuru: document.getElementById("css-mitsuru"),
	yukiko: document.getElementById("css-yukiko"),
	aigis: document.getElementById("css-aigis"),
	narukami: document.getElementById("css-narukami"),
	adachi: document.getElementById("css-adachi"),
	yosuke: document.getElementById("css-yosuke"),
	elizabeth: document.getElementById("css-elizabeth"),
	chie: document.getElementById("css-chie"),
	akihiko: document.getElementById("css-akihiko"),
	kanji: document.getElementById("css-kanji"),
	slabrys: document.getElementById("css-slabrys"),
	minazuki: document.getElementById("css-minazuki"),
	junpei: document.getElementById("css-junpei"),
	marie: document.getElementById("css-marie"),
	rise: document.getElementById("css-rise"),
}

const pageMusic = new Audio("audio/music/P4AU - Electronica In Velvet Room Loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.1;
pageMusic.preload = "auto";
pageMusic.currentTime = 20.58;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/p4au/p4auCursor.ogg"),
	confirm: new Audio("audio/sfx/p4au/p4auConfirm.ogg"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;

var interactionEnabled = true;

// Display on hover

function clearDisplay() {
	chrPrevImg.style.backgroundImage = "";
	chrName.src = "";
}

var previousCharacter = "";
var toggleShadow = false;
var shadowCharacters = ["Ken_Amada","Yukari_Takeba","Naoto_Shirogane","Labrys","Teddie","Mitsuru_Kirijo","Yukiko_Amagi","Aigis","Yu_Narukami","Yosuke_Hanamura","Chie_Satonaka","Akihiko_Sanada","Kanji_Tatsumi","Junpei_Iori","Rise_Kujikawa"];

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	var scaleMeasures = targetChar.dataset.offset.split(",");
	if (charFileName !== previousCharacter && interactionEnabled) {
		if (toggleShadow && shadowCharacters.includes(charFileName) || !toggleShadow) {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();

			Array.prototype.slice.call(document.getElementsByClassName("css-character")).forEach(element => {
				element.style.opacity = 0;
				if (element.children[0].src.includes("/" + charFileName + "_icon")) {
					element.style.opacity = 1;
				}
			});

			console.log(shadowCharacters.includes(charFileName));

			if (toggleShadow && shadowCharacters.includes(charFileName)) {
				chrPrevImg.style.backgroundImage = "url('img/portraits/p4au/" + charFileName + "_(Shadow)_cut.png')";
			} else {
				chrPrevImg.style.backgroundImage = "url('img/portraits/p4au/" + charFileName + "_cut.png')";
			}
			chrName.src = "img/characterSelect/p4au/Nameplate_" + charFileName + ".png";
			chrPrevImg.style.backgroundSize = `${scaleMeasures[0]}%`;
			chrPrevImg.style.backgroundPosition = `top ${scaleMeasures[1]}% left ${scaleMeasures[2]}%`;
			
			document.getElementById("info-portrait-positioner").classList.remove("portrait-onhover");
			chrName.classList.remove("name-onhover");
			void document.getElementById("info-portrait-positioner").offsetWidth;
			void chrName.offsetWidth;
			document.getElementById("info-portrait-positioner").classList.add("portrait-onhover");
			chrName.classList.add("name-onhover");

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

function altDisplay() {
	if (interactionEnabled) {
		toggleShadow = !toggleShadow;
		var urlName = chrPrevImg.style.backgroundImage.split("/");
		urlName = urlName[urlName.length - 1].slice(0, -10)
		
		console.log(urlName);
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();

		if (toggleShadow) {
			document.getElementById("type-select").firstElementChild.src = "img/characterSelect/p4au/Type_Shadow.png";

			if (shadowCharacters.includes(urlName)) {
				chrPrevImg.style.backgroundImage = `url('img/portraits/p4au/${urlName}_(Shadow)_cut.png')`;
				
				document.getElementById("info-portrait-positioner").classList.remove("portrait-onhover");
				chrName.classList.remove("name-onhover");
				void document.getElementById("info-portrait-positioner").offsetWidth;
				void chrName.offsetWidth;
				document.getElementById("info-portrait-positioner").classList.add("portrait-onhover");
				chrName.classList.add("name-onhover");
			} else {
				chrPrevImg.style.backgroundImage = "";
				chrName.src = "";

				Array.prototype.slice.call(document.getElementsByClassName("css-character")).forEach(element => {
					element.style.opacity = 0;
				});

				previousCharacter = "";
			}
		} else {
			document.getElementById("type-select").firstElementChild.src = "img/characterSelect/p4au/Type_Normal.png";
				
			if (urlName.includes("(Shadow)")) {
				urlName = urlName.split("_(Shadow)")[0];
				chrPrevImg.style.backgroundImage = `url('img/portraits/p4au/${urlName}_cut.png')`;

				document.getElementById("info-portrait-positioner").classList.remove("portrait-onhover");
				chrName.classList.remove("name-onhover");
				void document.getElementById("info-portrait-positioner").offsetWidth;
				void chrName.offsetWidth;
				document.getElementById("info-portrait-positioner").classList.add("portrait-onhover");
				chrName.classList.add("name-onhover");
			}
		}
	}
}

// Display on click

function runDisplay(characterName) {
	if (toggleShadow && !shadowCharacters.includes(characterName)) {
		// 
	} else if (interactionEnabled) {
		if (toggleShadow && shadowCharacters.includes(characterName)) {
			characterName = characterName + "_(Shadow)";
		}
		interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV();
			
		// chrPrevImg.style.backgroundImage = "url('img/portraits/p4au/" + charFileName + "_cut.png')";
		// chrPrevImg.style.backgroundSize = portraitScaling[0];
		// chrPrevImg.style.backgroundPosition = portraitScaling[1];
		// if (isShadow) {
		// 	charFileName = charFileName.slice(0, -9);
		// }
		// chrName.src = "img/characterSelect/p4au/Nameplate_" + charFileName + ".png";

        var displayInfo;
		
		switch (characterName) {
			case "Margaret":
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
			case "Ken_Amada":
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
			case "Sho":
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
			case "Yukari_Takeba":
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
			case "Aigis":
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
			case "Shadow_Labrys":
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
			case "Minazuki":
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
			case "Junpei_Iori":
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
			case "Rise_Kujikawa":
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
			case "Ken_Amada_(Shadow)":
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
			case "Yukari_Takeba_(Shadow)":
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
			case "Naoto_Shirogane_(Shadow)":
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
			case "Labrys_(Shadow)":
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
			case "Teddie_(Shadow)":
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
			case "Mitsuru_Kirijo_(Shadow)":
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
			case "Yukiko_Amagi_(Shadow)":
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
			case "Aigis_(Shadow)":
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
			case "Yu_Narukami_(Shadow)":
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
			case "Yosuke_Hanamura_(Shadow)":
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
			case "Chie_Satonaka_(Shadow)":
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
			case "Akihiko_Sanada_(Shadow)":
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
			case "Kanji_Tatsumi_(Shadow)":
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
			case "Junpei_Iori_(Shadow)":
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
			case "Rise_Kujikawa_(Shadow)":
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

        updateOV2(displayInfo, "p4au");
	}
}

$(window).resize(setLocations);

function setLocations() {
	var chrCoords = [0,612, 189,593, 223,698, 203,737, 65,782, 23,761, 0,692];
	autoResize("css-fullroster", chrSel[0], chrCoords, chrImg.margaret);
	
	chrCoords = [66,785, 203,740, 244,761, 277,864, 92,973, 45,827];
	autoResize("css-fullroster", chrSel[1], chrCoords, chrImg.ken);
	
	chrCoords = [193,527, 384,564, 409,641, 392,676, 266,717, 226,697];
	autoResize("css-fullroster", chrSel[2], chrCoords, chrImg.sho);
	
	chrCoords = [266,720, 392,679, 428,698, 452,773, 281,863, 247,760];
	autoResize("css-fullroster", chrSel[3], chrCoords, chrImg.yukari);
	
	chrCoords = [389,564, 557,530, 578,592, 563,620, 448,657, 413,640];
	autoResize("css-fullroster", chrSel[4], chrCoords, chrImg.naoto);
	
	chrCoords = [450,660, 564,623, 593,638, 613,699, 456,771, 431,696];
	autoResize("css-fullroster", chrSel[5], chrCoords, chrImg.labrys);
	
	chrCoords = [561,529, 712,492, 730,546, 718,569, 608,605, 581,591];
	autoResize("css-fullroster", chrSel[6], chrCoords, chrImg.teddie);
	
	chrCoords = [609,609, 719,573, 743,584, 760,639, 617,697, 596,635];
	autoResize("css-fullroster", chrSel[7], chrCoords, chrImg.mitsuru);
	
	chrCoords = [716,491, 858,451, 874,500, 863,522, 756,557, 733,545];
	autoResize("css-fullroster", chrSel[8], chrCoords, chrImg.yukiko);
	
	chrCoords = [758,560, 863,526, 886,536, 903,586, 764,637, 746,583];
	autoResize("css-fullroster", chrSel[9], chrCoords, chrImg.aigis);
	
	chrCoords = [862,450, 992,407, 1009,456, 997,479, 900,510, 877,498];
	autoResize("css-fullroster", chrSel[10], chrCoords, chrImg.narukami);
	
	chrCoords = [902,513, 998,482, 1021,494, 1037,542, 907,586, 890,536];
	autoResize("css-fullroster", chrSel[11], chrCoords, chrImg.adachi);
	
	chrCoords = [996,406, 1135,355, 1153,410, 1142,431, 1034,467, 1012,456];
	autoResize("css-fullroster", chrSel[12], chrCoords, chrImg.yosuke);
	
	chrCoords = [1036,470, 1142,435, 1166,448, 1182,501, 1040,542, 1024,492];
	autoResize("css-fullroster", chrSel[13], chrCoords, chrImg.elizabeth);
	
	chrCoords = [1138,353, 1283,295, 1303,357, 1289,384, 1179,420, 1156,408];
	autoResize("css-fullroster", chrSel[14], chrCoords, chrImg.chie);
	
	chrCoords = [1179,424, 1290,387, 1317,401, 1337,463, 1187,501, 1168,446];
	autoResize("css-fullroster", chrSel[15], chrCoords, chrImg.akihiko);
	
	chrCoords = [1286,293, 1443,221, 1468,296, 1450,332, 1334,369, 1306,355];
	autoResize("css-fullroster", chrSel[16], chrCoords, chrImg.kanji);
	
	chrCoords = [1335,373, 1450,336, 1486,354, 1510,428, 1341,463, 1321,401];
	autoResize("css-fullroster", chrSel[17], chrCoords, chrImg.slabrys);
	
	chrCoords = [1446,219, 1618,130, 1652,233, 1631,273, 1506,313, 1471,296];
	autoResize("css-fullroster", chrSel[18], chrCoords, chrImg.minazuki);
	
	chrCoords = [1508,316, 1632,276, 1673,297, 1706,399, 1515,428, 1489,352];
	autoResize("css-fullroster", chrSel[19], chrCoords, chrImg.junpei);
	
	chrCoords = [1622,128, 1806,19, 1854,165, 1832,207, 1695,252, 1655,232];
	autoResize("css-fullroster", chrSel[20], chrCoords, chrImg.marie);
	
	chrCoords = [1696,255, 1833,211, 1876,233, 1920,367, 1920,377, 1710,399, 1676,295];
	autoResize("css-fullroster", chrSel[21], chrCoords, chrImg.rise);
	
	document.getElementById("info-portrait-positioner").style.height = document.getElementsByClassName("css-fullroster")[0].clientHeight * 0.7 + "px";
	
	chrPrevImg.style.width = document.getElementsByClassName("css-fullroster")[0].clientWidth + "px";
	chrPrevImg.style.height = document.getElementsByClassName("css-fullroster")[0].clientHeight + "px";
	
	chrName.style.height = document.getElementsByClassName("css-fullroster")[0].clientHeight * 0.14 + "px";
	chrName.style.left = document.getElementsByClassName("css-fullroster")[0].clientWidth * 0.44 + "px";
	chrName.style.top = document.getElementsByClassName("css-fullroster")[0].clientHeight * 0.18 + "px";
	
	// document.getElementsByClassName("description-area")[0].style.left = document.getElementsByClassName("css-fullroster")[0].clientWidth * 0.52 + "px";
	// document.getElementsByClassName("description-area")[0].style.top = document.getElementsByClassName("css-fullroster")[0].clientHeight * 0.46 + "px";
}

document.getElementsByClassName("css-fullroster")[0].onload = setTimeout(setLocations, 1);