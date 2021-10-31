import React from 'react';
import { useParams } from 'react-router';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, description, img } = service;
    const { serviceId } = useParams();
    return (
        <div className="service my-card">
            <div className="img-wrapper">
                <img src={img} alt="" height="304" className="my-card-img" />
            </div>
            <div className="card-body-wrapper">
                <div className="card-txt">
                    <h4>{name}</h4>
                    <p className="">{description}</p>
                </div>
                <div className="details-btn">
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="my-btn">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;