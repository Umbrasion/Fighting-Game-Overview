function initializeOV(formatType) {
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
					<div style="flex: 0 0 270px">
						<h3 class="info-subtitle">RATINGS</h3>
						<div id="stat-graph-background" class="stat-graph">
							<div id="stat-graph-values" class="stat-graph"></div>
						</div>
					</div>
				</div>
			`
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

// Initialization

function initializePageDisplay(gameName) {
	var gameStyle = document.getElementById("gamestyle");
	//var gameScript = document.getElementById("gamescript");

	if (gameName === undefined) {
		window.location.reload();
	 	//pageMusic.pause();
	} else {
		fetch("games/" + gameName + ".html").then(response => response.text()).then(text => {
			var pageData = text.split("<body>")[1].split("</body>")[0];
			document.body.innerHTML = `<button id="returnbutton" onclick="initializePageDisplay()">Back to Game Select</button>` + pageData;

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
		});
	}
}