import styles from '../styles/Select.module.css'

export default function({countries,setCountries}){

    function handleChange(e){
        let region=e.target.value;
        let result=countries;
        if (region!=='none'){
            result=countries.filter(e=>e.region===region)
        }
        setCountries(result)
    }

    return(
        <div>
            <select name="Filter By Region" id="" className={styles.select} onChange={(e)=>{handleChange(e)}}>
                <option value='none'>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}