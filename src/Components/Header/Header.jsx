import React from 'react';
import {  useState } from 'react';
const Header = () => {
    const [mode, setMode] =  useState(false);  
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    
    const modeHandler = () =>{
        setMode(!mode)
        if(!mode){
            // document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }else{
            // document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
                <div className='w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white sm:mb-16 mb-14'>
                  <div className='flex flex-col-reverse sm:flex-row items-center justify-between container mx-auto gap-2'>
                    <h2 className=' font-bold text-xl'>Where in the world?</h2>
                   <div className="font-medium">
                       {/* <p><i className='fa fa-user'></i></p> */}
                        <button onClick={modeHandler }>
                            {
                             localStorage.theme === 'dark'? <span><i className='fa fa-sun'></i> Light mode</span>:
                            <span><i className='fa fa-moon'></i> Dark mode</span>
                            }
                        </button>
                   </div>
                  </div>
                </div>
            </div>
        </>
    );
};

export default Header;