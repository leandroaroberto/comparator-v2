import React, {FunctionComponent, useState, useEffect} from 'react'
import axios from 'axios'

export const Hdd:FunctionComponent = () => {
    const [hddType, setHddType] = useState([])

    useEffect(() => {
      axios.get("http://localhost:8000/api/resource/hdd-type")
            .then((response) => {
            setHddType(response.data.data);
        });
    }, [])
    
    return (
        <select>
            <option value=""></option>
            {
                hddType.map((hdd:any, index:number) => <option key={index} value={hdd.hard_disk_type}>{hdd.hard_disk_type}</option>)
            }
        </select>
    )
}
