
import './App.css';
import myimage from "./image2.jpg"

import myvideo from "./my video.mp4"
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw"}}>
        <h1 style={{color:"red"}}>IMEN MARZOUGUI</h1>
        <br/>
        
          <img src={myimage} style={{ width: " 400px ", height: "300px"}} />
          <br/>
          <img
            src="/imageInPublic.jpg"
            style={{ width: " 400px ", height: "300px"}}
          />
       
        <br/>
      
      <video width={320} height={240} controls>
        <source src={myvideo} type="video/mp4" />
      </video>
      </div>
      </div>
  
  );
}

export default App;
