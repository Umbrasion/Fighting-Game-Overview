const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-drmario"),
	document.getElementById("character-drluigi"),
	document.getElementById("character-mario"),
	document.getElementById("character-luigi"),
	document.getElementById("character-bowser"),
	document.getElementById("character-drybowser"),
	document.getElementById("character-peach"),
	document.getElementById("character-daisy"),
	document.getElementById("character-toad"),
	document.getElementById("character-wario"),
	document.getElementById("character-waluigi"),
	document.getElementById("character-yoshi"),
	document.getElementById("character-dk"),
	document.getElementById("character-diddy"),
	document.getElementById("character-krool"),
	document.getElementById("character-geno"),
	document.getElementById("character-zss"),
	document.getElementById("character-samus"),
	document.getElementById("character-dsamus"),
	document.getElementById("character-ridley"),
	document.getElementById("character-mac"),
	document.getElementById("character-wiifit"),
	
	document.getElementById("character-deity"),
	document.getElementById("character-ylink"),
	document.getElementById("character-link"),
	document.getElementById("character-sheik"),
	document.getElementById("character-zelda"),
	document.getElementById("character-ganondorf"),
	document.getElementById("character-phantom"),
	document.getElementById("character-tlink"),
	document.getElementById("character-tzelda"),
	document.getElementById("character-pichu"),
	document.getElementById("character-pikachu"),
	document.getElementById("character-jigglypuff"),
	document.getElementById("character-squirtle"),
	document.getElementById("character-ivysaur"),
	document.getElementById("character-charizard"),
	document.getElementById("character-mewtwo"),
	document.getElementById("character-lucario"),
	document.getElementById("character-sceptile"),
	document.getElementById("character-blaziken"),
	document.getElementById("character-incineroar"),
	document.getElementById("character-zeraora"),
	
	document.getElementById("character-kirby"),
	document.getElementById("character-metaknight"),
	document.getElementById("character-joe"),
	document.getElementById("character-bandana"),
	document.getElementById("character-dedede"),
	document.getElementById("character-fox"),
	document.getElementById("character-falco"),
	document.getElementById("character-wolf"),
	document.getElementById("character-falcon"),
	document.getElementById("character-blood"),
	document.getElementById("character-blackshadow"),
	document.getElementById("character-deathborn"),
	document.getElementById("character-ninten"),
	document.getElementById("character-ness"),
	document.getElementById("character-lucas"),
	document.getElementById("character-kumatora"),
	document.getElementById("character-masked"),
	document.getElementById("character-climbers"),
	document.getElementById("character-gnw"),
	document.getElementById("character-rob"),
	document.getElementById("character-sukapon"),
	document.getElementById("character-isabelle"),
	
	document.getElementById("character-marth"),
	document.getElementById("character-navarre"),
	document.getElementById("character-roy"),
	document.getElementById("character-lyn"),
	document.getElementById("character-ike"),
	document.getElementById("character-blackknight"),
	document.getElementById("character-robin"),
	document.getElementById("character-chrom"),
	document.getElementById("character-lucina"),
	document.getElementById("character-corrin"),
	document.getElementById("character-olimar"),
	document.getElementById("character-louie"),
	document.getElementById("character-alph"),
	document.getElementById("character-shulk"),
	document.getElementById("character-metalface"),
	document.getElementById("character-pyra"),
	document.getElementById("character-mythra"),
	document.getElementById("character-pit"),
	document.getElementById("character-palutena"),
	document.getElementById("character-dpit"),
	document.getElementById("character-isaac"),

	document.getElementById("character-bigboss"),
	document.getElementById("character-snake"),
	document.getElementById("character-simon"),
	document.getElementById("character-richter"),
	document.getElementById("character-alucard"),
	document.getElementById("character-bomberman"),
	document.getElementById("character-sonic"),
	document.getElementById("character-tails"),
	document.getElementById("character-knuckles"),
	document.getElementById("character-msonic"),
	document.getElementById("character-shadow"),
	document.getElementById("character-silver"),
	document.getElementById("character-bayonetta"),
	document.getElementById("character-yu"),
	document.getElementById("character-joker"),
	document.getElementById("character-vectorman"),
	document.getElementById("character-x"),
	document.getElementById("character-zero"),
	document.getElementById("character-ryu"),
	document.getElementById("character-ken"),
	document.getElementById("character-pacman"),
	document.getElementById("character-kazuya"),

	document.getElementById("character-terry"),
	document.getElementById("character-rock"),
	document.getElementById("character-cloud"),
	document.getElementById("character-zack"),
	document.getElementById("character-sephiroth"),
	document.getElementById("character-squall"),
	document.getElementById("character-hero"),
	document.getElementById("character-sora"),
	document.getElementById("character-banjo"),
	document.getElementById("character-chief"),
	document.getElementById("character-subzero"),
	document.getElementById("character-nu"),
	document.getElementById("character-sol"),
	document.getElementById("character-sans"),
	document.getElementById("character-elizabeth"),
	document.getElementById("character-shovelknight"),
	document.getElementById("character-dragon"),
	document.getElementById("character-sandbag"),
	document.getElementById("character-primid"),
	document.getElementById("character-alloys"),
	document.getElementById("character-random"),
]

