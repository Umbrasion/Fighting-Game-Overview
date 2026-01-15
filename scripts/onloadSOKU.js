const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrTitle = document.getElementById("info-title");
const chrSel = {
	suika: document.getElementById("character-suika"),
	yukari: document.getElementById("character-yukari"),
	yuyuko: document.getElementById("character-yuyuko"),
	remilia: document.getElementById("character-remilia"),
	youmu: document.getElementById("character-youmu"),
	patchouli: document.getElementById("character-patchouli"),
	alice: document.getElementById("character-alice"),
	sakuya: document.getElementById("character-sakuya"),
	marisa: document.getElementById("character-marisa"),
	reimu: document.getElementById("character-reimu"),
	sanae: document.getElementById("character-sanae"),
	cirno: document.getElementById("character-cirno"),
	meiling: document.getElementById("character-meiling"),
	utsuho: document.getElementById("character-utsuho"),
	suwako: document.getElementById("character-suwako"),
	reisen: document.getElementById("character-reisen"),
	aya: document.getElementById("character-aya"),
	komachi: document.getElementById("character-komachi"),
	iku: document.getElementById("character-iku"),
	tenshi: document.getElementById("character-tenshi"),
}

const pageMusic = new Audio("audio/music/SOKU - Select Character.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/soku/039.wav"),
	confirm: new Audio("audio/sfx/soku/040.wav"),
}
sfx.cursor.volume = 0.3;
sfx.confirm.volume = 0.3;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, charTitle) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.style.backgroundImage = "url('img/characterSelect/soku/" + charFileName + "_cut_portrait.png')";
		chrTitle.innerHTML = charTitle;
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		document.getElementById("info-name-area").classList.remove("name-onhover");
		void document.getElementById("info-name-area").offsetWidth;
		document.getElementById("info-name-area").classList.add("name-onhover");
	}
}

chrSel.suika.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Suika_Ibuki", "Little Pandemonium");
		positionCursor(0);
	}
);

chrSel.yukari.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yukari_Yakumo", "Border of Phantasm");
		positionCursor(1);
	}
);

chrSel.yuyuko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yuyuko_Saigyouji", "Innocent Ghost");
		positionCursor(2);
	}
);

chrSel.remilia.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Remilia_Scarlet", "Eternally Young Red Moon");
		positionCursor(3);
	}
);

chrSel.youmu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Youmu_Konpaku", "Half-Ghost Gardener");
		positionCursor(4);
	}
);

chrSel.patchouli.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Patchouli_Knowledge", "The Great Unmoving Library");
		positionCursor(5);
	}
);

chrSel.alice.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Alice_Margatroid", "Seven-Colored Puppeteer");
		positionCursor(6);
	}
);

chrSel.sakuya.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sakuya_Izayoi", "Perfect and Elegant Maid");
		positionCursor(7);
	}
);

chrSel.marisa.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Marisa_Kirisame", "Ordinary Magician");
		positionCursor(8);
	}
);

chrSel.reimu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Reimu_Hakurei", "Shrine Maiden of Paradise");
		positionCursor(9);
	}
);

chrSel.sanae.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sanae_Kochiya", "Embodiment of the Divine Wind");
		positionCursor(10);
	}
);

chrSel.cirno.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Cirno", "Ice Fairy");
		positionCursor(11);
	}
);

chrSel.meiling.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hong_Meiling", "Chinese Girl");
		positionCursor(12);
	}
);

chrSel.utsuho.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Utsuho_Reiuji", "Searing Divine Flame");
		positionCursor(13);
	}
);

chrSel.suwako.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Suwako_Moriya", "Epitome of Native Gods");
		positionCursor(14);
	}
);

chrSel.reisen.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Reisen_Udongein_Inaba", "Red Eyes of Madness");
		positionCursor(15);
	}
);

chrSel.aya.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Aya_Shameimaru", "Traditional Reporter of Fantasy");
		positionCursor(16);
	}
);

chrSel.komachi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Komachi_Onozuka", "Sanzu River Ferryman");
		positionCursor(17);
	}
);

chrSel.iku.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Iku_Nagae", "Beautiful Scarlet Cloth");
		positionCursor(18);
	}
);

chrSel.tenshi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Tenshi_Hinanawi", "Daughter of Bhav&atilde;gra");
		positionCursor(19);
	}
);

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV("wide-scaled");
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, charTitle) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.style.backgroundImage = "url('img/characterSelect/soku/" + charFileName + "_cut_portrait.png')";
		chrTitle.innerHTML = charTitle;
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}
	
	switch (characterName) {
		case "Suika_Ibuki":
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
				"Little Pandemonium"
			);
			break;
		case "Yukari_Yakumo":
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
				"Border of Phantasm"
			);
			break;
		case "Yuyuko_Saigyouji":
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
				"Innocent Ghost"
			);
			break;
		case "Remilia_Scarlet":
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
				"Eternally Young Red Moon"
			);
			break;
		case "Youmu_Konpaku":
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
				"Half-Ghost Gardener"
			);
			break;
		case "Patchouli_Knowledge":
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
				"The Great Unmoving Library"
			);
			break;
		case "Alice_Margatroid":
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
				"Seven-Colored Puppeteer"
			);
			break;
		case "Sakuya_Izayoi":
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
				"Perfect and Elegant Maid"
			);
			break;
		case "Marisa_Kirisame":
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
				"Ordinary Magician"
			);
			break;
		case "Reimu_Hakurei":
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
				"Shrine Maiden of Paradise"
			);
			break;
		case "Sanae_Kochiya":
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
				"Embodiment of the Divine Wind"
			);
			break;
		case "Cirno":
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
				"Ice Fairy"
			);
			break;
		case "Hong_Meiling":
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
				"Chinese Girl"
			);
			break;
		case "Utsuho_Reiuji":
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
				"Searing Divine Flame"
			);
			break;
		case "Suwako_Moriya":
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
				"Epitome of Native Gods"
			);
			break;
		case "Reisen_Udongein_Inaba":
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
				"Red Eyes of Madness"
			);
			break;
		case "Aya_Shameimaru":
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
				"Traditional Reporter of Fantasy"
			);
			break;
		case "Komachi_Onozuka":
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
				"Sanzu River Ferryman"
			);
			break;
		case "Iku_Nagae":
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
				"Beautiful Scarlet Cloth"
			);
			break;
		case "Tenshi_Hinanawi":
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
				"Daughter of Bhav&atilde;gra"
			);
			break;
	}
}

// CSS Pointer

var cssPointer = document.getElementById("css-pointer");
var cssNeedle = document.getElementById("css-needle");
cssPointer.style.left = "459px";
cssNeedle.style.left = "485px";

function positionCursor(positionValue) {
	cssPointer.style.left = 54 * positionValue - 27 + "px";
	cssNeedle.style.left = 54 * positionValue - 1 + "px";
	
	cssPointer.style.transform = "rotate(" + 77 * positionValue + "deg)"
}