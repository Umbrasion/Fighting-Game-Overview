const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	margaret: document.getElementById("character-margaret"),
	ken: document.getElementById("character-ken"),
	sho: document.getElementById("character-sho"),
	yukari: document.getElementById("character-yukari"),
	naoto: document.getElementById("character-naoto"),
	labrys: document.getElementById("character-labrys"),
	teddie: document.getElementById("character-teddie"),
	mitsuru: document.getElementById("character-mitsuru"),
	yukiko: document.getElementById("character-yukiko"),
	aigis: document.getElementById("character-aigis"),
	narukami: document.getElementById("character-narukami"),
	adachi: document.getElementById("character-adachi"),
	yosuke: document.getElementById("character-yosuke"),
	elizabeth: document.getElementById("character-elizabeth"),
	chie: document.getElementById("character-chie"),
	akihiko: document.getElementById("character-akihiko"),
	kanji: document.getElementById("character-kanji"),
	slabrys: document.getElementById("character-slabrys"),
	minazuki: document.getElementById("character-minazuki"),
	junpei: document.getElementById("character-junpei"),
	marie: document.getElementById("character-marie"),
	rise: document.getElementById("character-rise"),
}

const chrImg = {
	margaret: document.getElementById("selectbox-margaret"),
	ken: document.getElementById("selectbox-ken"),
	sho: document.getElementById("selectbox-sho"),
	yukari: document.getElementById("selectbox-yukari"),
	naoto: document.getElementById("selectbox-naoto"),
	labrys: document.getElementById("selectbox-labrys"),
	teddie: document.getElementById("selectbox-teddie"),
	mitsuru: document.getElementById("selectbox-mitsuru"),
	yukiko: document.getElementById("selectbox-yukiko"),
	aigis: document.getElementById("selectbox-aigis"),
	narukami: document.getElementById("selectbox-narukami"),
	adachi: document.getElementById("selectbox-adachi"),
	yosuke: document.getElementById("selectbox-yosuke"),
	elizabeth: document.getElementById("selectbox-elizabeth"),
	chie: document.getElementById("selectbox-chie"),
	akihiko: document.getElementById("selectbox-akihiko"),
	kanji: document.getElementById("selectbox-kanji"),
	slabrys: document.getElementById("selectbox-slabrys"),
	minazuki: document.getElementById("selectbox-minazuki"),
	junpei: document.getElementById("selectbox-junpei"),
	marie: document.getElementById("selectbox-marie"),
	rise: document.getElementById("selectbox-rise"),
}

const pageMusic = new Audio("audio/music/P4AU - Electronica In Velvet Room Loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

// const pageMusicIntro = new Audio("../audio/music/P4AU - Electronica In Velvet Room Intro.ogg");
// pageMusicIntro.volume = 0.2;
// pageMusicIntro.play();

// pageMusicIntro.onended = function() {
// 	pageMusic.play();
// }
pageMusic.currentTime = 20.58;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/p4au/p4auCursor.ogg"),
	confirm: new Audio("audio/sfx/p4au/p4auConfirm.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.3;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.style.backgroundImage = "";
	chrName.src = "";
}

function hoverDisplay(iconImg, charFileName, portraitScaling) {
	if (charFileName == "none") {
		iconImg.style.opacity = 0;
		if (previewDisplayOn) {
			clearDisplay();
		}
	} else {
		iconImg.style.opacity = 1;
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			chrPrevImg.style.backgroundImage = "url('img/portraits/p4au/" + charFileName + "_cut.png')";
			chrName.src = "img/characterSelect/p4au/Nameplate_" + charFileName + ".png";
			chrPrevImg.style.backgroundSize = portraitScaling[0];
			chrPrevImg.style.backgroundPosition = portraitScaling[1];
			
			document.getElementById("info-portrait-positioner").classList.remove("portrait-onhover");
			chrName.classList.remove("name-onhover");
			void document.getElementById("info-portrait-positioner").offsetWidth;
			void chrName.offsetWidth;
			document.getElementById("info-portrait-positioner").classList.add("portrait-onhover");
			chrName.classList.add("name-onhover");
		}
	}
}

