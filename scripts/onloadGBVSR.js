const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	zeta: document.getElementById("character-zeta"),
	vaseraga: document.getElementById("character-vaseraga"),
	beatrix: document.getElementById("character-beatrix"),
	eustace: document.getElementById("character-eustace"),
	anre: document.getElementById("character-anre"),
	seox: document.getElementById("character-seox"),
	lancelot: document.getElementById("character-lancelot"),
	vane: document.getElementById("character-vane"),
	percival: document.getElementById("character-percival"),
	siegfried: document.getElementById("character-siegfried"),
	versusia: document.getElementById("character-versusia"),
	zooey: document.getElementById("character-zooey"),
	ladiva: document.getElementById("character-ladiva"),
	narmaya: document.getElementById("character-narmaya"),
	gran: document.getElementById("character-gran"),
	djeeta: document.getElementById("character-djeeta"),
	charlotta: document.getElementById("character-charlotta"),
	ferry: document.getElementById("character-ferry"),
	anila: document.getElementById("character-anila"),
	vikala: document.getElementById("character-vikala"),
	galleon: document.getElementById("character-galleon"),
	grimnir: document.getElementById("character-grimnir"),
	metera: document.getElementById("character-metera"),
	lowain: document.getElementById("character-lowain"),
	katalina: document.getElementById("character-katalina"),
	vira: document.getElementById("character-vira"),
	yuel: document.getElementById("character-yuel"),
	soriz: document.getElementById("character-soriz"),
	cagliostro: document.getElementById("character-cagliostro"),
	wilnas: document.getElementById("character-wilnas"),
	sandalphon: document.getElementById("character-sandalphon"),
	nier: document.getElementById("character-nier"),
	belial: document.getElementById("character-belial"),
	beelzebub: document.getElementById("character-beelzebub"),
	lucilius: document.getElementById("character-lucilius"),
	avatar: document.getElementById("character-avatar"),
	twob: document.getElementById("character-2b"),
	meg: document.getElementById("character-meg"),
	random: document.getElementById("character-random"),
}

