const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-dizzy"),
	document.getElementById("character-johnny"),
	document.getElementById("character-testament"),
	document.getElementById("character-jacko"),
	document.getElementById("character-nagoriyuki"),
	document.getElementById("character-millia"),
	document.getElementById("character-chipp"),
	document.getElementById("character-sol"),
	document.getElementById("character-ky"),
	document.getElementById("character-may"),
	document.getElementById("character-zato"),
	document.getElementById("character-ino"),
	document.getElementById("character-chaos"),
	document.getElementById("character-bedman"),
	document.getElementById("character-elphelt"),
	document.getElementById("character-venom"),
	document.getElementById("character-unika"),
	document.getElementById("character-aba"),
	document.getElementById("character-sin"),
	document.getElementById("character-baiken"),
	document.getElementById("character-anji"),
	document.getElementById("character-leo"),
	document.getElementById("character-faust"),
	document.getElementById("character-axl"),
	document.getElementById("character-random"),
	document.getElementById("character-potemkin"),
	document.getElementById("character-ramlethal"),
	document.getElementById("character-giovanna"),
	document.getElementById("character-goldlewis"),
	document.getElementById("character-bridget"),
	document.getElementById("character-asuka"),
	document.getElementById("character-slayer"),
	document.getElementById("character-lucy"),
];

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName) {
	//sfx.cursor.currentTime = 0;
	//sfx.cursor.play();
	if (previewDisplayOn) {
		if (charFileName === "Jack-O") {
			charFileName = "Jack-O'";
		}
		chrPrevImg.src = "img/portraits/ggst/" + charFileName + ".png";
		if (charFileName === "Asuka_R._Kreutz") {
			chrName.innerHTML = "Asuka R&sharp;";
		} else if (charFileName === "Bedman") {
			chrName.innerHTML = "Bedman?";
		} else {
			chrName.innerHTML = charFileName.replace(/_/g, " ");
		}
	}
}

function positionCursor(positionID) {
	var csCursor = document.getElementById("select-cursor");
	csCursor.style.opacity = 1;
	if (positionID <= 15) {
		csCursor.style.left = Math.floor(positionID % 16) * 100 + 45 + "px";
		csCursor.style.top = "-9px";
	} else {
		csCursor.style.left = Math.floor((positionID + 1) % 17) * 100 - 5 + "px";
		csCursor.style.top = "101px";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1]);
			positionCursor(chrSel.indexOf(event.target.parentElement.parentElement));
		}
	);
});

function runDisplay(characterName) {
	previewDisplayOn = false;
	// chrPrevImg.parentElement.classList.remove("portrait-onselect");
	// void chrPrevImg.parentElement.offsetWidth;
	
	if (characterName == "Random") {
		clearDisplay();
		switch (Math.floor(Math.random() * 32)) {
			case 0:
				characterName = "Queen_Dizzy";
				break;
			case 1:
				characterName = "Johnny";
				break;
			case 2:
				characterName = "Testament";
				break;
			case 3:
				characterName = "Jack-O";
				break;
			case 4:
				characterName = "Nagoriyuki";
				break;
			case 5:
				characterName = "Millia_Rage";
				break;
			case 6:
				characterName = "Chipp_Zanuff";
				break;
			case 7:
				characterName = "Sol_Badguy";
				break;
			case 8:
				characterName = "Ky_Kiske";
				break;
			case 9:
				characterName = "May";
				break;
			case 10:
				characterName = "Zato-1";
				break;
			case 11:
				characterName = "I-No";
				break;
			case 12:
				characterName = "Happy_Chaos";
				break;
			case 13:
				characterName = "Bedman";
				break;
			case 14:
				characterName = "Elphelt_Valentine";
				break;
			case 15:
				characterName = "Venom";
				break;
			case 16:
				characterName = "Unika";
				break;
			case 17:
				characterName = "A.B.A";
				break;
			case 18:
				characterName = "Sin_Kiske";
				break;
			case 19:
				characterName = "Baiken";
				break;
			case 20:
				characterName = "Anji_Mito";
				break;
			case 21:
				characterName = "Leo_Whitefang";
				break;
			case 22:
				characterName = "Faust";
				break;
			case 23:
				characterName = "Axl_Low";
				break;
			case 24:
				characterName = "Potemkin";
				break;
			case 25:
				characterName = "Ramlethal_Valentine";
				break;
			case 26:
				characterName = "Giovanna";
				break;
			case 27:
				characterName = "Goldlewis_Dickinson";
				break;
			case 28:
				characterName = "Bridget";
				break;
			case 29:
				characterName = "Asuka_R._Kreutz";
				break;
			case 30:
				characterName = "Slayer";
				break;
			case 31:
				characterName = "Lucy";
				break;
		}
	}
	
	//sfx.confirm.currentTime = 0;
	//sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		if (charFileName === "Jack-O") {
			charFileName = "Jack-O'";
		}
		chrPrevImg.src = "img/portraits/ggst/" + charFileName + ".png";
		if (charFileName === "Asuka_R._Kreutz") {
			chrName.innerHTML = "Asuka R&sharp;";
		} else if (charFileName === "Bedman") {
			chrName.innerHTML = "Bedman?";
		} else {
			chrName.innerHTML = charFileName.replace(/_/g, " ");
		}
	}
	
	switch (characterName) {
		case "Queen_Dizzy":
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
				characterName
			);
			break;
		case "Testament":
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
		case "Jack-O":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `'</b> is</p>
				`,
				characterName
			);
			break;
		case "Nagoriyuki":
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
				characterName
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
				characterName
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
				characterName
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
				characterName
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
				characterName
			);
			break;
		case "Zato-1":
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
				characterName
			);
			break;
		case "Happy_Chaos":
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
				<p><b>` + characterName.replace(/_/g, " ") + `?</b> is</p>
				`,
				characterName
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
				characterName
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
				characterName
			);
			break;
		case "Unika":
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
		case "A.B.A":
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
				characterName
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
				characterName
			);
			break;
		case "Anji_Mito":
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
				characterName
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
				characterName
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
				characterName
			);
			break;
		case "Potemkin":
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
				characterName
			);
			break;
		case "Giovanna":
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
		case "Goldlewis_Dickinson":
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
		case "Bridget":
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
		case "Asuka_R._Kreutz":
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
				characterName
			);
			break;
		case "Lucy":
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
}

// $(window).resize(setSize);

// function setSize() {
// 	console.log("Window resized");
// 	flexResize([9, 20]);
// }

// document.getElementById("sampleImage").onload = setSize();