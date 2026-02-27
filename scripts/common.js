function initializeOV(formatType, infoTime = 600) {
	switch (formatType) {
		case "flexbox":
			document.getElementsByClassName("description-area")[0].innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<div style="display: flex">
					<table class="info-table" style="flex: 1 1 auto">
						<tbody>
							<tr>
								<th>PLAYSTYLE</th>
								<th>EFFECTIVE RANGE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-playstyle">
									<span class="archetype-"></span>
								</td>
								<td style="vertical-align: middle" id="overview-range">
									<span class="range-"></span>
								</td>
							</tr>
							<tr>
								<th>UNIQUE MECHANICS</th>
								<th>EASE OF USE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-mechanics">
									<span class="unimech-none">None</span>
								</td>
								<td style="vertical-align: middle" id="overview-rating-ease" class=""></td>
							</tr>
							<tr>
								<th style="text-align: center">Play if you like:</th>
								<th style="text-align: center">Avoid if you dislike:</th>
							</tr>
							<tr>
								<td style="text-align: left">
									<ul id="overview-list-like" class="list-likedislike">
										
									</ul>
								</td>
								<td style="text-align: left">
									<ul id="overview-list-dislike" class="list-likedislike">
										
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div style="flex: 0 0 270px">
						<h3 class="info-subtitle">RATINGS</h3>
						<div id="stat-graph-background" class="stat-graph">
							<div id="stat-graph-values" class="stat-graph"></div>
						</div>
					</div>
				</div>
				<div id="overview-description" class="info-description"></div>
			`
			break;
		case "flexbox-reverse":
			document.getElementsByClassName("description-area")[0].innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<div style="display: flex">
					<div style="flex: 0 0 270px">
						<h3 class="info-subtitle">RATINGS</h3>
						<div id="stat-graph-background" class="stat-graph">
							<div id="stat-graph-values" class="stat-graph"></div>
						</div>
					</div>
					<table class="info-table" style="flex: 1 1 auto">
						<tbody>
							<tr>
								<th>PLAYSTYLE</th>
								<th>EFFECTIVE RANGE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-playstyle">
									<span class="archetype-"></span>
								</td>
								<td style="vertical-align: middle" id="overview-range">
									<span class="range-"></span>
								</td>
							</tr>
							<tr>
								<th>UNIQUE MECHANICS</th>
								<th>EASE OF USE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-mechanics">
									<span class="unimech-none">None</span>
								</td>
								<td style="vertical-align: middle" id="overview-rating-ease" class=""></td>
							</tr>
							<tr>
								<th style="text-align: center">Play if you like:</th>
								<th style="text-align: center">Avoid if you dislike:</th>
							</tr>
							<tr>
								<td style="text-align: left">
									<ul id="overview-list-like" class="list-likedislike">
										
									</ul>
								</td>
								<td style="text-align: left">
									<ul id="overview-list-dislike" class="list-likedislike">
										
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="overview-description" class="info-description"></div>
			`
			break;
		case "wide":
			document.getElementsByClassName("description-area")[0].innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<div style="display: flex">
					<div id="overview-description" class="info-description" style="flex: 1 1 auto; padding: 0px 20px"></div>
					<div style="flex: 0 0 270px">
						<h3 class="info-subtitle">RATINGS</h3>
						<div id="stat-graph-background" class="stat-graph">
							<div id="stat-graph-values" class="stat-graph"></div>
						</div>
					</div>
					<table class="info-table" style="flex: 0 1 auto; width: 35vw">
						<tbody>
							<tr>
								<th>PLAYSTYLE</th>
								<th>EFFECTIVE RANGE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-playstyle">
									<span class="archetype-"></span>
								</td>
								<td style="vertical-align: middle" id="overview-range">
									<span class="range-"></span>
								</td>
							</tr>
							<tr>
								<th>UNIQUE MECHANICS</th>
								<th>EASE OF USE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-mechanics">
									<span class="unimech-none">None</span>
								</td>
								<td style="vertical-align: middle" id="overview-rating-ease" class=""></td>
							</tr>
							<tr>
								<th style="text-align: center">Play if you like:</th>
								<th style="text-align: center">Avoid if you dislike:</th>
							</tr>
							<tr>
								<td style="text-align: left">
									<ul id="overview-list-like" class="list-likedislike">
										
									</ul>
								</td>
								<td style="text-align: left">
									<ul id="overview-list-dislike" class="list-likedislike">
										
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			`
			break;
		case "wide-scaled":
			document.getElementsByClassName("description-area")[0].innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<div style="display: flex">
					<div id="overview-description" class="info-description" style="flex: 1 1 auto; padding: 0px 20px; min-width: 35%"></div>
					<div style="flex: 0 0 270px">
						<h3 class="info-subtitle">RATINGS</h3>
						<div id="stat-graph-background" class="stat-graph">
							<div id="stat-graph-values" class="stat-graph"></div>
						</div>
					</div>
					<table class="info-table" style="flex: 0 1 auto">
						<tbody>
							<tr>
								<th>PLAYSTYLE</th>
								<th>EFFECTIVE RANGE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-playstyle">
									<span class="archetype-"></span>
								</td>
								<td style="vertical-align: middle" id="overview-range">
									<span class="range-"></span>
								</td>
							</tr>
							<tr>
								<th>UNIQUE MECHANICS</th>
								<th>EASE OF USE</th>
							</tr>
							<tr>
								<td style="vertical-align: middle" id="overview-mechanics">
									<span class="unimech-none">None</span>
								</td>
								<td style="vertical-align: middle" id="overview-rating-ease" class=""></td>
							</tr>
							<tr>
								<th style="text-align: center">Play if you like:</th>
								<th style="text-align: center">Avoid if you dislike:</th>
							</tr>
							<tr>
								<td style="text-align: left">
									<ul id="overview-list-like" class="list-likedislike">
										
									</ul>
								</td>
								<td style="text-align: left">
									<ul id="overview-list-dislike" class="list-likedislike">
										
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			`
			break;
		case "experimental":
			document.getElementsByClassName("description-area")[0].innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<div style="display: grid; grid-template-columns: 25% auto 25%; gap: 16px">
					<div class="info-segement">
						<div class="color-box">
							<img id="info-image" src="">
							<div class="color-options">
								<button class="color-button" onclick="setColor(false)">&lArr;</button>
								<figcaption id="color-selector"><span id="color-selector-text"></span></figcaption>
								<button class="color-button" onclick="setColor()">&rArr;</button>
							</div>
						</div>
						<table class="info-table">
							<tr>
								<th>PLAYSTYLE</th>
								<td id="overview-playstyle"></td>
							</tr>
							<tr>
								<th>DIFFICULTY</th>
								<td id="overview-difficulty"></td>
							</tr>
							<tr>
								<th>UNIQUE MECHANICS</th>
								<td id="overview-mechanics"></td>
							</tr>
						</table>
					</div>
					<div class="info-segement">
						<p id="overview-description" class="info-description"></p>
						<table class="info-table">
							<tr>
								<th>Play if you like:</th>
								<th>Avoid if you dislike:</th>
							</tr>
							<tr>
								<td style="text-align: left">
									<ul id="overview-likes" class="list-likedislike">
										
									</ul>
								</td>
								<td style="text-align: left">
									<ul id="overview-dislikes" class="list-likedislike">
										
									</ul>
								</td>
							</tr>
						</table>
					</div>
					<div class="info-segement">
						<h3 class="info-subtitle">RATINGS</h3>
						<div id="stat-graph-background" class="stat-graph">
							<div id="stat-graph-values" class="stat-graph"></div>
						</div>
					</div>
				</div>
				<button class="description-exit" onclick="hideDescription()">Back to character select</button>
			`;
			setTimeout(function() {
				document.getElementsByClassName("description-bg")[0].style.visibility = "visible";
				document.getElementsByClassName("description-bg")[0].style.opacity = 1;
			}, infoTime);
			break;
		default:
			document.getElementsByClassName("description-area")[0].innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<table class="info-table">
					<tbody>
						<tr>
							<th>PLAYSTYLE</th>
							<th>EFFECTIVE RANGE</th>
						</tr>
						<tr>
							<td style="vertical-align: middle" id="overview-playstyle">
								<span class="archetype-"></span>
							</td>
							<td style="vertical-align: middle" id="overview-range">
								<span class="range-"></span>
							</td>
						</tr>
						<tr>
							<th>UNIQUE MECHANICS</th>
							<th>EASE OF USE</th>
						</tr>
						<tr>
							<td style="vertical-align: middle" id="overview-mechanics">
								<span class="unimech-none">None</span>
							</td>
							<td id="overview-rating-ease" class=""></td>
						</tr>
						<tr>
							<th style="text-align: center">Play if you like:</th>
							<th style="text-align: center">Avoid if you dislike:</th>
						</tr>
						<tr>
							<td style="text-align: left">
								<ul id="overview-list-like" class="list-likedislike">
									
								</ul>
							</td>
							<td style="text-align: left">
								<ul id="overview-list-dislike" class="list-likedislike">
									
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<h3 class="info-subtitle">RATINGS</h3>
				<div id="stat-graph-background" class="stat-graph">
					<div id="stat-graph-values" class="stat-graph"></div>
				</div>
				<div id="overview-description" class="info-description"></div>
			`
			break;
	}
}
	
