

const Country = ({country, onButtonClick}) => {

    const handleVisitedCountryClick = () => {
        onButtonClick(country)
        
    };

    return (
        <>
            <h2>{country.name.common}</h2>
            <button onClick={handleVisitedCountryClick}>Visited</button>
        </>
    )
};

export default Country;