import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'


const FilteringFlex = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`

const InputDiv = styled.div`
width:25%;
`

const Input = styled.input`
width:100%;
height:auto;
background-color:hsl(209, 23%, 22%);
border:none;
padding:1rem 1.9rem;
font-weight:600;
color:#fff;
border-radius:5px;
`

const Filtering = () => {

    const [input,setInput] = useState('');

    return (
        <div className="FilteringInputs">
            <FilteringFlex>
                <InputDiv>
                  <Input placeholder="Search for a country" onChange={((e) => setInput(e.target.value))} value={input} />
                </InputDiv>
            </FilteringFlex>
        </div>
    )
}

export default Filtering
