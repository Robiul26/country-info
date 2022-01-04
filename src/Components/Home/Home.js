import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Countries from "../Countries/Countries";


const Home = () => {  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
       getCountries()
  },[])

  const getCountries = async () => {
   const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()
    await setCountries(data)

  }

  const searchCountry = async term => {
      if(term.length < 3 || term === ''){
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        await setCountries(data)
      }else{
        const res = await fetch(`https://restcountries.com/v3.1/name/${term}`)
        const data = await res.json()
        await setCountries(data)
      }
   

  }
  const filterByRegion = async region =>{
      if(region === '') return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    await setCountries(data)
    // console.log(data);

  }
    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white w-full container mx-auto  sm:px-20 px-4">            
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
           <div className="relative  w-full sm:max-w-md">
                <i className="fa fa-search text-gray-600 absolute top-4 left-3"></i>
                <input type="text" onChange={(e) => searchCountry(e.target.value)} className="pl-10 p-2 w-full h-12 focus:outline-none text-xl font-medium shadow-md rounded-md dark:bg-gray-600 focus:ring-1 dark:ring-white" placeholder="Search for a country..." />
           </div>
            <select onChange={(e) => filterByRegion(e.target.value)} className=" p-2 w-full h-12 sm:max-w-fit font-medium shadow-md rounded-md dark:bg-gray-600 focus:outline-none focus:ring-1 dark:ring-white">
                <option value="">Filter by Region</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
            </select>
          </div>
          {/* Hero section */}
            <div className="flex gap-8 flex-wrap justify-between mt-14 pb-16">


                {
                    countries.map((country, index) => <Link to={{ pathname:`${country.name.common}/details`, state:country }} key={index} >
                        <Countries                         
                        title={country.name.common}
                        img={country.flags.png}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        />
                    </Link> )
                }
                 
                
             
            </div>
        </div>
    );
};

export default Home;