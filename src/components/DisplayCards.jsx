import Card from "./Card";
import styles from "../styles/DisplayCards.module.css"

export default function DisplayCards({countries}){
    return(
        <div className={styles.container}>
            {
                countries.map(e=>{
                    return (
                      <Card flag={e.flags.svg}
                      name={e.name}
                      population={e.population}
                      region={e.region}
                      capital={e.capital}
                      key={e.name}
                      />
                    )
                })
            }
        </div>
    )
}