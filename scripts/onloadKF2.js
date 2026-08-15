

const pageMusic = new Audio("audio/music/KF2 - Character Select loop.ogg");
pageMusic.loop = true;
pageMusic.volume = 0.3;
pageMusic.preload = "auto";

const pageMusicIntro = new Audio("audio/music/KF2 - Character Select intro.ogg");
pageMusicIntro.volume = 0.3;

pageMusic.addEventListener("canplay", playMusic);
function playMusic() {
	pageMusicIntro.play();
}
pageMusicIntro.onended = function() {
	pageMusic.play();
	pageMusic.removeEventListener("canplay", playMusic);
}