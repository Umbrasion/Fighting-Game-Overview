function autoResize(sizeSpace, chrMapArea, chrCoords, chrPortrait, iconPos, chrPosr) {
	var offset;
	var tempCoords = "";
	
	var imageSize = [
		document.getElementsByClassName(sizeSpace)[0].clientWidth,
		document.getElementsByClassName(sizeSpace)[0].clientHeight,
	];
	var originalSize = [
		document.getElementsByClassName(sizeSpace)[0].naturalWidth,
		document.getElementsByClassName(sizeSpace)[0].naturalHeight,
	];
	var percentChange = imageSize[0] / originalSize[0];
	
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= percentChange;
		if (i + 1 < chrCoords.length) {
			tempCoords += Math.floor(chrCoords[i]) + ",";
		} else {
			tempCoords += Math.floor(chrCoords[i]);
		}
	}
	
	if (iconPos != undefined) {
		chrPortrait.parentElement.parentElement.style.left = iconPos[0] * percentChange + "px";
		chrPortrait.parentElement.parentElement.style.top = iconPos[1] * percentChange + "px";
	}
	
	chrMapArea.coords = tempCoords;
	if (chrPortrait != undefined) {
		chrPortrait.style.width = chrPortrait.naturalWidth * percentChange + "px";
		chrPortrait.style.height = chrPortrait.naturalHeight * percentChange + "px";
	}
}

function flexResize(gapSize, container = document.getElementsByClassName("selectbox-container")[0], sampleImage = document.getElementById("sampleImage"), rowClass = "selectbox-row") {
	var rowWidth = document.getElementsByClassName(rowClass)[0].offsetWidth;
	var childCount = document.getElementsByClassName(rowClass)[0].childElementCount;
	
	var fullWidth = sampleImage.naturalWidth * childCount + gapSize[0] * (childCount - 1);
	var percentChange = rowWidth / fullWidth;
	var imageWidth = sampleImage.naturalWidth * percentChange;
	gapSize[0] *= percentChange;
	gapSize[1] *= percentChange;
	
	for (i = 0; i < document.getElementsByClassName("selectbox-image").length; i++) {
		document.getElementsByClassName("selectbox-image")[i].style.width = imageWidth + "px";
	}
	
	var gapProportion = gapSize[0] / sampleImage.naturalWidth;
	
	for (i = 0; i < container.childElementCount; i++) {
		gapSize[0] = sampleImage.clientWidth * gapProportion;
		document.getElementsByClassName(rowClass)[i].style.gap = gapSize[0] + "px";
	}
	
	gapProportion = gapSize[1] / sampleImage.naturalHeight;
	
	for (i = 0; i < container.childElementCount - 1; i++) {
		gapSize[1] = sampleImage.clientHeight * gapProportion;
		document.getElementsByClassName(rowClass)[i].style.marginBottom = gapSize[1] + "px";
	}
	
	console.log(sampleImage.clientWidth);
}