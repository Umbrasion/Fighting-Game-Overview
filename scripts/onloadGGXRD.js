const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	haehyun: document.getElementById("character-haehyun"),
	elphelt: document.getElementById("character-elphelt"),
	sol: document.getElementById("character-sol"),
	ky: document.getElementById("character-ky"),
	ramlethal: document.getElementById("character-ramlethal"),
	raven: document.getElementById("character-raven"),
	sin: document.getElementById("character-sin"),
	johnny: document.getElementById("character-johnny"),
	may: document.getElementById("character-may"),
	leo: document.getElementById("character-leo"),
	chipp: document.getElementById("character-chipp"),
	millia: document.getElementById("character-millia"),
	baiken: document.getElementById("character-baiken"),
	answer: document.getElementById("character-answer"),
	zato: document.getElementById("character-zato"),
	potemkin: document.getElementById("character-potemkin"),
	ino: document.getElementById("character-ino"),
	slayer: document.getElementById("character-slayer"),
	venom: document.getElementById("character-venom"),
	axl: document.getElementById("character-axl"),
	dizzy: document.getElementById("character-dizzy"),
	faust: document.getElementById("character-faust"),
	bedman: document.getElementById("character-bedman"),
	jacko: document.getElementById("character-jacko"),
	jam: document.getElementById("character-jam"),
	random: document.getElementById("character-random"),
}