function updateOV(detailInfo, ratings, likeOrDislike, charDescription) {
	/*
		Info thoughts

		GAMES
			Type:
				Traditional (2D) fighter vs. 3D fighter vs. Arena fighter vs. Platform fighter
				Subgenre is a very important aspect of 
				If you're more of a Smash player you might want to stick to platform fighters
				Or I guess if you're a fighting game purist you'd wanna stick to the old faithful 2D style, but if you are you're probably not using this site
				Just gotta figure out where Touhou 15.5 fits into this
			Community:
				(Discord links, forums, etc.)
				Important, as the community around a fighting game can (hopefully) help you in your endeavers within said fighting game

		CHARACTERS
			Playstyle: 
				Useful but depends on your fighting game terminology knowledge. Knowing a character is a "rushdown" or a "shoto" can be useful, but if you don't know what those mean it can be a layer of confusion
				Relevent even between genres, for example someone who plays traditional fighters might not understand what a "spacie" is
				You could use terms more understandable to the layman but assuming the person reading is interested in getting into the community, it might be better to introduce them to the common lingo instead of giving them a term that isn't used by the community
				A short definition or clarification is a possibility
			Range:
				Not particularly helpful to new players. Could be helpful to people somewhat familiar with fighting games (i.e. I typically gravitate towards more mid-ranged characters) but to people who perhaps don't know yet what kind of character they like it will most likely not have an impact on their stance
				Can likely be removed
			Unique Mechanics:
				(Alternatively: gimmicks)
				Can depend on the game; in games like BlazBlue where characters have defined mechanics, such as related to their drive (i.e. Ragna's lifesteal) or unique systems (i.e. Hakumen's alternate heat meter), this can be much more decisive than in games which have less of those gimmicks and characters tend to lean on system mechanics or their core moveset more.
			Ease of Use:
				Can help newer players try easier characters to get used to game feel, or let them understand that they're playing a character that needs to work harder
				Ease of use doesn't usually find you your main but it is still helpful to know, especially if the character is a "finger-breaker" character, i.e. Morrigan in UMvC3
			Play if you like & Avoid if you dislike/Strengths & Weaknesses:
				A "play if you like/avoid if you dislike" format can give direct comparisons to your own personal preferences
				A "strengths/weaknesses" format can let you understand 
			Technical info:
				(This includes things like variable health values, prejump frames, movement speed/options, etc.)
				Perhaps a bit too complicated to throw at a beginner. While knowledge of technical aspects of fighting games is important, it's probably at its most useful when you're already invested in the game and can be left to places like Dustloop/SuperCombo/Mizuumi/whatever that are more for that side of things
			Tier list info
				Arguably not good for picking a character you'll like, but can give a persepctive on how they stack up in the game at large (and for people that just play top tiers I suppose)
				Possibly could do a format that juxtaposes character strength with difficulty (characters could be top tier on paper but crazy hard to execute to that level, i.e. SF4 C. Viper)
			Video Footage:
				(Combo footage, tournament clips, etc.)
				I could put all the text and descriptions and information in the world on the site and it would likely pale in comparison to actually seeing things in action
				Clips from tournaments are able to show off moments of the character's true abilities and the things you're able to do with them
					^ might be less true in a team game? Since usually it's a combination of both the character's strengths and the power of their assists
				Tournament footage is hype (most of the time) but understanding why or how it's hype usually requires more insight into the game itself (not really a downside though, either way it gets you hyped)
	*/

	var overviewItems = {
		playstyle: document.getElementById("overview-playstyle"),
		range: document.getElementById("overview-range"),
		mechanics: document.getElementById("overview-mechanics"),
		ease: document.getElementById("overview-rating-ease"),
		like: document.getElementById("overview-list-like"),
		dislike: document.getElementById("overview-list-dislike"),
		description: document.getElementById("overview-description"),
	}
	
	overviewItems.playstyle.innerHTML = detailInfo[0];
	overviewItems.range.innerHTML = detailInfo[1];
	overviewItems.mechanics.innerHTML = detailInfo[2];
	
	overviewItems.ease.classList.add("rating-" + ratings[5] + "star");
	
	for (i = 0; i < ratings[5]; i++) {
		overviewItems.ease.innerHTML += "&starf;";
	}
	for (i = 5; i > ratings[5]; i--) {
		overviewItems.ease.innerHTML += "&star;";
	}
	
	overviewItems.like.innerHTML = likeOrDislike[0];
	overviewItems.dislike.innerHTML = likeOrDislike[1];
	
	overviewItems.description.innerHTML = charDescription;
	
	var statGraph = document.getElementById("stat-graph-values");
	statGraph.style.clipPath = "";
	
	var styleString = "polygon(";
	
	// Offense value
	styleString += "50% " + (55.5 - 11.1 * ratings[0]) + "%, ";
	// Defense value
	styleString += (50 + 9.86 * ratings[1]) + "% " + (55.5 - 3.44 * ratings[1]) + "%, ";
	// Damage value
	styleString += (50 + 6.132 * ratings[2]) + "% " + (55.5 + 8.76 * ratings[2]) + "%, ";
	// Speed value
	styleString += (50 - 6.132 * ratings[3]) + "% " + (55.5 + 8.76 * ratings[3]) + "%, ";
	// Zoning value
	styleString += (50 - 9.86 * ratings[4]) + "% " + (55.5 - 3.44 * ratings[4]) + "%)";
	
	statGraph.style.clipPath = styleString;
}

