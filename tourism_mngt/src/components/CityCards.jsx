import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";


const CityCards = () => {
    const [Cities, setCities] = useState([]);

    const navigate = useNavigate()
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
    }, []);

    const handleOnCardCLick=(id)=>{
        navigate(`/packages/${id}`)
    }

    return (
        <div className="card-group card-group-scroll">
            {Cities.map((city, id) => (
                <div key={id} className="col-md-3 mb-3" onClick={()=> handleOnCardCLick(city.id)}>
                        <div className="card">
                            <img
                                src={`data:image/jpeg;base64,${city.image}`}
                                className="card-img-top"
                                alt={city.packageName}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <b>{city.packageName}</b>
                                </h5>
                                <hr />
                                <p className="card-text">{city.packageDetails}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    starting at &#8377; {city.startingPrice}
                                </small>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    );
};

export default CityCards;
