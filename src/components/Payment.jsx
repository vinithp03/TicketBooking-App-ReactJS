import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Payment.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const location = useLocation();
  const selected = location.state?.selected;
  let tcktPrice = location.state?.amt;
  const [amt, setAmount] = useState(tcktPrice);
  const [quantity, setQuantity] = useState([0, 0, 0]);

  let snacks = [{
    id: 0,
    name: "Nachos Cheese Combo",
    image: "./comboScacks.png",
    description: "Nachos + Cheese Popcorn + 2 Pepsi 300ml",
    price: 525
  }, {
    id: 1,
    name: "Nachos Caramel Combo",
    image: "./caramel.png",
    description: "Nachos + Caramel Popcorn + 2 Pepsi 300ml",
    price: 625
  }, {
    id: 2,
    name: "Large Salted Combo",
    image: "./caramelDouble.png",
    description: "2 Large Salted Popcorn + 2 Pepsi 300ml",
    price: 750
  }];

  function billHandle(more, id) {
    setQuantity((q) => {
      let value = q[id] + 1;
      if (id === 0) {

        return [value, q[1], q[2]];
      }
      else if (id === 1) {
        return [q[0], value, q[2]];
      }
      return [q[0], q[1], value];

    })

    setAmount((amt) => amt + more);
  }

  function removeItem(more, id) {
    setQuantity((q) => {
      let value = q[id] - 1;
      value = value <= 0 ? 0 : value;
      if (id === 0) {

        return [value, q[1], q[2]];
      }
      else if (id === 1) {
        return [q[0], value, q[2]];
      }
      return [q[0], q[1], value];

    })
    setAmount((amt) => Math.abs(amt - more) < 1.1 * tcktPrice ? 1.1 * tcktPrice : Math.abs(amt - more));
  }

  return (
    <div>
      <h2 style={{ color: 'grey', marginTop: '5vh' }}>Showtime Awaits!</h2>
      <div className={styles.pay}>

        <div className={styles.extra}>
          <h3 style={{ color: "black", marginTop: '5vh', letterSpacing: "2px" }}>Snack Smart, <span style={{ color: "red" }}>Save Big!</span></h3>
          <p style={{ color: 'grey', letterSpacing: "2px" }}>Pre-order your snacks now and enjoy exclusive savings!</p>
          {
            snacks.map((ele) =>
              <div className={styles.comboCard} key={ele.id}>
                <div className={styles.comboContent}>
                  <img
                    src={ele.image}
                    alt="Nachos Cheese Combo"
                    className={styles.comboImage}
                  />
                  <div className={styles.comboDetails}>
                    <h3 className={styles.comboTitle}>{ele.name}</h3>
                    <p className={styles.comboDescription}>{ele.description}</p>
                    <div className={styles.comboFooter}>
                      <span className={styles.comboPrice}>₹{ele.price}</span>
                      <button className={styles.addButton} onClick={() => { billHandle(ele.price, ele.id) }}>{quantity[ele.id] ? quantity[ele.id] : "Add"}</button>
                      <button className={styles.removeButton} onClick={() => removeItem(ele.price, ele.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>

        <div className={styles.summary}>
          <h2 className={styles.title}>BOOKING SUMMARY</h2>

          <div className={styles.bill}>
            <div className={styles.billItem}>
              <span>Tickets:</span>
              <span>{selected.length}</span>
            </div>

            <div className={styles.billItem}>
              <span>Total Price:</span>
              <span>Rs {tcktPrice}</span>
            </div>

            <div className={styles.billItem}>
              <span>Convenience Fee:</span>
              <span>Rs {(0.1 * tcktPrice).toFixed(2)}</span>
            </div>
            {(quantity[0] > 0 || quantity[1] > 0 || quantity[2] > 0) &&
              <div className={styles.billItem}>
                <span>Food & Beverage:</span>
                <span>Rs {(amt - 1.1 * tcktPrice).toFixed(2)}</span>
              </div>
            }

            <button className={`${styles.billItem} ${styles.total}`} onClick={() => toast(`Almost There! Your Payment is Being Processed as Vinith Dives into Backend Wonders!`, { position: "top-center" })}>
              <span>Payable Amount:</span>
              <span>Rs {(amt).toFixed(2)}</span>
            </button>
            <ToastContainer />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
