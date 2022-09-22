import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'
import {SERVER_HOST} from '../config';
import { useContext } from 'react';
import { ComparatorContext } from '../context/ComparatorContext';

export const Location:FunctionComponent = () => {
    const [locs, setLocs] = useState([])
    const {search} = useContext(ComparatorContext);

    const handleValue = (e:any) => {
        search('location', e.target.value)
    };

    useEffect(() => {
      axios.get(`${SERVER_HOST}/resource/location`)
            .then((response) => {
            setLocs(response.data.data);
        });
    }, [])

    return (
        <select onChange={handleValue}>
            <option value=""></option>
            {
                locs.map((loc:any, index:number) => <option key={index} value={loc.location}>{loc.location}</option>)
            }
        </select>
    )
}
