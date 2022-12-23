const inputID = document.querySelector('input');
const btn = document.querySelector('button');
const form =  document.querySelector('form');
const personage = document.querySelector('.personage');
const all = document.querySelector('.all');
const btnFilms = document.querySelector('.btn_films');
const listFilmsDiv = document.querySelector('.list_films');

all.setAttribute('hidden','');

const mainFunc = async (id) => {
    try {
            const response = await fetch(`https://swapi.dev/api/people/${id}`);
            const result = await response.json();
            const {name: namePersonage} = result;
            const {films} = result;
        
            all.removeAttribute('hidden','');
            btnFilms.removeAttribute('disabled', '');
            listFilmsDiv.innerHTML = '';
            
            personage.innerHTML = namePersonage;
            let filmsList = [];

            const requestFilms = await films.map(film => fetch(film))
            const filmsResponse = await Promise.all(requestFilms);
            const filmsJson = filmsResponse.map((film)=> film.json());
            filmsList = await Promise.all(filmsJson);

            btnFilms.addEventListener('click', async ()=>{
                btnFilms.setAttribute('disabled', '');
                listFilmsDiv.innerHTML = '';
                filmsList.forEach((item) => {
                    const filmDiv = document.createElement('div');
                    filmDiv.innerText = item.title;
                    listFilmsDiv.append(filmDiv)
                })
            })
    } catch (error) {
        console.log(error)
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const id = inputID.value;
    mainFunc(id);
})