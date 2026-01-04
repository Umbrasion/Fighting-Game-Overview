const audioCtx = new AudioContext();

function playAudio(audio) {
	//const audio = new Audio(filePath);
	audio.crossOrigin = "anonymous";
	
	const source = audioCtx.createMediaElementSource(audio);
	try {
		source.connect(audioCtx.destination);
	} catch (error) {
		audio.play();
	}
	
}