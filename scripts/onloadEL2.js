const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	main: document.getElementById("character-main"),
	sisca: document.getElementById("character-sisca"),
	qdora: document.getElementById("character-qdora"),
	tae: document.getElementById("character-tae"),
	tina: document.getElementById("character-tina"),
	cecil: document.getElementById("character-cecil"),
	stina: document.getElementById("character-stina"),
	alcott: document.getElementById("character-alcott"),
	serena: document.getElementById("character-serena"),
	random: document.getElementById("character-random"),
	yagabi: document.getElementById("character-yagabi"),
}

const pageMusic = new Audio("audio/music/EL2 - 01_pselect.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.15;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/el2/00000_cursor.wav"),
	confirm: new Audio("audio/sfx/el2/00010_enter.wav"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

// Display on hover

function hoverDisplay(charFileName, offsetValue = 0, flipPortrait = false) {
	sfx.cursor.pause();
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		clearTimeout(cycleRandom);
		if (charFileName == "Yagabi") {
			chrPrevImg.src = "img/portraits/el2/" + charFileName + ".png";
		// } else if (charFileName == "Serena") {
		// 	chrPrevImg.src = "img/portraits/el2/Unfinished_scale.png";
		} else {
			chrPrevImg.src = "img/portraits/el2/" + charFileName + "_small.png";
		}
		chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		if (flipPortrait) {
			chrPrevImg.style.transform = "scale(-1, 1)";
		} else {
			chrPrevImg.style.transform = "scale(1, 1)";
		}
		
		if (offsetValue != 0) {
			chrPrevImg.style.transform += " translate(" + offsetValue + "%, 0)";
		}
		
		document.getElementsByClassName("portrait-area")[0].classList.remove("portrait-onhover");
		void document.getElementsByClassName("portrait-area")[0].offsetWidth;
		document.getElementsByClassName("portrait-area")[0].classList.add("portrait-onhover");
	}
}

chrSel.main.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Main");
	}
);

chrSel.sisca.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sisca", -20, true);
	}
);

chrSel.qdora.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Qdora");
	}
);

chrSel.tae.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Akamine_Tae");
	}
);

chrSel.tina.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Tina");
	}
);

chrSel.cecil.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Cecil");
	}
);

chrSel.stina.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Saving_Tina", 0, true);
	}
);

chrSel.alcott.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Alcott", -11, true);
	}
);

chrSel.serena.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Serena");
	}
);

chrSel.yagabi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yagabi", -5, true);
	}
);

chrSel.random.addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			randomDisplay();
		}
	}
);

var cycleRandom;
var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 10);
		if (displayCharacter === previousSelection) {
			continue reroll;
		} else {
			switch (displayCharacter) {
				case 0:
					hoverDisplay("Main");
					break;
				case 1:
					hoverDisplay("Sisca", -20, true);
					break;
				case 2:
					hoverDisplay("Qdora");
					break;
				case 3:
					hoverDisplay("Akamine_Tae");
					break;
				case 4:
					hoverDisplay("Tina");
					break;
				case 5:
					hoverDisplay("Cecil");
					break;
				case 6:
					hoverDisplay("Saving_Tina", 0, true);
					break;
				case 7:
					hoverDisplay("Alcott", -11, true);
					break;
				case 8:
					hoverDisplay("Serena");
					break;
				case 9:
					hoverDisplay("Yagabi", -5, true);
					break;
			}
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 50);
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	clearTimeout(cycleRandom);
	
	if (characterName === "Random") {
		clearTimeout(cycleRandom);
		clearDisplay();
		switch (Math.floor(Math.random() * 10)) {
			case 0:
				characterName = "Cecil";
				break;
			case 1:
				characterName = "Main";
				break;
			case 2:
				characterName = "Sisca";
				break;
			case 3:
				characterName = "Saving_Tina";
				break;
			case 4:
				characterName = "Qdora";
				break;
			case 5:
				characterName = "Alcott";
				break;
			case 6:
				characterName = "Akamine_Tae";
				break;
			case 7:
				characterName = "Tina";
				break;
			case 8:
				characterName = "Serena";
				break;
			case 9:
				characterName = "Yagabi";
				break;
		}
	}
	
	sfx.confirm.pause();
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, tranformInfo) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);

		chrPrevImg.src = "img/portraits/el2/" + charFileName + "_small.png";
		if (charFileName == "Yagabi") {
			chrPrevImg.src = "img/portraits/el2/" + charFileName + ".png";
		}
		chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		
		if (tranformInfo[1]) {
			chrPrevImg.style.transform = "scale(-1, 1)";
		} else {
			chrPrevImg.style.transform = "scale(1, 1)";
		}
		
		if (tranformInfo[0] != 0) {
			chrPrevImg.style.transform += " translate(" + tranformInfo[0] + "%, 0)";
		}
	}
	
	switch (characterName) {
		case "Main":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>Main</b> is</p>
				`,
				characterName,
				[0, false]
			);
			break;
		case "Sisca":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>Sisca</b> is</p>
				`,
				characterName,
				[-20, true]
			);
			break;
		case "Qdora":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>Qdora</b> is</p>
				`,
				characterName,
				[0, false]
			);
			break;
		case "Akamine_Tae":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>Akamine Tae</b> is</p>
				`,
				characterName,
				[0, false]
			);
			break;
		case "Tina":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>Tina</b> is</p>
				`,
				characterName,
				[0, false]
			);
			break;
		case "Cecil":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>Cecil</b> is</p>
				`,
				characterName,
				[0, false]
			);
			break;
		case "Saving_Tina":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>Saving Tina</b> is</p>
				`,
				characterName,
				[0, true]
			);
			break;
		case "Alcott":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>Alcott</b> is</p>
				`,
				characterName,
				[-11, true]
			);
			break;
		case "Serena":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>NOTE:</b> At present, this character is highly unfinished, mainly using placeholders and old sprites, and is therefore subject to change.</p>
				<p><b>Serena</b> is</p>
				`,
				characterName,
				[0, false]
			);
			break;
		case "Yagabi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yagabi</b> is</p>
				`,
				characterName,
				[-5, true]
			);
			break;
	}
}