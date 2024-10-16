Movie Ticket Booking App 🎬
This is a React-based movie ticket booking application where users can select seats, view booking summaries, and proceed to payment.

*********** Features:- 
Seat Selection: Users can choose seats from three categories: Royal, Gold, and Silver.
Seat Limits: Maximum of 5 seats can be booked per transaction.
Dynamic Pricing: Seat prices differ based on category:
Silver: ₹150
Gold: ₹250
Royal: ₹350

********** Booking Summary: 
   Displays the selected seats, total cost, convenience fees, and payable amount.
   Responsive UI: Optimized for different screen sizes with smooth transitions and card zoom-in effects on hover.
   Payment Simulation: Users can proceed to a payment page with a booking summary.
   Snacks Prebooking: Option to prebook snacks and save more (as an added feature).

********* Technologies Used
Frontend: React.js, React Router DOM (v6), React Toastify
Styling: CSS, Bootstrap for responsive layout
Backend (Planned): Placeholder for backend integration to store and fetch real-time booking data.

******* How to Use
1. Clone the repository :
  git clone https://github.com/your-username/movie-ticket-booking-app.git

2. Install dependencies :
  npm install 

3. Start the development server:
  npm start

Navigate to http://localhost:3000 in your browser to use the application.

Key Components : 
App.jsx : Manages routing and global components like Navbar.
Seats Component : Renders seat layout and handles seat selection.
Confirmation Component : Displays selected seats and calculates total amount.
Payment Component : Simulates payment with booking details.

Future Enhancements :-
Backend Integration: Add a backend for real-time data storage and fetching.
Payment Gateway: Integrate actual payment functionality.
User Authentication: Allow users to register and track their booking history.

License :-
This project is open-source and available under the MIT License.
