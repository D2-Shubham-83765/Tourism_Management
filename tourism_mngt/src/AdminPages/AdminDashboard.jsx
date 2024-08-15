import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import config from '../config';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [counts, setCounts] = useState({
        users: 0,
        bookings: 0,
        packages: 0,
        cities: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                // Fetch counts from all endpoints concurrently
                const [usersResponse, bookingsResponse, packagesResponse, citiesResponse] = await Promise.all([
                    axios.get(`${config.url}/admin/users/count`),
                    axios.get(`${config.url}/admin/bookings/count`),
                    axios.get(`${config.url}/admin/packages/count`),
                    axios.get(`${config.url}/admin/cities/count`),
                ]);
                console.log('Users response:', usersResponse.data);  // Log API response
        console.log('Bookings response:', bookingsResponse.data);
        console.log('Packages response:', packagesResponse.data);
        console.log('Cities response:', citiesResponse.data);

                // Update state with the fetched counts
                setCounts({
                    users: Number(usersResponse.data.count),
                    bookings: Number(bookingsResponse.data.count),
                    packages: Number(packagesResponse.data.count),
                    cities: Number(citiesResponse.data.count),
                });
            } catch (error) {
                // Handle any errors that occur during the fetch
                setError('Failed to fetch counts');
            } finally {
                setLoading(false);
            }
        };

        fetchCounts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <br />
            <br/>
            <div className="dashboard-cards">
                <div className="card-admin">
                    <h3>Users</h3>
                    <p>{counts.users}</p>
                </div>
                <div className="card-admin">
                    <h3>Bookings</h3>
                    <p>{counts.bookings}</p>
                </div>
                <div className="card-admin">
                    <h3>Packages</h3>
                    <p>{counts.packages}</p>
                </div>
                <div className="card-admin">
                    <h3>Cities</h3>
                    <p>{counts.cities}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
