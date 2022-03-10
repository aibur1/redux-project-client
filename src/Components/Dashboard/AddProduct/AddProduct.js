import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/purchases', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added.');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
        <h2 className="text-center">Add a product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            {/* <input type="number" {...register("price")} /> */}
            <input {...register("image")} placeholder="image url" />
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;