const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = [
	document.getElementById("character-eltnum"),
	document.getElementById("character-kuon"),
	document.getElementById("character-phonon"),
	document.getElementById("character-nanase"),
	document.getElementById("character-seth"),
	document.getElementById("character-waldstein"),
	document.getElementById("character-hyde"),
	document.getElementById("character-linne"),
	document.getElementById("character-carmine"),
	document.getElementById("character-yuzuriha"),
	document.getElementById("character-byakuya"),
	document.getElementById("character-mika"),
	document.getElementById("character-kaguya"),
	document.getElementById("character-akatsuki"),
	document.getElementById("character-izumi"),
	document.getElementById("character-uzuki"),
	document.getElementById("character-tsurugi"),
	document.getElementById("character-hilda"),
	document.getElementById("character-merkava"),
	document.getElementById("character-orie"),
	document.getElementById("character-wagner"),
	document.getElementById("character-enkidu"),
	document.getElementById("character-gordeau"),
	document.getElementById("character-vatista"),
	document.getElementById("character-chaos"),
	document.getElementById("character-londrekia"),
	document.getElementById("character-ogre"),
];

const pageMusic = new Audio("audio/music/UNI2 - Begin System Celestial loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.2;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/UNI2 - Begin System Celestial intro.ogg");
pageMusicIntro.volume = 0.2;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}

const sfx = {
	cursor: new Audio("audio/sfx/uni2/MoveCursor.wav"),
	confirm: new Audio("audio/sfx/uni2/OK.wav"),
	cancel: new Audio("audio/sfx/uni2/Cansel.wav"),
}
sfx.cursor.volume = 0.4;
sfx.confirm.volume = 0.2;
sfx.cancel.volume = 0.4;

var previewDisplayOn = true;
var interactionEnabled = false;

function clearDisplay() {
	chrPrevImg.src = "";
	chrName.src = "";
}

// Display on hover

function hoverDisplay(targetChar) {
	if (interactionEnabled) {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		if (previewDisplayOn) {
			clearTimeout(cycleRandom);
			var charFileName = targetChar.parentElement.parentElement.onclick.toString().split("'")[1];
			var scaleMeasures = targetChar.dataset.scale.split(",");
			var lightingColor = targetChar.dataset.lightcolor.split(",");

			chrPrevImg.src = "img/portraits/uni2/" + charFileName + ".png";
			chrName.innerHTML = charFileName.replace(/_/g, " ").toUpperCase();
			chrPrevImg.classList.remove("portrait-onhover");
			chrName.classList.remove("name-onhover");
			void chrPrevImg.offsetWidth;
			void chrName.offsetWidth;
			chrPrevImg.classList.add("portrait-onhover");
			chrName.classList.add("name-onhover");

			document.getElementById("character-lighting").style.background = "linear-gradient(65deg, rgba(" + lightingColor[0] + ", " + lightingColor[1] + ", " + lightingColor[2] + ", 0.7) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0))";
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";

			document.getElementById("flavor-text").innerHTML = targetChar.parentElement.parentElement.dataset.flavortext;
			document.getElementById("flavor-text").classList.remove("flavortext-onhover");
			void document.getElementById("flavor-text").offsetWidth;
			document.getElementById("flavor-text").classList.add("flavortext-onhover");
		}
	}
}

function positionCursor(positionID) {
	if (interactionEnabled) {
		var csCursor = document.getElementById("select-cursor");
		csCursor.style.opacity = 1;
		csCursor.style.left = Math.floor(positionID % 14) * 75 + "px";
		csCursor.style.top = Math.floor(positionID / 14) * 198 + "px";
	}
}

chrSel.forEach(element => {
	element.addEventListener("mouseover",
		(event) => {
			hoverDisplay(event.target);
			positionCursor(chrSel.indexOf(event.target.parentElement.parentElement));
		}
	);
});

document.getElementById("character-random").addEventListener("mouseover",
	() => {
		sfx.cursor.currentTime = 0;
		sfx.cursor.play();
		document.getElementById("select-cursor").style.opacity = 0;
		if (previewDisplayOn) {
			randomDisplay();
		}
	}
);

