import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'
import {SERVER_HOST} from '../config';

export const Location:FunctionComponent = () => {
    const [locs, setLocs] = useState([])

    useEffect(() => {
      axios.get(`${SERVER_HOST}/resource/location`)
            .then((response) => {
            setLocs(response.data.data);
        });
    }, [])

    return (
        <select>
            <option value=""></option>
            {
                locs.map((loc:any, index:number) => <option key={index} value={loc.location}>{loc.location}</option>)
            }
        </select>
    )
}
