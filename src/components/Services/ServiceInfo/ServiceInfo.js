import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import './ServiceInfo.css';


import React from 'react';
import Card from 'react-bootstrap/Card';
// import dry from './dry-clean.jpg';
// import gowns from './wedding gowns.jpg';
// import curtain from './curtain.jpg';

const ServiceInfo = (props) => {
  const {name,description,price,image,_id} = props?.service;
  console.log(image)
  const id = _id;
  const history = useHistory();
  const showDetails = (id) =>{
    const url = `/OrderService/${id}`;
    history.push(url);
    console.log(id);
    const formData = new FormData()  
    formData.append('file', image.img);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description',description);
    // let data2 =data.img;
    console.log(formData.getAll('file'));
    // console.log(service);
    fetch(`http://localhost:5000/OrderService/${id}`,{
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body:formData
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('Your review successfully posted!');
      }
    }  )
  }
    return (
        <Card className="card col-md-3 m-5" style={{ width: '18rem' }}>
        
          <Card.Img className='img-fluid' style={{borderRadius: '5%'}} variant="top" src={`data:image/png;base64,${image?.img}`}/> 

        <Card.Body>
          <Card.Title className='title'>  
            {name}    </Card.Title>
            <Card.Text style={{color:'CadetBlue',fontSize:'30px'}}>
         Price:$  {price}
          </Card.Text>
          <Card.Text>
          {description}
          </Card.Text>
          <Button onClick={() => showDetails(id)}  variant="primary">Take Service</Button>
          {/* <Link to=" /OrderService/${id}"  variant="primary">Take Service</Link> */}
        </Card.Body>

      </Card>
    );
};

export default ServiceInfo;