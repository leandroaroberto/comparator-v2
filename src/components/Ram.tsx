import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'
import { StyledRam } from '../global.styled';
import {SERVER_HOST} from '../config';
import { useContext } from 'react';

import { ComparatorContext } from '../context/ComparatorContext';

export const Ram:FunctionComponent = () => {
    const [memory, setMemory] = useState([])
    const {search} = useContext(ComparatorContext);

    const handleValue = (e:any) => {
        console.log(e.target.value);
        //search('ram', e.target.value)
    };

    useEffect(() => {
        axios.get(`${SERVER_HOST}/resource/ram`)
            .then((response) => {
            setMemory(response.data.data);
        });
    }, [])    

    return (
        <StyledRam>
        {
            memory.map((mem : any, index: number) => 
            <span key={index}>
                <input type="checkbox" name={`check-${index}`} value={mem.ram} onClick={handleValue}/>{mem.ram}
            </span>)
        }
        </StyledRam>        
    )
}
