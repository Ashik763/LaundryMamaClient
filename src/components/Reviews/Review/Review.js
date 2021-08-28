
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../../App';
import './Review.css';

const Review = (props) => {

  // console.log(props);
  
  
  const {name,description,image} = props?.reviewData  ;
  console.log(image);
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser);
 
  

    return (
     

        <Card className="card col-md-3 m-5 d-flex" style={{ width: '18rem' }}>
                  
                   <Card.Img className="img" style={{borderRadius: '30%',height:'200px',width:'70%' }} variant="top" src={`data:image/png;base64,${image.img}`}/> 
                   <Card.Body>
                    <Card.Title>  
                    <h2>{name}  </h2>
                    </Card.Title>
                    <Card.Text>
                      {description}
                    </Card.Text>
                  
                  </Card.Body>
                  
                 </Card>

    

   
    );
};

export default Review;