const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-weiss"),
	document.getElementById("character-scharlachrot"),
	document.getElementById("character-petra"),
	document.getElementById("character-pistrix"),
	document.getElementById("character-eko"),
	document.getElementById("character-clarice"),
	document.getElementById("character-elsa"),
	document.getElementById("character-zenia"),
	document.getElementById("character-dorothy"),
	document.getElementById("character-mei"),
	document.getElementById("character-lieselotte"),
	document.getElementById("character-catherine"),
	document.getElementById("character-kira"),
	document.getElementById("character-lilica"),
	document.getElementById("character-fiona"),
	document.getElementById("character-akane"),
	document.getElementById("character-yoriko"),
	document.getElementById("character-angelia"),
	document.getElementById("character-nazuna"),
	document.getElementById("character-saki"),
	document.getElementById("character-maori"),
	document.getElementById("character-konoha"),
	document.getElementById("character-darkheart"),
	document.getElementById("character-heart"),
	document.getElementById("character-minori"),
	document.getElementById("character-kamui"),
];



var previewDisplayOn = true;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(charFileName, iconEle, offsetLR) {
	//sfx.cursor.currentTime = 0;
	//sfx.cursor.play();
    iconEle.src = "img/characterSelect/ah3x/" + charFileName + "_icon_selected.png";
	if (previewDisplayOn) {
		chrPrevImg.src = "img/portraits/ah3x/" + charFileName + ".png";
		chrPrevImg.style.transform = "translate(" + offsetLR + "%,0)";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
	}
}

chrSel[0].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -5);
    }
);
chrSel[1].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 0);
    }
);
chrSel[2].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 0);
    }
);
chrSel[3].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -8);
    }
);
chrSel[4].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 14);
    }
);
chrSel[5].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 12);
    }
);
chrSel[6].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -16);
    }
);
chrSel[7].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -20);
    }
);
chrSel[8].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 12);
    }
);
chrSel[9].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -20);
    }
);
chrSel[10].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 10);
    }
);
chrSel[11].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -5);
    }
);
chrSel[12].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 8);
    }
);
chrSel[13].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -2);
    }
);
chrSel[14].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 0);
    }
);
chrSel[15].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -28);
    }
);
chrSel[16].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 8);
    }
);
chrSel[17].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -15);
    }
);
chrSel[18].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -16);
    }
);
chrSel[19].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 0);
    }
);
chrSel[20].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 5);
    }
);
chrSel[21].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -26);
    }
);
chrSel[22].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -15);
    }
);
chrSel[23].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 12);
    }
);
chrSel[24].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, 10);
    }
);
chrSel[25].addEventListener("mouseover",
    (event) => {
        hoverDisplay(event.target.parentElement.parentElement.onclick.toString().split("'")[1], event.target, -15);
    }
);

chrSel.forEach(element => {
	element.addEventListener("mouseout",
		(event) => {
			event.target.src = "img/characterSelect/ah3x/" + event.target.parentElement.parentElement.onclick.toString().split("'")[1] + "_icon.png";
		}
	);
});

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	// chrPrevImg.parentElement.classList.remove("portrait-onselect");
	// void chrPrevImg.parentElement.offsetWidth;
	
	//sfx.confirm.currentTime = 0;
	//sfx.confirm.play();
	
	initializeOV();
	
	function writeCharInfo(detailInfo, ratings, likeOrDislike, charDescription, charFileName, offsetLR) {
		updateOV(detailInfo, ratings, likeOrDislike, charDescription);
		
		chrPrevImg.src = "img/portraits/ah3x/" + charFileName + ".png";
		chrPrevImg.style.transform = "translate(" + offsetLR + "%,0)";
		chrName.innerHTML = charFileName.replace(/_/g, " ");
		
	}
	
	switch (characterName) {
		case "Weiss":
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
				characterName,
                -5
			);
			break;
		case "Scharlachrot":
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
				characterName,
                0
			);
			break;
		case "Petra_Johanna_Lagerkvist":
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
				characterName,
                0
			);
			break;
		case "Series_Pistrix_No.29":
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
				characterName,
                -8
			);
			break;
		case "Eko":
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
				characterName,
                14
			);
			break;
		case "Clarice_di_Lanza":
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
				characterName,
                12
			);
			break;
		case "Elsa_la_Conti":
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
				characterName,
                -16
			);
			break;
		case "Zenia_Valov":
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
				characterName,
                -20
			);
			break;
		case "Dorothy_Albright":
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
				characterName,
                12
			);
			break;
		case "Mei-Fang":
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
				characterName,
                -20
			);
			break;
		case "Lieselotte_Achenbach":
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
				characterName,
                10
			);
			break;
		case "Catherine_Kyoubashi":
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
				characterName,
                -5
			);
			break;
		case "Kira_Daidohji":
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
				characterName,
                8
			);
			break;
		case "Lilica_Felchenerow":
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
				characterName,
                -2
			);
			break;
		case "Fiona_Mayfield":
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
				characterName,
                0
			);
			break;
		case "Akane_Inuwaka":
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
				characterName,
                -28
			);
			break;
		case "Yoriko_Yasuzumi":
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
				characterName,
                8
			);
			break;
		case "Angelia_Avalon":
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
				characterName,
                -15
			);
			break;
		case "Nazuna_Inuwaka":
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
				characterName,
                -16
			);
			break;
		case "Saki_Tsuzura":
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
				characterName,
                0
			);
			break;
		case "Maori_Kasuga":
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
				characterName,
                5
			);
			break;
		case "Konoha":
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
				characterName,
                -26
			);
			break;
		case "Dark_Heart":
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
				characterName,
                -15
			);
			break;
		case "Heart_Aino":
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
				characterName,
                12
			);
			break;
		case "Minori_Amanohara":
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
				characterName,
                10
			);
			break;
		case "Kamui_Tokinomiya":
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
				characterName,
                -15
			);
			break;
    }
}