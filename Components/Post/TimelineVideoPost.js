import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineHeart, AiOutlineRetweet} from 'react-icons/ai'
import {BsFillBookmarkFill, BsPlayCircle, BsPauseCircle, BsVolumeUpFill, BsVolumeMuteFill, BsFillPlayCircleFill} from 'react-icons/bs'
import {SlUserFollow} from 'react-icons/sl'
import {MdOutlineReportGmailerrorred} from 'react-icons/md'
import {BiBlock} from 'react-icons/bi'

const TimelineVideoPost = () => {


    const Ref = useRef();
    const [Over, setOver] = useState(false);
    const [Play, setPlay] = useState(false);
    const [Volume, setVolume] = useState(true);
    const [VolumeRange, setVolumeRange] = useState(50);
    const [Duration, setDuration] = useState(0);
    const [SeekRange, setSeekRange] = useState(0);
    const [OrginalSeconds, setOriginalSeconds] = useState(0);
    const [OriginalMinutes, setOriginalMinutes] = useState(0);
    const [Se, setSe] = useState(null);





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


      const str = "Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Osamitos Duck Du"



      const handleVideo = (prp) => {

        if(prp === 'Play'){
            document.getElementById('Vid').play();
            setPlay(true)
        }else if(prp === 'Pause'){
            document.getElementById('Vid').pause();
            setPlay(false)
        }else if(prp === 'MakeMute'){
            document.getElementById('Vid').muted = true;
            setVolume(false)
        }else if(prp === 'MakeVolume'){
            document.getElementById('Vid').muted = false;
            setVolume(true)
        }

      }

      useEffect(()=> {
        if(VolumeRange === '0'){
            document.getElementById('Vid').muted = true
            setVolume(false)
        }else{
            document.getElementById('Vid').muted = false
            var vol = parseInt(VolumeRange);
            document.getElementById('Vid').volume = vol / 100;
            setVolume(true)

        }
      }, [VolumeRange])


      const handleVideoHover = (prs) => {
        if(prs === 'Hover'){
            document.getElementById('Controller').style.animation = '.3s ease-in ControlsUp forwards'
            
            
        }else{
            document.getElementById('Controller').style.animation = '.3s ease-in ControlsDown forwards'
        }
      }


      const handleCalcDuration = () =>{
            const vid = document.getElementById('Vid');
            var minutes = parseInt(vid.duration / 60, 10);
            var seconds = vid.duration % 60;
            setDuration(vid.duration)
            setOriginalSeconds(seconds);
            setOriginalMinutes(minutes);

            
      }


      

      useEffect(()=>{
        document.getElementById('Vid').currentTime = SeekRange;
      }, [SeekRange])



      const handleCalcTime = () => {
        
        setSe(Math.floor(document.getElementById('Vid').currentTime))
        console.log(Se)
      }
      



  return (
    <div className="TimelineVideoPost">
        
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

        

        <div className="VideoDiv">

            <div className="InnerVideoDiv">
                
                {
                    !Play ?  <div onClick={()=>handleVideo('Play')} className="VideoEnded">
                                <BsFillPlayCircleFill className='FillPlay' />
                            </div> : <></>
                }


                <video  ref={Ref} onTimeUpdateCapture={handleCalcTime} onLoadedData={handleCalcDuration} onClick={()=> handleVideo('Pause')} onEnded={()=>setPlay(false)} id="Vid" onMouseEnter={()=> handleVideoHover('Hover')} onMouseLeave={()=> handleVideoHover('Leave')}>
                    <source src={`https://www.w3schools.com/html/mov_bbb.mp4`} type="video/mp4"  />
                </video>

                <div onMouseEnter={()=> handleVideoHover('Hover')} onMouseLeave={()=> handleVideoHover('Leave')} className="VideoControlls" id="Controller">


                    <div className="FirstController">

                        {
                            Play ? <BsPauseCircle  onClick={()=> handleVideo('Pause')} className="PlayIcon" /> : <BsPlayCircle onClick={()=> handleVideo('Play')} className="PlayIcon" />
                        }

                    </div>

                    <div className="SecondController">
                        {
                            Volume ? <BsVolumeUpFill onClick={()=> handleVideo('MakeMute')} className="VolumeIcon" /> : <BsVolumeMuteFill onClick={()=> handleVideo('MakeVolume')} className="VolumeIcon" />
                        }
                        <input type="range" style={{backgroundSize: `${parseInt(VolumeRange)}% 100%`}} min="0" max="100" onChange={(e)=> setVolumeRange(e.target.value)} className="slider"></input>
                    </div>

                    <div className="ThirdController">
                        <input type="range" defaultValue={`0`} value={Se === null ? SeekRange : Se}  min="0" max={Duration}  onChange={(s)=>setSeekRange(s.target.value)} style={{backgroundSize: `${Se === null ? (SeekRange * 100 )  / Duration : (Se * 100 )  / Duration}% 100%`}} className="slider" ></input>
                    </div>


                    <div className="FourthController">
                        <p>{OriginalMinutes < 10 ? `0${OriginalMinutes}` : OriginalMinutes}:{OrginalSeconds < 10 ? `0${Math.floor(OrginalSeconds)}` : Math.floor(OrginalSeconds)}</p>
                    </div>

     

                     

                </div>

            </div>



            
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

export default TimelineVideoPost