/*const pageMusic = new Audio("audio/music/SOKU - Select Character.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/soku/039.wav"),
	confirm: new Audio("audio/sfx/soku/040.wav"),
}
sfx.cursor.volume = 0.3;
sfx.confirm.volume = 0.3;*/

var previewDisplayOn = true;

// Display on hover

function hoverDisplay(charFileName, charIcon) {
	document.getElementById("positioner-" + charIcon).classList.remove("icon-onhover");
	void document.getElementById("positioner-" + charIcon).offsetWidth;
	document.getElementById("positioner-" + charIcon).classList.add("icon-onhover");
	if (previewDisplayOn) {
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		chrPrevImg.src = "img/portraits/rex/" + charFileName + ".png";
	}
}

function clearDisplay() {
	if (previewDisplayOn) {
		chrPrevImg.src = "";
		chrName.innerHTML = "";
		document.getElementById("info-lload").style.visibility = "hidden";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target.onclick.toString().split("'")[1], event.target.id.split("-")[1]);

			if (element.dataset.hasLload === "true" && previewDisplayOn) {
				document.getElementById("info-lload").style.visibility = "visible";
			} else if (previewDisplayOn) {
				document.getElementById("info-lload").style.visibility = "hidden";
			}
		}
	);
	element.addEventListener("mouseout",
		() => {
			clearDisplay();
		}
	);
});

// Display on click

