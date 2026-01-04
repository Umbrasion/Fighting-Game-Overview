var gameList = [
	"AFQM",
	"AUAU",
	"AH3X",
	"BBCF",
	"BBTAG",
	"DNFD",
	"DBFZ",
	"EL2",
	"FM",
	"GBVSR",
	"GGML",
	"GGST",
	"GGXRD",
	"GGACR",
	"ISD",
	"KLKIF",
	"KOFXIII",
	"KOFXV",
	"KF2",
	"MnS",
	"MvCIB",
	"MBAACC",
	"MBTL",
	"MAAB",
	"MVS",
	"NASB2",
	"P4AU",
	"PKMNCC",
	"PTDX",
	"PP",
	"RoA",
	"RoA2",
	"SG",
	"SC",
	"SF6",
	"SSBC",
	"SSBU",
	"SSF2",
	"T8",
	"SOKU",
	"AoCF",
	"UMvC3",
	"UFDK2",
	"UNI2",
	"RNG"
];
var gameBanList = [];
var currentGame = "";

var rollForGame = true;
var randNum = 0;
var randNumStored = 0;

function initiateRoll() {
	const slotImages = document.getElementsByClassName("slot-image");
	const slotTexts = document.getElementsByClassName("slot-text");
	const slotContainer = document.getElementById("slot-container");
	const slotContainerCondition = document.getElementById("slot-container-condition");
	
	toggleButtons();
	
	if (rollForGame) {
		resetInfo();
		
		var spinCount = 0;
		var spinInterval = randNumStored;
		var offsetSlots = 0;
		
		function spinLogo() {
			offsetSlots -= 80;
			if (offsetSlots < -200) {
				offsetSlots = 0;
				slotImages[0].src = "../img/logos/" + gameList[spinInterval] + "_logo.png";
				if (spinInterval + 1 == gameList.length) {
					slotImages[1].src = "../img/logos/" + gameList[0] + "_logo.png";
				} else {
					slotImages[1].src = "../img/logos/" + gameList[spinInterval + 1] + "_logo.png";
				}
				spinInterval++;
				if (spinInterval == gameList.length) {
					spinInterval = 0;
				}
			}
			slotContainer.style.transform = "translate(0px," + offsetSlots + "px)";
			spinCount++;
			
			if (spinCount == 200) {
				chooseGame();
			} else {
				setTimeout(spinLogo, 8);
			}
		}
		slotContainer.classList.remove("sloticon-spinout");
		void slotContainer.offsetWidth;
		slotContainer.classList.add("sloticon-spinin");
		setTimeout(spinLogo, 300);
	} else {
		var spinCount = 0;
		var spinInterval = 0;
		var offsetSlots = 0;
		
		function spinCondition() {
			offsetSlots -= 20;
			if (offsetSlots < -100) {
				offsetSlots = 0;
				slotTexts[0].innerHTML = conditionList[currentGame][spinInterval];
				if (spinInterval + 1 == 10) {
					slotTexts[1].innerHTML = conditionList[currentGame][0];
				} else {
					slotTexts[1].innerHTML = conditionList[currentGame][spinInterval + 1];
				}
				spinInterval++;
				if (spinInterval == 10) {
					spinInterval = 0;
				}
			}
			slotContainerCondition.style.transform = "translate(0px," + offsetSlots + "px)";
			spinCount++;
			
			if (spinCount == 141) {
				chooseCondition();
			} else {
				setTimeout(spinCondition, 8);
			}
		}
		slotContainerCondition.classList.remove("sloticon-spinout");
		void slotContainerCondition.offsetWidth;
		slotContainerCondition.classList.add("sloticon-spinin");
		setTimeout(spinCondition, 300);
	}
	rollForGame = !rollForGame;
	
	function chooseGame() {
		slotContainer.style.transform = "translate(0px)";
		slotContainer.classList.remove("sloticon-spinin");
		void slotContainer.offsetWidth;
		slotContainer.classList.add("sloticon-spinout");
		
		if (Math.floor(Math.random() * 100) < 2) {
			randNum = gameList.length - 1;
			console.log("RNG Mode enabled")
		}
		checkForBan: while (true) {
			randNum = Math.floor(Math.random() * (gameList.length - 1)); // -1 because the last "game" in the list is RNG
			if (gameBanList.includes(gameList[randNum])) {
				continue checkForBan;
			} else {
				gameBanList.push(gameList[randNum]);
				if (gameBanList.length > gameList.length - 5) {
					gameBanList.splice(0, 1);
				}
				console.log(gameBanList);
				break checkForBan;
			}
		}
		
		slotImages[0].src = "../img/logos/" + gameList[randNum] + "_logo.png";
		if (randNum + 1 == gameList.length) {
			slotImages[1].src = "../img/logos/" + gameList[0] + "_logo.png";
		} else {
			slotImages[1].src = "../img/logos/" + gameList[randNum + 1] + "_logo.png";
		}
		
		currentGame = gameList[randNum];
		randNumStored = randNum;
		updateInfo("game", currentGame);
		
		setTimeout(toggleButtons, 500);
	}
	
	function chooseCondition() {
		slotContainerCondition.style.transform = "translate(0px)";
		slotContainerCondition.classList.remove("sloticon-spinin");
		void slotContainerCondition.offsetWidth;
		slotContainerCondition.classList.add("sloticon-spinout");
		
		randNum = Math.floor(Math.random() * (conditionList[currentGame].length));
		
		slotTexts[0].innerHTML = conditionList[currentGame][randNum];
		
		updateInfo("condition", currentGame + "-" + randNum);
		
		setTimeout(toggleButtons, 500);
	}
	
	function toggleButtons() {
		const rollButton = document.getElementById("main-button");
		const rerollButton = document.getElementById("reroll-button");
		if (rollButton.classList.contains("roll-button-null")) {
			rollButton.classList.remove("roll-button-null");
			rerollButton.classList.remove("roll-button-null");
		} else {
			rollButton.classList.add("roll-button-null");
			rerollButton.classList.add("roll-button-null");
		}
	}
}

function initiateReroll() {
	rollForGame = !rollForGame;
	if (rollForGame) {
		gameBanList.splice(-1, 1);
	}
	initiateRoll();
}

document.addEventListener("keydown", function(e) {
	if (e.key === "F1") {
		
	}
});