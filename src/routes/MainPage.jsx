import { useState } from 'react';
import '../App.css';
import Seats from '../components/Seats';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confirmation from '../components/Confirmation';

const MainPage = () => {

  const [confirm, setConfirm] = useState(false);

  let seats = {
    Royal: [],
    Gold: [],
    Silver: [],
  };

  function fillOut(seats) {
    let arr = [];
    for (let i = 0; i < seats * seats; i++) {
      arr[i] = i + 1;
    }
    return arr;
  }

  seats.Royal = fillOut(5);
  seats.Silver = fillOut(8);
  seats.Gold = fillOut(6);

  const [selected, setSelected] = useState([]);

  const handleClick = (seat, seatNum) => {
    const seatId = `${seat} ${seatNum}`;

    setSelected((old) => {
      if (old.includes(seatId)) {
        return old.filter(seat => seat !== seatId);
      } else {
        if (old.length < 5) {
          return [...old, seatId];
        } else {
          toast.error("Maximum seats are 5 only", { position: "top-center" });
          return old;
        }
      }
    });
  };

  const handleConfirm = () => {
    if (selected.length) {
      toast(`Selected Seats are ${selected.join(', ')}`, { position: "top-center" });
    } else {
      toast.error("Select at least one seat to confirm", { position: "top-center" });
    }
  };
  return (
    <div className='layout'>
      <div style={{ display: "flex", gap: "15px", margin: "10px", backgroundColor: "rgb(220, 220, 220)" }}><button style={{ padding: "3px", backgroundColor: "lightgreen", border: "1px solid grey" }}>7:15 PM</button><button style={{ padding: "3px", backgroundColor: "lightgreen", border: "1px solid grey" }}>10:15 PM</button></div>
      <Seats seats={seats} handleClick={handleClick} selected={selected} />
      <button onClick={() => {
        handleConfirm();
        setConfirm(true);
      }} className="sub">
        Confirm ticket
      </button>
      <ToastContainer />
      {selected.length > 0 && confirm && <Confirmation selected={selected} />}
    </div>
  )
}

export default MainPage