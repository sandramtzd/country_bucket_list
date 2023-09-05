import { useState, useEffect } from "react";
import Countries from "../components/Countries";
import VisitedCountries from "../components/VisitedCountries";


const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        loadData();
        
    }, []);

    const [visitedCountries, setVisitedCountries] = useState([]);

    // remove item from the list of countries
    const handleRemove = (index) => {
        const visitedCountries = countries.filter((country) => {
            country.name.common
            
        })

    }
    
    const handleChange = (event) => {
        setVisitedCountries(event.target.value);
    }

    const handleAdd = () => {
        const visitedCountries ={visitedCountries};
        setCountries
    }
    
   


    return (

        <>
            <h1>Countries</h1>
            { countries ? <Countries countries = {countries}/> : <p>loading...</p>}
            
            <h2>Visited Countries</h2>
            <VisitedCountries visitedCountries = {visitedCountries} onButtonClick = {setVisitedCountries}/>
            

        </>

    )

};

export default CountriesContainer;