import React from 'react';
import Slidebar from '../Slidebar/Slidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/makeAdmin',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Successfully Added as Admin!')
        })
    }
    return (
        <div className='d-flex'>
          
            <div className='col-md-3'> 
                <Slidebar/>
            </div>
            <div className='col-md-8 m-5 p-5'>
           <div style={{color:'dodgerblue',fontSize:'150%'}} className='text-center'> Make Admin </div>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="form-group "> */}
            <input
            type='email'
              style={{ width: "80%" }}
              className="form-control  m-2"
              name="email"
              placeholder="Email"
              {...register("email")}
              
            />
            <input style={{ width: "200px"}}type='submit' className="form-control btn btn-info m-2" value='Make Admin' />
            {/* </div> */}
            </form>
            </div>
           
        </div>
    );
};

export default MakeAdmin;