import React, { useEffect, useState } from 'react';
// import Details from '../../Details/Details';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://haunted-cemetery-18562.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            });
    }, [])

    return (
        <div>
            <h2  id="services" className="tittle-text my-5">Our <span className="span-color">Services</span></h2>
            <div className="service-container container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                
            </div>
        </div>
    );
};

export default Services;