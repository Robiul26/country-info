import React from 'react';

const Countries = ({title,population,region,img,capital}) => {
    return (
        <>
            <div className="sm:w-64 sm:h-64 shadow-md hover:shadow-2xl transition hover:scale-105 rounded-md overflow-hidden dark:bg-gray-600">
                <img className="w-full" src={img} alt="" />
                <div className="p-5">
                    <h2 className="font-bold text-center text-xl mb-2 text-gray-700 dark:text-white">{title}</h2>
            
                    {/* <p className="font-medium text-gray-600 dark:text-white">Population: {population}</p>
                    <p className="font-medium text-gray-600 dark:text-white">Region: {region}</p>
                    <p className="font-medium text-gray-600 dark:text-white">Capital: {capital}</p> */}
                </div>
            </div>  
        </>
    );
};

export default Countries;