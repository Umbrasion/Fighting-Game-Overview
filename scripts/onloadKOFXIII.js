const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = {
	kyo: document.getElementById("character-kyo"),
	benimaru: document.getElementById("character-benimaru"),
	daimon: document.getElementById("character-daimon"),
	
	terry: document.getElementById("character-terry"),
	andy: document.getElementById("character-andy"),
	joe: document.getElementById("character-joe"),
	
	random: document.getElementById("character-random"),
	
	billy: document.getElementById("character-billy"),
	ash: document.getElementById("character-ash"),
	saiki: document.getElementById("character-saiki"),
	
	randomteam: document.getElementById("character-randomteam"),
	
	ryo: document.getElementById("character-ryo"),
	robert: document.getElementById("character-robert"),
	takuma: document.getElementById("character-takuma"),
	
	iori: document.getElementById("character-iori"),
	mature: document.getElementById("character-mature"),
	vice: document.getElementById("character-vice"),
	
	terry: document.getElementById("character-terry"),
	andy: document.getElementById("character-andy"),
	joe: document.getElementById("character-joe"),
	
	elisabeth: document.getElementById("character-elisabeth"),
	duo: document.getElementById("character-duo"),
	shen: document.getElementById("character-shen"),
	
	kim: document.getElementById("character-kim"),
	hwa: document.getElementById("character-hwa"),
	raiden: document.getElementById("character-raiden"),
	
	mai: document.getElementById("character-mai"),
	king: document.getElementById("character-king"),
	yuri: document.getElementById("character-yuri"),
	
	k: document.getElementById("character-k"),
	kula: document.getElementById("character-kula"),
	maxima: document.getElementById("character-maxima"),
	
	athena: document.getElementById("character-athena"),
	sie: document.getElementById("character-sie"),
	chin: document.getElementById("character-chin"),
	
	ralf: document.getElementById("character-ralf"),
	clark: document.getElementById("character-clark"),
	leona: document.getElementById("character-leona"),
}

var previewDisplayOn = true;

// Display on hover

