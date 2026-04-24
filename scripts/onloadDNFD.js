const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-brawler"),
	document.getElementById("character-hitman"),
	document.getElementById("character-swiftmaster"),
	document.getElementById("character-ranger"),
	document.getElementById("character-berserker"),
	document.getElementById("character-random"),
	document.getElementById("character-vanguard"),
	document.getElementById("character-launcher"),
	document.getElementById("character-enchantress"),
	document.getElementById("character-troubleshooter"),
	document.getElementById("character-battlemage"),
	document.getElementById("character-monk"),
	document.getElementById("character-dragonknight"),
	document.getElementById("character-kunoichi"),
	document.getElementById("character-inquisitor"),
	document.getElementById("character-striker"),
	document.getElementById("character-lostwarrior"),
	document.getElementById("character-grappler"),
	document.getElementById("character-crusader"),
	document.getElementById("character-ghostblade"),
	document.getElementById("character-spectre"),
	document.getElementById("character-nenmaster"),
];

const pageMusic = new Audio("audio/music/DNFD - Linking.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.08;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/dnfd/SE_Menu_CharaCursor.ogg"),
	colorCursor: new Audio("audio/sfx/dnfd/SE_Menu_Cursor.ogg"),
	confirm: new Audio("audio/sfx/dnfd/SE_Menu_CharaDecide.ogg"),
	cancel: new Audio("audio/sfx/dnfd/SE_Menu_Cancel.ogg"),
}
sfx.cursor.volume = 0.6;
sfx.colorCursor.volume = 0.3;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.25;

var previewDisplayOn = true;
var interactionEnabled = true;

// Display on hover

function hoverDisplay(targetChar) {
	if (interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			var charFileName = targetChar.onclick.toString().split("'")[1];
			var scaleMeasures = targetChar.dataset.scale.split(",");

			if (chrPrevImg.src.includes(".png")) {
				document.getElementById("info-portrait-temp").src = chrPrevImg.src;
				document.getElementById("info-portrait-temp").style.transform = chrPrevImg.style.transform;
			}

			chrPrevImg.src = "img/portraits/dnfd/" + charFileName + ".png";
			chrName.src = "img/characterSelect/dnfd/Nameplate_" + charFileName + ".png";
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";

			chrPrevImg.classList.remove("portrait-onhover");
			void chrPrevImg.offsetWidth;
			chrPrevImg.classList.add("portrait-onhover");
			document.getElementById("info-portrait-temp").classList.remove("tempportrait-onhover");
			void document.getElementById("info-portrait-temp").offsetWidth;
			document.getElementById("info-portrait-temp").classList.add("tempportrait-onhover");
		}
	}
}

function positionCursor(positionID) {
	if (interactionEnabled) {
		var csCursor = document.getElementById("select-cursor");
		console.log(positionID);
		csCursor.src = "img/characterSelect/dnfd/Cursor_1.png";
		csCursor.style.width = "238px";
		csCursor.style.height = "126px";
		csCursor.style.transform = "";
		if (positionID < 5) {
			csCursor.style.left = Math.floor(positionID % 11) * 144 - 27 + "px";
			csCursor.style.top = "-18px";
		} else if (positionID > 16) {
			csCursor.style.left = Math.floor(positionID % 11) * 144 - 18 + "px";
			csCursor.style.top = "92px";
		} else if (positionID > 5 && positionID < 11) {
			csCursor.style.transform = "scale(-1,1)";
			csCursor.style.left = Math.floor(positionID % 11) * 144 - 20 + "px";
			csCursor.style.top = "-18px";
		} else if (positionID > 10 && positionID < 16) {
			csCursor.style.transform = "scale(-1,1)";
			csCursor.style.left = Math.floor(positionID % 11) * 144 - 28 + "px";
			csCursor.style.top = "92px";
		} else if (positionID === 5) {
			csCursor.src = "img/characterSelect/dnfd/Cursor_2.png";
			csCursor.style.width = "246px";
			csCursor.style.height = "127px";
			csCursor.style.left = Math.floor(positionID % 11) * 144 - 27 + "px";
			csCursor.style.top = "-18px";
		} else if (positionID === 16) {
			csCursor.src = "img/characterSelect/dnfd/Cursor_3.png";
			csCursor.style.width = "246px";
			csCursor.style.height = "127px";
			csCursor.style.left = Math.floor(positionID % 11) * 144 - 27 + "px";
			csCursor.style.top = "92px";
		}
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target);
			positionCursor(chrSel.indexOf(event.target));
		}
	);
});

