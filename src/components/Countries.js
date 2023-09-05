import Country from "./Country";

const Countries = ({countries}) => {
    const mappedCountries = countries.map(country => {
        return <li><Country country ={country}/></li>
    })

    return (
        <>
            <ul>
                {mappedCountries}
            </ul>
            
        
        </>
    )
};

export default Countries;
