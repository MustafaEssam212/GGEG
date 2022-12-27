import Image from "next/image"
import Link from "next/link"
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {SlUserFollow} from 'react-icons/sl'
import {MdOutlineReportGmailerrorred} from 'react-icons/md'
import {BiBlock} from 'react-icons/bi'
import { useState, useEffect } from "react"

const TimelineRegularPost = () => {


  const [Over, setOver] = useState(false);


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

  return (
    <div className="TimeLine-R-Post">
        
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

          <p>asdasdsadddddddddddddddddddddddddddddddddasdasdassssssssssssssssdadasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssad</p>
          <p>Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck s</p>
          <p>اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس اوساميتوس </p>
          <a href={`#`} target="_blank">بطةبطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة  </a>

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

export default TimelineRegularPost
