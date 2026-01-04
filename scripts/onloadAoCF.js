const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	reimu: document.getElementById("character-reimu"),
	random: document.getElementById("character-random"),
	marisa: document.getElementById("character-marisa"),
	ichirin: document.getElementById("character-ichirin"),
	nitori: document.getElementById("character-nitori"),
	futo: document.getElementById("character-futo"),
	byakuren: document.getElementById("character-byakuren"),
	kokoro: document.getElementById("character-kokoro"),
	miko: document.getElementById("character-miko"),
	koishi: document.getElementById("character-koishi"),
	kasen: document.getElementById("character-kasen"),
	mokou: document.getElementById("character-mokou"),
	mamizou: document.getElementById("character-mamizou"),
	sukuna: document.getElementById("character-sukuna"),
	reisen: document.getElementById("character-reisen"),
	doremy: document.getElementById("character-doremy"),
	sumireko: document.getElementById("character-sumireko"),
	tenshi: document.getElementById("character-tenshi"),
	joon: document.getElementById("character-joon"),
	yukari: document.getElementById("character-yukari"),
}

const pageMusic = new Audio("audio/music/AoCF - Seeds of Suspicion.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/aocf/aocfCursor.wav"),
	confirm: new Audio("audio/sfx/aocf/aocfOk.wav"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

// Display on hover

function hoverDisplay(charFileName, charFullName) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	clearTimeout(cycleRandom);
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/aocf/" + charFileName + ".png";
		chrName.innerHTML = "<span>" + charFullName[0] + "</span><br><span>" + charFullName[1] + "</span>";
	}
}

chrSel.reimu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Reimu_Hakurei", ["博麗霊夢", "Reimu Hakurei"]);
	}
);

chrSel.marisa.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Marisa_Kirisame", ["霧雨魔理沙", "Marisa Kirisame"]);
	}
);

chrSel.ichirin.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Ichirin_Kumoi", ["雲居一輪", "Ichirin Kumoi & Unzan"]);
	}
);

chrSel.nitori.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Nitori_Kawashiro", ["河城にとり", "Nitori Kawashiro"]);
	}
);

chrSel.futo.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Mononobe_no_Futo", ["物部布都", "Mononobe no Futo"]);
	}
);

chrSel.byakuren.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Byakuren_Hijiri", ["聖白蓮", "Hijiri Byakuren"]);
	}
);

chrSel.kokoro.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hata_no_Kokoro", ["秦こころ", "Hata no Kokoro"]);
	}
);

chrSel.miko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Toyosatomimi_no_Miko", ["豊聡耳神子", "Toyosatomimi no Miko"]);
	}
);

chrSel.koishi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Koishi_Komeiji", ["古明地こいし", "Koishi Komeiji"]);
	}
);

chrSel.kasen.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kasen_Ibaraki", ["茨木華扇", "Kasen Ibaraki"]);
	}
);

chrSel.mokou.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Fujiwara_no_Mokou", ["藤原妹紅", "Fujiwara no Mokou"]);
	}
);

chrSel.mamizou.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Mamizou_Futatsuiwa", ["二ッ岩マミゾウ", "Mamizou Futatsuiwa"]);
	}
);

chrSel.sukuna.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Shinmyoumaru_Sukuna", ["少名針妙丸", "Shinmyoumaru Sukuna"]);
	}
);

chrSel.reisen.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Reisen_Udongein_Inaba", ["鈴仙・U・イナバ", "Reisen Udongein Inaba"]);
	}
);

chrSel.doremy.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Doremy_Sweet", ["ドレミー・スイート", "Doremy Sweet"]);
	}
);

chrSel.sumireko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Sumireko_Usami", ["宇佐見菫子", "Sumireko Usami"]);
	}
);

chrSel.tenshi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Tenshi_Hinanawi", ["比那名居天子", "Tenshi Hinanawi"]);
	}
);

chrSel.joon.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Joon_Yorigami", ["依神女苑", "Jyoon & Shion Yorigami"]);
	}
);

chrSel.yukari.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yukari_Yakumo", ["八雲紫", "Yukari Yakumo"]);
	}
);

// Random select

var cycleRandom;
chrSel.random.addEventListener("mouseover",
	(event) => {
		clearTimeout(cycleRandom);
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			randomDisplay();
		}
	}
);

