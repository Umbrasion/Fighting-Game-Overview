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
	yagabi: document.getElementById("character-yagabi"),
}

const pageMusic = new Audio("../audio/music/EL2 - 01_pselect.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.15;
pageMusic.play();

const sfx = {
	cursor: new Audio("../audio/sfx/el2/00000_cursor.wav"),
	confirm: new Audio("../audio/sfx/el2/00010_enter.wav"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;

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
		if (charFileName == "Yagabi") {
			chrPrevImg.src = "../img/portraits/el2/" + charFileName + ".png";
		// } else if (charFileName == "Serena") {
		// 	chrPrevImg.src = "../img/portraits/el2/Unfinished_scale.png";
		} else {
			chrPrevImg.src = "../img/portraits/el2/" + charFileName + "_small.png";
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

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	
	if (characterName == "random") {
		clearTimeout(cycleRandom);
		clearDisplay();
		switch (Math.floor(Math.random() * 10)) {
			case 0:
				characterName = "cecil";
				break;
			case 1:
				characterName = "main";
				break;
			case 2:
				characterName = "sisca";
				break;
			case 3:
				characterName = "stina";
				break;
			case 4:
				characterName = "qdora";
				break;
			case 5:
				characterName = "alcott";
				break;
			case 6:
				characterName = "tae";
				break;
			case 7:
				characterName = "tina";
				break;
			case 8:
				characterName = "serena";
				break;
			case 9:
				characterName = "yagabi";
				break;
		}
	}
	
	sfx.confirm.pause();
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, tranformInfo) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);

		chrPrevImg.src = "../img/portraits/el2/" + charFileName + "_small.png";
		if (charFileName == "Yagabi") {
			chrPrevImg.src = "../img/portraits/el2/" + charFileName + ".png";
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
		case "main":
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
				"Main",
				[0, false]
			);
			break;
		case "sisca":
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
				"Sisca",
				[-20, true]
			);
			break;
		case "qdora":
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
				"Qdora",
				[0, false]
			);
			break;
		case "tae":
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
				"Akamine_Tae",
				[0, false]
			);
			break;
		case "tina":
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
				"Tina",
				[0, false]
			);
			break;
		case "cecil":
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
				"Cecil",
				[0, false]
			);
			break;
		case "stina":
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
				"Saving_Tina",
				[0, true]
			);
			break;
		case "alcott":
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
				"Alcott",
				[-11, true]
			);
			break;
		case "serena":
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
				"Serena",
				[0, false]
			);
			break;
		case "yagabi":
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
				"Yagabi",
				[-5, true]
			);
			break;
	}
}