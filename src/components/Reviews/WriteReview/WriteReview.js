import React,{useState} from "react";
import { Nav } from "react-bootstrap";

import { useForm } from "react-hook-form";

const WriteReview = () => {
  // const [review,setReview] = useState({});
 

  const { register, handleSubmit, errors } = useForm();
  // const handleFileChange = (e) => {
  //     console.log(e.target.files[0]);
  //     console.log('hello');
  // }

  const onSubmit = (data) => {
    const formData = new FormData()  
    formData.append('file', data.img[0]);
    formData.append('name', data.name);
    formData.append('description', data.description);
    // let data2 =data.img;
    console.log(formData);
    // data2 = {data2,...data}
    // console.log(data2);
    // const data3 = {...data,...data2}
    fetch('http://localhost:5000/addReview',{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('Your review successfully posted!');
      }
    }  )
  
 
   
  };
 
  return (
    <div>
     
      <div className="m-5">
          <h3 className='text-center' style={{color: 'dodgerblue'}}> Write your REVIEW here!! </h3>
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
              style={{ width: "40%", height: "120px" }}
              className="form-control m-2"
              name="description"
              placeholder="description"
              {...register("description")}
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
    </div>
  );
};

export default WriteReview;