// Display on click

var banter = new Audio();

function runDisplay(characterName) {
	if (interactionEnabled) {
		previewDisplayOn = false;
        interactionEnabled = false;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		reroll: while (true) {
			if (characterName === "Random") {
				characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];
				continue reroll;
			} else {
				break reroll;
			}
		}
		
		initializeOV("experimental");

		chrPrevImg.src = "img/portraits/dnfd/" + characterName + ".png";
		chrName.src = "img/characterSelect/dnfd/Nameplate_" + characterName + ".png";

		var scaleMeasures = chrSel[chrSel.indexOf(document.getElementById("character-" + characterName.toLowerCase().replace("_","")))].dataset.scale.split(",");
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		
        if (!banter.paused) {
			banter.pause();
		}

        banter = new Audio("audio/sfx/dnfd/banter/" + characterName + "_select.ogg");
        banter.volume = 0.2;
        banter.play();
		
		switch (characterName) {
			case "Brawler":
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
			case "Hitman":
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
			case "Swift_Master":
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
			case "Ranger":
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
			case "Berserker":
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
			case "Vanguard":
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
			case "Launcher":
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
			case "Enchantress":
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
			case "Trouble_Shooter":
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
			case "Battle_Mage":
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
			case "Monk":
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
			case "Dragon_Knight":
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
			case "Kunoichi":
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
			case "Inquisitor":
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
			case "Striker":
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
			case "Lost_Warrior":
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
			case "Grappler":
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
			case "Crusader":
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
			case "Ghostblade":
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
			case "Spectre":
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
			case "Nen_Master":
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

		updateOV2(displayInfo, "dnfd");
	}
}

