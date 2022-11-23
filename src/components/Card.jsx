import React from "react";
import styles from '../styles/Card.module.scss'
import {Link} from 'react-router-dom'

export default function Card({flag,name,population,region,capital}){
    return(
        <Link to={'/Details/'+name} className={styles.link} >
        <div className={styles.container}>
            <img src={flag} alt={name + 'flag'} className={styles.img} />
            <h2 className={styles.name}>{name}</h2>
            <div>
                <label >Population: </label>
                <span>{population}</span>
            </div>
            <div>
                <label>Region: </label>
                <span>{region}</span>
            </div>
            <div>
                <label>Capital: </label>
                <span>{capital}</span>
            </div>
        </div>
        </Link>
    )
}