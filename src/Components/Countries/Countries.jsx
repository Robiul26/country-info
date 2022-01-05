import React from 'react';

const Countries = ({title,population,region,img,capital}) => {
    return (
        <>
            <div className="sm:w-64 sm:h-64 shadow-md hover:shadow-2xl transition hover:scale-105 rounded-md overflow-hidden bg-white dark:bg-gray-700">
                <img className="w-full" src={img} alt="" />
                <div className="p-5">
                    <h2 className="font-bold text-center text-xl mb-2 text-gray-700 dark:text-white">{title}</h2>
                </div>
            </div>  
        </>
    );
};

export default Countries;