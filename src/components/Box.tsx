import React, {FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'

interface BoxProps {
  result : string;
}

export const Box:FunctionComponent<BoxProps> = ({result}):any => {    
    const [prod, setProd] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/list/${result}`)
            .then((response) => {
            setProd(response.data);
        });
    }, [result])    

    const finalResult = prod.length == 1 && prod.map((prod: any) => (
        <div className="box" key={prod.id}>  
            <h4>Model</h4>
            <p>{prod.model_name ?? '-'}</p>
            <h4>Memory</h4>
            <p>{prod.ram ?? '-'} {prod.ram_type ?? ''}</p>
            <h4>HDD</h4>
            <p>{prod.hard_disk_amount ?? '-'} x {prod.hard_disk_storage ?? ''} {prod.hard_disk_type ?? ''}</p>
            <h4>Location</h4>
            <p>{prod.location ?? '-'}</p>
            <h4>Price</h4>
            <p>{prod.price ?? '-'}</p>
        </div>))

    return finalResult;
}