function runDisplay(characterName, ele, eleOverride = false) {
	previewDisplayOn = false;
	
	// sfx.confirm.fastSeek(0);
	// sfx.confirm.play();
	
	initializeOV("flexbox");
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.style.opacity = 1;
		chrPrevImg.src = "img/portraits/rex/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}

	if (eleOverride || ele.dataset.hasLload === "true") {
		document.getElementById("info-lload").style.visibility = "visible";
		chrPrevImg.dataset.lloadInfo = characterName;
	} else {
		document.getElementById("info-lload").style.visibility = "hidden";
		chrPrevImg.dataset.lloadInfo = "";
	}
	console.log(chrPrevImg.dataset.lloadInfo);
	
	switch (characterName) {
		case "Dr._Mario":
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
		case "Dr._Luigi":
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
		case "Mario":
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
		case "Luigi":
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
		case "Bowser":
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
		case "Dry_Bowser":
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
		case "Peach":
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
		case "Daisy":
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
		case "Toad":
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
		case "Wario":
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
		case "Waluigi":
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
		case "Yoshi":
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
		case "Donkey_Kong":
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
		case "Diddy_Kong":
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
		case "King_K._Rool":
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
		case "Geno":
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
		case "Zero_Suit_Samus":
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
		case "Samus":
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
		case "Dark_Samus":
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
		case "Ridley":
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
		case "Little_Mac":
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
		case "Wii_Fit_Trainer":
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
		case "Fierce_Deity":
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
		case "Young_Link":
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
		case "Link":
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
		case "Sheik":
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
		case "Zelda":
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
		case "Ganondorf":
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
		case "Phantom_Ganon":
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
		case "Toon_Link":
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
		case "Toon_Zelda":
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
		case "Pichu":
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
		case "Pikachu":
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
		case "Jigglypuff":
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
		case "Squirtle":
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
		case "Ivysaur":
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
		case "Charizard":
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
		case "Mewtwo":
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
		case "Lucario":
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
		case "Sceptile":
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
		case "Blaziken":
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
		case "Incineroar":
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
		case "Zeraora":
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
		case "Kirby":
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
		case "Meta_Knight":
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
		case "Knuckle_Joe":
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
		case "Bandana_Dee":
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
		case "King_Dedede":
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
		case "Fox":
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
		case "Falco":
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
		case "Wolf":
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
		case "Captain_Falcon":
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
		case "Blood_Falcon":
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
		case "Black_Shadow":
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
		case "Deathborn":
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
		case "Ninten":
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
		case "Ness":
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
		case "Lucas":
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
		case "Kumatora":
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
		case "Masked_Man":
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
		case "Ice_Climbers":
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
		case "Mr._Game_&_Watch":
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
		case "R.O.B.":
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
		case "Sukapon":
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
		case "Isabelle":
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
		case "Marth":
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
		case "Navarre":
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
		case "Roy":
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
		case "Lyn":
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
		case "Ike":
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
		case "Black_Knight":
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
		case "Robin":
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
		case "Chrom":
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
		case "Lucina":
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
		case "Corrin":
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
		case "Olimar":
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
		case "Louie":
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
		case "Alph":
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
		case "Shulk":
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
		case "Metal_Face":
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
		case "Pyra":
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
		case "Mythra":
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
		case "Pit":
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
		case "Palutena":
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
		case "Dark_Pit":
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
		case "Isaac":
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
		case "Big_Boss":
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
		case "Snake":
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
		case "Simon":
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
		case "Richter":
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
		case "Alucard":
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
		case "Bomberman":
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
		case "Sonic":
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
		case "Tails":
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
		case "Knuckles":
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
		case "Metal_Sonic":
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
		case "Shadow":
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
		case "Silver":
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
		case "Bayonetta":
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
		case "Yu":
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
		case "Joker":
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
		case "Vectorman":
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
		case "X":
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
		case "Zero":
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
		case "Ryu":
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
		case "Ken":
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
		case "Pac-Man":
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
		case "Kazuya":
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
		case "Terry":
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
		case "Rock":
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
		case "Cloud":
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
		case "Zack":
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
		case "Sephiroth":
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
		case "Squall":
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
		case "Hero":
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
		case "Sora":
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
		case "Banjo_&_Kazooie":
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
		case "Master_Chief":
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
		case "Sub-Zero":
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
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName
			);
			break;
		case "Sol":
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
		case "Sans":
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
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
				`,
				characterName
			);
			break;
		case "Shovel_Knight":
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
		case "Dragon_King":
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
		case "Sandbag":
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
		case "Primid":
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
		case "Alloys":
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
		case "Red_Alloy":
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
		case "Green_Alloy":
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
		case "Blue_Alloy":
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
		case "Yellow_Alloy":
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
		case "Metal_Mario":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is much, <i>much</i> slower than normal Mario. He has one of the slowest walking speeds of the roster, one of the lowest jump heights, and has very high gravity, making him fall very fast. This isn't the only thing he has though, as to make up for his lack of speed, he has permanent and powerful super armor, allowing him to ignore any weak blows and power straight through them. His high weight also makes him very hard to launch, making him a difficult character to kill before very high percents.</p>
				<p>Metal Mario also sports some different moves from normal Mario, notably his down air which is now a ground pound, a lightning-quick forward smash, and his neutral special being a shot put-style metal ball throw. Many moves also have their properties changed, making him feel remarkably different to normal Mario (in case the physics didn't already).</p>
				`,
				characterName
			);
			break;
		case "Giga_Bowser":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is pretty much a one-to-one of how Giga Bowser works in Brawl and the Smash Series as a whole. If you're familiar with Bowser's Final Smash in Brawl or Smash 4, you'll be familiar with this character, but in case you're not, Giga Bowser is a more powerful Bowser, with stronger attacks and special properties on some moves, such as his up smash freezing opponents on hit.</p>
				<p>Notably, since Giga Bowser's moveset is taken straight from Brawl, Giga Bowser does not have any of the changes that P+ Bowser does compared to base Brawl Bowser. An example of this is Bowser's fire breath being changed to a fireball, while Giga Bowser still has the classic fire breath.</p>
				`,
				characterName
			);
			break;
		case "Giga_Dry_Bowser":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is functionally identical to normal Giga Bowser. If you're looking for more detailed notes, see Giga Bowser (Bowser's L-Load).</p>
				`,
				characterName
			);
			break;
		case "Wario-Man":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,5,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is a sped-up version of Wario. Wario-Man's moveset consists of identical moves to normal Wario, but generally much faster, allowing him to combo in ways he couldn't before. His movement speed is also faster, in addition to gaining a third jump.</p>
				`,
				characterName
			);
			break;
		case "Giant_Donkey_Kong":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is, as the name suggests, just Donkey Kong but about twice as big. This comes with all the expected upsides (and downsides) of being giant; increased knockback across the board while obviously having a much bigger hurtbox. Otherwise, Giant Donkey Kong is functionally the same as regular Donkey Kong, with no different moves or characteristics.</p>
				`,
				characterName
			);
			break;
		case "Zero_Suit_Samus_(Ultimate)":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is, as implied, Zero Suit Samus as she appears in Super Smash Bros. Ultimate, giving her the modern incarnations of moves like her forward smash, down air, and up special. While these moves can change up some aspects of her gameplan, she ultimately plays similarly to normal Zero Suit Samus and works mostly as a slight variation than a largely distinct character.</p>
				`,
				characterName
			);
			break;
		case "Suitless_Samus":
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
		case "Dark_Samus_(Ultimate)":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is Dark Samus as she appears in Super Smash Bros. Ultimate. Due to REX making Dark Samus a highly distinct character compared to Samus, this means that normal Dark Samus and Ultimate Dark Samus work pretty differently to one another, with Ultimate Dark Samus returning to her role as the projectile zoner echo fighter to normal Samus, and with Samus being comparable to her vanilla appearance in this game, means the two play pretty similarly.</p>
				<p>This doesn't mean there's <i>no</i> difference, though. Certain changes made later in the series, such as Ultimate Samus having a sweep-around neutral air and a killing dash attack, are present on Ultimate Dark Samus. Even though they're small changes, they can be preferable to some.</p>
				`,
				characterName
			);
			break;
		case "Sword_Ganondorf":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is still the slow, powerful Ganondorf that is typical of the Smash series, however his moveset has been almost entirely reworked, with the addition of a sword giving him extended range on almost all of his moves. Sword Ganon gets to play a little looser and safer than normal Ganondorf, letting his longer range compensate for the severe lack of movement speed. On top of that, Sword Ganon has additional movement options, with side special being changed to a command dash that you can attack or shield out of, giving him some much-needed movement utility.</p>
				<p>Otherwise, Sword Ganon still has the weaknesses of having a lackluster speed in the air and recovery distance, while also having slow moves that can leave you vulnerable. Certain moves also have blind spots that can cause unwanted whiffs, though these are somewhat specific. Overall, Sword Ganondorf can be treated as a longer-ranged Ganondorf.</p>
				`,
				characterName
			);
			break;
		case "Big_Jigglypuff":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>` + characterName.replace(/_/g, " ") + `</b> is, as the name suggests, just Jigglypuff but about twice as big. This comes with all the expected upsides (and downsides) of being giant; increased knockback across the board while obviously having a much bigger hurtbox. Otherwise, Big Jigglypuff is functionally the same as regular Jigglypuff, with no different moves or characteristics.</p>
				`,
				characterName
			);
			break;
		case "Mega_Charizard_X":
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
		case "Mega_Mewtwo_Y":
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
		case "Mega_Lucario":
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
		case "Meta_Knight_(Brawl)":
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
		case "Falco_(Ultimate)":
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
		case "Wolf_(Ultimate)":
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
		case "Lucas_(Ultimate)":
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
		case "Ice_Climbers_(Solo)":
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
		case "Roy_(Ultimate)":
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
		case "Chrom_(Ultimate)":
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
		case "Lucina_(Ultimate)":
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
		case "Super_Sonic":
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
		case "Super_Shadow":
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

