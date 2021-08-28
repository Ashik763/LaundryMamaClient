import React, { useEffect, useMemo } from "react";
import { useContext } from "react";
// import { memo } from 'react';
import { useState } from "react";
import { Table } from "react-bootstrap";

import { UserContext } from "../../App";
import UserData from "../ProcessPayment/UserData/UserData";
import Slidebar from "../Slidebar/Slidebar";

const Dashboard = (props) => {
  // const {phone} = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({});

  const [usersData, setUsesrData] = useState([]);

  useEffect(() => {
    // if(loggedInUser.email){

    // }

    fetch(`http://localhost:5000/userInfo/${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        //   setServiceDetail(data);
        //console.log(data);
        setUsesrData(data);
      });
  }, [loggedInUser.email]);

  return (
    <div  className='d-flex'>
      <div className="col-md-3">
        <Slidebar/>
        
      </div>
         <div style={{height: '100vh'}}   className="col-md-8 bg-light m-5 p-4">  
         <div className='d-flex align-items-center '> Order List: </div>
    <Table variant="light" className="table m-2 " style={{ borderRadius:'5%' }}>
        {
            usersData.length ?   <div>
           
            <thead className="t">
              <tr>
                <th>Service Name</th>
                <th>Service Price</th>
                <th className="text-center">Description</th>
                <th> Payment Type </th>
                <th> State </th>
              </tr>
             
            </thead>
            {usersData.map((data) => (
                <UserData userData={data} />
              ))}
          </div> : 
          <h1 style={{color:'red'}}>  You haven't ordered anything ! </h1> 
        }
    
    </Table>
    </div>
    </div>
  );
};

export default Dashboard;