var colorNumber;

function updateOV2(displayInfo, gameName) {
	var overviewItems = {
		colors: document.getElementById("info-image"),
		playstyle: document.getElementById("overview-playstyle"),
		difficulty: document.getElementById("overview-difficulty"),
		mechanics: document.getElementById("overview-mechanics"),
		likes: document.getElementById("overview-likes"),
		dislikes: document.getElementById("overview-dislikes"),
		bio: document.getElementById("overview-description"),
	}

	colorNumber = displayInfo.colors;

	overviewItems.colors.src = "img/portraits/" + gameName + "/colors/" + displayInfo.filename + "/Color_1.png";
	if (displayInfo.colors > 1) {
		switch (gameName) {
			case "isd":
				document.getElementById("color-selector-text").innerHTML = "Original";
				break;
			case "uni2":
				document.getElementById("color-selector-text").innerHTML = "<span style='margin-right: 0.8em'>001</span>" + colorNames[0];
				break;
			default:
				document.getElementById("color-selector-text").innerHTML = "Color 1";
		}
	}
	
	overviewItems.playstyle.innerHTML = "<span class='style-" + displayInfo.playstyle.toLowerCase() + "'>" + displayInfo.playstyle + "</span>";

	var starCap;
	if (displayInfo.difficulty === 6) {
		starCap = 6;
	} else {
		starCap = 5;
	}

	overviewItems.difficulty.classList.add("rating-" + displayInfo.difficulty);
	for (i = 0; i < displayInfo.difficulty; i++) {
		overviewItems.difficulty.innerHTML += "&starf;";
	}
	for (i = starCap; i > displayInfo.difficulty; i--) {
		overviewItems.difficulty.innerHTML += "&star;";
	}
	overviewItems.difficulty.innerHTML += "</span>";
	
	displayInfo.mechanics.forEach(element => {
		overviewItems.mechanics.innerHTML += "<span>" + element + "</span><br>";
	});
	
	// overviewItems.likes.innerHTML = displayInfo.likes;
	// overviewItems.dislikes.innerHTML = displayInfo.dislikes;
	
	overviewItems.bio.innerHTML = displayInfo.bio;
	
	var statGraph = document.getElementById("stat-graph-values");
	statGraph.style.clipPath = "";
	var styleString = "polygon(";
	
	// Offense value
	styleString += "50% " + (55.5 - 11.1 * displayInfo.stats[0]) + "%, ";
	// Defense value
	styleString += (50 + 9.86 * displayInfo.stats[1]) + "% " + (55.5 - 3.44 * displayInfo.stats[1]) + "%, ";
	// Damage value
	styleString += (50 + 6.132 * displayInfo.stats[2]) + "% " + (55.5 + 8.76 * displayInfo.stats[2]) + "%, ";
	// Speed value
	styleString += (50 - 6.132 * displayInfo.stats[3]) + "% " + (55.5 + 8.76 * displayInfo.stats[3]) + "%, ";
	// Zoning value
	styleString += (50 - 9.86 * displayInfo.stats[4]) + "% " + (55.5 - 3.44 * displayInfo.stats[4]) + "%)";
	
	statGraph.style.clipPath = styleString;

	switch (gameName) {
		case "gbvsr":
			if (displayInfo.filename === "Narmaya" || displayInfo.filename === "Gran" || displayInfo.filename === "Djeeta") {
				// EX Toggle
			}
			break;
	}
}

