import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Directory from "../components/Directory/Directory";



class Home extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="SPEDtrack "
                />
                <Directory />

           </div>
           
       )
   } 
}

export default Home;