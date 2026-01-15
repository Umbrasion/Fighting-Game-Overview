const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	aoko: document.getElementById("character-aoko"),
	shiki: document.getElementById("character-shiki"),
	hime: document.getElementById("character-hime"),
	nanaya: document.getElementById("character-nanaya"),
	kouma: document.getElementById("character-kouma"),
	miyako: document.getElementById("character-miyako"),
	ciel: document.getElementById("character-ciel"),
	sion: document.getElementById("character-sion"),
	riesbyfe: document.getElementById("character-riesbyfe"),
	vsion: document.getElementById("character-vsion"),
	warachia: document.getElementById("character-warachia"),
	roa: document.getElementById("character-roa"),
	maids: document.getElementById("character-maids"),
	akiha: document.getElementById("character-akiha"),
	arcueid: document.getElementById("character-arcueid"),
	pciel: document.getElementById("character-pciel"),
	warc: document.getElementById("character-warc"),
	vakiha: document.getElementById("character-vakiha"),
	mech: document.getElementById("character-mech"),
	seifuku: document.getElementById("character-seifuku"),
	satsuki: document.getElementById("character-satsuki"),
	len: document.getElementById("character-len"),
	ryougi: document.getElementById("character-ryougi"),
	wlen: document.getElementById("character-wlen"),
	nero: document.getElementById("character-nero"),
	necochaos: document.getElementById("character-necochaos"),
	kohakumech: document.getElementById("character-kohakumech"),
	hisui: document.getElementById("character-hisui"),
	neco: document.getElementById("character-neco"),
	kohaku: document.getElementById("character-kohaku"),
	necomech: document.getElementById("character-necomech"),
	random: document.getElementById("character-random"),
}

const pageMusic = new Audio("audio/music/MBAACC - Actor's Anteroom -Remastering- loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/MBAACC - Actor's Anteroom -Remastering- intro.ogg");
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
	cursor: new Audio("audio/sfx/mbaacc/cursor.ogg"),
	confirm: new Audio("audio/sfx/mbaacc/confirm.ogg"),
}
sfx.cursor.volume = 0.5;
sfx.confirm.volume = 0.5;

var previewDisplayOn = true;

// Display on hover

function hoverDisplay(charFileName, charNameHiragana) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/mbaacc/" + charFileName + ".png";
		chrPrevImg.onload = function() {
			chrPrevImg.style.height = chrPrevImg.naturalHeight * 1.8 + "px";
			document.getElementById("info-portrait-temp").style.height = chrPrevImg.style.height;
		};
		chrName.innerHTML = "<span style='font-size: 1.6em; font-style: italic'>" + charNameHiragana + "</span><br>";
		if (charFileName === "Aoko_Aozaki" || charFileName === "Shiki_Tohno" || charFileName === "Shiki_Nanaya" || charFileName === "Kouma_Kishima" || charFileName === "Miyako_Arima" || charFileName === "Akiha_Tohno" || charFileName === "Shiki_Ryougi") {
			chrName.innerHTML += charFileName.split("_")[1].toUpperCase() + " " + charFileName.split("_")[0].toUpperCase();
		} else if (charFileName === "Archetype_Earth") {
			chrName.innerHTML += "ARCHETYPE:EARTH";
		} else if (charFileName === "Hisui_&_Kohaku") {
			chrName.innerHTML += "HISUI&KOHAKU";
		} else if (charFileName === "Arcueid_Brunestud") {
			chrName.innerHTML += "ARCUEID=BRUNESTUD";
		} else if (charFileName === "Powered_Ciel") {
			chrName.innerHTML += "POWERD CIEL";
		} else if (charFileName === "Akiha_Tohno_(Seifuku)") {
			chrName.innerHTML += "TOHNO AKIHA";
		} else if (charFileName === "Satsuki_Yumizuka") {
			chrName.innerHTML += "YUMIDUKA SATSUKI";
		} else if (charFileName === "Kohaku_&_Mech") {
			chrName.innerHTML += "KOHA & MECH";
		} else {
			chrName.innerHTML += charFileName.replace(/_/g, " ").toUpperCase();
		}

		document.getElementById("info-portrait-temp").src = chrPrevImg.src;

		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrName.offsetWidth;
		chrName.classList.add("name-onhover");
	}
}

chrSel.aoko.addEventListener("mouseover",
	() => {
		hoverDisplay("Aoko_Aozaki", "蒼崎青子");
	}
);

