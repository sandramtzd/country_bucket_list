const Country = ({country, addCountryToVisitedCountries}) => {

    const handleVisitedCountryClick = () => {
        addCountryToVisitedCountries(country)
        
    };

    return (
        <>
            <h2>{country.name.common}</h2>
            <button onClick={handleVisitedCountryClick}>Visited</button>
        </>
    )
};

export default Country;