import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import BlockCard from "../components/RegEdDash/BlockCard"




class RegED extends React.Component {



   render() {
       return (
           <div>
               <Jumbotron
                heading="Reg Ed"
                />
                <div className="container">

                    <h4>Today's Classes</h4>
                    <BlockCard></BlockCard>
                </div>
                

           </div>
       )
   } 
}

export default RegED;