chrSel.shiki.addEventListener("mouseover",
	() => {
		hoverDisplay("Shiki_Tohno", "遠野志貴");
	}
);

chrSel.hime.addEventListener("mouseover",
	() => {
		hoverDisplay("Archetype_Earth", "真祖アルクェイド");
	}
);

chrSel.nanaya.addEventListener("mouseover",
	() => {
		hoverDisplay("Shiki_Nanaya", "七夜志貴");
	}
);

chrSel.kouma.addEventListener("mouseover",
	() => {
		hoverDisplay("Kouma_Kishima", "軋間紅摩");
	}
);

chrSel.miyako.addEventListener("mouseover",
	() => {
		hoverDisplay("Miyako_Arima", "有間都古");
	}
);

chrSel.ciel.addEventListener("mouseover",
	() => {
		hoverDisplay("Ciel", "シエル");
	}
);

chrSel.sion.addEventListener("mouseover",
	() => {
		hoverDisplay("Sion_Eltnam_Atlasia", "シオン");
	}
);

chrSel.riesbyfe.addEventListener("mouseover",
	() => {
		hoverDisplay("Riesbyfe_Stridberg", "リーズバイフェ");
	}
);

chrSel.vsion.addEventListener("mouseover",
	() => {
		hoverDisplay("Sion_TATARI", "吸血鬼シオン");
	}
);

chrSel.warachia.addEventListener("mouseover",
	() => {
		hoverDisplay("Warachia", "ワラキアの夜");
	}
);

chrSel.roa.addEventListener("mouseover",
	() => {
		hoverDisplay("Michael_Roa_Valdamjong", "ロア");
	}
);

chrSel.maids.addEventListener("mouseover",
	() => {
		hoverDisplay("Hisui_&_Kohaku", "翡翠&琥珀");
	}
);

chrSel.akiha.addEventListener("mouseover",
	() => {
		hoverDisplay("Akiha_Tohno", "遠野秋葉");
	}
);

chrSel.arcueid.addEventListener("mouseover",
	() => {
		hoverDisplay("Arcueid_Brunestud", "アルクェイド");
	}
);

chrSel.pciel.addEventListener("mouseover",
	() => {
		hoverDisplay("Powered_Ciel", "完全武装シエル");
	}
);

chrSel.warc.addEventListener("mouseover",
	() => {
		hoverDisplay("Red_Arcueid", "暴走アルクェイド");
	}
);

chrSel.vakiha.addEventListener("mouseover",
	() => {
		hoverDisplay("Akiha_Vermilion", "赤主秋葉");
	}
);

chrSel.mech.addEventListener("mouseover",
	() => {
		hoverDisplay("Mech-Hisui", "メカヒスイ");
	}
);

chrSel.seifuku.addEventListener("mouseover",
	() => {
		hoverDisplay("Akiha_Tohno_(Seifuku)", "遠野秋葉");
	}
);

chrSel.satsuki.addEventListener("mouseover",
	() => {
		hoverDisplay("Satsuki_Yumizuka", "弓塚さつき");
	}
);

chrSel.len.addEventListener("mouseover",
	() => {
		hoverDisplay("Len", "レン");
	}
);

chrSel.ryougi.addEventListener("mouseover",
	() => {
		hoverDisplay("Shiki_Ryougi", "両儀式");
	}
);

chrSel.wlen.addEventListener("mouseover",
	() => {
		hoverDisplay("White_Len", "白レン");
	}
);

chrSel.nero.addEventListener("mouseover",
	() => {
		hoverDisplay("Nrvnqsr_Chaos", "ネロ・カオス");
	}
);

chrSel.necochaos.addEventListener("mouseover",
	() => {
		hoverDisplay("Neco-Arc_Chaos", "ネコアルク・カオス");
	}
);

chrSel.kohakumech.addEventListener("mouseover",
	() => {
		hoverDisplay("Kohaku_&_Mech", "琥珀&メカヒスイ");
	}
);

chrSel.hisui.addEventListener("mouseover",
	() => {
		hoverDisplay("Hisui", "翡翠");
	}
);

chrSel.neco.addEventListener("mouseover",
	() => {
		hoverDisplay("Neco-Arc", "ネコアルク");
	}
);

chrSel.kohaku.addEventListener("mouseover",
	() => {
		hoverDisplay("Kohaku", "琥珀");
	}
);

