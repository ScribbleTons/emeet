import React from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import PostCard from './post-card'

const PostContainer = function(){
  return <Col lg="5" md="8" className="m-auto mt-4 mt-md-5 shadow-sm">
        <Form className="p-1">
          <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3}  style={{resize:"none"}} placeholder="What's on your mind?" />
          </Form.Group>
          <Button variant="primary scale-down">Publish</Button>
        </Form>
        <div style={{maxHeight:"60vh",overflowY:"auto"}} className="mt-2 no-scrollbar">
        <PostCard  />
        <PostCard  />
        <PostCard  />
        <PostCard  />
        <PostCard  />
        <PostCard  />
        </div>
        </Col>
}

export default PostContainer;
