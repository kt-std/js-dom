document.querySelector("#menu-btn").addEventListener('click', function display(e){
	document.querySelector("#menu").classList.toggle("visible");
});

document.querySelector("#menu").addEventListener('click', function display(e){
	console.log(e);
	e.target.classList.toggle("close");
});