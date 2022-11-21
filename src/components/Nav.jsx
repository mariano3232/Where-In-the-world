
import styles from '../styles/Nav.module.css'
import luna from '../assets/moon-outline.svg'
export default function Nav(){

    return(
    <div className={styles.container}>
        <h1>Where in the world</h1>
        <div>
            <img src={luna} alt="moonIcon" width='20px' />
            <h3>Dark Mode</h3>
        </div>
    </div>
    )
}