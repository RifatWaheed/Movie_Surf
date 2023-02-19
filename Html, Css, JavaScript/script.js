const APILINK ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=799551a353632c34630d1b33194ce887&page=1';
const IMG_PATH ='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=799551a353632c34630d1b33194ce887&query=";

const section = document.getElementByID("section");
const form = document.getElementByID("form");
const search = document.getElementByID("query");

function returnMovies(url)
{
	fetch(url).then(res=>res.json()).then(function(data)){
		console.log(data.results);
		data.results.forEach(element => {
			const div_card =document.createElement('div');
			const div_row =document.createElement('div');
			const div_column=document.createElement('div');
			const image =document.createElement('img');
			const title =document.createElement('h4');
			const center =document.createElement('center');

			title.innerHTML = `${element.title}`;
			image.src = IMG_PATH + element.poster_path ; 

			center.appendChild(image);
			div_card.appendChild(center);
			div_card.appendChild(title);
			div_column.appendChild(div_card);
			div_row.appendChild(div_column);

			section.appendChild(div_row);


		});
	};
}

form.addEventListner("submit",(e)=>{
	e.preventDefault();
	section.innerHTML='';

	const searchItem = search.value;
	

})