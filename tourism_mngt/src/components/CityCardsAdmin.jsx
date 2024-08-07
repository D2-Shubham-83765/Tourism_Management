import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../AdminPages/AdminDashboard";
import { toast } from "react-toastify";

const CityCardsAdmin = () => {
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get(`${config.url}/`);
                console.log(response.data);
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching cities", error);
            }
        };
        fetchCities();
    }, [cities]); // Add a dependency to re-run the effect after deletion

    const handleUpdate = (id) => {
        // Implement the update functionality
        console.log("Update city with id:", id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${config.url}/packages/${id}`);
            toast.success("Deleted city with id:", id);
            setCities([]); // Reset the cities state to trigger re-fetch
        } catch (error) {
            console.error("Error deleting city", error);
        }
    };

    return (
        <div className="card-group card-group-scroll">
            {cities.map((city, id) => (
                <div key={id} className="col-md-3 mb-3">
                    <div className="card">
                        <img src={`data:image/jpeg;base64,${city.image}`} className="card-img-top" alt={city.packageName} />
                        <div className="card-body">
                            <h5 className="card-title"><b>{city.packageName}</b></h5>
                            <hr />
                            <p className="card-text">{city.packageDetails}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Starting at &#8377; {city.startingPrice}</small>
                            <div className="d-flex justify-content-center mt-2 gap-2">
                                <button className="btn btn-primary btn-sm" onClick={() => handleUpdate(city.id)}>Update</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(city.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CityCardsAdmin;