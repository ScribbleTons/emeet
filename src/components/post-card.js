import React from 'react';
import {Image,Form, Container, Button, Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap';
import CommentCard from './comment-card';

const PostCommentToggler = ({children, eventKey, callback}) => {
  const openOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );
  return (<span className="ms-2 strong" onClick={openOnClick}> {children}</span>)
}



const PostCard = function(){
  const tipPost = () => {
    let ether = prompt("How many Ether do you want tip this post?: ");
    console.log(ether);
  }
  return(
    <Accordion className="my-2 border border-secondary p-2">

        <div className="d-flex justify-content-start ">
          <Image src="https://picsum.photos/200/180" width={40} height={40} roundedCircle />
          <small className="mt-1 mx-2 p-1  text-truncate">
            <strong>
              8yu4983yhin8h983h4i4h983h89y4h984
            </strong>
          </small>
        </div>
        <div className="post-content text-justify p-2 m-1 mb-2">
          Laboris labore dolor est veniam, iudicem summis commodo, admodum labore eiusmod,noster e ut sint deserunt, litteris illustriora sed occaecat, litteris quid culpa admodum fore, quid ullamco a domesticarum.
         </div>

       <div className="d-flex justify-content-between mt-2 w-100 px-2 border border-top-0 border-end-0 border-start-0 border-bottom-2 py-2 bg-light">
         <div>
          4 Ethers
          <span
          className="bg-primary badge text-light rounded py-1 px-2 ms-1 scale-down"
          onClick={tipPost}
          >
          Tip Post
          </span>
         </div>
         <div>
          4
            <PostCommentToggler  eventKey="0">Comments</PostCommentToggler>
         </div>
      </div>
      <Accordion.Collapse eventKey="0">
        <Container className="mt-4">
          <Form className="p-1">
            <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={2}  style={{resize:"none"}} placeholder="This is interesting..." />
            </Form.Group>
            <Button variant="secondary text-white w-100 scale-down">Post Comment</Button>
          </Form>
          <div style={{maxHeight:"250px",overflowY:"auto"}} className="mt-2 no-scrollbar">
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          </div>
        </Container>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default PostCard;
