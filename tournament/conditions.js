const conditionList = {
	"AFQM": [
		"1", // Default
		"2", // 1 stock, 1 minute, best of 5
		"3", // 100 stamina
		"4", // Team battle with hard CPU Rend
		"5", // 1 stock, 999 stamina
		"6", // 
		"7", // 
		"8", // 
	],
	"AUAU": [
		"You are an IMPOSTOR", // Default
		"Emergency Meeting", // Full meter start
		"Spacefaring No More", // Airblock off
		"Play the Rainbow", // Random Select
		"It's High Noon...", // Gun attacks only
		"Task Management", // Task Mode
		"Only Fundies", // Gone only
		"Electrical Sabotage", // Blindfolded
		"Shhhhh!", // Secret characters only
		"O2 Countdown", // 1 round, 5000 health
	],
	"AH3X": [
		"1", // Default
		"2", // Catherine dittos
		"3", // Random battle
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"BBCF": [
		"The Wheel of Fate is Turning", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"BBTAG": [
		"Can't Escape From Crossing Fate", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"NSC": [
		"1", // Default
		"2", // Boss versions
		"3", // Chaos mode
		"4", // Max Chaos gauge
		"5", // 1.5x attack rate
		"6", // 
		"7", // 
		"8", // 
	],
	"DNFD": [
		"The Seeds of Volition Bring Forth A Challenger", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"DDND": [
		"烂游戏", // Default
		"2", // Mario dittos
		"3", // Korone dittos
		"4", // Glasses characters only
		"5", // Hat characters only
		"6", // 
		"7", // 
		"8", // 
	],
	"DBFZ": [
		"A Fierce Showdown is About to Begin", // Default
		"2", // Only preset teams
		"Heart Virus Inflicted", // Max input delay
		"With Only Half My Strength...!", // 1v1 only
		"Hi, I'm Goku!", // Goku/Goku fusions/Goku Black only
		"6", // Only C assist
		"That Wasn't Even My Full Power!", // Final character full Ki charge
		"Don't Need Legs to Walk", // Super dash movement only
	],
	"EL2": [
		"SET FIRE", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"FM": [
		"1", // Default
		"2", // Workshop
		"3", // Random knockback angles
		"4", // Stealth visibility
		"5", // Fast game speed
		"6", // Turbo mode on
		"7", // Infinite jumps
		"8", // Infinite assist
	],
	"GBVSR": [
		"Believe in Victory", // Default
		"SUBHL Woes", // Super Ultimate controls
		"3", // Random characters
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"GGML": [
		"Heaven or Hell", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"GGST": [
		"Here Comes Daredevil!", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"GGXRD": [
		"Who Dares to Enter the Mayhem", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"GGACR": [
		"Let's Rock!", // Default
		"2", // EX characters
		"3", // Gold characters
		"4", // Shadow characters
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"HxHNI": [
		"1", // Default
		"2", // 20f input delay
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"ISD": [
		"Let's Get Down to Business!", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"KLKIF": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"KoFXIII": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"KoFXV": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"KF2": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"MnS": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"MvCIB": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"MBAACC": [
		"Sweet Voice and Melty Blood", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"MBTL": [
		"Open Your Magic Circuit", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"MAAB": [
		"This is a Kingdom's Junction", // Default
		"A familiar face?", // "Otherworldly" characters only (not assists)
		"Nice chinchin!", // Foible Elle required as assist
		"Elemental prowess", // Players must stick to a single element between character and assists
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"MVS": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"NASB2": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"P4AU": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"PKMNCC": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"PTDX": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"RoA": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"RoA2": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"SG": [
		"It's Showtime!", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"We've Only Got 1 Take!", // 30 second matches
		"Stunt Double", // 2-character team, second position Double
		"Skull...guys?", // 2-character team, only Big Band/Beowulf
	],
	"SC": [
		"Welcome to Slap City", // Default
		"2", // 
		"3", // 
		"Greatest Death Sport", // Slap Ball Mode, standard
		"5", // 
		"Slap a Bestie on Their Face", // Get partner for teams
		"Visualizing monitization!", // Business Casual Man dittos; first to kill with sell air heavy wins
		"Wrath of the Father", // Team battle with one Really Joel's Dad CPU
	],
	"SF6": [
		"1", // Default
		"Play by the rules", // Heaven & Hell mode, no gimmick
		"Stay on your toes", // Down & Out mode, Bull Run gimmick, matches are FT3
		"I've got a job for you", // Rules & Regulations mode, no gimmick
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"SSBC": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"SSBU": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"SSF2": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"REX": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"T8": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"SOKU": [
		"Unperceiving of Natural Law", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"AoCF": [
		"Spirit Possesion Bloom", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"UMvC3": [
		"1", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
	],
	"UFDK2": [
		"クソゲ", // Default
		"Just You and Me", // Solo mode
		"Turbo-Tastic!", // Turbo 10-stars
		"4", // 
		"5", // 
		"Kyanta Krazy", // Kyanta/Kyanta-like characters only
		"Risking it All", // Parry type only
		"We Are Kinoko", // 1 character Kinoko only (no solo mode)
	],
	"UNI2": [
		"Recurring VOID Effect", // Default
		"2", // 
		"3", // 
		"4", // 
		"5", // 
		"6", // 
		"7", // 
		"8", // 
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
					<li id="rules-bestof" class=""></li>
					<li id="rules-lives" class=""></li>
					<li id="rules-time" class=""></li>
					<li id="rules-characters" class=""></li>
					<li id="rules-stages" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
				`;
				break;
			case "AUAU":
				rulesList.innerHTML = `
					<li id="rules-bestof" class="">Best of 3</li>
					<li id="rules-lives" class="">2 rounds to win set</li>
					<li id="rules-time" class="">3000 health</li>
					<li id="rules-characters" class="">All characters allowed; free pick</li>
					<li id="rules-stages" class="">All stages allowed; free pick</li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
					<li id="rules-" class=""></li>
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