import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Directory from "../components/Directory/Directory";
import AdminButton from "../components/AdminButton/AdminButton"



class Home extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="SPEDtrack "
                />
                <Directory />
                <AdminButton /> 
           </div>
           
       )
   } 
}

export default Home;