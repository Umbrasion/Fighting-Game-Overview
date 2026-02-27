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
	bg: document.getElementById("selectbox-other"),
	bgL: document.getElementById("scrollspace-other-l"),
	bgR: document.getElementById("scrollspace-other-r"),
	bgR2: document.getElementById("scrollspace-other-r2"),
	logo: document.getElementById("logo-other"),
}

const pageMusic = new Audio("audio/music/BBTAG - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.08;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/BBTAG - Character Select intro.ogg");
pageMusicIntro.volume = 0.08;

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
	confirm: new Audio("audio/sfx/bbcf/401_decision.wav"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, seriesName) {
	clearTimeout(cycleRandom);
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		if (chrPrevImg.src.includes(".png")) {
			document.getElementById("info-portrait-temp").src = chrPrevImg.src;
		}
		document.getElementById("info-portrait-temp").classList.remove("tempportrait-onhover");
		void document.getElementById("info-portrait-temp").offsetWidth;
		document.getElementById("info-portrait-temp").classList.add("tempportrait-onhover");
		
		chrPrevImg.src = "img/portraits/bbtag/" + charFileName + ".png";
	
		if (charFileName === "Susanoo") {
			charFileName = "Susano'o";
		}
		
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
	}
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
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			disableExtraChange = false;
			hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target.parentElement.parentElement.dataset.series);
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		disableExtraChange = true;
		if (previewDisplayOn) {
			randomDisplay();
		}
		charSelOthers.bg.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
		charSelOthers.bgL.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
		charSelOthers.bgR.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
		charSelOthers.bgR2.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
		charSelOthers.logo.src = "img/logos/bbtag/AH3LMSS_logo_bbtag_select.webp";
		charSelOthers.logo.style.width = "198px";
		charSelOthers.logo.style.marginTop = "18px";
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
			switch (displayCharacter) {
				case 0:
					hoverDisplay("Ragna_the_Bloodedge", "BB");
					break;
				case 1:
					hoverDisplay("Jin_Kisaragi", "BB");
					break;
				case 2:
					hoverDisplay("Noel_Vermillion", "BB");
					break;
				case 3:
					hoverDisplay("Rachel_Alucard", "BB");
					break;
				case 4:
					hoverDisplay("Iron_Tager", "BB");
					break;
				case 5:
					hoverDisplay("Hakumen", "BB");
					break;
				case 6:
					hoverDisplay("Nu-13", "BB");
					break;
				case 7:
					hoverDisplay("Hazama", "BB");
					break;
				case 8:
					hoverDisplay("Makoto_Nanaya", "BB");
					break;
				case 9:
					hoverDisplay("Platinum_the_Trinity", "BB");
					break;
				case 10:
					hoverDisplay("Izayoi", "BB");
					break;
				case 11:
					hoverDisplay("Azrael", "BB");
					break;
				case 12:
					hoverDisplay("Celica_A._Mercury", "BB");
					break;
				case 13:
					hoverDisplay("Nine_the_Phantom", "BB");
					break;
				case 14:
					hoverDisplay("Naoto_Kurogane", "BB");
					break;
				case 15:
					hoverDisplay("Susano'o", "BB");
					break;
				case 16:
					hoverDisplay("Es", "BB");
					break;
				case 17:
					hoverDisplay("Mai_Natsume", "BB");
					break;
				case 18:
					hoverDisplay("Jubei", "BB");
					break;
				case 19:
					hoverDisplay("Yu_Narukami", "P4A");
					break;
				case 20:
					hoverDisplay("Yosuke_Hanamura", "P4A");
					break;
				case 21:
					hoverDisplay("Chie_Satonaka", "P4A");
					break;
				case 22:
					hoverDisplay("Yukiko_Amagi", "P4A");
					break;
				case 23:
					hoverDisplay("Kanji_Tatsumi", "P4A");
					break;
				case 24:
					hoverDisplay("Teddie", "P4A");
					break;
				case 25:
					hoverDisplay("Naoto_Shirogane", "P4A");
					break;
				case 26:
					hoverDisplay("Mitsuru_Kirijo", "P4A");
					break;
				case 27:
					hoverDisplay("Akihiko_Sanada", "P4A");
					break;
				case 28:
					hoverDisplay("Aegis", "P4A");
					break;
				case 29:
					hoverDisplay("Elizabeth", "P4A");
					break;
				case 30:
					hoverDisplay("Labrys", "P4A");
					break;
				case 31:
					hoverDisplay("Tohru_Adachi", "P4A");
					break;
				case 32:
					hoverDisplay("Hyde", "UNI");
					break;
				case 33:
					hoverDisplay("Linne", "UNI");
					break;
				case 34:
					hoverDisplay("Waldstein", "UNI");
					break;
				case 35:
					hoverDisplay("Carmine", "UNI");
					break;
				case 36:
					hoverDisplay("Orie", "UNI");
					break;
				case 37:
					hoverDisplay("Gordeau", "UNI");
					break;
				case 38:
					hoverDisplay("Merkava", "UNI");
					break;
				case 39:
					hoverDisplay("Vatista", "UNI");
					break;
				case 40:
					hoverDisplay("Seth", "UNI");
					break;
				case 41:
					hoverDisplay("Yuzuriha", "UNI");
					break;
				case 42:
					hoverDisplay("Hilda", "UNI");
					break;
				case 43:
					hoverDisplay("Mika", "UNI");
					break;
				case 44:
					hoverDisplay("Ruby_Rose", "RWBY");
					break;
				case 45:
					hoverDisplay("Weiss_Schnee", "RWBY");
					break;
				case 46:
					hoverDisplay("Blake_Belladonna", "RWBY");
					break;
				case 47:
					hoverDisplay("Yang_Xiao_Long", "RWBY");
					break;
				case 48:
					hoverDisplay("Neo_Politan", "RWBY");
					break;
				case 49:
					hoverDisplay("Heart_Aino", "AH3");
					break;
				case 50:
					hoverDisplay("Yumi", "SK");
					break;
				case 51:
					hoverDisplay("Akatsuki", "AKBK");
					break;
				case 52:
					hoverDisplay("Blitztank", "AKBK");
					break;
			}
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 120);
}

