import './App.scss'
import axios from 'axios'
import { useEffect,useState } from 'react'
import DisplayCards from './components/DisplayCards'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Select from './components/Select'

function App() {

  let [countries,setCountries]=useState([])
  let [allCountries,setAllCountries]=useState([])

  const getCountries = async ()=>{
    let res=await axios.get('https://restcountries.com/v2/all?fields=flags,name,region,population,capital')
    return res.data;
  }

  useEffect(()=>{
    getCountries().then(res=>{
      setCountries(res)
      setAllCountries(res)
    }).catch(err=>{
      console.log('ERR :',err)
    })
  },[])


  return (
    <div className="App">
      <Nav/>
      <div className='searchSelect'>
        <SearchBar countries={allCountries} setCountries={setCountries}/>
        <Select countries={allCountries} setCountries={setCountries}/>
      </div>
      <DisplayCards countries={countries}/> 
    </div>
  )
}

export default App