var cycleRandom;
var previousSelection = -1;
function randomDisplay() {
	reroll: while (true) {
		chrPrevImg.classList.remove("portrait-onhover");
		chrName.classList.remove("name-onhover");
		void chrPrevImg.offsetWidth;
		void chrName.offsetWidth;
		
		var displayCharacter = Math.floor(Math.random() * 27)
		if (displayCharacter == previousSelection) {
			continue reroll;
		} else {
			hoverDisplay(chrSel[displayCharacter].children[0].children[0])
			sfx.cursor.currentTime = 0;
			sfx.cursor.play();
			break reroll;
		}
	}
	previousSelection = displayCharacter;
	cycleRandom = setTimeout(randomDisplay, 120);
}

// Display on click

var banter = new Audio("audio/sfx/uni2/Charselect_call.wav");
banter.volume = 0.3;
banter.play();
var colorNames = [];

function runDisplay(characterName) {
	if (interactionEnabled) {
		clearTimeout(cycleRandom);
		previewDisplayOn = false;
		interactionEnabled = false;
		chrPrevImg.parentElement.classList.remove("portrait-onselect");
		void chrPrevImg.parentElement.offsetWidth;
		chrPrevImg.parentElement.classList.add("portrait-onselect");
		
		if (characterName === "Random") {
			characterName = chrSel[Math.floor(Math.random() * chrSel.length)].onclick.toString().split("'")[1];

			var characterElement;

			for (const element of chrSel) {
				if (element.onclick.toString().split("'")[1] === characterName) {
					characterElement = element;
					break;
				}
			}

			var scaleMeasures = characterElement.children[0].children[0].dataset.scale.split(",");
			var lightingColor = characterElement.children[0].children[0].dataset.lightcolor.split(",");
				
			chrPrevImg.src = "img/portraits/uni2/" + characterName + ".png";
			chrName.innerHTML = characterName.replace(/_/g, " ").toUpperCase();

			document.getElementById("character-lighting").style.background = "linear-gradient(65deg, rgba(" + lightingColor[0] + ", " + lightingColor[1] + ", " + lightingColor[2] + ", 0.7) 0%, rgba(0,0,0,0), rgba(0,0,0,0))";
			chrPrevImg.style.transform = "scale(" + scaleMeasures[0] + ") translate(" + scaleMeasures[1] + "%, " + scaleMeasures[2] + "%)";

			document.getElementById("flavor-text").innerHTML = characterElement.dataset.flavortext;
		}
		
		sfx.confirm.currentTime = 0;
		sfx.confirm.play();
		
		initializeOV("experimental");
		
        if (!banter.paused) {
			banter.pause();
		}

        banter = new Audio("audio/sfx/uni2/banter/" + characterName + "_select.wav");
        banter.volume = 0.25;
        banter.play();
		
		switch (characterName) {
			case "Eltnum":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Alchemist", "Black Barrel", "Fleeting Lover", "Great Sphynx", "Fang and Nail",
					"Transylvania's Ghost", "Wing of Horus", "Aswan Falucca", "Psycho Garden", "Living Dead",
					"Dunkelheit", "Burn Gem", "Nostalgia", "Silence Iceberg", "Neo Venus",
					"Bello Girasole", "Summer Vacation", "Amore Pesco", "Jet Black", "Snow Fairy",
					"Celadon Narcissus", "Nile Over Knee", "Girl Scout", "Somei Yoshino", "Desert Platoon",
					"Blanc Neige", "Gloom Neon", "Peacock Leaf", "Vivid Navy Blue", "Phantasmal Candle",
				];
				break;
			case "Kuon":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Total Eclipse", "Fallen Sunlight", "Green Flash", "Deep Light", "Twilight Fire",
					"Redshift", "Dark Matter", "Bright Nebula", "Cosmic Microwave", "Red Dwarf",
					"Forest Kingdom", "Bright Giant", "Brine Pool", "Sunset Glow", "Flaming Illusion",
					"Endless Guilty", "Chaos Chronicle", "Disaster Genesis", "Mirage Emblem", "Grudge Stigma",
					"Sacred Dogma", "Ruin Fragment", "Inferno Vortex", "Dystopia Matrix", "Strange Eclipse",
					"Arcadia Demise", "Calamity Sinner", "Moonlight Canon", "Crisis Nexus", "Criminal Legion",
				];
				break;
			case "Phonon":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Snake Keeper", "Purple Pain", "Emerald Seaserpent", "Sugaar Lightning", "Rosaceous Naga",
					"Green Thorn", "Navy Lindworm", "Aiatar's Forest", "Fafnir Rouge", "Goddess Underworld",
					"Twilight Nidhoggur", "Cutie Quetzalcoatl", "Lahamu Cherry", "Lamia Amethyst", "Ladon Brown",
					"Wish of Melusine", "Brilliant Leviathan", "Egger Aitvaras", "Kukulkan Green", "Sunburned Itzamna",
					"Tiny Midgard", "Hydra Swamp", "Punane Pisuhand", "Blame Vouivre", "Azzurro Amphisbaena",
					"Blessed Itzamna", "Ouroboros Hue", "Red Castle", "Coatlicue Harvest", "Hoydenish Breeze",
				];
				break;
			case "Nanase":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Moulin a Vent", "Altar of Iris", "Blitz Flugel", "Averse Ciel", "Katze Madchen",
					"Nature Gale", "Deesse Luna", "Sol Envidia", "Glicina Boton", "Mars Soir",
					"Freeze Night", "Thin Vermilion", "Vert Clair de Lune", "Glamorous Aura", "Notre Dame",
					"Apricot Tea", "Stille Vulkan", "Briny Air", "Winter Nacht", "Otaria Bianco",
					"Juillet Peche", "Le Las Des Fees", "Insulator Girl", "Grizzled Doe", "Stratosphere",
					"Ginkgo biloba", "Chitose Green", "Luft Minze", "Depletion Garden", "Mystique Senior",
				];
				break;
			case "Seth":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Shadow Approaches", "Light is Refuse", "Rain Murder", "Coin and Balance", "The Edge of Poison",
					"Light in Darkness", "Ashes Incinerator", "Clothed in Fire", "Natural Tree", "Nightcap Wine",
					"Coral Comet", "Glorious Brown", "Cosmos Black", "Pulito Foschia", "Cerisier",
					"Ombra Abisso", "Luna Mezzanotte", "Mountain July", "Sunrise Yellow", "Hawk Sign",
					"Slight Haze", "Desert Rose", "Lunatic Clown", "Crimson Meteor", "Migratory Locust",
					"Monochrome Mirage", "Spring Blizzard", "Ruby Ball", "Deep Forest Venerer", "Banded Krait",
				];
				break;
			case "Waldstein":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Iron Beast", "Crow Ash", "Steel Tiger", "Sapphire Bear", "Magnetite Crystal",
					"Coal Monster", "Francium Maroon", "Tungsten Yellow", "Poison Bandit", "Hihiirokane",
					"Fegefeuer", "Arctic Cold", "Dschungel Wind", "Hatred Flame", "Eis mann",
					"Bestie Erde", "Kirschbaum", "Depression Mind", "Gray Fox", "Apostle of Chaos",
					"Big Foot", "Crimson Ogre", "Brawny Orc", "Scorched Earth", "Thor's Hammer",
					"Red Hot Steel", "Vert Nil", "Ashputtel", "Drema Warden", "Gold Lowe",
				];
				break;
			case "Hyde":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Black Eclipse", "Twinkle White", "Darkness Tempest", "Light Forest", "Nightmare",
					"Red Pearl", "Desert Wolf", "Sea Water", "Moonlight", "Justice Rose",
					"Blau Blitz", "Sunlight Red", "Vortex Galaxy", "Cremisi Grotta", "Holiness Star",
					"Rosa Descendiente", "Juillet Averse", "Soul Lover", "Caldo Trrente", "Viridis Regulus",
					"Shinku", "Blanche Diable", "Ocean Arctique", "Citrus Fresh", "Guilty Thorn",
					"Schon Gift", "Nutty Pastel", "Clear Gale", "Santana", "Dark Master",
				];
				break;
			case "Linne":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Canary Yellow", "Solitude Spica", "Rhodorite Garnet", "Sylvania Keeper", "Purple Powder",
					"Pure Black", "Ore Shine", "Blue Ocean", "Autumnal Leaves", "Destruction Red",
					"Brosche Saphir", "Drought Ground", "Acero Granizo", "Isora Albero", "Wind of Oasis",
					"Perfume Lemon", "Ciruela", "Pupil Gloomy", "Arche wave", "Ritual Sacrifice",
					"Spring Breeze", "Lapin de Neige", "Nacht Kirschblute", "Bush Camouflage", "Misty Crystal",
					"Exotic Coral", "Spunky Mint", "Burial Agency", "Water Imp", "Nagger Brawny",
				];
				break;
			case "Carmine":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Red Heat Blood", "Black Punishment", "Aqua Regia", "Ride on Light", "Dead and Violet",
					"Bloody Lost", "Wild Fang", "Bad Peace Forest", "Fade Noise", "Purplish Gouache",
					"Strange Strawberry", "Plena Noche", "Emerald Island", "Ortensia", "Light of Daybreak",
					"Flash Magic", "Claro de Luna", "Brave Satan", "Peligro Diosa", "Demon Angel",
					"Crimson Surfer", "Fake Hero", "Liquid Metal", "Noble Blood", "Vegetarian",
					"Mr.Monochrome", "Surfusion Eau", "Prunella Honey", "Western Feast", "Dead and Black",
				];
				break;
			case "Yuzuriha":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Chaenomeles Sinensis", "Siberian Iris", "Betula Grossa", "Water Drips", "Successful Black",
					"Globe Amaranth", "Snow Drop", "Autumn Flower", "Gold Rush", "Cluster Amaryllis",
					"Cherry blossom", "Dandelion", "Underwater Sun", "Shrine Maiden", "Four Leaves",
					"Dies Irae", "Golden Done", "Twig Palm", "Ghiaccio Luce", "Heliconiaceae",
					"The New Squad", "Short Circuit", "Muddied Lady", "Sea Soldier", "Morning Glory",
					"Vermilion Eye", "Summer Heat Haze", "Freesia Refracta", "Black Rabbit", "Primrose Yellow",
				];
				break;
			case "Byakuya":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Midnight Spider", "Hell Smoke", "Ende Regen", "Drought Earth", "Rotten Pomegranate",
					"Falsehood Night", "Maple October", "Dirty Wisteria", "Bamboo Spear", "Withered Lilac",
					"Blue Ripple", "Another Galaxy", "Knight of Mercury", "Mud Crater", "Bottom to Abyss",
					"Desert Sun", "Flash White", "Fullmoon Light", "Cunning Tiger", "Valley Magnolia",
					"Spurt of Blood", "Deep Azalea", "Madness Glow", "Attack of the Orange", "Gletscher Stachel",
					"Plage Soleil", "Creeping Villain", "Tricolor trooper", "Rose Thorn", "Norland Sibling",
				];
				break;
			case "Mika":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Firmament Bullet", "Rose Jasper", "Frisches Grun", "Lowenzahn", "Impish Lightning",
					"Swimmy Azure", "Black Diamond", "Energy Sign", "Petty Rose", "Vinous Arm",
					"Sunny Promenade", "Queen Valet", "Fragrant Green", "Meteor Impact", "Sunglow Cloud",
					"Petit Tigre", "Sea of Tranquility", "Puppyish Girl", "Spicy Crab", "Glacial Blow",
					"Immeasurable Comet", "Secret Garden", "Sorrent Gold", "Plic Ploc", "Dragon Bless",
					"Tiny Dwarf", "Midnight Sun", "Radiant Gauntlet", "Electroactuation", "Lucky Clover",
				];
				break;
			case "Kaguya":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Urbane Banisher", "Blood Countess", "Bouncing Yellow", "Calm Atmosphere", "Almost Night",
					"Shady Chaser", "Autumn Stroll", "Special Gospel", "Ice Dance", "Witch of the Gun",
					"Shrine Maiden", "Striking Vermillion", "Sour-Sweet Fruit", "Light and Shadow", "Sand Storm",
					"Green Tea", "Vampire Affectation", "Tropical Lady", "Call From Deep Sea", "Miss Valentine",
					"Dancing Dragon", "Neighborhood Lady", "Beat Angel", "Berserk Gunner", "Matcha to Anko",
					"Deep Red Dress", "Acquired Taste", "Secret Business", "Radiant Firearm", "Spiral Pierce",
				];
				break;
			case "Akatsuki":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Blanc Rouge", "Strong Red", "Freeze Crest", "Vestige Garrigue", "Idesl Empire",
					"Snow Harbor", "Neve Tempo", "June Sprout", "Viola Notte", "Puro Vizio",
					"Pond Mars", "Neve Granulosa", "Smaragd Fluss", "Cloudy Weather", "Primerose Flavor",
					"Wildness Parakeet", "Landa Sereno", "Glanz Eis", "Crepuscolo Lampo", "Diablo Noche",
					"Marine Striker", "Living God", "Pixy Pink", "Western Traveler", "Noix Rough",
					"Fighting Blaster", "March Into Snow", "Oceanic Depths", "Aufblitzen Motor", "Dunkel Motor",
				];
				break;
			case "Izumi":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Night Mermaid", "Call of Abyss", "Lemon Tea", "Verdure Wind", "Pink Bomb",
					"Swimming Club", "Wasserpflanzen", "Chairwoman", "Dune Wave", "Chrysaora pacifica",
					"Coral Palace", "Goldfish Bowl", "Moonlit Bathe", "Sanatorium", "Metalworking",
					"Mimosa Garden", "Low Pressure Girl", "Many Spices", "Pink Neon", "Allium Fistulosum",
					"Concealed Clan", "Rushing Heat", "Genoa Fortuneteller", "Sickly Sister", "Flaming Mountain",
					"Spring Poems", "Incongruous Purple", "Electric Leakage", "Futuristic Plant", "Unbeatable Heroine",
				];
				break;
			case "Uzuki":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Black Monger", "Death Sickle", "Nameless Weed", "Ahead of Season", "Midnight Sea",
					"Ominous Flower", "Doubtful Apothecary", "Posthumous Glory", "Yay Portrait", "Death Dealer",
					"Falsify Innocense", "Meaning of Love", "Pumpkin Magic", "Aquatic Astrology", "Desert Cactus",
					"Bloodstained Hand", "Evil Druid", "Overgrow Herb", "Crimson Raider", "Desert Paradise",
					"Queen of Wonderland", "Antique Doll", "Amo il Formaggio", "Halloween Devil", "Aquatic Witch",
					"Ignis Fatuus", "Last Leaf", "Ms. Aquarium", "Miserable Clover", "Saucy Little Devil",
				];
				break;
			case "Tsurugi":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Bright Cliff", "Sapphire Knight", "Ancient Green", "Calm Light", "Crepuscular Sea",
					"Flame in the Dark", "Flax Gray", "Deep Shark", "Volcanic Rumbling", "Confederate Blood",
					"Beyond the Horizon", "Late Night Ocean", "Arctic Haze", "Forest Guard", "Aggressive Plum",
					"Desert Candle", "Mint Distillation", "Hestina Japonica", "Black Mustard", "Capsicum Annuum",
					"Cave Explorer", "Purple Electric", "Abyss Green", "Microwave Oven", "Twilight Zone",
					"Earth Intensity", "Eternal Time", "Pastel Vision", "Scabiosa Violet", "Dim Red",
				];
				break;
			case "Hilda":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Morion Black", "Brightness Amethyst", "Beauty of Elysion", "Half of Indigolite", "Fire Ruby",
					"Sapphire", "Eroded Peridot", "Golden Beryl", "Calm in Passion", "Blood Andesine",
					"Ice Age", "Laurel Tiara", "Black Crimson", "Aquamarine", "Forest of Witch",
					"Zinnoberrot Gelb", "Cor de Rosa", "Cool Purple", "Illuminate White", "Mal Despiadado",
					"Gold and Silver", "Lava Flow", "Astuto Signora", "Schneefee", "End of Fall",
					"Elegant Dunkelgrun", "Juvenile Colors", "Spring Phantasma", "Sapphire Plush", "Rose Garden",
				];
				break;
			case "Merkava":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Hell's Viper", "Scallop", "Brown Lizard", "Scream Hades", "Green Iguana",
					"Bloody Basilisk", "Violet Naja", "Sea Snake", "Dust Sand", "Hephaistos",
					"Wise Marlin", "Noble Turtle", "Ladybug", "Sauterelle Prince", "Rose Crane",
					"Lark Dancer", "Cruel Penguin", "Killer Bee", "Sombre Corbeau", "Humble Falcon",
					"Lila Giftschlange", "Flamme Haare", "Blume Strum", "Abitante de Vulcano", "Gloomy Violet",
					"Orange A La Mode", "Gewitterwolke", "Forest Gorilla", "Motor Schlange", "Marchen Merkava",
				];
				break;
			case "Orie":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Justice Sprite", "Night Shade", "Tears of Salamander", "Saint's Mother", "Storm Sylphid",
					"Undine Rain", "Athena Light", "Evil Knight", "Scamper Emerald", "Efreet Flare",
					"Rizo de Agua", "Fallen Angels", "Dios de le Muerte", "Calm Pink", "Orange Yogurt",
					"Crimson Rouge", "Mistilteinn", "Green Magnolia", "Lluvia Medium", "Moon Water",
					"Alice Blue", "Spectrum Rose", "Campanula Purple", "Cavalier Du Lac", "Dry Blood",
					"Walder Abendrot", "Shade Gardian", "Honorable Scar", "Lumiere Solaire", "Memorial Black",
				];
				break;
			case "Wagner":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Judgement Blazer", "White Lily", "Viking Blue", "Dark Nebula", "Sharply Uvarovite",
					"Abyss Walker", "Eschscholtzia", "Shadowy Iris", "Beauty Gladiator", "Vermillion Edge",
					"Eis Herrscher", "Bloodlust", "Rapturous Green", "Hazy Moon Night", "Tiefsee Botschafter",
					"Noble Fencer", "Vivid Scarlet", "Amethyst Sowrd", "Sand Rose", "Rage of Nature",
					"Schelt Frau", "Nacht Garten", "Sakura Blade", "Sacred Saber", "Autumn Abundance",
					"Maidenly Rose", "Dripping Blood", "Icicle Pink", "Vidofnir Feather", "Longevity Witch",
				];
				break;
			case "Enkidu":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Saika Kissui", "Sekishu Kuuken", "Ryokurin hakuha", "Uguisu", "Shiden Seisou",
					"Kaikatsu Tenkuu", "Jinrai Furetsu", "Meimei Hakuhaku", "Kakou Ryuryoku", "Netsugan Reitei",
					"Suo", "Masuhana", "Hakusha Seisyo", "Akesumire", "Nobori Arashi",
					"Hanada Kohaku", "Sakura Mochi", "Koujin Banjo", "Awa Chidori", "Tanpopo",
					"Ume Murasaki", "Seiten Hekireki", "Raito Unpon", "Yama Budo", "Hanarokusyo",
					"Akane Aokachi", "Kaisei Sanmei", "Tsuki Some", "Aoni Fukahi", "Tansyo Noumatsu",
				];
				break;
			case "Gordeau":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Robbery Purple", "The Baron of Night", "Poseidon", "Red Azrael", "Thunderbird",
					"Vampire and Alcohol", "Lancelot du Lac", "Bamboo Scythe", "Season of Harvest", "Legend Vermilion",
					"Scharlachrot", "Fresco Verde", "Shadow Vice", "Emperor of Walnut", "Mischievous Firefly",
					"Turquoise Blue", "Atonement Blood", "Golden Summer", "Hard Sleet", "Frost Skeleton",
					"Gusty Edge", "Noble Impulse", "Amore Formaggio", "Jade Tempest", "Deadvlei",
					"False Dawn", "Lunar Corona", "Falconry Hawking", "Righteous Daddy", "Imitate Intrigant",
				];
				break;
			case "Vatista":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Mars Black", "Iion Falls", "Murder Dolls", "Aurora Blue", "Aureolin",
					"Classic White", "Luminous Pink", "Fallen Leaves", "Chromium Leaves", "Crimson Lake",
					"Lila Colina", "Azul Agua", "Regalo Tierra", "Freddo Aria", "Grass Fairy",
					"Donner Geist", "Black Magic", "Knospe Gardenie", "Rain Steam", "Flor Ciruela",
					"Cassata Al Forno", "Moonshine Blue", "Vento Aureo", "Angelic Gospel", "Cyber Fairy",
					"Blitzschlag", "Mystic Doll", "Antique Luxury", "Modern Golem", "Fairy Tale",
				];
				break;
			case "Chaos":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Prateria Lupo", "Iceberg Lince", "Vulcano Squalo", "Mare Leone", "Landa Vipera",
					"Altopiano Serpente", "Giallo Gatto", "Verde Bestia", "Aldebaran", "Grazia Fuoco",
					"Jellyfish", "Cremation Heretic", "Moos Licht", "Eclipse Day", "Lapis Lazuli",
					"Orquidea Submundo", "Heat Haze", "Nuit Tonnerre", "Ground Horizon", "Uninhabited Island",
					"Regal Crest", "Urban Camouflage", "Planet Snatcher", "Daphne Gray", "Squash Yellow",
					"Grapy Amethyst", "Unter Vulkan", "R.Fox &amp; G.Raccoon", "Ceresso Bestia", "A Mere Buddy",
				];
				break;
			case "Londrekia":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Frosty Knight", "Moon Shade", "Imperial Jade", "Bernstein", "Tranquille Mauve",
					"Prototype Executor", "Blood Oath", "Glacier Light", "Assassins Edge", "Glimpse of Devil",
					"Antarctic Emperor", "Cyanotype", "Vampire Lord", "Sherwood Shooter", "Dokkalfar",
					"Visionary Myst", "Rosa Moyesii", "Zeit ist Geld", "Styx Driftice", "Celestial Nation",
					"Jung Monarch", "Morning Dew", "Fruhling Nacht", "Flugel Ritter", "Eschatos Daylight",
					"Military Officer", "Ice Magician", "Heartless Fellow", "End of October", "Grape Sherbert",
				];
				break;
			case "Ogre":
                displayInfo = {
                    filename: characterName,
                    colors: 40,
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
				colorNames = [
					"Abyss Returner", "From the Ash", "Epilithic Moss", "Marine Style", "Old Gentleman",
					"Lady Killer", "Blood Starved Beast", "Newbie Agent", "Dweller Back Alley", "Blood Nocturne",
					"Rock Star", "Jade Harvester", "Shiden Strike", "Stony Contract", "Gold Surfer",
					"Winter Land", "Hero Appearance", "Majestic Clan", "Meadow Wind", "White Smoke",
					"Madam's Guardians", "Blue Curacao", "Jolly Brother", "Loxley Impact", "Birth In-Peach",
					"Sea Breeze", "Treasure Map", "Spilled Red", "Desert River", "Shadow Chaser",
				];
				break;
		}

        updateOV2(displayInfo, "uni2");
	}
}

