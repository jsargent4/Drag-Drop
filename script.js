function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;


function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
	pos1 = Math.floor(pos3 - e.clientX);
	pos2 = Math.floor(pos4 - e.clientY);
	pos3 = Math.floor(e.clientX);
	pos4 = Math.floor(e.clientY);
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}

function stopElementDrag(e) {
	document.onpointerup = null;
	document.onpointermove = null;

	posX = e.clientX
	posY = e.clientY


	if (posX>527 && posX<1214 && posY>73 && posY<882) {
		alert("You hit!");
	}

	bbxul = document.getElementById('bush').x;
	bbyul = document.getElementById('bush').y;
	bbxlr = bbxul+document.getElementById('bush').width;
	bbylr = bbyul+document.getElementById('bush').height;
	console.log(bbxul,bbyul,bbxlr,bbylr)



}

}

dragElement(document.getElementById('berry1'));
dragElement(document.getElementById('berry2'));
dragElement(document.getElementById('berry3'));
dragElement(document.getElementById('berry4'));
dragElement(document.getElementById('berry5'));
dragElement(document.getElementById('berry6'));
