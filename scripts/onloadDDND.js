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



var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, charNameHanzi) {
	//sfx.cursor.currentTime = 0;
	//sfx.cursor.play();
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/ddnd/" + charFileName + ".png";
		chrName.innerHTML = charNameHanzi;
	}
}

chrSel[0].addEventListener("mouseover",
    () => {
        hoverDisplay("Dong_Dong", "東東");
    }
);
chrSel[1].addEventListener("mouseover",
    () => {
        hoverDisplay("A_Shuang", "阿爽");
    }
);
chrSel[2].addEventListener("mouseover",
    () => {
        hoverDisplay("Ken", "肯");
    }
);
chrSel[3].addEventListener("mouseover",
    () => {
        hoverDisplay("Yin_Yin", "茵茵");
    }
);
chrSel[4].addEventListener("mouseover",
    () => {
        hoverDisplay("Ming_Boy", "明仔");
    }
);
chrSel[5].addEventListener("mouseover",
    () => {
        hoverDisplay("Liu_Mang", "足球流氓");
    }
);
chrSel[6].addEventListener("mouseover",
    () => {
        hoverDisplay("Wu_Liao_Jun", "无聊君");
    }
);
chrSel[7].addEventListener("mouseover",
    () => {
        hoverDisplay("Jie_Mei_Hua", "姐妹花");
    }
);
chrSel[8].addEventListener("mouseover",
    () => {
        hoverDisplay("GOUKI", "GOUKI");
    }
);
chrSel[9].addEventListener("mouseover",
    () => {
        hoverDisplay("Terminator", "终结者");
    }
);
chrSel[10].addEventListener("mouseover",
    () => {
        hoverDisplay("Mian_Hua_Tang", "棉花糖");
    }
);
chrSel[11].addEventListener("mouseover",
    () => {
        hoverDisplay("Jian_Ci_Lang", "健次郎");
    }
);
chrSel[12].addEventListener("mouseover",
    () => {
        hoverDisplay("Mo_Shu_Shi", "魔術師");
    }
);
chrSel[13].addEventListener("mouseover",
    () => {
        hoverDisplay("Jiang_Bao", "酱爆");
    }
);
chrSel[14].addEventListener("mouseover",
    () => {
        hoverDisplay("Jie_Jie", "杰杰");
    }
);
chrSel[15].addEventListener("mouseover",
    () => {
        hoverDisplay("Xiao_Ban", "小胖");
    }
);
chrSel[16].addEventListener("mouseover",
    () => {
        hoverDisplay("Huo_Chai_Ren", "火柴人");
    }
);
chrSel[17].addEventListener("mouseover",
    () => {
        hoverDisplay("Mario", "马里奥");
    }
);
chrSel[18].addEventListener("mouseover",
    () => {
        hoverDisplay("Sun_Wu_Kong", "孙悟空");
    }
);
chrSel[19].addEventListener("mouseover",
    () => {
        hoverDisplay("Da_Lan", "大懒");
    }
);
chrSel[20].addEventListener("mouseover",
    () => {
        hoverDisplay("Zhuge_Liang", "諸葛亮");
    }
);
chrSel[21].addEventListener("mouseover",
    () => {
        hoverDisplay("Fei_Fei", "菲菲");
    }
);
chrSel[22].addEventListener("mouseover",
    () => {
        hoverDisplay("Sheng_Hua_Nan", "生化男");
    }
);
chrSel[23].addEventListener("mouseover",
    () => {
        hoverDisplay("Korone", "<span style='font-family: serif'>KORONE</span>");
    }
);

function runDisplay(characterName) {
	previewDisplayOn = false;
	// chrPrevImg.parentElement.classList.remove("portrait-onselect");
	// void chrPrevImg.parentElement.offsetWidth;
	
	//sfx.confirm.currentTime = 0;
	//sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, charNameHanzi) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/ddnd/" + charFileName + ".png";
		chrName.innerHTML = charNameHanzi;
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