var isTopRow = true;
var iterationCount = 0;

function startupDisplay() {
	var characterSets = [
		[],
		[],
		[],
		[],
	];

	for (i = 0; i < 4; i++) {
		for (j = 0; j < 7; j++) {
			characterSets[i].push(chrSel[j + (7 * i)]);
		}
	}

	characterSets[0].reverse();
	characterSets[2].reverse();
	characterSets[3].splice(-1);
	characterSets[3].push(document.getElementById("character-random"));

	function addClasses() {
		if (isTopRow) {
			characterSets[0][Math.floor(iterationCount / 2)].classList.add("icon-onstart");
			characterSets[1][Math.floor(iterationCount / 2)].classList.add("icon-onstart");

			characterSets[0][Math.floor(iterationCount / 2)].style.opacity = 1;
			characterSets[1][Math.floor(iterationCount / 2)].style.opacity = 1;
		} else {
			characterSets[2][Math.floor(iterationCount / 2)].classList.add("icon-onstart");
			characterSets[3][Math.floor(iterationCount / 2)].classList.add("icon-onstart");

			characterSets[2][Math.floor(iterationCount / 2)].style.opacity = 1;
			characterSets[3][Math.floor(iterationCount / 2)].style.opacity = 1;
		}

		isTopRow = !isTopRow;

		iterationCount++;
		if (iterationCount !== 14) {
			setTimeout(addClasses, 40);
		} else {
			setTimeout(function() {
				document.getElementsByClassName("selectbox-container")[0].style.pointerEvents = "all";
				interactionEnabled = true;
			}, 100);
		}
	}

	addClasses();
}

startupDisplay();