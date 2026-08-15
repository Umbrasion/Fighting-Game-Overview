const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-weiss"),
	document.getElementById("character-scharlachrot"),
	document.getElementById("character-petra"),
	document.getElementById("character-pistrix"),
	document.getElementById("character-eko"),
	document.getElementById("character-clarice"),
	document.getElementById("character-elsa"),
	document.getElementById("character-zenia"),
	document.getElementById("character-dorothy"),
	document.getElementById("character-mei"),
	document.getElementById("character-lieselotte"),
	document.getElementById("character-catherine"),
	document.getElementById("character-kira"),
	document.getElementById("character-lilica"),
	document.getElementById("character-fiona"),
	document.getElementById("character-akane"),
	document.getElementById("character-yoriko"),
	document.getElementById("character-angelia"),
	document.getElementById("character-nazuna"),
	document.getElementById("character-saki"),
	document.getElementById("character-maori"),
	document.getElementById("character-konoha"),
	document.getElementById("character-darkheart"),
	document.getElementById("character-heart"),
	document.getElementById("character-minori"),
	document.getElementById("character-kamui"),
];

const pageMusic = new Audio("audio/music/AH3X - Maidens.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.05 * volumeModifier;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/ah3x/Cursor.ogg"),
	colorCursor: new Audio("audio/sfx/ah3x/Color_Cursor.ogg"),
	confirm: new Audio("audio/sfx/ah3x/Confirm.ogg"),
	cancel: new Audio("audio/sfx/ah3x/Cancel.ogg"),
}
sfx.cursor.volume = 0.15;
sfx.colorCursor.volume = 0.15;
sfx.confirm.volume = 0.15;
sfx.cancel.volume = 0.15;

var interactionEnabled = true;

// Display on hover

var previousCharacter = "";

function hoverDisplay(targetChar) {
	var charFileName = targetChar.onclick.toString().split("'")[1];
	if (charFileName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();

        chrPrevImg.src = "img/portraits/ah3x/" + charFileName + ".png";
        chrName.innerHTML = charFileName.replace(/_/g, " ");
		chrPrevImg.style.transform = "translate(" + targetChar.dataset.offset + "%,0)";

		chrSel.forEach(element => {
			element.children[0].children[0].src = "img/characterSelect/ah3x/" + element.onclick.toString().split("'")[1] + "_icon.png";
		});
		targetChar.children[0].children[0].src = `img/characterSelect/ah3x/${charFileName}_icon_selected.png`;

        previousCharacter = charFileName;
    }
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element);
		}
	);
});

function runDisplay(characterName) {
	if (interactionEnabled) {
        interactionEnabled = false;

		// chrPrevImg.parentElement.classList.remove("portrait-onselect");
		// void chrPrevImg.parentElement.offsetWidth;
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");

		chrPrevImg.src = "img/portraits/ah3x/" + characterName + ".png";
		chrName.innerHTML = characterName.replace(/_/g, " ");
		
		switch (characterName) {
			case "Weiss":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Scharlachrot":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Petra_Johanna_Lagerkvist":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Series_Pistrix_No.29":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Eko":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Clarice_di_Lanza":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Elsa_la_Conti":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Zenia_Valov":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Dorothy_Albright":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Mei-Fang":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Lieselotte_Achenbach":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Catherine_Kyoubashi":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Kira_Daidohji":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Lilica_Felchenerow":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Fiona_Mayfield":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Akane_Inuwaka":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Yoriko_Yasuzumi":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Angelia_Avalon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Nazuna_Inuwaka":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Saki_Tsuzura":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Maori_Kasuga":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Konoha":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Dark_Heart":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Heart_Aino":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Minori_Amanohara":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
			case "Kamui_Tokinomiya":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 8,
					playstyle: "",
					difficulty: 1,
					mechanics: ["N/A"],
					likes: [],
					dislikes: [],
					stats: [1,1,1,1,1],
					bio: `
						<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
					`,
				}
				break;
		}

		updateOV2(displayInfo, "ah3x");
	}
}