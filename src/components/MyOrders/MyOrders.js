import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://haunted-cemetery-18562.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => {
                const mydata=data.filter(myorders=>myorders.email==user.email);
                setOrders(mydata)
            });
    }, [])
    const handleDelete = id => {
        const url = `https://haunted-cemetery-18562.herokuapp.com/myOrders/${id}`;
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert('successfully cancled!');
                        const remainingOrders = orders.filter(user => user._id != id);
                        setOrders(remainingOrders);
                    }

                })
        }

    }
    return (
        <div className="mb-3 login-container">
            <h2 className="tittle-text my-3">My <span className="span-color">Orders</span></h2>
            <div className="order-container container">
                {
                    orders.map(order =><div key={order._id} className="order-card">
                        <h4><span className="fw-bold">Package Name: </span>{order.package}</h4>
                        <p><span className="fw-bold">Name: </span> {order.name}</p>
                        <p><span className="fw-bold">Email: </span> {order.email}</p>
                        <p><span className="fw-bold">Booking Amount: </span> {order.ammount}</p>
                        <p><span className="fw-bold">Address: </span> {order.address}</p>
                        <p><span className="fw-bold">Phone: </span> {order.phone}</p>
                        <p><span className="fw-bold">Booking Status: </span> <span className="text-danger fw-bold">{order.status}</span></p>
                        <button onClick={() => handleDelete(order._id)} className="my-btn">Cancle Booking</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;