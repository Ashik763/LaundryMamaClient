import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { set } from 'react-hook-form';
import Slidebar from '../Slidebar/Slidebar';
import AllOrdersDetail from './AllOrdersDetail/AllOrdersDetail';

const ManageOrders = () => {
    const [allOrders,setAllOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(response => response.json())
        .then(data => setAllOrders(data))
    })
    return (
        <div className="d-flex" >
            <div className="col-md-3"> 
            <Slidebar/>
            </div>
            <div style={{height: '100vh'}}   className="col-md-8 bg-light m-4 p-4"> 
          
            <Table variant="light" className="table m-2 " style={{ borderRadius:'5%' }}>
        {
            allOrders.length ?   <div>
           
            <thead className="t">
              <tr>
                <th>Orderer's Name</th>
                <th>Service Name</th>
                <th>Service Price</th>
                <th className="text-center">Description</th>
                <th> Payment Type </th>
                <th> State </th>
              </tr>
             
            </thead>
            {allOrders.map((data) => (

                <AllOrdersDetail allOrders={data} />

              ))
              
              
            }
          </div> : 
          <h1 className='text-center' style={{color:'red'}}>  No order! </h1> 
        }
    
    </Table>

            </div>
          
        </div>
    );
};

export default ManageOrders;