function altDisplay() {
	if (chrPrevImg.dataset.lloadInfo === "Mario") {
		runDisplay("Metal_Mario", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Metal_Mario") {
		runDisplay("Mario", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Bowser") {
		runDisplay("Giga_Bowser", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Giga_Bowser") {
		runDisplay("Bowser", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Dry_Bowser") {
		runDisplay("Giga_Dry_Bowser", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Giga_Dry_Bowser") {
		runDisplay("Dry_Bowser", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Wario") {
		runDisplay("Wario-Man", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Wario-Man") {
		runDisplay("Wario", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Donkey_Kong") {
		runDisplay("Giant_Donkey_Kong", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Giant_Donkey_Kong") {
		runDisplay("Donkey_Kong", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Zero_Suit_Samus") {
		runDisplay("Zero_Suit_Samus_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Zero_Suit_Samus_(Ultimate)") {
		runDisplay("Zero_Suit_Samus", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Samus") {
		runDisplay("Suitless_Samus", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Suitless_Samus") {
		runDisplay("Samus", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Dark_Samus") {
		runDisplay("Dark_Samus_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Dark_Samus_(Ultimate)") {
		runDisplay("Dark_Samus", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Ganondorf") {
		runDisplay("Sword_Ganondorf", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Sword_Ganondorf") {
		runDisplay("Ganondorf", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Jigglypuff") {
		runDisplay("Big_Jigglypuff", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Big_Jigglypuff") {
		runDisplay("Jigglypuff", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Charizard") {
		runDisplay("Mega_Charizard_X", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Mega_Charizard_X") {
		runDisplay("Charizard", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Mewtwo") {
		runDisplay("Mega_Mewtwo_Y", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Mega_Mewtwo_Y") {
		runDisplay("Mewtwo", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Lucario") {
		runDisplay("Mega_Lucario", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Mega_Lucario") {
		runDisplay("Lucario", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Meta_Knight") {
		runDisplay("Meta_Knight_(Brawl)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Meta_Knight_(Brawl)") {
		runDisplay("Meta_Knight", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Falco") {
		runDisplay("Falco_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Falco_(Ultimate)") {
		runDisplay("Falco", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Wolf") {
		runDisplay("Wolf_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Wolf_(Ultimate)") {
		runDisplay("Wolf", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Lucas") {
		runDisplay("Lucas_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Lucas_(Ultimate)") {
		runDisplay("Lucas", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Ice_Climbers") {
		runDisplay("Ice_Climbers_(Solo)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Ice_Climbers_(Solo)") {
		runDisplay("Ice_Climbers", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Roy") {
		runDisplay("Roy_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Roy_(Ultimate)") {
		runDisplay("Roy", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Chrom") {
		runDisplay("Chrom_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Chrom_(Ultimate)") {
		runDisplay("Chrom", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Lucina") {
		runDisplay("Lucina_(Ultimate)", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Lucina_(Ultimate)") {
		runDisplay("Lucina", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Sonic") {
		runDisplay("Super_Sonic", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Super_Sonic") {
		runDisplay("Sonic", "", true);
	}

	if (chrPrevImg.dataset.lloadInfo === "Shadow") {
		runDisplay("Super_Shadow", "", true);
	} else if (chrPrevImg.dataset.lloadInfo === "Super_Shadow") {
		runDisplay("Shadow", "", true);
	}
}

function setCoordinates() {
	iconAreas = [
		Array.prototype.slice.call(document.getElementsByClassName("iconarea-row1")),
		Array.prototype.slice.call(document.getElementsByClassName("iconarea-row2")),
		Array.prototype.slice.call(document.getElementsByClassName("iconarea-row3")),
		Array.prototype.slice.call(document.getElementsByClassName("iconarea-row4")),
		Array.prototype.slice.call(document.getElementsByClassName("iconarea-row5")),
		Array.prototype.slice.call(document.getElementsByClassName("iconarea-row6")),
	];
	var iconPos = 0;
	for (i = 0; i < 6; i++) {
		iconAreas[i].forEach(element => {
			var finalCoords = [
				36.5 + (73 * iconPos),
				0 + (60 * i),
				
				73 + (73 * iconPos),
				20 + (60 * i),
				
				73 + (73 * iconPos),
				60 + (60 * i),
				
				36.5 + (73 * iconPos),
				80 + (60 * i),
				
				0 + (73 * iconPos),
				60 + (60 * i),
				
				0 + (73 * iconPos),
				20 + (60 * i)
			];

			if (i % 2 === 1) {
				finalCoords[0] = finalCoords[0] + 37;
				finalCoords[2] = finalCoords[2] + 37;
				finalCoords[4] = finalCoords[4] + 37;
				finalCoords[6] = finalCoords[6] + 37;
				finalCoords[8] = finalCoords[8] + 37;
				finalCoords[10] = finalCoords[10] + 37;
			}
			element.coords = finalCoords.toString();
			iconPos++;
		});
		iconPos = 0;
	}
}

setCoordinates();