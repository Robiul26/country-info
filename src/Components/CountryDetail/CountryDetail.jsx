import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
   const {countryName}= useParams();
const [country, setCountry] = useState({});

   useEffect(() => {
      fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then(res =>res.json())
      .then(data => setCountry(data[0]))
   }, [])
//    console.log(country.currencies);
    return (
        <>
            <div className=' relative flex flex-col sm:flex-row justify-start items-center sm:gap-20 gap-10 sm:px-20 px-4 bg-white dark:bg-gray-700 sm:m-10 m-4 rounded-md p-5 shadow-md'>
            <Link to='/' className=' absolute top-5 right-5'> 
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right mb-5 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                   </Link>
                <div className='w-full sm:w-1/2 mt-10'>                   
                <img className='w-full' src={country.flag} alt='hj' />
                </div>
                <div className='flex flex-col w-full sm:w-1/2'>
                    <h2 className="font-bold text-center sm:text-left sm:text-5xl text-3xl mb-5 sm:mb-10 text-gray-900 dark:text-white">{country.name}</h2>
                    <div className='flex sm:flex-row flex-col justify-start sm:gap-40 gap-1'>
                        <div>
                            <p className="text-xl text-gray-600 dark:text-white"> <span className='font-bold text-gray-900 dark:text-white'>Nativ Name: </span> {country.nativeName}</p>
                            <p className="text-xl text-gray-600 dark:text-white"> <span className='font-bold text-gray-900 dark:text-white'>Capital:</span>  {country.capital}</p>
                            <p className="text-xl text-gray-600 dark:text-white"> <span className='font-bold text-gray-900 dark:text-white'>Population:</span>  {country.population}</p>
                            <p className="font-medium text-xl text-gray-600 dark:text-white">Currency: {country.currencies && country.currencies[0].name} </p>
                            <p className="font-medium text-xl text-gray-600 dark:text-white">Currency simbol: {country.currencies && country.currencies[0].symbol} </p>
                            <p className="font-medium text-xl text-gray-600 dark:text-white">Languages: {country.languages && country.languages.map(lan => lan.name).reduce((prev, curr) => [prev, ', ', curr])} </p>
                        </div>
                        <div>
                            <p className=" text-xl text-gray-600 dark:text-white"><span className='font-bold text-gray-900 dark:text-white'>Region:</span>  {country.region}</p>
                            <p className="text-xl text-gray-600 dark:text-white"> <span className='font-bold text-gray-900 dark:text-white'>Sub Region:</span>  {country.subregion}</p>
                            <p className="text-xl text-gray-600 dark:text-white"> <span className='font-bold text-gray-900 dark:text-white'>Top Lavel Domain:</span>  {country.topLevelDomain}</p>
                            <p className="text-xl text-gray-600 dark:text-white"> <span className='font-bold text-gray-900 dark:text-white'> Area: </span>{country.area} Square kilometers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountryDetail;