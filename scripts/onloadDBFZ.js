var sizeChange = "scale(1.1)";
var zIndexChange = "500";
const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	random: document.getElementById("character-random"),
	roshi: document.getElementById("character-roshi"),
	gogetaSSGSS: document.getElementById("character-gogeta-ssgss"),
	goku: document.getElementById("character-goku"),
	tien: document.getElementById("character-tien"),
	yamcha: document.getElementById("character-yamcha"),
	krillin: document.getElementById("character-krillin"),
	gokuSS: document.getElementById("character-goku-ss"),
	labcoat: document.getElementById("character-labcoat"),
	frieza: document.getElementById("character-frieza"),
	kidBuu: document.getElementById("character-kidbuu"),
	ginyu: document.getElementById("character-ginyu"),
	nappa: document.getElementById("character-nappa"),
	vegeta: document.getElementById("character-vegeta"),
	brolyDBS: document.getElementById("character-broly-dbs"),
	superBaby2: document.getElementById("character-superbaby2"),
	gokuGT: document.getElementById("character-goku-gt"),
	android17: document.getElementById("character-android17"),
	bardock: document.getElementById("character-bardock"),
	gokuSSGSS: document.getElementById("character-goku-ssgss"),
	gohanAdult: document.getElementById("character-gohan-adult"),
	trunks: document.getElementById("character-trunks"),
	vegetaSS: document.getElementById("character-vegeta-ss"),
	cell: document.getElementById("character-cell"),
	android18: document.getElementById("character-android18"),
	android16: document.getElementById("character-android16"),
	android21: document.getElementById("character-android21"),
	broly: document.getElementById("character-broly"),
	cooler: document.getElementById("character-cooler"),
	janemba: document.getElementById("character-janemba"),
	gokuUI: document.getElementById("character-goku-ui"),
	videl: document.getElementById("character-videl"),
	vegitoSSGSS: document.getElementById("character-vegito-ssgss"),
	vegetaSSGSS: document.getElementById("character-vegeta-ssgss"),
	gotenks: document.getElementById("character-gotenks"),
	piccolo: document.getElementById("character-piccolo"),
	gohanTeen: document.getElementById("character-gohan-teen"),
	gogetaSS4: document.getElementById("character-gogeta-ss4"),
	majinBuu: document.getElementById("character-majinbuu"),
	beerus: document.getElementById("character-beerus"),
	hit: document.getElementById("character-hit"),
	gokuBlack: document.getElementById("character-gokublack"),
	zamasu: document.getElementById("character-zamasu"),
	jiren: document.getElementById("character-jiren"),
	kefla: document.getElementById("character-kefla"),
}
const chrImg = {
	random: document.getElementById("selectbox-random"),
	roshi: document.getElementById("selectbox-roshi"),
	gogetaSSGSS: document.getElementById("selectbox-gogeta-ssgss"),
	goku: document.getElementById("selectbox-goku"),
	tien: document.getElementById("selectbox-tien"),
	yamcha: document.getElementById("selectbox-yamcha"),
	krillin: document.getElementById("selectbox-krillin"),
	gokuSS: document.getElementById("selectbox-goku-ss"),
	labcoat: document.getElementById("selectbox-labcoat"),
	frieza: document.getElementById("selectbox-frieza"),
	kidBuu: document.getElementById("selectbox-kidbuu"),
	ginyu: document.getElementById("selectbox-ginyu"),
	nappa: document.getElementById("selectbox-nappa"),
	vegeta: document.getElementById("selectbox-vegeta"),
	brolyDBS: document.getElementById("selectbox-broly-dbs"),
	superBaby2: document.getElementById("selectbox-superbaby2"),
	gokuGT: document.getElementById("selectbox-goku-gt"),
	android17: document.getElementById("selectbox-android17"),
	bardock: document.getElementById("selectbox-bardock"),
	gokuSSGSS: document.getElementById("selectbox-goku-ssgss"),
	gohanAdult: document.getElementById("selectbox-gohan-adult"),
	trunks: document.getElementById("selectbox-trunks"),
	vegetaSS: document.getElementById("selectbox-vegeta-ss"),
	cell: document.getElementById("selectbox-cell"),
	android18: document.getElementById("selectbox-android18"),
	android16: document.getElementById("selectbox-android16"),
	android21: document.getElementById("selectbox-android21"),
	broly: document.getElementById("selectbox-broly"),
	cooler: document.getElementById("selectbox-cooler"),
	janemba: document.getElementById("selectbox-janemba"),
	gokuUI: document.getElementById("selectbox-goku-ui"),
	videl: document.getElementById("selectbox-videl"),
	vegitoSSGSS: document.getElementById("selectbox-vegito-ssgss"),
	vegetaSSGSS: document.getElementById("selectbox-vegeta-ssgss"),
	gotenks: document.getElementById("selectbox-gotenks"),
	piccolo: document.getElementById("selectbox-piccolo"),
	gohanTeen: document.getElementById("selectbox-gohan-teen"),
	gogetaSS4: document.getElementById("selectbox-gogeta-ss4"),
	majinBuu: document.getElementById("selectbox-majinbuu"),
	beerus: document.getElementById("selectbox-beerus"),
	hit: document.getElementById("selectbox-hit"),
	gokuBlack: document.getElementById("selectbox-gokublack"),
	zamasu: document.getElementById("selectbox-zamasu"),
	jiren: document.getElementById("selectbox-jiren"),
	kefla: document.getElementById("selectbox-kefla"),
}

const pageMusic = new Audio("audio/music/DBFZ - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/DBFZ - Character Select intro.ogg");
pageMusicIntro.volume = 0.2;
pageMusicIntro.play();

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Cursor_CharaSel.ogg"),
	cursor2: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_CharaApp_1.ogg"),
	confirm: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Decide_1.ogg"),
	random: new Audio("audio/sfx/dbfz/ARC_MENU_SYS_Cursor_Random.ogg"),
	announcer: new Audio("audio/sfx/dbfz/announcer/Name_Goku_(Super_Saiyan).ogg"),
	//banter: new Audio("audio/sfx/dbfz/"),
}
sfx.cursor.volume = 0.12;
sfx.cursor2.volume = 0.12;
sfx.confirm.volume = 0.2;
sfx.random.volume = 0.12;
sfx.announcer.volume = 0.4;
//sfx.banter.volume = 0.1;

sfx.random.loop = true;

var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, iconImg) {
	clearTimeout(cycleRandom);
	
	sfx.cursor.currentTime = 0;
	sfx.cursor.play();
	if (previewDisplayOn) {
		sfx.cursor2.currentTime = 0;
		sfx.cursor2.play();
	}
	sfx.random.pause();
	
	iconImg.style.transform = "translate(0, -10%)";
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/dbfz/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
		chrPrevImg.classList.remove("portrait-onhover");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onhover");
	}
}

chrSel.roshi.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Master_Roshi", chrImg.roshi);
	}
);
chrSel.roshi.addEventListener("mouseout",
	(event) => {
		chrImg.roshi.style.transform = "translate(0,0)";
	}
);

chrSel.gogetaSSGSS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gogeta_(SSGSS)", chrImg.gogetaSSGSS);
	}
);
chrSel.gogetaSSGSS.addEventListener("mouseout",
	(event) => {
		chrImg.gogetaSSGSS.style.transform = "translate(0,0)";
	}
);

chrSel.goku.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Goku", chrImg.goku);
	}
);
chrSel.goku.addEventListener("mouseout",
	(event) => {
		chrImg.goku.style.transform = "translate(0,0)";
	}
);

chrSel.tien.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Tien", chrImg.tien);
	}
);
chrSel.tien.addEventListener("mouseout",
	(event) => {
		chrImg.tien.style.transform = "translate(0,0)";
	}
);

chrSel.yamcha.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Yamcha", chrImg.yamcha);
	}
);
chrSel.yamcha.addEventListener("mouseout",
	(event) => {
		chrImg.yamcha.style.transform = "translate(0,0)";
	}
);

chrSel.krillin.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Krillin", chrImg.krillin);
	}
);
chrSel.krillin.addEventListener("mouseout",
	(event) => {
		chrImg.krillin.style.transform = "translate(0,0)";
	}
);

chrSel.gokuSS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Goku_(Super_Saiyan)", chrImg.gokuSS);
	}
);
chrSel.gokuSS.addEventListener("mouseout",
	(event) => {
		chrImg.gokuSS.style.transform = "translate(0,0)";
	}
);

chrSel.labcoat.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Android_21_(Lab_Coat)", chrImg.labcoat);
	}
);
chrSel.labcoat.addEventListener("mouseout",
	(event) => {
		chrImg.labcoat.style.transform = "translate(0,0)";
	}
);

chrSel.frieza.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Frieza", chrImg.frieza);
	}
);
chrSel.frieza.addEventListener("mouseout",
	(event) => {
		chrImg.frieza.style.transform = "translate(0,0)";
	}
);

chrSel.kidBuu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kid_Buu", chrImg.kidBuu);
	}
);
chrSel.kidBuu.addEventListener("mouseout",
	(event) => {
		chrImg.kidBuu.style.transform = "translate(0,0)";
	}
);

chrSel.ginyu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Captain_Ginyu", chrImg.ginyu);
	}
);
chrSel.ginyu.addEventListener("mouseout",
	(event) => {
		chrImg.ginyu.style.transform = "translate(0,0)";
	}
);

chrSel.nappa.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Nappa", chrImg.nappa);
	}
);
chrSel.nappa.addEventListener("mouseout",
	(event) => {
		chrImg.nappa.style.transform = "translate(0,0)";
	}
);

chrSel.vegeta.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Vegeta", chrImg.vegeta);
	}
);
chrSel.vegeta.addEventListener("mouseout",
	(event) => {
		chrImg.vegeta.style.transform = "translate(0,0)";
	}
);

chrSel.brolyDBS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Broly_(DBS)", chrImg.brolyDBS);
	}
);
chrSel.brolyDBS.addEventListener("mouseout",
	(event) => {
		chrImg.brolyDBS.style.transform = "translate(0,0)";
	}
);

chrSel.superBaby2.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Super_Baby_2", chrImg.superBaby2);
	}
);
chrSel.superBaby2.addEventListener("mouseout",
	(event) => {
		chrImg.superBaby2.style.transform = "translate(0,0)";
	}
);

chrSel.gokuGT.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Goku_(GT)", chrImg.gokuGT);
	}
);
chrSel.gokuGT.addEventListener("mouseout",
	(event) => {
		chrImg.gokuGT.style.transform = "translate(0,0)";
	}
);

chrSel.android17.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Android_17", chrImg.android17);
	}
);
chrSel.android17.addEventListener("mouseout",
	(event) => {
		chrImg.android17.style.transform = "translate(0,0)";
	}
);

chrSel.bardock.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Bardock", chrImg.bardock);
	}
);
chrSel.bardock.addEventListener("mouseout",
	(event) => {
		chrImg.bardock.style.transform = "translate(0,0)";
	}
);

chrSel.gokuSSGSS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Goku_(SSGSS)", chrImg.gokuSSGSS);
	}
);
chrSel.gokuSSGSS.addEventListener("mouseout",
	(event) => {
		chrImg.gokuSSGSS.style.transform = "translate(0,0)";
	}
);

chrSel.gohanAdult.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gohan_(Adult)", chrImg.gohanAdult);
	}
);
chrSel.gohanAdult.addEventListener("mouseout",
	(event) => {
		chrImg.gohanAdult.style.transform = "translate(0,0)";
	}
);

chrSel.trunks.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Trunks", chrImg.trunks);
	}
);
chrSel.trunks.addEventListener("mouseout",
	(event) => {
		chrImg.trunks.style.transform = "translate(0,0)";
	}
);

chrSel.vegetaSS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Vegeta_(Super_Saiyan)", chrImg.vegetaSS);
	}
);
chrSel.vegetaSS.addEventListener("mouseout",
	(event) => {
		chrImg.vegetaSS.style.transform = "translate(0,0)";
	}
);

chrSel.cell.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Cell", chrImg.cell);
	}
);
chrSel.cell.addEventListener("mouseout",
	(event) => {
		chrImg.cell.style.transform = "translate(0,0)";
	}
);

chrSel.android18.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Android_18", chrImg.android18);
	}
);
chrSel.android18.addEventListener("mouseout",
	(event) => {
		chrImg.android18.style.transform = "translate(0,0)";
	}
);

chrSel.android16.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Android_16", chrImg.android16);
	}
);
chrSel.android16.addEventListener("mouseout",
	(event) => {
		chrImg.android16.style.transform = "translate(0,0)";
	}
);

chrSel.android21.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Android_21", chrImg.android21);
	}
);
chrSel.android21.addEventListener("mouseout",
	(event) => {
		chrImg.android21.style.transform = "translate(0,0)";
	}
);

chrSel.broly.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Broly", chrImg.broly);
	}
);
chrSel.broly.addEventListener("mouseout",
	(event) => {
		chrImg.broly.style.transform = "translate(0,0)";
	}
);

chrSel.cooler.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Cooler", chrImg.cooler);
	}
);
chrSel.cooler.addEventListener("mouseout",
	(event) => {
		chrImg.cooler.style.transform = "translate(0,0)";
	}
);

chrSel.janemba.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Janemba", chrImg.janemba);
	}
);
chrSel.janemba.addEventListener("mouseout",
	(event) => {
		chrImg.janemba.style.transform = "translate(0,0)";
	}
);

chrSel.gokuUI.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Goku_(Ultra_Instinct)", chrImg.gokuUI);
	}
);
chrSel.gokuUI.addEventListener("mouseout",
	(event) => {
		chrImg.gokuUI.style.transform = "translate(0,0)";
	}
);

chrSel.videl.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Videl", chrImg.videl);
	}
);
chrSel.videl.addEventListener("mouseout",
	(event) => {
		chrImg.videl.style.transform = "translate(0,0)";
	}
);

chrSel.vegitoSSGSS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Vegito_(SSGSS)", chrImg.vegitoSSGSS);
	}
);
chrSel.vegitoSSGSS.addEventListener("mouseout",
	(event) => {
		chrImg.vegitoSSGSS.style.transform = "translate(0,0)";
	}
);

chrSel.vegetaSSGSS.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Vegeta_(SSGSS)", chrImg.vegetaSSGSS);
	}
);
chrSel.vegetaSSGSS.addEventListener("mouseout",
	(event) => {
		chrImg.vegetaSSGSS.style.transform = "translate(0,0)";
	}
);

chrSel.gotenks.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gotenks", chrImg.gotenks);
	}
);
chrSel.gotenks.addEventListener("mouseout",
	(event) => {
		chrImg.gotenks.style.transform = "translate(0,0)";
	}
);

chrSel.piccolo.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Piccolo", chrImg.piccolo);
	}
);
chrSel.piccolo.addEventListener("mouseout",
	(event) => {
		chrImg.piccolo.style.transform = "translate(0,0)";
	}
);

chrSel.gohanTeen.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gohan_(Teen)", chrImg.gohanTeen);
	}
);
chrSel.gohanTeen.addEventListener("mouseout",
	(event) => {
		chrImg.gohanTeen.style.transform = "translate(0,0)";
	}
);

chrSel.gogetaSS4.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Gogeta_(SS4)", chrImg.gogetaSS4);
	}
);
chrSel.gogetaSS4.addEventListener("mouseout",
	(event) => {
		chrImg.gogetaSS4.style.transform = "translate(0,0)";
	}
);

