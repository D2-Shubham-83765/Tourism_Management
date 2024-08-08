

const CityCards = ({Cities}) =>{

    

    return (
    <div className="card-group card-group-scroll">
        {Cities.map((city,id) => (
             <div  key={id} className="col-md-3 mb-3">
                <div className="card">
                    <img src={`data:image/jpeg;base64,${city.image}`} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"> <b>{city.packageName}</b></h5>
                        <hr/>
                        <p className="card-text">{city.packageDetails}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">starting at &#8377; {city.startingPrice}</small>
                    </div>
                </div>
            </div>  
        ))}
    </div>
    );
}

export default CityCards;