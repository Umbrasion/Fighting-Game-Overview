const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	es: document.getElementById("character-es"),
	nu: document.getElementById("character-nu"),
	bullet: document.getElementById("character-bullet"),
	tager: document.getElementById("character-tager"),
	hazama: document.getElementById("character-hazama"),
	kagura: document.getElementById("character-kagura"),
	celica: document.getElementById("character-celica"),
	litchi: document.getElementById("character-litchi"),
	platinum: document.getElementById("character-platinum"),
	naoto: document.getElementById("character-naoto"),
	ragna: document.getElementById("character-ragna"),
	noel: document.getElementById("character-noel"),
	makoto: document.getElementById("character-makoto"),
	relius: document.getElementById("character-relius"),
	valkenhayn: document.getElementById("character-valkenhayn"),
	susanoo: document.getElementById("character-susanoo"),
	jubei: document.getElementById("character-jubei"),
	izanami: document.getElementById("character-izanami"),
	nine: document.getElementById("character-nine"),
	terumi: document.getElementById("character-terumi"),
	mu: document.getElementById("character-mu"),
	hibiki: document.getElementById("character-hibiki"),
	jin: document.getElementById("character-jin"),
	rachel: document.getElementById("character-rachel"),
	hakumen: document.getElementById("character-hakumen"),
	carl: document.getElementById("character-carl"),
	taokaka: document.getElementById("character-taokaka"),
	tsubaki: document.getElementById("character-tsubaki"),
	kokonoe: document.getElementById("character-kokonoe"),
	izayoi: document.getElementById("character-izayoi"),
	arakune: document.getElementById("character-arakune"),
	bang: document.getElementById("character-bang"),
	mai: document.getElementById("character-mai"),
	lambda: document.getElementById("character-lambda"),
	azrael: document.getElementById("character-azrael"),
	amane: document.getElementById("character-amane"),
}

const chrImg = {
	es: document.getElementById("selectbox-es"),
	nu: document.getElementById("selectbox-nu"),
	bullet: document.getElementById("selectbox-bullet"),
	tager: document.getElementById("selectbox-tager"),
	hazama: document.getElementById("selectbox-hazama"),
	kagura: document.getElementById("selectbox-kagura"),
	celica: document.getElementById("selectbox-celica"),
	litchi: document.getElementById("selectbox-litchi"),
	platinum: document.getElementById("selectbox-platinum"),
	naoto: document.getElementById("selectbox-naoto"),
	ragna: document.getElementById("selectbox-ragna"),
	noel: document.getElementById("selectbox-noel"),
	makoto: document.getElementById("selectbox-makoto"),
	relius: document.getElementById("selectbox-relius"),
	valkenhayn: document.getElementById("selectbox-valkenhayn"),
	susanoo: document.getElementById("selectbox-susanoo"),
	jubei: document.getElementById("selectbox-jubei"),
	izanami: document.getElementById("selectbox-izanami"),
	nine: document.getElementById("selectbox-nine"),
	terumi: document.getElementById("selectbox-terumi"),
	mu: document.getElementById("selectbox-mu"),
	hibiki: document.getElementById("selectbox-hibiki"),
	jin: document.getElementById("selectbox-jin"),
	rachel: document.getElementById("selectbox-rachel"),
	hakumen: document.getElementById("selectbox-hakumen"),
	carl: document.getElementById("selectbox-carl"),
	taokaka: document.getElementById("selectbox-taokaka"),
	tsubaki: document.getElementById("selectbox-tsubaki"),
	kokonoe: document.getElementById("selectbox-kokonoe"),
	izayoi: document.getElementById("selectbox-izayoi"),
	arakune: document.getElementById("selectbox-arakune"),
	bang: document.getElementById("selectbox-bang"),
	mai: document.getElementById("selectbox-mai"),
	lambda: document.getElementById("selectbox-lambda"),
	azrael: document.getElementById("selectbox-azrael"),
	amane: document.getElementById("selectbox-amane"),
}

