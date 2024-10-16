import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = ({ selected }) => {

  let amount = 0;
  selected.forEach((ele) => {
    if (ele[0] === "S") {
      amount = amount + 150;
    }
    else if (ele[0] === "G") {
      amount = amount + 250;
    }
    else {
      amount = amount + 350;
    }
  })

  return (
    <>
      <div className='confirmation'>
        <ul>
          {selected.map((ele, ind) => <li key={ind}>{<b>{ele}</b>}</li>)}
        </ul>
      </div>
      <Link to="/payment" state={{ selected: selected, amt: amount }}>
        <button className="proceed">Proceed to pay Rs ${amount}</button>
      </Link>

    </>
  )
}

export default Confirmation