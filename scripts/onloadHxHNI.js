const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-meruem"),
	document.getElementById("character-netero"),
	document.getElementById("character-hisoka"),
	document.getElementById("character-genthru"),
	document.getElementById("character-morel"),
	document.getElementById("character-leorio"),
	document.getElementById("character-kurapika"),
	document.getElementById("character-razor"),
	document.getElementById("character-kite"),
	document.getElementById("character-gon"),
	document.getElementById("character-killua"),
	document.getElementById("character-bisky"),
	document.getElementById("character-chrollo"),
	document.getElementById("character-uvogin"),
	document.getElementById("character-machi"),
	document.getElementById("character-feitan"),
	document.getElementById("character-neferpitou"),
	document.getElementById("character-random"),
	document.getElementById("character-randomteam"),
	document.getElementById("character-phinks"),
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
		chrPrevImg.src = "img/portraits/hxhni/" + charFileName + ".webp";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1]);
		}
	);
});

function runDisplay(characterName) {
	previewDisplayOn = false;
	// chrPrevImg.parentElement.classList.remove("portrait-onselect");
	// void chrPrevImg.parentElement.offsetWidth;
	
	if (characterName == "Random") {
		clearDisplay();
		switch (Math.floor(Math.random() * 18)) {
			case 0:
				characterName = "Meruem";
				break;
			case 1:
				characterName = "Netero";
				break;
			case 2:
				characterName = "Hisoka";
				break;
			case 3:
				characterName = "Genthru";
				break;
			case 4:
				characterName = "Morel";
				break;
			case 5:
				characterName = "Leorio";
				break;
			case 6:
				characterName = "Kurapika";
				break;
			case 7:
				characterName = "Razor";
				break;
			case 8:
				characterName = "Kite";
				break;
			case 9:
				characterName = "Gon";
				break;
			case 10:
				characterName = "Killua";
				break;
			case 11:
				characterName = "Bisky";
				break;
			case 12:
				characterName = "Chrollo";
				break;
			case 13:
				characterName = "Uvogin";
				break;
			case 14:
				characterName = "Machi";
				break;
			case 15:
				characterName = "Feitan";
				break;
			case 16:
				characterName = "Neferpitou";
				break;
			case 17:
				characterName = "Phinks";
				break;
		}
	}
	
	//sfx.confirm.currentTime = 0;
	//sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/hxhni/" + charFileName + ".webp";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}
	
	switch (characterName) {
		case "Meruem":
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
		case "Netero":
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
		case "Hisoka":
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
		case "Genthru":
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
		case "Morel":
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
		case "Leorio":
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
		case "Kurapika":
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
		case "Razor":
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
		case "Kite":
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
		case "Gon":
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
		case "Killua":
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
		case "Bisky":
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
		case "Chrollo":
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
		case "Uvogin":
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
		case "Machi":
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
		case "Feitan":
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
		case "Neferpitou":
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
		case "Phinks":
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