import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import bookingData from '../services/bookingData';
import { Link } from 'react-router-dom';

const TravelBookingSummary = () =>  {
    return (
        <div >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop:"50px" }}>
                <h2>Booking Summary</h2>
                <hr />
                <table style={{ borderCollapse: "collapse", width: "50%", marginBottom: "20px" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Destination:</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{bookingData.destination}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Travel Dates:</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{bookingData.startDate} - {bookingData.endDate}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Travelers:</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{bookingData.travelers}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Package Price:</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}><FaIndianRupeeSign/>{bookingData.packagePrice}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Total Price:</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}><FaIndianRupeeSign/> {bookingData.totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="buttons" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button type="button" className="btn btn-primary pill btn-block shadow-sm">Modify Booking</button>
                    <Link to="/">
                    <button type="button" className="btn btn-danger pill btn-block shadow-sm">Confirm Booking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TravelBookingSummary;
