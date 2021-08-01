import React from 'react'
import styled from 'styled-components';
import { useParams , Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CountryApp = styled.section`
background-color:hsl(207, 26%, 17%);
height:90vh;
padding:2.5rem 5.5rem;
display:flex;
align-items:center;
@media(max-width:600px){
display:flex;
justify-content:center;
padding:0 1.2rem;
height:120vh;
}
`

const Country = () => {

    const { name } = useParams();

    const [country,setCountry] = useState([]);

    useEffect(() => {
     const FetchingCountry = async () =>{
       const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
       const country = await response.json();
       setCountry(country);
       console.log(country);
     }
     FetchingCountry();
    },[])

    return (
        <div>
            <CountryApp>
                {country.map((country) => (
                    <div key={country.numericCode} className="country-grid">
                        <div className="flag-img">
                            <img src={country.flag} />
                        </div>
                        <div className="flag-text">
                           <div className="flag1">
                             <h3>{country.name}</h3>
                             <h6>Native Name: <span>{country.name}</span></h6>
                             <h6>Population: <span>{country.population}</span></h6>
                             <h6>Region: <span>{country.region}</span></h6>
                             <h6>Sub Region: <span>{country.subregion}</span></h6>
                             <h6>Capital: <span>{country.capital}</span></h6>
                           </div>
                           <div className="flag2">
                               <h5>Top Level Domain: <span>{country.topLevelDomain}</span></h5>
                               <h5>Currencies: <span></span></h5>
                               <h5>Languages: <span></span></h5>
                           </div>
                        </div>
                    </div>
                ))}
            </CountryApp>
        </div>
    )
}

export default Country
