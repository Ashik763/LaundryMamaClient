import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Blog.css';

const Blog = ({data}) => {
    // console.log(data);
    return (
       
        <Card className="cardItem"  style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={data.img}/> */}
        <Card.Body>
          <Card.Title className="title">  
            {data.title}    </Card.Title>
          <Card.Text>
          {data.description}
          </Card.Text>
          <Button> Continue reading ... </Button>
        </Card.Body>
      </Card>
      
    );
};

export default Blog;