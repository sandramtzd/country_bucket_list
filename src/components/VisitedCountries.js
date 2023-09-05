import Country from "./Country"

const VisitedCountries = ({visitedCountries, addCountryToVisitedCountries}) => {


    return (
        <>
            <ul>
                {visitedCountries}
            </ul>
        
        </>
    )
 
};

export default VisitedCountries;