
import {SiSparkpost} from 'react-icons/si'
import {BiTimer, BiUserVoice} from 'react-icons/bi'
import {AiOutlinePicture, AiOutlineGlobal} from 'react-icons/ai'
import {BsCameraVideo} from 'react-icons/bs'
import {FiUserCheck} from 'react-icons/fi'
import {RiTeamLine, RiSignalTowerLine} from 'react-icons/ri'
import {IoGameControllerOutline} from 'react-icons/io5'
import {GiSharpSmile} from 'react-icons/gi'
import {AiOutlineLock} from 'react-icons/ai'
import {MdOutlineSegment} from 'react-icons/md'

import Image from 'next/image'


const TimelinePoster = () => {
  return (
    <div className="TimelinePoster">
        
            <div className="Filters">
                <button className='ActiveBtn'> <SiSparkpost className='PosterIcon' /> كل البوستات </button>
                <button> <BiTimer className='PosterIcon' /> اخر 24 ساعة </button>
                <button> <BiUserVoice className='PosterIcon' /> الفلورز </button>
                <button> <AiOutlinePicture className='PosterIcon' /> صور </button>
                <button> <BsCameraVideo className='PosterIcon' /> فيديوهات </button>
            </div>


            <div className='PostPost'>

                  <div className='MentionsView'>
                        <p><FiUserCheck className='MentionIcon' /> منشنات جيمرز: <span>15 جيمر</span></p>
                        <p><RiTeamLine className='MentionIcon' /> منشنات فرق: <span>15 فريق</span></p>
                        <p><AiOutlineGlobal className='MentionIcon' /> منشنات نادي: <span>15 نادي</span></p>
                        <p><IoGameControllerOutline className='MentionIcon' /> منشنات لعبة: <span>15 لعبة</span></p>
                  </div>


                  <div className='PostPostingArea'>

                      <div className='LeftPosting'>
                          <Image src={`/profile.png`} width={100} height={100}></Image>
                      </div>

                      <div className='RightPosting'>
                          <p>..بتفكر في ايه يا اساميتوس ؟</p>
                      </div>

                  </div>

                  <div className='LinePostPost'></div>


                  <div className='MentionsBtns'>

                      <button><RiSignalTowerLine className='MentionIcon' /> منشن</button>
                      <button><GiSharpSmile className='MentionIcon' /> حالتك</button>
                      <button><AiOutlineLock className='MentionIcon' /> الخصوصية</button>
                      <button><MdOutlineSegment className='MentionIcon' /> تصويت</button>

                  </div>

            </div>

    </div>
  )
}

export default TimelinePoster
