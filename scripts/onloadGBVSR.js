const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-zeta"),
	document.getElementById("character-vaseraga"),
	document.getElementById("character-beatrix"),
	document.getElementById("character-eustace"),
	document.getElementById("character-anre"),
	document.getElementById("character-seox"),
	document.getElementById("character-lancelot"),
	document.getElementById("character-vane"),
	document.getElementById("character-percival"),
	document.getElementById("character-siegfried"),
	document.getElementById("character-versusia"),
	document.getElementById("character-zooey"),
	document.getElementById("character-ladiva"),
	document.getElementById("character-narmaya"),
	document.getElementById("character-gran"),
	document.getElementById("character-djeeta"),
	document.getElementById("character-charlotta"),
	document.getElementById("character-ferry"),
	document.getElementById("character-anila"),
	document.getElementById("character-vikala"),
	document.getElementById("character-galleon"),
	document.getElementById("character-grimnir"),
	document.getElementById("character-metera"),
	document.getElementById("character-lowain"),
	document.getElementById("character-katalina"),
	document.getElementById("character-vira"),
	document.getElementById("character-yuel"),
	document.getElementById("character-soriz"),
	document.getElementById("character-cagliostro"),
	document.getElementById("character-wilnas"),
	document.getElementById("character-ilsa"),
	document.getElementById("character-sandalphon"),
	document.getElementById("character-nier"),
	document.getElementById("character-belial"),
	document.getElementById("character-beelzebub"),
	document.getElementById("character-lucilius"),
	document.getElementById("character-avatar"),
	document.getElementById("character-2b"),
	document.getElementById("character-meg"),
	document.getElementById("character-random"),
];

const pageMusic = new Audio("audio/music/GBVSR - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.08;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/gbvsr/SE_SYS_Cursor.ogg"),
	confirm: new Audio("audio/sfx/gbvsr/SE_SYS_Decide1.ogg"),
	cancel: new Audio("audio/sfx/gbvsr/SE_SYS_Cancel1.ogg"),
}
sfx.cursor.volume = 0.05;
sfx.confirm.volume = 0.05;
sfx.cancel.volume = 0.05;

var previewDisplayOn = true;
var interactionEnabled = false;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

// Display on hover

function hoverDisplay(targetChar) {
	if (interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			var charFileName = targetChar.parentElement.parentElement.onclick.toString().split("'")[1];
			var scaleMeasures = targetChar.dataset.scale.split(",");

			if (charFileName === "Random") {
				chrPrevImg.src = "img/portraits/gbvsr/Lunalu_small.png";
			} else {
				chrPrevImg.src = "img/portraits/gbvsr/" + charFileName + "_small.png";
			}
			chrName.innerHTML = charFileName.replace(/_/g, " ");
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		}
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target);
		}
	);
});

// Display on click

var announcer = new Audio();

