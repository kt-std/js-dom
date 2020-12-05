const ASSETS_PATH = "assets/";
let CONTENT = [
	{ 
		heading: 'Mercury',
		paragraph: 'Mercury rotates in a way that is unique in the Solar System. It rotates on its axis exactly three times for every two revolutions it makes around the Sun. An observer on Mercury would therefore see only one day every two Mercurian years. ',
		period: '87.97 Earth days',
		position: '01' 
	},
	{
		
		heading: 'Venus',
		paragraph: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth\'s night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight. Venus lies within Earth\'s orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. ',
		period: '225 Earth days',
		position: '02' 
	},
	{
		heading: 'Earth',
		paragraph: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth\'s surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere.',
		period: '365 Earth days',
		position: '03' 
	},
	{
		heading: 'Mars',
		paragraph: 'The fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The days and seasons are comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are similar.',
		period: '687 Earth days',
		position: '04'
	}
];

document.querySelector("#menu-btn").addEventListener('click', function display(e){
	document.querySelector("#menu").classList.toggle("visible");
});

document.querySelector("#menu").addEventListener('click', function display(e){
	let sectionName = e.target.innerHTML.toLowerCase(),
		target = e.target;
		index = CONTENT.findIndex( el => el.heading.toLowerCase() == sectionName);
	initializeData(index);
});

let addAnimation = (element, ...animationOptions) => element.animate(...animationOptions);

let updateBackground = (element, path, id) => {
	element.style.backgroundImage = window.innerWidth < 720 ? `url('${path + "_" + id}.jpg')` : `url('${path + id}.jpg')`;
	addAnimation(element, [{opacity: .1},{opacity: 1}], {duration: 500});
}

let setInnerData = (element, data) => element.innerHTML = data;

let initializeData = (index) => {
	let	image = document.getElementById("tabImage"),
		heading = document.querySelector(".tab__header"),
		paragraph = document.querySelector(".tab__paragraph"),
		period = document.querySelector(".statistics__text"),
		position = document.querySelector("#position");
	updateBackground(image, ASSETS_PATH, (CONTENT[index].heading).toLowerCase());
	setInnerData(heading, CONTENT[index].heading);
	setInnerData(position, CONTENT[index].position);
	setInnerData(paragraph, CONTENT[index].paragraph);
	setInnerData(period, CONTENT[index].period);
}

let renderContent = (data) => {
	let menu = document.getElementById('menu'),
		listItemClasses = ['menu__item', 'flex', 'center', 'full'];
		fragment = new DocumentFragment();

	data.forEach(element =>{
		let listItem = document.createElement('li');
		listItem.classList.add(...listItemClasses);
		listItem.textContent = `${element.heading}`;
		listItem.setAttribute('data-content', `—  ${element.position} — `);
		listItem.setAttribute('tabindex', `1`);
		fragment.appendChild(listItem);
	});
	menu.appendChild(fragment);
};


renderContent(CONTENT);
initializeData(0);
