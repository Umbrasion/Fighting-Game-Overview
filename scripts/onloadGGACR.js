const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-kliff"),
	document.getElementById("character-axl"),
	document.getElementById("character-jam"),
	document.getElementById("character-zappa"),
	document.getElementById("character-chipp"),
	document.getElementById("character-dizzy"),
	document.getElementById("character-anji"),
	document.getElementById("character-slayer"),
	document.getElementById("character-aba"),
	document.getElementById("character-johnny"),
	document.getElementById("character-millia"),
	document.getElementById("character-sol"),
	document.getElementById("character-ordersol"),
	document.getElementById("character-ky"),
	document.getElementById("character-roboky"),
	document.getElementById("character-may"),
	document.getElementById("character-eddie"),
	document.getElementById("character-testament"),
	document.getElementById("character-baiken"),
	document.getElementById("character-venom"),
	document.getElementById("character-bridget"),
	document.getElementById("character-faust"),
	document.getElementById("character-potemkin"),
	document.getElementById("character-justice"),
	document.getElementById("character-ino"),
];

const pageMusic = new Audio("audio/music/GGACR - D.O.A.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/ggacr/cursor.wav"),
	confirm: new Audio("audio/sfx/ggacr/confirm.wav"),
	intro: new Audio("audio/sfx/ggacr/Charselect_call.wav"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.intro.volume = 0.2;
sfx.intro.play();

var previewDisplayOn = true;

// Display on hover

function hoverDisplay(charFileName) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	resetIcons();
	document.getElementById("selectbox-" + charFileName.split("_")[0].replace("-", "").replace(/\./g, "").toLowerCase()).src = "img/characterSelect/ggacr/" + charFileName + "_icon_selected.webp";
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/ggacr/" + charFileName + ".png";
		chrName.src = "img/characterSelect/ggacr/Nameplate_" + charFileName + ".png";
	}
}

function resetIcons() {
	document.getElementById("selectbox-kliff").src = "img/characterSelect/ggacr/Kliff_Undersn_icon.webp";
	document.getElementById("selectbox-axl").src = "img/characterSelect/ggacr/Axl_Low_icon.webp";
	document.getElementById("selectbox-jam").src = "img/characterSelect/ggacr/Jam_Kuradoberi_icon.webp";
	document.getElementById("selectbox-zappa").src = "img/characterSelect/ggacr/Zappa_icon.webp";
	document.getElementById("selectbox-chipp").src = "img/characterSelect/ggacr/Chipp_Zanuff_icon.webp";
	document.getElementById("selectbox-dizzy").src = "img/characterSelect/ggacr/Dizzy_icon.webp";
	document.getElementById("selectbox-anji").src = "img/characterSelect/ggacr/Anji_Mito_icon.webp";
	document.getElementById("selectbox-slayer").src = "img/characterSelect/ggacr/Slayer_icon.webp";
	document.getElementById("selectbox-aba").src = "img/characterSelect/ggacr/A.B.A_icon.webp";
	document.getElementById("selectbox-johnny").src = "img/characterSelect/ggacr/Johnny_icon.webp";
	document.getElementById("selectbox-millia").src = "img/characterSelect/ggacr/Millia_Rage_icon.webp";
	document.getElementById("selectbox-sol").src = "img/characterSelect/ggacr/Sol_Badguy_icon.webp";
	document.getElementById("selectbox-ordersol").src = "img/characterSelect/ggacr/Order-Sol_icon.webp";
	document.getElementById("selectbox-ky").src = "img/characterSelect/ggacr/Ky_Kiske_icon.webp";
	document.getElementById("selectbox-roboky").src = "img/characterSelect/ggacr/Robo-Ky_icon.webp";
	document.getElementById("selectbox-may").src = "img/characterSelect/ggacr/May_icon.webp";
	document.getElementById("selectbox-eddie").src = "img/characterSelect/ggacr/Eddie_icon.webp";
	document.getElementById("selectbox-testament").src = "img/characterSelect/ggacr/Testament_icon.webp";
	document.getElementById("selectbox-baiken").src = "img/characterSelect/ggacr/Baiken_icon.webp";
	document.getElementById("selectbox-venom").src = "img/characterSelect/ggacr/Venom_icon.webp";
	document.getElementById("selectbox-bridget").src = "img/characterSelect/ggacr/Bridget_icon.webp";
	document.getElementById("selectbox-faust").src = "img/characterSelect/ggacr/Faust_icon.webp";
	document.getElementById("selectbox-potemkin").src = "img/characterSelect/ggacr/Potemkin_icon.webp";
	document.getElementById("selectbox-justice").src = "img/characterSelect/ggacr/Justice_icon.webp";
	document.getElementById("selectbox-ino").src = "img/characterSelect/ggacr/I-No_icon.webp";
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target.onclick.toString().split("'")[1]);
		}
	);
});

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();

	chrPrevImg.src = "img/portraits/ggacr/" + characterName + ".png";
	chrName.src = "img/characterSelect/ggacr/Nameplate_" + characterName + ".png";
	
	switch (characterName) {
		case "Kliff_Undersn":
			updateOV(
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
			);
			break;
		case "Axl_Low":
			updateOV(
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
			);
			break;
		case "Jam_Kuradoberi":
			updateOV(
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
			);
			break;
		case "Zappa":
			updateOV(
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
			);
			break;
		case "Chipp_Zanuff":
			updateOV(
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
			);
			break;
		case "Dizzy":
			updateOV(
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
			);
			break;
		case "Anji_Mito":
			updateOV(
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
			);
			break;
		case "Slayer":
			updateOV(
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
			);
			break;
		case "A.B.A":
			updateOV(
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
			);
			break;
		case "Johnny":
			updateOV(
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
			);
			break;
		case "Millia_Rage":
			updateOV(
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
			);
			break;
		case "Sol_Badguy":
			updateOV(
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
			);
			break;
		case "Order-Sol":
			updateOV(
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
			);
			break;
		case "Ky_Kiske":
			updateOV(
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
			);
			break;
		case "Robo-Ky":
			updateOV(
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
			);
			break;
		case "May":
			updateOV(
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
			);
			break;
		case "Eddie":
			updateOV(
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
			);
			break;
		case "Testament":
			updateOV(
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
			);
			break;
		case "Baiken":
			updateOV(
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
			);
			break;
		case "Venom":
			updateOV(
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
			);
			break;
		case "Bridget":
			updateOV(
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
			);
			break;
		case "Faust":
			updateOV(
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
			);
			break;
		case "Potemkin":
			updateOV(
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
			);
			break;
		case "Justice":
			updateOV(
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
			);
			break;
		case "I-No":
			updateOV(
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
			);
			break;
	}
}





chrSel.forEach(element => {
	var iconPositioner = document.getElementById("selectbox-" + element.onclick.toString().split("'")[1].split("_")[0].replace("-", "").replace(/\./g, "").toLowerCase()).parentElement.parentElement;
	
	var mapCoords = element.coords.replace(/\s/g, "").split(",");
	var resizedCoords = [];
	mapCoords.forEach(element => {
		resizedCoords.push(parseInt(element) * 2);
	});
	element.coords = resizedCoords.toString();

	iconPositioner.style.left = (parseInt(iconPositioner.style.left) * 2) + "px";
	iconPositioner.style.top = (parseInt(iconPositioner.style.top) * 2) + "px";
});