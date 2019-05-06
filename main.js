const buttonMenu =  document.getElementById('button-menu');
const moveButton=  document.getElementById('move-menu');
const overlay =  document.getElementById('overlay');

function eventButtonMenu(){
	if (moveButton.style.right !== '0%') {
		moveButton.style.right = '0%';
		overlay.style.left = '0%';
	} else {
		moveButton.style.right = '-100%';
		overlay.style.left = '-100%';
	}
}

buttonMenu.addEventListener('click',() => {
	eventButtonMenu();
});
overlay.addEventListener('click',() => {
	eventButtonMenu();
});