const pageMusic = new Audio("../audio/music/BBCF_Next_Force.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();

const sfx = {
	cursor: new Audio("../audio/sfx/bbcf/400_menu_select.wav"),
	confirm: new Audio("../audio/sfx/bbcf/401_decision.wav"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.4;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

function resetIcons() {
	chrImg.es.src = "../img/characterSelect/bbcf/Es_icon.webp";
	chrImg.nu.src = "../img/characterSelect/bbcf/Nu-13_icon.webp";
	chrImg.bullet.src = "../img/characterSelect/bbcf/Bullet_icon.webp";
	chrImg.tager.src = "../img/characterSelect/bbcf/Iron_Tager_icon.webp";
	chrImg.hazama.src = "../img/characterSelect/bbcf/Hazama_icon.webp";
	chrImg.kagura.src = "../img/characterSelect/bbcf/Kagura_Mutsuki_icon.webp";
	chrImg.celica.src = "../img/characterSelect/bbcf/Celica_A._Mercury_icon.webp";
	chrImg.litchi.src = "../img/characterSelect/bbcf/Litchi_Faye_Ling_icon.webp";
	chrImg.platinum.src = "../img/characterSelect/bbcf/Platinum_the_Trinity_icon.webp";
	chrImg.naoto.src = "../img/characterSelect/bbcf/Naoto_Kurogane_icon.webp";
	chrImg.ragna.src = "../img/characterSelect/bbcf/Ragna_the_Bloodedge_icon.webp";
	chrImg.noel.src = "../img/characterSelect/bbcf/Noel_Vermillion_icon.webp";
	chrImg.makoto.src = "../img/characterSelect/bbcf/Makoto_Nanaya_icon.webp";
	chrImg.relius.src = "../img/characterSelect/bbcf/Relius_Clover_icon.webp";
	chrImg.valkenhayn.src = "../img/characterSelect/bbcf/Valkenhayn_R._Hellsing_icon.webp";
	chrImg.susanoo.src = "../img/characterSelect/bbcf/Susano'o_icon.webp";
	chrImg.jubei.src = "../img/characterSelect/bbcf/Jubei_icon.webp";
	chrImg.izanami.src = "../img/characterSelect/bbcf/Izanami_icon.webp";
	chrImg.nine.src = "../img/characterSelect/bbcf/Nine_the_Phantom_icon.webp";
	chrImg.terumi.src = "../img/characterSelect/bbcf/Yuuki_Terumi_icon.webp";
	chrImg.mu.src = "../img/characterSelect/bbcf/Mu-12_icon.webp";
	chrImg.hibiki.src = "../img/characterSelect/bbcf/Hibiki_Kohaku_icon.webp";
	chrImg.jin.src = "../img/characterSelect/bbcf/Jin_Kisaragi_icon.webp";
	chrImg.rachel.src = "../img/characterSelect/bbcf/Rachel_Alucard_icon.webp";
	chrImg.hakumen.src = "../img/characterSelect/bbcf/Hakumen_icon.webp";
	chrImg.carl.src = "../img/characterSelect/bbcf/Carl_Clover_icon.webp";
	chrImg.taokaka.src = "../img/characterSelect/bbcf/Taokaka_icon.webp";
	chrImg.tsubaki.src = "../img/characterSelect/bbcf/Tsubaki_Yayoi_icon.webp";
	chrImg.kokonoe.src = "../img/characterSelect/bbcf/Kokonoe_icon.webp";
	chrImg.izayoi.src = "../img/characterSelect/bbcf/Izayoi_icon.webp";
	chrImg.arakune.src = "../img/characterSelect/bbcf/Arakune_icon.webp";
	chrImg.bang.src = "../img/characterSelect/bbcf/Bang_Shishigami_icon.webp";
	chrImg.mai.src = "../img/characterSelect/bbcf/Mai_Natsume_icon.webp";
	chrImg.lambda.src = "../img/characterSelect/bbcf/Lambda-11_icon.webp";
	chrImg.azrael.src = "../img/characterSelect/bbcf/Azrael_icon.webp";
	chrImg.amane.src = "../img/characterSelect/bbcf/Amane_Nishiki_icon.webp";
}

// Display on hover

function hoverDisplay(iconImg, charFileName) {
	if (!iconImg.src.includes("_selected")) {
		resetIcons();
		iconImg.src = "../img/characterSelect/bbcf/" + charFileName + "_icon_selected.webp";
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			if (chrPrevImg.src.includes(".png")) {
				document.getElementById("info-portrait-temp").src = chrPrevImg.src;
			}
			document.getElementById("info-portrait-temp").classList.remove("tempportrait-onhover");
			void document.getElementById("info-portrait-temp").offsetWidth;
			document.getElementById("info-portrait-temp").classList.add("tempportrait-onhover");
			
			chrPrevImg.src = "../img/portraits/bbcf/" + charFileName + ".png";
			chrName.src = "../img/characterSelect/bbcf/Nameplate_" + charFileName + ".png";
			chrPrevImg.classList.remove("portrait-onhover");
			void chrPrevImg.offsetWidth;
			chrPrevImg.classList.add("portrait-onhover");
		}
	}
}

chrSel.es.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.es, "Es");
	}
);

chrSel.nu.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.nu, "Nu-13");
	}
);

chrSel.bullet.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.bullet, "Bullet");
	}
);

chrSel.tager.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.tager, "Iron_Tager");
	}
);

chrSel.hazama.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.hazama, "Hazama");
	}
);

chrSel.kagura.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.kagura, "Kagura_Mutsuki");
	}
);

chrSel.celica.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.celica, "Celica_A._Mercury");
	}
);

chrSel.litchi.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.litchi, "Litchi_Faye_Ling");
	}
);

chrSel.platinum.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.platinum, "Platinum_the_Trinity");
	}
);

chrSel.naoto.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.naoto, "Naoto_Kurogane");
	}
);

chrSel.ragna.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.ragna, "Ragna_the_Bloodedge");
	}
);

chrSel.noel.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.noel, "Noel_Vermillion");
	}
);

chrSel.makoto.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.makoto, "Makoto_Nanaya");
	}
);