const pageMusic = new Audio("audio/music/GBVSR - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.15;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/gbvsr/SE_SYS_Cursor.ogg"),
	confirm: new Audio("audio/sfx/gbvsr/SE_SYS_Decide1.ogg"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;

var previewDisplayOn = false;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, scaleMeasures) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/gbvsr/" + charFileName + ".png";
		if (charFileName == "Lunalu") {
			charFileName = "Random";
		}
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
	}
}
function addListeners() {
	chrSel.zeta.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Zeta", [1.18, 4, -3]);
		}
	);

	chrSel.vaseraga.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Vaseraga", [1.4, 0, -10]);
		}
	);

	chrSel.beatrix.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Beatrix", [1.1, 0, 0]);
		}
	);

	chrSel.eustace.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Eustace", [1.22, 0, -5]);
		}
	);

	chrSel.anre.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Anre", [1.25, 0, -6]);
		}
	);

	chrSel.seox.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Seox", [1.28, 0, -8]);
		}
	);

	chrSel.lancelot.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Lancelot", [1.04, 10, 2]);
		}
	);

	chrSel.vane.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Vane", [1.32, -5, -7]);
		}
	);

	chrSel.percival.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Percival", [1.2, 0, 3]);
		}
	);

	chrSel.siegfried.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Siegfried", [1.2, 0, 0]);
		}
	);

	chrSel.versusia.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Versusia", [1.14, 4, 7]);
		}
	);

	chrSel.zooey.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Zooey", [1.12, 3, -1]);
		}
	);

	chrSel.ladiva.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Ladiva", [1.2, -2, 3]);
		}
	);

	chrSel.narmaya.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Narmaya", [0.99, 3, 6]);
		}
	);

	chrSel.gran.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Gran", [0.97, -3, 6]);
		}
	);

	chrSel.djeeta.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Djeeta", [0.9, -5, 7]);
		}
	);

	chrSel.charlotta.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Charlotta", [1, 2, 3]);
		}
	);

	chrSel.ferry.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Ferry", [1, 0, 2]);
		}
	);

	chrSel.anila.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Anila", [1.07, 6, 1]);
		}
	);

	chrSel.vikala.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Vikala", [1.18, 2, -1]);
		}
	);

	chrSel.galleon.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Galleon", [1.19, -1, -3]);
		}
	);

	chrSel.grimnir.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Grimnir", [1.3, -5, 2]);
		}
	);

	chrSel.metera.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Metera", [1.26, 0, -5]);
		}
	);

	chrSel.lowain.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Lowain", [1.21, -2, 0]);
		}
	);

	chrSel.katalina.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Katalina", [1.2, 6, -4]);
		}
	);

	chrSel.vira.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Vira", [1.02, 7, 2]);
		}
	);

	chrSel.yuel.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Yuel", [1.22, 2, -6]);
		}
	);

	chrSel.soriz.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Soriz", [1, 8, 3]);
		}
	);

	chrSel.cagliostro.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Cagliostro", [1.054, 5.5, 1.5]);
		}
	);

	chrSel.wilnas.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Wilnas", [1.29, 4, -2]);
		}
	);

	chrSel.sandalphon.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Sandalphon", [1.12, 15, 1]);
		}
	);

	chrSel.nier.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Nier", [1.19, 4, 6]);
		}
	);

	chrSel.belial.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Belial", [1.15, -5, 2]);
		}
	);

	chrSel.beelzebub.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Beelzebub", [1.32, -4, -1]);
		}
	);

	chrSel.lucilius.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Lucilius", [1.48, 4, 7]);
		}
	);

	chrSel.avatar.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Avatar_Belial", [1.11, -6, 5]);
		}
	);

	chrSel.twob.addEventListener("mouseover",
		(event) => {
			hoverDisplay("2B", [1.2, 4, -2]);
		}
	);

	chrSel.meg.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Meg", [1.01, -2, 7.5]);
		}
	);

	chrSel.random.addEventListener("mouseover",
		(event) => {
			hoverDisplay("Lunalu", [1.03, 2, -2]);
		}
	);
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	// chrPrevImg.parentElement.classList.remove("portrait-onselect");
	// void chrPrevImg.parentElement.offsetWidth;
	
	descriptionArea.style.opacity = 1;
	
	if (characterName == "Random") {
		clearDisplay();
		switch (Math.floor(Math.random() * 37)) {
			case 0:
				characterName = "Zeta";
				break;
			case 1:
				characterName = "Vaseraga";
				break;
			case 2:
				characterName = "Beatrix";
				break;
			case 3:
				characterName = "Eustace";
				break;
			case 4:
				characterName = "Anre";
				break;
			case 5:
				characterName = "Seox";
				break;
			case 6:
				characterName = "Lancelot";
				break;
			case 7:
				characterName = "Vane";
				break;
			case 8:
				characterName = "Percival";
				break;
			case 9:
				characterName = "Siegfried";
				break;
			case 10:
				characterName = "Versusia";
				break;
			case 11:
				characterName = "Zooey";
				break;
			case 12:
				characterName = "Ladiva";
				break;
			case 13:
				characterName = "Narmaya";
				break;
			case 14:
				characterName = "Gran";
				break;
			case 15:
				characterName = "Djeeta";
				break;
			case 16:
				characterName = "Charlotta";
				break;
			case 17:
				characterName = "Ferry";
				break;
			case 18:
				characterName = "Anila";
				break;
			case 19:
				characterName = "Vikala";
				break;
			case 20:
				characterName = "Galleon";
				break;
			case 21:
				characterName = "Grimnir";
				break;
			case 22:
				characterName = "Metera";
				break;
			case 23:
				characterName = "Lowain";
				break;
			case 24:
				characterName = "Katalina";
				break;
			case 25:
				characterName = "Vira";
				break;
			case 26:
				characterName = "Yuel";
				break;
			case 27:
				characterName = "Soriz";
				break;
			case 28:
				characterName = "Cagliostro";
				break;
			case 29:
				characterName = "Wilnas";
				break;
			case 30:
				characterName = "Sandalphon";
				break;
			case 31:
				characterName = "Nier";
				break;
			case 32:
				characterName = "Belial";
				break;
			case 33:
				characterName = "Beelzebub";
				break;
			case 34:
				characterName = "Lucilius";
				break;
			case 35:
				characterName = "Avatar_Belial";
				break;
			case 36:
				characterName = "2B";
				break;
		}
	}
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, scaleMeasures) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/gbvsr/" + charFileName + ".png";
		//chrPrevImg.onload = function() {
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		//};
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
	}
	
	switch (characterName) {
		case "Zeta":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.18, 4, -3]
			);
			break;
		case "Vaseraga":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.4, 0, -10]
			);
			break;
		case "Beatrix":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.1, 0, 0]
			);
			break;
		case "Eustace":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.22, 0, -5]
			);
			break;
		case "Anre":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.25, 0, -6]
			);
			break;
		case "Seox":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.28, 0, -8]
			);
			break;
		case "Lancelot":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.04, 10, 2]
			);
			break;
		case "Vane":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.32, -5, -7]
			);
			break;
		case "Percival":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.2, 0, 3]
			);
			break;
		case "Siegfried":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.2, 0, 0]
			);
			break;
		case "Versusia":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.14, 4, 7]
			);
			break;
		case "Zooey":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.12, 3, -1]
			);
			break;
		case "Ladiva":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.2, -2, 3]
			);
			break;
		case "Narmaya":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[0.99, 3, 6]
			);
			break;
		case "Gran":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[0.97, -3, 6]
			);
			break;
		case "Djeeta":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[0.9, -5, 7]
			);
			break;
		case "Charlotta":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1, 2, 3]
			);
			break;
		case "Ferry":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1, 0, 2]
			);
			break;
		case "Anila":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.07, 6, 1]
			);
			break;
		case "Vikala":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.18, 2, -1]
			);
			break;
		case "Galleon":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.19, -1, -3]
			);
			break;
		case "Grimnir":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.3, -5, 2]
			);
			break;
		case "Metera":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.26, 0, -5]
			);
			break;
		case "Lowain":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.21, -2, 0]
			);
			break;
		case "Katalina":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,5],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.2, 6, -4]
			);
			break;
		case "Vira":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.02, 7, 2]
			);
			break;
		case "Yuel":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.22, 2, -6]
			);
			break;
		case "Soriz":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1, 8, 3]
			);
			break;
		case "Cagliostro":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.054, 5.5, 1.5]
			);
			break;
		case "Wilnas":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,2],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.29, 4, -2]
			);
			break;
		case "Sandalphon":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.12, 15, 1]
			);
			break;
		case "Nier":
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
				[1.19, 4, 6]
			);
			break;
		case "Belial":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.15, -5, 2]
			);
			break;
		case "Beelzebub":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.32, -4, -1]
			);
			break;
		case "Lucilius":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.48, 4, 7]
			);
			break;
		case "Avatar_Belial":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.11, -6, 5]
			);
			break;
		case "2B":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,4],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.2, 4, -2]
			);
			break;
		case "Meg":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,3],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName,
				[1.01, -2, 7.5]
			);
			break;
	}
}

