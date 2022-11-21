import { useEffect,useState } from "react"
import styles from "../styles/SearchBar.module.css"
import lupa from "../assets/search-outline.svg"
export default function SearchBar({countries,setCountries}){

    let [input,setInput]=useState('')
    function handleChange(e){
        setInput(e.target.value)
        console.log(input)
    }

    useEffect(()=>{
        if (input){
            let results=countries.filter(e=>{
                let x=false
                for (let i=0;i<input.length;i++){
                    if (e.name.toLowerCase()[i]===input.toLowerCase()[i]||e.name.toLowerCase().split(' ').includes(input.toLowerCase())){
                        x=true
                        console.log('true')
                    }
                    else {
                        return false
                    }
                }
                return x;
            })
            setCountries(results)
        }
        else setCountries(countries)
    },[input])


    return(
        <div className={styles.container}>
            <img src={lupa} alt="searchIcon"  className={styles.icon}/>
            <input type="text"
            placeholder="Search for a country..."
            onChange={(e)=>handleChange(e)}
            className={styles.input}
            />
        </div>
    )
}