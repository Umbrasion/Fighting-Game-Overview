const chrPrevImg = document.getElementById("info-portrait");
//const chrName = document.getElementById("info-name");
const chrSel = {
	kamen: document.getElementById("character-kamen"),
	zacky: document.getElementById("character-zacky"),
	chihiro: document.getElementById("character-chihiro"),
	blues: document.getElementById("character-blues"),
	sendou: document.getElementById("character-sendou"),
	anna: document.getElementById("character-anna"),
	kyanta: document.getElementById("character-kyanta"),
	buttobi: document.getElementById("character-buttobi"),
	spike: document.getElementById("character-spike"),
	kinoko: document.getElementById("character-kinoko"),
	razuma: document.getElementById("character-razuma"),
	garasha: document.getElementById("character-garasha"),
	azuma: document.getElementById("character-azuma"),
	jakor: document.getElementById("character-jakor"),
	michelle: document.getElementById("character-michelle"),
	rogue: document.getElementById("character-rogue"),
	gyanta: document.getElementById("character-gyanta"),
	hisomi: document.getElementById("character-hisomi"),
	tsukinami: document.getElementById("character-tsukinami"),
	rare: document.getElementById("character-rare"),
	welldone: document.getElementById("character-welldone"),
	cocorn: document.getElementById("character-cocorn"),
	hatoyan: document.getElementById("character-hatoyan"),
	mmichelle: document.getElementById("character-mmichelle"),
	katana: document.getElementById("character-katana"),
	masao: document.getElementById("character-masao"),
	masako: document.getElementById("character-masako"),
	natanee: document.getElementById("character-natanee"),
	doctork: document.getElementById("character-doctork"),
	nanatsu: document.getElementById("character-nanatsu"),
	taro: document.getElementById("character-taro"),
	myusha: document.getElementById("character-myusha"),
}

const pageMusic = new Audio("../audio/music/UFDK2 - Character Select.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: [
		new Audio("../audio/sfx/ufdk2/cursor1.ogg"),
		new Audio("../audio/sfx/ufdk2/cursor2.ogg"),
		new Audio("../audio/sfx/ufdk2/cursor3.ogg"),
		new Audio("../audio/sfx/ufdk2/cursor4.ogg"),
	],
	confirm: new Audio("../audio/sfx/ufdk2/confirm.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 1;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	//chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName) {
	var randNum = Math.floor(Math.random() * 4);
	sfx.cursor[randNum].currentTime = 0;
	sfx.cursor[randNum].play();
	if (previewDisplayOn) {
		chrPrevImg.src = "../img/portraits/ufdk2/" + charFileName + ".png";
	}
}

function positionCursor(positionID) {
	csCursor = document.getElementById("select-cursor");
	csCursor.style.opacity = 1;
	csCursor.style.left = Math.floor(positionID % 6) * 84 + 17 + "px";
	csCursor.style.top = Math.floor(positionID / 6) * 120 + -12 + "px";
}

chrSel.kamen.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Japan_Kamen");
		positionCursor(0);
	}
);

chrSel.zacky.addEventListener("mouseover",
	(event) => {
		hoverDisplay("ZackyWild");
		positionCursor(1);
	}
);

chrSel.chihiro.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Chihiro");
		positionCursor(2);
	}
);

chrSel.blues.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Blues");
		positionCursor(3);
	}
);

chrSel.sendou.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sendou");
		positionCursor(4);
	}
);

document.getElementsByClassName("character-random")[0].addEventListener("mouseover",
	(event) => {
		hoverDisplay("Random");
		positionCursor(5);
	}
);

document.getElementsByClassName("character-random")[1].addEventListener("mouseover",
	(event) => {
		hoverDisplay("Random");
		positionCursor(6);
	}
);

chrSel.anna.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Anna");
		positionCursor(7);
	}
);

chrSel.kyanta.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kyanta");
		positionCursor(8);
	}
);

chrSel.buttobi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Buttobi");
		positionCursor(9);
	}
);

chrSel.spike.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Spike");
		positionCursor(10);
	}
);

chrSel.kinoko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kinoko");
		positionCursor(11);
	}
);

chrSel.razuma.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Robo_Azuma");
		positionCursor(12);
	}
);

chrSel.garasha.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Garasha");
		positionCursor(13);
	}
);

chrSel.azuma.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Investigator_Azuma");
		positionCursor(14);
	}
);

chrSel.jakor.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Jakor");
		positionCursor(15);
	}
);

chrSel.michelle.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Michelle");
		positionCursor(16);
	}
);

chrSel.rogue.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Rogue");
		positionCursor(17);
	}
);

