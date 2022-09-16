import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'
import { StyledRam } from '../global.styled';
import {SERVER_HOST} from '../config';

export const Ram:FunctionComponent = () => {

    const [memory, setMemory] = useState([])

    useEffect(() => {
        axios.get(`${SERVER_HOST}/resource/ram`)
            .then((response) => {
            setMemory(response.data.data);
        });
    }, [])    

    return (
        <StyledRam>
        {
            memory.map((mem : any, index: number) => <span key={index}><input type="checkbox" name={`check-${index}`} value={mem.ram} />{mem.ram}</span>)
        }
        </StyledRam>        
    )
}
