import React from 'react';

const Seats = ({ seats, handleClick, selected }) => {

  return (
    <div>
      {Object.keys(seats).map((seat, id) => {
        return (
          <React.Fragment key={id}>
            <h2 className='sec'>{seat.toUpperCase()}</h2>
            <span style={{ color: "grey" }}>{seat === "Gold" ? <p>Rs. 250 </p> : seat === "Silver" ? <p>Rs. 150 </p> : <p>Rs. 350 </p>}</span>
            <div className="container" key={`${id}`}>
              {seats[seat].map((e, col) => {
                const uniqueKey = `${seat}-${col}-${id}`;
                return (
                  <div
                    key={uniqueKey}
                    className="seat"
                    style={{
                      backgroundColor: selected.includes(`${seat} ${col + 1}`) ? 'green' : 'white',
                    }}
                    onClick={() => handleClick(seat, col + 1)}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Seats;