chrSel.necomech.addEventListener("mouseover",
	() => {
		hoverDisplay("Neco_&_Mech", "ネコ&メカヒスイ");
	}
);

chrSel.random.addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			chrPrevImg.src = "";
			chrName.innerHTML = "";
		}
	}
);

// Display on click

var selectBanter = new Audio();
function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();

	if (characterName === "Random") {
		switch (Math.floor(Math.random() * 31)) {
			case 0:
				characterName = "Aoko_Aozaki";
				break;
			case 1:
				characterName = "Shiki_Tohno";
				break;
			case 2:
				characterName = "Archetype_Earth";
				break;
			case 3:
				characterName = "Shiki_Nanaya";
				break;
			case 4:
				characterName = "Kouma_Kishima";
				break;
			case 5:
				characterName = "Miyako_Arima";
				break;
			case 6:
				characterName = "Ciel";
				break;
			case 7:
				characterName = "Sion_Eltnam_Atlasia";
				break;
			case 8:
				characterName = "Riesbyfe_Stridberg";
				break;
			case 9:
				characterName = "Sion_TATARI";
				break;
			case 10:
				characterName = "Warachia";
				break;
			case 11:
				characterName = "Michael_Roa_Valdamjong";
				break;
			case 12:
				characterName = "Hisui_&_Kohaku";
				break;
			case 13:
				characterName = "Akiha_Tohno";
				break;
			case 14:
				characterName = "Arcueid_Brunestud";
				break;
			case 15:
				characterName = "Powered_Ciel";
				break;
			case 16:
				characterName = "Red_Arcueid";
				break;
			case 17:
				characterName = "Akiha_Vermilion";
				break;
			case 18:
				characterName = "Mech-Hisui";
				break;
			case 19:
				characterName = "Akiha_Tohno_(Seifuku)";
				break;
			case 20:
				characterName = "Satsuki_Yumizuka";
				break;
			case 21:
				characterName = "Len";
				break;
			case 22:
				characterName = "Shiki_Ryougi";
				break;
			case 23:
				characterName = "White_Len";
				break;
			case 24:
				characterName = "Nrvnqsr_Chaos";
				break;
			case 25:
				characterName = "Neco-Arc_Chaos";
				break;
			case 26:
				characterName = "Kohaku_&_Mech";
				break;
			case 27:
				characterName = "Hisui";
				break;
			case 28:
				characterName = "Neco-Arc";
				break;
			case 29:
				characterName = "Kohaku";
				break;
			case 30:
				characterName = "Neco_&_Mech";
				break;
		}
	}
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, charNameHiragana) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/mbaacc/" + charFileName + ".png";
		chrPrevImg.onload = function() {
			chrPrevImg.style.height = chrPrevImg.naturalHeight * 1.8 + "px";
			document.getElementById("info-portrait-temp").style.height = chrPrevImg.style.height;
		};
		chrName.innerHTML = "<span style='font-size: 1.6em; font-style: italic'>" + charNameHiragana + "</span><br>";
		if (charFileName === "Aoko_Aozaki" || charFileName === "Shiki_Tohno" || charFileName === "Shiki_Nanaya" || charFileName === "Kouma_Kishima" || charFileName === "Miyako_Arima" || charFileName === "Akiha_Tohno" || charFileName === "Shiki_Ryougi") {
			chrName.innerHTML += charFileName.split("_")[1].toUpperCase() + " " + charFileName.split("_")[0].toUpperCase();
		} else if (charFileName === "Archetype_Earth") {
			chrName.innerHTML += "ARCHETYPE:EARTH";
		} else if (charFileName === "Hisui_&_Kohaku") {
			chrName.innerHTML += "HISUI&KOHAKU";
		} else if (charFileName === "Arcueid_Brunestud") {
			chrName.innerHTML += "ARCUEID=BRUNESTUD";
		} else if (charFileName === "Powered_Ciel") {
			chrName.innerHTML += "POWERD CIEL";
		} else if (charFileName === "Akiha_Tohno_(Seifuku)") {
			chrName.innerHTML += "TOHNO AKIHA";
		} else if (charFileName === "Satsuki_Yumizuka") {
			chrName.innerHTML += "YUMIDUKA SATSUKI";
		} else if (charFileName === "Kohaku_&_Mech") {
			chrName.innerHTML += "KOHA & MECH";
		} else {
			chrName.innerHTML += charFileName.replace(/_/g, " ").toUpperCase();
		}
		
		document.getElementById("info-portrait-temp").src = "img/portraits/mbaacc/" + charFileName + ".png";
	
		document.getElementById("info-portrait-temp").classList.remove("portrait-onselect");
		void document.getElementById("info-portrait-temp").offsetWidth;
		document.getElementById("info-portrait-temp").classList.add("portrait-onselect");
	}
	
	switch (characterName) {
		case "Aoko_Aozaki":
			writeCharInfo(
				[
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
				"蒼崎青子"
			);
			break;
		case "Shiki_Tohno":
			writeCharInfo(
				[
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
				"遠野志貴"
			);
			break;
		case "Archetype_Earth":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Archetype: Earth</b> is</p>
				`,
				characterName,
				"真祖アルクェイド"
			);
			break;
		case "Shiki_Nanaya":
			writeCharInfo(
				[
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
				"七夜志貴"
			);
			break;
		case "Kouma_Kishima":
			writeCharInfo(
				[
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
				"軋間紅摩"
			);
			break;
		case "Miyako_Arima":
			writeCharInfo(
				[
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
				"有間都古"
			);
			break;
		case "Ciel":
			writeCharInfo(
				[
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
				"シエル"
			);
			break;
		case "Sion_Eltnam_Atlasia":
			writeCharInfo(
				[
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
				"シオン"
			);
			break;
		case "Riesbyfe_Stridberg":
			writeCharInfo(
				[
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
				"リーズバイフェ"
			);
			break;
		case "Sion_TATARI":
			writeCharInfo(
				[
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
				"吸血鬼シオン"
			);
			break;
		case "Warachia":
			writeCharInfo(
				[
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
				"ワラキアの夜"
			);
			break;
		case "Michael_Roa_Valdamjong":
			writeCharInfo(
				[
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
				"ロア"
			);
			break;
		case "Hisui_&_Kohaku":
			writeCharInfo(
				[
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
				"翡翠&琥珀"
			);
			break;
		case "Akiha_Tohno":
			writeCharInfo(
				[
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
				"遠野秋葉"
			);
			break;
		case "Arcueid_Brunestud":
			writeCharInfo(
				[
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
				"アルクェイド"
			);
			break;
		case "Powered_Ciel":
			writeCharInfo(
				[
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
				"完全武装シエル"
			);
			break;
		case "Red_Arcueid":
			writeCharInfo(
				[
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
				"暴走アルクェイド"
			);
			break;
		case "Akiha_Vermilion":
			writeCharInfo(
				[
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
				"赤主秋葉"
			);
			break;
		case "Mech-Hisui":
			writeCharInfo(
				[
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
				"メカヒスイ"
			);
			break;
		case "Akiha_Tohno_(Seifuku)":
			writeCharInfo(
				[
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
				"遠野秋葉"
			);
			break;
		case "Satsuki_Yumizuka":
			writeCharInfo(
				[
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
				"弓塚さつき"
			);
			break;
		case "Len":
			writeCharInfo(
				[
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
				"レン"
			);
			break;
		case "Shiki_Ryougi":
			writeCharInfo(
				[
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
				"両儀式"
			);
			break;
		case "White_Len":
			writeCharInfo(
				[
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
				"白レン"
			);
			break;
		case "Nrvnqsr_Chaos":
			writeCharInfo(
				[
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
				"ネロ・カオス"
			);
			break;
		case "Neco-Arc_Chaos":
			writeCharInfo(
				[
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
				"ネコアルク・カオス"
			);
			break;
		case "Kohaku_&_Mech":
			writeCharInfo(
				[
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
				"琥珀&メカヒスイ"
			);
			break;
		case "Hisui":
			writeCharInfo(
				[
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
				"翡翠"
			);
			break;
		case "Neco-Arc":
			writeCharInfo(
				[
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
				"ネコアルク"
			);
			break;
		case "Kohaku":
			writeCharInfo(
				[
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
				"琥珀"
			);
			break;
		case "Neco_&_Mech":
			writeCharInfo(
				[
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
				"ネコ&メカヒスイ"
			);
			break;
    }
}

function startupDisplay() {
	var iconArray = Array.prototype.slice.call(document.getElementsByClassName("selectbox-character"));
	iconArray = iconArray.splice(0, iconArray.length - 1);
	
	var characterIcons = [
		[
			chrSel.aoko,
			chrSel.shiki,
			chrSel.hime,
			chrSel.nanaya,
			chrSel.kouma,
		],
		[
			chrSel.miyako,
			chrSel.ciel,
			chrSel.sion,
			chrSel.riesbyfe,
			chrSel.vsion,
			chrSel.warachia,
			chrSel.roa,
		],
		[
			chrSel.maids,
			chrSel.akiha,
			chrSel.arcueid,
			chrSel.pciel,
			chrSel.warc,
			chrSel.vakiha,
			chrSel.mech,
		],
		[
			chrSel.seifuku,
			chrSel.satsuki,
			chrSel.len,
			chrSel.ryougi,
			chrSel.wlen,
			chrSel.nero,
			chrSel.necochaos,
		],
		[
			chrSel.kohakumech,
			chrSel.hisui,
			chrSel.neco,
			chrSel.kohaku,
			chrSel.necomech,
		],
		chrSel.random,
	];
	
	function addIconAnims() {
		if (columnPosition === 0 || columnPosition === 6) {
			characterIcons[2][columnPosition].classList.add("icon-onstart");
			characterIcons[1][columnPositionInverse].classList.add("icon-onstart");
			characterIcons[3][columnPositionInverse].classList.add("icon-onstart");
		} else {
			characterIcons[0][columnPosition - 1].classList.add("icon-onstart");
			characterIcons[2][columnPosition].classList.add("icon-onstart");
			characterIcons[4][columnPosition - 1].classList.add("icon-onstart");
			characterIcons[1][columnPositionInverse].classList.add("icon-onstart");
			characterIcons[3][columnPositionInverse].classList.add("icon-onstart");
		}
		
		if (columnPosition === 3) {
			characterIcons[5].classList.add("icon-onstart");
		}

		columnPosition++;
		columnPositionInverse--;
		if (columnPosition !== 7) {
			setTimeout(addIconAnims, 100);
		}
	}
	
	var columnPosition = 0;
	var columnPositionInverse = 6;
	addIconAnims();
}

startupDisplay();

var textCounter = 0;
var previousValues = [];
function textDisplay() {
	const textArea = document.getElementById("background-text");
	const textContainer = document.getElementsByClassName("text-container");
	var textValues = [
		"She'll smile, and Sings a Song.",
		"So it's a hymn for Crimson moon.",
		"Open your magic circuit, and choose your partner.",
		"Images are magic.There are internal images that develop out of thought,",
		"It will be power, and become glorious.",
		"Sweet voice and Melty blood.",
		"experience and imagination,and grow into stories of information,narrative<br><span style='margin-left: 318px'>and fairytale,touching the mind, the heart and the soul.</span>",
	];
	var textSpeed = Math.random() * (3 - 1) + 1;
	if (previousValues.length === 2 && previousValues[0] === previousValues[1] && previousValues[0] === 1) {
		textSpeed *= -1;
	} else if (previousValues.length === 2 && previousValues[0] === previousValues[1] && previousValues[0] === 0) {
		
	} else {
		if (Math.floor(Math.random() * 2) === 1) {
			textSpeed *= -1;
		}
	}
	var textPosition = [
		Math.floor(Math.random() * textArea.clientWidth),
		Math.floor(Math.random() * (textArea.clientHeight - 50)),
	];
	if (textSpeed > 0) {
		previousValues.push(1);
		// ((max - clamp) - min) + min
		textPosition[0] = Math.floor(Math.random() * ((textArea.clientWidth - 300) + 150) - 150);
	} else {
		previousValues.push(0);
		textPosition[0] = Math.floor(Math.random() * ((textArea.clientWidth) - 200) + 200);
	}

	textContainer[textCounter].innerHTML = `
		<div class="bg-text" style="--end-coords: ` + 6 * textSpeed + `vw; left: ` + textPosition[0] + `px; top: ` + textPosition[1] + `px;">
			` + textValues[Math.floor(Math.random() * textValues.length)] + `
		</div>
	`

	setTimeout(function() {
		textContainer[textCounter].innerHTML = "";
	},2000);

	textCounter++;

	if (textCounter === 4) {
		textCounter = 0;
	}
	
	if (previousValues.length === 3) {
		previousValues.splice(0, 1);
	}
}

setInterval(textDisplay, 666.6666666666666666666666666666);

window.addEventListener("click", function() {
	console.log(this.button);
});