function setColor(colorForward = true) {
	var currentColor = parseInt(document.getElementById("info-image").src.split("/Color_")[1]);
	if (colorForward) {
		currentColor++;
		if (currentColor > colorNumber) {
			currentColor = 1;
		}
	} else {
		currentColor--;
		if (currentColor < 1) {
			currentColor = colorNumber;
		}
	}

	document.getElementById("info-image").src = document.getElementById("info-image").src.replace("Color_" + document.getElementById("info-image").src.split("/Color_")[1], "Color_" + currentColor + ".png");
	switch (document.getElementById("info-image").src.split("portraits/")[1].split("/")[0]) {
		case "isd":
			if (currentColor === 1) {
				document.getElementById("color-selector-text").innerHTML = "Original";
			} else {
				document.getElementById("color-selector-text").innerHTML = "Cosplay " + (currentColor - 1);
			}
			playCursor();
			break;
		case "uni2":
			var commonColorNames = [
				"Equatorial Wave", "Inferno Blaze", "Annular Eclipse", "Seeds of Heaven", "Clamorous Colors",
				"Royal Calibur", "Stella Nest", "Little Briar Rose", "Betrayal of Savior", "Switching Contrast",
			];
			if (currentColor < 10) {
				document.getElementById("color-selector-text").innerHTML = "<span style='margin-right: 0.8em'>00" + currentColor + "</span>" + colorNames[currentColor - 1];
			} else if (currentColor > 30) {
				document.getElementById("color-selector-text").innerHTML = "<span style='margin-right: 0.8em'>0" + currentColor + "</span>" + commonColorNames[currentColor - 31];
			} else {
				document.getElementById("color-selector-text").innerHTML = "<span style='margin-right: 0.8em'>0" + currentColor + "</span>" + colorNames[currentColor - 1];
			}
			break;
		default:
			document.getElementById("color-selector-text").innerHTML = "Color " + currentColor;
	}
	try {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
	} catch (error) {
		console.log("Audio not found");
	}
}

