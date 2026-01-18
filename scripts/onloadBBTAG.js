const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	ragna: document.getElementById("character-ragna"),
	jin: document.getElementById("character-jin"),
	noel: document.getElementById("character-noel"),
	rachel: document.getElementById("character-rachel"),
	tager: document.getElementById("character-tager"),
	hakumen: document.getElementById("character-hakumen"),
	nu: document.getElementById("character-nu"),
	hazama: document.getElementById("character-hazama"),
	makoto: document.getElementById("character-makoto"),
	platinum: document.getElementById("character-platinum"),
	izayoi: document.getElementById("character-izayoi"),
	azrael: document.getElementById("character-azrael"),
	celica: document.getElementById("character-celica"),
	nine: document.getElementById("character-nine"),
	naoto: document.getElementById("character-naoto"),
	susanoo: document.getElementById("character-susanoo"),
	es: document.getElementById("character-es"),
	mai: document.getElementById("character-mai"),
	jubei: document.getElementById("character-jubei"),
	narukami: document.getElementById("character-narukami"),
	yosuke: document.getElementById("character-yosuke"),
	chie: document.getElementById("character-chie"),
	yukiko: document.getElementById("character-yukiko"),
	kanji: document.getElementById("character-kanji"),
	teddie: document.getElementById("character-teddie"),
	naotos: document.getElementById("character-naotos"),
	mitsuru: document.getElementById("character-mitsuru"),
	akihiko: document.getElementById("character-akihiko"),
	aegis: document.getElementById("character-aegis"),
	elizabeth: document.getElementById("character-elizabeth"),
	labrys: document.getElementById("character-labrys"),
	adachi: document.getElementById("character-adachi"),
	hyde: document.getElementById("character-hyde"),
	linne: document.getElementById("character-linne"),
	waldstein: document.getElementById("character-waldstein"),
	carmine: document.getElementById("character-carmine"),
	orie: document.getElementById("character-orie"),
	gordeau: document.getElementById("character-gordeau"),
	merkava: document.getElementById("character-merkava"),
	vatista: document.getElementById("character-vatista"),
	seth: document.getElementById("character-seth"),
	yuzuriha: document.getElementById("character-yuzuriha"),
	hilda: document.getElementById("character-hilda"),
	mika: document.getElementById("character-mika"),
	ruby: document.getElementById("character-ruby"),
	weiss: document.getElementById("character-weiss"),
	blake: document.getElementById("character-blake"),
	yang: document.getElementById("character-yang"),
	neo: document.getElementById("character-neo"),
	heart: document.getElementById("character-heart"),
	yumi: document.getElementById("character-yumi"),
	akatsuki: document.getElementById("character-akatsuki"),
	blitztank: document.getElementById("character-blitztank"),
	random: document.getElementById("character-random"),
}
const charSelOthers = {
	bg: document.getElementById("selectbox-other"),
	bgL: document.getElementById("scrollspace-other-l"),
	bgR: document.getElementById("scrollspace-other-r"),
	bgR2: document.getElementById("scrollspace-other-r2"),
	logo: document.getElementById("logo-other"),
}

/*const pageMusic = new Audio("audio/music/BBTAG - .ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.play();*/

