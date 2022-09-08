import React, {useState, useEffect} from 'react';
import axios from 'axios'

import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Comparator } from '../components/Comparator'
import PageResults from '../components/PageResults';

export const Home = () => {

  const [products, setProducts] = useState([])
  const [computerA, setComputerA] = useState('')
  const [computerB, setComputerB] = useState('')

  useEffect(() => {
    axios.get("http://localhost:8000/api/list")
      .then((response) => {
        setProducts(response.data);
    });
  }, [])

  return (
    <>
      <Search/>
      <Comparator 
        products={products} 
        setComputerA={setComputerA} 
        setComputerB={setComputerB} 
        computerA={computerA} 
        computerB={computerB} /> 
      <PageResults computerA={computerA} computerB={computerB} />
    </>
  )
}