chrSel.margaret.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.margaret, "Margaret", ["54%", "top 21% left 4%"]);
	}
);
chrSel.margaret.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.margaret, "none");
	}
);

chrSel.ken.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.ken, "Ken_Amada", ["120%", "top 10% left 78%"]);
	}
);
chrSel.ken.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.ken, "none");
	}
);

chrSel.sho.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.sho, "Sho", ["135%", "top -18% left -15%"]);
	}
);
chrSel.sho.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.sho, "none");
	}
);

chrSel.yukari.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.yukari, "Yukari_Takeba", ["130%", "top 54% left 50%"]);
	}
);
chrSel.yukari.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.yukari, "none");
	}
);

chrSel.naoto.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.naoto, "Naoto_Shirogane", ["60%", "top -33% left 23%"]);
	}
);
chrSel.naoto.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.naoto, "none");
	}
);

chrSel.labrys.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.labrys, "Labrys", ["175%", "top 28% left 85%"]);
	}
);
chrSel.labrys.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.labrys, "none");
	}
);

chrSel.teddie.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.teddie, "Teddie", ["62%", "top 2000% left 30%"]);
	}
);
chrSel.teddie.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.teddie, "none");
	}
);

chrSel.mitsuru.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.mitsuru, "Mitsuru_Kirijo", ["165%", "top -31% left 118%"]);
	}
);
chrSel.mitsuru.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.mitsuru, "none");
	}
);

chrSel.yukiko.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.yukiko, "Yukiko_Amagi", ["75%", "top 50% left -10%"]);
	}
);
chrSel.yukiko.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.yukiko, "none");
	}
);

chrSel.aigis.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.aigis, "Aigis", ["160%", "top 60% left 34%"]);
	}
);
chrSel.aigis.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.aigis, "none");
	}
);

chrSel.narukami.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.narukami, "Yu_Narukami", ["105%", "top 15% left 140%"]);
	}
);
chrSel.narukami.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.narukami, "none");
	}
);

chrSel.adachi.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.adachi, "Tohru_Adachi", ["99%", "top -28% left -600%"]);
	}
);
chrSel.adachi.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.adachi, "none");
	}
);

chrSel.yosuke.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.yosuke, "Yosuke_Hanamura", ["71%", "top 8% left 0%"]);
	}
);
chrSel.yosuke.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.yosuke, "none");
	}
);

chrSel.elizabeth.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.elizabeth, "Elizabeth", ["114%", "top -15% left 115%"]);
	}
);
chrSel.elizabeth.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.elizabeth, "none");
	}
);

chrSel.chie.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.chie, "Chie_Satonaka", ["68%", "top -65% left -10%"]);
	}
);
chrSel.chie.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.chie, "none");
	}
);

chrSel.akihiko.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.akihiko, "Akihiko_Sanada", ["130%", "top -36% left 218%"]);
	}
);
chrSel.akihiko.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.akihiko, "none");
	}
);

chrSel.kanji.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.kanji, "Kanji_Tatsumi", ["125%", "top -12% left 65%"]);
	}
);
chrSel.kanji.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.kanji, "none");
	}
);

chrSel.slabrys.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.slabrys, "Shadow_Labrys", ["175%", "top 28% left 85%"]);
	}
);
chrSel.slabrys.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.slabrys, "none");
	}
);

chrSel.minazuki.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.minazuki, "Minazuki", ["135%", "top -10% left -15%"]);
	}
);
chrSel.minazuki.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.minazuki, "none");
	}
);

chrSel.junpei.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.junpei, "Junpei_Iori", ["110%", "top 43% left 200%"]);
	}
);
chrSel.junpei.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.junpei, "none");
	}
);

chrSel.marie.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.marie, "Marie", ["99%", "top -40% left -700%"]);
	}
);
chrSel.marie.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.marie, "none");
	}
);

chrSel.rise.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.rise, "Rise_Kujikawa", ["110%", "top 42% left 270%"]);
	}
);
chrSel.rise.addEventListener("mouseout",
	(event) => {
		hoverDisplay(chrImg.rise, "none");
	}
);

// Display on click