// Display on click

var announcer = new Audio("audio/sfx/bbtag/announcer/Charselect_call.wav");
announcer.volume = 0.15;
announcer.play();

function runDisplay(characterName) {
	previewDisplayOn = false;
	clearTimeout(cycleRandom);

	chrPrevImg.parentElement.classList.remove("portrait-onselect");
	void chrPrevImg.parentElement.offsetWidth;
	document.getElementById("info-portrait-temp").classList.remove("tempportrait-onselect");
	void document.getElementById("info-portrait-temp").offsetWidth;

	if (!announcer.paused) {
		announcer.pause();
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

	announcer = new Audio("audio/sfx/bbtag/announcer/" + characterName + "_call.wav");
	announcer.volume = 0.15;
	announcer.play();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, seriesName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/bbtag/" + charFileName + ".png";
		if (charFileName == "Es") {
			chrName.innerHTML = charFileName;
		} else if (charFileName == "Nu-13") {
			chrName.innerHTML = "&mu;-No.12-";
		} else if (seriesName == "BB") {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, "=");
		} else {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		}
		
		document.getElementById("info-portrait-temp").src = "img/portraits/bbtag/" + charFileName + ".png";
		
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
	}
	
	switch (characterName) {
		case "Ragna_the_Bloodedge":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Ragna the Bloodedge</b> is</p>
				`,
				"Ragna_the_Bloodedge",
				"BB"
			);
			break;
		case "Jin_Kisaragi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Jin Kisaragi</b> is</p>
				`,
				"Jin_Kisaragi",
				"BB"
			);
			break;
		case "Noel_Vermillion":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Noel Vermillion</b> is</p>
				`,
				"Noel_Vermillion",
				"BB"
			);
			break;
		case "Rachel_Alucard":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Rachel Alucard</b> is</p>
				`,
				"Rachel_Alucard",
				"BB"
			);
			break;
		case "Iron_Tager":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Iron Tager</b> is</p>
				`,
				"Iron_Tager",
				"BB"
			);
			break;
		case "Hakumen":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hakumen</b> is</p>
				`,
				"Hakumen",
				"BB"
			);
			break;
		case "Nu-13":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Nu-13</b> is</p>
				`,
				"Nu-13",
				"BB"
			);
			break;
		case "Hazama":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hazama</b> is</p>
				`,
				"Hazama",
				"BB"
			);
			break;
		case "Makoto_Nanaya":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Makoto Nanaya</b> is</p>
				`,
				"Makoto_Nanaya",
				"BB"
			);
			break;
		case "Platinum_the_Trinity":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Platinum the Trinity</b> is</p>
				`,
				"Platinum_the_Trinity",
				"BB"
			);
			break;
		case "Izayoi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Izayoi</b> is</p>
				`,
				"Izayoi",
				"BB"
			);
			break;
		case "Azrael":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Azrael</b> is</p>
				`,
				"Azrael",
				"BB"
			);
			break;
		case "Celica_A._Mercury":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Celica A. Mercury</b> is</p>
				`,
				"Celica_A._Mercury",
				"BB"
			);
			break;
		case "Nine_the_Phantom":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Nine the Phantom</b> is</p>
				`,
				"Nine_the_Phantom",
				"BB"
			);
			break;
		case "Naoto_Kurogane":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Naoto Kurogane</b> is</p>
				`,
				"Naoto_Kurogane",
				"BB"
			);
			break;
		case "Susano'o":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Susano'o</b> is</p>
				`,
				"Susano'o",
				"BB"
			);
			break;
		case "Es":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Es</b> is</p>
				`,
				"Es",
				"BB"
			);
			break;
		case "Mai_Natsume":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mai Natsume</b> is</p>
				`,
				"Mai_Natsume",
				"BB"
			);
			break;
		case "Jubei":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Jubei</b> is</p>
				`,
				"Jubei",
				"BB"
			);
			break;
		case "Yu_Narukami":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yu Narukami</b> is</p>
				`,
				"Yu_Narukami",
				"P4A"
			);
			break;
		case "Yosuke_Hanamura":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yosuke Hanamura</b> is</p>
				`,
				"Yosuke_Hanamura",
				"P4A"
			);
			break;
		case "Chie_Satonaka":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Chie Satonaka</b> is</p>
				`,
				"Chie_Satonaka",
				"P4A"
			);
			break;
		case "Yukiko_Amagi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yukiko Amagi</b> is</p>
				`,
				"Yukiko_Amagi",
				"P4A"
			);
			break;
		case "Kanji_Tatsumi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Kanji Tatsumi</b> is</p>
				`,
				"Kanji_Tatsumi",
				"P4A"
			);
			break;
		case "Teddie":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Teddie</b> is</p>
				`,
				"Teddie",
				"P4A"
			);
			break;
		case "Naoto_Shirogane":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Naoto Shirogane</b> is</p>
				`,
				"Naoto_Shirogane",
				"P4A"
			);
			break;
		case "Mitsuru_Kirijo":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mitsuru Kirijo</b> is</p>
				`,
				"Mitsuru_Kirijo",
				"P4A"
			);
			break;
		case "Akihiko_Sanada":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Akihiko Sanada</b> is</p>
				`,
				"Akihiko_Sanada",
				"P4A"
			);
			break;
		case "Aegis":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Aegis</b> is</p>
				`,
				"Aegis",
				"P4A"
			);
			break;
		case "Elizabeth":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Elizabeth</b> is</p>
				`,
				"Elizabeth",
				"P4A"
			);
			break;
		case "Labrys":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Labrys</b> is</p>
				`,
				"Labrys",
				"P4A"
			);
			break;
		case "Tohru_Adachi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Tohru Adachi</b> is</p>
				`,
				"Tohru_Adachi",
				"P4A"
			);
			break;
		case "Hyde":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hyde</b> is</p>
				`,
				"Hyde",
				"UNI"
			);
			break;
		case "Linne":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Linne</b> is</p>
				`,
				"Linne",
				"UNI"
			);
			break;
		case "Waldstein":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Waldstein</b> is</p>
				`,
				"Waldstein",
				"UNI"
			);
			break;
		case "Carmine":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Carmine</b> is</p>
				`,
				"Carmine",
				"UNI"
			);
			break;
		case "Orie":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Orie</b> is</p>
				`,
				"Orie",
				"UNI"
			);
			break;
		case "Gordeau":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Gordeau</b> is</p>
				`,
				"Gordeau",
				"UNI"
			);
			break;
		case "Merkava":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Merkava</b> is</p>
				`,
				"Merkava",
				"UNI"
			);
			break;
		case "Vatista":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Vatista</b> is</p>
				`,
				"Vatista",
				"UNI"
			);
			break;
		case "Seth":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Seth</b> is</p>
				`,
				"Seth",
				"UNI"
			);
			break;
		case "Yuzuriha":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yuzuriha</b> is</p>
				`,
				"Yuzuriha",
				"UNI"
			);
			break;
		case "Hilda":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hilda</b> is</p>
				`,
				"Hilda",
				"UNI"
			);
			break;
		case "Mika":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mika</b> is</p>
				`,
				"Mika",
				"UNI"
			);
			break;
		case "Ruby_Rose":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Ruby Rose</b> is</p>
				`,
				"Ruby_Rose",
				"RWBY"
			);
			break;
		case "Weiss_Schnee":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Weiss Schnee</b> is</p>
				`,
				"Weiss_Schnee",
				"RWBY"
			);
			break;
		case "Blake_Belladonna":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Blake Belladonna</b> is</p>
				`,
				"Blake_Belladonna",
				"RWBY"
			);
			break;
		case "Yang_Xiao_Long":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yang Xiao Long</b> is</p>
				`,
				"Yang_Xiao_Long",
				"RWBY"
			);
			break;
		case "Neo_Politan":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Neo Politan</b> is</p>
				`,
				"Neo_Politan",
				"RWBY"
			);
			break;
		case "Heart_Aino":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Heart Aino</b> is</p>
				`,
				"Heart_Aino",
				"AH3"
			);
			break;
		case "Yumi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yumi</b> is</p>
				`,
				"Yumi",
				"SK"
			);
			break;
		case "Akatsuki":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Akatsuki</b> is</p>
				`,
				"Akatsuki",
				"AKBK"
			);
			break;
		case "Blitztank":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Blitztank</b> is</p>
				`,
				"Blitztank",
				"AKBK"
			);
			break;
	}
	chrPrevImg.parentElement.classList.add("portrait-onselect");
	document.getElementById("info-portrait-temp").classList.add("tempportrait-onselect");
}

function scrollSelection(series, directionForward) {
	var scrollArea = document.getElementById("selectbox-scroll-" + series);
	var seriesClass = "scroll-char-" + series;
	
	if (directionForward) {
		scrollArea.insertBefore(document.getElementsByClassName(seriesClass)[0], document.getElementsByClassName(seriesClass)[document.getElementsByClassName(seriesClass).length - 1].nextSibling);
	} else {
		scrollArea.insertBefore(document.getElementsByClassName(seriesClass)[document.getElementsByClassName(seriesClass).length - 1], document.getElementsByClassName(seriesClass)[0]);
	}
}