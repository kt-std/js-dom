const ASSETS_PATH = "assets/";

document.querySelector("#menu-btn").addEventListener('click', function display(e){
	document.querySelector("#menu").classList.toggle("visible");
});

document.querySelector("#menu").addEventListener('click', function display(e){
	let tabText = e.target.textContent.toLowerCase();
	let tabImage = document.getElementById("tabImage");
	updateBackground(tabImage, ASSETS_PATH, tabText);
});


let updateBackground = (element, path, id) => {
	element.style.backgroundImage = window.innerWidth < 720 ? `url('${path + "_" + id}.jpg')` : `url('${path + id}.jpg')`;
	element.animate([{opacity: .5},{opacity: 1}], {duration: 500});
}