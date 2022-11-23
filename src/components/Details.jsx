import { Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import styles from '../styles/Details.module.scss'
import Nav from "./Nav";

export default function Details(){

    let paramsObj = useParams();
    let params=paramsObj.name
    console.log(params)
    let [country,setCountry]=useState(null)
    let [borders,setBorders]=useState(null)

    const getCountry=async ()=>{
        let json=await axios.get(`https://restcountries.com/v3.1/name/${params}?fullText=true`)
        return json.data[0]
    }
    const getBorders= (country)=>{
        let bord=country.borders.map(async e=>{
            let b=await axios('https://restcountries.com/v3.1/alpha/'+e+'?fields=name')
            return b.data
        })

        Promise.all(bord).then(r=>{
            let res= r.map(e=>{return e.name.common})
            setBorders(res)
        })
    }

    useEffect(()=>{
        getCountry().then(res=>{
            setCountry(res)
            getBorders(res)
        })
        return setCountry(null)
    },[params])

    return (
        <div>
            <Nav/>
            <Link to='/' className={styles.link2}><div className={styles.button}>Back</div></Link>
            {
                country===null?<h1>Loading...</h1>:
                <div className={styles.container}>
                    <img src={country.flags.svg} alt="Flag" className={styles.img} />
                    <div className={styles.info}>
                        <h1>{country.name.common}</h1>
                        <div>
                            <label >Native Name: </label>
                            <span>{country.name.common}</span>
                        </div>
                        <div>
                            <label >Population: </label>
                            <span>{country.population}</span>
                        </div>
                        <div>
                            <label >Region: </label>
                            <span>{country.region}</span>
                        </div>
                        <div>
                            <label >Sub Region: </label>
                            <span>{country.subregion}</span>
                        </div>
                        <div>
                            <label >Capital: </label>
                            {
                                country.capital&&<span>{country.capital[0]}</span>
                            }
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div>
                            <label >Top Level Domain: </label>
                            {
                                country.tld&&<span>{country.tld[0]}</span>
                            }
                        </div>
                        <div>
                            <label >Currencies : </label>
                            {
                                country.currencies&&
                                Object.keys(country.currencies).map(e=>{
                                    return <span key={country.currencies[e].name}>{country.currencies[e].name}</span>
                                })
                            }
                        </div>
                        <div>
                            <label >Languages:</label>
                            {
                                country.languages&&
                                Object.keys(country.languages).map(e=>{
                                    return <span key={country.languages[e]}>{country.languages[e]} ,</span>
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.borders}>
                        <label >Border Countries:</label>
                        <div>
                        {
                            borders?.map(e=>{
                                return <Link to={'/Details/'+e} key={e} className={styles.link}><div>{e}</div></Link>
                            })
                        }
                        </div>
                       
                    </div>
            </div>
        }
    </div>
    )
}