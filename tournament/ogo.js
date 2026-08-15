var ogoBox = document.getElementById("ogo-bg");
var ogoGameDesc = document.getElementById("popupbox-description");

var ogoLogos = Array.prototype.slice.call(document.getElementsByClassName("logo-ogo"));

ogoLogos.forEach(element => {
    element.parentElement.addEventListener("mouseover",
		() => {
            ogoGameDesc.style.opacity = 1;
			ogoGameDesc.innerHTML = "<p>" + element.dataset.description + "</p>";
		}
	);

    element.addEventListener("mouseout",
		() => {
            ogoGameDesc.style.opacity = 0;
			ogoGameDesc.innerHTML = "";
		}
	);
});

function setupOGO() {
    ogoBox.style.visibility = "visible";
}

function setToGame(gameID) {
    var gameTitle = document.getElementById("game-name");

    document.getElementsByClassName("slot-image")[0].src = "SP_logos/" + gameID + "_logo.png";
    document.getElementById("condition-name").innerHTML = "N/A";
    ogoBox.style.visibility = "hidden";
    switch (gameID) {
        case "MnS":
            gameTitle.innerHTML = "Maiden & Spell";
            break;
        case "UMAPD":
            gameTitle.innerHTML = "Umamusume: Pretty Derby - Party Dash";
            break;
        case "REX":
            gameTitle.innerHTML = "Super Smash REX";
            break;
        case "CMC+":
            gameTitle.innerHTML = "Super Smash Bros. CMC+";
            break;
        case "SCB":
            gameTitle.innerHTML = "Super Clash Bros.";
            break;
    }
    playLights(true);
    
    setTimeout(toggleButtons, 1000);
}