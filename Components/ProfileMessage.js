import { CircularProgressbarWithChildren , buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';
import {AiFillCloseCircle} from 'react-icons/ai'
import { AppContext } from "../Components/contextApi";

import { useContext } from 'react';


const ProfileMessage = () => {

    const prcentage = 66;
    const appContxt = useContext(AppContext);

  return (
    <div className="ProfileMessageContainer">

        <div className='InnerProfileMessage'>


        <p> .البروفايل بتاعك مش كامل .. كمل بروفايلك <Link href="#"> من هنا </Link> عشان تقدر تستخدم الابلكيشن من غير مشاكل </p>

            <div className='CircleProgress'>

                    <CircularProgressbarWithChildren   value={prcentage} background
                                backgroundPadding={6}
                                styles={buildStyles({
                                backgroundColor: "transparent",
                                pathColor: "#FFB431",
                                trailColor: "#15141B",
                                
                                })}> 

                                <div className='InnerCircle'>
                                
                                    <p>%{prcentage}</p>
                                </div>
                    </CircularProgressbarWithChildren>

            </div>

           <AiFillCloseCircle onClick={()=> appContxt.setProfileMessage(false)} className='CloseIcon' />

        </div>
      
    </div>
  )
}

export default ProfileMessage