const pageMusic = new Audio("../audio/music/GGXRD - Fizz.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.15;
pageMusic.play();

const sfx = {
	cursor: new Audio("../audio/sfx/ggxrd/cursor.ogg"),
	confirm: new Audio("../audio/sfx/ggxrd/confirm.ogg"),
	announcer: new Audio("../audio/sfx/ggxrd/announcer_intro.ogg"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.15;
sfx.announcer.volume = 1;
setTimeout(function() {sfx.announcer.play()}, 2200);

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrPrevImg.classList.remove("portrait-onhover");
	chrName.src = "";
	chrName.classList.remove("name-onhover");
}

// Relevant bug: The first time a character is hovered over the full roster will be incorrectly positioned but only if the top is being cropped out (e.g. Elphelt, Sol, Ky, & Ramlethal)
function cropOut(leftOffset = 0, rightOffset = 0, topOffset = 0, bottomOffset = 0) {
	if (rightOffset != 0) {
		document.getElementById("roster-clipper").style.inset = topOffset + "% " + rightOffset + "% " + bottomOffset + "% auto";
		document.getElementsByClassName("selectbox-fullroster")[0].style.inset = "-" + topOffset + "% -" + rightOffset + "% -" + bottomOffset + "% auto";
	} else if (bottomOffset != 0) {
		document.getElementsByClassName("selectbox-fullroster")[0].style.inset = bottomOffset + "% 0% 0%";
		document.getElementById("roster-clipper").style.inset = "auto " + rightOffset + "% " + bottomOffset + "% " + leftOffset + "%";
	} else {
		document.getElementById("roster-clipper").style.inset = topOffset + "% " + rightOffset + "% " + bottomOffset + "% " + leftOffset + "%";
		document.getElementsByClassName("selectbox-fullroster")[0].style.inset = "-" + topOffset + "% -" + rightOffset + "% -" + bottomOffset + "% -" + leftOffset + "%";
	}
}

// Display on hover

function hoverDisplay(charFileName, iconElement, inCenter = false) {
	iconElement.style.opacity = 1;
	if (!inCenter) {
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 0;
	}
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "../img/portraits/ggxrd/" + charFileName + ".png";
		chrName.src = "../img/characterSelect/ggxrd/Name_" + charFileName + ".png";
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		chrName.classList.add("name-onhover");
	}
}

chrSel.haehyun.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kum_Haehyun", document.getElementById("selectbox-haehyun"));
	}
);
chrSel.haehyun.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-haehyun").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.elphelt.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Elphelt_Valentine", document.getElementById("selectbox-elphelt"));
	}
);
chrSel.elphelt.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-elphelt").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.sol.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sol_Badguy", document.getElementById("selectbox-sol"));
	}
);
chrSel.sol.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-sol").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.ky.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Ky_Kiske", document.getElementById("selectbox-ky"));
	}
);
chrSel.ky.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-ky").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.ramlethal.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Ramlethal_Valentine", document.getElementById("selectbox-ramlethal"));
	}
);
chrSel.ramlethal.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-ramlethal").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.raven.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Raven", document.getElementById("selectbox-raven"));
	}
);
chrSel.raven.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-raven").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.sin.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sin_Kiske", document.getElementById("selectbox-sin"));
	}
);
chrSel.sin.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-sin").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.johnny.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Johnny", document.getElementById("selectbox-johnny"), true);
	}
);
chrSel.johnny.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-johnny").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.may.addEventListener("mouseover",
	(event) => {
		hoverDisplay("May", document.getElementById("selectbox-may"), true);
	}
);
chrSel.may.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-may").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.leo.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Leo_Whitefang", document.getElementById("selectbox-leo"));
	}
);
chrSel.leo.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-leo").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.chipp.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Chipp_Zanuff", document.getElementById("selectbox-chipp"));
	}
);
chrSel.chipp.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-chipp").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.millia.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Millia_Rage", document.getElementById("selectbox-millia"), true);
	}
);
chrSel.millia.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-millia").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.baiken.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Baiken", document.getElementById("selectbox-baiken"), true);
	}
);
chrSel.baiken.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-baiken").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.answer.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Answer", document.getElementById("selectbox-answer"), true);
	}
);
chrSel.answer.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-answer").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.zato.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Zato=1", document.getElementById("selectbox-zato"), true);
	}
);
chrSel.zato.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-zato").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.potemkin.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Potemkin", document.getElementById("selectbox-potemkin"));
	}
);
chrSel.potemkin.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-potemkin").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.ino.addEventListener("mouseover",
	(event) => {
		hoverDisplay("I-No", document.getElementById("selectbox-ino"));
	}
);
chrSel.ino.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-ino").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.slayer.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Slayer", document.getElementById("selectbox-slayer"), true);
	}
);
chrSel.slayer.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-slayer").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.venom.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Venom", document.getElementById("selectbox-venom"), true);
	}
);
chrSel.venom.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-venom").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.axl.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Axl_Low", document.getElementById("selectbox-axl"));
	}
);
chrSel.axl.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-axl").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.dizzy.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Dizzy", document.getElementById("selectbox-dizzy"));
	}
);
chrSel.dizzy.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-dizzy").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.faust.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Faust", document.getElementById("selectbox-faust"));
	}
);
chrSel.faust.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-faust").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.bedman.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Bedman", document.getElementById("selectbox-bedman"));
	}
);
chrSel.bedman.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-bedman").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.jacko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Jack-O'_Valentine", document.getElementById("selectbox-jacko"));
	}
);
chrSel.jacko.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-jacko").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.jam.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Jam_Kuradoberi", document.getElementById("selectbox-jam"));
	}
);
chrSel.jam.addEventListener("mouseout",
	(event) => {
		document.getElementById("selectbox-jam").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

// Random select

var cycleRandom;
chrSel.random.addEventListener("mouseover",
	(event) => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 0;
		randomDisplay();
	}
);
chrSel.random.addEventListener("mouseout",
	(event) => {
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
		clearTimeout(cycleRandom);
		document.getElementById("selectbox-haehyun").style.opacity = 0;
		document.getElementById("selectbox-elphelt").style.opacity = 0;
		document.getElementById("selectbox-sol").style.opacity = 0;
		document.getElementById("selectbox-ky").style.opacity = 0;
		document.getElementById("selectbox-ramlethal").style.opacity = 0;
		document.getElementById("selectbox-raven").style.opacity = 0;
		document.getElementById("selectbox-sin").style.opacity = 0;
		document.getElementById("selectbox-johnny").style.opacity = 0;
		document.getElementById("selectbox-may").style.opacity = 0;
		document.getElementById("selectbox-leo").style.opacity = 0;
		document.getElementById("selectbox-chipp").style.opacity = 0;
		document.getElementById("selectbox-millia").style.opacity = 0;
		document.getElementById("selectbox-baiken").style.opacity = 0;
		document.getElementById("selectbox-answer").style.opacity = 0;
		document.getElementById("selectbox-zato").style.opacity = 0;
		document.getElementById("selectbox-potemkin").style.opacity = 0;
		document.getElementById("selectbox-ino").style.opacity = 0;
		document.getElementById("selectbox-slayer").style.opacity = 0;
		document.getElementById("selectbox-venom").style.opacity = 0;
		document.getElementById("selectbox-axl").style.opacity = 0;
		document.getElementById("selectbox-dizzy").style.opacity = 0;
		document.getElementById("selectbox-faust").style.opacity = 0;
		document.getElementById("selectbox-bedman").style.opacity = 0;
		document.getElementById("selectbox-jacko").style.opacity = 0;
		document.getElementById("selectbox-jam").style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 25)
		if (displayCharacter == previousSelection) {
			continue reroll;
		} else {
			switch (displayCharacter) {
				case 0:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Kum_Haehyun.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Kum_Haehyun.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-haehyun").style.opacity = 1;
					break;
				case 1:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Elphelt_Valentine.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Elphelt_Valentine.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-elphelt").style.opacity = 1;
					break;
				case 2:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Sol_Badguy.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Sol_Badguy.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-sol").style.opacity = 1;
					break;
				case 3:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Ky_Kiske.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Ky_Kiske.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-ky").style.opacity = 1;
					break;
				case 4:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Ramlethal_Valentine.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Ramlethal_Valentine.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-ramlethal").style.opacity = 1;
					break;
				case 5:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Raven.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Raven.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-raven").style.opacity = 1;
					break;
				case 6:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Sin_Kiske.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Sin_Kiske.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-sin").style.opacity = 1;
					break;
				case 7:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Johnny.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Johnny.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-johnny").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 8:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/May.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_May.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-may").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 9:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Leo_Whitefang.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Leo_Whitefang.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-leo").style.opacity = 1;
					break;
				case 10:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Chipp_Zanuff.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Chipp_Zanuff.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-chipp").style.opacity = 1;
					break;
				case 11:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Millia_Rage.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Millia_Rage.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-millia").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 12:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Baiken.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Baiken.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-baiken").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 13:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Answer.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Answer.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-answer").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 14:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Zato=1.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Zato=1.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-zato").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 15:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Potemkin.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Potemkin.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-potemkin").style.opacity = 1;
					break;
				case 16:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/I-No.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_I-No.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-ino").style.opacity = 1;
					break;
				case 17:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Slayer.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Slayer.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-slayer").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 18:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Venom.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Venom.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-venom").style.opacity = 1;
					document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
					break;
				case 19:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Axl_Low.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Axl_Low.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-axl").style.opacity = 1;
					break;
				case 20:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Dizzy.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Dizzy.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-dizzy").style.opacity = 1;
					break;
				case 21:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Faust.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Faust.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-faust").style.opacity = 1;
					break;
				case 22:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Bedman.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Bedman.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-bedman").style.opacity = 1;
					break;
				case 23:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Jack-O'_Valentine.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Jack-O'_Valentine.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-jacko").style.opacity = 1;
					break;
				case 24:
					clearIcons();
					if (previewDisplayOn) {
						chrPrevImg.src = "../img/portraits/ggxrd/Jam_Kuradoberi.png";
						chrName.src = "../img/characterSelect/ggxrd/Name_Jam_Kuradoberi.png";
						chrPrevImg.classList.add("portrait-onhover");
						chrName.classList.add("name-onhover");
					}
					document.getElementById("selectbox-jam").style.opacity = 1;
					break;
			}
			sfx.cursor.pause();
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 70);
	
	function clearIcons() {
		document.getElementById("selectbox-haehyun").style.opacity = 0;
		document.getElementById("selectbox-elphelt").style.opacity = 0;
		document.getElementById("selectbox-sol").style.opacity = 0;
		document.getElementById("selectbox-ky").style.opacity = 0;
		document.getElementById("selectbox-ramlethal").style.opacity = 0;
		document.getElementById("selectbox-raven").style.opacity = 0;
		document.getElementById("selectbox-sin").style.opacity = 0;
		document.getElementById("selectbox-johnny").style.opacity = 0;
		document.getElementById("selectbox-may").style.opacity = 0;
		document.getElementById("selectbox-leo").style.opacity = 0;
		document.getElementById("selectbox-chipp").style.opacity = 0;
		document.getElementById("selectbox-millia").style.opacity = 0;
		document.getElementById("selectbox-baiken").style.opacity = 0;
		document.getElementById("selectbox-answer").style.opacity = 0;
		document.getElementById("selectbox-zato").style.opacity = 0;
		document.getElementById("selectbox-potemkin").style.opacity = 0;
		document.getElementById("selectbox-ino").style.opacity = 0;
		document.getElementById("selectbox-slayer").style.opacity = 0;
		document.getElementById("selectbox-venom").style.opacity = 0;
		document.getElementById("selectbox-axl").style.opacity = 0;
		document.getElementById("selectbox-dizzy").style.opacity = 0;
		document.getElementById("selectbox-faust").style.opacity = 0;
		document.getElementById("selectbox-bedman").style.opacity = 0;
		document.getElementById("selectbox-jacko").style.opacity = 0;
		document.getElementById("selectbox-jam").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 0;
	}
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	chrPrevImg.classList.remove("portrait-onselect");
	void chrPrevImg.offsetWidth;
	
	if (characterName == "Jack-O_Valentine") {
		characterName = "Jack-O'_Valentine";
	}
	if (characterName == "Random") {
		clearTimeout(cycleRandom);
		clearDisplay();
		switch (Math.floor(Math.random() * 25)) {
			case 0:
				characterName = "Kum_Haehyun";
				break;
			case 1:
				characterName = "Elphelt_Valentine";
				break;
			case 2:
				characterName = "Sol_Badguy";
				break;
			case 3:
				characterName = "Ky_Kiske";
				break;
			case 4:
				characterName = "Ramlethal_Valentine";
				break;
			case 5:
				characterName = "Raven";
				break;
			case 6:
				characterName = "Sin_Kiske";
				break;
			case 7:
				characterName = "Johnny";
				break;
			case 8:
				characterName = "May";
				break;
			case 9:
				characterName = "Leo_Whitefang";
				break;
			case 10:
				characterName = "Chipp_Zanuff";
				break;
			case 11:
				characterName = "Millia_Rage";
				break;
			case 12:
				characterName = "Baiken";
				break;
			case 13:
				characterName = "Answer";
				break;
			case 14:
				characterName = "Zato=1";
				break;
			case 15:
				characterName = "Potemkin";
				break;
			case 16:
				characterName = "I-No";
				break;
			case 17:
				characterName = "Slayer";
				break;
			case 18:
				characterName = "Venom";
				break;
			case 19:
				characterName = "Axl_Low";
				break;
			case 20:
				characterName = "Dizzy";
				break;
			case 21:
				characterName = "Faust";
				break;
			case 22:
				characterName = "Bedman";
				break;
			case 23:
				characterName = "Jack-O'_Valentine";
				break;
			case 24:
				characterName = "Jam_Kuradoberi";
				break;
		}
		
		document.getElementById("selectbox-haehyun").style.opacity = 0;
		document.getElementById("selectbox-elphelt").style.opacity = 0;
		document.getElementById("selectbox-sol").style.opacity = 0;
		document.getElementById("selectbox-ky").style.opacity = 0;
		document.getElementById("selectbox-ramlethal").style.opacity = 0;
		document.getElementById("selectbox-raven").style.opacity = 0;
		document.getElementById("selectbox-sin").style.opacity = 0;
		document.getElementById("selectbox-johnny").style.opacity = 0;
		document.getElementById("selectbox-may").style.opacity = 0;
		document.getElementById("selectbox-leo").style.opacity = 0;
		document.getElementById("selectbox-chipp").style.opacity = 0;
		document.getElementById("selectbox-millia").style.opacity = 0;
		document.getElementById("selectbox-baiken").style.opacity = 0;
		document.getElementById("selectbox-answer").style.opacity = 0;
		document.getElementById("selectbox-zato").style.opacity = 0;
		document.getElementById("selectbox-potemkin").style.opacity = 0;
		document.getElementById("selectbox-ino").style.opacity = 0;
		document.getElementById("selectbox-slayer").style.opacity = 0;
		document.getElementById("selectbox-venom").style.opacity = 0;
		document.getElementById("selectbox-axl").style.opacity = 0;
		document.getElementById("selectbox-dizzy").style.opacity = 0;
		document.getElementById("selectbox-faust").style.opacity = 0;
		document.getElementById("selectbox-bedman").style.opacity = 0;
		document.getElementById("selectbox-jacko").style.opacity = 0;
		document.getElementById("selectbox-jam").style.opacity = 0;
		document.getElementsByClassName("selectbox-fullroster")[0].style.opacity = 1;
	}
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, scaleMeasures) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "../img/portraits/ggxrd/" + charFileName + ".png";
		chrName.src = "../img/characterSelect/ggxrd/Name_" + charFileName + ".png";
	}
	
	switch (characterName) {
		case "Kum_Haehyun":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Elphelt_Valentine":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Sol_Badguy":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Ky_Kiske":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Ramlethal_Valentine":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Raven":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Sin_Kiske":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Johnny":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "May":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Leo_Whitefang":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Chipp_Zanuff":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Millia_Rage":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Baiken":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Answer":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Zato=1":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Potemkin":
			writeCharInfo(
				[
					"<span class='archetype-grappler'>Grappler</span>",
					"<span class='range-closerange'>Close-Range</span>",
					"<span class='unimech-none'>None</span>"
				],
				[4,3,5,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "I-No":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Slayer":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Venom":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Axl_Low":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Dizzy":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Faust":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Bedman":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Jack-O'_Valentine":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
		case "Jam_Kuradoberi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
			);
			break;
	}
	chrPrevImg.classList.add("portrait-onselect");
}

/*function preloadImages() {
	const imageToLoad = [
		"../img/characterSelect/ggxrd/Kum_Haehyun_icon.png",
		"../img/portraits/ggxrd/Kum_Haehyun.png",
		"../img/characterSelect/ggxrd/Chipp_Zanuff_icon.png",
		"../img/portraits/ggxrd/Chipp_Zanuff.png",
		"../img/characterSelect/ggxrd/Dizzy_icon.png",
		"../img/portraits/ggxrd/Dizzy.png",
	];
	for (i = 0; i > imageToLoad.length; i++) {
		document.getElementById("image-loader").style.backgroundImage = imageToLoad[i];
		console.log(imageToLoad[i]);
	}
	document.getElementById("image-loader").style.backgroundImage = "";
}

preloadImages();*/