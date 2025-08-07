import React from 'react'

function Dropdown({ title, currencies }) {
    return (
        <div>
            <label htmlFor={title}>{title}</label>
            <div>
                  <select name="" id="">
                {
                    currencies.map((currency) => <option key={currency} value={currencies}>{currency}</option>)
                }
            </select>
            </div>
        </div>
    )
}

export default Dropdown