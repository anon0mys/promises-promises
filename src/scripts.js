import './styles.css';
import {fetchKanyeQuote, fetchSuperheroName} from './apiCalls';

console.log("Starting the page")

const heroName = document.querySelector('#hero-name')
const catchphrase = document.querySelector('#catchphrase')

const kanyeQuotePromise = fetchKanyeQuote()
const heroNamePromise = fetchSuperheroName()

console.log("This is a promise:")
console.log(kanyeQuotePromise)

const putQuoteOnPage = (data) => {
    catchphrase.innerHTML = `<p>${data.quote}</p>`
}

const putHeroNameOnPage = (data) => {
    heroName.innerHTML = `<p>${data.name}</p>`
}

kanyeQuotePromise.then(data => putQuoteOnPage(data))
heroNamePromise.then(data => putHeroNameOnPage(data))

// Promise.all([kanyeQuotePromise, heroNamePromise])
//     .then(([kanyeQuoteData, heroNameData]) => {
//         putQuoteOnPage(kanyeQuoteData)
//         putHeroNameOnPage(heroNameData)
//     })