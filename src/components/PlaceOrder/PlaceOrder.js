import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();

    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => {
                setService(data);
            });
    }, []);

    const onSubmit = data => {
        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            if(result.insertedId){
                alert('Booking Successful!')
                reset();
            }
          
        })
    };
    return (
        <div className="container detail-container">
            <div className="pt-2">
                <img className="detail-img img-fluid" src={service.img} alt="" />
                <div className="text-start">
                    <h4 className="pt-2">{service.name}</h4>
                    <p className="">{service.description}</p>
                    <p><span className="fw-bold">Package Cost: </span> {service.price}</p>
                    <p><span className="fw-bold">Hotel: </span>{service.hotel}</p>
                    <p><span className="fw-bold">Transport: </span>{service.transport}</p>
                    <p><span className="fw-bold">Note: </span>{service.excluded}</p>
                </div>

            </div>
            <div className="p-5">
                <h2 className="span-color">Submit the following information for booking the package</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="Package Name" {...register("package", { required: true, maxLength: 99})} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                    <input placeholder="Phone" defaultValue="" {...register("phone", { required: true })} />
                    <input placeholder="Booking Amount" defaultValue="" {...register("ammount", { required: true })} />
                    <input defaultValue='Pending' {...register("status")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;