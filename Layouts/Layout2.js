import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { useContext, useEffect } from "react";
import { AppContext } from "../Components/contextApi";
import ProfileMessage from "../Components/ProfileMessage";
import ViewFullImage from "../Components/Post/ViewFullImage";

const Layout2 = ({children}) => {


    const appContxt = useContext(AppContext);






    return(
        <div className="AuthContainer">
            {appContxt.ImageView ? <ViewFullImage /> : <></>}
        <Navbar />

        <div className="RestBody">
            <Header />
            <div className="InnerRestBody">
                <div className="ChildrenDiv">
                    {appContxt.ProfileMessage ? <ProfileMessage /> : <></>}
                    
                    {children}
                    
                </div>

       
               
            </div>

  
            
        </div>


        
     
         
        
        </div>
    )
}

export default Layout2;