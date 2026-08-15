const chrPrevImg = document.getElementById("info-portrait");
const chrName = document.getElementById("info-name");
const chrSel = Array.prototype.slice.call(document.getElementsByClassName("css-character-area"));

const pageMusic = new Audio("audio/music/ISVS - Character Select.wav");
pageMusic.loop = true;
pageMusic.volume = 0.4 * volumeModifier;
pageMusic.play();

const sfx = {
	cursor: new Audio("audio/sfx/isvs/UI_System_Select_03.wav"),
	confirm: new Audio("audio/sfx/isvs/UI_System_Confirm_01.wav"),
	cancel: new Audio("audio/sfx/isvs/UI_System_Cancel_01.wav"),
}
sfx.cursor.volume = 0.3;
sfx.confirm.volume = 0.3;
sfx.cancel.volume = 0.3;

var interactionEnabled = true;