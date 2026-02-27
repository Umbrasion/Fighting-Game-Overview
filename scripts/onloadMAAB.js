const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-koume"),
	document.getElementById("character-snowwhite"),
	document.getElementById("character-bisclavret"),
	document.getElementById("character-thief"),
	document.getElementById("character-blade"),
	document.getElementById("character-twinblade"),
	document.getElementById("character-wildcat"),
	document.getElementById("character-iai"),
	document.getElementById("character-zechs"),
	document.getElementById("character-nimue"),
	document.getElementById("character-void"),
	document.getElementById("character-riesz"),
	document.getElementById("character-iori"),
];

const pageMusic = new Audio("audio/music/MAAB - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.3;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/MAAB - Character Select intro.ogg");
pageMusicIntro.volume = 0.3;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/maab/cursor.ogg"),
	confirm: new Audio("audio/sfx/maab/confirm.ogg"),
	cancel: new Audio("audio/sfx/maab/cancel.ogg"),
}
sfx.cursor.volume = 0.2;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.2;

var previewDisplayOn = true;
var interactionEnabled = false;

// Display on hover

var previousCharacter = "";

function hoverDisplay(charFileName, charIcon) {
	if (charFileName !== previousCharacter && interactionEnabled) {
        sfx.cursor.currentTime = 0;
        sfx.cursor.play();
        if (previewDisplayOn) {
            chrPrevImg.src = "img/portraits/maab/" + charFileName + ".png";
            chrName.innerHTML = charFileName.replace(/_/g, " ");
        }

        resetIcons();
        charIcon.style.visibility = "visible";
        charIcon.classList.remove("icon-onhover");
        void charIcon.offsetWidth;
        charIcon.classList.add("icon-onhover");
        previousCharacter = charFileName;
    }
}

function resetIcons() {
    chrSel.forEach(element => {
        element.children[0].children[1].style.visibility = "hidden";
    });
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		() => {
			hoverDisplay(element.onclick.toString().split("'")[1], element.children[0].children[1]);
		}
	);
});

// Display on click

var banter = new Audio("audio/sfx/maab/Charselect_call.ogg");
banter.volume = 0.3;
banter.play();

function runDisplay(characterName) {
	if (interactionEnabled) {
        previewDisplayOn = false;
        interactionEnabled = false;
        
        sfx.confirm.currentTime = 0;
        sfx.confirm.play();
        
        initializeOV("experimental");

        document.getElementsByClassName("description-area")[0].classList.remove("element-fire");
        document.getElementsByClassName("description-area")[0].classList.remove("element-wind");
        document.getElementsByClassName("description-area")[0].classList.remove("element-ice");
        document.getElementsByClassName("description-area")[0].classList.remove("element-none");

        chrPrevImg.src = "img/portraits/maab/" + characterName + ".png";
        chrName.innerHTML = characterName.replace(/_/g, " ");
		
        if (!banter.paused) {
			banter.pause();
		}

        banter = new Audio("audio/sfx/maab/banter/" + characterName + "_select.ogg");
        banter.volume = 0.3;
        banter.play();

        var displayInfo;
        
        switch (characterName) {
            case "Otherworldly_Koume_Sakiyama":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "Rushdown",
                    difficulty: 3,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>Koume Sakiyama</b> is a guest character hailing from Lord of Vermillion IV.</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-none");
                break;
            case "Unique_Snow_White":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-ice");
                break;
            case "Type_II_Bisclavret":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-fire");
                break;
            case "Thief_Arthur":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-wind");
                break;
            case "Blade-Protector_Arthur":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-fire");
                break;
            case "Twinblade_Arthur":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-fire");
                break;
            case "Wildcat_Arthur":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-none");
                break;
            case "Iai_Arthur":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-ice");
                break;
            case "Zechs_Siegfried":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-wind");
                break;
            case "Hybrid_Nimue":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-ice");
                break;
            case "Void_Eternal_Flame":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>` + characterName.replace(/_/g, " ") + `</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-fire");
                break;
            case "Otherworldly_Riesz":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>Riesz</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-wind");
                break;
            case "Otherworldly_Iori_Yagami":
                displayInfo = {
                    filename: characterName,
                    colors: 19,
                    playstyle: "",
                    difficulty: 1,
                    mechanics: ["N/A"],
                    likes: [],
                    dislikes: [],
                    stats: [1,1,1,1,1],
                    bio: `
                        <p><b>Iori Yagami</b> is</p>
                    `,
                }
                document.getElementsByClassName("description-area")[0].classList.add("element-fire");
                break;
        }

        updateOV2(displayInfo, "maab");
    }
}

iconInterval = setInterval(startupDisplay, 50);
var cycleNum = 0;

function startupDisplay() {
    if (cycleNum === 12) {
        clearInterval(iconInterval);
    }
    chrSel[cycleNum].children[0].children[0].classList.add("icon-onstart");
    chrSel[cycleNum].children[0].children[0].style.opacity = 1;
    chrSel[cycleNum].children[0].children[1].style.opacity = 1;
    var iteration = cycleNum;
    setTimeout(function() {
        chrSel[iteration].children[0].children[0].classList.remove("icon-onstart");
        void chrSel[iteration].children[0].children[0].offsetWidth;
        chrSel[iteration].children[0].children[0].classList.add("icon-onstart-spin");
        setTimeout(function() {
            chrSel[iteration].children[0].children[0].src = "img/characterSelect/maab/" + chrSel[iteration].onclick.toString().split("'")[1] + "_icon.webp";
            if (chrSel[12].children[0].children[0].src.includes("Otherworldly_Iori_Yagami")) {
                setTimeout(function() {
                    interactionEnabled = true;
                    document.getElementsByClassName("selectbox-container")[0].style.pointerEvents = "all";
                },100);
            }
        },100);
    }, 200);
    cycleNum++;
}