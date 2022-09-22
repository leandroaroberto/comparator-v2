import {createContext, useState, ReactNode} from 'react';
import axios from 'axios';
import {SERVER_HOST} from '../config';

interface ComparatorContentData {
    searchParams : Object;
    products : Array<Object>;
    search : (index:string,param:string) => void; 
    runSearch : () => void; 
    addProducts : (product:any) => void;   
}

interface ComparatorProviderProps {
    children : ReactNode; 
}

export const ComparatorContext = createContext({} as ComparatorContentData);

export function ComparatorProvider({children}: ComparatorProviderProps) {

    const [searchParams, setSearchParams] = useState({});
    const [products, setProducts] = useState([]);
    
    function search(index:string, param:string ):void {
        setSearchParams({...searchParams, [index]:param});
    }
    
    function addProducts(product:any):void {
        setProducts(product); 
    }

    function runSearch():void {        
        axios.post(`${SERVER_HOST}/search`,
            JSON.stringify(searchParams),
            {headers:{"Content-Type" : "application/json"}})
        .then(function (response) {
            addProducts(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <ComparatorContext.Provider 
            value={{ 
                searchParams, 
                products,
                search, 
                runSearch,
                addProducts             
             }}
        >
            {children}
        </ComparatorContext.Provider>
    )
}

