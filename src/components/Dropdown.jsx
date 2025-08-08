import React from 'react'
import { FaRegStar } from "react-icons/fa";


function Dropdown({ title, currencies ,handleFavourite, currency , setCurrency ,favourite }) {

    return (
        <div>
            <label htmlFor={title} className=' block text-sm font-medium text-gray-700'>{title}</label>
            <div className='mt-1 mb-1 relative  '>
                  <select onChange={(e) => setCurrency(e.target.value)} value={currency} name="" id="" className='w-full p-2 pr-8  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                   
     
          {currencies
            .filter((c) => !favourite.includes(c))
            .map((currency) => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
            </select>
            <button onClick={()=> handleFavourite(currency)} className='absolute right-5 top-1/2 -translate-y-1/2 '><FaRegStar  /></button>
         

            </div>
        </div>
    )
}

export default Dropdown