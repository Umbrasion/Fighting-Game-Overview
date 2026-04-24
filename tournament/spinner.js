var gameList = [
	"AFQM",
	"AUAU",
	"AH3X",
	"BBCF",
	"BBTAG",
	"NSC",
	"DBAG",
	"DNFD",
	"DDND",
	"DBFZ",
	"EL2",
	"FM",
	"GBVSR",
	// "GGML",
	"GGST",
	"GGXRD",
	"GGACR",
	"HxHNI",
	"ISD",
	"KLKIF",
	"KoFXIII",
	"KoFXV",
	"KF2",
	// "MnS",
	"MvCIB",
	"MBAACC",
	"MBTL",
	"MAAB",
	"MVS",
	"NASB2",
	"P4AU",
	// "PKMNCC",
	"PTDX",
	"RoA",
	"RoA2",
	"SG",
	"SC",
	"SF6",
	"SSBC",
	"SSBU",
	"SSF2",
	"REX",
	"T8",
	"SOKU",
	"AoCF",
	"UMvC3",
	"UFDK2",
	"UNI2"
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
	setTimeout(playLights, 200);
	
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
				if (spinInterval + 1 == conditionList[currentGame].length) {
					slotTexts[1].innerHTML = conditionList[currentGame][0];
				} else {
					slotTexts[1].innerHTML = conditionList[currentGame][spinInterval + 1];
				}
				spinInterval++;
				if (spinInterval == conditionList[currentGame].length) {
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
		
		if (Math.floor(Math.random() * 100) < 5) {
			// randNum = gameList.length;
			console.log("Special scenario rolled");
		}
		checkForBan: while (true) {
			randNum = Math.floor(Math.random() * gameList.length);
			if (gameBanList.includes(gameList[randNum])) {
				continue checkForBan;
			} else {
				gameBanList.push(gameList[randNum]);
				if (gameBanList.length > gameList.length - 5) {
					document.getElementById("debug-button-" + gameBanList[0]).innerHTML = "ALLOWED";
					document.getElementById("debug-button-" + gameBanList[0]).style.backgroundColor = "lightgreen";
					gameBanList.splice(0, 1);
				}
				document.getElementById("debug-button-" + gameList[randNum]).innerHTML = "BANNED";
				document.getElementById("debug-button-" + gameList[randNum]).style.backgroundColor = "tomato";
				console.log(gameBanList);
				break checkForBan;
			}
		}
		
		slotImages[0].src = "../img/logos/" + gameList[randNum] + "_logo.png";
		if (randNum + 1 === gameList.length) {
			slotImages[1].src = "../img/logos/" + gameList[0] + "_logo.png";
		} else {
			slotImages[1].src = "../img/logos/" + gameList[randNum + 1] + "_logo.png";
		}
		
		currentGame = gameList[randNum];
		randNumStored = randNum;
		updateInfo("game", currentGame);
		playLights(true);
		
		setTimeout(toggleButtons, 1000);
	}
	
	function chooseCondition() {
		slotContainerCondition.style.transform = "translate(0px)";
		slotContainerCondition.classList.remove("sloticon-spinin");
		void slotContainerCondition.offsetWidth;
		slotContainerCondition.classList.add("sloticon-spinout");
		
		if (Math.floor(Math.random() * 100) < 10) {
			randNum = 0;
		} else {
			randNum = Math.floor(Math.random() * (conditionList[currentGame].length - 1) + 1);
		}
		
		slotTexts[0].innerHTML = conditionList[currentGame][randNum];
		
		updateInfo("condition", currentGame + "-" + randNum);
		playLights(true);
		
		setTimeout(toggleButtons, 1000);
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
		document.getElementById("debug-button-" + gameBanList[gameBanList.length - 1]).innerHTML = "ALLOWED";
		document.getElementById("debug-button-" + gameBanList[gameBanList.length - 1]).style.backgroundColor = "lightgreen";
		gameBanList.splice(-1, 1);
	}
	initiateRoll();
}

function toggleGame(gameName) {
	if (gameBanList.indexOf(gameName) !== -1) {
		gameBanList.splice(gameBanList.indexOf(gameName), 1);
		document.getElementById("debug-button-" + gameName).innerHTML = "ALLOWED";
		document.getElementById("debug-button-" + gameName).style.backgroundColor = "lightgreen";
	} else {
		gameBanList.push(gameName);
		document.getElementById("debug-button-" + gameName).innerHTML = "BANNED";
		document.getElementById("debug-button-" + gameName).style.backgroundColor = "tomato";
	}
	console.log(gameBanList);
}

document.addEventListener("keydown", function(e) {
	if (e.key === "F1") {
		var debugArea = document.getElementById("debug-area");
		console.log(debugArea.style.transform)
		if (debugArea.style.transform === "translate(calc(-600px - 2vh), 0px)") {
			debugArea.style.transform = "translate(0px, 0px)";
		} else {
			debugArea.style.transform = "translate(calc(-600px - 2vh), 0px)";
		}
	}
});

var lightAnim;
function playLights(endRoll = false) {
	const spinnerLights = [
		document.getElementById("lights-top"),
		document.getElementById("lights-middle"),
		document.getElementById("lights-bottom"),
	];

	if (endRoll) {
		clearInterval(lightAnim);

		spinnerLights[0].childNodes[0].src = "Light_off.png";
		spinnerLights[0].childNodes[1].src = "Light_off.png";
		spinnerLights[1].childNodes[0].src = "Light_off.png";
		spinnerLights[1].childNodes[1].src = "Light_off.png";
		spinnerLights[2].childNodes[0].src = "Light_off.png";
		spinnerLights[2].childNodes[1].src = "Light_off.png";

		var i;
		for (i = 0; i < 6; i++) {
			setTimeout(function() {
				if (spinnerLights[0].childNodes[0].src.includes("Light_on")) {
					spinnerLights[0].childNodes[0].src = "Light_off.png";
					spinnerLights[0].childNodes[1].src = "Light_off.png";
					spinnerLights[1].childNodes[0].src = "Light_off.png";
					spinnerLights[1].childNodes[1].src = "Light_off.png";
					spinnerLights[2].childNodes[0].src = "Light_off.png";
					spinnerLights[2].childNodes[1].src = "Light_off.png";
				} else {
					spinnerLights[0].childNodes[0].src = "Light_on.png";
					spinnerLights[0].childNodes[1].src = "Light_on.png";
					spinnerLights[1].childNodes[0].src = "Light_on.png";
					spinnerLights[1].childNodes[1].src = "Light_on.png";
					spinnerLights[2].childNodes[0].src = "Light_on.png";
					spinnerLights[2].childNodes[1].src = "Light_on.png";
				}
			}, 200 * i);
		}
	} else {
		var lightStep = 0;

		lightAnim = setInterval(function() {
			spinnerLights[lightStep].childNodes[0].src = "Light_on.png";
			spinnerLights[lightStep].childNodes[1].src = "Light_on.png";
			if (lightStep === 0) {
				spinnerLights[2].childNodes[0].src = "Light_off.png";
				spinnerLights[2].childNodes[1].src = "Light_off.png";
			} else {
				spinnerLights[lightStep - 1].childNodes[0].src = "Light_off.png";
				spinnerLights[lightStep - 1].childNodes[1].src = "Light_off.png";
			}
			lightStep++;
			if (lightStep === 3) {
				lightStep = 0;
			}
		}, 200);
	}
}