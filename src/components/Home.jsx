import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdStarHalf } from "react-icons/io";
import GridLoader from "react-spinners/GridLoader";

const Home = () => {

  const [Movies, SetMovies] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {

    (async function () {
      try {
        const response = await fetch("https://api.sampleapis.com/movies/horror");
        if (!response.ok) {
          throw new Error("failed to fetch");
        }
        let data = await response.json();
        SetMovies(data.slice(30, 42));
      }
      catch (err) {
        console.log(err)
      }
      finally {
        SetLoading(false);
      }

    })();

  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <GridLoader size={30} />
      </div>
    );
  }

  return (
    <div>
      <h4 style={{ marginLeft: "3vw", color: "gray", marginTop: "5vh" }}>Recomanded Movies</h4>
      <ul className="cardsContainer">
        {Movies.map((item, ind) => {
          return (

            <Link to={"/bookings"}>
              <li className='card' key={item.id}>
                <img
                  className='cardImg'
                  src={item.posterURL} // Use the correct base URL
                  alt={item.title}
                />
                <h5>{item.title}</h5>
                <p style={{ display: "flex", alignItems: "center" }}><IoMdStarHalf size={20} />{`${parseFloat(((Math.random() * (9.5 - 5.0)) + 5.0).toFixed(1))}/${10} `}</p>
              </li>
            </Link>
          )
        }
        )}
      </ul>

    </div >
  )
}

export default Home