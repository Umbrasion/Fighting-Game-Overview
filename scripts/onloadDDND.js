const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-dongdong"),
	document.getElementById("character-shuang"),
	document.getElementById("character-ken"),
	document.getElementById("character-yinyin"),
	document.getElementById("character-mingboy"),
	document.getElementById("character-liu"),
	document.getElementById("character-wu"),
	document.getElementById("character-jie"),
	document.getElementById("character-gouki"),
	document.getElementById("character-terminator"),
	document.getElementById("character-mian"),
	document.getElementById("character-jian"),
	document.getElementById("character-mo"),
	document.getElementById("character-jiang"),
	document.getElementById("character-jiejie"),
	document.getElementById("character-xiao"),
	document.getElementById("character-huo"),
	document.getElementById("character-mario"),
	document.getElementById("character-wukong"),
	document.getElementById("character-dalan"),
	document.getElementById("character-zhuge"),
	document.getElementById("character-feifei"),
	document.getElementById("character-sheng"),
	document.getElementById("character-korone"),
];

const pageMusic = new Audio("audio/music/DDND - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.1;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/DDND - Character Select intro.ogg");
pageMusicIntro.volume = 0.1;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/ddnd/cursor.wav"),
	confirm: new Audio("audio/sfx/ddnd/confirm.wav"),
}
sfx.cursor.volume = 0.1;
sfx.confirm.volume = 0.1;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, charNameHanzi) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/ddnd/" + charFileName + ".png";
		chrName.innerHTML = charNameHanzi;

		chrPrevImg.style.height = (chrPrevImg.naturalHeight / 480) * 100 + "vh";
		if (charFileName === "Jian_Ci_Lang") {
			chrPrevImg.style.bottom = ((205 - 39) / 480) * 100 + "vh";
			chrPrevImg.style.transform = "scale(-1,1)";
		} else {
			chrPrevImg.style.bottom = "42.708333vh";
			chrPrevImg.style.transform = "scale(1,1)";
		}
	}
}

function positionCursor(positionID) {
	csCursor = document.getElementById("select-cursor");

	csCursor.style.left = Math.floor(positionID % 8) * 109 + 4 + "px";
	csCursor.style.top = Math.floor(positionID / 8) * 105 + -6 + "px";
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target.dataset.hanzi);
			positionCursor(chrSel.indexOf(event.target.parentElement.parentElement));
		}
	);
});

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, charNameHanzi) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/ddnd/" + charFileName + ".png";
		chrName.innerHTML = charNameHanzi;

		chrPrevImg.style.height = (chrPrevImg.naturalHeight / 480) * 100 + "vh";
		if (charFileName === "Jian_Ci_Lang") {
			chrPrevImg.style.bottom = ((205 - 39) / 480) * 100 + "vh";
			chrPrevImg.style.transform = "scale(-1,1)";
		} else {
			chrPrevImg.style.bottom = "42.708333vh";
			chrPrevImg.style.transform = "scale(1,1)";
		}
	}
	
	switch (characterName) {
		case "Dong_Dong":
			writeCharInfo(
				[
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
                "東東"
			);
			break;
		case "A_Shuang":
			writeCharInfo(
				[
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
                "阿爽"
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
				characterName,
                "肯"
			);
			break;
		case "Yin_Yin":
			writeCharInfo(
				[
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
                "茵茵"
			);
			break;
		case "Ming_Boy":
			writeCharInfo(
				[
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
                "明仔"
			);
			break;
		case "Liu_Mang":
			writeCharInfo(
				[
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
                "足球流氓"
			);
			break;
		case "Wu_Liao_Jun":
			writeCharInfo(
				[
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
                "无聊君"
			);
			break;
		case "Jie_Mei_Hua":
			writeCharInfo(
				[
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
                "姐妹花"
			);
			break;
		case "GOUKI":
			writeCharInfo(
				[
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
                "GOUKI"
			);
			break;
		case "Terminator":
			writeCharInfo(
				[
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
                "终结者"
			);
			break;
		case "Mian_Hua_Tang":
			writeCharInfo(
				[
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
                "棉花糖"
			);
			break;
		case "Jian_Ci_Lang":
			writeCharInfo(
				[
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
                "健次郎"
			);
			break;
		case "Mo_Shu_Shi":
			writeCharInfo(
				[
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
                "魔術師"
			);
			break;
		case "Jiang_Bao":
			writeCharInfo(
				[
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
                "酱爆"
			);
			break;
		case "Jie_Jie":
			writeCharInfo(
				[
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
                "杰杰"
			);
			break;
		case "Xiao_Ban":
			writeCharInfo(
				[
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
                "小胖"
			);
			break;
		case "Huo_Chai_Ren":
			writeCharInfo(
				[
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
                "火柴人"
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
				characterName,
                "马里奥"
			);
			break;
		case "Sun_Wu_Kong":
			writeCharInfo(
				[
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
                "孙悟空"
			);
			break;
		case "Da_Lan":
			writeCharInfo(
				[
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
                "大懒"
			);
			break;
		case "Zhuge_Liang":
			writeCharInfo(
				[
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
                "諸葛亮"
			);
			break;
		case "Fei_Fei":
			writeCharInfo(
				[
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
                "菲菲"
			);
			break;
		case "Sheng_Hua_Nan":
			writeCharInfo(
				[
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
                "生化男"
			);
			break;
		case "Korone":
			writeCharInfo(
				[
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
                "<span style='font-family: serif'>KORONE</span>"
			);
			break;
    }
}

var backgroundNum = 1;
var backgroundNumForward = true;
setInterval(function() {
	document.body.style.backgroundImage = "url('../../img/backgrounds/DDND_" + backgroundNum + ".png')";
	if (backgroundNumForward) {
		backgroundNum++;
	} else {
		backgroundNum--;
	}
	
	if (backgroundNum === 5) {
		backgroundNum = 3;
		backgroundNumForward = false;
	} else if (backgroundNum === 0) {
		backgroundNum = 2;
		backgroundNumForward = true;
	}
}, 145);