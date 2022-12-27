import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {BsFillBookmarkFill, BsCheckLg} from 'react-icons/bs'
import {SlUserFollow} from 'react-icons/sl'
import {MdOutlineReportGmailerrorred} from 'react-icons/md'
import {BiBlock} from 'react-icons/bi'



const TimelineVotePost = () => {

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

      const str = "!هل اساميتوس ... ؟"


  return (
    <div className="TimelineVotePost">


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




        <div className="VoteBody">

            <div className="VoteDiv">
                <div className="VotBG" style={{width: `67%`}}></div>
                <BsCheckLg className="CorrectIcon" />
                <p>بطة بطة بطة بطة بطة بطة بطة بطة بطة</p>
                <span>40%</span>
            </div>

            <div className="VoteDiv">
                <div className="VotBG" style={{width: `50%`}}></div>
                <p>ارنب ارنب ارنب ارنب ارنب ارنب ارنب ارنب ارنب</p>
                <span>40%</span>
            </div>


            <div className="VoteDiv">
               <div className="VotBG" style={{width: `25%`}}></div>
                <p>بطيخة بطيخة بطيخة بطيخة بطيخة بطيخة بطيخة</p>
                <span>40%</span>
            </div>

            <div className="VoteDiv">
               <div className="VotBG" style={{width: `5%`}}></div>
                <p>جميع ما سبق</p>
                <span>40%</span>
            </div>

        </div>


        <div className="VoteChoice">
            <button>بطة بطة بطة بطة بطة بطة بطة بطة بطة بطة </button>
            <button>ارنب ارنب ارنب ارنب ارنب ارنب ارنب ارنب </button>
            <button>بطيخة بطيخة بطيخة بطيخة بطيخة بطيخة بطيخة </button>
            <button>جميع ما سبق</button>
        </div>




        <div className="Bottom-R-Post">

          <button>1000 كومنت <FaRegComment className="BotIcon CommentIcon" /></button>
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

export default TimelineVotePost
