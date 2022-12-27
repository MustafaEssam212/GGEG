import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {SlUserFollow} from 'react-icons/sl'
import {MdOutlineReportGmailerrorred} from 'react-icons/md'
import {BiBlock} from 'react-icons/bi'
import { AppContext } from "../contextApi"


const TimelinePicPost = () => {


  const [Over, setOver] = useState(false);
  const appContxt = useContext(AppContext);

  useEffect(()=>{

    if(document.getElementById('Over') !== null){

      window.addEventListener('mouseup',function(event){
        var pol = document.getElementById('Over');
        if(event.target != pol && event.target.parentNode != pol){
          setOver(false)
        }
      });  

    }



  })


  const handleViewImage = () => {
    appContxt.setImageView(true)
  }

  const str = "Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Du"

  return (
    <div className="TimelinePicPost">
        



        <div className="Top-R-Post">

              <div className="LeftPost">

                <Link className="MainA" href={`#`}>
                  
                  <Image src={'/profile.png'} width={50} height={50}></Image>

                  <div>
                       <Link href={`#`}>OSAMITOS DUCK DUCK <Image className="Verified" src={`/verified.png`} width={18} height={18} title="لاعب موثق"></Image></Link> 
                       <p>50 minutes ago</p>
                  </div>


                </Link>

              </div>

              <div onClick={()=>setOver(!Over)} className="RightPost">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
        </div>



        <div className="Body-R-Post">
            <p>{str}</p>
        </div>


        <div className="PostPic" onClick={handleViewImage}>
            <img src={`/os.webp`} title="Pic" alt="Pic"></img>
        </div>


        <div className="Bottom-R-Post">

          <button>كومينت 1000 <FaRegComment className="BotIcon CommentIcon" /></button>
          <button>ريتويت 1000 <AiOutlineRetweet className="BotIcon" /></button>
          <button>لايك 1000 <AiOutlineHeart className="BotIcon" /></button>

        </div>


        {
          Over ? <div id="Over" className="OverDiv">
          <button>سييڤ البوست <BsFillBookmarkFill className="OverIcon" /></button>
          <div className="LineOver"></div>
          <button>Osamitos فولو <SlUserFollow className="OverIcon" /></button>
          <button>بلغ عنه <MdOutlineReportGmailerrorred className="OverIcon" /></button>
          <button>Osamitos بلوك <BiBlock className="OverIcon" /></button>
         </div> : <></> 
        }

    </div>
  )
}

export default TimelinePicPost
