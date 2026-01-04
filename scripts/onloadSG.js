const chrPrevImg = document.getElementById("info-portrait");
const chrSymbol = document.getElementById("info-symbol");
const chrSel = {
	marie: document.getElementById("character-marie"),
	squigly: document.getElementById("character-squigly"),
	band: document.getElementById("character-band"),
	eliza: document.getElementById("character-eliza"),
	fortune: document.getElementById("character-fortune"),
	peacock: document.getElementById("character-peacock"),
	painwheel: document.getElementById("character-painwheel"),
	filia: document.getElementById("character-filia"),
	random: document.getElementById("character-random"),
	cerebella: document.getElementById("character-cerebella"),
	valentine: document.getElementById("character-valentine"),
	parasoul: document.getElementById("character-parasoul"),
	double: document.getElementById("character-double"),
	fukua: document.getElementById("character-fukua"),
	beowulf: document.getElementById("character-beowulf"),
	robo: document.getElementById("character-robo"),
	umbrella: document.getElementById("character-umbrella"),
	annie: document.getElementById("character-annie"),
	dahlia: document.getElementById("character-dahlia"),
}
const chrImg = {
	marie: document.getElementById("selectbox-marie"),
	squigly: document.getElementById("selectbox-squigly"),
	band: document.getElementById("selectbox-band"),
	eliza: document.getElementById("selectbox-eliza"),
	fortune: document.getElementById("selectbox-fortune"),
	peacock: document.getElementById("selectbox-peacock"),
	painwheel: document.getElementById("selectbox-painwheel"),
	filia: document.getElementById("selectbox-filia"),
	random: document.getElementById("selectbox-random"),
	cerebella: document.getElementById("selectbox-cerebella"),
	valentine: document.getElementById("selectbox-valentine"),
	parasoul: document.getElementById("selectbox-parasoul"),
	double: document.getElementById("selectbox-double"),
	fukua: document.getElementById("selectbox-fukua"),
	beowulf: document.getElementById("selectbox-beowulf"),
	robo: document.getElementById("selectbox-robo"),
	umbrella: document.getElementById("selectbox-umbrella"),
	annie: document.getElementById("selectbox-annie"),
	dahlia: document.getElementById("selectbox-dahlia"),
}

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrPrevImg.style.display = "none";
	chrSymbol.src = "../img/characterSelect/sg/Symbol_none.webp";
}