var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		var displayCharacter = Math.floor(Math.random() * 19)
		if (displayCharacter == previousSelection) {
			continue reroll;
		} else {
			switch (displayCharacter) {
				case 0:
					chrPrevImg.src = "img/portraits/aocf/Reimu_Hakurei.png";
					chrName.innerHTML = "<span>博麗霊夢</span><br><span>Reimu Hakurei</span>";
					break;
				case 1:
					chrPrevImg.src = "img/portraits/aocf/Marisa_Kirisame.png";
					chrName.innerHTML = "<span>霧雨魔理沙</span><br><span>Marisa Kirisame</span>";
					break;
				case 2:
					chrPrevImg.src = "img/portraits/aocf/Ichirin_Kumoi.png";
					chrName.innerHTML = "<span>雲居一輪</span><br><span>Ichirin Kumoi & Unzan</span>";
					break;
				case 3:
					chrPrevImg.src = "img/portraits/aocf/Nitori_Kawashiro.png";
					chrName.innerHTML = "<span>河城にとり</span><br><span>Nitori Kawashiro</span>";
					break;
				case 4:
					chrPrevImg.src = "img/portraits/aocf/Mononobe_no_Futo.png";
					chrName.innerHTML = "<span>物部布都</span><br><span>Mononobe no Futo</span>";
					break;
				case 5:
					chrPrevImg.src = "img/portraits/aocf/Byakuren_Hijiri.png";
					chrName.innerHTML = "<span>聖白蓮</span><br><span>Hijiri Byakuren</span>";
					break;
				case 6:
					chrPrevImg.src = "img/portraits/aocf/Hata_no_Kokoro.png";
					chrName.innerHTML = "<span>秦こころ</span><br><span>Hata no Kokoro</span>";
					break;
				case 7:
					chrPrevImg.src = "img/portraits/aocf/Toyosatomimi_no_Miko.png";
					chrName.innerHTML = "<span>豊聡耳神子</span><br><span>Toyosatomimi no Miko</span>";
					break;
				case 8:
					chrPrevImg.src = "img/portraits/aocf/Koishi_Komeiji.png";
					chrName.innerHTML = "<span>古明地こいし</span><br><span>Koishi Komeiji</span>";
					break;
				case 9:
					chrPrevImg.src = "img/portraits/aocf/Kasen_Ibaraki.png";
					chrName.innerHTML = "<span>茨木華扇</span><br><span>Kasen Ibaraki</span>";
					break;
				case 10:
					chrPrevImg.src = "img/portraits/aocf/Fujiwara_no_Mokou.png";
					chrName.innerHTML = "<span>藤原妹紅</span><br><span>Fujiwara no Mokou</span>";
					break;
				case 11:
					chrPrevImg.src = "img/portraits/aocf/Mamizou_Futatsuiwa.png";
					chrName.innerHTML = "<span>二ッ岩マミゾウ</span><br><span>Mamizou Futatsuiwa</span>";
					break;
				case 12:
					chrPrevImg.src = "img/portraits/aocf/Shinmyoumaru_Sukuna.png";
					chrName.innerHTML = "<span>少名針妙丸</span><br><span>Shinmyoumaru Sukuna</span>";
					break;
				case 13:
					chrPrevImg.src = "img/portraits/aocf/Reisen_Udongein_Inaba.png";
					chrName.innerHTML = "<span>鈴仙・U・イナバ</span><br><span>Reisen Udongein Inaba</span>";
					break;
				case 14:
					chrPrevImg.src = "img/portraits/aocf/Doremy_Sweet.png";
					chrName.innerHTML = "<span>ドレミー・スイート</span><br><span>Doremy Sweet</span>";
					break;
				case 15:
					chrPrevImg.src = "img/portraits/aocf/Sumireko_Usami.png";
					chrName.innerHTML = "<span>宇佐見菫子</span><br><span>Sumireko Usami</span>";
					break;
				case 16:
					chrPrevImg.src = "img/portraits/aocf/Tenshi_Hinanawi.png";
					chrName.innerHTML = "<span>比那名居天子</span><br><span>Tenshi Hinanawi</span>";
					break;
				case 17:
					chrPrevImg.src = "img/portraits/aocf/Joon_Yorigami.png";
					chrName.innerHTML = "<span>依神女苑&紫苑</span><br><span>Jyoon & Shion Yorigami</span>";
					break;
				case 18:
					chrPrevImg.src = "img/portraits/aocf/Yukari_Yakumo.png";
					chrName.innerHTML = "<span>八雲紫</span><br><span>Yukari Yakumo</span>";
					break;
			}
			//sfx.cursor.pause();
			//sfx.cursor.fastSeek(0);
			//sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 80);
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	chrPrevImg.classList.remove("portrait-onselect");
	void chrPrevImg.offsetWidth;
	
	if (characterName == "random") {
		clearTimeout(cycleRandom);
		clearDisplay();
		switch (Math.floor(Math.random() * 19)) {
			case 0:
				characterName = "reimu";
				break;
			case 1:
				characterName = "marisa";
				break;
			case 2:
				characterName = "ichirin";
				break;
			case 3:
				characterName = "nitori";
				break;
			case 4:
				characterName = "futo";
				break;
			case 5:
				characterName = "byakuren";
				break;
			case 6:
				characterName = "kokoro";
				break;
			case 7:
				characterName = "miko";
				break;
			case 8:
				characterName = "koishi";
				break;
			case 9:
				characterName = "kasen";
				break;
			case 10:
				characterName = "mokou";
				break;
			case 11:
				characterName = "mamizou";
				break;
			case 12:
				characterName = "sukuna";
				break;
			case 13:
				characterName = "reisen";
				break;
			case 14:
				characterName = "doremy";
				break;
			case 15:
				characterName = "sumireko";
				break;
			case 16:
				characterName = "tenshi";
				break;
			case 17:
				characterName = "joon";
				break;
			case 18:
				characterName = "yukari";
				break;
		}
	}
	
	sfx.confirm.pause();
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, charFullName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/aocf/" + charFileName + "_selected.png";
		chrName.innerHTML = "<span>" + charFullName[0] + "</span><br><span>" + charFullName[1] + "</span>";
	}
	
	switch (characterName) {
		case "reimu":
			writeCharInfo(
				[
					"<span class='archetype-allrounder'>All-Rounder</span>",
					"<span class='range-midrange'>Mid-Range</span>",
					"<span class='unimech-none'>None</span>"
				],
				[4,2,2,3,4,5],
				[
					"<li>Good overall balance and ease of use</li><li>Tricky mixups and knockdown pressure</li><li>Versitile zoning</li>",
					"<li>Lack of specialization and gimmicks</li><li>Lack of a decent reversal</li>"
				],
				`
				<p><b>Reimu Hakurei</b> is</p>
				`,
				"Reimu_Hakurei",
				["博麗霊夢", "Reimu Hakurei"]
			);
			break;
		case "marisa":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Marisa Kirisame</b> is</p>
				`,
				"Marisa_Kirisame",
				["霧雨魔理沙", "Marisa Kirisame"]
			);
			break;
		case "ichirin":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Ichirin Kumoi</b> is</p>
				`,
				"Ichirin_Kumoi",
				["雲居一輪", "Ichirin Kumoi & Unzan"]
			);
			break;
		case "nitori":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Nitori Kawashiro</b> is</p>
				`,
				"Nitori_Kawashiro",
				["河城にとり", "Nitori Kawashiro"]
			);
			break;
		case "futo":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mononobe no Futo</b> is</p>
				`,
				"Mononobe_no_Futo",
				["物部布都", "Mononobe no Futo"]
			);
			break;
		case "byakuren":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Byakuren Hijiri</b> is</p>
				`,
				"Byakuren_Hijiri",
				["聖白蓮", "Hijiri Byakuren"]
			);
			break;
		case "kokoro":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hata no Kokoro</b> is</p>
				`,
				"Hata_no_Kokoro",
				["秦こころ", "Hata no Kokoro"]
			);
			break;
		case "miko":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Toyosatomimi no Miko</b> is</p>
				`,
				"Toyosatomimi_no_Miko",
				["豊聡耳神子", "Toyosatomimi no Miko"]
			);
			break;
		case "koishi":
			writeCharInfo(
				[
					"<span class='archetype-technical'>Technical</span>",
					"<span class='range-midrange'>Mid-Range</span>",
					"<span class='unimech-dashteleport'>Teleporting Dash</span><br><span class='unimech-movestorage'>Move Storage</span>"
				],
				[5,4,4,1,3,1],
				[
					"<li>Mechanics that are tricky to handle but rewarding when they're pulled off</li><li>High-end damage while also having good defense</li><li>Good zoning</li>", 
					"<li>Complicated and possibly confusing techniques</li><li>Limited movement with a slow dash</li>"
				],
				`
					<p><b>Koishi Komeiji</b> is a complicated character with a plethera of unique mechanics and techniques. She has good normals as well as good zoning, while also having an invincible reversal, something not many others on the roster have.</p>
					<p>She's very atypical in how she plays. Her forward dash, when performed on the middle lane, teleports her behind her opponent, but is otherwise very slow. Performing certain moves stores the move used, after which Koishi will automatically use the move when certain conditions are met. She is complicated to learn, but in the right hands can perform well.</p>
				`,
				"Koishi_Komeiji",
				["古明地こいし", "Koishi Komeiji"]
			);
			break;
		case "kasen":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Kasen Ibaraki</b> is</p>
				`,
				"Kasen_Ibaraki",
				["茨木華扇", "Kasen Ibaraki"]
			);
			break;
		case "mokou":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Fujiwara no Mokou</b> is</p>
				`,
				"Fujiwara_no_Mokou",
				["藤原妹紅", "Fujiwara no Mokou"]
			);
			break;
		case "mamizou":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mamizou Futatsuiwa</b> is</p>
				`,
				"Mamizou_Futatsuiwa",
				["二ッ岩マミゾウ", "Mamizou Futatsuiwa"]
			);
			break;
		case "sukuna":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Shinmyoumaru Sukuna</b> is</p>
				`,
				"Shinmyoumaru_Sukuna",
				["少名針妙丸", "Shinmyoumaru Sukuna"]
			);
			break;
		case "reisen":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Reisen Udongein Inaba</b> is</p>
				`,
				"Reisen_Udongein_Inaba",
				["鈴仙・U・イナバ", "Reisen Udongein Inaba"]
			);
			break;
		case "doremy":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Doremy Sweet</b> is</p>
				`,
				"Doremy_Sweet",
				["ドレミー・スイート", "Doremy Sweet"]
			);
			break;
		case "sumireko":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Sumireko Usami</b> is</p>
				`,
				"Sumireko_Usami",
				["宇佐見菫子", "Sumireko Usami"]
			);
			break;
		case "tenshi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Tenshi Hinanawi</b> is</p>
				`,
				"Tenshi_Hinanawi",
				["比那名居天子", "Tenshi Hinanawi"]
			);
			break;
		case "joon":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Jo'on Yorigami</b> is</p>
				`,
				"Joon_Yorigami",
				["依神女苑", "Jyoon & Shion Yorigami"]
			);
			break;
		case "yukari":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yukari Yakumo</b> is</p>
				`,
				"Yukari_Yakumo",
				["八雲紫", "Yukari Yakumo"]
			);
			break;
	}
	
	chrPrevImg.classList.add("portrait-onselect");
}

// $(window).resize(setLocations);

function setLocations() {
	var chrCoords = [3,0, 124,0, 135,77, 39,77];
	autoResize("selectbox-fullroster", chrSel.reimu, chrCoords);
	chrCoords = [129,0, 248,0, 238,77, 140,77];
	autoResize("selectbox-fullroster", chrSel.random, chrCoords);
	chrCoords = [254,0, 375,0, 339,77, 244,77];
	autoResize("selectbox-fullroster", chrSel.marisa, chrCoords);
	chrCoords = [39,81, 135,81, 141,158, 54,158];
	autoResize("selectbox-fullroster", chrSel.ichirin, chrCoords);
	chrCoords = [140,81, 238,81, 231,158, 147,158];
	autoResize("selectbox-fullroster", chrSel.nitori, chrCoords);
	chrCoords = [243,81, 339,81, 325,158, 237,158];
	autoResize("selectbox-fullroster", chrSel.futo, chrCoords);
	chrCoords = [54,162, 142,162, 144,239, 60,239];
	autoResize("selectbox-fullroster", chrSel.byakuren, chrCoords);
	chrCoords = [147,162, 231,162, 227,239, 150,239];
	autoResize("selectbox-fullroster", chrSel.kokoro, chrCoords);
	chrCoords = [237,162, 324,162, 318,239, 234,239];
	autoResize("selectbox-fullroster", chrSel.miko, chrCoords);
	chrCoords = [60,243, 144,243, 144,320, 60,320];
	autoResize("selectbox-fullroster", chrSel.koishi, chrCoords);
	chrCoords = [233,243, 318,243, 318,320, 233,320];
	autoResize("selectbox-fullroster", chrSel.kasen, chrCoords);
	chrCoords = [59,324, 144,324, 141,401, 54,401];
	autoResize("selectbox-fullroster", chrSel.mokou, chrCoords);
	chrCoords = [150,324, 229,324, 232,401, 146,401];
	autoResize("selectbox-fullroster", chrSel.mamizou, chrCoords);
	chrCoords = [233,324, 319,324, 325,401, 237,401];
	autoResize("selectbox-fullroster", chrSel.sukuna, chrCoords);
	chrCoords = [53,405, 140,405, 133,482, 38,482];
	autoResize("selectbox-fullroster", chrSel.reisen, chrCoords);
	chrCoords = [146,405, 232,405, 239,482, 139,482];
	autoResize("selectbox-fullroster", chrSel.doremy, chrCoords);
	chrCoords = [237,405, 325,405, 339,482, 245,482];
	autoResize("selectbox-fullroster", chrSel.sumireko, chrCoords);
	chrCoords = [38,486, 133,486, 121,565, 0,565];
	autoResize("selectbox-fullroster", chrSel.tenshi, chrCoords);
	chrCoords = [139,486, 239,486, 251,565, 127,565];
	autoResize("selectbox-fullroster", chrSel.joon, chrCoords);
	chrCoords = [245,486, 340,486, 378,565, 257,565];
	autoResize("selectbox-fullroster", chrSel.yukari, chrCoords);
	
	document.getElementsByClassName("selectbox-container")[0].style.width = document.getElementsByClassName("selectbox-fullroster")[0].offsetWidth + "px";
	console.log(document.getElementsByClassName("selectbox-container")[0].style.width);
}

// document.getElementsByClassName("selectbox-fullroster")[0].onload = setTimeout(setLocations, 1);