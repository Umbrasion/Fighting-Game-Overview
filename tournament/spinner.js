var gameList = [
	"AFQM",
	"AUAU",
	"AH3X",
	"AVL",
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
	// "KLKIF",
	"KoFXIII",
	"KoFXV",
	"KF2",
	// "MnS",
	"MvCIB",
	"MBAACC",
	"MBTL",
	"MAAB",
	// "MVS",
	"NASB2",
	"NPBZ",
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
	// "REX",
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

var exOptions = {
	noConChance: 10, // Default: 10
	ogoChance: 4, // Default: 4
	ogoCooldown: 3, // Default: 3
	ccChance: 4, // Default: 4
	gameOverride: "", // Default: ""
	conditionOverride: -1, // Default: -1
}

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
		
		if (gameList.indexOf(exOptions.gameOverride) !== -1) {
			randNum = gameList.indexOf(exOptions.gameOverride);
			setGameInfo();
		} else {
			if (Math.floor(Math.random() * 100) < exOptions.ogoChance && exOptions.ogoCooldown === 0) {
				exOptions.ogoCooldown = 3;
				handleDebug("cooldown");
				/*
					Special Scenario: OFF-GAME OUTBREAK
					Rather than a game normally selectable, there will be a selection of alternate games
					Players are able to agree on a game to play from the selection available
					Conditions do not exist and are not rolled when the game is chosen
					Each game may be a fighting game or may not, with game-specific scenarios

					POTENTIAL LIST:
						- Maiden & Spell
							- Standard play, best of 3
						- Umamusume: Pretty Derby - Party Dash
							- Slapdash Grand Prix, best of 1
							- No custom teams
							- CPU teams set to Normal
							- Winner is highest placement
								- In the event of a tie, a Single Event match of player's choice will be a tiebreaker
						- Super Smash REX
							- 4 stocks, 7 minutes, random/gentleman stage
							- No banned characters/stages
						- CMC+
							- 3 stocks, 7 minutes, random/gentleman stage
						- Super Clash Project
							- Battle mode, no stage selection
						- Competitor's Choice
							- Competitors may gentleman to a game of their own choosing
							- The game may be any game that is 
				*/
				console.log("Off-Game Outbreak rolled");
				setupOGO();
				rollForGame = !rollForGame;
			} else {
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
				setGameInfo();
			}
		}

		function setGameInfo() {
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

			// selectSoundCall(currentGame);
			
			setTimeout(toggleButtons, 1000);
		}
	}
	
	function chooseCondition() {
		slotContainerCondition.style.transform = "translate(0px)";
		slotContainerCondition.classList.remove("sloticon-spinin");
		void slotContainerCondition.offsetWidth;
		slotContainerCondition.classList.add("sloticon-spinout");

		if (exOptions.conditionOverride > -1 && exOptions.conditionOverride < 6) {
				randNum = exOptions.conditionOverride;
				slotTexts[0].innerHTML = conditionList[currentGame][randNum];
				updateInfo("condition", currentGame + "-" + randNum);
		} else {
			if (Math.floor(Math.random() * 100) < exOptions.ccChance) {
				// Commentator Clash condition
				console.log("Commentator Clash active");
				slotTexts[0].innerHTML = "Commentator Clash";
				document.getElementById("condition-name").innerHTML = "Commentator Clash";
				document.getElementById("condition-description").innerHTML = "Players choose a commentator to play in their place, who will then compete in their place in the game selected. The player wins if their selected commentator wins the set. Rules remain otherwise unchanged.";
			} else {
				if (Math.floor(Math.random() * 100) < exOptions.noConChance) {
					randNum = 0;
				} else {
					randNum = Math.floor(Math.random() * (conditionList[currentGame].length - 1) + 1);
				}
				
				slotTexts[0].innerHTML = conditionList[currentGame][randNum];
				updateInfo("condition", currentGame + "-" + randNum);
			}
		}
		playLights(true);
		
		setTimeout(toggleButtons, 1000);

		if (exOptions.ogoCooldown > 0) {
			exOptions.ogoCooldown--;
			handleDebug("cooldown");
			// console.log("OGO cooldown now " + exOptions.ogoCooldown);
		}
	}
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

function selectSoundCall(gameSel) {
	var gameCall = new Audio();
	gameCall.volume = 0.2;
	switch (gameSel) {
		case "BBTAG":
			gameCall.src = "SP_audio/sfx/BBTAG_Ragna_call1.wav";
			gameCall.currentTime = 0;
			gameCall.play();
			gameCall.onended = function() {
				switch (Math.floor(Math.random() * 100)) {
					case 0:
						gameCall.src = "SP_audio/sfx/BBTAG_Ragna_call2.wav";
						break;
					case 1:
						gameCall.src = "SP_audio/sfx/BBTAG_Yu_call2.wav";
						break;
					case 2:
						gameCall.src = "SP_audio/sfx/BBTAG_Hyde_call2.wav";
						break;
					case 3:
						gameCall.src = "SP_audio/sfx/BBTAG_Ruby_call2.wav";
						break;
					case 4:
						gameCall.src = "SP_audio/sfx/BBTAG_Heart_call2.wav";
						break;
					case 5:
						gameCall.src = "SP_audio/sfx/BBTAG_Akatsuki_call2.wav";
						break;
					case 6:
						gameCall.src = "SP_audio/sfx/BBTAG_Yumi_call2.wav";
						break;
				}
				gameCall.currentTime = 0;
				gameCall.play();
			}
			break;
		default:
			try {
				gameCall.src = "SP_audio/sfx/" + gameSel + "_call.ogg";
				gameCall.currentTime = 0;
				gameCall.play();
			} catch (error) {
				console.log("No title call found");
			}
			break;
	}
}

document.addEventListener("keydown", function(e) {
	if (e.key === "F1") {
		console.log(document.getElementById("debug-area").style.transform)
		if (document.getElementById("debug-area").style.transform === "translate(calc(-600px - 2vh), 0px)") {
			document.getElementById("debug-area").style.transform = "translate(0px, 0px)";
		} else {
			document.getElementById("debug-area").style.transform = "translate(calc(-600px - 2vh), 0px)";
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

function handleDebug(debugPrompt) {
	var debugArea = document.getElementById("debug-area");
	var debugGameToggle = debugArea.children[0];
	var debugDataInfo = debugArea.children[1];
	switch (debugPrompt) {
		case "setup":
			var gameCount = 0;
			var debugElement;
			gameList.forEach(element => {
				debugElement = `
					<div class="debug-game">
						<h5 class="debug-title">${element}</h5>
						<button id="debug-button-${element}" class="debug-button" onclick="toggleGame('${element}')" style="background-color: lightgreen">ALLOWED</button>
					</div>
				`;
				debugGameToggle.innerHTML += debugElement;
				gameCount++;
			});
			debugElement = `
				<div class="debug-info">Total Game Count: ${gameCount}</div>
				<div id="debug-info-ogocooldown" class="debug-info">OGO Cooldown: ${exOptions.ogoCooldown}</div>
			`;
			debugDataInfo.innerHTML = debugElement;
			break;
		case "cooldown":
			document.getElementById("debug-info-ogocooldown").innerHTML = `OGO Cooldown: ${exOptions.ogoCooldown}`;
			break;
	}
}

handleDebug("setup");