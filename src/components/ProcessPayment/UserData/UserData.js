import React from 'react';
import Card from 'react-bootstrap/Card';
const UserData = ({userData}) => {
    console.log(userData)
    return (
        
                <tr>
                  <td>{userData.serviceName}</td>
      <td>${userData.servicePrice}</td>
      <td >{userData.serviceDescription}</td>
      <td>{userData.type}</td>
      <td>{userData.state ? userData.state : 'Pending'}</td>
                </tr>
           
        

    );
};

export default UserData;