chrSel.majinBuu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Majin_Buu", chrImg.majinBuu);
	}
);
chrSel.majinBuu.addEventListener("mouseout",
	(event) => {
		chrImg.majinBuu.style.transform = "translate(0,0)";
	}
);

chrSel.beerus.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Beerus", chrImg.beerus);
	}
);
chrSel.beerus.addEventListener("mouseout",
	(event) => {
		chrImg.beerus.style.transform = "translate(0,0)";
	}
);

chrSel.hit.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Hit", chrImg.hit);
	}
);
chrSel.hit.addEventListener("mouseout",
	(event) => {
		chrImg.hit.style.transform = "translate(0,0)";
	}
);

chrSel.gokuBlack.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Goku_Black", chrImg.gokuBlack);
	}
);
chrSel.gokuBlack.addEventListener("mouseout",
	(event) => {
		chrImg.gokuBlack.style.transform = "translate(0,0)";
	}
);

chrSel.zamasu.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Zamasu_(Fused)", chrImg.zamasu);
	}
);
chrSel.zamasu.addEventListener("mouseout",
	(event) => {
		chrImg.zamasu.style.transform = "translate(0,0)";
	}
);

chrSel.jiren.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Jiren", chrImg.jiren);
	}
);
chrSel.jiren.addEventListener("mouseout",
	(event) => {
		chrImg.jiren.style.transform = "translate(0,0)";
	}
);

chrSel.kefla.addEventListener("mouseover",
	(event) => {
		hoverDisplay("Kefla", chrImg.kefla);
	}
);
chrSel.kefla.addEventListener("mouseout",
	(event) => {
		chrImg.kefla.style.transform = "translate(0,0)";
	}
);

// Random select

chrSel.random.addEventListener("mouseover",
	(event) => {
		chrImg.random.style.transform = "translate(0, -10%)";
		clearTimeout(cycleRandom);
		if (previewDisplayOn) {
			randomDisplay();
			sfx.random.currentTime = 0;
			sfx.random.play();
		} else {
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
		}
	}
);
chrSel.random.addEventListener("mouseout",
	(event) => {
		chrImg.random.style.transform = "translate(0,0)";
	}
);

var cycleRandom;