const sfx = {
	cursor: new Audio("audio/sfx/bbcf/400_menu_select.wav"),
	confirm: new Audio("audio/sfx/bbcf/401_decision.wav"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.4;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, seriesName, extraSeriesInfo = ["", "", "", false]) {
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		if (chrPrevImg.src.includes(".png")) {
			document.getElementById("info-portrait-temp").src = chrPrevImg.src;
		}
		document.getElementById("info-portrait-temp").classList.remove("tempportrait-onhover");
		void document.getElementById("info-portrait-temp").offsetWidth;
		document.getElementById("info-portrait-temp").classList.add("tempportrait-onhover");
		
		chrPrevImg.src = "img/portraits/bbtag/" + charFileName + ".png";
		
		if (charFileName == "Es") {
			chrName.innerHTML = charFileName;
		} else if (charFileName == "Nu-13") {
			chrName.innerHTML = "&mu;-No.12-";
		} else if (seriesName == "BB") {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, "=");
		} else {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		}
		
		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
		if (seriesName == "AH3" || seriesName == "SK" || seriesName == "AKBK") {
			if (!extraSeriesInfo[3]) {
				charSelOthers.bg.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.bgL.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.bgR.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.bgR2.style.backgroundImage = "url('img/characterSelect/bbtag/" + seriesName + "_border.webp')";
				charSelOthers.logo.src = "img/logos/bbtag/" + extraSeriesInfo[0] + "_logo_bbtag_select.webp";
				charSelOthers.logo.style.width = extraSeriesInfo[1] + "px";
				charSelOthers.logo.style.marginTop = extraSeriesInfo[2] + "px";
			}
		} else {
			charSelOthers.bg.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgL.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgR.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.bgR2.style.backgroundImage = "url('img/characterSelect/bbtag/AH3_border.webp')";
			charSelOthers.logo.src = "img/logos/bbtag/AH3LMSS_logo_bbtag_select.webp";
			charSelOthers.logo.style.width = "198px";
			charSelOthers.logo.style.marginTop = "18px";
		}
		
		var seriesColor;
		switch (seriesName) {
			case "BB":
				seriesColor = "#00B2FF";
				break;
			case "P4A":
				seriesColor = "#FFFA01";
				break;
			case "UNI":
				seriesColor = "#E13CFF";
				break;
			case "RWBY":
				seriesColor = "#FF3C00";
				break;
			case "AH3":
				seriesColor = "#FF56C9";
				break;
			case "SK":
				seriesColor = "#95D0FF";
				break;
			case "AKBK":
				seriesColor = "#F1A58A";
				break;
		}
		document.getElementById("info-portrait-temp").style.filter = chrPrevImg.style.filter;
		chrPrevImg.style.filter = "drop-shadow(-10px 0px " + seriesColor + ")";
	}
}

chrSel.ragna.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Ragna_the_Bloodedge", "BB");
	}
);

chrSel.jin.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Jin_Kisaragi", "BB");
	}
);

chrSel.noel.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Noel_Vermillion", "BB");
	}
);

chrSel.rachel.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Rachel_Alucard", "BB");
	}
);

chrSel.tager.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Iron_Tager", "BB");
	}
);

chrSel.hakumen.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hakumen", "BB");
	}
);

chrSel.nu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Nu-13", "BB");
	}
);

chrSel.hazama.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hazama", "BB");
	}
);

chrSel.makoto.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Makoto_Nanaya", "BB");
	}
);

chrSel.platinum.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Platinum_the_Trinity", "BB");
	}
);

chrSel.izayoi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Izayoi", "BB");
	}
);

chrSel.azrael.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Azrael", "BB");
	}
);

chrSel.celica.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Celica_A._Mercury", "BB");
	}
);

chrSel.nine.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Nine_the_Phantom", "BB");
	}
);

chrSel.naoto.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Naoto_Kurogane", "BB");
	}
);

chrSel.susanoo.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Susano'o", "BB");
	}
);

chrSel.es.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Es", "BB");
	}
);

chrSel.mai.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Mai_Natsume", "BB");
	}
);

chrSel.jubei.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Jubei", "BB");
	}
);

chrSel.narukami.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yu_Narukami", "P4A");
	}
);

chrSel.yosuke.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yosuke_Hanamura", "P4A");
	}
);

chrSel.chie.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Chie_Satonaka", "P4A");
	}
);

chrSel.yukiko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yukiko_Amagi", "P4A");
	}
);

chrSel.kanji.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kanji_Tatsumi", "P4A");
	}
);

chrSel.teddie.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Teddie", "P4A");
	}
);

chrSel.naotos.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Naoto_Shirogane", "P4A");
	}
);

chrSel.mitsuru.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Mitsuru_Kirijo", "P4A");
	}
);

chrSel.akihiko.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Akihiko_Sanada", "P4A");
	}
);

chrSel.aegis.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Aegis", "P4A");
	}
);

chrSel.elizabeth.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Elizabeth", "P4A");
	}
);

chrSel.labrys.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Labrys", "P4A");
	}
);

chrSel.adachi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Tohru_Adachi", "P4A");
	}
);

chrSel.hyde.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hyde", "UNI");
	}
);

chrSel.linne.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Linne", "UNI");
	}
);

chrSel.waldstein.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Waldstein", "UNI");
	}
);

chrSel.carmine.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Carmine", "UNI");
	}
);

chrSel.orie.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Orie", "UNI");
	}
);

chrSel.gordeau.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gordeau", "UNI");
	}
);

