const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// original
// const getCountryHTML = country => {
    
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
    
//     `
// }   


// option-1 destructuring
// const getCountryHTML = country => {

//     const {name, flags, area, region} = country;

//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <p>${area}</p>
//             <p>Region: ${region}</p>
//             <img src="${flags.png}">
//         </div>
    
//     `
// }

// option-2 parameter destructuring
// const getCountryHTML = ({name, flags, area, region}) => {

//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <p>${area}</p>
//             <p>Region: ${region}</p>
//             <img src="${flags.png}">
//         </div>
    
//     `
// }

const getCountryHTML = country => {
    
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <p>Area: ${country.area}</p>
            <p>Region: ${country.region}</p>
            <img src="${country.flags.png}">
        </div>
    
    `
}   


loadCountries()