chrSel.gyanta.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gyanta");
		positionCursor(18);
	}
);

chrSel.hisomi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hisomi");
		positionCursor(19);
	}
);

chrSel.tsukinami.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Tsukinami");
		positionCursor(20);
	}
);

chrSel.rare.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Rare");
		positionCursor(21);
	}
);

chrSel.welldone.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Well_Done");
		positionCursor(22);
	}
);

chrSel.cocorn.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Cocorn");
		positionCursor(23);
	}
);

chrSel.hatoyan.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hatoyan");
		positionCursor(24);
	}
);

chrSel.mmichelle.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Mask_Michelle");
		positionCursor(25);
	}
);

chrSel.katana.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Katana_Kyanta");
		positionCursor(26);
	}
);

chrSel.masao.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Masao");
		positionCursor(27);
	}
);

chrSel.masako.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Masako");
		positionCursor(28);
	}
);

chrSel.natanee.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Natanee");
		positionCursor(29);
	}
);

document.getElementsByClassName("character-random")[2].addEventListener("mouseover",
	(event) => {
		hoverDisplay("Random");
		positionCursor(30);
	}
);

chrSel.doctork.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Doctor_K");
		positionCursor(31);
	}
);

chrSel.nanatsu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Nanatsu");
		positionCursor(32);
	}
);

chrSel.taro.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Taro");
		positionCursor(33);
	}
);

chrSel.myusha.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Myusha");
		positionCursor(34);
	}
);

document.getElementsByClassName("character-random")[3].addEventListener("mouseover",
	(event) => {
		hoverDisplay("Random");
		positionCursor(35);
	}
);

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();

	if (characterName === "Random") {
		var randNum = Math.floor(Math.random() * 32);
		switch (randNum) {
			case 0:
				characterName = "Japan_Kamen";
				break;
			case 1:
				characterName = "ZackyWild";
				break;
			case 2:
				characterName = "Chihiro";
				break;
			case 3:
				characterName = "Blues";
				break;
			case 4:
				characterName = "Sendou";
				break;
			case 5:
				characterName = "Anna";
				break;
			case 6:
				characterName = "Kyanta";
				break;
			case 7:
				characterName = "Buttobi";
				break;
			case 8:
				characterName = "Spike";
				break;
			case 9:
				characterName = "Kinoko";
				break;
			case 10:
				characterName = "Robo_Azuma";
				break;
			case 11:
				characterName = "Garasha";
				break;
			case 12:
				characterName = "Investigator_Azuma";
				break;
			case 13:
				characterName = "Jakor";
				break;
			case 14:
				characterName = "Michelle";
				break;
			case 15:
				characterName = "Rogue";
				break;
			case 16:
				characterName = "Gyanta";
				break;
			case 17:
				characterName = "Hisomi";
				break;
			case 18:
				characterName = "Tsukinami";
				break;
			case 19:
				characterName = "Rare";
				break;
			case 20:
				characterName = "Well_Done";
				break;
			case 21:
				characterName = "Cocorn";
				break;
			case 22:
				characterName = "Hatoyan";
				break;
			case 23:
				characterName = "Mask_Michelle";
				break;
			case 24:
				characterName = "Katana_Kyanta";
				break;
			case 25:
				characterName = "Masao";
				break;
			case 26:
				characterName = "Masako";
				break;
			case 27:
				characterName = "Natanee";
				break;
			case 28:
				characterName = "Doctor_K";
				break;
			case 29:
				characterName = "Nanatsu";
				break;
			case 30:
				characterName = "Taro";
				break;
			case 31:
				characterName = "Myusha";
				break;
		}
	}
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "../img/portraits/ufdk2/" + charFileName + ".png";
	}
	
	switch (characterName) {
		case "Japan_Kamen":
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
		case "ZackyWild":
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
		case "Chihiro":
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
		case "Blues":
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
		case "Sendou":
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
		case "Anna":
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
		case "Kyanta":
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
		case "Buttobi":
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
		case "Spike":
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
		case "Kinoko":
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
		case "Robo_Azuma":
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
		case "Garasha":
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
		case "Investigator_Azuma":
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
		case "Jakor":
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
		case "Michelle":
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
		case "Rogue":
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
		case "Gyanta":
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
		case "Hisomi":
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
		case "Tsukinami":
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
		case "Rare":
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
		case "Well_Done":
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
		case "Cocorn":
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
		case "Hatoyan":
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
		case "Mask_Michelle":
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
		case "Katana_Kyanta":
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
		case "Masao":
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
		case "Masako":
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
		case "Natanee":
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
		case "Doctor_K":
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
		case "Nanatsu":
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
		case "Taro":
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
		case "Myusha":
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