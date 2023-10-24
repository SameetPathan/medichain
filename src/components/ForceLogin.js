import {React,useState,useEffect} from 'react'
import MatrixAnimation from './background'

import '../Typewriter.css';

function ForceLogin() {

  const [text, setText] = useState("");
  const messages = ["Welcome To Medi-chain"];

  useEffect(() => {
    let i = 0;
    let timer = setInterval(() => {
      setText(messages[i]);
      i = (i + 1) % messages.length;
    }, 2000);
    return () => clearInterval(timer);
  }, []);


  return (
  <>
  
    <div className="home-page">
      <img 
      className='bg-img'
      src={process.env.PUBLIC_URL + "/bg4.png"} 
      alt="Background" 
      style={{ 
          width: '100%', 
          //height: '500px', 
          objectFit: 'cover' 
        }} 
      />
      {/* <div className="typewriter-text my-div">
        {text}
      </div> */}
    </div>
        
  </>
  )
}

export default ForceLogin