function runDisplay(characterName) {
	if (interactionEnabled) {
		previewDisplayOn = false;
		interactionEnabled = false;
		const descriptionArea = document.getElementsByClassName("description-area")[0];
		// chrPrevImg.parentElement.classList.remove("portrait-onselect");
		// void chrPrevImg.parentElement.offsetWidth;
		
		descriptionArea.style.opacity = 1;
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * (chrSel.length - 1))].onclick.toString().split("'")[1];
		}
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
			
		initializeOV("experimental");

		chrPrevImg.src = "img/portraits/gbvsr/" + characterName + "_small.png";
		chrName.innerHTML = characterName.replace(/_/g, " ");
		
        if (!announcer.paused) {
			announcer.pause();
		}

        announcer = new Audio("audio/sfx/gbvsr/announcer/" + characterName + "_call.ogg");
		announcer.volume = 0.3;
        announcer.play();

		var charIcon;
		chrSel.forEach(element => {
			if (element.children[0].children[0].src.includes("/" + characterName + "_icon")) {
				charIcon = element;
			}
		});
		
		var scaleMeasures = charIcon.children[0].children[0].dataset.scale.split(",");
		chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";
		
		if (exMode) {
			characterName = "EX_" + characterName;
		}
		
		switch (characterName) {
			case "Zeta":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Vaseraga":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Beatrix":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Eustace":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Anre":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Seox":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Lancelot":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Vane":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Percival":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Siegfried":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Versusia":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Zooey":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Ladiva":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Narmaya":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Gran":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Djeeta":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Charlotta":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Ferry":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Anila":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Vikala":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Galleon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Grimnir":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Metera":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Lowain":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Katalina":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Vira":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Yuel":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Soriz":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Cagliostro":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Wilnas":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Ilsa":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Sandalphon":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Nier":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Belial":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Beelzebub":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Lucilius":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Avatar_Belial":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "2B":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			case "Meg":
				displayInfo = {
					filename: characterName,
					nicknames: [""],
					colors: 23,
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
			
			// EX Characters
			
			case "EX_Narmaya":
				displayInfo = {
					filename: "Narmaya",
					nicknames: [""],
					colors: 23,
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
			case "EX_Gran":
				displayInfo = {
					filename: "Gran",
					nicknames: [""],
					colors: 23,
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
			case "EX_Djeeta":
				displayInfo = {
					filename: "Djeeta",
					nicknames: [""],
					colors: 23,
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

		updateOV2(displayInfo, "gbvsr");
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
		if (rowPosition === characterIcons.length / 2) {
			previewDisplayOn = true;
			clearTimeout(classPush);
		} else {
			characterIcons[rowPosition][columnPosition].classList.add("cssicon-onstart");
			columnPosition++;
			
			if (columnPosition === characterIcons[rowPosition].length) {
				columnPosition = 0;
				rowPosition++;
			}
			
			var classPush = setTimeout(addIconAnims, 1000 / (characterIcons[rowPosition].length * 3.8));
		}
	}
	
	function addIconAnimsInverse() {
		if (rowPositionInverse === characterIcons.length / 2 - 1) {
			previewDisplayOn = true;
			clearTimeout(classPushInverse);
		} else {
			characterIcons[rowPositionInverse][columnPositionInverse].classList.add("cssicon-onstart");
			columnPositionInverse--;
			
			if (columnPositionInverse === -1) {
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
setTimeout(function() {
	interactionEnabled = true;
}, 1000);

document.getElementsByClassName("background-text-container")[0].style.height = document.body.clientHeight + "px";
$(window).resize(function() {
	document.getElementsByClassName("background-text-container")[0].style.height = document.body.clientHeight + "px";
});

var exMode = false;

function toggleEX() {
	if (interactionEnabled) {
		clearDisplay();
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();

		var exIcon = document.getElementById("ex-image");
		if (exIcon.src.includes("EX_icon2")) {
			exMode = true;
			exIcon.src = "img/characterSelect/gbvsr/EX_icon.png";

			chrSel.forEach(element => {
				if (!element.children[0].children[0].src.includes("Narmaya") && !element.children[0].children[0].src.includes("Gran") && !element.children[0].children[0].src.includes("Djeeta")) {
					element.style.filter = "brightness(0.5)";
					element.style.pointerEvents = "none";
				}
			});
			document.getElementById("info-name").style.backgroundColor = "rgba(19, 66, 119, 0.6)";
			document.getElementsByClassName("description-area")[0].style.backgroundColor = "rgba(19, 66, 119, 0.6)";
		} else {
			exMode = false;
			exIcon.src = "img/characterSelect/gbvsr/EX_icon2.png";

			chrSel.forEach(element => {
				if (!element.children[0].children[0].src.includes("Narmaya") && !element.children[0].children[0].src.includes("Gran") && !element.children[0].children[0].src.includes("Djeeta")) {
					element.style.filter = "";
					element.style.pointerEvents = "";
				}
			});
			document.getElementById("info-name").style.backgroundColor = "rgba(0,0,0,0.6)";
			document.getElementsByClassName("description-area")[0].style.backgroundColor = "rgba(0,0,0,0.6)";
		}
	}
}