function runDisplay(characterName, ele, isShadow = false) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	initializeOV("flexbox-reverse");
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, portraitScaling) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.style.backgroundImage = "url('img/portraits/p4au/" + charFileName + "_cut.png')";
		chrPrevImg.style.backgroundSize = portraitScaling[0];
		chrPrevImg.style.backgroundPosition = portraitScaling[1];
		if (isShadow) {
			charFileName = charFileName.slice(0, -9);
		}
		chrName.src = "img/characterSelect/p4au/Nameplate_" + charFileName + ".png";
	}
	try {
		if (ele.dataset.shadowExists === "true") {
			document.getElementById("type-select").style.visibility = "visible";
		} else {
			document.getElementById("type-select").style.visibility = "hidden";
		}
	} catch (error) {
		document.getElementById("type-select").style.visibility = "visible";
	}

	if (isShadow) {
		characterName += "_(Shadow)";
	} else {
		document.getElementById("type-select").firstElementChild.src = "img/characterSelect/p4au/Type_Normal.png";
	}
	
	switch (characterName) {
		case "Margaret":
			writeCharInfo(
				[
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
				["54%", "top 21% left 4%"]
			);
			break;
		case "Ken_Amada":
			writeCharInfo(
				[
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
				["120%", "top 10% left 78%"]
			);
			break;
		case "Sho":
			writeCharInfo(
				[
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
				["135%", "top -18% left -15%"]
			);
			break;
		case "Yukari_Takeba":
			writeCharInfo(
				[
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
				["130%", "top 54% left 50%"]
			);
			break;
		case "Naoto_Shirogane":
			writeCharInfo(
				[
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
				["60%", "top -33% left 23%"]
			);
			break;
		case "Labrys":
			writeCharInfo(
				[
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
				["175%", "top 28% left 85%"]
			);
			break;
		case "Teddie":
			writeCharInfo(
				[
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
				["62%", "top 2000% left 30%"]
			);
			break;
		case "Mitsuru_Kirijo":
			writeCharInfo(
				[
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
				["165%", "top -31% left 118%"]
			);
			break;
		case "Yukiko_Amagi":
			writeCharInfo(
				[
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
				["75%", "top 50% left -10%"]
			);
			break;
		case "Aigis":
			writeCharInfo(
				[
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
				["160%", "top 60% left 34%"]
			);
			break;
		case "Yu_Narukami":
			writeCharInfo(
				[
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
				["105%", "top 15% left 140%"]
			);
			break;
		case "Tohru_Adachi":
			writeCharInfo(
				[
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
				["99%", "top -28% left -600%"]
			);
			break;
		case "Yosuke_Hanamura":
			writeCharInfo(
				[
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
				["71%", "top 8% left 0%"]
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
				characterName,
				["114%", "top -15% left 115%"]
			);
			break;
		case "Chie_Satonaka":
			writeCharInfo(
				[
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
				["68%", "top -65% left -10%"]
			);
			break;
		case "Akihiko_Sanada":
			writeCharInfo(
				[
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
				["130%", "top -36% left 218%"]
			);
			break;
		case "Kanji_Tatsumi":
			writeCharInfo(
				[
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
				["125%", "top -12% left 65%"]
			);
			break;
		case "Shadow_Labrys":
			writeCharInfo(
				[
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
				["175%", "top 28% left 85%"]
			);
			break;
		case "Minazuki":
			writeCharInfo(
				[
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
				["135%", "top -10% left -15%"]
			);
			break;
		case "Junpei_Iori":
			writeCharInfo(
				[
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
				["110%", "top 43% left 200%"]
			);
			break;
		case "Marie":
			writeCharInfo(
				[
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
				["99%", "top -40% left -700%"]
			);
			break;
		case "Rise_Kujikawa":
			writeCharInfo(
				[
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
				["110%", "top 42% left 270%"]
			);
			break;
		case "Ken_Amada_(Shadow)":
			writeCharInfo(
				[
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
				["120%", "top 10% left 78%"]
			);
			break;
		case "Yukari_Takeba_(Shadow)":
			writeCharInfo(
				[
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
				["130%", "top 54% left 50%"]
			);
			break;
		case "Naoto_Shirogane_(Shadow)":
			writeCharInfo(
				[
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
				["60%", "top -33% left 23%"]
			);
			break;
		case "Labrys_(Shadow)":
			writeCharInfo(
				[
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
				["175%", "top 28% left 85%"]
			);
			break;
		case "Teddie_(Shadow)":
			writeCharInfo(
				[
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
				["62%", "top 2000% left 30%"]
			);
			break;
		case "Mitsuru_Kirijo_(Shadow)":
			writeCharInfo(
				[
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
				["165%", "top -31% left 118%"]
			);
			break;
		case "Yukiko_Amagi_(Shadow)":
			writeCharInfo(
				[
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
				["75%", "top 50% left -10%"]
			);
			break;
		case "Aigis_(Shadow)":
			writeCharInfo(
				[
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
				["160%", "top 60% left 34%"]
			);
			break;
		case "Yu_Narukami_(Shadow)":
			writeCharInfo(
				[
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
				["105%", "top 15% left 140%"]
			);
			break;
		case "Yosuke_Hanamura_(Shadow)":
			writeCharInfo(
				[
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
				["71%", "top 8% left 0%"]
			);
			break;
		case "Chie_Satonaka_(Shadow)":
			writeCharInfo(
				[
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
				["68%", "top -65% left -10%"]
			);
			break;
		case "Akihiko_Sanada_(Shadow)":
			writeCharInfo(
				[
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
				["130%", "top -36% left 218%"]
			);
			break;
		case "Kanji_Tatsumi_(Shadow)":
			writeCharInfo(
				[
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
				["125%", "top -12% left 65%"]
			);
			break;
		case "Junpei_Iori_(Shadow)":
			writeCharInfo(
				[
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
				["110%", "top 43% left 200%"]
			);
			break;
		case "Rise_Kujikawa_(Shadow)":
			writeCharInfo(
				[
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
				["110%", "top 42% left 270%"]
			);
			break;
	}
}

function altDisplay() {
	var urlName = chrPrevImg.style.backgroundImage.split("/");

	console.log(urlName[urlName.length - 1].slice(0, -10));

	if (!urlName[urlName.length - 1].includes("_(Shadow)")) {
		runDisplay(urlName[urlName.length - 1].slice(0, -10), "", true);
		document.getElementById("type-select").firstElementChild.src = "img/characterSelect/p4au/Type_Shadow.png";
	} else {
		runDisplay(urlName[urlName.length - 1].slice(0, -19));
		document.getElementById("type-select").firstElementChild.src = "img/characterSelect/p4au/Type_Normal.png";
	}
}

$(window).resize(setLocations);

function setLocations() {
	var chrCoords = [0,612, 189,593, 223,698, 203,737, 65,782, 23,761, 0,692];
	autoResize("selectbox-fullroster", chrSel.margaret, chrCoords, chrImg.margaret);
	
	chrCoords = [66,785, 203,740, 244,761, 277,864, 92,973, 45,827];
	autoResize("selectbox-fullroster", chrSel.ken, chrCoords, chrImg.ken);
	
	chrCoords = [193,527, 384,564, 409,641, 392,676, 266,717, 226,697];
	autoResize("selectbox-fullroster", chrSel.sho, chrCoords, chrImg.sho);
	
	chrCoords = [266,720, 392,679, 428,698, 452,773, 281,863, 247,760];
	autoResize("selectbox-fullroster", chrSel.yukari, chrCoords, chrImg.yukari);
	
	chrCoords = [389,564, 557,530, 578,592, 563,620, 448,657, 413,640];
	autoResize("selectbox-fullroster", chrSel.naoto, chrCoords, chrImg.naoto);
	
	chrCoords = [450,660, 564,623, 593,638, 613,699, 456,771, 431,696];
	autoResize("selectbox-fullroster", chrSel.labrys, chrCoords, chrImg.labrys);
	
	chrCoords = [561,529, 712,492, 730,546, 718,569, 608,605, 581,591];
	autoResize("selectbox-fullroster", chrSel.teddie, chrCoords, chrImg.teddie);
	
	chrCoords = [609,609, 719,573, 743,584, 760,639, 617,697, 596,635];
	autoResize("selectbox-fullroster", chrSel.mitsuru, chrCoords, chrImg.mitsuru);
	
	chrCoords = [716,491, 858,451, 874,500, 863,522, 756,557, 733,545];
	autoResize("selectbox-fullroster", chrSel.yukiko, chrCoords, chrImg.yukiko);
	
	chrCoords = [758,560, 863,526, 886,536, 903,586, 764,637, 746,583];
	autoResize("selectbox-fullroster", chrSel.aigis, chrCoords, chrImg.aigis);
	
	chrCoords = [862,450, 992,407, 1009,456, 997,479, 900,510, 877,498];
	autoResize("selectbox-fullroster", chrSel.narukami, chrCoords, chrImg.narukami);
	
	chrCoords = [902,513, 998,482, 1021,494, 1037,542, 907,586, 890,536];
	autoResize("selectbox-fullroster", chrSel.adachi, chrCoords, chrImg.adachi);
	
	chrCoords = [996,406, 1135,355, 1153,410, 1142,431, 1034,467, 1012,456];
	autoResize("selectbox-fullroster", chrSel.yosuke, chrCoords, chrImg.yosuke);
	
	chrCoords = [1036,470, 1142,435, 1166,448, 1182,501, 1040,542, 1024,492];
	autoResize("selectbox-fullroster", chrSel.elizabeth, chrCoords, chrImg.elizabeth);
	
	chrCoords = [1138,353, 1283,295, 1303,357, 1289,384, 1179,420, 1156,408];
	autoResize("selectbox-fullroster", chrSel.chie, chrCoords, chrImg.chie);
	
	chrCoords = [1179,424, 1290,387, 1317,401, 1337,463, 1187,501, 1168,446];
	autoResize("selectbox-fullroster", chrSel.akihiko, chrCoords, chrImg.akihiko);
	
	chrCoords = [1286,293, 1443,221, 1468,296, 1450,332, 1334,369, 1306,355];
	autoResize("selectbox-fullroster", chrSel.kanji, chrCoords, chrImg.kanji);
	
	chrCoords = [1335,373, 1450,336, 1486,354, 1510,428, 1341,463, 1321,401];
	autoResize("selectbox-fullroster", chrSel.slabrys, chrCoords, chrImg.slabrys);
	
	chrCoords = [1446,219, 1618,130, 1652,233, 1631,273, 1506,313, 1471,296];
	autoResize("selectbox-fullroster", chrSel.minazuki, chrCoords, chrImg.minazuki);
	
	chrCoords = [1508,316, 1632,276, 1673,297, 1706,399, 1515,428, 1489,352];
	autoResize("selectbox-fullroster", chrSel.junpei, chrCoords, chrImg.junpei);
	
	chrCoords = [1622,128, 1806,19, 1854,165, 1832,207, 1695,252, 1655,232];
	autoResize("selectbox-fullroster", chrSel.marie, chrCoords, chrImg.marie);
	
	chrCoords = [1696,255, 1833,211, 1876,233, 1920,367, 1920,377, 1710,399, 1676,295];
	autoResize("selectbox-fullroster", chrSel.rise, chrCoords, chrImg.rise);
	
	document.getElementById("info-portrait-positioner").style.height = document.getElementsByClassName("selectbox-fullroster")[0].clientHeight * 0.7 + "px";
	
	chrPrevImg.style.width = document.getElementsByClassName("selectbox-fullroster")[0].clientWidth + "px";
	chrPrevImg.style.height = document.getElementsByClassName("selectbox-fullroster")[0].clientHeight + "px";
	
	chrName.style.height = document.getElementsByClassName("selectbox-fullroster")[0].clientHeight * 0.14 + "px";
	chrName.style.left = document.getElementsByClassName("selectbox-fullroster")[0].clientWidth * 0.44 + "px";
	chrName.style.top = document.getElementsByClassName("selectbox-fullroster")[0].clientHeight * 0.18 + "px";
	
	document.getElementsByClassName("description-area")[0].style.left = document.getElementsByClassName("selectbox-fullroster")[0].clientWidth * 0.52 + "px";
	document.getElementsByClassName("description-area")[0].style.top = document.getElementsByClassName("selectbox-fullroster")[0].clientHeight * 0.46 + "px";
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setTimeout(setLocations, 1);