const conditionList = {
	"AFQM": [
		"0", // Default
		"Rush Hour", // 1 stock, 1 minute, best of 5
		"2", // 100 stamina
		"3", // Team battle with hard CPU
		"4", // 40 stamina, team battle against hard CPUs, last survivor
		"5", // Ninja mirror match, 150 stamina
	],
	"AUAU": [
		"You are an IMPOSTOR", // Default
		"Emergency Meeting", // Full meter start
		"Spacefaring No More", // Airblock off
		"Play the Rainbow", // Random Select
		"It's High Noon...", // Gun attacks only
		"Task Management", // Task Mode
		"Only Fundies", // Gone only
		"Electrical Sabotage", // Screen obscured
		"Shhhhh!", // Secret characters only
		"O2 Countdown", // 1 round, 5000 health
	],
	"AH3X": [
		"0", // Default
		"1", // Catherine mirror match
		"2", // Random battle
		"3", // Luck Arcana
		"4", // Time Arcana
		"5", // Eko mirror match
	],
	"BBCF": [
		"The Wheel of Fate is Turning", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"BBTAG": [
		"Can't Escape From Crossing Fate", // Default
		"1", // Single-series teams
		"2", // Random Select
		"3", // Protagonists only
		"4", // 
		"5", // 
	],
	"NSC": [
		"0", // Default
		"Time to Turn Up", // Boss versions
		"Chaos Code Chaos Mode", // Chaos mode
		"Power at Your Fingertips", // Max Chaos gauge
		"Enhancement Inbound", // 1.5x attack rate
		"5", // Random character
	],
	"DBAG": [
		"Endless Crusade", // Default
		"From Heaven to Hell", // Angel vs. Demon
		"Day of Wrath", // Dies Irae Deus mirrors
		"I'll Face Myself", // Base character vs. Alt character
		"4", // Max input delay
		"5", // Hidden HUD
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
		"烂游戏", // Default
		"1", // Mario dittos
		"2", // Korone dittos
		"3", // 
		"4", // 
		"5", // High-speed matches
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
		"0", // Default
		"1", // Workshop
		"2", // Random knockback angles
		"3", // Stealth visibility
		"4", // Fast game speed
		"5", // Infinite assist
	],
	"GBVSR": [
		"Believe in Victory", // Default
		"SUBHL Woes", // Super Ultimate controls
		"Inspiration Struck", // Random characters
		"Underdeveloped Grid", // Minimum handicap, best of 5
		"Maledictory Halation", // Screen obscured
		"5", // 
	],
	"GGML": [
		"Let's Rock!", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"GGST": [
		"Here Comes Daredevil!", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"GGXRD": [
		"Who Dares to Enter the Mayhem", // Default
		"1", // Revelator version
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"GGACR": [
		"Heaven or Hell", // Default
		"1", // EX characters
		"2", // Gold characters
		"3", // Shadow characters
		"4", // 
		"5", // 
	],
	"HxHNI": [
		"0", // Default
		"1", // 20f input delay
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"ISD": [
		"Let's Get Down to Business!", // Default
		"Graduation Steam", // Played characters cannot be played again
		"3", // 
		"4", // 
		"5", // 
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
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"KoFXV": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"KF2": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"MnS": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"MvCIB": [
		"0", // Default
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
		"3", // Duo characters only
		"4", // High damage level
		"5", // Random
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
		"4", // Unique Snow White mirror match
		"5", // "Arthur" characters only
	],
	"MVS": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"NASB2": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"P4AU": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"PKMNCC": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
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
		"1", // 
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
		"4", // 1v1 format
		"5", // Ms. Fortune vs. Robo-Fortune
	],
	"SC": [
		"Welcome to Slap City", // Default
		"Greatest Death Sport", // Slap Ball Mode, standard
		"Slap a Bestie on Their Face", // Get partner for teams
		"Visualizing Monitization!", // Business Casual Man dittos; first to kill with sell air heavy wins
		"Wrath of the Father", // Team battle with one Really Joel's Dad CPU
		"5", // Slap Ball Mode, sticky
	],
	"SF6": [
		"0", // Default
		"Play by the rules", // Heaven & Hell mode, no gimmick
		"Stay on your toes", // Down & Out mode, Bull Run gimmick, matches are FT3
		"I've got a job for you", // Rules & Regulations mode, no gimmick
		"4", // Street Fighter II characters only
		"5", // Western vs. Eastern characters
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
	"REX": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"T8": [
		"0", // Default
		"1", // Tekken Ball
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
		"1", // Teams must include Jo'on or Ichrin
		"2", // Random characters
		"3", // Most expensive spell cards
		"4", // Create a ship
		"5", // Master Koishi mirror match
	],
	"UMvC3": [
		"0", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"5", // 
	],
	"UFDK2": [
		"クソゲ", // Default
		"Just You and Me", // Solo mode
		"Turbo-Tastic!", // Turbo 10-stars
		"Kyanta Krazy", // Kyanta/Kyanta-like characters only
		"Risking it All", // Parry type only
		"We Are Kinoko", // 1 character Kinoko only (no solo mode)
	],
	"UNI2": [
		"Recurring VOID Effect", // Default
		"1", // 
		"2", // 
		"3", // 
		"4", // 
		"My Mind is CL-R", // Play on UNICLR
	],
};

const rulesList = document.getElementById("rules-list");
const rulesListExtra1 = document.getElementById("rules-list-extra1");
const rulesListExtra2 = document.getElementById("rules-list-extra2");
const conditionName = document.getElementById("condition-name");
const conditionDesc = document.getElementById("condition-description");

function resetInfo() {
	rulesList.innerHTML = "";
	rulesListExtra1.innerHTML = "";
	rulesListExtra2.innerHTML = "";
	conditionName.innerHTML = "";
	conditionDesc.innerHTML = "";
}

resetInfo();

function updateInfo(updateType, updateID) {
	if (updateType === "game") {
		switch (updateID) {
			case "AFQM":
				rulesList.innerHTML = `
					<li class=""></li>
				`;
				break;
			case "AUAU":
				rulesList.innerHTML = `
					<li id="rules-bestof" class="">Best of 3</li>
					<li id="rules-lives" class="">2 rounds to win set</li>
					<li id="rules-time" class="">3000 health</li>
					<li id="rules-characters" class="">All characters allowed; free pick</li>
					<li id="rules-stages" class="">All stages allowed; free pick</li>
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
				
				// Among Us Arena Ultimax
				
				case "AUAU-1":
					conditionDesc.innerHTML = "Full Meter Start is enabled for all matches, granting both players a full meter when they start a match.";
					break;
				case "AUAU-2":
					conditionDesc.innerHTML = "Airblocking is disabled for all matches, preventing players from blocking while in the air.";
					break;
				case "AUAU-3":
					conditionDesc.innerHTML = "Both players must choose random characters and cannot select a specific character on their own.";
					break;
				case "AUAU-4":
					conditionDesc.innerHTML = "Both players must only use attacks bound to the Gun button. No other attacks are allowed. Non-attacking actions such as blocking, bursting, etc. are still permitted.";
					break;
				case "AUAU-5":
					conditionDesc.innerHTML = "Matches are played on Task Mode, a gamemode where both players must perform certain tasks to win a round rather than deplete the opponent's health.";
					break;
				case "AUAU-6":
					conditionDesc.innerHTML = "Players may only select the secret character Gone, which can be accessed by scrolling to a hidden row between the top and bottom rows of the character select. Gone has a gray/seemingly missing color pallet and is unable to select a super.";
					break;
				case "AUAU-7":
					conditionDesc.innerHTML = "Both players must in some way block their view of the screen, whether it be a blindfold, screen cover, etc. Players are not allowed to look at the screen during an active match, but may look during character select or on the results screen of a match.";
					break;
				case "AUAU-8":
					conditionDesc.innerHTML = "Players may only select secret characters (Fortegreen, Undefined, Charcoal, or Gone), which can be accessed by scrolling to a hidden row between the top and bottom rows of the character select.";
					break;
				case "AUAU-9":
					conditionDesc.innerHTML = "Players now only need 1 round to win a set; however, health is set to 5000 instead of the normal 3000.";
					break;
				
				// Arcana Heart 3 LOVEMAX SIXSTARS!!!!!! XTEND
				
				case "AH3X-1":
					conditionDesc.innerHTML = "";
					break;
				
				// BlazBlue: Central Fiction
				
				case "BBCF-1":
					conditionDesc.innerHTML = "";
					break;
				
				// BlazBlue: Cross Tag Battle
				
				case "BBTAG-1":
					conditionDesc.innerHTML = "";
					break;
				
				// DNF Duel
				
				case "DNFD-1":
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
				
				// Guilty Gear: The Missing Link
				
				case "GGML-1":
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
				
				// Maiden & Spell
				
				case "MnS-1":
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
				
				case "MAAC-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Multiversus
				
				case "MVS-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Nickelodeon All-Star Brawl 2
				
				case "NASB2-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Persona 4 Arena Ultimax
				
				case "P4AU-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Pokémon Close Combat
				
				case "PKMNCC-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Pokkén Tournament DX
				
				case "PTDX-1":
					conditionDesc.innerHTML = "";
					break;
				
				// Project+
				
				case "PP-1":
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