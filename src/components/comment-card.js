import { Image} from 'react-bootstrap';

const CommentCard = () => {
  return (<div className="my-2 bg-light border border-secondary rounded-2 p-2">
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
    </div>)
}

export default CommentCard;
