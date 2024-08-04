import sangam from "../Ladakh/Sangam-point.jpg"
import khardung from "../Ladakh/Khardung-La.avif"
import lamayuru from "../Ladakh/Lamayuru_Gompa_.webp"
import hunder from "../Ladakh/hunder-dunes.jpeg"
import itinerary from "../services/city"
import { Link, useNavigate } from "react-router-dom"

const CityDetails = () => {
//     const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/TravelBookingSummary');
 //}
    return (
    <div>
        <div>
            <div class="col-lg-8 mx-auto">
                 <div class="bg-black p-3 rounded shadow">

                    <form>
                    <div class="row">
                        <div class="form-group col-md-4">
                        <input id="exampleFormControlInput5" type="email" placeholder="What're you searching for?" class="form-control form-control-underlined"/>
                        </div>
                        <div class="form-group col-md-3">
                        <button type="submit" class="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </div>

             <div class="col-lg-10 mx-auto">
                <div class="mt-4 fixed">
                                    <h3>Inspiring Ladakh</h3>
                                <div className="mt-3">
                                    <span className="border border-dark p-1">6N/5D</span>
                                    <span className="mx-3"> 2N Leh • 2N Nubra Valley •  1N Pangong</span>
                                </div>
                            <div> 
                            <div class="container">
                    <div class="row mt-4">
                        <div class="col-lg-3">
                        <img src={sangam} class="img-fluid rounded" style={{height:"180px"}} alt="1"/>
                        </div>
                        <div class="col-lg-3">
                            <img src={hunder} class="img-fluid rounded" style={{height:"180px",  width:"100%"}} alt="2"/>
                        </div>
                        <div class="col-lg-3">
                            <img src={lamayuru} class="img-fluid rounded" style={{height:"180px", width:"100%"}} alt="3"/>
                        </div>
                        <div class="col-lg-3 ">
                            <img src={khardung} class="img-fluid rounded" style={{height:"180px"}} alt="4"/>
                        </div>
                    </div>
                </div> 

                    <div className="row">
                        <div className="col-lg-10 rounded border mt-3">
                            <div className="row mt-4 position-relative ellipsis">
                                <h5>Day 1: Travel from Srinagar Airport to Leh </h5>
                                <span className="mx-3" style={{fontWeight:"bold"}}>• {itinerary.day1.location.name}</span>
                                <p className="mx-4">{itinerary.day1.location.description}</p>
                                <span className="mx-4" style={{fontWeight:"bold"}}>Hotels</span>
                                <span className="mx-5" style={{fontWeight:"bold"}}>1. {itinerary.day1.hotel[0].name}</span>
                                <span className="mx-5">{itinerary.day1.hotel[0].location}</span>
                                <span className="mx-5">{itinerary.day1.hotel[0].rating}</span>
                                <span className="mx-5">{itinerary.day1.hotel[0].price}</span>
                                <div>
                                    {itinerary.day1.hotel[0].amenities.map((amenity) => {
                                        return (
                                    <div>
                        
                                                <span
                                                    className='mx-5'
                                                    style={{
                                                    textDecoration:
                                                        amenity.status === 0 ? 'line-through' : 'none',
                                                    }}
                                                >
                                                    {amenity}
                                                </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    
                                    <span className="mx-5" style={{fontWeight:"bold"}} >2. {itinerary.day1.hotel[1].name}</span>
                                    <span className="mx-5">{itinerary.day1.hotel[1].location}</span>
                                    <span className="mx-5">{itinerary.day1.hotel[1].rating}</span>
                                    <span className="mx-5">{itinerary.day1.hotel[1].price}</span>
                                <div>
                                    {itinerary.day1.hotel[0].amenities.map((amenity) => {
                                        return (
                                                <div>
                                            
                                                <span
                                                    className='mx-5'
                                                    style={{
                                                    textDecoration:
                                                        amenity.status === 0 ? 'line-through' : 'none',
                                                    }}
                                                >
                                                    {amenity}
                                                </span>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>

                            <div className="col-lg-2 rounded border mt-3" style={{height:"155px"}}>
                                <div className="sticky">
                                    <p style={{fontSize:"14px" , marginTop: "7px", marginLeft:"10px"}}>
                                        <span className="priceDetail">34500</span>
                                        /Adult
                                    </p>
                                    <p style={{fontsize:"8px"}}>*inclusive of of all taxes</p>
                                     <Link to="/AddPassenger">
                                        <button type="submit" className="btn btn-primary pill btn-block shadow-sm " 
                                        style={{padding:"8px", marginLeft:"35px"}}>Book Now</button>
                                        </Link>
                                </div>
                            </div>

                            <div>

                            </div>
                            <div className="col-lg-10 rounded border mt-3">
                                <div className="row mt-4 position-relative ellipsis">
                                    <h5>Day 2: Sightseeing in Leh </h5>
                                    <span className="mx-3" style={{fontWeight:"bold"}}>• {itinerary.day2.locations[0].name}</span>
                                    <p className="mx-4">{itinerary.day2.locations[0].description}</p>
                                
                                    <span className="mx-3" style={{fontWeight:"bold"}}>• {itinerary.day2.locations[1].name}</span>
                                    <p className="mx-4">{itinerary.day2.locations[1].description}</p>
                                
                                </div>
                            </div>
                        
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )
}

export default CityDetails;
