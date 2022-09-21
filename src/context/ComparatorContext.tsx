import {createContext, useState, ReactNode} from 'react';

interface ComparatorContentData {
    searchParams : Array<string>;
    search : ([]) => void;     
}

interface ComparatorProviderProps {
    children : ReactNode; 
}

export const ComparatorContext = createContext({} as ComparatorContentData);

export function ComparatorProvider({children}: ComparatorProviderProps) {

    const [searchParams, setSearchParams] = useState([]);
    function search(params: any) {
        setSearchParams(params);
    }

    return (
        <ComparatorContext.Provider 
            value={{ 
                searchParams, 
                search,              
             }}
        >
            {children}
        </ComparatorContext.Provider>
    )
}

