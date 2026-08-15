const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-aoko"),
	document.getElementById("character-shiki"),
	document.getElementById("character-hime"),
	document.getElementById("character-nanaya"),
	document.getElementById("character-kouma"),
	document.getElementById("character-miyako"),
	document.getElementById("character-ciel"),
	document.getElementById("character-sion"),
	document.getElementById("character-riesbyfe"),
	document.getElementById("character-vsion"),
	document.getElementById("character-warachia"),
	document.getElementById("character-roa"),
	document.getElementById("character-maids"),
	document.getElementById("character-akiha"),
	document.getElementById("character-arcueid"),
	document.getElementById("character-pciel"),
	document.getElementById("character-warc"),
	document.getElementById("character-vakiha"),
	document.getElementById("character-mech"),
	document.getElementById("character-seifuku"),
	document.getElementById("character-satsuki"),
	document.getElementById("character-len"),
	document.getElementById("character-ryougi"),
	document.getElementById("character-wlen"),
	document.getElementById("character-nero"),
	document.getElementById("character-necochaos"),
	document.getElementById("character-kohakumech"),
	document.getElementById("character-hisui"),
	document.getElementById("character-neco"),
	document.getElementById("character-kohaku"),
	document.getElementById("character-necomech"),
]

const pageMusic = new Audio("audio/music/MBAACC - Actor's Anteroom -Remastering- loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2 * volumeModifier;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/MBAACC - Actor's Anteroom -Remastering- intro.ogg");
pageMusicIntro.volume = 0.2 * volumeModifier;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/mbaacc/cursor.ogg"),
	confirm: new Audio("audio/sfx/mbaacc/confirm.ogg"),
}
sfx.cursor.volume = 0.5;
sfx.confirm.volume = 0.5;

var interactionEnabled = false;
var styleInteraction = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(characterName, charIcon) {
	if (characterName !== previousCharacter && interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();

		chrPrevImg.src = "img/portraits/mbaacc/" + characterName + ".png";
		chrPrevImg.onload = function() {
			chrPrevImg.style.height = chrPrevImg.naturalHeight * 1.8 + "px";
			document.getElementById("info-portrait-temp").style.height = chrPrevImg.style.height;
		};
		chrName.innerHTML = "<span style='font-size: 1.6em; font-style: italic'>" + charIcon.dataset.nameJp + "</span><br>";
		if (characterName === "Aoko_Aozaki" || characterName === "Shiki_Tohno" || characterName === "Shiki_Nanaya" || characterName === "Kouma_Kishima" || characterName === "Miyako_Arima" || characterName === "Akiha_Tohno" || characterName === "Shiki_Ryougi") {
			chrName.innerHTML += characterName.split("_")[1].toUpperCase() + " " + characterName.split("_")[0].toUpperCase();
		} else if (characterName === "Archetype_Earth") {
			chrName.innerHTML += "ARCHETYPE:EARTH";
		} else if (characterName === "Hisui_&_Kohaku") {
			chrName.innerHTML += "HISUI&KOHAKU";
		} else if (characterName === "Arcueid_Brunestud") {
			chrName.innerHTML += "ARCUEID=BRUNESTUD";
		} else if (characterName === "Powered_Ciel") {
			chrName.innerHTML += "POWERD CIEL";
		} else if (characterName === "Akiha_Tohno_(Seifuku)") {
			chrName.innerHTML += "TOHNO AKIHA";
		} else if (characterName === "Satsuki_Yumizuka") {
			chrName.innerHTML += "YUMIDUKA SATSUKI";
		} else if (characterName === "Kohaku_&_Mech") {
			chrName.innerHTML += "KOHA & MECH";
		} else {
			chrName.innerHTML += characterName.replace(/_/g, " ").toUpperCase();
		}

		document.getElementById("info-portrait-temp").src = chrPrevImg.src;

		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrName.offsetWidth;
		chrName.classList.add("name-onhover");

		previousCharacter = characterName;
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1], element.children[0].children[0]);
		}
	);
});

document.getElementById("moonstyle-c").addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	}
);
document.getElementById("moonstyle-h").addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	}
);
document.getElementById("moonstyle-f").addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	}
);

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		if (interactionEnabled && previousCharacter !== "Random") {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			chrPrevImg.src = "";
			chrName.innerHTML = "";
			previousCharacter = "Random";
		}
	}
);

// Display on click

