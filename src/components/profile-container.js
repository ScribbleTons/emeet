import React from 'react';
import {Col, Card} from 'react-bootstrap';


const ProfileContainer = function(){
  return <Col lg="3" md="1" className="mt-4 me-2 d-none d-lg-block">
      <Card style={{ width: '18rem' }}>
        <Card.Img
        variant="top"
        src="https://picsum.photos/200/180"
        width={200}
        height={200}
        />
        <Card.Body>
        <Card.Title>Your Details</Card.Title>
        <Card.Text>
        Address: 7793i3ij20e0
        </Card.Text>
        </Card.Body>
      </Card>
        </Col>
}

export default ProfileContainer;
