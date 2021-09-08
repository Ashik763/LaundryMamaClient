
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AllOrdersDetail = ({allOrders}) => {
    const [state,setState] = useState('');
    // console.log(state);
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ 
        allOrders.state = data.state; 
        setState(data.state);
        // console.log(allOrders);
        fetch('http://localhost:5000/orderWithState',{
            method:'PATCH',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(allOrders)
        })
        .then(response => response.json())
        .then(data => console.log("updated"));
        
    }

    const handleDelete = () => {
        console.log('deleted');
        fetch(`http://localhost:5000/deleteOrder/${allOrders._id}`,{
            method:'DELETE'
            // headers:{'content-type': 'application/json'},
            // body:JSON.stringify(allOrders)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        
        <tr>
            <td>{allOrders.displayName}</td>
            <td>{allOrders.serviceName}</td>
            <td>${allOrders.servicePrice}</td>
            <td className="description" >{allOrders.serviceDescription}</td>
            <td className="payment-type">{allOrders.type}</td>


            <td>   
                <form onChange={handleSubmit(onSubmit)}>
                    <select {...register("state")}>
                        <option value="Pending"> Pending </option>
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                
            </form>
            </td>
            <td> 
            <button onClick={ handleDelete} type="button" className="btn btn-danger">Delete</button>  
             </td>
        </tr>
     
    );
};

export default AllOrdersDetail;