function randomDisplay() {
	chrPrevImg.classList.remove("portrait-onhover");
	chrName.innerHTML = "Random";
		
	var displayCharacter = Math.floor(Math.random() * 44)
	switch (displayCharacter) {
		case 0:
			chrPrevImg.src = "img/portraits/dbfz/Master_Roshi.png";
			break;
		case 1:
			chrPrevImg.src = "img/portraits/dbfz/Gogeta_(SSGSS).png";
			break;
		case 2:
			chrPrevImg.src = "img/portraits/dbfz/Goku.png";
			break;
		case 3:
			chrPrevImg.src = "img/portraits/dbfz/Tien.png";
			break;
		case 4:
			chrPrevImg.src = "img/portraits/dbfz/Yamcha.png";
			break;
		case 5:
			chrPrevImg.src = "img/portraits/dbfz/Krillin.png";
			break;
		case 6:
			chrPrevImg.src = "img/portraits/dbfz/Goku_(Super_Saiyan).png";
			break;
		case 7:
			chrPrevImg.src = "img/portraits/dbfz/Android_21_(Lab_Coat).png";
			break;
		case 8:
			chrPrevImg.src = "img/portraits/dbfz/Frieza.png";
			break;
		case 9:
			chrPrevImg.src = "img/portraits/dbfz/Kid_Buu.png";
			break;
		case 10:
			chrPrevImg.src = "img/portraits/dbfz/Captain_Ginyu.png";
			break;
		case 11:
			chrPrevImg.src = "img/portraits/dbfz/Nappa.png";
			break;
		case 12:
			chrPrevImg.src = "img/portraits/dbfz/Vegeta.png";
			break;
		case 13:
			chrPrevImg.src = "img/portraits/dbfz/Broly_(DBS).png";
			break;
		case 14:
			chrPrevImg.src = "img/portraits/dbfz/Super_Baby_2.png";
			break;
		case 15:
			chrPrevImg.src = "img/portraits/dbfz/Goku_(GT).png";
			break;
		case 16:
			chrPrevImg.src = "img/portraits/dbfz/Android_17.png";
			break;
		case 17:
			chrPrevImg.src = "img/portraits/dbfz/Bardock.png";
			break;
		case 18:
			chrPrevImg.src = "img/portraits/dbfz/Goku_(SSGSS).png";
			break;
		case 19:
			chrPrevImg.src = "img/portraits/dbfz/Gohan_(Adult).png";
			break;
		case 20:
			chrPrevImg.src = "img/portraits/dbfz/Trunks.png";
			break;
		case 21:
			chrPrevImg.src = "img/portraits/dbfz/Vegeta_(Super_Saiyan).png";
			break;
		case 22:
			chrPrevImg.src = "img/portraits/dbfz/Cell.png";
			break;
		case 23:
			chrPrevImg.src = "img/portraits/dbfz/Android_18.png";
			break;
		case 24:
			chrPrevImg.src = "img/portraits/dbfz/Android_16.png";
			break;
		case 25:
			chrPrevImg.src = "img/portraits/dbfz/Android_21.png";
			break;
		case 26:
			chrPrevImg.src = "img/portraits/dbfz/Broly.png";
			break;
		case 27:
			chrPrevImg.src = "img/portraits/dbfz/Cooler.png";
			break;
		case 28:
			chrPrevImg.src = "img/portraits/dbfz/Janemba.png";
			break;
		case 29:
			chrPrevImg.src = "img/portraits/dbfz/Goku_(Ultra_Instinct).png";
			break;
		case 30:
			chrPrevImg.src = "img/portraits/dbfz/Videl.png";
			break;
		case 31:
			chrPrevImg.src = "img/portraits/dbfz/Vegito_(SSGSS).png";
			break;
		case 32:
			chrPrevImg.src = "img/portraits/dbfz/Vegeta_(SSGSS).png";
			break;
		case 33:
			chrPrevImg.src = "img/portraits/dbfz/Gotenks.png";
			break;
		case 34:
			chrPrevImg.src = "img/portraits/dbfz/Piccolo.png";
			break;
		case 35:
			chrPrevImg.src = "img/portraits/dbfz/Gohan_(Teen).png";
			break;
		case 36:
			chrPrevImg.src = "img/portraits/dbfz/Gogeta_(SS4).png";
			break;
		case 37:
			chrPrevImg.src = "img/portraits/dbfz/Majin_Buu.png";
			break;
		case 38:
			chrPrevImg.src = "img/portraits/dbfz/Beerus.png";
			break;
		case 39:
			chrPrevImg.src = "img/portraits/dbfz/Hit.png";
			break;
		case 40:
			chrPrevImg.src = "img/portraits/dbfz/Goku_Black.png";
			break;
		case 41:
			chrPrevImg.src = "img/portraits/dbfz/Zamasu_(Fused).png";
			break;
		case 42:
			chrPrevImg.src = "img/portraits/dbfz/Jiren.png";
			break;
		case 43:
			chrPrevImg.src = "img/portraits/dbfz/Kefla.png";
			break;
	}
	cycleRandom = setTimeout(randomDisplay, 80);
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	
	clearTimeout(cycleRandom);
	
	sfx.confirm.currentTime = 0;
	sfx.confirm.play();
	
	if (characterName === "Random") {
		sfx.random.pause();
		switch (Math.floor(Math.random() * 44)) {
			case 0:
				characterName = "Master_Roshi";
				break;
			case 1:
				characterName = "Gogeta_(SSGSS)";
				break;
			case 2:
				characterName = "Goku";
				break;
			case 3:
				characterName = "Tien";
				break;
			case 4:
				characterName = "Yamcha";
				break;
			case 5:
				characterName = "Krillin";
				break;
			case 6:
				characterName = "Goku_(Super_Saiyan)";
				break;
			case 7:
				characterName = "Android_21_(Lab_Coat)";
				break;
			case 8:
				characterName = "Frieza";
				break;
			case 9:
				characterName = "Kid_Buu";
				break;
			case 10:
				characterName = "Captain_Ginyu";
				break;
			case 11:
				characterName = "Nappa";
				break;
			case 12:
				characterName = "Vegeta";
				break;
			case 13:
				characterName = "Broly_(DBS)";
				break;
			case 14:
				characterName = "Super_Baby_2";
				break;
			case 15:
				characterName = "Goku_(GT)";
				break;
			case 16:
				characterName = "Android_17";
				break;
			case 17:
				characterName = "Bardock";
				break;
			case 18:
				characterName = "Goku_(SSGSS)";
				break;
			case 19:
				characterName = "Gohan_(Adult)";
				break;
			case 20:
				characterName = "Trunks";
				break;
			case 21:
				characterName = "Vegeta_(Super_Saiyan)";
				break;
			case 22:
				characterName = "Cell";
				break;
			case 23:
				characterName = "Android_18";
				break;
			case 24:
				characterName = "Android_16";
				break;
			case 25:
				characterName = "Android_21";
				break;
			case 26:
				characterName = "Broly";
				break;
			case 27:
				characterName = "Cooler";
				break;
			case 28:
				characterName = "Janemba";
				break;
			case 29:
				characterName = "Goku_(Ultra_Instinct)";
				break;
			case 30:
				characterName = "Videl";
				break;
			case 31:
				characterName = "Vegito_(SSGSS)";
				break;
			case 32:
				characterName = "Vegeta_(SSGSS)";
				break;
			case 33:
				characterName = "Gotenks";
				break;
			case 34:
				characterName = "Piccolo";
				break;
			case 35:
				characterName = "Gohan_(Teen)";
				break;
			case 36:
				characterName = "Gogeta_(SS4)";
				break;
			case 37:
				characterName = "Majin_Buu";
				break;
			case 38:
				characterName = "Beerus";
				break;
			case 39:
				characterName = "Hit";
				break;
			case 40:
				characterName = "Goku_Black";
				break;
			case 41:
				characterName = "Zamasu_(Fused)";
				break;
			case 42:
				characterName = "Jiren";
				break;
			case 43:
				characterName = "Kefla";
				break;
		}
	}
	
	switch (characterName) {
		case "Android_21_(Lab_Coat)":
			sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Android_21.ogg";
			break;
		case "Broly_(DBS)":
			sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Broly.ogg";
			break;
		case "Goku_(GT)": case "Goku_(Ultra_Instinct)":
			sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Goku_(Super_Saiyan).ogg";
			break;
		case "Gogeta_(SS4)":
			sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_Gogeta_(SSGSS).ogg";
			break;
		default:
			sfx.announcer.src = "audio/sfx/dbfz/announcer/Name_" + characterName + ".ogg";
			break;
	}
	sfx.announcer.play();
	
	initializeOV("flexbox");
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, charTitle) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/dbfz/" + charFileName + ".png";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
		chrPrevImg.classList.remove("portrait-onselect");
		void chrPrevImg.offsetWidth;
		chrPrevImg.classList.add("portrait-onselect");
	}
	
	switch (characterName) {
		case "Master_Roshi":
			writeCharInfo(
				[
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
		case "Gogeta_(SSGSS)":
			writeCharInfo(
				[
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
		case "Goku":
			writeCharInfo(
				[
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
		case "Tien":
			writeCharInfo(
				[
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
		case "Yamcha":
			writeCharInfo(
				[
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
		case "Krillin":
			writeCharInfo(
				[
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
		case "Goku_(Super_Saiyan)":
			writeCharInfo(
				[
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
		case "Android_21_(Lab_Coat)":
			writeCharInfo(
				[
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
		case "Frieza":
			writeCharInfo(
				[
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
		case "Kid_Buu":
			writeCharInfo(
				[
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
		case "Captain_Ginyu":
			writeCharInfo(
				[
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
		case "Nappa":
			writeCharInfo(
				[
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
		case "Vegeta":
			writeCharInfo(
				[
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
		case "Broly_(DBS)":
			writeCharInfo(
				[
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
		case "Super_Baby_2":
			writeCharInfo(
				[
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
		case "Goku_(GT)":
			writeCharInfo(
				[
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
		case "Android_17":
			writeCharInfo(
				[
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
		case "Bardock":
			writeCharInfo(
				[
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
		case "Goku_(SSGSS)":
			writeCharInfo(
				[
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
		case "Gohan_(Adult)":
			writeCharInfo(
				[
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
		case "Trunks":
			writeCharInfo(
				[
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
		case "Vegeta_(Super_Saiyan)":
			writeCharInfo(
				[
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
		case "Cell":
			writeCharInfo(
				[
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
		case "Android_18":
			writeCharInfo(
				[
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
		case "Android_16":
			writeCharInfo(
				[
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
		case "Android_21":
			writeCharInfo(
				[
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
		case "Broly":
			writeCharInfo(
				[
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
		case "Cooler":
			writeCharInfo(
				[
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
		case "Janemba":
			writeCharInfo(
				[
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
		case "Goku_(Ultra_Instinct)":
			writeCharInfo(
				[
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
		case "Videl":
			writeCharInfo(
				[
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
		case "Vegito_(SSGSS)":
			writeCharInfo(
				[
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
		case "Vegeta_(SSGSS)":
			writeCharInfo(
				[
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
		case "Gotenks":
			writeCharInfo(
				[
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
		case "Piccolo":
			writeCharInfo(
				[
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
		case "Gohan_(Teen)":
			writeCharInfo(
				[
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
		case "Gogeta_(SS4)":
			writeCharInfo(
				[
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
		case "Majin_Buu":
			writeCharInfo(
				[
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
		case "Beerus":
			writeCharInfo(
				[
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
		case "Hit":
			writeCharInfo(
				[
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
		case "Goku_Black":
			writeCharInfo(
				[
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
		case "Zamasu_(Fused)":
			writeCharInfo(
				[
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
		case "Jiren":
			writeCharInfo(
				[
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
		case "Kefla":
			writeCharInfo(
				[
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

$(window).resize(setLocations);

// Measurements are very slighty inaccurate, make sure to go over
function setLocations() {
	var chrCoords = [850,0, 918,0, 942,22, 934,84, 924,94, 900,94, 896,98, 872,98, 868,94, 844,94, 834,84, 826,24];
	var iconPos = [826,0];
	autoResize("selectbox-fullroster", chrSel.random, chrCoords, chrImg.random, iconPos);
	
	chrCoords = [7,106, 109,108, 121,188, 113,196, 11,194, 0,114];
	iconPos = [0,106];
	autoResize("selectbox-fullroster", chrSel.roshi, chrCoords, chrImg.roshi, iconPos);
	
	chrCoords = [123,108, 225,110, 237,190, 229,198, 127,196, 115,116];
	iconPos = [115,108];
	autoResize("selectbox-fullroster", chrSel.gogetaSSGSS, chrCoords, chrImg.gogetaSSGSS, iconPos);
	
	chrCoords = [238,110, 340,112, 352,192, 344,200, 242,198, 230,118];
	iconPos = [230,110];
	autoResize("selectbox-fullroster", chrSel.goku, chrCoords, chrImg.goku, iconPos);
	
	chrCoords = [353,112, 455,114, 467,194, 459,202, 357,200, 345,120];
	iconPos = [345,112];
	autoResize("selectbox-fullroster", chrSel.tien, chrCoords, chrImg.tien, iconPos);
	
	chrCoords = [468,114, 570,116, 582,196, 574,204, 472,202, 460,122];
	iconPos = [460,114];
	autoResize("selectbox-fullroster", chrSel.yamcha, chrCoords, chrImg.yamcha, iconPos);
	
	chrCoords = [583,116, 685,118, 697,198, 689,206, 587,204, 575,124];
	iconPos = [575,116];
	autoResize("selectbox-fullroster", chrSel.krillin, chrCoords, chrImg.krillin, iconPos);
	
	chrCoords = [698,118, 800,120, 812,200, 804,208, 702,206, 690,126];
	iconPos = [690,118];
	autoResize("selectbox-fullroster", chrSel.gokuSS, chrCoords, chrImg.gokuSS, iconPos);
	
	chrCoords = [836,112, 858,112, 862,108, 904,108, 908,112, 930,112, 944,126, 930,202, 902,202, 896,208, 870,208, 864,202, 836,202, 822,126];
	iconPos = [823,109];
	autoResize("selectbox-fullroster", chrSel.labcoat, chrCoords, chrImg.labcoat, iconPos);
	
	chrCoords = [1070,118, 968,120, 956,200, 964,208, 1066,206, 1078,126];
	iconPos = [957,118];
	autoResize("selectbox-fullroster", chrSel.frieza, chrCoords, chrImg.frieza, iconPos);
	
	chrCoords = [1185,116, 1083,118, 1071,198, 1079,206, 1181,204, 1193,124];
	iconPos = [1072,116];
	autoResize("selectbox-fullroster", chrSel.kidBuu, chrCoords, chrImg.kidBuu, iconPos);
	
	chrCoords = [1300,114, 1198,116, 1186,196, 1194,204, 1296,202, 1308,122];
	iconPos = [1187,114];
	autoResize("selectbox-fullroster", chrSel.ginyu, chrCoords, chrImg.ginyu, iconPos);
	
	chrCoords = [1415,112, 1313,114, 1301,194, 1309,202, 1411,200, 1423,120];
	iconPos = [1302,112];
	autoResize("selectbox-fullroster", chrSel.nappa, chrCoords, chrImg.nappa, iconPos);
	
	chrCoords = [1530,110, 1428,112, 1416,192, 1424,200, 1526,198, 1538,118];
	iconPos = [1417,110];
	autoResize("selectbox-fullroster", chrSel.vegeta, chrCoords, chrImg.vegeta, iconPos);
	
	chrCoords = [1645,108, 1543,110, 1531,190, 1539,198, 1641,196, 1653,116];
	iconPos = [1532,108];
	autoResize("selectbox-fullroster", chrSel.brolyDBS, chrCoords, chrImg.brolyDBS, iconPos);
	
	chrCoords = [1760,106, 1658,108, 1646,188, 1654,196, 1756,194, 1768,114];
	iconPos = [1647,106];
	autoResize("selectbox-fullroster", chrSel.superBaby2, chrCoords, chrImg.superBaby2, iconPos);
	
	chrCoords = [73,200, 175,202, 187,282, 179,290, 77,288, 65,208];
	iconPos = [65,200];
	autoResize("selectbox-fullroster", chrSel.gokuGT, chrCoords, chrImg.gokuGT, iconPos);
	
	chrCoords = [188,202, 290,204, 302,284, 294,292, 192,290, 180,210];
	iconPos = [180,202];
	autoResize("selectbox-fullroster", chrSel.android17, chrCoords, chrImg.android17, iconPos);
	
	chrCoords = [303,204,405,206,417,286,409,294,307,292,295,212];
	iconPos = [295,204];
	autoResize("selectbox-fullroster", chrSel.bardock, chrCoords, chrImg.bardock, iconPos);
	
	chrCoords = [418,206, 520,208, 532,288, 524,296, 422,294, 410,214];
	iconPos = [410,206];
	autoResize("selectbox-fullroster", chrSel.gokuSSGSS, chrCoords, chrImg.gokuSSGSS, iconPos);
	
	chrCoords = [533,208, 635,210, 647,290, 639,298, 537,296, 525,216];
	iconPos = [525,208];
	autoResize("selectbox-fullroster", chrSel.gohanAdult, chrCoords, chrImg.gohanAdult, iconPos);
	
	chrCoords = [648,210, 750,212, 762,292, 754,300, 652,298, 640,218];
	iconPos = [640,210];
	autoResize("selectbox-fullroster", chrSel.trunks, chrCoords, chrImg.trunks, iconPos);
	
	chrCoords = [763,212, 865,214, 877,294, 869,302, 767,300, 755,220];
	iconPos = [755,212];
	autoResize("selectbox-fullroster", chrSel.vegetaSS, chrCoords, chrImg.vegetaSS, iconPos);
	
	chrCoords = [1006,212, 904,214, 892,294, 900,302, 1002,300, 1014,220];
	iconPos = [892,212];
	autoResize("selectbox-fullroster", chrSel.cell, chrCoords, chrImg.cell, iconPos);
	
	chrCoords = [1121,210, 1019,212, 1007,292, 1015,300, 1117,298, 1129,218];
	iconPos = [1007,210];
	autoResize("selectbox-fullroster", chrSel.android18, chrCoords, chrImg.android18, iconPos);
	
	chrCoords = [1236,208, 1134,210, 1122,290, 1130,298, 1232,296, 1244,216];
	iconPos = [1122,208];
	autoResize("selectbox-fullroster", chrSel.android16, chrCoords, chrImg.android16, iconPos);
	
	chrCoords = [1351,206, 1249,208, 1237,288, 1245,296, 1347,294, 1359,214];
	iconPos = [1237,206];
	autoResize("selectbox-fullroster", chrSel.android21, chrCoords, chrImg.android21, iconPos);
	
	chrCoords = [1466,204, 1364,206, 1352,286, 1360,294, 1462,292, 1474,212];
	iconPos = [1352,204];
	autoResize("selectbox-fullroster", chrSel.broly, chrCoords, chrImg.broly, iconPos);
	
	chrCoords = [1581,202, 1479,204, 1467,284, 1475,292, 1577,290, 1589,210];
	iconPos = [1467,202];
	autoResize("selectbox-fullroster", chrSel.cooler, chrCoords, chrImg.cooler, iconPos);
	
	chrCoords = [1696,200, 1594,202, 1582,282, 1590,290, 1692,288, 1704,208];
	iconPos = [1582,200];
	autoResize("selectbox-fullroster", chrSel.janemba, chrCoords, chrImg.janemba, iconPos);
	
	chrCoords = [24,293, 126,295, 138,375, 130,383, 28,381, 16,301];
	iconPos = [16,293];
	autoResize("selectbox-fullroster", chrSel.gokuUI, chrCoords, chrImg.gokuUI, iconPos);
	
	chrCoords = [139,295, 241,297, 253,377, 245,385, 143,383, 131,303];
	iconPos = [131,295];
	autoResize("selectbox-fullroster", chrSel.videl, chrCoords, chrImg.videl, iconPos);
	
	chrCoords = [254,297, 356,299, 368,379, 360,387, 258,385, 246,305];
	iconPos = [246,297];
	autoResize("selectbox-fullroster", chrSel.vegitoSSGSS, chrCoords, chrImg.vegitoSSGSS, iconPos);
	
	chrCoords = [369,299, 471,301, 483,381, 475,389, 373,387, 361,307];
	iconPos = [361,299];
	autoResize("selectbox-fullroster", chrSel.vegetaSSGSS, chrCoords, chrImg.vegetaSSGSS, iconPos);
	
	chrCoords = [484,301, 586,303, 598,383, 590,391, 488,389, 476,309];
	iconPos = [476,301];
	autoResize("selectbox-fullroster", chrSel.gotenks, chrCoords, chrImg.gotenks, iconPos);
	
	chrCoords = [599,303, 701,305, 713,385, 705,393, 603,391, 591,311];
	iconPos = [591,303];
	autoResize("selectbox-fullroster", chrSel.piccolo, chrCoords, chrImg.piccolo, iconPos);
	
	chrCoords = [714,305, 816,307, 828,387, 820,395, 718,393, 706,313];
	iconPos = [706,305];
	autoResize("selectbox-fullroster", chrSel.gohanTeen, chrCoords, chrImg.gohanTeen, iconPos);
	
	chrCoords = [840,310, 884,306, 928,310, 944,328, 934,390, 898,404, 870,404, 834,390, 824,328];
	iconPos = [824,307];
	autoResize("selectbox-fullroster", chrSel.gogetaSS4, chrCoords, chrImg.gogetaSS4, iconPos);
	
	chrCoords = [1055,305, 953,307, 941,387, 949,395, 1051,393, 1063,313];
	iconPos = [941,305];
	autoResize("selectbox-fullroster", chrSel.majinBuu, chrCoords, chrImg.majinBuu, iconPos);
	
	chrCoords = [1170,303, 1068,305, 1056,385, 1064,393, 1166,391, 1178,311];
	iconPos = [1056,303];
	autoResize("selectbox-fullroster", chrSel.beerus, chrCoords, chrImg.beerus, iconPos);
	
	chrCoords = [1285,301, 1183,303, 1171,383, 1179,391, 1281,389, 1293,309];
	iconPos = [1171,301];
	autoResize("selectbox-fullroster", chrSel.hit, chrCoords, chrImg.hit, iconPos);
	
	chrCoords = [1400,299, 1298,301, 1286,381, 1294,389, 1396,387, 1408,307];
	iconPos = [1286,299];
	autoResize("selectbox-fullroster", chrSel.gokuBlack, chrCoords, chrImg.gokuBlack, iconPos);
	
	chrCoords = [1515,297, 1413,299, 1401,379, 1409,387, 1511,385, 1523,305];
	iconPos = [1401,297];
	autoResize("selectbox-fullroster", chrSel.zamasu, chrCoords, chrImg.zamasu, iconPos);
	
	chrCoords = [1630,295, 1528,297, 1516,377, 1524,385, 1626,383, 1638,303];
	iconPos = [1516,295];
	autoResize("selectbox-fullroster", chrSel.jiren, chrCoords, chrImg.jiren, iconPos);
	
	chrCoords = [1745,293, 1643,295, 1631,375, 1639,383, 1741,381, 1753,301];
	iconPos = [1631,293];
	autoResize("selectbox-fullroster", chrSel.kefla, chrCoords, chrImg.kefla, iconPos);
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setLocations;

// Failsafe in case it doesn't properly set things the first time
setTimeout(setLocations,10);