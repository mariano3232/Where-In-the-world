
import styles from '../styles/Nav.module.scss'
import luna from '../assets/moon-outline.svg'
import { useState } from 'react'

export default function Nav(){

    let [theme,setTheme]=useState('light')

    const changeTheme=()=>{
        if (theme==='light'){
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme('dark')
        }
        else{
            document.documentElement.setAttribute('data-theme', 'light');
            setTheme('light')
        }
    }

    return(
    <div className={styles.container}>
        <h1>Where in the world</h1>
        <div>
            <img src={luna} alt="moonIcon" width='20px' />
            <h3 onClick={()=>changeTheme()}>Dark Mode</h3>
        </div>
    </div>
    )
}