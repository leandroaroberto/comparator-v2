import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'
import {SERVER_HOST} from '../config';

import { useContext } from 'react';
import { ComparatorContext } from '../context/ComparatorContext';


export const Hdd:FunctionComponent = () => {
    const [hddType, setHddType] = useState([]);    
    const {search} = useContext(ComparatorContext);

    useEffect(() => {
      axios.get(`${SERVER_HOST}/resource/hdd-type`)
            .then((response) => {
            setHddType(response.data.data);
        });
    }, [])

    const handleValue = (e:any) => {
        search('harddisk', e.target.value)
    };
    
    return (
        <select onChange={handleValue} >
            <option value=""></option>
            {
                hddType.map((hdd:any, index:number) => 
                    <option key={index} value={hdd.hard_disk_type}>{hdd.hard_disk_type}</option>)
            }
        </select>
    )
}