var selectBanter = new Audio();
function runDisplay(characterName, moonType = "") {
	var moonStyleBox = document.getElementById("moonstyle-area");

	if (moonType === "" && styleInteraction && interactionEnabled) {
		interactionEnabled = false;
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();

		moonStyleBox.style.transform = "translate(0,0)";

		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
			previousCharacter = characterName;
			chrPrevImg.src = "img/portraits/mbaacc/" + characterName + ".png";
			chrPrevImg.onload = function() {
				chrPrevImg.style.height = chrPrevImg.naturalHeight * 1.8 + "px";
				document.getElementById("info-portrait-temp").style.height = chrPrevImg.style.height;
			};
			
			var charIcon;
			chrSel.forEach(element => {
				if (element.onclick.toString().includes("'" + characterName + "'")) {
					charIcon = element.children[0].children[0];
				}
			});

			chrName.innerHTML = "<span style='font-size: 1.6em; font-style: italic'>" + charIcon.dataset.nameJp + "</span><br>";
			if (characterName === "Aoko_Aozaki" || characterName === "Shiki_Tohno" || characterName === "Shiki_Nanaya" || characterName === "Kouma_Kishima" || characterName === "Miyako_Arima" || characterName === "Akiha_Tohno" || characterName === "Shiki_Ryougi") {
				chrName.innerHTML += characterName.split("_")[1].toUpperCase() + " " + characterName.split("_")[0].toUpperCase();
			} else if (characterName === "Archetype_Earth") {
				chrName.innerHTML += "ARCHETYPE:EARTH";
			} else if (characterName === "Hisui_&_Kohaku") {
				chrName.innerHTML += "HISUI&KOHAKU";
			} else if (characterName === "Arcueid_Brunestud") {
				chrName.innerHTML += "ARCUEID=BRUNESTUD";
			} else if (characterName === "Powered_Ciel") {
				chrName.innerHTML += "POWERD CIEL";
			} else if (characterName === "Akiha_Tohno_(Seifuku)") {
				chrName.innerHTML += "TOHNO AKIHA";
			} else if (characterName === "Satsuki_Yumizuka") {
				chrName.innerHTML += "YUMIDUKA SATSUKI";
			} else if (characterName === "Kohaku_&_Mech") {
				chrName.innerHTML += "KOHA & MECH";
			} else {
				chrName.innerHTML += characterName.replace(/_/g, " ").toUpperCase();
			}
		}
		moonStyleBox.dataset.charName = characterName;
		
		document.getElementById("info-portrait-temp").src = "img/portraits/mbaacc/" + characterName + ".png";
	
		document.getElementById("info-portrait-temp").classList.remove("portrait-onselect");
		void document.getElementById("info-portrait-temp").offsetWidth;
		document.getElementById("info-portrait-temp").classList.add("portrait-onselect");
	} else if (moonType !== "" && styleInteraction) {
		styleInteraction = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();

		initializeOV("experimental");

		characterName = moonStyleBox.dataset.charName;
		moonStyleBox.style.transform = "";
		
		switch (characterName) {
			case "Aoko_Aozaki":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Shiki_Tohno":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Archetype_Earth":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Shiki_Nanaya":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Kouma_Kishima":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Miyako_Arima":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Ciel":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Sion_Eltnam_Atlasia":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Riesbyfe_Stridberg":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Sion_TATARI":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Warachia":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Michael_Roa_Valdamjong":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Hisui_&_Kohaku":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Akiha_Tohno":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Arcueid_Brunestud":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Powered_Ciel":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Red_Arcueid":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Akiha_Vermilion":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Mech-Hisui":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Akiha_Tohno_(Seifuku)":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Satsuki_Yumizuka":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Len":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Shiki_Ryougi":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "White_Len":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Nrvnqsr_Chaos":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Neco-Arc_Chaos":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Kohaku_&_Mech":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Hisui":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Neco-Arc":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Kohaku":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
			case "Neco_&_Mech":
				if (moonType === "C") {
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
							<p><b>Crescent Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "H") {
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
							<p><b>Half Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				} else if (moonType === "F") {
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
							<p><b>Full Moon ` + characterName.replace(/_/g, " ") + `</b> is</p>
						`,
					}
				}
				break;
		}

		updateOV2(displayInfo, "mbaacc");
	}
}

function startupDisplay() {
	var iconArray = Array.prototype.slice.call(document.getElementsByClassName("css-character"));
	iconArray = iconArray.splice(0, iconArray.length - 1);
	
	var characterIcons = [
		[
			chrSel[0],
			chrSel[1],
			chrSel[2],
			chrSel[3],
			chrSel[4],
		],
		[
			chrSel[5],
			chrSel[6],
			chrSel[7],
			chrSel[8],
			chrSel[9],
			chrSel[10],
			chrSel[11],
		],
		[
			chrSel[12],
			chrSel[13],
			chrSel[14],
			chrSel[15],
			chrSel[16],
			chrSel[17],
			chrSel[18],
		],
		[
			chrSel[19],
			chrSel[20],
			chrSel[21],
			chrSel[22],
			chrSel[23],
			chrSel[24],
			chrSel[25],
		],
		[
			chrSel[26],
			chrSel[27],
			chrSel[28],
			chrSel[29],
			chrSel[30],
		],
		document.getElementById("character-random"),
	];
	
	function addIconAnims() {
		if (columnPosition === 0 || columnPosition === 6) {
			characterIcons[2][columnPosition].classList.add("icon-onstart");
			characterIcons[1][columnPositionInverse].classList.add("icon-onstart");
			characterIcons[3][columnPositionInverse].classList.add("icon-onstart");
		} else {
			characterIcons[0][columnPosition - 1].classList.add("icon-onstart");
			characterIcons[2][columnPosition].classList.add("icon-onstart");
			characterIcons[4][columnPosition - 1].classList.add("icon-onstart");
			characterIcons[1][columnPositionInverse].classList.add("icon-onstart");
			characterIcons[3][columnPositionInverse].classList.add("icon-onstart");
		}
		
		if (columnPosition === 3) {
			characterIcons[5].classList.add("icon-onstart");
		}

		columnPosition++;
		columnPositionInverse--;
		if (columnPosition !== 7) {
			setTimeout(addIconAnims, 100);
		} else {
			setTimeout(function() {
				interactionEnabled = true;
				document.getElementsByClassName("css-container")[0].style.pointerEvents = "all";
				document.getElementById("moonstyle-area").style.transition = "all 0.5s ease-in-out";
			}, 400);
		}
	}
	
	var columnPosition = 0;
	var columnPositionInverse = 6;
	addIconAnims();
}

startupDisplay();

var textCounter = 0;
var previousValues = [];
function textDisplay() {
	const textArea = document.getElementById("background-text");
	const textContainer = document.getElementsByClassName("text-container");
	var textValues = [
		"She'll smile, and Sings a Song.",
		"So it's a hymn for Crimson moon.",
		"Open your magic circuit, and choose your partner.",
		"Images are magic.There are internal images that develop out of thought,",
		"It will be power, and become glorious.",
		"Sweet voice and Melty blood.",
		"experience and imagination,and grow into stories of information,narrative<br><span style='margin-left: 318px'>and fairytale,touching the mind, the heart and the soul.</span>",
	];
	var textSpeed = Math.random() * (3 - 1) + 1;
	// if (previousValues.length === 2 && previousValues[0] === previousValues[1] && previousValues[0] === 1) {
	// 	textSpeed *= -1;
	// } else if (previousValues.length === 2 && previousValues[0] === previousValues[1] && previousValues[0] === 0) {
		
	// } else {
		if (Math.floor(Math.random() * 2) === 1) {
			textSpeed *= -1;
		}
	// }
	var textPosition = [
		Math.floor(Math.random() * textArea.clientWidth),
		Math.floor(Math.random() * (textArea.clientHeight - 50)),
	];
	if (textSpeed > 0) {
		// previousValues.push(1);
		// ((max - clamp) - min) + min
		textPosition[0] = Math.floor(Math.random() * ((textArea.clientWidth - 300) + 150) - 150);
	} else {
		// previousValues.push(0);
		textPosition[0] = Math.floor(Math.random() * ((textArea.clientWidth) - 200) + 200);
	}
	var textSize = Math.random() * (1.6 - 1.2) + 1.2;

	textContainer[textCounter].innerHTML = `
		<div class="bg-text" style="--end-coords: ` + 6 * textSpeed + `vw; left: ` + textPosition[0] + `px; top: ` + textPosition[1] + `px; font-size: ` + textSize + `em">
			` + textValues[Math.floor(Math.random() * textValues.length)] + `
		</div>
	`

	setTimeout(function() {
		textContainer[textCounter].innerHTML = "";
	},2000);

	textCounter++;

	if (textCounter === 4) {
		textCounter = 0;
	}
	
	if (previousValues.length === 3) {
		previousValues.splice(0, 1);
	}
}

setInterval(textDisplay, 666.6666666666666666666666666666);