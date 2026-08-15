const conditionList = {
	"AFQM": [
		"Just One More Match", // Default
		"A Few REALLY Quick Matches", // 1 stock, 1 minute, best of 5
		"Beatdown", // 100 stamina
		"I Am Thou, and Thou Art I", // Team battle with hard CPU
		"Keep-Away", // 40 stamina, team battle against hard CPUs, last survivor
		"Fortnite Gaming", // Ninja mirror match, 150 stamina
	],
	"AUAU": [
		"You are an IMPOSTOR", // Default
		"Emergency Meeting", // Full meter start
		"Spacefaring No More", // Airblock off
		"Task Management", // Task Mode
		"Electrical Sabotage", // Screen obscured
		"Shhhhh!", // Secret characters only
	],
	"AH3X": [
		"Girl's Fight Night", // Default
		"Mecha Mayhem", // Catherine mirror match
		"In the Hands of Arcana", // Random characters
		"Life's a Gamble", // Luck Arcana
		"Running on Borrowed Time", // Time Arcana
		"Power of Friend(?)ship", // Commentators pick characters
	],
	"AVL": [
		"Earth, Fire, Water, Air", // Default
		"The Fire Nation Attacked", // Firebenders vs. Airbenders
		"Master of All Four Elements", // Avatars only
		"3", // 
		"4", // 
		"5", // 
	],
	"BBCF": [
		"The Wheel of Fate is Turning", // Default
		"Staring Into the Black Beast", // Screen obscured
		"Voice From Beyond the Barrier", // Commentators pick characters
		"So-Called Diverse Roster", // Variations of the same character only, a different version must be selected every match
		"4", // 
		"5", // 
	],
	"BBTAG": [
		"Can't Escape From Crossing Fate", // Default
		"Birds of a Feather", // Single-series teams
		"All Across the FGU", // Random characters
		"3", // 
		"Cross Tag Out", // Played characters cannot be played again
		"5", // 
	],
	"NSC": [
		"New Sign of Catastrophe", // Default
		"Time to Turn Up", // Boss versions
		"Chaos Code Chaos Mode", // Chaos mode
		"Power at Your Fingertips", // Max Chaos gauge
		"Enhancement Inbound", // 1.5x attack rate
		"Character Chaos", // Random characters
	],
	"DBAG": [
		"Endless Crusade", // Default
		"From Heaven to Hell", // Angel vs. Demon
		"Day of Wrath", // Dies Irae Deus mirrors
		"I'll Face Myself", // Base character vs. Alt character
		"Can Slow Me Down", // Max input delay
		"Blind to Your Sins", // Hidden HUD
	],
	"DNFD": [
		"The Seeds of Volition Bring Forth A Challenger", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"DDND": [
		"狗屎游戏", // Default
		"It's-a Me!", // Mario dittos
		"DOOG DOOG Never Die", // Korone dittos
		"It's in Your Hands", // Pick your opponent's character
		"Dong Dong Does Die", // Played characters cannot be played again
		"5", // 
	],
	"DBFZ": [
		"A Fierce Showdown is About to Begin", // Default
		"Heart Virus Inflicted", // Max input delay
		"With Only Half My Strength...!", // 1v1 only
		"Hi, I'm Goku!", // Goku/Goku fusions/Goku Black only
		"That Wasn't Even My Full Power!", // Final character full Ki charge
		"Don't Need Legs to Walk", // Super dash movement only
	],
	"EL2": [
		"SET FIRE", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"FM": [
		"Making Frays", // Default
		"1", // 
		"Geometry Problem", // Random knockback angles
		"Real Stealth-Like", // Stealth visibility
		"Pick Up the Pace Already!", // Fast game speed
		"The Cavalry Has Arrived", // Infinite assist
	],
	"GBVSR": [
		"Believe in Victory", // Default
		"Solo SUBHL", // Super Ultimate controls
		"Inspiration Struck", // Random characters
		"Underdeveloped Grid", // Minimum handicap, best of 5
		"Maledictory Halation", // Screen obscured
		"5", // 
	],
	"GGST": [
		"Here Comes Daredevil!", // Default
		"Mirror of the World", // Reversed left/right controls
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"GGXRD": [
		"Who Dares to Enter the Mayhem", // Default
		"Old Will Revealed", // Revelator version
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"GGACR": [
		"Heaven or Hell", // Default
		"EX-tra Special", // EX characters
		"All That Glitters", // Gold characters
		"Just a Shadow of Yourself", // Shadow characters
		"4", // 
		"5", // 
	],
	"HxHNI": [
		"The Power of Nen", // Default
		"Perfectly Functional Netcode", // 20f input delay
		"Caught in the Web", // Spiders only
		"3", // Commentators pick characters
		"4", // Both sides max handicap
		"5", // 
	],
	"ISD": [
		"Let's Get Down to Business!", // Default
		"Graduation Stream", // Played characters cannot be played again
		"Technical Stream Difficulties...", // Screen obscured
		"3",
		"Bouncing On It", // Blazing Ball Bash
		"Just a Myth", // Boss characters only
	],
	"KLKIF": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"KoFXIII": [
		"Expensive Beauty", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"KoFXV": [
		"Here Comes a Battle of Titans", // Default
		"Moving Up, and Away", // Switch characters on game win
		"Birds of a Feather", // Existing teams only
		"3", // 
		"4", // 
		"5", // 
	],
	"KF2": [
		"Adorable Violence", // Default
		"Fighters 2", // Non-Kirby characters only
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"MvCIB": [
		"Revived Legacy", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"MBAACC": [
		"Sweet Voice and Melty Blood", // Default
		"1", // Players play characters that are alt versions of each other
		"A Hymn for Full Moon", // Full Moon Style only
		"Psuedo-Tag Fighter", // Duo characters only
		"Better Kill Me in One Shot", // Highest damage level
		"5", // Random characters
	],
	"MBTL": [
		"Open Your Magic Circuit", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"MAAB": [
		"This is a Kingdom's Junction", // Default
		"A Familiar Face?", // "Otherworldly" characters only (not assists)
		"Nice Chinchin!", // Foible Elle required as assist
		"Elemental Prowess", // Players must stick to a single element between character and assists
		"Snow White and the 7 Years of Endlag", // Unique Snow White mirror match
		"There's a Million of 'em!", // "Arthur" characters only
	],
	"NASB2": [
		"Get a Nickeload of This", // Default
		"Fighting Familiar Faces", // Character picks must match series
		"F is for Friends", // Squads mode
		"3", // All stages allowed, items on
		"All-Stamina Brawl", // 100 stamina
		"Tax Write-Off", // Played characters cannot be played again
	],
	"NPBZ": [
		"0", // Default
		"Cat Fight", // Sonico mirror matches
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"P4AU": [
		"The Power Within You", // Default
		"My Other Side", // Shadow Type characters only
		"Perso...no?", // Sho mirror matches
		"3", // 
		"A Fateful Reading", // Draw a Tarot card, must play a character that matches that card
		"Who Art Thou...", // Random characters
	],
	"PTDX": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"RoA": [
		"0", // Default
		"1", // Workshop
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"RoA2": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"SG": [
		"It's Showtime!", // Default
		"We've Only Got 1 Take!", // 30 second matches
		"Stunt Double", // 2-character team, second position Double
		"Skull...guys?", // 2-character team, only Big Band/Beowulf
		"I Can Do it Alone!", // 1v1 format
		"Who's the REAL Copy?", // Ms. Fortune vs. Robo-Fortune
	],
	"SC": [
		"Welcome to Slap City", // Default
		"Greatest Death Sport", // Slap Ball Mode, standard
		"Slap a Bestie on Their Face", // Get partner for teams
		"Visualizing Monitization!", // Business Casual Man dittos; first to kill with sell air heavy wins
		"Wrath of the Father", // Team battle with one Really Joel's Dad CPU
		"Taking Wide Steps", // Slap Ball Mode, sticky
	],
	"SF6": [
		"Hit the Streets!", // Default
		"Play by the rules", // Heaven & Hell mode, no gimmick
		"Stay on your toes", // Down & Out mode, Bull Run gimmick, matches are FT3
		"I've got a job for you", // Rules & Regulations mode, no gimmick
		"Capcom's Golden Goose", // Street Fighter II characters only
		"Split the World", // Western vs. Eastern characters
	],
	"SSBC": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"SSBU": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"SSF2": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"T8": [
		"0", // Default
		"Fuck It, We Ball", // Tekken Ball
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"SOKU": [
		"Unperceiving of Natural Law", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"AoCF": [
		"Spirit Possesion Bloom", // Default
		"Some Extra Hands", // Teams must include Jo'on or Ichirin
		"2", // Random characters
		"This One's Gonna Cost You", // Most expensive spell cards
		"4", // 
		"All In Your Mind", // Master Koishi mirror match
	],
	"UMvC3": [
		"Capcom Presents; Marvel Comics", // Default
		"True Marvel vs. Capcom", // Marvel characters vs. Capcom characters
		"She Can't Control It", // Phoenix on each team
		"3", // 
		"4", // 
		"5", // 
	],
	"UFDK2": [
		"クソゲ", // Default
		"Just You and Me", // Solo mode
		"Turbo-Tastic!", // Turbo 10-stars
		"Kyanta Krazy", // Kyanta/Kyanta-like characters only
		"Screw Justin Wong", // Parry type only
		"We Are Kinoko", // 1 character Kinoko only (no solo mode)
	],
	"UNI2": [
		"Recurring VOID Effect", // Default
		"The Night Falls", // Screen obscured
		"2", // 
		"3", // 
		"4", // 
		"My Mind is [CL-R]", // Play on UNICLR
	],
};

const rulesList = document.getElementById("rules-list");
const conditionName = document.getElementById("condition-name");
const conditionDesc = document.getElementById("condition-description");
const conditionRef = document.getElementById("condition-refimg");

function resetInfo() {
	rulesList.innerHTML = "";
	conditionName.innerHTML = "";
	conditionDesc.innerHTML = "";
}

resetInfo();

function updateInfo(updateType, updateID) {
	if (updateType === "game") {
		switch (updateID) {
			case "AFQM":
				rulesList.innerHTML = `
					<li id=""></li>
				`;
				break;
			case "AUAU":
				rulesList.innerHTML = `
					<li id="rules-bestof">Best of 3</li>
					<li id="rules-lives">2 rounds to win set</li>
					<li id="rules-health">3000 health</li>
					<li id="rules-characters">All characters allowed; free pick</li>
					<li id="rules-stages">All stages allowed; free pick</li>
				`;
				break;
		}
	} else if (updateType === "condition") {
		document.getElementById("condition-name").innerHTML = '"' + conditionList[currentGame][randNum] + '"';
		if (updateID.includes("-0")) {
			conditionDesc.innerHTML = "No rule changes, fights play out as normal.";
		} else {
			switch (updateID) {
				
				// A Few Quick Matches
				
				case "AFQM-1":
					conditionDesc.innerHTML = "";
					break;
				case "AFQM-2":
					conditionDesc.innerHTML = "";
					break;
				case "AFQM-3":
					conditionDesc.innerHTML = "";
					break;
				case "AFQM-4":
					conditionDesc.innerHTML = "";
					break;
				case "AFQM-5":
					conditionDesc.innerHTML = "";
					break;
				
				// Among Us Arena Ultimax
				
				case "AUAU-1":
					conditionDesc.innerHTML = "Full Meter Start is enabled for all matches, granting both players a full meter when they start a match.";
					break;
				case "AUAU-2":
					conditionDesc.innerHTML = "Airblocking is disabled for all matches, preventing players from blocking while in the air.";
					break;
				case "AUAU-3":
					conditionDesc.innerHTML = "Matches are played on Task Mode, a gamemode where both players must perform certain tasks to win a round rather than deplete the opponent's health.";
					break;
				case "AUAU-4":
					conditionDesc.innerHTML = "Both players must in some way block their view of the screen, whether it be a blindfold, screen cover, etc. Players are not allowed to look at the screen during an active match, but may look during character select or on the results screen of a match.";
					break;
				case "AUAU-5":
					conditionDesc.innerHTML = "Players may only select secret characters (Fortegreen, Undefined, Charcoal, or Gone), which can be accessed by scrolling to a hidden row between the top and bottom rows of the character select.";
					break;
				
				// Arcana Heart 3 LOVEMAX SIXSTARS!!!!!! XTEND
				
				case "AH3X-1":
					conditionDesc.innerHTML = "";
					break;
				case "AH3X-2":
					conditionDesc.innerHTML = "";
					break;
				case "AH3X-3":
					conditionDesc.innerHTML = "";
					break;
				case "AH3X-4":
					conditionDesc.innerHTML = "";
					break;
				case "AH3X-5":
					conditionDesc.innerHTML = "";
					break;
				
				// Avatar Legends: The Fighting Game
				
				case "AVL-1":
					conditionDesc.innerHTML = "";
					break;
				case "AVL-2":
					conditionDesc.innerHTML = "";
					break;
				case "AVL-3":
					conditionDesc.innerHTML = "";
					break;
				case "AVL-4":
					conditionDesc.innerHTML = "";
					break;
				case "AVL-5":
					conditionDesc.innerHTML = "";
					break;
				
				// BlazBlue: Central Fiction
				
				case "BBCF-1":
					conditionDesc.innerHTML = "";
					break;
				case "BBCF-2":
					conditionDesc.innerHTML = "";
					break;
				case "BBCF-3":
					conditionDesc.innerHTML = "";
					break;
				case "BBCF-4":
					conditionDesc.innerHTML = "";
					break;
				case "BBCF-5":
					conditionDesc.innerHTML = "";
					break;
				
				// BlazBlue: Cross Tag Battle
				
				case "BBTAG-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Chaos Code: New Sign of Catastrophe
				
				case "NSC-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Daemon Bride: Additional Gain
				
				case "DBAG-1":
					conditionDesc.innerHTML = "";
					break;
				
				// DNF Duel
				
				case "DNFD-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Dong Dong Never Die
				
				case "DDND-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Dragon Ball FighterZ
				
				case "DBFZ-1":
					conditionDesc.innerHTML = "";
					break;
				
				// E's Laf++
				
				case "EL2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Fraymakers
				
				case "FM-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Granblue Fantasy Versus: Rising
				
				case "GBVSR-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Guilty Gear Strive
				
				case "GGST-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Guilty Gear Xrd REV 2
				
				case "GGXRD-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Guilty Gear XX Accent Core +R
				
				case "GGACR-1":
					conditionDesc.innerHTML = "";
					break;
				
				// HUNTERxHUNTER NENxIMPACT
				
				case "HxHNI-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Idol Showdown
				
				case "ISD-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Kill la Kill -IF
				
				case "KLKIF-1":
					conditionDesc.innerHTML = "";
					break;
				
				// The King of Fighters XIII
				
				case "KoFXIII-1":
					conditionDesc.innerHTML = "";
					break;
				
				// The King of Fighters XV
				
				case "KoFXV-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Kirby Fighters 2
				
				case "KF2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Marvel vs. Capcom: Infinite & Beyond
				
				case "MvCIB-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Melty Blood: Actress Again Current Code
				
				case "MBAACC-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Melty Blood: Type Lumina
				
				case "MBTL-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Million Arthur: Arcana Blood
				
				case "MAAB-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Nickelodeon All-Star Brawl 2
				
				case "NASB2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Nitroplus Blasterz: Infinite Duel
				
				case "NPBZ-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Persona 4 Arena Ultimax
				
				case "P4AU-1":
					conditionDesc.innerHTML = "";
					break;
				case "P4AU-2":
					conditionDesc.innerHTML = "";
					break;
				case "P4AU-3":
					conditionDesc.innerHTML = "";
					break;
				case "P4AU-4":
					conditionDesc.innerHTML = "Each player will have a Major Arcana Card pulled for them. Players may only choose characters represented by the card they pulled.";
					conditionRef.innerHTML = "<a class='conref-link' onclick='commonImgBlowUp(this.children[0])'><img class='condition-reference' src='img/references/P4AU/Ref_Arcanas.png'></a>";
					conditionAddFunction(updateID);
					break;
				case "P4AU-5":
					conditionDesc.innerHTML = "";
					break;
				
				// Pokkén Tournament DX
				
				case "PTDX-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Rivals of Aether
				
				case "RoA-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Rivals of Aether 2
				
				case "RoA2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Skullgirls
				
				case "SG-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Slap City
				
				case "SC-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Street Fighter 6
				
				case "SF6-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Super Smash Bros. Crusade
				
				case "SSBC-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Super Smash Bros. Ultimate
				
				case "SSBU-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Super Smash Flash 2
				
				case "SSF2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Tekken 8
				
				case "T8-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Touhou Hisoutensoku
				
				case "SOKU-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Touhou Hyouibana ~ Antinomy of Common Flowers
				
				case "AoCF-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Ultimate Marvel vs. Capcom 3
				
				case "UMvC3-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Ultra Fight Da! Kyanta 2
				
				case "UFDK2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Under Night In-Birth II Sys:Celes
				
				case "UNI2-1":
					conditionDesc.innerHTML = "";
					break;
			}
		}
	}
}

function conditionAddFunction(condID) {
	var functionArea = document.getElementById("condition-addfunction");
	switch (condID) {
		case "P4AU-4":
			functionArea.innerHTML = `
				<h3 id="arcanatitle" class="condition-functiontitle">CHOOSE YOUR ARCANA</h3>
				<img id="arcanacard" class="condition-functionimg" src="img/arcana/Arcana_back.png">
				<button class="condition-functionbutton" onclick="conditionFuncRef('arcana')">ROLL ARCANA</button>
			`;
			break;
	}
}

function conditionFuncRef(reqFunction) {
	switch (reqFunction) {
		case "arcana":
			var arcana = document.getElementById("arcanacard");
			var arcanaTitle = document.getElementById("arcanatitle");
			arcana.classList.remove("arcanacard-flip");
			void arcana.offsetWidth;
			arcana.classList.add("arcanacard-flip");
			setTimeout(function() {
				switch (Math.floor(Math.random() * 14)) {
					case 0:
						arcana.src = "img/arcana/Arcana_0.png";
						arcanaTitle.innerHTML = "THE FOOL";
						break;
					case 1:
						arcana.src = "img/arcana/Arcana_0j.png";
						arcanaTitle.innerHTML = "THE JESTER";
						break;
					case 2:
						arcana.src = "img/arcana/Arcana_1.png";
						arcanaTitle.innerHTML = "THE MAGICIAN";
						break;
					case 3:
						arcana.src = "img/arcana/Arcana_2.png";
						arcanaTitle.innerHTML = "THE HIGH PRIESTESS";
						break;
					case 4:
						arcana.src = "img/arcana/Arcana_3.png";
						arcanaTitle.innerHTML = "THE EMPRESS";
						break;
					case 5:
						arcana.src = "img/arcana/Arcana_4.png";
						arcanaTitle.innerHTML = "THE EMPEROR";
						break;
					case 6:
						arcana.src = "img/arcana/Arcana_6.png";
						arcanaTitle.innerHTML = "THE LOVERS";
						break;
					case 7:
						arcana.src = "img/arcana/Arcana_7.png";
						arcanaTitle.innerHTML = "THE CHARIOT";
						break;
					case 8:
						arcana.src = "img/arcana/Arcana_8.png";
						arcanaTitle.innerHTML = "JUSTICE";
						break;
					case 9:
						arcana.src = "img/arcana/Arcana_10.png";
						arcanaTitle.innerHTML = "WHEEL OF FORTUNE";
						break;
					case 10:
						arcana.src = "img/arcana/Arcana_17.png";
						arcanaTitle.innerHTML = "THE STAR";
						break;
					case 11:
						arcana.src = "img/arcana/Arcana_18.png";
						arcanaTitle.innerHTML = "THE MOON";
						break;
					case 12:
						arcana.src = "img/arcana/Arcana_19.png";
						arcanaTitle.innerHTML = "THE SUN";
						break;
					case 13:
						arcana.src = "img/arcana/Arcana_20.png";
						arcanaTitle.innerHTML = "THE AEON";
						break;
				}
			}, 400)
			break;
	}
}

function commonImgBlowUp(focusImage = "") {
	const imgViewBG = document.getElementById("imgview-bg");
	const imgViewBox = document.getElementById("imgview-container");
	if (focusImage !== "") {
		imgViewBG.style.visibility = "visible";
		imgViewBox.innerHTML = `<img src=${focusImage.src}>`;
	} else {
		imgViewBG.style.visibility = "hidden";
		imgViewBox.innerHTML = "";
	}
}