import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Slidebar from '../../Slidebar/Slidebar';

const AddService = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const [admin,setAdmin] = useState(false);
  fetch(`http://localhost:5000/checkAdmin/${loggedInUser?.email}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setAdmin(data)})
  


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      const formData = new FormData()  
      formData.append('file', data.img[0]);
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('description', data.description);
      // let data2 =data.img;
      console.log(formData);
      // data2 = {data2,...data}
      // console.log(data2);
      // const data3 = {...data,...data2}
      fetch('http://localhost:5000/addService',{
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(success => {
        if(success){
          alert('Your Service successfully posted!');
        }
      }  )
     
    };
    return (
      <div className='d-flex'> 
        <div className='col-md-3 p-3'>
          <Slidebar/>
          
           </div>
           <div className=' col-md-7'>
          {admin ? 
          
          <div className="">
          <h3 className='text-center' style={{color: 'dodgerblue'}}> Add New Service here!! </h3>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              style={{ width: "200px" }}
              className="form-control  m-2"
              name="name"
              placeholder="Name"
              {...register("name")}
            />
            <textarea
            type="textarea"
              style={{ width: "40%", height: "120px" }}
              className="form-control m-2"
              name="description"
              placeholder="description"
              {...register("description")}
            />
             <input
              style={{ width: "200px" }}
              className="form-control  m-2"
              name="price"
              placeholder="Price"
              {...register("price")}
            />
               <input
               type="file"
              //  onChange={(e) => handleFileChange(e)}
              
              className="form-control  m-2"
              name="img"
              placeholder="Upload your headshot"
              {...register("img")}
            />
        
          </div>

          <input  className="form-control btn btn-info" type="submit" />
        </form>
      </div>
      : <h2 className="text-center" style={{color:'red'}}> This is For ADMIN !</h2>}
          

      </div>
      </div>
       
    );
};

export default AddService;