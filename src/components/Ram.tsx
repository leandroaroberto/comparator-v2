import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'
import { StyledRam } from '../global.styled';


export const Ram:FunctionComponent = () => {

    const [memory, setMemory] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/resource/ram")
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
