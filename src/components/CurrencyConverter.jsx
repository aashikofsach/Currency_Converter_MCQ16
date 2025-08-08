import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown';
import { HiArrowsRightLeft } from 'react-icons/hi2';

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1)
  const [fromCurrencies , setFromCurrencies] = useState("USD");
  const [toCurrencies , setToCurrencies] = useState("INR")
  const [favourite, setFavourite] = useState([]);

  async function fetchCurrencies() {
    try {
      const res = await fetch(`https://api.frankfurter.dev/v1/currencies`);
      const data = await res.json();
      setCurrencies(Object.keys(data))

    } catch (error) {
      console.log(error)


    }

  }

  function handleFavourite(currency)
  {
    console.log("jai shree ganesh")

  }

  function currencyConverter()
  {
    console.log("jai baabe ki ")

  }

  function swapCurrencies()
  {
    setFromCurrencies(toCurrencies);
    setToCurrencies(fromCurrencies)
  }

  useEffect(()=>{
    fetchCurrencies()
  },[])

  console.log(currencies)

  // https://api.frankfurter.dev/v1/currencies
  // https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR
  // https://api.frankfurter.dev/v1/latest?amount=2&base=USD&symbols=INR
  return (
    <div className='bg-white max-w-xl mx-auto my-10 rounded-lg p-5 shadow-md'>
      <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Converter</h2>
      <div className='text-left grid grid-cols-1 sm:grid-cols-3 gap-4 place-items-center'>
        <Dropdown setCurrency={setFromCurrencies} currencies={currencies} title="From:" handleFavourite={handleFavourite} currency={fromCurrencies}/>
        <button onClick={()=> swapCurrencies()} className='mt-4'>
         <HiArrowsRightLeft className=' w-10 h-10 p-2 bg-gray-200 text-black rounded-full cursor-pointer  hover:bg-gray-300'/>
        </button >
        <Dropdown setCurrency={setToCurrencies}  currencies={currencies} title="To:" handleFavourite={handleFavourite} currency={toCurrencies}/>
        

      </div>
      <div className='mt-4'>
        <label htmlFor="amount" className=' text-sm text-gray-700 '>Amount:</label>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='mt-1 w-full p-2 border-gray-300 border-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500' />
      </div>
      <div className='flex justify-end mt-6'>
        <button onClick={() => currencyConverter()} className='bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Convert</button>
      </div>
      <div className='mt-4 text-lg font-medium text-right text-green-600'>
        Converted Amount : 420 USD
      </div>
    </div>
  )
}

export default CurrencyConverter