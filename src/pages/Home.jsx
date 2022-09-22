import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {SERVER_HOST} from '../config';
import { Search } from '../components/Search'
import { Comparator } from '../components/Comparator'
import PageResults from '../components/PageResults';
import { useContext } from 'react';
import { ComparatorContext } from '../context/ComparatorContext';

export const Home = () => {

  const {addProducts,products} = useContext(ComparatorContext);
  const [computerA, setComputerA] = useState('')
  const [computerB, setComputerB] = useState('')

  useEffect(() => {
    axios.get(`${SERVER_HOST}/list`)
      .then((response) => {
        addProducts(response.data);
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
