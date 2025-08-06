import React from 'react'

function CurrencyConverter() {

    // https://api.frankfurter.dev/v1/currencies
    // https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR
    // https://api.frankfurter.dev/v1/latest?amount=2&base=USD&symbols=INR
  return (
    <div className='bg-white max-w-xl mx-auto my-10 rounded-lg p-5 shadow-md'>
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Converter</h2>
    </div>
  )
}

export default CurrencyConverter