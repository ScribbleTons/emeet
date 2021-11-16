import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Nav from './components/nav'
import PostContainer from './components/post-container'
import ProfileContainer from './components/profile-container'
import getWeb3 from './getWeb3';


function App() {
  return (
    <div style={{position:"relative"}}>
      <svg className="svg-style" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#adb5bd" fillOpacity="1" d="M0,192L17.1,176C34.3,160,69,128,103,128C137.1,128,171,160,206,165.3C240,171,274,149,309,170.7C342.9,192,377,256,411,272C445.7,288,480,256,514,234.7C548.6,213,583,203,617,170.7C651.4,139,686,85,720,58.7C754.3,32,789,32,823,69.3C857.1,107,891,181,926,197.3C960,213,994,171,1029,176C1062.9,181,1097,235,1131,234.7C1165.7,235,1200,181,1234,160C1268.6,139,1303,149,1337,170.7C1371.4,192,1406,224,1423,240L1440,256L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>
      <Nav />
      <Container className="row m-auto mb-5" style={{zIndex:5}}>
        <ProfileContainer />
        <PostContainer />
      </Container>
    </div>
  );
}

export default App;
