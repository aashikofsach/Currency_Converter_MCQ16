import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {

  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold text-gray-700' >Currency Converter</h1>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center ">
      <div className='container'>
        <CurrencyConverter/>
      </div>
      </div>
    </div>
  
  )
}

export default App
