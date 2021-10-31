import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            console.log(res);
            if(res.data.insertedId){
                alert('Successfully added')
                reset();       
            }
          })
    }
    return (
        <div className="add-service">
            <h2 className="tittle-text my-3 span-color">Please add a new Service</h2>
            <form className="custom-width" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})} placeholder="Package name" />
                <input {...register("description", { required: true})} placeholder="Description" />
                <input {...register("img", { required: true})} placeholder="Image Url" />
                <input type="number" {...register("price")} placeholder="Package Cost:" />
                <input {...register("hotel", { required: true})} placeholder="Hotel Name" />
                <input {...register("transport", { required: true})} placeholder="Transport" />
                <input {...register("excluded", { required: true})} placeholder="Orther information" />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;