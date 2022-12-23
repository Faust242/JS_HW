const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const flagDiv = document.querySelector('img');
const COUNTRY_URL = 'https://ipapi.co/json/';

const getInfo = async ()=> {
    try {
        const response = await fetch(COUNTRY_URL);
        const jsonResponse = await response.json()
        const countryName = jsonResponse.country_name;
        const countryFlag = await fetch(`https://restcountries.com/v2/name/${countryName}`)
        const countryJson = await countryFlag.json();
        const {capital} = countryJson[0];
        const {code: currency} = countryJson[0].currencies[0];
        const {flag} = countryJson[0];
        h1.innerHTML = countryName;
        h2.innerHTML = capital;
        h3.innerHTML = currency;
        flagDiv.setAttribute('src', `${flag}`)
    } catch (error) {

        console.log(error)
    }
}

getInfo()