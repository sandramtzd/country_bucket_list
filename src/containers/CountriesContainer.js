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
    const addCountryToVisitedCountries = (visitedCountry) => {
        const updateCountries = [...visitedCountries, visitedCountry]
        setVisitedCountries(updateCountries);
    }


    return (

        <>
            <h1>Countries</h1>
            { countries ? <Countries countries = {countries}/> : <p>loading...</p>}
            
            <h2>Visited Countries</h2>
            <VisitedCountries visitedCountries = {visitedCountries} addCountryToVisitedCountries = {addCountryToVisitedCountries}/> 

        </>

    )

};

export default CountriesContainer;