chrSel.kyo.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Kyo_Kusanagi.png";
			chrName.innerHTML = "KYO KUSANAGI";
		}
	}
);
chrSel.kyo.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.benimaru.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Benimaru_Nikaido.png";
			chrName.innerHTML = "BENIMARU NIKAIDO";
		}
	}
);
chrSel.benimaru.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.daimon.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Goro_Daimon.png";
			chrName.innerHTML = "GORO DAIMON";
		}
	}
);
chrSel.daimon.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.terry.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Terry_Bogard.png";
			chrName.innerHTML = "TERRY BOGARD";
		}
	}
);
chrSel.terry.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.andy.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Andy_Bogard.png";
			chrName.innerHTML = "ANDY BOGARD";
		}
	}
);
chrSel.andy.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.joe.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Joe_Higashi.png";
			chrName.innerHTML = "JOE HIGASHI";
		}
	}
);
chrSel.joe.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.random.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			
		}
	}
);
chrSel.random.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.billy.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Billy_Kane.png";
			chrName.innerHTML = "BILLY KANE";
		}
	}
);
chrSel.billy.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.ash.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Ash_Crimson.png";
			chrName.innerHTML = "ASH CRIMSON";
		}
	}
);
chrSel.ash.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.saiki.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Saiki.png";
			chrName.innerHTML = "SAIKI";
		}
	}
);
chrSel.saiki.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.ryo.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Ryo_Sakazaki.png";
			chrName.innerHTML = "RYO SAKAZAKI";
		}
	}
);
chrSel.ryo.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.robert.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Robert_Garcia.png";
			chrName.innerHTML = "ROBERT GARCIA";
		}
	}
);
chrSel.robert.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.takuma.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Takuma_Sakazaki.png";
			chrName.innerHTML = "TAKUMA SAKAZAKI";
		}
	}
);
chrSel.takuma.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.iori.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Iori_Yagami.png";
			chrName.innerHTML = "IROI YAGAMI";
		}
	}
);
chrSel.iori.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.mature.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Mature.png";
			chrName.innerHTML = "MATURE";
		}
	}
);
chrSel.mature.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.vice.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Vice.png";
			chrName.innerHTML = "VICE";
		}
	}
);
chrSel.vice.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.elisabeth.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Elisabeth_Branctorche.png";
			chrName.innerHTML = "ELISABETH BRANCTORCHE";
		}
	}
);
chrSel.elisabeth.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.duo.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Duo_Lon.png";
			chrName.innerHTML = "DUO LON";
		}
	}
);
chrSel.duo.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.shen.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Shen_Woo.png";
			chrName.innerHTML = "SHEN WOO";
		}
	}
);
chrSel.shen.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.kim.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Kim_Kaphwan.png";
			chrName.innerHTML = "KIM KAPHWAN";
		}
	}
);
chrSel.kim.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.hwa.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Hwa_Jai.png";
			chrName.innerHTML = "HWA JAI";
		}
	}
);
chrSel.hwa.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.raiden.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Raiden.png";
			chrName.innerHTML = "RAIDEN";
		}
	}
);
chrSel.raiden.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.mai.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Mai_Shiranui.png";
			chrName.innerHTML = "MAI SHIRANUI";
		}
	}
);
chrSel.mai.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.king.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/King.png";
			chrName.innerHTML = "KING";
		}
	}
);
chrSel.king.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.yuri.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Yuri_Sakazaki.png";
			chrName.innerHTML = "YURI SAKAZAKI";
		}
	}
);
chrSel.yuri.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.k.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/K'.png";
			chrName.innerHTML = "K'";
		}
	}
);
chrSel.k.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.kula.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Kula_Diamond.png";
			chrName.innerHTML = "KULA DIAMOND";
		}
	}
);
chrSel.kula.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.maxima.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Maxima.png";
			chrName.innerHTML = "MAXIMA";
		}
	}
);
chrSel.maxima.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.athena.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Athena_Asamiya.png";
			chrName.innerHTML = "ATHENA ASAMIYA";
		}
	}
);
chrSel.athena.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.sie.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Sie_Kensou.png";
			chrName.innerHTML = "SIE KENSOU";
		}
	}
);
chrSel.sie.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.chin.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Chin_Gentsai.png";
			chrName.innerHTML = "CHIN GENTSAI";
		}
	}
);
chrSel.chin.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.ralf.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Ralf_Jones.png";
			chrName.innerHTML = "RALF JONES";
		}
	}
);
chrSel.ralf.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.clark.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Clark_Still.png";
			chrName.innerHTML = "CLARK STILL";
		}
	}
);
chrSel.clark.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

chrSel.leona.addEventListener("mouseover",
	(event) => {
		if (previewDisplayOn) {
			chrPrevImg.src = "img/portraits/kofxiii/Leona_Heidern.png";
			chrName.innerHTML = "LEONA HEIDERN";
		}
	}
);
chrSel.leona.addEventListener("mouseout",
	(event) => {
		if (previewDisplayOn) {
			clearDisplay();
		}
	}
);

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.innerHTML = "";
}

// Display on click

function runDisplay(characterName) {
	previewDisplayOn = false;
	const descriptionArea = document.getElementsByClassName("description-area")[0];
	switch (characterName) {
		case "kyo":
			descriptionArea.innerHTML = `
				<h2 class="info-title">OVERVIEW</h2>
				<table class="info-table">
					<tbody>
						<tr>
							<th>Playstyle</th>
							<td>
								<span class="archetype-shoto">Shoto</span><br>
								<span class="archetype-allrounder">All-Rounder</span>
							</td>
						</tr>
						<tr>
							<th>Difficulty</th>
							<td>&starf;&star;&star;&star;&star;</td>
						</tr>
					</tbody>
				</table>
				<div class="info-description">
					<p><b>Kyo Kusanagi</b> is</p>
				</div>
			`
			chrPrevImg.src = "img/portraits/kofxiii/Kyo_Kusanagi.png";
			chrName.innerHTML = "KYO KUSANAGI";
			break;
	}
}