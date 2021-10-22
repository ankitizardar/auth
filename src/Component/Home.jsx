import React from 'react';
import logo from '../background.png';
const Home = () =>{
    return(
        <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+logo+')',
          backgroundSize: "cover",
          height: "100vh",
          
          
        }}
      >
      <h1>Home page</h1>
           </div>
    )

}
export default Home;
// style={{ logo: `url(${logo})` }}