chrSel.merkava.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Merkava", "UNI");
	}
);

chrSel.vatista.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Vatista", "UNI");
	}
);

chrSel.seth.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Seth", "UNI");
	}
);

chrSel.yuzuriha.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yuzuriha", "UNI");
	}
);

chrSel.hilda.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hilda", "UNI");
	}
);

chrSel.mika.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Mika", "UNI");
	}
);

chrSel.ruby.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Ruby_Rose", "RWBY");
	}
);

chrSel.weiss.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Weiss_Schnee", "RWBY");
	}
);

chrSel.blake.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Blake_Belladonna", "RWBY");
	}
);

chrSel.yang.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yang_Xiao_Long", "RWBY");
	}
);

chrSel.neo.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Neo_Politan", "RWBY");
	}
);

chrSel.heart.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Heart_Aino", "AH3", ["AH3LMSS", 198, 18]);
	}
);

chrSel.yumi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yumi", "SK", ["SKEV", 198, 18]);
	}
);

chrSel.akatsuki.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Akatsuki", "AKBK", ["AKBK", 190, 50]);
	}
);

chrSel.blitztank.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Blitztank", "AKBK", ["AKBK", 190, 50]);
	}
);

chrSel.random.addEventListener("mouseover",
	(event) => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		randomDisplay();
	}
);
chrSel.random.addEventListener("mouseout",
	(event) => {
		clearTimeout(cycleRandom);
	}
);

