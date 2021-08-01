import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';

const App = styled.section`
background-color:hsl(207, 26%, 17%);
min-height:100vh;
width:100%;
padding:2.5rem 5rem;
@media(max-width:600px){
padding:2rem 2rem;
}
`

const AppFlexing = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:80px;
@media(max-width:600px){
grid-template-columns:1fr;
}
`

const Card = styled.div`
display:flex;
flex-direction:column;
`

const NameCountry = styled.h2`
color:#fff;
font-size:1.25rem;
`

const CountryImage = styled.div`
margin-top:1rem;
img{
width:100%;
height:auto;
}
`

const CountryText = styled.div`
background-color:hsl(209, 23%, 22%);
margin-top:-1rem;
padding:2rem 2rem;
`

const CountryDetails = styled.div`
margin-top:1.5rem;
margin-bottom:1.5rem;
h5{
color:#fff;
font-size:.9rem;
font-weight:450;
letter-spacing:.2px;
line-height:1.8;
span{
color:hsl(0, 0%, 70%);
padding-right:.5rem;
}
}
`

const FilteringFlex = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`

const InputDiv = styled.div`
width:30%;
@media(max-width:600px){
width:150%;
}
`

const Input = styled.input`
width:100%;
height:auto;
background-color:hsl(209, 23%, 22%);
border:none;
padding:1rem 1.3rem;
font-weight:600;
color:#fff;
border-radius:5px;
`

const Countries = () => {
    
    const [countries,setCountries] = useState([]);

    const [loading,setLoading] = useState(true);

    const [input,setInput] = useState('');
    
    const url ='https://restcountries.eu/rest/v2/all';

    function FetchingAPI(){
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setCountries(json);
            setLoading(false);
            console.log(json);
        })
    }

    useEffect(() => {
     FetchingAPI();
    },[url]);

    function filtereditems(countries){
        return countries.filter((country) => { return country.name.toLowerCase().includes(input)});
    }

    return (
        <App>
        <div className="FilteringInputs">
            <FilteringFlex>
                <InputDiv>
                  <Input placeholder="Search for a country" onChange={((e) => setInput(e.target.value))} value={input} />
                </InputDiv>
            </FilteringFlex>
        </div>
          <AppFlexing> 
            {loading ? <h3>Loading....</h3>  : 
              filtereditems(countries).map((country) => (
               <Card key={country.numericCode}>
                    <CountryImage>
                        <img src={country.flag} />
                    </CountryImage>
                    <CountryText>
                        <NameCountry>
                            {country.name}
                        </NameCountry>
                        <CountryDetails>
                             <h5>Population: <span>{country.population}</span></h5>
                             <h5>Region: <span>{country.region}</span></h5>
                             <h5>Capital: <span>{country.capital}</span></h5>
                        </CountryDetails>
                        <Link to={`/countries/${country.name}`} className="link">See more details</Link>
                    </CountryText>
               </Card>
             ))}
          </AppFlexing>
        </App>
    )
}

export default Countries