function startupDisplay() {
	var iconArray = Array.prototype.slice.call(document.getElementsByClassName("selectbox-character"));
	iconArray[iconArray.length - 1].classList.add("cssiconextra-onstart");
	iconArray = iconArray.splice(0, iconArray.length - 1);
	
	var characterIcons = [];
	
	while (iconArray.length / 10 > 0) {
		characterIcons.push(iconArray.slice(0, 10));
		iconArray = iconArray.splice(10);
	}
	
	function addIconAnims() {
		if (rowPosition == characterIcons.length / 2) {
			previewDisplayOn = true;
			clearTimeout(classPush);
		} else {
			characterIcons[rowPosition][columnPosition].classList.add("cssicon-onstart");
			columnPosition++;
			
			if (columnPosition == characterIcons[rowPosition].length) {
				columnPosition = 0;
				rowPosition++;
			}
			
			var classPush = setTimeout(addIconAnims, 1000 / (characterIcons[rowPosition].length * 3.8));
		}
	}
	
	function addIconAnimsInverse() {
		if (rowPositionInverse == characterIcons.length / 2 - 1) {
			previewDisplayOn = true;
			clearTimeout(classPushInverse);
		} else {
			characterIcons[rowPositionInverse][columnPositionInverse].classList.add("cssicon-onstart");
			columnPositionInverse--;
			
			if (columnPositionInverse == -1) {
				rowPositionInverse--;
				columnPositionInverse = characterIcons[rowPositionInverse].length - 1;
			}
			
			var classPushInverse = setTimeout(addIconAnimsInverse, 1000 / (characterIcons[rowPositionInverse].length * 3.8));
		}
	}
	
	var columnPosition = 0;
	var rowPosition = 0;
	var rowPositionInverse = characterIcons.length - 1;
	var columnPositionInverse = characterIcons[rowPositionInverse].length - 1;
	addIconAnims();
	addIconAnimsInverse();
}

setTimeout(startupDisplay, 200);
setTimeout(addListeners, 1000);

document.getElementsByClassName("background-text-container")[0].style.height = document.body.clientHeight + "px";
$(window).resize(function() {
	document.getElementsByClassName("background-text-container")[0].style.height = document.body.clientHeight + "px";
});