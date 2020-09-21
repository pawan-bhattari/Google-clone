import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import Search from './Search'
function Home() {
    return (
        
        <div className="home" >
             
              <div className="home__header">
              
                <div className="home__headerLeft"> 
                
                {/* About */}
                <Link to="/about"> About </Link>

                {/* Store */}
                
                <Link to="/store"> Store </Link>
                </div>


                <div className="home__headerRight">
                    
                    {/* Gmail */}
                    <Link to="/gmail"> Gmail </Link>

                    {/* Image */}
                    <Link to="/images"> images </Link>

                    {/* Icon */}
                    <AppsIcon/>

                    {/* Avator */}
                    <Avatar/>
                    
                    
                    
                 </div>
                
            </div>


            <div className="home__body">
                
               <img src= "https://i.pinimg.com/474x/a4/ad/85/a4ad85ff5ed299a6fa820d7f88ef4a71.jpg" alt='logo' /> 

               <div className="home__inputContainer"> 
                 <Search hideButtons={false} />
               </div>
               
             </div>
        
        </div>
    )
}

export default Home