function hideDescription() {
	document.getElementsByClassName("description-bg")[0].style.visibility = "hidden";
	document.getElementsByClassName("description-bg")[0].style.opacity = 0;
	try {
		sfx.cancel.play();
	} catch (error) {
		console.log("Audio not found");
	}
	previewDisplayOn = true;
	interactionEnabled = true;
}

// Initialization

function initializePageDisplay(gameName, skipTransition = false) {
	var gameStyle = document.getElementById("gamestyle");
	//var gameScript = document.getElementById("gamescript");
	if (gameName === undefined) {
		window.location.reload();
		//pageMusic.pause();
	} else {
		if (skipTransition) {
			beginPageLoad();
		} else {
			var pageLogos = Array.from(document.getElementsByClassName("gamebox-logo"));

			scrollPosition = window.pageYOffset;
			document.body.style.position = "fixed";
			document.body.style.top = "-" + scrollPosition + "px";

			var logoToModify;

			pageLogos.forEach(element => {
				if (element.src.includes("/" + gameName + "_logo")) {
					logoToModify = element;
				}
			});

			var animLogo = logoToModify.cloneNode();
			var logoOffsets = logoToModify.getBoundingClientRect();
			logoToModify.parentElement.parentElement.parentElement.classList.add("pagelink-transition");
			// Set the animated logo's position
			animLogo.style.position = "absolute";
			animLogo.style.top = logoOffsets.top + (logoToModify.offsetHeight / 2) + scrollPosition + "px";
			animLogo.style.left = logoOffsets.left + "px";
			// Set the animated logo's transition properties
			animLogo.style.transition = "all 0.5s ease-in-out";
			// Add the animated logo
			document.body.appendChild(animLogo);
			document.querySelectorAll('.transition-content').forEach(element => {
				element.style.opacity = 0;
				element.style.pointerEvents = "none";
			});

			var selectSound = new Audio("audio/sfx/" + gameName.toLowerCase() + "/menu_confirm.ogg");
			selectSound.volume = 0.1;
			selectSound.play();

			// Animate the logo
			setTimeout(function() {
				animLogo.style.top = "calc(50vh + " + scrollPosition + "px)";
				animLogo.style.left = "calc(50vw - 140px)";
				setTimeout(function() {
					animLogo.style.transform = "scale(10)";
					animLogo.style.opacity = 0;
					setTimeout(beginPageLoad, 500);
				}, 500);
			}, 500);
		}

		function beginPageLoad() {
			fetch("games/" + gameName + ".html").then(response => response.text()).then(text => {
				var pageData = text.split("<body>")[1].split("</body>")[0];

				document.body.style = "";
				document.body.innerHTML = ``;

				function loadPage() {
					document.body.innerHTML = `<button id="returnbutton" onclick="initializePageDisplay()">Back to Game Select</button>` + pageData/*.split('<div class="preload-container">')[0]*/;

					if (gameName !== undefined) {
						gameStyle.href = "styles/games/" + gameName + ".css";
					} else {
						gameStyle.href = "";
					}

					var head = document.getElementsByTagName("head")[0];
					var script = document.createElement("script");
					if (gameName !== undefined) {
						script.src = "scripts/onload" + gameName + ".js";
					}
					head.removeChild(head.lastElementChild);
					head.appendChild(script);
				}

				// Loading

				try {
					var mediaList = pageData.split('<div class="preload-container">')[1].split("</div>")[0].split('src="');
					mediaList.splice(0,1);
					var preloadMedia = [];
					mediaList.forEach(element => {
						preloadMedia.push(element.split('">')[0]);
					});

					// Are you even a programmer if you aren't blatantly stealing code from StackOverflow
					async function loadMedia(mediaUrlArray) {
						const promiseArray = [];
						const mediaArray = [];

						for (let mediaUrl of mediaUrlArray) {
							promiseArray.push(new Promise(resolve => {
								var media;
								if (mediaUrl.includes("img/")) {
									media = new Image();
									media.onload = resolve;
								} else if (mediaUrl.includes("audio/")) {
									media = new Audio();
									media.oncanplaythrough = resolve;
								}
								
								media.src = mediaUrl;
								mediaArray.push(media);
							}));
						}

						await Promise.all(promiseArray);
						return true;
					}
					
					loadMedia(preloadMedia).then(result => {
						if (result) {
							loadPage();
						}
					});
				} catch (error) {
					console.log("No preload found, failed to preload");
					loadPage();
				}
			});
		}
	}
}

if (/android|iphone|kindle|ipad/i.test(navigator.userAgent)) {
	// User is using mobile platforms
} else {
	// User is on a computer
}

// Debug

window.onload = function() {
	if (document.getElementById("navspace").dataset.goto !== "") {
		initializePageDisplay(document.getElementById("navspace").dataset.goto, true)
	}
};