var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 53)
		if (displayCharacter == previousSelection) {
			continue reroll;
		} else {
			switch (displayCharacter) {
				case 0:
					hoverDisplay("Ragna_the_Bloodedge", "BB");
					break;
				case 1:
					hoverDisplay("Jin_Kisaragi", "BB");
					break;
				case 2:
					hoverDisplay("Noel_Vermillion", "BB");
					break;
				case 3:
					hoverDisplay("Rachel_Alucard", "BB");
					break;
				case 4:
					hoverDisplay("Iron_Tager", "BB");
					break;
				case 5:
					hoverDisplay("Hakumen", "BB");
					break;
				case 6:
					hoverDisplay("Nu-13", "BB");
					break;
				case 7:
					hoverDisplay("Hazama", "BB");
					break;
				case 8:
					hoverDisplay("Makoto_Nanaya", "BB");
					break;
				case 9:
					hoverDisplay("Platinum_the_Trinity", "BB");
					break;
				case 10:
					hoverDisplay("Izayoi", "BB");
					break;
				case 11:
					hoverDisplay("Azrael", "BB");
					break;
				case 12:
					hoverDisplay("Celica_A._Mercury", "BB");
					break;
				case 13:
					hoverDisplay("Nine_the_Phantom", "BB");
					break;
				case 14:
					hoverDisplay("Naoto_Kurogane", "BB");
					break;
				case 15:
					hoverDisplay("Susano'o", "BB");
					break;
				case 16:
					hoverDisplay("Es", "BB");
					break;
				case 17:
					hoverDisplay("Mai_Natsume", "BB");
					break;
				case 18:
					hoverDisplay("Jubei", "BB");
					break;
				case 19:
					hoverDisplay("Yu_Narukami", "P4A");
					break;
				case 20:
					hoverDisplay("Yosuke_Hanamura", "P4A");
					break;
				case 21:
					hoverDisplay("Chie_Satonaka", "P4A");
					break;
				case 22:
					hoverDisplay("Yukiko_Amagi", "P4A");
					break;
				case 23:
					hoverDisplay("Kanji_Tatsumi", "P4A");
					break;
				case 24:
					hoverDisplay("Teddie", "P4A");
					break;
				case 25:
					hoverDisplay("Naoto_Shirogane", "P4A");
					break;
				case 26:
					hoverDisplay("Mitsuru_Kirijo", "P4A");
					break;
				case 27:
					hoverDisplay("Akihiko_Sanada", "P4A");
					break;
				case 28:
					hoverDisplay("Aegis", "P4A");
					break;
				case 29:
					hoverDisplay("Elizabeth", "P4A");
					break;
				case 30:
					hoverDisplay("Labrys", "P4A");
					break;
				case 31:
					hoverDisplay("Tohru_Adachi", "P4A");
					break;
				case 32:
					hoverDisplay("Hyde", "UNI");
					break;
				case 33:
					hoverDisplay("Linne", "UNI");
					break;
				case 34:
					hoverDisplay("Waldstein", "UNI");
					break;
				case 35:
					hoverDisplay("Carmine", "UNI");
					break;
				case 36:
					hoverDisplay("Orie", "UNI");
					break;
				case 37:
					hoverDisplay("Gordeau", "UNI");
					break;
				case 38:
					hoverDisplay("Merkava", "UNI");
					break;
				case 39:
					hoverDisplay("Vatista", "UNI");
					break;
				case 40:
					hoverDisplay("Seth", "UNI");
					break;
				case 41:
					hoverDisplay("Yuzuriha", "UNI");
					break;
				case 42:
					hoverDisplay("Hilda", "UNI");
					break;
				case 43:
					hoverDisplay("Mika", "UNI");
					break;
				case 44:
					hoverDisplay("Ruby_Rose", "RWBY");
					break;
				case 45:
					hoverDisplay("Weiss_Schnee", "RWBY");
					break;
				case 46:
					hoverDisplay("Blake_Belladonna", "RWBY");
					break;
				case 47:
					hoverDisplay("Yang_Xiao_Long", "RWBY");
					break;
				case 48:
					hoverDisplay("Neo_Politan", "RWBY");
					break;
				case 49:
					hoverDisplay("Heart_Aino", "AH3", ["AH3LMSS", 198, 18, true]);
					break;
				case 50:
					hoverDisplay("Yumi", "SK", ["SKEV", 198, 18, true]);
					break;
				case 51:
					hoverDisplay("Akatsuki", "AKBK", ["AKBK", 190, 50, true]);
					break;
				case 52:
					hoverDisplay("Blitztank", "AKBK", ["AKBK", 190, 50, true]);
					break;
			}
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 120);
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	chrPrevImg.parentElement.classList.remove("portrait-onselect");
	void chrPrevImg.parentElement.offsetWidth;
	document.getElementById("info-portrait-temp").classList.remove("tempportrait-onselect");
	void document.getElementById("info-portrait-temp").offsetWidth;
	
	if (characterName == "random") {
		clearTimeout(cycleRandom);
		clearDisplay();
		switch (Math.floor(Math.random() * 53)) {
			case 0:
				characterName = "ragna";
				break;
			case 1:
				characterName = "jin";
				break;
			case 2:
				characterName = "noel";
				break;
			case 3:
				characterName = "rachel";
				break;
			case 4:
				characterName = "tager";
				break;
			case 5:
				characterName = "hakumen";
				break;
			case 6:
				characterName = "nu";
				break;
			case 7:
				characterName = "hazama";
				break;
			case 8:
				characterName = "makoto";
				break;
			case 9:
				characterName = "platinum";
				break;
			case 10:
				characterName = "izayoi";
				break;
			case 11:
				characterName = "azrael";
				break;
			case 12:
				characterName = "celica";
				break;
			case 13:
				characterName = "nine";
				break;
			case 14:
				characterName = "naoto";
				break;
			case 15:
				characterName = "susanoo";
				break;
			case 16:
				characterName = "es";
				break;
			case 17:
				characterName = "mai";
				break;
			case 18:
				characterName = "jubei";
				break;
			case 19:
				characterName = "narukami";
				break;
			case 20:
				characterName = "yosuke";
				break;
			case 21:
				characterName = "chie";
				break;
			case 22:
				characterName = "yukiko";
				break;
			case 23:
				characterName = "kanji";
				break;
			case 24:
				characterName = "teddie";
				break;
			case 25:
				characterName = "naotos";
				break;
			case 26:
				characterName = "mitsuru";
				break;
			case 27:
				characterName = "akihiko";
				break;
			case 28:
				characterName = "aegis";
				break;
			case 29:
				characterName = "elizabeth";
				break;
			case 30:
				characterName = "labrys";
				break;
			case 31:
				characterName = "adachi";
				break;
			case 32:
				characterName = "hyde";
				break;
			case 33:
				characterName = "linne";
				break;
			case 34:
				characterName = "waldstein";
				break;
			case 35:
				characterName = "carmine";
				break;
			case 36:
				characterName = "orie";
				break;
			case 37:
				characterName = "gordeau";
				break;
			case 38:
				characterName = "merkava";
				break;
			case 39:
				characterName = "vatista";
				break;
			case 40:
				characterName = "seth";
				break;
			case 41:
				characterName = "yuzuriha";
				break;
			case 42:
				characterName = "hilda";
				break;
			case 43:
				characterName = "mika";
				break;
			case 44:
				characterName = "ruby";
				break;
			case 45:
				characterName = "weiss";
				break;
			case 46:
				characterName = "blake";
				break;
			case 47:
				characterName = "yang";
				break;
			case 48:
				characterName = "neo";
				break;
			case 49:
				characterName = "heart";
				break;
			case 50:
				characterName = "yumi";
				break;
			case 51:
				characterName = "akatsuki";
				break;
			case 52:
				characterName = "blitztank";
				break;
		}
	}
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	// Initialize overview area
	
	descriptionArea.innerHTML = `
		<h2 class="info-title">OVERVIEW</h2>
		<table class="info-table">
			<tbody>
				<tr>
					<th rowspan="2" style="vertical-align: middle">Playstyle</th>
					<td rowspan="2" style="vertical-align: middle" id="overview-playstyle">
						<span class="archetype-"></span>
					</td>
					<th>Offense</th>
					<td id="overview-rating-offense" class=""></td>
				</tr>
				<tr>
					<th>Defense</th>
					<td id="overview-rating-defense" class=""></td>
				</tr>
				<tr>
					<th rowspan="2" style="vertical-align: middle">Effective Range</th>
					<td rowspan="2" style="vertical-align: middle" id="overview-range">
						<span class="range-"></span>
					</td>
					<th>Damage</th>
					<td id="overview-rating-damage" class=""></td>
				</tr>
				<tr>
					<th>Speed</th>
					<td id="overview-rating-speed" class=""></td>
				</tr>
				<tr>
					<th rowspan="2" style="vertical-align: middle">Unique Mechanics</th>
					<td rowspan="2" style="vertical-align: middle" id="overview-mechanics">
						<span class="unimech-none">None</span>
					</td>
					<th>Zoning</th>
					<td id="overview-rating-zoning" class=""></td>
				</tr>
				<tr>
					<th>Ease of Use</th>
					<td id="overview-rating-ease" class=""></td>
				</tr>
				<tr>
					<th colspan="2" style="text-align: center">Play if you like:</th>
					<th colspan="2" style="text-align: center">Avoid if you dislike:</th>
				</tr>
				<tr>
					<td colspan="2">
						<ul id="overview-list-like" class="list-likedislike">
							
						</ul>
					</td>
					<td colspan="2">
						<ul id="overview-list-dislike" class="list-likedislike">
							
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
		<div id="overview-description" class="info-description">
			
		</div>
	`
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, seriesName) {
		var overviewItems = {
			playstyle: document.getElementById("overview-playstyle"),
			range: document.getElementById("overview-range"),
			mechanics: document.getElementById("overview-mechanics"),
			ratings: [
				document.getElementById("overview-rating-offense"),
				document.getElementById("overview-rating-defense"),
				document.getElementById("overview-rating-damage"),
				document.getElementById("overview-rating-speed"),
				document.getElementById("overview-rating-zoning"),
				document.getElementById("overview-rating-ease")
			],
			like: document.getElementById("overview-list-like"),
			dislike: document.getElementById("overview-list-dislike"),
			description: document.getElementById("overview-description"),
		}
		
		overviewItems.playstyle.innerHTML = detailInfo[0];
		overviewItems.range.innerHTML = detailInfo[1];
		overviewItems.mechanics.innerHTML = detailInfo[2];
		
		for (i = 0; i < overviewItems.ratings.length; i++) {
			overviewItems.ratings[i].classList.add("rating-" + ratings[i] + "star");
			
			for (j = 0; j < ratings[i]; j++) {
				overviewItems.ratings[i].innerHTML += "&starf;";
			}
			for (j = 5; j > ratings[i]; j--) {
				overviewItems.ratings[i].innerHTML += "&star;";
			}
		}
		
		overviewItems.like.innerHTML = likeOrDislike[0];
		overviewItems.dislike.innerHTML = likeOrDislike[1];
		
		overviewItems.description.innerHTML = charDescription;
		
		chrPrevImg.src = "img/portraits/bbtag/" + charFileName + ".png";
		if (charFileName == "Es") {
			chrName.innerHTML = charFileName;
		} else if (charFileName == "Nu-13") {
			chrName.innerHTML = "&mu;-No.12-";
		} else if (seriesName == "BB") {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, "=");
		} else {
			chrName.innerHTML = charFileName.toUpperCase().replace(/_/g, " ");
		}
		
		document.getElementById("info-portrait-temp").src = "img/portraits/bbtag/" + charFileName + ".png";
		
		var seriesColor;
		switch (seriesName) {
			case "BB":
				seriesColor = "#00B2FF";
				break;
			case "P4A":
				seriesColor = "#FFFA01";
				break;
			case "UNI":
				seriesColor = "#E13CFF";
				break;
			case "RWBY":
				seriesColor = "#FF3C00";
				break;
			case "AH3":
				seriesColor = "#FF56C9";
				break;
			case "SK":
				seriesColor = "#95D0FF";
				break;
			case "AKBK":
				seriesColor = "#F1A58A";
				break;
		}
		chrPrevImg.style.filter = "drop-shadow(-10px 0px " + seriesColor + ")";
	}
	
	switch (characterName) {
		case "ragna":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Ragna the Bloodedge</b> is</p>
				`,
				"Ragna_the_Bloodedge",
				"BB"
			);
			break;
		case "jin":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Jin Kisaragi</b> is</p>
				`,
				"Jin_Kisaragi",
				"BB"
			);
			break;
		case "noel":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Noel Vermillion</b> is</p>
				`,
				"Noel_Vermillion",
				"BB"
			);
			break;
		case "rachel":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Rachel Alucard</b> is</p>
				`,
				"Rachel_Alucard",
				"BB"
			);
			break;
		case "tager":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Iron Tager</b> is</p>
				`,
				"Iron_Tager",
				"BB"
			);
			break;
		case "hakumen":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hakumen</b> is</p>
				`,
				"Hakumen",
				"BB"
			);
			break;
		case "nu":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Nu-13</b> is</p>
				`,
				"Nu-13",
				"BB"
			);
			break;
		case "hazama":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hazama</b> is</p>
				`,
				"Hazama",
				"BB"
			);
			break;
		case "makoto":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Makoto Nanaya</b> is</p>
				`,
				"Makoto_Nanaya",
				"BB"
			);
			break;
		case "platinum":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Platinum the Trinity</b> is</p>
				`,
				"Platinum_the_Trinity",
				"BB"
			);
			break;
		case "izayoi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Izayoi</b> is</p>
				`,
				"Izayoi",
				"BB"
			);
			break;
		case "azrael":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Azrael</b> is</p>
				`,
				"Azrael",
				"BB"
			);
			break;
		case "celica":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Celica A. Mercury</b> is</p>
				`,
				"Celica_A._Mercury",
				"BB"
			);
			break;
		case "nine":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Nine the Phantom</b> is</p>
				`,
				"Nine_the_Phantom",
				"BB"
			);
			break;
		case "naoto":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Naoto Kurogane</b> is</p>
				`,
				"Naoto_Kurogane",
				"BB"
			);
			break;
		case "susanoo":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Susano'o</b> is</p>
				`,
				"Susano'o",
				"BB"
			);
			break;
		case "es":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Es</b> is</p>
				`,
				"Es",
				"BB"
			);
			break;
		case "mai":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mai Natsume</b> is</p>
				`,
				"Mai_Natsume",
				"BB"
			);
			break;
		case "jubei":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Jubei</b> is</p>
				`,
				"Jubei",
				"BB"
			);
			break;
		case "narukami":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yu Narukami</b> is</p>
				`,
				"Yu_Narukami",
				"P4A"
			);
			break;
		case "yosuke":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yosuke Hanamura</b> is</p>
				`,
				"Yosuke_Hanamura",
				"P4A"
			);
			break;
		case "chie":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Chie Satonaka</b> is</p>
				`,
				"Chie_Satonaka",
				"P4A"
			);
			break;
		case "yukiko":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yukiko Amagi</b> is</p>
				`,
				"Yukiko_Amagi",
				"P4A"
			);
			break;
		case "kanji":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Kanji Tatsumi</b> is</p>
				`,
				"Kanji_Tatsumi",
				"P4A"
			);
			break;
		case "teddie":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Teddie</b> is</p>
				`,
				"Teddie",
				"P4A"
			);
			break;
		case "naotos":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Naoto Shirogane</b> is</p>
				`,
				"Naoto_Shirogane",
				"P4A"
			);
			break;
		case "mitsuru":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mitsuru Kirijo</b> is</p>
				`,
				"Mitsuru_Kirijo",
				"P4A"
			);
			break;
		case "akihiko":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Akihiko Sanada</b> is</p>
				`,
				"Akihiko_Sanada",
				"P4A"
			);
			break;
		case "aegis":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Aegis</b> is</p>
				`,
				"Aegis",
				"P4A"
			);
			break;
		case "elizabeth":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Elizabeth</b> is</p>
				`,
				"Elizabeth",
				"P4A"
			);
			break;
		case "labrys":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Labrys</b> is</p>
				`,
				"Labrys",
				"P4A"
			);
			break;
		case "adachi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Tohru Adachi</b> is</p>
				`,
				"Tohru_Adachi",
				"P4A"
			);
			break;
		case "hyde":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hyde</b> is</p>
				`,
				"Hyde",
				"UNI"
			);
			break;
		case "linne":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Linne</b> is</p>
				`,
				"Linne",
				"UNI"
			);
			break;
		case "waldstein":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Waldstein</b> is</p>
				`,
				"Waldstein",
				"UNI"
			);
			break;
		case "carmine":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Carmine</b> is</p>
				`,
				"Carmine",
				"UNI"
			);
			break;
		case "orie":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Orie</b> is</p>
				`,
				"Orie",
				"UNI"
			);
			break;
		case "gordeau":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Gordeau</b> is</p>
				`,
				"Gordeau",
				"UNI"
			);
			break;
		case "merkava":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Merkava</b> is</p>
				`,
				"Merkava",
				"UNI"
			);
			break;
		case "vatista":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Vatista</b> is</p>
				`,
				"Vatista",
				"UNI"
			);
			break;
		case "seth":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Seth</b> is</p>
				`,
				"Seth",
				"UNI"
			);
			break;
		case "yuzuriha":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yuzuriha</b> is</p>
				`,
				"Yuzuriha",
				"UNI"
			);
			break;
		case "hilda":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Hilda</b> is</p>
				`,
				"Hilda",
				"UNI"
			);
			break;
		case "mika":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Mika</b> is</p>
				`,
				"Mika",
				"UNI"
			);
			break;
		case "ruby":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Ruby Rose</b> is</p>
				`,
				"Ruby_Rose",
				"RWBY"
			);
			break;
		case "weiss":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Weiss Schnee</b> is</p>
				`,
				"Weiss_Schnee",
				"RWBY"
			);
			break;
		case "blake":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Blake Belladonna</b> is</p>
				`,
				"Blake_Belladonna",
				"RWBY"
			);
			break;
		case "yang":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yang Xiao Long</b> is</p>
				`,
				"Yang_Xiao_Long",
				"RWBY"
			);
			break;
		case "neo":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Neo Politan</b> is</p>
				`,
				"Neo_Politan",
				"RWBY"
			);
			break;
		case "heart":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Heart Aino</b> is</p>
				`,
				"Heart_Aino",
				"AH3"
			);
			break;
		case "yumi":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Yumi</b> is</p>
				`,
				"Yumi",
				"SK"
			);
			break;
		case "akatsuki":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Akatsuki</b> is</p>
				`,
				"Akatsuki",
				"AKBK"
			);
			break;
		case "blitztank":
			writeCharInfo(
				[
					"<span class='archetype-'></span>",
					"<span class='range-'></span>",
					"<span class='unimech-none'>None</span>"
				],
				[1,1,1,1,1,1],
				["<li></li>", "<li></li>"],
				`
				<p><b>Blitztank</b> is</p>
				`,
				"Blitztank",
				"AKBK"
			);
			break;
	}
	chrPrevImg.parentElement.classList.add("portrait-onselect");
	document.getElementById("info-portrait-temp").classList.add("tempportrait-onselect");
}

function scrollSelection(series, directionForward) {
	var scrollArea = document.getElementById("selectbox-scroll-" + series);
	var seriesClass = "scroll-char-" + series;
	
	if (directionForward) {
		scrollArea.insertBefore(document.getElementsByClassName(seriesClass)[0], document.getElementsByClassName(seriesClass)[document.getElementsByClassName(seriesClass).length - 1].nextSibling);
	} else {
		scrollArea.insertBefore(document.getElementsByClassName(seriesClass)[document.getElementsByClassName(seriesClass).length - 1], document.getElementsByClassName(seriesClass)[0]);
	}
}