/*$(window).resize(setLocations);

// Keep in mind coordinates were measured at half scale rather than full scale
// 'cause I'm a dummy dumb brain
// So they might be slightly inaccurate
function setLocations() {
	// Brawler
	var chrCoords = [60,0, 183,0, 125,90, 1,90];
	var iconPos = [1,0];
	autoResize("selectbox-fullroster", selBrawler, chrCoords, portBrawler, iconPos, posBrawler);
	
	// Hitman
	chrCoords = [204,0, 327,0, 269,90, 145,90];
	iconPos = [145,0];
	autoResize("selectbox-fullroster", selHitman, chrCoords, portHitman, iconPos, posHitman);
	
	// Swift Master
	chrCoords = [348,0, 471,0, 413,90, 289,90];
	iconPos = [289,0];
	autoResize("selectbox-fullroster", selSwiftMaster, chrCoords, portSwiftMaster, iconPos, posSwiftMaster);
	
	// Ranger
	chrCoords = [492,0, 615,0, 557,90, 433,90];
	iconPos = [433,0];
	autoResize("selectbox-fullroster", selRanger, chrCoords, portRanger, iconPos, posRanger);
	
	// Berserker
	chrCoords = [636,0, 759,0, 701,90, 577,90];
	iconPos = [577,0];
	autoResize("selectbox-fullroster", selBerserker, chrCoords, portBerserker, iconPos, posBerserker);
	
	// Random
	chrCoords = [780,0, 852,0, 911,90, 721,90];
	iconPos = [721,0];
	autoResize("selectbox-fullroster", selRandom, chrCoords, portRandom, iconPos, posRandom);
	
	// Vanguard
	chrCoords = [873,0, 996,0, 1055,90, 931,90];
	iconPos = [872,0];
	autoResize("selectbox-fullroster", selVanguard, chrCoords, portVanguard, iconPos, posVanguard);
	
	// Launcher
	chrCoords = [1017,0, 1140,0, 1199,90, 1075,90];
	iconPos = [1016,0];
	autoResize("selectbox-fullroster", selLauncher, chrCoords, portLauncher, iconPos, posLauncher);
	
	// Enchantress
	chrCoords = [1161,0, 1284,0, 1343,90, 1219,90];
	iconPos = [1160,0];
	autoResize("selectbox-fullroster", selEnchantress, chrCoords, portEnchantress, iconPos, posEnchantress);
	
	// Trouble Shooter
	chrCoords = [1305,0, 1428,0, 1487,90, 1363,90];
	iconPos = [1304,0];
	autoResize("selectbox-fullroster", selTroubleShooter, chrCoords, portTroubleShooter, iconPos, posTroubleShooter);
	
	// Battle Mage
	chrCoords = [1449,0, 1572,0, 1631,90, 1507,90];
	iconPos = [1448,0];
	autoResize("selectbox-fullroster", selBattleMage, chrCoords, portBattleMage, iconPos, posBattleMage);
	
	// Monk
	chrCoords = [1,110, 124,110, 183,200, 59,200];
	iconPos = [0,110];
	autoResize("selectbox-fullroster", selMonk, chrCoords, portMonk, iconPos, posMonk);
	
	// Dragon Knight
	chrCoords = [145,110, 268,110, 327,200, 203,200];
	iconPos = [144,110];
	autoResize("selectbox-fullroster", selDragonKnight, chrCoords, portDragonKnight, iconPos, posDragonKnight);
	
	// Kunoichi
	chrCoords = [289,110, 412,110, 471,200, 347,200];
	iconPos = [288,110];
	autoResize("selectbox-fullroster", selKunoichi, chrCoords, portKunoichi, iconPos, posKunoichi);
	
	// Inquisitor
	chrCoords = [433,110, 556,110, 615,200, 491,200];
	iconPos = [432,110];
	autoResize("selectbox-fullroster", selInquisitor, chrCoords, portInquisitor, iconPos, posInquisitor);
	
	// Striker
	chrCoords = [577,110, 700,110, 759,200, 635,200];
	iconPos = [576,110];
	autoResize("selectbox-fullroster", selStriker, chrCoords, portStriker, iconPos, posStriker);
	
	// Lost Warrior
	chrCoords = [720,110, 912,110, 853,200, 779,200];
	iconPos = [720,110];
	autoResize("selectbox-fullroster", selLostWarrior, chrCoords, portLostWarrior, iconPos, posLostWarrior);
	
	// Grappler
	chrCoords = [932,110, 1055,110, 997,200, 873,200];
	iconPos = [873,110];
	autoResize("selectbox-fullroster", selGrappler, chrCoords, portGrappler, iconPos, posGrappler);
	
	// Crusader
	chrCoords = [1076,110, 1199,110, 1141,200, 1017,200];
	iconPos = [1017,110];
	autoResize("selectbox-fullroster", selCrusader, chrCoords, portCrusader, iconPos, posCrusader);
	
	// Ghostblade
	chrCoords = [1220,110, 1343,110, 1285,200, 1161,200];
	iconPos = [1161,110];
	autoResize("selectbox-fullroster", selGhostblade, chrCoords, portGhostblade, iconPos, posGhostblade);
	
	// Spectre
	chrCoords = [1364,110, 1487,110, 1429,200, 1305,200];
	iconPos = [1305,110];
	autoResize("selectbox-fullroster", selSpectre, chrCoords, portSpectre, iconPos, posSpectre);
	
	// Nen Master
	chrCoords = [1508,110, 1631,110, 1573,200, 1449,200];
	iconPos = [1449,110];
	autoResize("selectbox-fullroster", selNenMaster, chrCoords, portNenMaster, iconPos, posNenMaster);
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setTimeout(setLocations, 1);*/