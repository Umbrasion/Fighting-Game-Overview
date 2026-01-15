const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	random: document.getElementById("character-random"),
	fubuki: document.getElementById("character-fubuki"),
	korone: document.getElementById("character-korone"),
	suisei: document.getElementById("character-suisei"),
	koyori: document.getElementById("character-koyori"),
	sora: document.getElementById("character-sora"),
	ollie: document.getElementById("character-ollie"),
	ina: document.getElementById("character-ina"),
	aki: document.getElementById("character-aki"),
	pekora: document.getElementById("character-pekora"),
	ayame: document.getElementById("character-ayame"),
	coco: document.getElementById("character-coco"),
	botan: document.getElementById("character-botan"),
}

const pageMusic = new Audio("audio/music/ISD - Who Wants a Showdown loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/ISD - Who Wants a Showdown intro.ogg");
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
	cursor1: new Audio("audio/sfx/isd/cursor1.ogg"),
	cursor2: new Audio("audio/sfx/isd/cursor2.ogg"),
	confirm: new Audio("audio/sfx/isd/confirm.ogg"),
}
sfx.cursor1.volume = 1;
sfx.cursor2.volume = 1;
sfx.confirm.volume = 0.4;

var cursorState = true;
function playCursor() {
	if (cursorState) {
		sfx.cursor1.currentTime = 0;
		sfx.cursor1.play();
	} else {
		sfx.cursor2.currentTime = 0;
		sfx.cursor2.play();
	}
}

var previewDisplayOn = true;

// Display on hover

function hoverDisplay(charFileName) {
	playCursor();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/isd/" + charFileName + "_small.png";
		chrName.src = "img/characterSelect/isd/logos/" + charFileName + "_logo.png";
	}
}

chrSel.fubuki.addEventListener("mouseover",
	() => {
		hoverDisplay("Shirakami_Fubuki");
	}
);

chrSel.korone.addEventListener("mouseover",
	() => {
		hoverDisplay("Inugami_Korone");
	}
);

chrSel.suisei.addEventListener("mouseover",
	() => {
		hoverDisplay("Hoshimachi_Suisei");
	}
);

chrSel.koyori.addEventListener("mouseover",
	() => {
		hoverDisplay("Hakui_Koyori");
	}
);

chrSel.sora.addEventListener("mouseover",
	() => {
		hoverDisplay("Tokino_Sora");
	}
);

chrSel.ollie.addEventListener("mouseover",
	() => {
		hoverDisplay("Kureiji_Ollie");
	}
);

chrSel.ina.addEventListener("mouseover",
	() => {
		hoverDisplay("Ninomae_Ina'nis");
	}
);

chrSel.aki.addEventListener("mouseover",
	() => {
		hoverDisplay("Aki_Rosenthal");
	}
);

chrSel.pekora.addEventListener("mouseover",
	() => {
		hoverDisplay("Usada_Pekora");
	}
);

chrSel.ayame.addEventListener("mouseover",
	() => {
		hoverDisplay("Nakiri_Ayame");
	}
);

chrSel.coco.addEventListener("mouseover",
	() => {
		hoverDisplay("Kiryu_Coco");
	}
);

chrSel.botan.addEventListener("mouseover",
	() => {
		hoverDisplay("Shishiro_Botan");
	}
);

chrSel.random.addEventListener("mouseover",
	() => {
		playCursor();
		if (previewDisplayOn) {
			chrPrevImg.src = "";
			chrName.src = "";
		}
	}
);

// Display on click

var banterNum = 0;
var prevBanterNum = 0;
var banter = new Audio();

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	if (characterName === "Ninomae_Inanis") {
		characterName = "Ninomae_Ina'nis"
	}

	if (characterName === "Random") {
		switch (Math.floor(Math.random() * 12)) {
			case 0:
				characterName = "Shirakami_Fubuki";
				break;
			case 1:
				characterName = "Inugami_Korone";
				break;
			case 2:
				characterName = "Hoshimachi_Suisei";
				break;
			case 3:
				characterName = "Hakui_Koyori";
				break;
			case 4:
				characterName = "Tokino_Sora";
				break;
			case 5:
				characterName = "Kureiji_Ollie";
				break;
			case 6:
				characterName = "Ninomae_Ina'nis";
				break;
			case 7:
				characterName = "Aki_Rosenthal";
				break;
			case 8:
				characterName = "Usada_Pekora";
				break;
			case 9:
				characterName = "Nakiri_Ayame";
				break;
			case 10:
				characterName = "Kiryu_Coco";
				break;
			case 11:
				characterName = "Shishiro_Botan";
				break;
		}
	}
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/isd/" + charFileName + "_small.png";
		chrName.src = "img/characterSelect/isd/logos/" + charFileName + "_logo.png";

		var announcer = new Audio("audio/sfx/isd/announcer/" + charFileName + "_call.ogg");
		announcer.volume = 0.75;
		announcer.play();
		announcer.onended = function() {
			reroll: while (true) {
				switch (charFileName) {
					case "Shishiro_Botan":
						banterNum = 1;
						break;
					case "Hoshimachi_Suisei": case "Inugami_Korone": case "Kureiji_Ollie": case "Usada_Pekora":
						banterNum = Math.floor(Math.random() * 2 + 1);
						break;
					case "Hakui_Koyori": case "Kiryu_Coco": case "Shirakami_Fubuki": case "Tokino_Sora":
						banterNum = Math.floor(Math.random() * 3 + 1);
						break;
					case "Nakiri_Ayame": case "Ninomae_Ina'nis":
						banterNum = Math.floor(Math.random() * 4 + 1);
						break;
					case "Aki_Rosenthal":
						banterNum = Math.floor(Math.random() * 5 + 1);
						break;
				}
				if (banterNum === prevBanterNum && charFileName !== "Shishiro_Botan") {
					continue reroll;
				} else {
					prevBanterNum = banterNum;
					break reroll;
				}
			}

			if (!banter.paused) {
				banter.pause();
			}
			banter = new Audio("audio/sfx/isd/banter/" + charFileName + "_" + banterNum + ".ogg");
			banter.volume = 0.75;
			banter.currentTime = 0;
			banter.play();
		};
	}
	
	switch (characterName) {
		case "Shirakami_Fubuki":
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
		case "Inugami_Korone":
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
		case "Hoshimachi_Suisei":
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
		case "Hakui_Koyori":
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
		case "Tokino_Sora":
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
		case "Kureiji_Ollie":
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
		case "Ninomae_Ina'nis":
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
		case "Aki_Rosenthal":
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
		case "Usada_Pekora":
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
		case "Nakiri_Ayame":
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
		case "Kiryu_Coco":
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
		case "Shishiro_Botan":
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
	document.getElementsByClassName("description-area")[0].style.outline = "2px solid white";
}