chrSel.relius.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.relius, "Relius_Clover");
	}
);

chrSel.valkenhayn.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.valkenhayn, "Valkenhayn_R._Hellsing");
	}
);

chrSel.susanoo.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.susanoo, "Susano'o");
	}
);

chrSel.jubei.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.jubei, "Jubei");
	}
);

chrSel.izanami.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.izanami, "Izanami");
	}
);

chrSel.nine.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.nine, "Nine_the_Phantom");
	}
);

chrSel.terumi.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.terumi, "Yuuki_Terumi");
	}
);

chrSel.mu.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.mu, "Mu-12");
	}
);

chrSel.hibiki.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.hibiki, "Hibiki_Kohaku");
	}
);

chrSel.jin.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.jin, "Jin_Kisaragi");
	}
);

chrSel.rachel.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.rachel, "Rachel_Alucard");
	}
);

chrSel.hakumen.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.hakumen, "Hakumen");
	}
);

chrSel.carl.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.carl, "Carl_Clover");
	}
);

chrSel.taokaka.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.taokaka, "Taokaka");
	}
);

chrSel.tsubaki.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.tsubaki, "Tsubaki_Yayoi");
	}
);

chrSel.kokonoe.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.kokonoe, "Kokonoe");
	}
);

chrSel.izayoi.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.izayoi, "Izayoi");
	}
);

chrSel.arakune.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.arakune, "Arakune");
	}
);

chrSel.bang.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.bang, "Bang_Shishigami");
	}
);

chrSel.mai.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.mai, "Mai_Natsume");
	}
);

chrSel.lambda.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.lambda, "Lambda-11");
	}
);

chrSel.azrael.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.azrael, "Azrael");
	}
);

chrSel.amane.addEventListener("mouseover",
	(event) => {
		hoverDisplay(chrImg.amane, "Amane_Nishiki");
	}
);

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();

	if (characterName === "Susanoo") {
		characterName = "Susano'o";
	}

	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "../img/portraits/bbcf/" + charFileName + ".png";
		chrName.src = "../img/characterSelect/bbcf/Nameplate_" + charFileName + ".png";
		
		document.getElementById("info-portrait-temp").src = "../img/portraits/bbcf/" + charFileName + ".png";
	}
	
	switch (characterName) {
		case "Es":
			writeCharInfo(
				[
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
		case "Bullet":
			writeCharInfo(
				[
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
		case "Iron_Tager":
			writeCharInfo(
				[
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
		case "Hazama":
			writeCharInfo(
				[
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
		case "Kagura_Mutsuki":
			writeCharInfo(
				[
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
		case "Celica_A._Mercury":
			writeCharInfo(
				[
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
		case "Litchi_Faye_Ling":
			writeCharInfo(
				[
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
		case "Platinum_the_Trinity":
			writeCharInfo(
				[
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
		case "Naoto_Kurogane":
			writeCharInfo(
				[
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
		case "Ragna_the_Bloodedge":
			writeCharInfo(
				[
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
		case "Noel_Vermillion":
			writeCharInfo(
				[
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
		case "Makoto_Nanaya":
			writeCharInfo(
				[
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
		case "Relius_Clover":
			writeCharInfo(
				[
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
		case "valkenhayn":
			writeCharInfo(
				[
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
		case "Susano'o":
			writeCharInfo(
				[
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
		case "Jubei":
			writeCharInfo(
				[
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
		case "Izanami":
			writeCharInfo(
				[
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
		case "Nine_the_Phantom":
			writeCharInfo(
				[
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
		case "Yuuki_Terumi":
			writeCharInfo(
				[
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
		case "Mu-12":
			writeCharInfo(
				[
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
		case "Hibiki_Kohaku":
			writeCharInfo(
				[
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
		case "Jin_Kisaragi":
			writeCharInfo(
				[
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
		case "Rachel_Alucard":
			writeCharInfo(
				[
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
		case "Hakumen":
			writeCharInfo(
				[
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
		case "Carl_Clover":
			writeCharInfo(
				[
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
		case "Taokaka":
			writeCharInfo(
				[
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
		case "Tsubaki_Yayoi":
			writeCharInfo(
				[
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
		case "Kokonoe":
			writeCharInfo(
				[
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
		case "Izayoi":
			writeCharInfo(
				[
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
		case "Arakune":
			writeCharInfo(
				[
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
		case "Bang_Shishigami":
			writeCharInfo(
				[
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
		case "Mai_Natsume":
			writeCharInfo(
				[
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
		case "Lambda-11":
			writeCharInfo(
				[
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
		case "Azrael":
			writeCharInfo(
				[
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
		case "Amane_Nishiki":
			writeCharInfo(
				[
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
	chrPrevImg.classList.remove("portrait-onselect");
	void chrPrevImg.offsetWidth;
	chrPrevImg.classList.add("portrait-onselect");

	document.getElementById("info-portrait-temp").classList.remove("tempportrait-onselect");
	void document.getElementById("info-portrait-temp").offsetWidth;
	document.getElementById("info-portrait-temp").classList.add("tempportrait-onselect");
}