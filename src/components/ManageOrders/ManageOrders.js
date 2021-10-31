import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [value, setValue] = useState('');
    useEffect(() => {
        fetch('https://haunted-cemetery-18562.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
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
                        window.alert('successfully Deleted!');
                        const remainingOrders = orders.filter(user => user._id != id);
                        setOrders(remainingOrders);
                    }

                })
        }

    }
    
    const handlePending = id =>{
        const url = `https://haunted-cemetery-18562.herokuapp.com/myOrders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(orders)
                // if (data.modifiedCount > 0) {
                //     setOrders({});
                    
                // }
                
            })
            // id.preventDefault();
            window.location.reload();
        
    }

    return (
        <div className="mb-3 login-container">
            <h2 className="tittle-text my-3">All <span className="span-color">Orders</span></h2>
            <div className="order-container container">
                {
                    orders.map(order => <div key={order._id} className="order-card">
                        <h4><span className="fw-bold">Package Name: </span>{order.package}</h4>
                        <p><span className="fw-bold">Name: </span> {order.name}</p>
                        <p><span className="fw-bold">Email: </span> {order.email}</p>
                        <p><span className="fw-bold">Booking Amount: </span> {order.ammount}</p>
                        <p><span className="fw-bold">Address: </span> {order.address}</p>
                        <p><span className="fw-bold">Phone: </span> {order.phone}</p>
                        <button onClick={() =>handlePending(order._id)} className="my-btn mb-2">{order.status}</button> <br />
                        <button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete Order</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;