const pageMusic = new Audio("../audio/music/SG - select_loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("../audio/music/SG - select_intro.ogg");
pageMusicIntro.volume = 0.2;
pageMusicIntro.play();

pageMusicIntro.onended = function() {
	pageMusic.play();
}

const sfx = {
	cursor: new Audio("../audio/sfx/sg/selectslide.p1.2.ogg"),
	portrait: new Audio("../audio/sfx/sg/charportrait.fadein.whoosh.p1.ogg"),
	confirm: new Audio("../audio/sfx/sg/selectconfirm.p1.3.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.portrait.volume = 0.2;
sfx.confirm.volume = 0.2;

function playSelectAudio() {
	sfx.cursor.pause();
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		sfx.portrait.pause();
		sfx.portrait.currentTime = 0;
		sfx.portrait.play();
	}
}

// Display on hover

chrSel.marie.addEventListener("mouseover",
	(event) => {
		chrImg.marie.src = "../img/characterSelect/sg/Marie_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Marie_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.marie.addEventListener("mouseout",
	(event) => {
		chrImg.marie.src = "../img/characterSelect/sg/Marie_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.squigly.addEventListener("mouseover",
	(event) => {
		chrImg.squigly.src = "../img/characterSelect/sg/Squigly_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Squigly_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.squigly.addEventListener("mouseout",
	(event) => {
		chrImg.squigly.src = "../img/characterSelect/sg/Squigly_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.band.addEventListener("mouseover",
	(event) => {
		chrImg.band.src = "../img/characterSelect/sg/Big_Band_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Big_Band_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.band.addEventListener("mouseout",
	(event) => {
		chrImg.band.src = "../img/characterSelect/sg/Big_Band_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.eliza.addEventListener("mouseover",
	(event) => {
		chrImg.eliza.src = "../img/characterSelect/sg/Eliza_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Eliza_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.eliza.addEventListener("mouseout",
	(event) => {
		chrImg.eliza.src = "../img/characterSelect/sg/Eliza_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.fortune.addEventListener("mouseover",
	(event) => {
		chrImg.fortune.src = "../img/characterSelect/sg/Ms._Fortune_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Ms._Fortune_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.fortune.addEventListener("mouseout",
	(event) => {
		chrImg.fortune.src = "../img/characterSelect/sg/Ms._Fortune_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.peacock.addEventListener("mouseover",
	(event) => {
		chrImg.peacock.src = "../img/characterSelect/sg/Peacock_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Peacock_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.peacock.addEventListener("mouseout",
	(event) => {
		chrImg.peacock.src = "../img/characterSelect/sg/Peacock_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.painwheel.addEventListener("mouseover",
	(event) => {
		chrImg.painwheel.src = "../img/characterSelect/sg/Painwheel_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Painwheel_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.painwheel.addEventListener("mouseout",
	(event) => {
		chrImg.painwheel.src = "../img/characterSelect/sg/Painwheel_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.filia.addEventListener("mouseover",
	(event) => {
		chrImg.filia.src = "../img/characterSelect/sg/Filia_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Filia_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.filia.addEventListener("mouseout",
	(event) => {
		chrImg.filia.src = "../img/characterSelect/sg/Filia_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.random.addEventListener("mouseover",
	(event) => {
		chrImg.random.src = "../img/characterSelect/sg/Random_icon_selected.webp";
		sfx.cursor.pause();
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	}
);
chrSel.random.addEventListener("mouseout",
	(event) => {
		chrImg.random.src = "../img/characterSelect/sg/Random_icon.webp";
	}
);

chrSel.cerebella.addEventListener("mouseover",
	(event) => {
		chrImg.cerebella.src = "../img/characterSelect/sg/Cerebella_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Cerebella_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.cerebella.addEventListener("mouseout",
	(event) => {
		chrImg.cerebella.src = "../img/characterSelect/sg/Cerebella_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.valentine.addEventListener("mouseover",
	(event) => {
		chrImg.valentine.src = "../img/characterSelect/sg/Valentine_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Valentine_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.valentine.addEventListener("mouseout",
	(event) => {
		chrImg.valentine.src = "../img/characterSelect/sg/Valentine_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.parasoul.addEventListener("mouseover",
	(event) => {
		chrImg.parasoul.src = "../img/characterSelect/sg/Parasoul_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Parasoul_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.parasoul.addEventListener("mouseout",
	(event) => {
		chrImg.parasoul.src = "../img/characterSelect/sg/Parasoul_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.double.addEventListener("mouseover",
	(event) => {
		chrImg.double.src = "../img/characterSelect/sg/Double_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Double_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.double.addEventListener("mouseout",
	(event) => {
		chrImg.double.src = "../img/characterSelect/sg/Double_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.fukua.addEventListener("mouseover",
	(event) => {
		chrImg.fukua.src = "../img/characterSelect/sg/Fukua_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Fukua_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.fukua.addEventListener("mouseout",
	(event) => {
		chrImg.fukua.src = "../img/characterSelect/sg/Fukua_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.beowulf.addEventListener("mouseover",
	(event) => {
		chrImg.beowulf.src = "../img/characterSelect/sg/Beowulf_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Beowulf_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.beowulf.addEventListener("mouseout",
	(event) => {
		chrImg.beowulf.src = "../img/characterSelect/sg/Beowulf_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.robo.addEventListener("mouseover",
	(event) => {
		chrImg.robo.src = "../img/characterSelect/sg/Robo-Fortune_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Robo-Fortune_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.robo.addEventListener("mouseout",
	(event) => {
		chrImg.robo.src = "../img/characterSelect/sg/Robo-Fortune_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.umbrella.addEventListener("mouseover",
	(event) => {
		chrImg.umbrella.src = "../img/characterSelect/sg/Umbrella_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Umbrella_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.umbrella.addEventListener("mouseout",
	(event) => {
		chrImg.umbrella.src = "../img/characterSelect/sg/Umbrella_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.annie.addEventListener("mouseover",
	(event) => {
		chrImg.annie.src = "../img/characterSelect/sg/Annie_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Annie_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.annie.addEventListener("mouseout",
	(event) => {
		chrImg.annie.src = "../img/characterSelect/sg/Annie_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.dahlia.addEventListener("mouseover",
	(event) => {
		chrImg.dahlia.src = "../img/characterSelect/sg/Black_Dahlia_icon_selected.webp";
		playSelectAudio();
		if (previewDisplayOn) {
			chrPrevImg.src = "../img/characterSelect/sg/Black_Dahlia_portrait.webp";
			chrPrevImg.style.display = "block";
		}
	}
);
chrSel.dahlia.addEventListener("mouseout",
	(event) => {
		chrImg.dahlia.src = "../img/characterSelect/sg/Black_Dahlia_icon.webp";
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	if (characterName === "Random") {
		clearDisplay();
		switch (Math.floor(Math.random() * 18)) {
			case 0:
				characterName = "Marie";
				break;
			case 1:
				characterName = "Squigly";
				break;
			case 2:
				characterName = "Big_Band";
				break;
			case 3:
				characterName = "Eliza";
				break;
			case 4:
				characterName = "Ms._Fortune";
				break;
			case 5:
				characterName = "Peacock";
				break;
			case 6:
				characterName = "Painwheel";
				break;
			case 7:
				characterName = "Filia";
				break;
			case 8:
				characterName = "Cerebella";
				break;
			case 9:
				characterName = "Valentine";
				break;
			case 10:
				characterName = "Parasoul";
				break;
			case 11:
				characterName = "Double";
				break;
			case 12:
				characterName = "Fukua";
				break;
			case 13:
				characterName = "Beowulf";
				break;
			case 14:
				characterName = "Robo-Fortune";
				break;
			case 15:
				characterName = "Umbrella";
				break;
			case 16:
				characterName = "Annie";
				break;
			case 17:
				characterName = "Black_Dahlia";
				break;
		}
	}
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "../img/characterSelect/sg/" + charFileName + "_portrait.webp";
		chrSymbol.src = "../img/characterSelect/sg/Symbol_" + charFileName + ".webp";
	}
	
	switch (characterName) {
		case "Marie":
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
				characterName
			);
			break;
		case "Squigly":
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
				characterName
			);
			break;
		case "Big_Band":
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
				characterName
			);
			break;
		case "Eliza":
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
				characterName
			);
			break;
		case "Ms._Fortune":
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
				characterName
			);
			break;
		case "Peacock":
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
				characterName
			);
			break;
		case "Painwheel":
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
				characterName
			);
			break;
		case "Filia":
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
				characterName
			);
			break;
		case "Cerebella":
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
				characterName
			);
			break;
		case "Valentine":
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
				characterName
			);
			break;
		case "Parasoul":
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
				characterName
			);
			break;
		case "Double":
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
				characterName
			);
			break;
		case "Fukua":
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
				characterName
			);
			break;
		case "Beowulf":
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
				characterName
			);
			break;
		case "Robo-Fortune":
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
				characterName
			);
			break;
		case "Umbrella":
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
				characterName
			);
			break;
		case "Annie":
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
				characterName
			);
			break;
		case "Black_Dahlia":
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
				characterName
			);
			break;
	}
	chrPrevImg.style.display = "block";
	document.getElementsByClassName("description-area")[0].style.background = "url('../img/characterSelect/sg/Layout_window.webp')";
	document.getElementsByClassName("description-area")[0].style.backgroundSize = "100% 100%";
}

$(window).resize(setLocations);

function setLocations() {
	var chrCoords = [316,155, 409,250];
	autoResize("selectbox-fullroster", chrSel.marie, chrCoords, chrImg.marie);
	
	chrCoords = [211,263, 304,358];
	autoResize("selectbox-fullroster", chrSel.squigly, chrCoords, chrImg.squigly);
	
	chrCoords = [316,263, 409,358];
	autoResize("selectbox-fullroster", chrSel.band, chrCoords, chrImg.band);
	
	chrCoords = [422,263, 515,358];
	autoResize("selectbox-fullroster", chrSel.eliza, chrCoords, chrImg.eliza);
	
	chrCoords = [211,370, 304,466];
	autoResize("selectbox-fullroster", chrSel.fortune, chrCoords, chrImg.fortune);
	
	chrCoords = [316,370, 409,466];
	autoResize("selectbox-fullroster", chrSel.peacock, chrCoords, chrImg.peacock);
	
	chrCoords = [423,370, 516,466];
	autoResize("selectbox-fullroster", chrSel.painwheel, chrCoords, chrImg.painwheel);
	
	chrCoords = [210,477, 304,573];
	autoResize("selectbox-fullroster", chrSel.filia, chrCoords, chrImg.filia);
	
	chrCoords = [315,477, 409,573];
	autoResize("selectbox-fullroster", chrSel.random, chrCoords, chrImg.random);
	
	chrCoords = [422,477, 516,573];
	autoResize("selectbox-fullroster", chrSel.cerebella, chrCoords, chrImg.cerebella);
	
	chrCoords = [210,585, 304,681];
	autoResize("selectbox-fullroster", chrSel.valentine, chrCoords, chrImg.valentine);
	
	chrCoords = [315,585, 409,681];
	autoResize("selectbox-fullroster", chrSel.parasoul, chrCoords, chrImg.parasoul);
	
	chrCoords = [421,585, 516,681];
	autoResize("selectbox-fullroster", chrSel.double, chrCoords, chrImg.double);
	
	chrCoords = [210,694, 304,789];
	autoResize("selectbox-fullroster", chrSel.fukua, chrCoords, chrImg.fukua);
	
	chrCoords = [315,694, 409,789];
	autoResize("selectbox-fullroster", chrSel.beowulf, chrCoords, chrImg.beowulf);
	
	chrCoords = [421,694, 516,789];
	autoResize("selectbox-fullroster", chrSel.robo, chrCoords, chrImg.robo);
	
	chrCoords = [210,802, 304,898];
	autoResize("selectbox-fullroster", chrSel.umbrella, chrCoords, chrImg.umbrella);
	
	chrCoords = [315,802, 409,898];
	autoResize("selectbox-fullroster", chrSel.annie, chrCoords, chrImg.annie);
	
	chrCoords = [422,802, 515,898];
	autoResize("selectbox-fullroster", chrSel.dahlia, chrCoords, chrImg.dahlia);
}

setLocations();